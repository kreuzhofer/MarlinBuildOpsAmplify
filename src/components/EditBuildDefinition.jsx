import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import {Route} from 'react-router-dom'
import {
    Header, 
    Input, 
    Segment, 
    Button,
    Form,
    Label,
    Dropdown
  } from 'semantic-ui-react'
import TextareaAutosize from 'react-textarea-autosize';

import * as queries from '../graphql/queries'
import * as mutations from '../graphql/mutations'

import AceEditor from "react-ace";
import 'ace-builds/webpack-resolver'
import("ace-builds/src-min-noconflict/ext-language_tools");

export class EditBuildDefinition extends React.Component {

  constructor(props){
    super(props);
    let id = props.match.params.id ? props.match.params.id : "";
		let isAdmin = props.isAdmin ? props.isAdmin : false;
		console.log("IsAdmin "+isAdmin)
    this.state = {
      id: id,
      name: '',
      firmwareVersionId: undefined,
      sourceTree: '',
      configTree: '',
      printerManufacturer: '',
      printerModel: '',
      printerMainboard: '',
      platformioEnv: '',
      description: '',
      configurationJSON: '{}',
      sharedWithEveryone: false,
      firmwareOptions: [],
		isAdmin: isAdmin,
      printerManufacturerSearch: '',
      printerManufacturerOptions: [],
      printerModelSearch: '',
      printerModelOptions: [],
      printerVariantSearch: '',
      printerVariantOptions: [],
      platformioEnvSearch: '',
      platformioEnvOptions: []
    }
  }

  async fetchData() {
    try {
      const result = await API.graphql(graphqlOperation(queries.getBuildDefinition, {id: this.state.id}));
      const buildDefinition = result.data.getBuildDefinition

      const firmwareResult = await API.graphql(graphqlOperation(queries.listFirmwareVersions))
      const firmwareOptions = firmwareResult.data.listFirmwareVersions.items.map(v=>{return {
        key: v.id,
        text: v.name,
        value: v.id,
        defaultconfigjson: v.defaultConfigJson
      }})
   
      if(buildDefinition.firmwareVersionId)
      {
         // fetch options
         var jsonList = firmwareOptions.filter(f=>f.key === buildDefinition.firmwareVersionId)
         if(jsonList.length>0) // has config json
         { 
            var json = jsonList[0]['defaultconfigjson'];
            console.log(json);
            if(json)
            {
               var jsonObj = JSON.parse(json);
               var printerManufacturerOptions = jsonObj['manufacturers'].map(v=>{
                  return {
                     key: v.name, 
                     text: v.name, 
                     value: v.name,
                     printermodels: v.printerModels
                  };
               });
               this.setState({printerManufacturerOptions: printerManufacturerOptions});
            }
         }
      }
      console.log(buildDefinition.printerManufacturer);
      if(buildDefinition.printerManufacturer && this.state.printerManufacturerOptions)
      {
         var printerModelsList = this.state.printerManufacturerOptions.filter(f=>f.key === buildDefinition.printerManufacturer);
         if(printerModelsList.length>0)
         {
            var printerModels = printerModelsList[0]['printermodels'].map(v=>{
               return {
                  key: v.name,
                  text: v.name,
                  value: v.name,
                  variants: v.variants
               }
            });
            this.setState({printerModelOptions: printerModels});
         }
      }

      console.log(buildDefinition.printerModel);
      if(buildDefinition.printerModel && this.state.printerModelOptions)
      {
         var printerVariantsList = this.state.printerModelOptions.filter(f=>f.key === buildDefinition.printerModel);
         if(printerVariantsList.length>0)
         {
            var printerVariants = printerVariantsList[0]['variants'].map(v=>{
               return {
                  key: v.name,
                  text: v.name,
                  value: v.name
               }
            });
            this.setState({printerVariantOptions: printerVariants});
         }
      }

      this.setState({
        id: buildDefinition.id,
        name: buildDefinition.name,
        firmwareVersionId: buildDefinition.firmwareVersionId,
        sourceTree: buildDefinition.sourceTree,
        configTree: buildDefinition.configTree,
        printerManufacturer: buildDefinition.printerManufacturer,
        printerManufacturerSearch: buildDefinition.printerManufacturer,
        printerModel: buildDefinition.printerModel,
        printerModelSearch: buildDefinition.printerModel,
        printerMainboard: buildDefinition.printerMainboard,
        platformioEnv: buildDefinition.platformioEnv,
        description: buildDefinition.description,
        configurationJSON: buildDefinition.configurationJSON,
        sharedWithEveryone: buildDefinition.groupsCanAccess ? buildDefinition.groupsCanAccess.includes("Everyone") : undefined,
        firmwareOptions: firmwareOptions
      });
    } catch (error) {
      console.error(error);
    }
  }

  async componentDidMount()
  {
      if(this.state.id)
          await this.fetchData();
  }

  printerModelsByManufacturer(value)
  {
      if(!value)
      {
         return [];
      }
      var printerManuOptions = this.printerManufacturerOptions.filter(f=>f.value === value);
      if(printerManuOptions.length===0)
      {
         return [];
      }
      var firstPrinterManuOption = printerManuOptions[0];
      console.log(firstPrinterManuOption);
      var printerModelsFiltered = firstPrinterManuOption.printermodels.map(v=>{
      return {
         key: v.name, 
         text: v.name, 
         value: v.name,
         printervariants: v.variants
         };            
      })
      return printerModelsFiltered;
  }
  
  handleSubmit = async(event) => {
      event.preventDefault();
      if(this.state.name === '')
      {
        alert("Name has to be filled")
        return false
      }
      let groupsCanAccess = this.state.sharedWithEveryone ? ["Everyone"] : [];
      let result = await API.graphql(graphqlOperation(mutations.updateBuildDefinition, {input: {
        id:this.state.id, 
        name: this.state.name, 
        firmwareVersionId: this.state.firmwareVersionId,
        sourceTree: this.state.sourceTree,
        configTree: this.state.configTree,
        printerManufacturer: this.state.printerManufacturer ? this.state.printerManufacturer : this.state.printerManufacturerSearch,
        printerModel: this.state.printerModel, 
        printerMainboard: this.state.printerMainboard, 
        platformioEnv:this.state.platformioEnv, 
        description: this.state.description, 
        configurationJSON: this.state.configurationJSON, 
        groupsCanAccess: groupsCanAccess
      }}));
      if(result)
        this.props.history.push('/BuildDefinition');
      else
        console.error(result);
    }    

  render() { return (
      <Segment>
      <Form>
      <Header as='h3'>Edit build definition</Header>
      <Input
          type='text'
          label='Build Definition Name'
          placeholder='Build Definition Name'
          name='name'
          value={this.state.name}
          onChange={(e) => this.setState({name: e.target.value})}/>
      <br/>
      <Label>Firmware version</Label>
      <Dropdown
        placeholder='select firmware version'
        selection
        clearable
        options={this.state.firmwareOptions}
        value={this.state.firmwareVersionId}
        onChange={(e, {value}) => this.setState({firmwareVersionId: value})}/>
      <br/>
      
      { this.state.firmwareVersionId ? null : <>
      <Input
          label='Source tree URL'
          type='text'
          placeholder='Source tree URL'
          name='sourceTree'
          value={this.state.sourceTree}
          onChange={(e) => this.setState({sourceTree: e.target.value})}
          disabled={this.state.firmwareVersionId?true:false}
      /><br/>
      <Input
          type='text'
          label='Config tree URL'
          placeholder='Config tree URL'
          name='configTree'
          value={this.state.configTree}
          onChange={(e) => this.setState({configTree: e.target.value})}
          disabled={this.state.firmwareVersionId?true:false}
      /><br/> </> }

      <Label>Printer Manufacturer</Label>
      <Dropdown
        clearable
        onChange={(e, { searchQuery, value}) => {
          this.setState({printerManufacturerSearch: searchQuery, printerManufacturer: value});
          // filter subsequent list accordingly
          console.log(value);
          this.setState({printerModelOptions: this.printerModelsByManufacturer(value)});
        }}
        onSearchChange={(e, {searchQuery}) => this.setState({printerManufacturerSearch: searchQuery})}
        options={this.state.printerManufacturerOptions}
        placeholder='Select printer manufacturer'
        name='printerManufacturer'
        id='printerManufacturer'
        search
        searchQuery={this.state.printerManufacturerSearch}
        selection
        value={this.state.printerManufacturer}
      />      
      
      <br/>

      <Label>Printer Model</Label>
      <Dropdown
        clearable
        onChange={(e, { searchQuery, value}) => {
          this.setState({printerModelSearch: searchQuery, printerModel: value});
          // filter subsequent list accordingly
        }}
        onSearchChange={(e, {searchQuery}) => this.setState({printerModelSearch: searchQuery})}
        options={this.state.printerModelOptions}
        placeholder='Select printer model'
        name='printerModel'
        search
        searchQuery={this.state.printerModelSearch}
        selection
        value={this.state.printerModel}
      />

      <br/>
      <Input
          type='text'
          label='Printer mainboard type'
          placeholder='Printer mainboard type'
          name='printerMainboard'
          value={this.state.printerMainboard}
          onChange={(e) => this.setState({printerMainboard: e.target.value})}
      /><br/>
      <Input
          type='text'
          label='Platformio Environment'
          placeholder='Platformio Environment'
          name='platformioEnv'
          value={this.state.platformioEnv}
          onChange={(e) => this.setState({platformioEnv: e.target.value})}
      /><br/>        
      <Label>Description</Label>
      <TextareaAutosize
          label='Description'
          placeholder='Description'
          name='description'
          value={this.state.description}
          onChange={(e) => this.setState({description: e.target.value})}
      /><br/>
      <Label>Config JSON</Label>
      <AceEditor
        mode="json"
        theme="github"
        value={this.state.configurationJSON}
        onChange={(e) => this.setState({configurationJSON: e})}
        name="UNIQUE_ID_OF_DIV"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        editorProps={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
          }}
      /><br/>      
			{ this.state.isAdmin ? <>
			<Input 
          type='Checkbox'
          label='Shared with everyone'
          name='sharedWithEveryone'
          checked={this.state.sharedWithEveryone}
          onChange={(e)=>this.setState({sharedWithEveryone: e.target.checked})}
          >
      </Input><br/><br/>
			</> : null }
      <Button
          content='Save'
          onClick={(e)=>this.handleSubmit(e)}
      />
      <Route render={({history}) => (
          <Button onClick={()=>history.push('/BuildDefinition')}>     
              Cancel            
          </Button>
      )}/>        
      </Form>
      </Segment>
      );
  }
}