import React from 'react';
import { Button, Row, Col, Popconfirm } from 'antd';
import { Typography } from 'antd';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation
} from "@apollo/client";

import {TODOLIST_QUERY,CREATE_TODO_QUERY,DELETE_QUERY,UPDATE_STATUS_QUERY} from './queries';

const { Title } = Typography;

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  cache: new InMemoryCache()
});


function ToDos() {
  const { loading, error, data } = useQuery(TODOLIST_QUERY);

  const [deleteTodo] = useMutation(DELETE_QUERY);
  const [updateTodoStatus] = useMutation(UPDATE_STATUS_QUERY);

  const text = 'Are you sure to delete this task?';

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.todolist.map(({ id, title, status }) => (
    <div key={id}>
      <ul>
        <li className="dashed">
        <Title className={status ? 'done' : 'title'} level={5}>{title}</Title>
        <Row justify="start">
          <Col className="gutter-row" span={status ? 3 : 5}>
              
              <Button type="primary" size="small" onClick={() => {
                if(status===0){
                  updateTodoStatus({ variables: { id: id } });
                  window.location.reload();
                }
              }}>

              {status ? 'Done' : 'Mark as done'}
                
              </Button>
            
          </Col>

          <Col className="gutter-row" span={2}>

            <Popconfirm
              placement="bottomRight"
              title={text}
              onConfirm={() => {
              deleteTodo({ variables: { id: id } });
                window.location.reload();
              }}
            okText="Yes"
              cancelText="No"
            >
            <Button type="primary" danger size="small">
              Delete
            </Button>
            </Popconfirm>
          </Col>
          </Row>
        </li>
      </ul>
    </div>
  ));
}


function Add()
{
  let input;

  const [createTodo] = useMutation(CREATE_TODO_QUERY);

  return(
    <Row>
      <Col span={18} push={6}>
      <form onSubmit={e => {
          e.preventDefault();
          createTodo({ variables: { title: input.value } });
          input.value = '';
          window.location.reload();
        }}>
      <ul>
       <li>
        <Row justify="start">
          <Col className="gutter-row" span={11}>
            <input type="text" placeholder="Write something to do" ref={node =>{input=node;}} />
          </Col>
          <Col className="gutter-row">
            <Button type="primary" htmlType="submit">
                Add
            </Button> 
          </Col>
        </Row>
        </li>
      </ul>
      </form>
      </Col>
    </Row>
  );
}

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="center">
        <Title>Todo</Title>
        <Add/>
        <ToDos/>
      </div>
    </ApolloProvider>
  );
}

export default App;
