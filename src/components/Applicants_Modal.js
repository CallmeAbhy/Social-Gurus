import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Applicants_Modal = (props) => {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.data)
  return (
    
    <div>
     <>
      <Button variant="dark" onClick={handleShow}>
       See the Employee List
      </Button>
      

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>

            Applicants :-

         


          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
        <Col xs={10}>

        {
        props.data.map((el) => {
          return(
            <>
            <ul>
            <li>{el.firstname} {el.lastname}  | {el.email}</li>
            
            </ul>
            </>
          )
        })
      }

</Col>
<Col xs={2}><Button variant="success">Hire</Button></Col>
</Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default Applicants_Modal
