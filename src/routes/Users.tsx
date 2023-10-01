import { Outlet, useParams } from "react-router-dom";

function Users() {
  const params = useParams();

  if (params.userId) return <Outlet></Outlet>;
  return (
    <>
      <h1>Users</h1>
    </>
  );
}

export default Users;
