import { useState } from "react";
import Input from "../components/Input";
import ToastMessage from "../components/ToastMessage";
import { login } from "../apis/login_api";

export default function Login() {
  const[toast,setToast]=useState(false);
  const [form, setForm] = useState({
    username: "",
    password: ""
  });
 
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(form);

      console.log(data);
      
      localStorage.setItem("token", data.token);
       
      
      setToast(true);
      

      setTimeout(() => setToast(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };
 

  return (
    <>
    {toast && <ToastMessage message="Login successful!" />}

    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-20 bg-gray-900 p-6 rounded-lg"
    >
      <Input
        label="Username"
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Enter username"
      />

      <Input
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Enter password"
      />
    
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md mt-4"
      >
        Login
      </button>
    </form>
    </>
  );
}
