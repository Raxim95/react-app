import { Link } from "react-router-dom";
import UserType from "../Types/UserType";

function Sidebar({ users }: { users: UserType[] }) {
  return (
    <div className="p-3 bg-dark text-white sidebar">
      <Link to={"/"}>
        <i className="fa fa-house"></i> Home
      </Link>
      <br />
      <Link to={"users"}>
        <i className="fa fa-users"></i> Users
      </Link>
      <br />
      <ol>
        {users.map((user, i) => {
          return (
            <li key={i}>
              <Link to={"users/" + user.id}>{user.name}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Sidebar;
