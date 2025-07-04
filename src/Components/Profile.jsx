import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

function Profile() {
  const user = useSelector((store) => store.user);
  if (!user) return;
  return (
    <div>
      <EditProfile user={user} />
    </div>
  );
}

export default Profile;
