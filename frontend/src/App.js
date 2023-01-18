import AllRoutes from "./Pages/Allroutes";
import SearchContextProvider from "./Utilis/Context/SearchContext";
import { CartContextProvider } from "./Utilis/Context/CartContext";
import Navbar from './Components/navbar/Navbar';
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
function App() {
  return (
    <div>
      <SearchContextProvider>
        <CartContextProvider>
          <Header />
          <hr />
          <SearchBox />
          <Navbar />
          <AllRoutes />
        </CartContextProvider>
      </SearchContextProvider>
    </div>
  );
}

export default App;
