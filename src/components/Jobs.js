import React, { useState,  useEffect } from 'react'
import { Link } from "react-router-dom";
import Modal_pop from './Modal_pop';

const Jobs = () => {
    let API = "http://34.205.65.36:4000/jobs/findAll";

    const[users, setUsers] = useState([]);
    let city_name = [];
    const fetchApiData =  async (url) => {
        try{
            const res = await fetch(url);
            setUsers(await res.json());
            
        } catch(error){
            console.log(error);

        }

    }

    useEffect(() => {
     fetchApiData(API);
    }, [])
    
  return (

    <>
    <h2 class="text-xl-center">List of Job Opportunities</h2>
    <div className="container-fluid mt-5" >
        <div className="row text-center" >

            {
                users.map((curElem) => {

                    // For Cities
                    
                    for(let i in curElem.cities){
                       let x = curElem.cities[i].city;
                        console.log(x);
                        city_name.push(x);
                        
                    }

                    
                    

                    


                    // For Skills

                    // for(let m in curElem.skills){
                    //     let n = curElem.skills[m].skill;
                    //     console.log(n);
                    // }

                   
                   
                    return (
                        
                        <div >
                            

<div className="mt-5" >
            <div id="cardContainer" class="card i.category"  style={{ backgroundColor: 'white' }}>
                      <h3 class=" m-3">{ curElem.jobprofile }</h3>
                      
                      <div class="container">
                          <h5 class="product-name">{curElem.client.organizationname}</h5>
                          
                          <div class="row patron-uploaded-opportunities-body-footer">
                        <div class="col-auto me-auto patron-uploaded-opportunities-opportunityLocation">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                                <path
                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg> */}
                            
                            {curElem.cities.map(el => {
                                
                                return (
                                    <div >
                                        

                                        <div class="row patron-uploaded-opportunities-body-footer">
                        <div class="col-auto me-auto patron-uploaded-opportunities-opportunityLocation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                                <path
                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                            {el.city}
                            

                            </div>
                            </div>

                                      


                                 

                                      

                                      


                                      
                                    </div>
                                    
                                    )
                            })
                            
                            }
                        </div>
                        
                    </div>

                          <div class="d-flex justify-content-between">
                              <div><span>Duration :- {curElem.duration} Months</span></div>
                              <div>
                                
                                
                                
      
                                  <Link href="viewDetails.html" class="details text-dark fw-bolder fs-4" as={Link} to="/Modal_pop">
                                      Apply for this Job
                                      <a class="bi-arrow-right-circle-fill bi m-2  text-danger">
                                      </a>
                                  </Link>
                              </div>
                          </div>

                          <div class="d-flex justify-content-between">
                              <div><span>Stipend :- Upto  ₹{curElem.stipendamountmax} / per Month</span></div>

                          </div>
                          
                          
                   

                          
                      </div>
                  </div>

                  

            </div>

          <footer>
          <div className='text-center p-4' style={{ backgroundColor: '#FAF9F6' }}>
       
        
          {curElem.skills.map(el=> {
            return(
               <div>
                
                <mark>
                {el.skill}
                </mark>
               </div>
            )
          })}
       
      </div>
          </footer>
                        </div>
                    )
                })
            }




        </div>

    </div>
     
    </>
  )
}

export default Jobs
