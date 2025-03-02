function Header({ toggleSidebar }) {
    return (
      <header className="bg-blue-600 text-white p-4 flex justify-between">
        <button onClick={toggleSidebar} className="text-xl">☰</button>
        <h1 className="text-lg font-bold">YPOF</h1>
      </header>
    );
  }

  export default Header