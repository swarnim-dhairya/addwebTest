import React from 'react';
import './NewStudent.css';
import RegistrationForm from './RegistrationForm';

const NewStudent = (props) => {
    const saveStudentDataHandler = (enterStudentData)=>{
        const studentData = {
            ...enterStudentData,
            id: Math.random.toString()

        };
        props.onAddStudent(studentData);
       // console.log(expenseData);
    };
    return <div className="new-expense">
        <RegistrationForm onSaveStudentData={saveStudentDataHandler}></RegistrationForm>
    </div>
};

export default NewStudent;