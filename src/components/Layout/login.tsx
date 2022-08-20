import React from "react";

 const Login: React.FC = () => {

  return (
    <div>
      <form className=" border-2 border-green-500 bg-green-200 rounded-lg w-2/3 mx-auto mt-10">
        <input
          className=" border-2 border-blue-100 rounded-lg pl-5 focus:outline-green-500 h-12 mt-5"
          type="text"
          placeholder="name"
        />
        <br />
        <input
          className=" border-2 border-blue-100 rounded-lg pl-5 focus:outline-green-500 h-12 my-5"
          type="password"
          placeholder="Password"
        />
        <br />
        <input
          className=" border-2 bg-blue-100 h-12 font-bold rounded-lg w-44 mb-5"
          type="submit"
        />
      </form>
    </div>
  );
};
 export default Login