/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBuildDefinition = /* GraphQL */ `
  subscription OnCreateBuildDefinition {
    onCreateBuildDefinition {
      id
      name
      firmwareVersionId
      sourceTree
      configTree
      printerManufacturer
      printerModel
      printerMainboard
      selectedMainboard
      platformioEnv
      description
      notes
      configurationJSON
      owner
      groupsCanAccess
      createdAt
      updatedAt
      buildJobs {
        items {
          id
          buildDefinitionID
          jobState
          startTime
          endTime
          flash_bytes_used
          flash_bytes_max
          flash_percent_used
          message
          log
          firmwareVersionId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      firmwareVersion {
        id
        owner
        name
        sourceTree
        configTree
        parseJobState
        defaultConfigJson
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateBuildDefinition = /* GraphQL */ `
  subscription OnUpdateBuildDefinition {
    onUpdateBuildDefinition {
      id
      name
      firmwareVersionId
      sourceTree
      configTree
      printerManufacturer
      printerModel
      printerMainboard
      selectedMainboard
      platformioEnv
      description
      notes
      configurationJSON
      owner
      groupsCanAccess
      createdAt
      updatedAt
      buildJobs {
        items {
          id
          buildDefinitionID
          jobState
          startTime
          endTime
          flash_bytes_used
          flash_bytes_max
          flash_percent_used
          message
          log
          firmwareVersionId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      firmwareVersion {
        id
        owner
        name
        sourceTree
        configTree
        parseJobState
        defaultConfigJson
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteBuildDefinition = /* GraphQL */ `
  subscription OnDeleteBuildDefinition {
    onDeleteBuildDefinition {
      id
      name
      firmwareVersionId
      sourceTree
      configTree
      printerManufacturer
      printerModel
      printerMainboard
      selectedMainboard
      platformioEnv
      description
      notes
      configurationJSON
      owner
      groupsCanAccess
      createdAt
      updatedAt
      buildJobs {
        items {
          id
          buildDefinitionID
          jobState
          startTime
          endTime
          flash_bytes_used
          flash_bytes_max
          flash_percent_used
          message
          log
          firmwareVersionId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      firmwareVersion {
        id
        owner
        name
        sourceTree
        configTree
        parseJobState
        defaultConfigJson
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateBuildJob = /* GraphQL */ `
  subscription OnCreateBuildJob {
    onCreateBuildJob {
      id
      buildDefinitionID
      jobState
      startTime
      endTime
      flash_bytes_used
      flash_bytes_max
      flash_percent_used
      message
      log
      firmwareVersionId
      owner
      createdAt
      updatedAt
      buildJobArtifacts {
        items {
          id
          buildJobID
          artifactName
          artifactFileName
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      firmwareVersion {
        id
        owner
        name
        sourceTree
        configTree
        parseJobState
        defaultConfigJson
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateBuildJob = /* GraphQL */ `
  subscription OnUpdateBuildJob {
    onUpdateBuildJob {
      id
      buildDefinitionID
      jobState
      startTime
      endTime
      flash_bytes_used
      flash_bytes_max
      flash_percent_used
      message
      log
      firmwareVersionId
      owner
      createdAt
      updatedAt
      buildJobArtifacts {
        items {
          id
          buildJobID
          artifactName
          artifactFileName
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      firmwareVersion {
        id
        owner
        name
        sourceTree
        configTree
        parseJobState
        defaultConfigJson
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteBuildJob = /* GraphQL */ `
  subscription OnDeleteBuildJob {
    onDeleteBuildJob {
      id
      buildDefinitionID
      jobState
      startTime
      endTime
      flash_bytes_used
      flash_bytes_max
      flash_percent_used
      message
      log
      firmwareVersionId
      owner
      createdAt
      updatedAt
      buildJobArtifacts {
        items {
          id
          buildJobID
          artifactName
          artifactFileName
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      firmwareVersion {
        id
        owner
        name
        sourceTree
        configTree
        parseJobState
        defaultConfigJson
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateBuildJobArtifact = /* GraphQL */ `
  subscription OnCreateBuildJobArtifact {
    onCreateBuildJobArtifact {
      id
      buildJobID
      artifactName
      artifactFileName
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBuildJobArtifact = /* GraphQL */ `
  subscription OnUpdateBuildJobArtifact {
    onUpdateBuildJobArtifact {
      id
      buildJobID
      artifactName
      artifactFileName
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBuildJobArtifact = /* GraphQL */ `
  subscription OnDeleteBuildJobArtifact {
    onDeleteBuildJobArtifact {
      id
      buildJobID
      artifactName
      artifactFileName
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFirmwareVersion = /* GraphQL */ `
  subscription OnCreateFirmwareVersion {
    onCreateFirmwareVersion {
      id
      owner
      name
      sourceTree
      configTree
      parseJobState
      defaultConfigJson
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFirmwareVersion = /* GraphQL */ `
  subscription OnUpdateFirmwareVersion {
    onUpdateFirmwareVersion {
      id
      owner
      name
      sourceTree
      configTree
      parseJobState
      defaultConfigJson
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFirmwareVersion = /* GraphQL */ `
  subscription OnDeleteFirmwareVersion {
    onDeleteFirmwareVersion {
      id
      owner
      name
      sourceTree
      configTree
      parseJobState
      defaultConfigJson
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMembershipException = /* GraphQL */ `
  subscription OnCreateMembershipException {
    onCreateMembershipException {
      id
      owner
      email
      patronLevel
      roleOverride
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMembershipException = /* GraphQL */ `
  subscription OnUpdateMembershipException {
    onUpdateMembershipException {
      id
      owner
      email
      patronLevel
      roleOverride
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMembershipException = /* GraphQL */ `
  subscription OnDeleteMembershipException {
    onDeleteMembershipException {
      id
      owner
      email
      patronLevel
      roleOverride
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile {
    onCreateUserProfile {
      id
      owner
      buildCredits
      profileImageUrl
      alias
      markedForDisabling
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile {
    onUpdateUserProfile {
      id
      owner
      buildCredits
      profileImageUrl
      alias
      markedForDisabling
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile {
    onDeleteUserProfile {
      id
      owner
      buildCredits
      profileImageUrl
      alias
      markedForDisabling
      createdAt
      updatedAt
    }
  }
`;
