import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown'
import './Posting.css';
import Footer from './Footer.js';
const Posting = () => {
  const data = [
    {
        "id": 1,
        "city": "Kolkata ",
        "state": "West Bengal"
    },
    {
        "id": 2,
        "city": "New Delhi",
        "state": "Delhi"
    },
    {
        "id": 3,
        "city": "Chennai ",
        "state": "Tamil Nadu"
    },
    {
        "id": 4,
        "city": "Mumbai",
        "state": "Maharashtra"
    },
    {
        "id": 5,
        "city": "Bangalore",
        "state": "Karnataka"
    },
    {
        "id": 6,
        "city": "Pune",
        "state": "Maharashtra"
    },
    {
        "id": 7,
        "city": "Chennai ",
        "state": "Tamil Nadu"
    },
    {
        "id": 8,
        "city": "Gurgaon",
        "state": "Uttar Pradesh"
    },
    {
        "id": 9,
        "city": "Hyderabad",
        "state": "Andhra Pradesh"
    }
]
const [options] = useState(data);


const skills = 
[
    {
        "id": 1,
        "skill": "java"
    },
    {
        "id": 2,
        "skill": "c++"
    },
    {
        "id": 3,
        "skill": "python"
    },
    {
        "id": 4,
        "skill": "javascript"
    },
    {
        "id": 5,
        "skill": "golang"
    },
    {
        "id": 6,
        "skill": "php"
    },
    {
        "id": 7,
        "skill": "node js"
    },
    {
        "id": 8,
        "skill": "mongo db"
    },
    {
        "id": 9,
        "skill": "react"
    },
    {
        "id": 10,
        "skill": "sql"
    }
];


const [skill] = useState(skills);

const [showhide, setShowhide] = useState("True");
const handleshow = event => {
  const getshow = event.target.value;
  setShowhide(getshow);

}
const [opening, setOpening] = useState("fixed");
const openmenu = event => {
  const openshow = event.target.value;
  setOpening(openshow);
}
  return (
    <>
          <Navbar bg="light" expand="lg">
      <Container fluid>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          
            <Button variant="outline-dark">Log Out</Button>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <h1 class="text-xl-center">Job Posting</h1>
    <div class="container" >
    <div className="small-box dark-box mx-auto text-center">

    🆕 Fill Up Complete Form Below 🆕

    </div>

    <div className="row" id="box">
      <Form >
        {/* Job Profile */}
      <Form.Group className="mb-3">
        <Form.Label>Job Profile</Form.Label>
        <Form.Control placeholder="Mention Job Profile" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>





      {/* Workfrom Home Radio Button */}
<div class="form-check">
         <input class="form-check-input" type="radio" name="userdetail" value="True" id="flexRadioDefault1" checked={ showhide === 'True'} onClick={ handleshow}  />
         <label class="form-check-label" for="flexRadioDefault1">
           Work From Home
         </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="userdetail" value="false" id="flexRadioDefault1" onClick={ handleshow}  />
  <label class="form-check-label" for="flexRadioDefault1">
    In Office
  </label>
</div>

{
  showhide   === 'false' && (
    <div class="mb-3">
  <label class="form-label">Select Cities</label>
  <Multiselect options={options} displayValue="city"></Multiselect>
</div>

  )
}

<div class="mb-3">
  <label class="form-label">Total Opening</label>
  <input  class="form-control" />
</div>

<div class="mb-3">
  <label class="form-label">Duration</label>
  <input  class="form-control" />
  <Form.Text className="text-muted">
  Mention Duration in Months Only 
  </Form.Text>
</div>


<div class="mb-3">
                        <label 
                            class="text-left">Employee Responsibility</label>
                        <textarea class="form-control"  rows="3"></textarea>
                    </div>

<div class="mb-3">
  <label class="form-label">Required Skillset</label>
  <Multiselect options={skill} displayValue="skill"></Multiselect>
</div>


<div class="form-check">
         <input class="form-check-input" type="radio" name="userdetail" value="fixed" id="flexRadioDefault1" checked={ opening === 'fixed'}  onClick={ openmenu }   />
         <label class="form-check-label" for="flexRadioDefault1">
           Fixed
         </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="userdetail" value="nominal" id="flexRadioDefault1" onClick={ openmenu }  />
  <label class="form-check-label" for="flexRadioDefault1">
    Nominal
  </label>
</div>

<div class="mb-3">
  <label class="form-label">Stipend</label>
  <input  class="form-control" placeholder='₹ 10,000'/>
</div>

{
  opening === 'nominal'  && (
    <div class="mb-3">
  <label class="form-label">Minimum Stipend</label>
  <input  class="form-control"  placeholder="₹ 8,000" />
</div>
  )
}
<div className='col-md-12 text-center mb-3'>
<Button variant="dark" className="btn-space">Upload</Button>
<Button variant="danger" type="reset" value="Reset">Reset</Button>
</div>
      </Form>

    </div>

  
    </div>
    
<Footer />
    </>
  )
}

export default Posting
