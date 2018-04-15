import React from 'react';
import {
  Datagrid,
  List,
  TextField,
  EmailField,
} from 'admin-on-rest';

export const FeedbackList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="subject" />
      <TextField source="message" />
    </Datagrid>
  </List>
);