function Navbar() {
  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center px-6 py-4 mb-2">
      <h1 className="text-3xl font-bold my-2">Student Dashboard</h1>

      <div className="flex gap-4">
        <a href="#" className="font-bold text-3xl hover:bg-blue-300">Home</a>
        <a href="#" className="font-bold text-3xl hover:bg-blue-300">About</a>
        <a href="#" className="font-bold text-3xl hover:bg-blue-300">Login</a>
      </div>
    </nav>
  );
}
export default Navbar