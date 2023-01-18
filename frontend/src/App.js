import AllRoutes from "./Pages/Allroutes";
import SearchContextProvider from "./Utilis/Context/SearchContext";
import { CartContextProvider } from "./Utilis/Context/CartContext";
import Navbar from './components/navbar/Navbar';
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
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
