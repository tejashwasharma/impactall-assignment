import React from "react";
import { Formik, Field, Form as FormComponent } from 'formik';
import { Button, FlexBox } from "..";

const Form = ({ id, submitText, fields, onSubmit }) => {

    const initialValues = fields.reduce((acc, i) => {
        acc[i.name] = i.value || "";
        return acc;
    }, {});

    submitText = submitText || "Submit";

    const renderFields = (field, index) => {
        switch (field.type) {
            case 'text':
            case 'password':
                return (
                    <tr key={index}>
                        <td>
                            <label htmlFor={field.name}>{field.placeholder}</label>
                        </td>
                        <td>
                            <Field type={field.type} name={field.name} />
                        </td>
                    </tr>
                )
            case 'date':
                return (
                    <tr key={index}>
                        <td>
                            <label htmlFor={field.name}>{field.placeholder}</label>
                        </td>
                        <td>
                            <Field type={field.type} name={field.name} />
                        </td>
                    </tr>
                )
            default:
                return null;
        }
    }

    return (
        <React.Fragment>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {(props) => (
                    <FormComponent id={id}>
                        <table>
                            <tbody>
                                {fields.map(renderFields)}
                            </tbody>
                        </table>
                        <FlexBox alignItems="center" justifyContent="center">
                            <Button type="submit">{submitText}</Button>
                        </FlexBox>
                    </FormComponent>
                )}
            </Formik>
        </React.Fragment>
    )
}

export default Form;