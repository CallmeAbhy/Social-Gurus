import React from 'react'
import NavBar3 from './NavBar3'
import { useState } from 'react';
import {Button, Modal, Form, Container } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone'
import $ from "jquery";
import { Row } from 'antd';
import { Col } from 'antd';
const Profile = (props) => {

const  email  =
(props.location && props.location.state) || {};

$(document).ready(function(){
   
  var i = 1;
	var length;
	
   var addamount = 700;

  $("#add").click(function(){
    
	 
	 
	 addamount += 700;
	 console.log('amount: ' + addamount);
   i++;
      $('#dynamic_field').append('<tr id="row'+i+'"><td><input type="text" name="name[]" placeholder="Company" class="form-control name_list"/></td><td><input type="text" name="email[]" placeholder="Duration" class="form-control name_email"/></td>	<td><button type="button" name="remove" id="'+i+'" class="btn btn-danger btn_remove">X</button></td></tr>');  
    });

  $(document).on('click', '.btn_remove', function(){  
	addamount -= 700;
	console.log('amount: ' + addamount);
	

	 
	  var button_id = $(this).attr("id");     
      $('#row'+button_id+'').remove();  
    });
	


    
  });

  $(document).ready(function(){
   
    var i = 1;
    var length;
    
     var addamount = 700;
  
    $("#add1").click(function(){
      
     
     
     addamount += 700;
     console.log('amount: ' + addamount);
     i++;
        $('#dynamic_field1').append('<tr id="row1'+i+'"><td><input type="text" name="name[]" placeholder="Course" class="form-control name_list"/></td><td><input type="text" name="email[]" placeholder="Duration" class="form-control name_email"/></td>	<td><button type="button" name="remove" id="'+i+'" class="btn btn-danger btn_remove1">X</button></td></tr>');  
      });
  
    $(document).on('click', '.btn_remove1', function(){  
    addamount -= 700;
    console.log('amount: ' + addamount);
    
  
     
      var button_id = $(this).attr("id");     
        $('#row1'+button_id+'').remove();  
      });
    
  
  
      
    });
  



  return (
    <div>
      <NavBar3 />

      <h1 className="text-center">Make Your Profile</h1>
      <div className="container">
      <div className="small-box dark-box mx-auto text-center">
        Keep Your Profile Updated

      </div>
      </div>

      <div className='container  d-flex justify-content-center'>

            <Form>
            <div className="row" >
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" style={{width: '150px'}}  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">{localStorage.getItem("Employee_name")} {localStorage.getItem("Employee_sur")}</span><span class="text-black-50">  {email} </span><span> </span></div>
           </div>
           <div class="col-md-5 border-right">
           <div class="p-3 py-5">
           <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
            

                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><br />{localStorage.getItem("Employee_num")}</div>
                    
                    <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control"  name="addressLine"  /></div>
                    <div class="col-md-12"><label class="labels">Address Line 2</label><input type="text" class="form-control"  name="addressLine1"  /></div>
                    <div class="col-md-12"><label class="labels">Postcode</label>
                    <input type="text" class="form-control" placeholder="enter address line 2" name='postcode'/>
                    </div>

                    
                    
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">City</label><input type="text" class="form-control" placeholder="country" name='city' /></div>
                    <div class="col-md-6"><label class="labels">State</label><input type="text" class="form-control"  placeholder="state" name='state' /></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-dark profile-button" type="button">Save Profile</button></div>
                </div>
            </div>


            <div class="col-md-4">
 <div class="p-3 py-5">     
 <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br />

            <table class="table table-bordered table-hover" id="dynamic_field">
              <tr>
                <td><input type="text" name="name[]" placeholder="Company" class="form-control name_list" /></td>
                <td><input type="text" name="email[]" placeholder="Duration" class="form-control name_email"/></td>
				
                <td><button type="button" name="add" id="add" class="btn btn-dark">+</button></td>  
              </tr>
            </table>
              
              </div>





              




   


</div>
<Col span={16}></Col>
<Col span={8}>
<div classname="row1">

<div class="col-md-12 ">
 <div class="p-3 py-5 ">     
 <div class="d-flex justify-content-between align-items-center experience"><span>Edit Academics</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Academics</span></div><br />
 
 <table class="table table-bordered table-hover" id="dynamic_field1">
              <tr>
                <td><input type="text" name="name[]" placeholder="Course" class="form-control name_list" /></td>
                <td><input type="text" name="email[]" placeholder="Duration" class="form-control name_email"/></td>
				
                <td><button type="button" name="add1" id="add1" class="btn btn-dark">+</button></td>  
              </tr>
            </table>
            
 </div>
 </div>
</div>
</Col>









            
           
        </div>

            </Form>
           
      
      
      
      
      </div>




      

    </div>
  )
}

export default Profile
