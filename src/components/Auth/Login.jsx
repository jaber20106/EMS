import { useState } from "react";
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is", password);

    setEmail('')
    setPassword('')
  };

  return (
    <div className="min-h-screen bg-[#101010] flex items-center justify-center">
      <div className="w-[420px] h-[345px] border-2 border-[#4da875] rounded-xl flex flex-col items-center justify-center">

        <form
          onSubmit={(e) => {
            submitHandler(e)
          }}
          className="flex flex-col items-center"
        >

          {/* Email */}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)

            }}
            required
            type="email"
            placeholder="Enter your email"
            className="w-[256px] h-[48px] px-6 mb-3 bg-transparent border-2 border-[#4da875] rounded-full text-white text-[17px] font-semibold outline-none placeholder:text-gray-400 focus:border-[#5fc58b]"
          />

          {/* Password */}
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
            type="password"
            placeholder="Enter password"
            className="w-[256px] h-[48px] px-6 mb-7 bg-transparent border-2 border-[#4da875] rounded-full text-white text-[17px] font-semibold outline-none placeholder:text-gray-400 focus:border-[#5fc58b]"
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-[256px] h-[44px] rounded-full bg-[#4da875] text-white text-[17px] font-bold hover:bg-[#419565] transition duration-200"
          >
            Log in
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;