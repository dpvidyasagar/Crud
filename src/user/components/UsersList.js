import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";
const UserList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="center">No user Found</h2>;
  }
  return (
    <ul>
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};
export default UserList;
