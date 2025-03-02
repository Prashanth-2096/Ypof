function Sidebar({ isOpen }) {
    return (
      <aside className={`bg-gray-800 text-white w-64 p-4 ${isOpen ? "block" : "hidden"}`}>
        <ul>
          <li className="p-2 hover:bg-gray-700"><a href="/">Dashboard</a></li>
        </ul>
      </aside>
    );
  }

export default Sidebar