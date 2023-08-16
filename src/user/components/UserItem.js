import React from "react";
import "./UserItem.css";
import { Link } from "react-router-dom";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

const UserItem = (props) => {
  let s1 = "/";
  let result = s1.concat(props.id, "/places");

  // var ToLink = ${props.id}/places
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={result}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item-info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount}
              {"Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};
export default UserItem;
