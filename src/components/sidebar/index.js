import { useContext } from "react";
import User from "./user";
import Suggestions from "./suggestions";
import useUser from "../../hooks/use-user";
export default function Sidebar() {
  const { user } = useUser();
  const { username, fullName, userId, following, docId } = user; // console.log(user.username);
  // console.log(user);
  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
}
