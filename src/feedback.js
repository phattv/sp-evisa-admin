import React from 'react';
import {
  Datagrid,
  DateField,
  EmailField,
  List,
  NumberField,
  TextField,
} from 'admin-on-rest';
import { datetimeLocale } from './constants';

export const FeedbackList = props => (
  <List {...props}>
    <Datagrid>
      <NumberField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="subject" />
      <TextField source="message" />
      <DateField source="created_at" showTime {...datetimeLocale} />
    </Datagrid>
  </List>
);
