import React, {useState, Fragment, useRef} from "react";
import ModalInfo from './Modal/ModalInfo';

const UserForm = (props) => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isVisible, setVisible] = useState(false);
    
    //default is undefined.
    //if you console.log is like copy an dom event
    const hobbiesRef = useRef();

    const userNameHandler = (event) => {
        setUserName(event.target.value);
    };

    const userAgeHandler = (event) => {
        setUserAge(event.target.value);
    }

    const modalHandler = () => {
        setVisible(false);
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        console.log(hobbiesRef.current.value);

        if(userName.trim().length === 0  && userAge.trim().length === 0) {
            setVisible(true);
            setTitle('Invalid Input');
            setDescription('Please use valid input (non empty values');
            return;
        }

        if(+userAge < 1) {
            setVisible(true);
            setTitle('Invalid Input');
            setDescription('Please use non negative values');
            return;
        }

        const data = {
            userName,
            userAge : +userAge
        }

        props.onAddUserHandler(data);

        setUserAge('');
        setUserName('');

        //resetting value in form vield. this things is rarely 
        hobbiesRef.current.value= '';
    }

    return (
        //using react fragment to reduce using to much div
        <Fragment>
            {isVisible && <ModalInfo title={title} description={description} onCloseModal={modalHandler}/> }
            <form onSubmit={submitFormHandler}>
                <div className="mb-3">
                    <label htmlFor="userName" className="text-start d-block mb-1">Username</label>
                    <input value={userName} onChange={userNameHandler} id="userName" type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userAge" className="text-start d-block mb-1">Age</label>
                    <input value={userAge} onChange={userAgeHandler} id="userAge" type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userHobbies" className="text-start d-block mb-1">Hobies</label>
                    <input ref={hobbiesRef} id="userHobbies" type="text" className="form-control"/>
                </div>
                <button className="btn btn-primary d-block text-start">Add User</button>
            </form>
        </Fragment>

    );
}

export default UserForm;