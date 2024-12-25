import "./App.css";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import AllRoutes from "./component/Routes/AllRoutes";
import Banner from "./pages/LandingPage/Banner/Banner";
import Product from "./pages/LandingPage/Products/Product";

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
