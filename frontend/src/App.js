// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import Footer from "./components/Footer";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
//         <div className="flex flex-1">
//           <Sidebar isOpen={sidebarOpen} />
//           <main className="flex-1 p-4">
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//             </Routes>
//           </main>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
