import { Button, Form, Input } from 'antd';
import React from 'react';
import { useState } from 'react';
import { addUser } from '../features/Users';
import { useDispatch } from 'react-redux';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};



const AddUser = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };


  return (

    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} id="add-user">
      <h3>Add User Form</h3>
      <Form.Item
        name="name"
        label="Name"
        value={name}
        onChange={(event) => { setName(event.target.value); }}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="userName"
        label="Username"
        value={username}
        onChange={(event) => { setUsername(event.target.value); }}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />

      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            dispatch(addUser({ id: 0, name: name, username: username }));
          }}>
          Add user
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>

      </Form.Item>
    </Form>
  );
};
export default AddUser;