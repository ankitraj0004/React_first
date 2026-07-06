import React, {useState} from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  return (
    // <div>
      
    //   <h3>Number is {num}</h3>
    //   <button onClick={() => setNum(num + 10)}>Increment</button>
    //   <button onClick={() => setNum(num - 10)}>Decrement</button>
    // </div>

    <div>
      <h1>Number is {num}</h1>
      <button onClick = {function(){
        setNum(num + 10)
        console.log("Incremented successfully")
      }}>Increment</button>
      <button onClick = {function(){
        setNum(num - 10)
        console.log("Decremented successfully")
      }}>Decrement</button>
    </div>
  )
}

export default App













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


