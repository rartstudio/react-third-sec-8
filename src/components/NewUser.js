import React from "react";
import UserForm from "./UserForm";

const NewUser = (props) => {

    const userAddHandler = (data) => {
        props.onSendData(data);
    }

    return (
        <div className="shadow px-5 py-4 my-4">
            <UserForm onAddUserHandler={userAddHandler}/>
        </div>
    );
};

export default NewUser;