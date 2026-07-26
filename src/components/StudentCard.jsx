function StudentCard({id, name, dept, cgpa})
{
    return (
        <div>
            <h2>ID Card : {id}</h2>
            <p>Name : {name}</p>
            <p>Department : {dept}</p>
            <p>CGPA : {cgpa}</p>
        </div>
    )
}

export default StudentCard