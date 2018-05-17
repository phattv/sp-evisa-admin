import React from 'react';
import {
  Datagrid,
  List,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
  FunctionField,
  Edit,
  SimpleForm,
  DisabledInput,
  SelectInput,
  EditButton,
  Filter,
  TextInput,
} from 'admin-on-rest';

const OrderFilter = (props) => (
  <Filter {...props}>
    <SelectInput
      source="status"
      choices={[
        { id: 'unpaid', name: 'unpaid' },
        { id: 'paid', name: 'paid' },
        { id: 'ignore', name: 'ignore' },
      ]}
    />
  </Filter>
);

const OrderList = props => (
  <List {...props} filters={<OrderFilter />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="price" />
      <TextField source="status" />
      <ReferenceField label="Country" source="country_id" reference="countries">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="quantity" />
      <TextField source="type" />
      <TextField source="purpose" />
      <TextField source="processing_time" />
      <TextField source="airport" />
      <DateField source="arrival_date" />
      <DateField source="departure_date" />
      <TextField source="airport_fast_track" />
      <TextField source="car_pick_up" />
      <BooleanField source="private_visa_letter" />
      <FunctionField
        label="Contact"
        render={record =>
          record && record.contact && `Name: ${record.contact.name}\nEmail: ${
            record.contact.email
          }\nPhone: ${record.contact.phone}`
        }
        style={{
          whiteSpace: 'pre-line',
        }}
      />
      <FunctionField
        label="Applicants"
        render={record => {
          const applicants = record.applicants;
          let contactString = '';
          if (applicants) {
            Object.keys(applicants).forEach(key => {
              contactString += `APPLICANT ${parseInt(key) + 1}: Name: ${
                applicants[key].name
                } - Gender: ${applicants[key].gender} - Birthday: ${
                applicants[key].birthday
                } - Passport: ${applicants[key].passport} - Passport expiry: ${
                applicants[key].passport_expiry
                } - Country id: ${applicants[key].country_id}`;
              if (key < Object.keys(applicants).length - 1) {
                contactString += '\n\n';
              }
            });
            return contactString;
          }
        }}
        style={{
          whiteSpace: 'pre-line',
        }}
      />
      <TextField source="flight_number" />
      <EditButton />
    </Datagrid>
  </List>
);

const OrderEdit = props => (
  <Edit title={'Edit'} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <DisabledInput source="price" />
      <SelectInput
        source="status"
        choices={[
          { id: 'unpaid', name: 'unpaid' },
          { id: 'paid', name: 'paid' },
          { id: 'ignore', name: 'ignore' },
        ]}
      />
      <DisabledInput source="quantity" />
      <DisabledInput source="country_id" />
      <DisabledInput source="type" />
      <DisabledInput source="purpose" />
      <DisabledInput source="processing_time" />
      <DisabledInput source="airport" />
      <DisabledInput source="arrival_date" />
      <DisabledInput source="departure_date" />
      <DisabledInput source="airport_fast_track" />
      <DisabledInput source="car_pick_up" />
      <DisabledInput source="private_visa_letter" />
      <DisabledInput source="flight_number" />
    </SimpleForm>
  </Edit>
);

export {
  OrderList,
  OrderEdit,
}