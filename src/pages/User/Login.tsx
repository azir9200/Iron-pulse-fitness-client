
import { useLoginMutation } from "@/redux/api/authApi/authApi";
import { setEmail, setPassword } from "@/redux/features/loginSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { verifyToken } from "../../redux/utils";
import { setUser } from "@/redux/features/userSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state: RootState) => state.login);
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login({ email, password }).unwrap();
      const user = verifyToken(result.data.accessToken);
      dispatch(setUser({ user: user, token: result.data.accessToken }));

      if (result.success && result.data?.accessToken) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration is successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      } else {
        throw new Error(result.message || "Login failed. No access token.");
      }
    } catch (error: any) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration is successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="w-full max-w-md p-8 bg-slate-300 shadow-md rounded-lg">
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
        <p className="text-sm text-center text-gray-600 mt-4">
          New here?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            register first
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
