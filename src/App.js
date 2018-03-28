import React from 'react';
import { Admin, Delete, jsonServerRestClient, Resource } from 'admin-on-rest';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import CountryIcon from 'material-ui/svg-icons/action/language'

import { PostCreate, PostEdit, PostList } from './posts';
import { UserList } from './users';
import { CountryList } from './countries'
import { FeeList } from './fees'
import Dashboard from './Dashboard';
import authClient from './authClient';

// const restClient = 'http://jsonplaceholder.typicode.com'
const restClient = 'http://localhost:8001'
const App = () => (
  <Admin
    authClient={authClient}
    dashboard={Dashboard}
    restClient={jsonServerRestClient(restClient)}
  >
    {/*<Resource*/}
      {/*name="posts"*/}
      {/*list={PostList}*/}
      {/*edit={PostEdit}*/}
      {/*create={PostCreate}*/}
      {/*remove={Delete}*/}
      {/*icon={PostIcon}*/}
    {/*/>*/}
    {/*<Resource name="users" list={UserList} icon={UserIcon} />*/}
    <Resource name="country" list={CountryList} icon={CountryIcon} />
    <Resource name="fees" list={FeeList} />
  </Admin>
);

export default App;
