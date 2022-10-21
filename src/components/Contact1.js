import { Form, Input, Switch, Select, Button, Typography } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormItem from 'antd/es/form/FormItem';
import React from 'react';
import './Contact.css';

const { Option } = Select;

const { TextArea } = Input;
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};



export default function Contact() {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      nation: 0,
      message: "",
      agree: false
    },

    onSubmit: (values) => {
      alert(JSON.stringify(formik.values))
    },
    validationSchema: Yup.object({
      name: Yup.string().required("").min(2, "Must be at least 2 characters"),
      email: Yup.string().required("").email("Invalid email format"),
      phone: Yup.number().required("").integer().typeError("Please enter a valid number"),
      nation: Yup.number().integer().typeError("Please select a nation."),
      message: Yup.string().required("").min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().required("").oneOf([true], "Your agreement with our use of your information is required.")
    }),

  });


  return (
    <>
      <div className='contact-container' >
        <h2>Contact Us</h2>
        <Form onSubmit={formik.handleSubmit} {...layout} id="contact-form">
          <FormItem
            name="name"
            label="Name*"
            
          >
            <Input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && (<Typography variant="caption" style={{color:"red"}}>{formik.errors.name}</Typography>)}
          </FormItem>

          <FormItem label="Email*"
            name="email"
            >
            <Input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange} />
            {formik.errors.email && (<Typography variant="caption" style={{color:"red"}}>{formik.errors.email}</Typography>)}

          </FormItem>

          <FormItem label="Phone*"
            name="phone"
            
          >
            <Input
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange} />
            {formik.errors.phone && (<Typography variant="caption" style={{color:"red"}}>{formik.errors.phone}</Typography>)}
          </FormItem>

          <FormItem label="Nation">
          <Select
                  
                  name="nation"
              
              labelInValue
              defaultValue="0"
           
              style={{
                width: 160,
              }}>

<Option value="0">Select a nation</Option>
              <Option value="1">England</Option>
              <Option value="2">France</Option>
              <Option value="3">Spain</Option>
                    
                    </Select>
            {formik.errors.nation && (<Typography variant="caption" style={{color:"red"}}>{formik.errors.nation}</Typography>)}
          </FormItem>


          <FormItem label="Message">
            <TextArea
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange} />
            {formik.errors.message && (<Typography variant="caption" style={{color:"red"}}>{formik.errors.message}</Typography>)}
          </FormItem>
          <FormItem>
            <Switch onChange={(value) => formik.setFieldValue("agree", value)} /> Agree with our use of your information.
            {formik.errors.agree && (<Typography variant="caption" style={{color:"red"}}>{formik.errors.agree}</Typography>)}
          </FormItem>

          <FormItem>
            <Button  htmlType="submit" type="primary" onClick={() => {
                                formik.onSubmit();

                            }} id="send">SEND</Button>
                             {/* <SubmitButton htmlType="submit">SEND</SubmitButton> */}
          </FormItem>

          
        </Form>
      </div>

    </>

  );
}
