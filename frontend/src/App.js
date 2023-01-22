import AllRoutes from "./Pages/Allroutes";
import SearchContextProvider from "./Utilis/Context/SearchContext";
import { CartContextProvider } from "./Utilis/Context/CartContext";
import Navbar from "./Components/navbar/Navbar";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import { useLayoutEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
function App() {
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
    <div>
      <SearchContextProvider>
        <CartContextProvider>
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
        </CartContextProvider>
      </SearchContextProvider>
    </div>
  );
}

export default App;
