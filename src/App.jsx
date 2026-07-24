import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Card from './components/Card'
import Login from './components/Login'

import { useState } from 'react'

function App() {

  // in react make everytag as closing

  // define state
  const [password, setPassword] = useState("")
  const [count, setCount] = useState(0)
  //count : variable that we want change
  //setCount : setter methos for count by which we change count
  //useState(0) : initial value of count os state

  // return component or ui only

  // event showmessage
  //const showMessage = (data) => {
  //  alert("Event Triggered!!! : "+data)
  //}

  const[name, setName] = useState("")
  const[dept, setDept] = useState("")

  const submitForm = (e) => {
    e.preventDefault()
    // alert("Form Submitted", name, dept)
    console.log("Form Submitted", name, dept)
  }

  const keyPress = (e) => {
    console.log(e.key)
  }

  const [message, setMessage] = useState("")
  // create a count using event handler and state by which
  //count live length of name dept


  //conditional UI rendering in react
  return (
    <>
    <br/>
    <h1>{message}</h1>
    <button 
        onMouseEnter={() => setMessage("Mouse Entered")}
        onMouseLeave={() => setMessage("Mouse Left")}
        onClick={() => setMessage("Mouse Clicked")}
    >Hover Me</button>
    <br/>
    <input type="text" name="name" onKeyDown={keyPress} />

    {/*
    <br/>
      <form onSubmit={submitForm}>
        <p>Name : </p>
        <textarea type="text" name="name" onChange={(e) => setName(e.target.value)}></textarea>
        <p>Dept : </p>
        <textarea type="text" name="dept" onChange={(e) => setDept(e.target.value)}></textarea>
        <br/>
        <button type='submit'>Submit</button>
      </form> */}

      //create a form that take details id email password and print details in console, use state, event and event listener
      <br/>
        <form onSubmit={(e) => {
          e.preventDefault()
          console.log("Form Submitted", name, dept)
        }}>
          <p>User Id : </p>
          <textarea type="text" name="name" onChange={(e) => setName(e.target.value)}></textarea>
          <p>Email : </p>
          <textarea type="text" name="dept" onChange={(e) => setDept(e.target.value)}></textarea>
          <p>Password : </p>
          <textarea type="text" name="password" onChange={(e) => setPassword(e.target.value)}></textarea>
          <br/>
          <button type='submit'>Submit</button>
        </form>
      <Navbar />
      <Hero />

      <h1>{name}</h1>
      <h3>{name.length}</h3>
      <h1>{dept}</h1>
      <h3>{dept.length}</h3>

      <p>Name : </p>
      <textarea type="text" name="name" onChange={(e) => setName(e.target.value)}></textarea>
      <p>Dept : </p>
      <textarea type="text" name="dept" onChange={(e) => setDept(e.target.value)}></textarea>

      {/* <button onClick={() => showMessage("First Event")}>Show Message</button> */}

      {/* <h1>{count}</h1>
      
      <button onClick={ () => setCount(count + 1)}>Increment Count</button> 
      <br/>
      <button onClick={ () => setCount(0)}>Reset Count</button>
      <br/>
      <button onClick={ () => setCount(count - 1)}>Decrement Count</button>*/}

      {/* create a state for name
          initial state will be abc
          and by button change name to charlie*/}

      {/* decrement by 1 and reset to 0*/}

      {/* Event handling in react
          by event we change data or ui or any movement 
          
          onClick
          onMouseClick
          onKeyDown
          
      */}

      <Card 
        name="Abhay Kumar" 
        department="Computer Science" 
        rollno={23} 
        cgpa={9.5} 
        email="abhay@example.com" 
        skills={["JavaScript", "Python"]} 
      />
      {/* State in react
          when we want to store data in react we use state
          or any data chance will be done by state in react

          state is a variable which is used to store data

          hooks : 

          useState()

          #define state
          const [name, setName] = useState("abc")

          useState("abc") is initial state

          const [count, setCount] = useState(0)
        */}
      <Login />
      <Footer />
    </>
  );
}

export default App;
