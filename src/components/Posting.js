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
import { Link } from "react-router-dom";
import Overview from './Overview';
import axios from 'axios';

const Posting = () => {






  function onSelect(selectedList, selectedItem) {
    
    // let skill_value = selectedItem.skill;
    console.log(selectedList);
    setSkill(selectedList);
    
   
    
    

    

    
}

function onSelect2(selectedList, selectedItem){
  console.log(selectedList);
  setCity(selectedList);
}
  let value = localStorage.getItem("email");
  
  const [clienty,setClienty] = useState()
  useEffect(() => {
    axios.get('http://34.205.65.36:4000/client/find/?{value}')
    .then(response => {
      console.log(response);
      setClienty(response.data.id);
      
    })
    .catch(err => {
      console.log(err);
    })
  },[])
  const[email,setEmail] = useState();
  const handle = () => {
    localStorage.setItem("emailData",email)
  }

const[knowloc,setKnowloc] = useState();



  const postjob = (event) => {
    event.preventDefault();
    const jobprofile = event.target.jobprofile.value;
    
    let workfromhome = knowloc ===  'True' ? true : false;
    console.log(workfromhome);
    const openings = parseInt(event.target.openings.value);
    const duration = parseInt(event.target.duration.value);
    const responsibilities = event.target.responsibilities.value;
    
    
    let cities = knowloc === 'True'? [] : city;
    console.log(cities);
    let skills = skill;
    console.log(skills);
    const stipendtype = event.target.stipendtype.value;
    const stipendamountmax = parseInt(event.target.stipendamountmax.value);
    let stipendamountmin = stipendtype === 'fixed' ? stipendamountmax : parseInt(event.target.stipendamountmin.value);
    let clientId = clienty;
    const database  = {jobprofile, workfromhome, openings, duration, responsibilities,skills,cities,stipendtype,stipendamountmax,stipendamountmin,  clientId};
    console.log(database);
    axios.post("http://34.205.65.36:4000/jobs/save", database)
    .then(response => {
      console.log(response);
      window.alert("job Posted")
    })
    .catch(error =>{
      console.log(error);
      window.alert("Unable to Post Job");
  })
  };
  
// const [options] = useState(data);




const [city, setCity] = useState();
const [cities_opt,setCities_opt]=useState();

useEffect(() => {
  axios.get('http://34.205.65.36:4000/jobs/city/')
  .then((response) =>{
    console.log(response);
    setCities_opt(response.data);
  })
  .catch(err=>{

    console.log(err);
  })

},[])

const [skill_opt,setSkill_opt] = useState();
useEffect(() => {
  axios.get('http://34.205.65.36:4000/jobs/skills/')
  .then(response => {
    console.log(response);
    setSkill_opt(response.data);
  })
  .catch(err => {
    console.log(err);
  })
}, [])

const [skill,setSkill] = useState();

const [showhide, setShowhide] = useState();
const handleshow = event => {
  const getshow = event.target.value;
  setShowhide(getshow);
  

}


const know_location = event => {


  setKnowloc(event.target.value);
}



const [opening, setOpening] = useState();
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
    <h1 class="text-xl-center">Opportunities Posting</h1>
    <div class="container" >
    <div className="small-box dark-box mx-auto text-center">

    🆕 Fill Up Complete Form Below 🆕

    </div>

    <div className="row" id="box">
      <Form onSubmit={postjob}>

     

<div class="mb-3">
  <label class="form-label">Opportunities Description </label>
  <input  class="form-control" name="jobprofile" required/>
  
  
</div>

     


      {/* Workfrom Home Radio Button */}
<div class="form-check">

         <input class="form-check-input" type="radio" name='workfromhome' value="True" id="flexRadioDefault1" checked={ knowloc === 'True'} onClick={ know_location }  />
         <label class="form-check-label" for="flexRadioDefault1">
           Work From Home
         </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio"  value="false" id="flexRadioDefault1" onClick={ know_location} checked={ knowloc === 'false'}  />
  <label class="form-check-label" for="flexRadioDefault1">
    In Office
  </label>
</div>

{
  knowloc   === 'false' && (
    <div class="mb-3">
  <label class="form-label">Select Cities</label>
  <Multiselect options={cities_opt} displayValue="city" onSelect={onSelect2} name="cities" required></Multiselect>
  
</div>

  )
}

<div class="mb-3">
  <label class="form-label" >Total Opening</label>
  <input  class="form-control" type="number" name="openings" required/>
</div>

<div class="mb-3">
  <label class="form-label">Duration</label>
  <input  class="form-control" type="number" name='duration' required/>
  <Form.Text className="text-muted">
  Mention Duration in Months Only 
  </Form.Text>
</div>


<div class="mb-3">
                        <label 
                            class="text-left">Experts Responsibility</label>
                        <textarea class="form-control"name='responsibilities'  rows="3" required></textarea>
                    </div>

<div class="mb-3">
  <label class="form-label">Required Skillset</label>
  <Multiselect options={skill_opt} displayValue='skill' onSelect={onSelect} required></Multiselect>
  
</div>


<div class="form-check">
         <input class="form-check-input" type="radio" name='stipendtype'  value="fixed"  checked={ opening === 'fixed'}  onClick={ openmenu }   />
         <label class="form-check-label" for="flexRadioDefault1">
           Fixed
         </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio"  value="nominal" onClick={ openmenu } checked={ opening === 'nominal'} />
  <label class="form-check-label" for="flexRadioDefault1">
    Nominal
  </label>
</div>

<div class="mb-3">
  <label class="form-label">Stipend</label>
  <input  class="form-control" name='stipendamountmax' type="number"  placeholder='₹ 10,000' required/>
</div>

{
  opening === 'nominal'  && (
    <div class="mb-3">
  <label class="form-label">Minimum Stipend</label>
  <input  class="form-control" name='stipendamountmin' type="number" placeholder="₹ 8,000" required/>
</div>
  )
}
<div className='col-md-12 text-center mb-3'>
<Button variant="dark" className="btn-space" type="submit">Upload</Button>
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
