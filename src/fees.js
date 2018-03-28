import React from 'react';
import {
  Create,
  Datagrid,
  DisabledInput,
  Edit,
  EditButton,
  Filter,
  List,
  LongTextInput,
  NumberField,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  required,
  Responsive,
  SelectField,
  SelectInput,
  Show,
  SimpleForm,
  SimpleList,
  SimpleShowLayout,
  TextField,
  TextInput,
} from 'admin-on-rest';

const FeeList = props => (
  <div>
    Legend:
    <p>1MS: 1 Month Single - 1MM: 1 Month Multiple</p>
    <p>3MS: 3 Month Single - 3MM: 3 Month Multiple</p>
    <p>6MM: 6 Month Multiple - 1YM: 1 Year Multiple</p>
    <List {...props}>
      <Datagrid>
        <ReferenceField label="ISO" source="country_id" reference="countries">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="type" />
        <TextField source="one_month_single" label="1MS" />
        <TextField source="one_month_multiple" label="1MM" />
        <TextField source="three_month_single" label="3MS" />
        <TextField source="three_month_multiple" label="3MM" />
        <TextField source="six_month_multiple" label="6MM" />
        <TextField source="one_year_multiple" label="1YM" />
      </Datagrid>
    </List>
  </div>
);

const FeeTitle = ({ record }) => {
  return <span>{record ? `"${record.name}"` : ''}</span>;
};

const FeeShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="type" />
    </SimpleShowLayout>
  </Show>
)

const FeeEdit = props => (
  <Edit title={<FeeTitle />} {...props}>
    <SimpleForm>
      <ReferenceInput
        label="ISO"
        source="country_id"
        reference="countries"
        validate={required}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <SelectInput
        source="type"
        choices={[
          { id: 'tourist', name: 'Tourist' },
          { id: 'business', name: 'Business' },
        ]}
      />
      <NumberInput source="one_month_single" />
      <NumberInput source="one_month_multiple" />
      <NumberInput source="three_month_single" />
      <NumberInput source="three_month_multiple" />
      <NumberInput source="six_month_multiple" />
      <NumberInput source="one_year_multiple" />
    </SimpleForm>
  </Edit>
);

const FeeCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput
        label="ISO"
        source="country_id"
        reference="countries"
        validate={required}
        allowEmpty
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <SelectInput
        source="type"
        choices={[
          { id: 'tourist', name: 'Tourist' },
          { id: 'business', name: 'Business' },
        ]}
      />
      <NumberInput source="one_month_single" />
      <NumberInput source="one_month_multiple" />
      <NumberInput source="three_month_single" />
      <NumberInput source="three_month_multiple" />
      <NumberInput source="six_month_multiple" />
      <NumberInput source="one_year_multiple" />
    </SimpleForm>
  </Create>
);

export { FeeList, FeeShow, FeeEdit, FeeCreate };
