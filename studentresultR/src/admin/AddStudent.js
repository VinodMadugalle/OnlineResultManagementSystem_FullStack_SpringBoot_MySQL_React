import React from 'react'
import addStheadim from "../images/addStheadim.png"
import AdminButton from './AdminButton'
import { useState } from 'react'

const AddStudent = () => {
    const [registrationNumber,setRegistrationNumber]=useState('')
    const [indexNumber,setIndexNumber]=useState("")
    const [fullName,setFullName]=useState("")
    const [nameWithInitials,setNameWithInitials]=useState("")
    const [nic,setNic]=useState("")
    const [gender,setGender]=useState("")
    const [password,setPassword]=useState("")
    const [course,setCourse]=useState("")
    const [degree,setDegree]=useState("")
    const saveStudent=(e)=>{
      e.preventDefault()
      const student={registrationNumber,indexNumber,fullName,nameWithInitials,nic,gender,password,course,degree}
      console.log(student)
      fetch("http://localhost:8080/api/v1/student/saveStudent",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
      }).then(()=>{
        alert("submit");
      })
    }

  return (
    <div style={{width:"100vw",height:"100vh"}}>
        
        <div  className='addStheadimdivimg'  style={{backgroundImage:`url(${addStheadim})`}}>
            <div  className='addStheadimdiv'>
                <p className='addStudentTex'>Add Student</p>
            </div>
        </div>
        <AdminButton/>
        <div style={{backgroundColor:" rgba(47, 45, 81, 1)"}}>
        <div className='addStudentGetD'>
          <span class="admin-text28"><span>Registration No:</span></span>
          <input type="text" value={registrationNumber}onChange={(e) => {setRegistrationNumber(e.target.value)}}/>
          <span class="admin-text30"><span>Exam ID:</span></span>
          <input class="admin-rectangle59" type="text" value={indexNumber}onChange={(e) => {setIndexNumber(e.target.value)}}/>
          <span class="admin-text32"><span>Full Name:</span></span>
          <input class="admin-rectangle60" type="text" value={fullName}onChange={(e) => {setFullName(e.target.value)}}/>
          <span class="admin-text34"><span>Email:</span></span>
          <input class="admin-rectangle61" type="text" value={nameWithInitials}onChange={(e) => {setNameWithInitials(e.target.value)}}/>
          <span class="admin-text36"><span>NIC:</span></span>
          <input class="admin-rectangle62" type="text" value={nic}onChange={(e) => {setNic(e.target.value)}}/>
          <span class="admin-text38"><span>Gender:</span></span>
          <select  class="admin-rectangle63" value={gender}onChange={(e) => {setGender(e.target.value)}}>
            <option value="male" >Male</option>
            <option value="female" >Female</option>
          </select>
          <span class="admin-text40"><span>Password:</span></span>
          <input  class="admin-rectangle64" type="text" value={password}onChange={(e) => {setPassword(e.target.value)}}/>
          <span class="admin-text42"><span>Mobile NO:</span></span>
          <input  class="admin-rectangle65" type="text" value={course}onChange={(e) => {setCourse(e.target.value)}}/>
          <span class="admin-text44"><span>Degree:</span></span>
          <input   class="admin-rectangle66" type="text" value={degree}onChange={(e) => {setDegree(e.target.value)}}/>
        </div>
        <div className='addStudentSUDBut'>
        <button  type="button" style={{backgroundColor:" #0d6efd",borderRadius:"7px",cursor:"pointer"}} onClick={saveStudent}>Submit</button>
        <button  type="button" style={{backgroundColor:" #5c636a",borderRadius:"7px",cursor:"pointer"}} onclick="updateStudent()">update</button>
        <button  type="button" style={{backgroundColor:" #dc3545",borderRadius:"7px",cursor:"pointer"}} onclick="deleteStudent()">delete</button>
      </div>
        </div>
        
    </div>
  )
}

export default AddStudent
