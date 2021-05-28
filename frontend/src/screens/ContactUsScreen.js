import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import axios from 'axios';

const ContactUsScreen = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {});

  const submitHandler = async (e) => {
    e.preventDefault();

    // Create Headers for POST operation
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Getting data back after success POST Operation
    const result = await axios.post(
      '/api/sendemail',
      { name, email, subject, message },
      config
    );

    const { resultText, success } = result.data;

    if (success === true) {
      console.log(resultText);
      resetForm();
      alert(resultText);
      history.push('/');
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubject('');
  };

  return (
    <FormContainer>
      <h1>Contact Us</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='name@example.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Your Full Name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Subject'
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </Form.Group>
        <Button type='submit' variant='primary'>
          Send
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ContactUsScreen;
