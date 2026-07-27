// create a compoenent table and inside it create a table and apply tailwind css, columns:- id, name, dept, cgpa, age
function Table()
{
    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-600 mb-4" align="center">Table</h1>
            <table className="table-auto border-collapse border border-gray-400 bg-blue-100 align-middle mx-auto">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2">ID</th>
                        <th className="border border-gray-400 px-4 py-2">Name</th>
                        <th className="border border-gray-400 px-4 py-2">Department</th>
                        <th className="border border-gray-400 px-4 py-2">CGPA</th>
                        <th className="border border-gray-400 px-4 py-2">Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400 px-4 py-2">1</td>
                        <td className="border border-gray-400 px-4 py-2">John Doe</td>
                        <td className="border border-gray-400 px-4 py-2">Computer Science</td>
                        <td className="border border-gray-400 px-4 py-2">3.8</td>
                        <td className="border border-gray-400 px-4 py-2">20</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table