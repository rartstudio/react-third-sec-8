const UserCard = (props) => {
    return (
        <div className="d-flex px-4 py-2 border my-3">
            <div className="me-1">{props.userName}</div>
            <div>({props.userAge} years old)</div>
        </div>

    );
}

export default UserCard;