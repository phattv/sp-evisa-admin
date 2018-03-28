import React from 'react';
import { Datagrid, EmailField, List, TextField } from 'admin-on-rest';

export const UserList = (props) => (
  <List title="All users" {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);
