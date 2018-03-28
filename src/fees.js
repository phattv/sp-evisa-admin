import React from 'react';
import { Datagrid, EmailField, List, TextField } from 'admin-on-rest';

export const FeeList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="iso" />
      <TextField source="name" />
      <TextField source="type" />
      <TextField source="one_month_single" />
      <TextField source="one_month_multiple" />
      <TextField source="three_month_single" />
      <TextField source="three_month_multiple" />
      <TextField source="six_month_single" />
      <TextField source="six_month_multiple" />
    </Datagrid>
  </List>
);
