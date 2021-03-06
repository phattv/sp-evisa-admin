import React from 'react';
import {
  Datagrid,
  EmailField,
  List,
  NumberField,
  ReferenceField,
  Responsive,
  SimpleList,
  TextField,
} from 'admin-on-rest';
import { CustomDateField, CustomDateTimeField } from './components';

export const UserList = props => (
  <List {...props}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => (
            <span>
              Email: {record.email}
              <br />
              Gender: {record.gender}
              <br />
              Phone: {record.phone}
            </span>
          )}
        />
      }
      medium={
        <Datagrid>
          <NumberField source="id" />
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
          <CustomDateField source="passport_expiry" hideLabel />
          <CustomDateField source="birthday" hideLabel />
          <CustomDateTimeField source="created_at" hideLabel />
        </Datagrid>
      }
    />
  </List>
);
