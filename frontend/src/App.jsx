import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto] place-items-center">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="grid grid-cols-[auto_1fr] w-full h-full">
          <Sidebar isOpen={sidebarOpen} />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;