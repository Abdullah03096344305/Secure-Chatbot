// import React, { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     // Validate if password and confirmPassword are same
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/users/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           password: formData.password,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert('Signup successful! Please login now.');
//         navigate('/'); // Navigate to Login page after successful signup
//       } else {
//         alert(data.message || 'Signup failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//       alert('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
//         <form onSubmit={handleSignup} className="space-y-4">
//           {/* Name Input */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-1">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter your name"
//             />
//           </div>

//           {/* Email Input */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter your password"
//             />
//             <div
//               className="absolute top-10 right-3 cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
//             </div>
//           </div>

//           {/* Confirm Password Input */}
//           <div className="relative">
//             <label className="block text-gray-700 font-semibold mb-1">Confirm Password</label>
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Confirm your password"
//             />
//             <div
//               className="absolute top-10 right-3 cursor-pointer"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             >
//               {showConfirmPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
//             </div>
//           </div>

//           {/* Sign Up Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-4">
//           Already have an account?{" "}
//           <Link to="/" className="text-blue-500 hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Signup successful! Please login.');
        navigate('/');
      } else {
        alert(data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your password"
            />
            <div
              className="absolute top-9 right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible size={22} /> : <AiOutlineEye size={22} />}
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-1">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Confirm your password"
            />
            <div
              className="absolute top-9 right-3 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible size={22} /> : <AiOutlineEye size={22} />}
            </div>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
           className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
