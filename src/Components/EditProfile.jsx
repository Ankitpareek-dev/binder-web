import { useState } from "react";
import UserCard from "./userCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

function EditProfile({ user }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [bio, setBio] = useState(user.bio);

  const editBio = async () => {
    try {
      const res = axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName: firstName,
          lastName: lastName,
          age: age,
          gender: gender,
          about: bio,
        },
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="flex justify-center items-center gap-10 m-auto">
      <div className="flex justify-center my-10">
        <div className="card bg-base-300 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-center justify-center text-2xl font-bold">
              Edit Profile
            </h2>

            {/* FirstName Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                value={firstName}
                className="input input-bordered w-full pr-12"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            {/* LastName Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder=""
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input input-bordered w-full pr-12"
              />
            </div>
            {/* Age Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input
                type="text"
                placeholder=""
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="input input-bordered w-full pr-12"
              />
            </div>
            {/* Gender Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="input input-bordered w-full pr-12"
              />
            </div>
            {/* Bio Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Bio</span>
              </label>
              <input
                type="text"
                placeholder=""
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="input input-bordered w-full pr-12"
              />
            </div>

            <div className="card-actions justify-end mt-6">
              <button
                onClick={() => editBio()}
                className="btn btn-primary w-full"
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, age, gender, bio }} />
    </div>
  );
}

export default EditProfile;
