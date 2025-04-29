// // import React, { useState } from "react";
// // import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// // import { Link, useNavigate } from "react-router-dom";

// // const Login = () => {
// //   const [formData, setFormData] = useState({
// //     email: "",
// //     password: "",
// //   });
// //   const [showPassword, setShowPassword] = useState(false);

// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleLogin = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch('http://localhost:5000/api/users/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           email: formData.email,
// //           password: formData.password,
// //         }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         alert('Login successful!');
// //         navigate('/home'); // After login, navigate to dashboard (or wherever you want)
// //       } else {
// //         alert(data.message || 'Invalid credentials, please try again.');
// //       }
// //     } catch (error) {
// //       console.error('Error during login:', error);
// //       alert('Something went wrong. Please try again.');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
// //       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
// //         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
// //         <form onSubmit={handleLogin} className="space-y-4">
// //           {/* Email Input */}
// //           <div>
// //             <label className="block text-gray-700 font-semibold mb-1">Email</label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
// //               placeholder="Enter your email"
// //             />
// //           </div>

// //           {/* Password Input */}
// //           <div className="relative">
// //             <label className="block text-gray-700 font-semibold mb-1">Password</label>
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               name="password"
// //               value={formData.password}
// //               onChange={handleChange}
// //               required
// //               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
// //               placeholder="Enter your password"
// //             />
// //             <div
// //               className="absolute top-10 right-3 cursor-pointer"
// //               onClick={() => setShowPassword(!showPassword)}
// //             >
// //               {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
// //             </div>
// //           </div>

// //           {/* Login Button */}
// //           <button
// //             type="submit"
// //             className="w-full bg-purple-500 text-white p-3 rounded-lg font-semibold hover:bg-purple-600 transition"
// //           >
// //             Login
// //           </button>
// //         </form>

// //         <p className="text-center text-gray-600 mt-4">
// //           Don't have an account?{" "}
// //           <Link to="/signup" className="text-purple-500 hover:underline">
// //             Sign Up
// //           </Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;


// import React, { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:5000/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert('Login successful!');
//         // You can store user info or token here if needed
//         // localStorage.setItem('user', JSON.stringify(data.user));

//         navigate('/home'); // Navigate after successful login
//       } else {
//         alert(data.message || 'Invalid credentials, please try again.');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

//         <form onSubmit={handleLogin} className="space-y-4">
//           {/* Email Input */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Password Input */}
//           <div className="relative">
//             <label className="block text-gray-700 font-semibold mb-1">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//               placeholder="Enter your password"
//             />
//             <div
//               className="absolute top-10 right-3 cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
//             </div>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-purple-500 text-white p-3 rounded-lg font-semibold hover:bg-purple-600 transition disabled:opacity-50"
//             disabled={loading}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-4">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-purple-500 hover:underline">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import  { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
        navigate('/home');
      } else {
        alert(data.message || 'Invalid credentials, please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Login to Your Account</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
            <div
              className="absolute top-10 right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible size={22} /> : <AiOutlineEye size={22} />}
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md font-semibold transition disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don&apos;t have an account? 
          <Link to="/signup" className="text-blue-600 hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
