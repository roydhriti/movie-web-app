import { userApi } from "../api/userApi";
import UserForm from "../components/user/UserForm";

const Register = () => {
  const handleRegister = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const res = await userApi.register(data);
      console.log("User registered:", res);
      alert("Registration successful!");
    } catch (err) {
      console.error(err);
      alert("Registration failed!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <UserForm onSubmit={handleRegister} buttonText="Register" />
    </div>
  );
};

export default Register;
