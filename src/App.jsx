import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import MetaAds from "./pages/services_pages/MetaAds";
import GoogleAds from "./pages/services_pages/GoogleAds";
import SEO from "./pages/services_pages/SEO";
import WebsiteDesigning from "./pages/services_pages/WebsiteDesigning";
import Portfolio from "./pages/Portfolio";
import BulkSMS from "./pages/BulkSMS";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsConditions";
import MobileAppDevelopment from "./pages/services_pages/MobileAppDevelopment";
import SocialMediaMarketing from "./pages/services_pages/SMM";
import WebsiteDevelopment from "./pages/services_pages/WebsiteDevelopment";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import FAQChatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="bulk-sms" element={<BulkSMS />} />
          <Route path="meta-ads" element={<MetaAds />} />
          <Route path="google-ads" element={<GoogleAds />} />
          <Route
            path="social-media-marketing"
            element={<SocialMediaMarketing />}
          />
          <Route
            path="mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route path="website-development" element={<WebsiteDevelopment />} />
          <Route path="search-engine-optimization" element={<SEO />} />
          <Route path="website-designing" element={<WebsiteDesigning />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-condition" element={<TermsAndConditions />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <FAQChatbot />
      <ToastContainer position="top-center" autoClose={2500} />
    </>
  );
}

export default App;
