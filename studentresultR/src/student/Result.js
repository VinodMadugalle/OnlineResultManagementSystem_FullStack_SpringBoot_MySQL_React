import axios from "axios";
import React, { useEffect,useState } from "react";
import Header from './Header';

export default function Result() {

  const [user, setUser] = useState({
    registrationNumber: "",
    indexNumber: "",
    fullName: "",
  });
  
  useEffect(() => {
    loadUser();
  },[]);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/v1/student/getReportByRef/2017ICTS38`);
    setUser(result.data);
  };
  

  return (
    <div>
      <Header/>
      <div className='addStudentGetD'>
          <span class="admin-text28"><span>Registration No:</span></span>
          {user.registrationNumber}
          <span class="admin-text30"><span>Exam ID: {user.indexNumber}</span></span>
          {user.indexNumber}
          <span class="admin-text32"><span>Full Name:</span></span>
          
          <span class="admin-text34"><span>Email:</span></span>
          
          <span class="admin-text36"><span>NIC:</span></span>
          
          <span class="admin-text38"><span>Gender:</span></span>
          
          <span class="admin-text40"><span>Password:</span></span>
          
          <span class="admin-text42"><span>Mobile NO:</span></span>
          
          <span class="admin-text44"><span>Degree:</span></span>
          
        </div>
    </div>
  )
}


