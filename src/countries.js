import React from 'react';
import {
  Datagrid,
  EmailField,
  List,
  TextField,
  Filter,
  TextInput,
} from 'admin-on-rest';

export const CountryList = props => (
  <List title="All countries" {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="iso" />
      <TextField source="name" />
      <EmailField source="phonecode" />
    </Datagrid>
  </List>
);