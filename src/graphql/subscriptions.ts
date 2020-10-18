/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String, $editors: String) {
    onCreateTodo(owner: $owner, editors: $editors) {
      id
      text
      deadline
      done
      owner
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String, $editors: String) {
    onUpdateTodo(owner: $owner, editors: $editors) {
      id
      text
      deadline
      done
      owner
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String, $editors: String) {
    onDeleteTodo(owner: $owner, editors: $editors) {
      id
      text
      deadline
      done
      owner
      editors
      createdAt
      updatedAt
    }
  }
`;
