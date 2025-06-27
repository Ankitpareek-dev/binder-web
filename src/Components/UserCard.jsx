import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

function UserCard({ user }) {
  const dispatch = useDispatch();
  if (!user) return;
  const { _id, firstName, lastName, bio, age, gender } = user;
  const handleSendingRequest = async (status, id) => {
    const res = await axios.post(
      BASE_URL + `/sendConnectionRequest/${status}/${id}`,
      {},
      { withCredentials: true }
    );
    dispatch(removeFeed(_id));
  };
  //   console.log(user);
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {firstName} {lastName}
          </h2>
          <a>{age}</a>
          <a>{gender}</a>
          <p>{bio}</p>
          <div className="card-actions justify-center my-4">
            <button
              onClick={() => {
                handleSendingRequest("interested", _id);
              }}
              className="btn btn-secondary"
            >
              Interested
            </button>
            <button
              onClick={() => {
                handleSendingRequest("ignored", _id);
              }}
              className="btn btn-primary"
            >
              Ignore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
