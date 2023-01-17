import AllRoutes from "./Pages/Allroutes";
import SearchContextProvider from "./Utilis/Context/SearchContext";
import { CartContextProvider } from "./Utilis/Context/CartContext";
function App() {
  return (
    <div>
      <SearchContextProvider>
        <CartContextProvider>
          <AllRoutes />
        </CartContextProvider>
      </SearchContextProvider>
    </div>
  );
}

export default App;