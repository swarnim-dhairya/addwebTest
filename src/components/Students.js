import ViewStudent from './ViewStudent';
import './Students.css';
import Card from './Card';

//import { useState } from 'react';

function Students(props) {
  const studentContent =  props.items.map((students) => (
        <ViewStudent 
        key = {students.fname}
        fname={students.fname}
        lname={students.lname}
        phone= {students.phone} 
        email= {students.email} 
        date= {students.date}/>
        ))
     return(
     <Card style={{backGroundColor:'#efefef'}} className="students">
       {studentContent}
     </Card>

 )

}
export default Students;