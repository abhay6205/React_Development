// Student : h1->name, p->department, p->rollno, p->cgpa, p->email
//place after hero section
// function Card(props) {
//   return (
//     <>
//       <h1>Name:- {props.name}</h1>
//       <p>Department:- {props.department}</p>
//       <p>Roll No:- {props.rollno}</p>
//       <p>CGPA:- {props.cgpa}</p>
//       <p>Email:- {props.email}</p>
//     </>
//   )
// }
function Card({name, department, rollno, cgpa, email, skills=[]}) {
  return (
    <>
      <h2>Name:- {name}</h2>
      <p>Department:- {department}</p>
      <p>Roll No:- {rollno}</p>
      <p>CGPA:- {cgpa}</p>
      <p>Email:- {email}</p>
      <p>Skills:- {skills.join(", ")}</p>
      <button>Increment CGPA</button>
    </>
  )
}
export default Card