import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavBar3 from './NavBar3';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Applied.css'

import { useEffect } from 'react';
import { useState } from 'react';
// http://localhost:4000/employee/findAppliedJobs/



const Applied = () => {


  let maila = localStorage.getItem("email_Employee");
  console.log(maila);
  // For Employee id
  
  
  const[storage,setStorage] = useState();
  useEffect(() => {
    axios.get('http://34.205.65.36:4000/employee/find/?email=selmonbhai42069@gmail.com')
    .then(response => {
      console.log(response);
      setStorage(response.data.id);
      
    })
    .catch(err => {
      console.log(err);
    })
  },[])
  const[jobs,setJobs] = useState();

  const applied = (event) => {
    event.preventDefault();
    
    let employeeId = storage;
    const str1 = { employeeId }
    console.log(str1);
    axios.get("http://34.205.65.36:4000/employee/findAppliedJobs/", str1)
    .then(response => {
      console.log(response);
      window.alert("Applied Successfully")
      
    })
    .catch(error =>{
      console.log(error);
      window.alert("Not Applied");
  })
  };


  let API = "http://34.205.65.36:4000/employee/findAppliedJobs/";

  const[users, setUsers] = useState([]);
  let city_name = [];
  const fetchApiData =  async (url) => {
      try{
          const res = await fetch(url);
          setUsers(await res.json());
          

          
      } 
      catch(error){
          console.log(error);

      }

  }

  useEffect(() => {
   fetchApiData(API);
  }, [])


  
  
  
  return (
<div>
<NavBar3 />
<Navbar >



      <Container>
        <Navbar.Brand href="#home"><strong>Job Applications</strong></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Button id='boxer_' as={Link} to="/Jobs">Apply More</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>



{
  users.map((curElem) => {
    return (
      <>
          <Container className="job-card mt-5">
    <Row >
        <Col xs={5}>
        
        <h3 variant="subtitle1" >{curElem.jobprofile}</h3>
        <h2 variant="subtitle1" className="company-name">{curElem.stipendamountmax}</h2>
        </Col>
        <Col xs={5}>
        {curElem.cities.map(el=> {
    
    return(
       <div>
       
       
        <ul>
       <li>📍{el.city}</li>
       </ul>
       </div>
        
       
    )
  })}


        </Col>
        <Col xs={2}>
        {curElem.skills.map(el => {
                            
                            return (
                              <>
                              
                              <div className="col py-3 px-lg-2">
                              
                            <ul>
                              <li>👨‍🏭{el.skill}</li>
                              </ul>
                              </div>
                              
                              
                              </>

                              )
                        })
                      }

</Col>
      </Row>

      <Row>
        <Col xs={5}>Stipend type :- {curElem.stipendtype}</Col>
        <Col xs={5}>Number of Opening :- {curElem.openings}</Col>
        <Col xs={2}>Duration :- {curElem.duration}</Col>
      </Row>
       <Row className="p-2">
        <Col xs={10}>Responsibillities :- {curElem.responsibilities}</Col>
        <Col xs={2}>
        <Button className="mt-3 justify-content-end" variant="outline-dark" onClick={applied}  >
          Check

</Button>


        </Col>
        
        
        
        </Row>
    </Container>
      
      </>
    )

  })
  
}

    
    



</div>
  )
}

export default Applied
