import React from 'react';
import {
  Datagrid,
  List,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
  FunctionField,
} from 'admin-on-rest';

export const OrderList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="price" />
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
          `Name: ${record.contact.name}\nEmail: ${
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
        }}
        style={{
          whiteSpace: 'pre-line',
        }}
      />
      <TextField source="flight_number" />
    </Datagrid>
  </List>
);
