import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

function Connections() {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection?.data);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data);
      dispatch(addConnections(res.data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;
  if (connections.length === 0) return <h1>No connections found</h1>;
  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="text-3xl font-semibold text-white mb-6">Connections</h1>

      <div className="flex flex-col gap-4 w-full max-w-xl px-4">
        {connections.map((user, index) => (
          <div
            key={index}
            className="bg-zinc-800 rounded-xl p-4 flex items-center gap-4 shadow-md"
          >
            <img
              src={
                user.photoUrl ||
                "https://www.w3schools.com/howto/img_avatar.png"
              }
              alt={user.firstName}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h2 className="text-white font-semibold text-lg">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-sm text-zinc-400">
                {user.age}, {user.gender}
              </p>
              <p className="text-sm text-zinc-300 mt-1">
                {user.about || "This is a default about of the user!"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Connections;
