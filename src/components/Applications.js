import React, { useState } from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavBar2 from './NavBar2';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Applied.css'
import axios from 'axios';
import { useEffect } from 'react';
import './Application.css'
import Applicants_Modal from './Applicants_Modal';



const Applications = () => {

  let val = localStorage.getItem('email_client');
  console.log(val);

  const [fair, setFair] = useState();

  useEffect(() => {
    axios.get(`http://34.205.65.36:4000/client/find/?email=${val}`)
      .then(response => {
        console.log(response);
        setFair(response.data.id);

      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  console.log(fair);




  // const gettjob = (event) => {
  //   event.preventDefault();

  //   axios.get(`http://34.205.65.36:4000/client/postedJobs?id=${fair}`)
  //   .then(response => {
  //     console.log(response);
  //     setData(response.data);
  //     window.alert("Here are Applied Opportunities")
  //   })
  //   .catch(error =>{
  //     console.log(error);
  //     window.alert("No applied job");
  // })

  // }
  // console.log("data");
  // console.log(data);



  let API = `http://34.205.65.36:4000/client/postedJobs?id=${fair}`;

  const [users, setUsers] = useState([]);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      setUsers(await res.json());



    }
    catch (error) {
      console.log(error);

    }

  }

  useEffect(() => {
    fetchApiData(API);
  }, [])








  return (

    <div>
      <NavBar2 />
      <Navbar >
        <Container>
          <Navbar.Brand href="#home"><strong>Job Applications</strong></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button id='boxer_' as={Link} to="/Posting">Post Job</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {
        users.map((curElem) => {
          let inc = {
            open: curElem.openings,
            duration: curElem.duration,
            stipend: curElem.stipendtype
          }
          console.log("amaze")
          let value = curElem.employees
          console.log(value)

          return (
            <>
              <div className="container-fluid p-5">
                <div className="row text-center">
                <input type="checkbox" hidden class="read-more-state" id="read-more" />

                  <Container className="job-card mt-5" id="read-more-wrap">
                    <Row >
                      <Col xs={4}>

                        <h3 variant="subtitle1" >{curElem.jobprofile}</h3>
                        <h6 variant="subtitle1"><b className="company-name">{inc.open} </b> Openings | <b className="company-name">{curElem.duration}</b>  Months | <b className="company-name">{curElem.stipendtype}  </b> Salary</h6>
                      </Col>

                      <Col xs={4}>
                        {
                          curElem.cities.map((el) => {
                            return (
                              <>
                                <ul>
                                  <li>{el.city}</li>
                                </ul>
                              </>
                            )
                          })
                        }


                      </Col>
                      <Col xs={4}>

                        {
                          curElem.skills.map((el) => {
                            return (
                              <>
                                <ul>
                                  <li>{el.skill}</li>
                                </ul>
                              </>
                            )
                          })
                        }



                      </Col>
                    </Row>

                    <Row>
                      <Col xs={4}>Salary Range :- </Col>
                      <Col xs={4}>₹ {curElem.stipendamountmin}</Col>
                      <Col xs={4}>₹ {curElem.stipendamountmax}</Col>
                    </Row>
                    <Row className="p-2">
                      <Col xs={5}>
                        responsibilities :- {curElem.responsibilities}
                      </Col>
                      <Col xs={5}>

                      </Col>
                      <Col xs={2}>

                        <Applicants_Modal data = { value }  />
                        

                      </Col>



                    </Row>

                    <Row>


                    </Row>

                  </Container>




                </div>
              </div>


            </>
          )
        })
      }





    </div>
  )
}

export default Applications
