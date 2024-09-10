import { useLoginMutation } from "@/redux/api/authApi/authApi";
import { setEmail, setPassword } from "@/redux/features/loginSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import "./toastStyles.css";

const Login = () => {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state: RootState) => state.login);
  // const { token } = useAppSelector((state: RootState) => state.user);
  // console.log("tok tok token", token);

  const [login, { isError, isSuccess }] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data } = await login({ email: email, password });
    console.log("user azir=>", data);
    const { accessToken } = data?.data;
    console.log(accessToken);
    if (isSuccess) {
      // Show success toast
      toast.success("Registration successful!");
    } else if (isError) {
      // Show error toast
      toast.error("Registration failed! Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-blue-200">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login 
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
            />
          </div>
        
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
        <ToastContainer position="top-right" autoClose={2000} />
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
