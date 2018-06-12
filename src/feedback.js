import React from 'react';
import {
  Datagrid,
  EmailField,
  List,
  NumberField,
  Responsive,
  SimpleList,
  TextField,
} from 'admin-on-rest';
import { CustomDateTimeField } from './components';

export const FeedbackList = props => (
  <List {...props}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.email}
          secondaryText={record => record.subject}
        />
      }
      medium={
        <Datagrid>
          <NumberField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <TextField source="subject" />
          <TextField source="message" />
          <CustomDateTimeField source="created_at" hideLabel />
        </Datagrid>
      }
    />
  </List>
);
