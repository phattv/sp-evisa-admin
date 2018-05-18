import React from 'react';
import {
  Datagrid,
  List,
  TextField,
  ReferenceField,
  EmailField,
  DateField,
} from 'admin-on-rest';

export const UserList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <EmailField source="email" />
      <TextField source="name" />
      <TextField source="gender" />
      <TextField source="phone" />
      <ReferenceField
        label="Country"
        source="country_id"
        reference="countries"
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField source="passport" />
      <TextField source="passport_expiry" />
      <DateField source="birthday" />
      <DateField source="created_at" showTime />
    </Datagrid>
  </List>
);