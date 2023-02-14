
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useEffect } from 'react';
function Yourjob(props){
    console.log(props.Company_name)

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  let mail = localStorage.getItem("email_Employee");
    console.log(mail);
  // For Employee id


    const[store,setStore] = useState();
    useEffect(() => {
      axios.get('http://34.205.65.36:4000/client/find/?email:"{localStorage.getItem("emailData")}"')
      .then(response => {
        console.log(response);
        setStore(response.data.id);
        
      })
      .catch(err => {
        console.log(err);
      })
    },[])

    // For Job id

    
    const[id,setId] = useState();
    useEffect(() => {
      axios.get('http://34.205.65.36:4000/jobs/findAll')
      .then((response) =>{
        console.log(response);
        console.log(response.data)
        setId(response.data.Object.id);
      })
      .catch(err=>{
    
        console.log(err);
      })
    
    },[])

    const applyjob = (event) => {
      event.preventDefault();
      let jobId = props.job_id;
      let employeeId = store;
      const str = {jobId, employeeId}
      console.log(str);
      axios.post("http://34.205.65.36:4000/employee/apply", str)
      .then(response => {
        console.log(response);
        window.alert("Applied Successfully")
        handleClose();
      })
      .catch(error =>{
        console.log(error);
        window.alert("Not Applied");
    })
    };

    return (

    <>
<Button className="mt-3" variant="outline-dark"  onClick={handleShow}  >
          Proceed

          </Button>
          

          

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure You want to proceed Further with <b>{props.Company} </b> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button className="mt-3" variant="outline-dark" type="submit" onClick={applyjob}  >
            Apply

          </Button>
        </Modal.Footer>
      </Modal>
      </>
      )
    }
export default Yourjob;