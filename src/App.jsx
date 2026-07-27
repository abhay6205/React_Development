
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";
// import Card from "./components/Card";

// import { useState } from "react";

// import Login from "./components/Login";
// import StudentCard from "./components/StudentCard";

// function App() {
//   // in react make everytag as closing

//   // define state
//   const [count, setCount] = useState(0);
//   // count : variable that we want change
//   //  setCount : setter method for count by which we change count
//   // useState(0) : initial value of count or state

//   // return component or ui only

//   // event showmessage
//   // const showMessage = (data) =>{
//   //   alert("Event Triggered!!! : "+data)
//   // }

//   // state
//   const [name, setName] = useState("");
//   const [dept, setDept] = useState("");

//   // form using event handler

//   // event handler
//   const submitForm = (e) => {
//     e.preventDefault();
//     // alert(name+" "+dept)
//     console.log("Form Submitted : ", name, dept);
//   };

//   const keyPress = (e) => {
//     if (e.key == "Shift") {
//       console.log(e.key);
//     }
//   };

//   const [message, setMessage] = useState("");

//   // create a count using event handler and state by which
//   // count live length of name dept

//   // create a form take details id email password
//   // print details in console
//   // use state, event and event lister

//   // conditional UI rendering

//   // map : by which we pass data from array or list to ui

//   // const subject = ["C++", "Python", "C", "Java"];

//   // const student = [
//   //   {
//   //     "id" : 1,
//   //     "name" : "amit",
//   //     "dept" : "CSE",
//   //     "cgpa" : 6.7
//   //   },
//   //    {
//   //     "id" : 2,
//   //     "name" : "Raj",
//   //     "dept" : "IT",
//   //     "cgpa" : 7.7
//   //   },
//   //    {
//   //     "id" : 3,
//   //     "name" : "aman",
//   //     "dept" : "ECE",
//   //     "cgpa" : 8.7
//   //   },
//   // ]

//   const [student, setStudent] = useState(
//     {
//       name : "",
//       dept : "",
//       email : ""
//     }
//   )

//   // add gender input
//   // dropdown menu of skills


//   // ...student : if we enter some new value to  preserve the previous
//   //  so that they dont vanish , we use spread operator
//   // input field
//   const handleChange = (e) => {
//     setStudent({
//       ...student,
//       [e.target.name] : e.target.value
//     })
//   }

//   // submit form
//   const handleSubmit = (e) =>
//   {
//     e.preventDefault() // to avoid default brower behaviour
//     console.log(student)
//   }

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//       <p>Name : </p>
//       <input 
//         type="text"
//         name="name"
//         placeholder="Enter your name"
//         value={student.name}
//         onChange={handleChange}
//       />
//       <br />
//       <p>Department : </p>
//       <input 
//         type="text"
//         name="dept"
//         placeholder="Enter your department"
//         value={student.dept}
//         onChange={handleChange}
//       />
//       <br />
//       <p>Email : </p>
//       <input 
//         type="email"
//         name="email"
//         placeholder="Enter your email"
//         value={student.email}
//         onChange={handleChange}
//       />
//       <br />
//       <button type="submit">Submit</button>
//     </form>

//       {/* {
//       subject.map((sub) => {
//         return <h1>{sub}</h1>;
//       })
//       } */}

//       {/* {
//         student.filter(student => student.cgpa > 7).map((std) =>{
//           return <StudentCard key={std.id}
//           id={std.id} 
//           name={std.name}
//           dept={std.dept}
//           cgpa={std.cgpa}
//           />
          
//         })
//       } */}

//       {/* <h1>{message}</h1>
//     <button
//       onMouseEnter={() => setMessage("Mouse Entered")}
//       onMouseLeave={() => setMessage("Mouse Leave")}>
//       Hover
//     </button>

//     <Login /> */}

//       {/* <input placeholder="Enter Message"  
//       onKeyDown={keyPress}
//     /> */}
//       {/* <form onSubmit={submitForm}>
//       <p>Name : </p>
//       <input placeholder="Enter name" name="name" type="text"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <p>Department : </p>
//       <input placeholder="Enter Department" name="department"
//       type="text" onChange={(e) => setDept(e.target.value)}/>

//       <br/>
//       <button>Submit</button>
//       </form> */}

//        {/* <Navbar />
//       <Hero />

//       <h1>{name}</h1>
//       <h3>{name.length}</h3>
//       <h1>{dept}</h1> */}
//       {/* <h2>{dept.length}</h2> */}

//       {/* <p>Name : </p>
//       <textarea type="text" name="name" onChange={(e) => setName(e.target.value)}/>
//       <p>Dept : </p>
//       <textarea type="text" name="name" onChange={(e) => setDept(e.target.value)}/> */}

//       {/* <button onClick={() => showMessage("First Event")}>Show Message</button> */}

//       {/* <h1>{count}</h1>

//       <button onClick={ () => setCount(count + 1) }>Increment</button>
//       <br/>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <br/>
//       <button onClick={() => setCount(0)}>Reset</button> */}

//       {/* create a state for name 
//          inital state will be abc

//          and by button change name to charlie
//       */}

//       {/* decrement by 1 and reset to 0 */}

//       {/* Event handling in react
//        by event we change data or ui or any movement

//        onClick 
//        onMouseClick
//        onKeyDown

//       */}

//       {/* <Card
//         name="Raj"
//         rollno={21}
//         dept="CSE"
//         cgpa={6.7}
//         email="raj@gmail.com"
//         skills={["DBMS", "OS"]}
//       />

//       <Card
//         name="Aman"
//         rollno={22}
//         dept="CSE"
//         cgpa={7.7}
//         email="aman@gmail.com"
//       />

//       <Card
//         name="rajiv"
//         rollno={23}
//         dept="CSE"
//         cgpa={8.7}
//         email="rajiv@gmail.com"
//       /> */}

//       {/* State in react

//         when we want to store data in react we use state
//         or any data chances will be done by state in react

//         state is a variable which is used to store data

//         hooks : 

//         useState()

//         #define state
//         const [name , setName] = useState("abc")

//         useState("abc") is initial state

//         const [count, setCount] = useState(0)
//       */}
//       {/* <Footer /> */}
//     </>
//   );
// }

// // Footer.jsx

// export default App;

import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
function App() {
  return (
    
    <div className="shadow-lg p-5 w-4xl my-auto mx-auto bg-blue-100">
      
      <Navbar />
      <Form />
      {/* 
      m - mx, my, mr, ml, mt, mb  (m:- margin)
      p - px, py, pr, pl, pt, pb   (p:- padding)
      text - text-center, text-left, text-right
      font - font-bold, font-normal, font-light
      bg - bg-red-500, bg-blue-500, bg-green-500
      rounded - rounded-lg, rounded-full, rounded-xl
      size = sm(small), md(medium), lg(large), xl(extra large)
      shadow - shadow-lg, shadow-md, shadow-sm
      border - border-2, border-4, border-8
      flex - flex-row, flex-col
      grid - grid-cols-2, grid-cols-3
      */}
      <h1 className="text-5xl text-blue-900 font-mono text-center">Tailwind Fundamentals</h1>
      <button className="rounded-4xl bg-blue-500 text-white px-5 py-2 mx-5 my-5">Click Me</button>
      {/* flexbox */}
      <div className="flex gap-4">
        <button className="rounded-4xl bg-blue-500 text-white px-5 py-2 my-5">Flex Button</button>
        <button className="rounded-4xl bg-blue-500 text-white px-5 py-2 my-5">Flex Button</button>
        <button className="rounded-4xl bg-blue-500 text-white px-5 py-2 my-5">Flex Button</button>
      </div>

      {/*grid */}
      <div className="grid grid-cols-2 gap-4">
        <button className="rounded-4xl bg-blue-500 text-white px-5 py-2 my-5">Grid Button</button>
        <button className="rounded-4xl bg-blue-500 text-white px-5 py-2 my-5">Grid Button</button>
        <button className="rounded-4xl bg-blue-500 text-white px-5 py-2 my-5">Grid Button</button>
        <button className="rounded-4xl bg-blue-500 text-white px-5 py-2 my-5">Grid Button</button>
      </div>
      <Table />
    </div>
  );
}

export default App;