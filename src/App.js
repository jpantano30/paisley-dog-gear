import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Options from "./pages/Options";
import OrderForm from "./pages/OrderForm";
import NotFound from "./pages/NotFound";
import Colors from "./pages/Colors";
import TrainingForm from "./pages/TrainingForm";
import Pricing from "./pages/Pricing"; 
import './App.css'; 
import Consult from "./pages/Booking";
import VideoGallery from "./pages/VideoGallery.js";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DataDeletion from "./pages/DataDeletion";
import ProductBuilder from "./pages/ProductBuilder";


function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/options" element={<Options />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/pricing" element={<Pricing />} /> 
          <Route path="/order" element={<OrderForm />} />
          <Route path="/training" element={<TrainingForm />} />
          <Route path="/booking" element={<Consult />} />
          <Route path="/videos" element={<VideoGallery />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/builder" element={<ProductBuilder />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
