#!/bin/bash -x
exec > /tmp/part-001.log 2>&1

# get ami and instance tags to environment variables
# see https://medium.com/@seb.nyberg/passing-tags-as-environment-variables-to-an-ec2-instance-12b64e69891e
REGION=`curl -s http://169.254.169.254/latest/dynamic/instance-identity/document|grep region|awk -F\" '{print $4}'`
INSTANCE_ID=$(curl --silent http://169.254.169.254/latest/meta-data/instance-id)

export_statement=$(aws ec2 describe-tags --region "$REGION" \
                        --filters "Name=resource-id,Values=$INSTANCE_ID" \
                        --query 'Tags[?!contains(Key, `:`)].[Key,Value]' \
                        --output text | \
                        sed -E 's/^([^\s\t]+)[\s\t]+([^\n]+)$/export \1="\2"/g')
eval $export_statement

# export instance info
export INSTANCE_ID
export REGION

cd /tmp
python3 -c "$(curl -fsSL https://marlinbuildagentscripts.s3.eu-central-1.amazonaws.com/marlin_default_config_enumerator.py)"
if [ $? -ne 0 ]; then
    echo "Python borked it with exit code $?"
    aws --region "$REGION" dynamodb update-item --table-name "$FIRMWAREVERSIONTABLENAME" --key '{"id":{"S":"'$FIRMWAREVERSIONID'"}}' --update-expression 'SET parseJobState=:s' --expression-attribute-values '{":s":{"S":"FAILED"}}'
fi
aws s3 cp /tmp/part-001.log s3://$BUILDARTIFACTSBUCKET/public/$FIRMWAREVERSIONID/logfile.txt
shutdown now