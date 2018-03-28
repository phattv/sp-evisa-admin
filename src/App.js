import React from 'react';
import { Admin, Delete, jsonServerRestClient, Resource } from 'admin-on-rest';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';

import { PostCreate, PostEdit, PostList } from './posts';
import { UserList } from './users';
import Dashboard from './Dashboard';
import authClient from './authClient';

const App = () => (
  <Admin authClient={authClient} dashboard={Dashboard} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;