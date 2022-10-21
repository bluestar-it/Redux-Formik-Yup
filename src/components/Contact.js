import * as React from "react";
import { render } from "react-dom";
import { Input, FormikDebug, FormItem, Form, SubmitButton, Select, Switch } from "formik-antd";
import { Formik, useFormikContext } from "formik";
import { Button } from "antd";
import "antd/dist/antd.css";
import * as Yup from 'yup';
import './Contact.css';



const FormReference = props => {
    const formikContext = useFormikContext();

    if (props.saveFormRef) {
        props.saveFormRef(formikContext);
    }

    return null;
};

const { Option } = Select;

export default function Contact() {
    const formRef = React.useRef(null);

    const saveFormRef = ref => {
        formRef.current = ref;
    };

    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    agree: false
                }}
                onSubmit={val => alert(JSON.stringify(val, null, 2))}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("This information is required!")
                        .min(2, "Must be at least 2 characters"),
                    email: Yup.string().required("This information is required!").email("Invalid email format"),
                    phone: Yup.number()
                        .required("This information is required!")
                        .integer()
                        .typeError("Please enter a valid number"),
                    message: Yup.string()
                        .min(10, "Must be 10 characters or more"),
                    agree: Yup.boolean().required("").oneOf([true], "Your agreement with our use of your information is required.")


                })}
            >
                {() => {
                    return (
                        <>
                            <div className='contact-container' >

                                <Form id="contact-form" >
                                    <h2>Contact Us</h2>

                                    <div>

                                        <FormItem
                                            name="name"
                                            validate={val => (!val ? "required" : undefined)}
                                        >
                                            <Input placeholder="Name" name="name" />
                                        </FormItem>
                                        <FormItem
                                            name="email"

                                        >
                                            <Input placeholder="Email" name="email" />
                                        </FormItem>

                                        <FormItem
                                            name="phone"

                                        >
                                            <Input placeholder="Phone" name="phone" />
                                        </FormItem>

                                        <FormItem
                                            name="message"

                                        >

                                            <Input placeholder="Message" name="message" />

                                        </FormItem>

                                        <FormItem
                                            name="agree"
                                            validate={val => (!val ? "Your agreement with our use of your information is required." : undefined)}
                                        >
                                            <Switch name="agree" /> Agree with our use of your information.
                                        </FormItem>
                                        <SubmitButton>SEND</SubmitButton>


                                    </div>
                                </Form>
                            </div>
                        </>
                    );
                }}
            </Formik>
        </>
    );
}

// const rootElement = document.getElementById("root");
// render(
//   <div style={{ padding: "30px" }}>
//     <Contact />
//   </div>,
//   rootElement
// );
