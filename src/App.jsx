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
import AppStyles from './App.module.css';

const apiUrl = 'http://localhost:5000/';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await axios.get(apiUrl);
    setData(response.data);
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      <Navbar bg="primary" variant="dark" className="justify-content-center">
        <Navbar.Brand>
          Using React with JSON Server to build CRUD App and Deploy Heroku.
        </Navbar.Brand>
      </Navbar>
      <Container style={AppStyles.mainContainer}>
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
