import { useState, useEffect } from 'react';
import {
  Table,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Form,
  Navbar,
} from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const apiUrl = 'http://localhost:5000/';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await Promise.all([fetchUserData()]);
    console.log(1, data);
  };
  const fetchUserData = () => {
    return fetch(`${apiUrl}users`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };

  // const loadUsers = async (url, params) => {
  //   let response = await fetch(`${url}${params}`);
  //   let result = await response.json();
  //   console.log(1, result);
  //   setData(result);
  // };

  return (
    <>
      <ToastContainer></ToastContainer>
      <Navbar bg="primary" variant="dark" className="justify-content-center">
        <Navbar.Brand>
          Using React with JSON Server to build CRUD App and Deploy Heroku.
        </Navbar.Brand>
      </Navbar>
      <Container style={{ marginTop: '70px' }}>
        <Row>
          <Col md={4}>
            <h2>Form</h2>
          </Col>
          <Col md={8}>
            <h2>Table</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
