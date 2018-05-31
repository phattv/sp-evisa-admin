import React from 'react';
import {
  Datagrid,
  EmailField,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from 'admin-on-rest';
import { CustomDateField, CustomDateTimeField } from './components';

export const UserList = props => (
  <List {...props}>
    <Datagrid>
      <NumberField source="id" />
      <EmailField source="email" />
      <TextField source="name" />
      <TextField source="gender" />
      <TextField source="phone" />
      <ReferenceField label="Country" source="country_id" reference="countries">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="passport" />
      <CustomDateField source="passport_expiry" />
      <CustomDateField source="birthday" />
      <CustomDateTimeField source="created_at" hideLabel />
    </Datagrid>
  </List>
);
