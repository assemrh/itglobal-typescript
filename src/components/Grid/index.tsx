import React from 'react';
import { GridRow} from './Grid.styles'
import {Table } from 'react-bootstrap';
import { User } from '../../Types/Types';

type Props = {
    users: User[];
  }

 const Grid: React.FC<Props> = ({ users }) => (
<Table striped bordered hover className="rounded">
    <thead>
        <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
        </tr>
    </thead>

  <tbody>
  {users.map(user => (
        <>
            <tr key={user.id} className="bg-light " >
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
        </>
      ))}
  </tbody>
  </Table>
    );


export default Grid


/*
  Styles
import { Wrapper, Content } from './Grid.styles';
// Types
type Props = {
  header: string;
}

const Grid: React.FC<Props> = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

export default Grid;*/
