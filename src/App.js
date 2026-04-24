import { Routes, Route } from "react-router-dom";
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
import VideoGallery from "./pages/VideoGallery.js";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DataDeletion from "./pages/dataDeletion.js";
import ProductBuilder from "./pages/ProductBuilder";
import VideoWatch from "./pages/VideoWatch";
import QuickOrder from "./pages/QuickOrder";
import Boston from "./pages/Boston";
import BiothaneHub from "./pages/BiothaneHub.jsx"; 
import TrainingGallery from "./pages/TrainingGallery.js";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/boston-dog-trainer-north-end" element={<Boston />} />
          <Route path="/biothane-dog-leashes-boston" element={<BiothaneHub />} />
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/training-gallery" element={<TrainingGallery />} />
          <Route path="/options" element={<Options />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/pricing" element={<Pricing />} /> 
          <Route path="/quick-order" element={<QuickOrder />} />
          <Route path="/order" element={<OrderForm />} /> 
          <Route path="/training" element={<TrainingForm />} />
          <Route path="/videos" element={<VideoGallery />} />
          <Route path="/videos/:slug" element={<VideoWatch />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/builder" element={<ProductBuilder />} />

        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
