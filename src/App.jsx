import React from 'react'

const App = () => {


  // const handleSubmit = (e) => {
    
  //   e.preventDefault()  
  //   console.log("Form submitted successfully")
  //}
  return (
    <div>

      <form>
        <input type="text" className="btext"  placeholder='Enter your name' />
        <input type="email" className="text" placeholder='Enter your email' />
        <input type="password" className="text" placeholder='Enter your password' />
        <button type="submit" className="">Submit</button>  
      </form>
      
      {/* <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter your name' />
        <input type="email" className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter your email' />
        <input type="password" className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter your password' />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form> */}

    </div>
  )
}

export default App


















// import React from 'react'

// const App = () => {

//   return (
//     <div>
//       <div className="flex h-screen items-center justify-center bg-gray-100">
//       <h1 className="text-4xl font-bold text-blue-600">
//         Tailwind CSS is working!
//       </h1>
//       <h2 className="text-2xl text-gray-700 mt-4">
//         Hello, Tailwind!
//       </h2>
//     </div>
//     </div>
//   )
// }

// export default App







// import React, {useState} from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)

//   return (
//     // <div>
      
//     //   <h3>Number is {num}</h3>
//     //   <button onClick={() => setNum(num + 10)}>Increment</button>
//     //   <button onClick={() => setNum(num - 10)}>Decrement</button>
//     // </div>

//     <div>
//       <h1>Number is {num}</h1>
//       <button onClick = {function(){
//         setNum(num + 10)
//         console.log("Incremented successfully")
//       }}>Increment</button>
//       <button onClick = {function(){
//         setNum(num - 10)
//         console.log("Decremented successfully")
//       }}>Decrement</button>
//     </div>
//   )
// }

// export default App













// import React, {useState} from 'react'

// const App = () => {
 
  
//   const [a, setA] = useState("Ankit")

//   const changeValue = () => {
    
//     setA("Ansh Kumar")
//     console.log("Change successfully")
//   }

//   return (
//     <div>
//       <h1>The value of a is {a}</h1>
//       <button onClick={changeValue}>Change User</button>
//     </div>
//   )
// }

// export default App

















// HOOKS

// hooks is a type of function which is used to manage the state of the component and also used to manage the lifecycle of the component.


