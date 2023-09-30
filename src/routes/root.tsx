import { Link, Outlet } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";

import useOnlineStatus from "../services.tsx/useOnlineStatus";
import useLoadingStyle from "../services.tsx/useLoadingStyle";

export default function Root() {
  const loadingStyle = useLoadingStyle();

  const isOnline = useOnlineStatus();

  if (!isOnline) return <h1>You are OFFLINE</h1>;

  return (
    <Stack gap={2} className="p-4" style={loadingStyle}>
      <Link to="characters">
        <Button className="w-100">Characters</Button>
      </Link>
      <Link to="episodes">
        <Button className="w-100">Episodes</Button>
      </Link>
      <Outlet></Outlet>
    </Stack>
  );
}
