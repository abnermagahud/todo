
import {
  gql
} from "@apollo/client";


const TODOLIST_QUERY = gql`
  query getAllTodoList {
      todolist {
        status
        created_at
        id
        title
        updated_at
      }
    }
`;

const CREATE_TODO_QUERY = gql`
  mutation CreateTodoList($title: String, $status: Int = 0) {
  insert_todolist_one(object: {title: $title, status: $status}) {
    id
    title
    status
    created_at
  }
}
`;

const DELETE_QUERY = gql`
  mutation DeleteTodoList($id: Int) {
    delete_todolist(
      where: {
        id: {
          _eq: $id
        }
      }
    ) {
    affected_rows
  }
}
`;


const UPDATE_STATUS_QUERY = gql`
  mutation UpdateTodoListStatus($id: Int) {
    update_todolist(where: {id: {_eq: $id}}, _set: {status: 1}) {
      affected_rows
    }
  }
`;

export {TODOLIST_QUERY,CREATE_TODO_QUERY,DELETE_QUERY,UPDATE_STATUS_QUERY};