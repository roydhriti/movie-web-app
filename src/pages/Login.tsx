import { useState } from "react";
import { userApi } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await userApi.login({ email, password });
    navigate("/movies");
    console.log(res);
  };


  return (
    <div className="h-screen">
      <div className="flex flex-col h-screen items-center justify-center w-[calc(100%-60%)] mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Login</h2>

        <form onSubmit={handleLogin} className="w-full flex flex-col gap-5">
          <div>
            <h5 className="ext-3xl font-bold text-blue-700">Email</h5>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border border-gray-300 bg-white text-gray-800 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          </div>

          <div className="relative w-full">
            <h5 className="ext-3xl font-bold text-blue-700">Password</h5>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="text-gray-800 bg-white border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[38px] right-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
