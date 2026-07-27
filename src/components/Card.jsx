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
    <div className="shadow-xl rounded-xl p-5 bg-blue-100">
      <h2 className="text-xl font-bold">Name:- {name}</h2>
      <p className="font-bold">Department:- {department}</p>
      <p className="font-bold">Roll No:- {rollno}</p>
      <p className="font-bold">CGPA:- {cgpa}</p>
      <p className="font-bold">Email:- {email}</p>
      <p className="font-bold">Skills:- {skills.join(", ")}</p>
      <button className="font-bold mx-auto mt-2 bg-blue-500 text-white rounded-lg p-1 hover:text-blue-500">Increment CGPA</button>
    </div>
  )
}
export default Card