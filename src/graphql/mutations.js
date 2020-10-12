/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBuildDefinition = /* GraphQL */ `
  mutation CreateBuildDefinition(
    $input: CreateBuildDefinitionInput!
    $condition: ModelBuildDefinitionConditionInput
  ) {
    createBuildDefinition(input: $input, condition: $condition) {
      id
      name
      sourceTree
      configTree
      printerManufacturer
      printerModel
      printerMainboard
      description
      configurationJSON
      buildJobs {
        items {
          id
          status
          startTimestamp
          endTimestamp
          message
          log
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateBuildDefinition = /* GraphQL */ `
  mutation UpdateBuildDefinition(
    $input: UpdateBuildDefinitionInput!
    $condition: ModelBuildDefinitionConditionInput
  ) {
    updateBuildDefinition(input: $input, condition: $condition) {
      id
      name
      sourceTree
      configTree
      printerManufacturer
      printerModel
      printerMainboard
      description
      configurationJSON
      buildJobs {
        items {
          id
          status
          startTimestamp
          endTimestamp
          message
          log
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteBuildDefinition = /* GraphQL */ `
  mutation DeleteBuildDefinition(
    $input: DeleteBuildDefinitionInput!
    $condition: ModelBuildDefinitionConditionInput
  ) {
    deleteBuildDefinition(input: $input, condition: $condition) {
      id
      name
      sourceTree
      configTree
      printerManufacturer
      printerModel
      printerMainboard
      description
      configurationJSON
      buildJobs {
        items {
          id
          status
          startTimestamp
          endTimestamp
          message
          log
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createBuildJob = /* GraphQL */ `
  mutation CreateBuildJob(
    $input: CreateBuildJobInput!
    $condition: ModelBuildJobConditionInput
  ) {
    createBuildJob(input: $input, condition: $condition) {
      id
      buildDefinition {
        id
        name
        sourceTree
        configTree
        printerManufacturer
        printerModel
        printerMainboard
        description
        configurationJSON
        buildJobs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      status
      startTimestamp
      endTimestamp
      message
      log
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateBuildJob = /* GraphQL */ `
  mutation UpdateBuildJob(
    $input: UpdateBuildJobInput!
    $condition: ModelBuildJobConditionInput
  ) {
    updateBuildJob(input: $input, condition: $condition) {
      id
      buildDefinition {
        id
        name
        sourceTree
        configTree
        printerManufacturer
        printerModel
        printerMainboard
        description
        configurationJSON
        buildJobs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      status
      startTimestamp
      endTimestamp
      message
      log
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteBuildJob = /* GraphQL */ `
  mutation DeleteBuildJob(
    $input: DeleteBuildJobInput!
    $condition: ModelBuildJobConditionInput
  ) {
    deleteBuildJob(input: $input, condition: $condition) {
      id
      buildDefinition {
        id
        name
        sourceTree
        configTree
        printerManufacturer
        printerModel
        printerMainboard
        description
        configurationJSON
        buildJobs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      status
      startTimestamp
      endTimestamp
      message
      log
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPatron = /* GraphQL */ `
  mutation CreatePatron(
    $input: CreatePatronInput!
    $condition: ModelPatronConditionInput
  ) {
    createPatron(input: $input, condition: $condition) {
      id
      email
      name
      pledge
      patron_status
      will_pay_amount_cents
      last_event
      createdAt
      updatedAt
    }
  }
`;
export const updatePatron = /* GraphQL */ `
  mutation UpdatePatron(
    $input: UpdatePatronInput!
    $condition: ModelPatronConditionInput
  ) {
    updatePatron(input: $input, condition: $condition) {
      id
      email
      name
      pledge
      patron_status
      will_pay_amount_cents
      last_event
      createdAt
      updatedAt
    }
  }
`;
export const deletePatron = /* GraphQL */ `
  mutation DeletePatron(
    $input: DeletePatronInput!
    $condition: ModelPatronConditionInput
  ) {
    deletePatron(input: $input, condition: $condition) {
      id
      email
      name
      pledge
      patron_status
      will_pay_amount_cents
      last_event
      createdAt
      updatedAt
    }
  }
`;
