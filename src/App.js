
import React, { useState} from 'react';
import Students from './components/Students';
import NewStudent from './components/NewStudent/NewStudent';
import Data from './studentData.json';

const DUMMY_STUDENTS = Data;

//import './App.css';
function App() {
 const [students,setStudents] = useState(DUMMY_STUDENTS);
/*useEffect( () => {
  await writeJsonFile('studentData.json',students);
})*/
 
  const addStudentHandler = student =>{
    setStudents((prevStudents) =>{
     return [student,...prevStudents];

    });

    // writeJsonFile('studentData.json',student);
     
  }
  return (
    <div >  
     <NewStudent onAddStudent={addStudentHandler}></NewStudent>
      <Students items={students} />
     
     
    </div>
  );
}

export default App;
