import React,{useState} from 'react';
//import StudentDob from './StudentDob';
import Card from './Card';
import './ViewStudent.css';
import {Modal,Button} from 'react-bootstrap'; 


function ViewStudent(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const [popupData, setPopupData] = useState({
        fname:'',
        lname:'',
    });
    const handleShow = () => {
        setPopupData(()=>{
         return   {
                fname:props.fname,
                lname:props.lname,
            }
        
        })
        setShow(true);
    };
    return (<Card className="expense-item">
        
        <div className="expense-item__description">
            <h2>{props.fname} {props.lname}</h2>
            <h2>{props.email}</h2>
           
            <div className="expense-item__price">{props.phone}</div>
            <div className="expense-item__price">
                <button  onClick={() => handleShow(props)}>Edit</button>
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{popupData.fname} {popupData.lname} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                </div>
        </div>
        
    </Card>)
}
export default ViewStudent;