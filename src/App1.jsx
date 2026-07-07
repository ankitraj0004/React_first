import React, {useState} from 'react'

const App = () => {

  const [usename, setUsername] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Username:", usename)
    setUsername('')
  }
  return (
    <div>
      
      <form onSubmit = {submitHandler}>
        <input
          type="text"
          placeholder="Enter username"
          value={usename}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          className='px-4 rounded py-3 text-xl m-5' type ='text' placehiolder='Enter username' value={usename} onChange={(e) => {setUsername(e.target.value)}}
        />
        <button className='px-4 text-white py-3 text-xl font-semibold bg-emerald-600 hover:bg-emerald-600 rounded'>Submit</button>
      </form>

    </div>
  )
}

export default App







// fragments it is a empty tag that is used to wrap multiple elements without adding an extra node to the DOM. It is useful when you want to return multiple elements from a component without introducing unnecessary divs or other wrapper elements. In React, you can use fragments in two ways: using the shorthand syntax <>...</> or using <React.Fragment>...</React.Fragment>.





// import React from "react";

// const Navbar = () => {
//   const handleLogin = (e) => {
//     e.preventDefault();
//     alert("Login button clicked!");
//   };

//   return (
//     <nav className="flex items-center justify-between bg-blue-600 px-10 py-4 text-white shadow-md">
//       {/* Logo */}
//       <h1 className="text-3xl font-bold">MyApp</h1>

//       {/* Navigation Links */}
//       <ul className="flex items-center gap-8">
//         <li>
//           <a href="#" className="hover:text-yellow-300">
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-yellow-300">
//             About
//           </a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-yellow-300">
//             Services
//           </a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-yellow-300">
//             Contact
//           </a>
//         </li>
//       </ul>

//       {/* Login Button */}
//       <form onSubmit={handleLogin}>
//         <button
//           type="submit"
//           className="rounded-lg bg-white px-5 py-2 font-semibold text-blue-600 hover:bg-gray-200"
//         >
//           Login
//         </button>
//       </form>
//     </nav>
//   );
// };

// export default Navbar;