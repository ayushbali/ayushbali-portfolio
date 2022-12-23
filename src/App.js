import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isDark, setDark] = useState(false);

  const handleDark = () => {
    setDark(!isDark);
    console.log("click");
  };

  return (
    <div className={`App h-screen `}>
      <Navbar toggleDark={handleDark} dark={isDark} />
      <Layout dark={isDark} />
      <Footer dark={isDark} />
    </div>
  );
}

export default App;
