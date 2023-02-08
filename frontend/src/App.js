import AllRoutes from "./Pages/Allroutes";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import { useContext, useLayoutEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import AsFooter from "./components/Home/AsFooter";
import { ThemeContext } from "./Utilis/ThemeContext/ThemeContext";
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = (e) => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id={theme}>
      {scrolled ? (
        <Navbar />
      ) : (
        <Box>
          <Header />
          <hr />
          <Box display={{ md: "none", lg: "none", xl: "none" }}>
            <Navbar />
          </Box>
          <SearchBox />
        </Box>
      )}
      <AllRoutes />
      <AsFooter />
    </div>
  );
}

export default App;
