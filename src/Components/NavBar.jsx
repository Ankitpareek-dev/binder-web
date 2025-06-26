import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";
import { removeFeed } from "../utils/feedSlice";
import { useEffect, useState } from "react";
import { addRequests } from "../utils/requestSlice";

function NavBar() {
  const [noOfRequests, setNoOfRequests] = useState(0);
  const user = useSelector((store) => store.user);
  const requests = useSelector((store) => store.requests?.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      dispatch(removeFeed());

      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      const number = (res.data?.data).length;
      setNoOfRequests(number);
      dispatch(addRequests(res.data));
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRequests();
  }, []);

  if (!user) return null;
  // console.log(user.photoId);
  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/feed" className="btn btn-ghost text-xl">
          Binder💓
        </Link>
      </div>

      <div className="flex items-center gap-4 mr-4">
        {/* Hello User */}
        {user && (
          <div className="text-white font-medium">
            Hello,{" "}
            <span className="font-semibold text-pink-400">
              {user.firstName}
            </span>
          </div>
        )}

        {/* 🔔 Notifications */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle relative"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {/* Custom clean badge */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-[2px] rounded-full">
                {noOfRequests}
              </span>
            </div>
          </div>

          {/* Dropdown Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80"
          >
            <li>
              <div className="font-semibold text-sm mb-2">
                Connection Requests
              </div>
            </li>

            {/* Request 1 */}

            {requests &&
              requests.map((request) => (
                <li className="mb-2">
                  <div className="flex gap-2 items-center">
                    <img
                      src={request.photoUrl}
                      className="w-10 h-10 rounded-full"
                      alt="User"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium">
                        {request.firstName} {request.lastName}
                      </p>
                      <p className="text-xs text-zinc-500">Wants to connect</p>
                      <div className="flex gap-2 mt-1">
                        <button className="btn btn-xs btn-success">
                          Accept
                        </button>
                        <button className="btn btn-xs btn-outline btn-error">
                          Ignore
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* User Avatar Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {user && (
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user.photoId} />
              </div>
            )}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/connections">Connections</Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={() => handleLogout()}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
