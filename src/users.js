import React from 'react';
import {
  Datagrid,
  DateField,
  EmailField,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from 'admin-on-rest';
import { datetimeLocale } from './constants';

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
      <DateField source="passport_expiry" {...datetimeLocale} />
      <DateField source="birthday" {...datetimeLocale} />
      <DateField source="created_at" showTime {...datetimeLocale} />
    </Datagrid>
  </List>
);
