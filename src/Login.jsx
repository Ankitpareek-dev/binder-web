import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";

export default function LoginCard() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      await axios.post(
        "http://localhost:3000/login",
        {
          emailId: emailId,
          password: password,
        },
        {
          withCredentials: true, // Include credentials for CORS
        }
      );
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-center justify-center text-2xl font-bold">
            Login
          </h2>

          {/* Email Input */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="input input-bordered w-full pr-12"
            />
          </div>

          {/* Password Input */}
          <div className="form-control mt-4 relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                aria-label={showPassword ? "Hide password" : "Show password"}
                style={{ width: 24, height: 24 }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <div className="card-actions justify-end mt-6">
            <button className="btn btn-primary w-full" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
