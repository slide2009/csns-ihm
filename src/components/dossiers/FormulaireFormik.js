import { useFormik } from 'formik';
import React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

const validate = values => {
    const errors = {};
    if(!values.message) {
        errors.message = 'Message vide'
    }
    return errors;
}
const FormulaireFormik = () => {

    const formik = useFormik({
        initialValues: {message: "Bonjour"},
        validate,
        onSubmit: values => console.log(values)
    })

    return <form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control {...formik.getFieldProps('message')}/>
            {formik.errors.message && <Alert variant='danger'>2021 et on doit faire ça à la main ?!!!? {formik.errors.message}</Alert>}
            {/* {formik.errors.message && 
            <Form.Control.Feedback type="invalid">
            erreurs
          </Form.Control.Feedback>} */}
        </Form.Group>
        <Button type="submit">Enregistrer</Button>
    </form>
}

export default FormulaireFormik;