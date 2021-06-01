import UserCard from "./UserCard";

const ListUser = (props) => {

    const userTemplate = props.items.map((user,index) => (<UserCard key={index} userName={user.userName} userAge={user.userAge}/>))

    return (
        <div className="shadow px-4 py-2">
            {
                userTemplate
            }
        </div>
    );
}

export default ListUser;