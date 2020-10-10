import React from 'react';
import { Edit, SimpleForm, DateInput, TextInput } from 'react-admin';

const PostEdit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput source='id' disabled />

        <TextInput source='title' />
        <TextInput source='body' multiline />
        <DateInput source='publishedAt' label='Published' />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
