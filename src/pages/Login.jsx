import { useState } from "react";
import Input from "../components/Input";

export default function Login() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
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
  );
}
