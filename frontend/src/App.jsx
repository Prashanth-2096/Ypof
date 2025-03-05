import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Cats from "./collections/cats";
import Dogs from "./collections/dogs"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="grid ">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="grid grid-cols-[auto_1fr] w-full h-full">
          <Sidebar isOpen={sidebarOpen} />
          <main className="p-4 w-screen h-full">
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/collection/cats" element={<Cats />} />
              <Route path="/collection/dogs" element={<Dogs />} />

            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;