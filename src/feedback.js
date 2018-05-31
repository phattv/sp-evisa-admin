import React from 'react';
import {
  Datagrid,
  EmailField,
  List,
  NumberField,
  TextField,
} from 'admin-on-rest';
import { CustomDateTimeField } from './components';

export const FeedbackList = props => (
  <List {...props}>
    <Datagrid>
      <NumberField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="subject" />
      <TextField source="message" />
      <CustomDateTimeField source="created_at" hideLabel />
    </Datagrid>
  </List>
);
