import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserFormProps {
  onSubmit: (data: { name: string; email: string; password: string }) => void;
  buttonText?: string;
}

const UserForm: React.FC<UserFormProps> = ({
  onSubmit,
  buttonText = "Submit",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
        navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full border p-2 rounded"
        required
      />
      <div className="relative">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border p-2 rounded pr-10" // add padding-right for the icon
          required
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </span>
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default UserForm;
