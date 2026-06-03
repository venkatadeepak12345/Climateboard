import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import climateImage from "../assets/climate.png";
export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Login Successful 🎉");

        setFormData({
          email: "",
          password: "",
        });

        navigate("/dashboard");
      } else {
        toast.error(data.message || "Login Failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="flex w-full flex-col items-center justify-center bg-gray-100 px-6 md:w-1/2">
        <div className="mb-8 max-w-md">
         
          <p className="mt-3 text-2xl text-gray-700">
            Abudhabi Climate Registry Dashboard
          </p>
        </div>

        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-3 text-lg font-bold text-white hover:bg-blue-700"
            >
              Log In
            </button>

            <div className="text-center">
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgotten password?
              </a>
            </div>

            <hr />

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="rounded-md bg-green-500 px-6 py-3 font-bold text-white hover:bg-green-600"
              >
                Create New Account
              </button>
            </div>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-gray-700">
          <span className="font-bold">Create a Page</span> for Login for climate registry,
          brand or business.
        </p>
      </div>

      {/* Right Side Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={climateImage}
          alt="Login Background"
          className="h-screen w-full object-cover"
        />
      </div>
    </div>
  );
}