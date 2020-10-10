import React from 'react';
import { Create, SimpleForm, DateInput, TextInput } from 'react-admin';

const PostCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput source='body' multiline />
        <DateInput source='publishedAt' label='Published' />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
