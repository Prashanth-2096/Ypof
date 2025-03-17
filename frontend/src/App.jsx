import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login"
import { AuthProvider } from "./contexts/authContext";
import DogSection from "./collections/dogs";
import CatSection from "./collections/cats";
import FAQ from "./components/faq";
import SignUp from "./components/SignUp";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AuthProvider>

      <Router>
        <div className="grid h-screen w-screen">
          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <div className="grid grid-cols w-full h-full">
            {/* <Sidebar isOpen={sidebarOpen} className="w-54 h-screen" /> */}
            <main className="p-4 h-full w-full overflow-auto flex flex-col items-center justify-center">
              <Routes>
                <Route path="/" element={<><Homepage/> <FAQ/></>}/>
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/collection/cats" element={<CatSection/>} />
                <Route path="/collection/dogs" element={<DogSection/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
              </Routes>
            </main>
          </div>
          
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;