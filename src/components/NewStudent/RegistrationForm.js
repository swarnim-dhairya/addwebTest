import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = (props) => {
    const [enteredfname, setEnteredfname] = useState('');
    const [enteredlname, setEnteredlname] = useState('');
    const [enteredFatName, setEnteredFatname] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    //const[userInput,setUserInput] = useState({
    // enteredTitle : '',
    // enteredAmount :'',
    //enteredDate :''
    //});
    const fnameChangeHandeler = (event) => {
        setEnteredfname(event.target.value);
      
    };
    const lnameChangeHandeler = (event) => {
        setEnteredlname(event.target.value);
      
    };
    const fatNameChangeHandeler = (event) => {
        setEnteredFatname(event.target.value);
      
    };
    const phoneChangeHandeler = (event) => {
        setEnteredPhone(event.target.value);
    
    };
    const emailChangeHandeler = (event) => {
        setEnteredEmail(event.target.value);
    
    };
    const dateChangeHandeler = (event) => {
        setEnteredDate(event.target.value);
       
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const studentData = {
            id:enteredfname,
            fname: enteredfname,
            lname: enteredlname,
            fathername: enteredFatName,
            phone: enteredPhone,
            email: enteredEmail,
            date: new Date(enteredDate),
        }
       props.onSaveStudentData(studentData);
        //console.log(expenseData);
        setEnteredfname('');
        setEnteredlname('');
        setEnteredEmail('');
        setEnteredPhone('');
        setEnteredDate('');
    };
    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>First Name</label>
                <input type="text" value={enteredfname} onChange={fnameChangeHandeler} required />
            </div>
            <div className="new-expense__control">
                <label>Last Name</label>
                <input type="text" value={enteredlname} onChange={lnameChangeHandeler} required />
            </div>
            <div className="new-expense__control">
                <label>Father Name</label>
                <input type="text" value={enteredFatName} onChange={fatNameChangeHandeler} required />
            </div>
            <div className="new-expense__control">
                <label>Email</label>
                <input type="email" value={enteredEmail}onChange={emailChangeHandeler} required />
            </div>
            <div className="new-expense__control">
                <label>Phone</label>
                <input type="tel" value={enteredPhone}  min="0.01" step="0.01" onChange={phoneChangeHandeler}  required />
            </div>
            <div className="new-expense__control">
                <label>DOB</label>
                <input type="date" value={enteredDate}  onChange={dateChangeHandeler} required />
            </div>
            <div className="new-expense__control">
                Male
                <input type="radio"  />
                Female
                <input type="radio" />
           
            </div>
            <div className="new-expense__control">
                <label>Photo</label>
                <input type="file"  />
            </div>
            <div className="new-expense__control">
            <label>Country</label>
                <select>
                <option>Country1</option>
                <option>Country2</option>
                </select>
            </div>
            <div className="new-expense__control">
                <label>Address</label>
                <textarea></textarea>
            </div>
        </div>
        <div className="new-expense__actions"><button type="submit">Submit</button></div>
    </form>)
}


export default RegistrationForm;
