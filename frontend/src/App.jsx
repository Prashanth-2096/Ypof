import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";


import DogSection from "./collections/dogs";
import CatSection from "./collections/cats";

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
              <Route path="/collection/cats" element={<CatSection />} />
              <Route path="/collection/dogs" element={<DogSection />} />

            </Routes>
          </main>
        </div>
        {/* <DogSection/>
        <CatSection/> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;