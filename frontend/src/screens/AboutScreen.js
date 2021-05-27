import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const AboutScreen = () => {
  return (
    <Jumbotron>
      <h1 className='text-center'>KLF Group Assessment</h1>
      <h5 className='text-center'>
        This assessment was built using MERN stack + Redux.
      </h5>
      <hr />
      <h3>Features</h3>
      <hr />
      <ul>
        <li>
          <h6>Admin user management</h6>
          <p>Allows the admin user to update and delete all users</p>
        </li>
        <li>
          <h6>Regular user</h6>
          <p>Allows the user to login, update and delete user</p>
        </li>
        <li>
          <h6>Contact Form</h6>
          <p>Allows users to contact us</p>
          <p>Using Mailtrap for Development purposes</p>
        </li>
      </ul>
      <hr />
      <h3>Testing User Logins</h3>
      <hr />
      <h6>admin@example.com (Admin)</h6>
      <h6>123456</h6>
      <br />
      <h6>john@example.com (Customer)</h6>
      <h6>123456</h6>
      <hr />
      <h3>Tech Stack</h3>
      <hr />
      <h5>Frontend</h5>
      <ul>
        <li>
          <h6>React</h6>
        </li>
        <li>
          <h6>Redux</h6>
        </li>
        <li>
          <h6>Bootstrap</h6>
        </li>
        <li>
          <h6>Axios</h6>
        </li>
        <li>
          <h6>HTML</h6>
        </li>
        <li>
          <h6>CSS</h6>
        </li>
        <li>
          <h6>Google Font</h6>
        </li>
        <li>
          <h6>Font Awesome</h6>
        </li>
      </ul>
      <br />
      <h5>Backend</h5>
      <ul>
        <li>
          <h6>Node.js</h6>
        </li>
        <li>
          <h6>Express</h6>
        </li>
        <li>
          <h6>MongoDB</h6>
        </li>
        <li>
          <h6>Mongoose</h6>
        </li>

        <li>
          <h6>JSON Web Token (JWT)</h6>
        </li>
        <li>
          <h6>Bcryptjs</h6>
        </li>
        <li>
          <h6>Validator</h6>
        </li>
        <li>
          <h6>Nodemailer</h6>
        </li>
      </ul>
    </Jumbotron>
  );
};

export default AboutScreen;
