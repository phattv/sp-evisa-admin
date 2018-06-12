import React from 'react';
import {
  Datagrid,
  Edit,
  EditButton,
  Filter,
  List,
  NumberField,
  Responsive,
  SimpleForm,
  SimpleList,
  TextField,
  TextInput,
} from 'admin-on-rest';
import { pageSize } from './constants';

const CountryFilter = props => (
  <Filter {...props}>
    <TextInput label="Country Name" source="query" alwaysOn />
  </Filter>
);

const CountryList = props => (
  <List {...props} filters={<CountryFilter />} perPage={pageSize}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => (
            <span>
              ISO: {record.iso} <br /> Phone code: {record.phonecode}
            </span>
          )}
        />
      }
      medium={
        <Datagrid>
          <NumberField source="id" />
          <TextField source="iso" />
          <TextField source="name" />
          <NumberField source="phonecode" />
          <EditButton label="View" />
        </Datagrid>
      }
    />
  </List>
);

const CountryEdit = props => (
  <Edit title={'Country (view only)'} {...props} disabled>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="iso" />
      <TextField source="name" />
      <TextField source="phonecode" />
    </SimpleForm>
  </Edit>
);

export { CountryList, CountryEdit };
