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
  ReferenceField,
  ReferenceInput,
  required,
  Responsive,
  SelectInput,
  SimpleForm,
  SimpleList,
  TextField,
  TextInput
} from 'admin-on-rest';

const PostList = (props) => (
  <List {...props} filters={<PostFilter />}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.title}
          secondaryText={record => `${record.views} views`}
          tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" />
          <ReferenceField label="User" source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <TextField source="body" />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
);

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput label="User" source="userId" reference="users" validate={required}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Edit>
);

const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="User" source="userId" reference="users" validate={required} allowEmpty>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Create>
);

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users">
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export {
  PostList,
  PostEdit,
  PostCreate,
}