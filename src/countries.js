import React from 'react';
import {
  Datagrid,
  Filter,
  List,
  NumberField,
  TextField,
  TextInput,
} from 'admin-on-rest';

export const CountryList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="iso" />
      <TextField source="name" />
      <NumberField source="phonecode" />
    </Datagrid>
  </List>
);