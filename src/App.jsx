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
import AIandML from "./pages/services_pages/AIandML";
import ProductDevelopment from "./pages/services_pages/ProductDevelopment";
import PWADevelopment from "./pages/services_pages/PWADevelopment";
import WebAPI from "./pages/services_pages/WebAPI";
import SoftwareArchitecture from "./pages/services_pages/SoftwareArchitecture";
import SoftwareTesting from "./pages/services_pages/SoftwareTesting";
import UIUXDesign from "./pages/services_pages/UIUXDesign";
import Databases from "./pages/services_pages/Databases";
import CloudServices from "./pages/services_pages/CloudServices";
import Reporting from "./pages/services_pages/Reporting";
import PerformanceMarketing from "./pages/services_pages/PerformanceMarketing";
import PPCAdvertising from "./pages/services_pages/PPCAdvertising";
import AnswerEngineOptimization from "./pages/services_pages/AnswerEngineOptimization";
import EmailMarketing from "./pages/services_pages/EmailMarketing";
// Technology Pages
import ReactJS from "./pages/technology_pages/ReactJS";
import Angular from "./pages/technology_pages/Angular";
import VueJS from "./pages/technology_pages/VueJS";
import NextJS from "./pages/technology_pages/NextJS";
import TypeScript from "./pages/technology_pages/TypeScript";
import HTML5 from "./pages/technology_pages/HTML5";
import CSS3 from "./pages/technology_pages/CSS3";
import TailwindCSS from "./pages/technology_pages/TailwindCSS";
import Bootstrap from "./pages/technology_pages/Bootstrap";
import NodeJS from "./pages/technology_pages/NodeJS";
import Python from "./pages/technology_pages/Python";
import Java from "./pages/technology_pages/Java";
import PHP from "./pages/technology_pages/PHP";
import Laravel from "./pages/technology_pages/Laravel";
import WordPress from "./pages/technology_pages/WordPress";
import ReactNative from "./pages/technology_pages/ReactNative";
import Flutter from "./pages/technology_pages/Flutter";
import Kotlin from "./pages/technology_pages/Kotlin";
import Swift from "./pages/technology_pages/Swift";
import MongoDB from "./pages/technology_pages/MongoDB";
import MySQL from "./pages/technology_pages/MySQL";
import PostgreSQL from "./pages/technology_pages/PostgreSQL";
import Firebase from "./pages/technology_pages/Firebase";
import AWS from "./pages/technology_pages/AWS";
import Figma from "./pages/technology_pages/Figma";
// Vertical Pages
import Healthcare from "./pages/vertical_pages/Healthcare";
import Fintech from "./pages/vertical_pages/Fintech";
import EventManagement from "./pages/vertical_pages/EventManagement";
import Marketplace from "./pages/vertical_pages/Marketplace";
import Compliance from "./pages/vertical_pages/Compliance";
import CRM from "./pages/vertical_pages/CRM";
import LogisticsTransport from "./pages/vertical_pages/LogisticsTransport";
import RealEstate from "./pages/vertical_pages/RealEstate";
import ERP from "./pages/vertical_pages/ERP";
import EdTech from "./pages/vertical_pages/EdTech";
import Automotive from "./pages/vertical_pages/Automotive";
import FundraisingManagement from "./pages/vertical_pages/FundraisingManagement";
import TravelTourism from "./pages/vertical_pages/TravelTourism";
import WorkflowManagement from "./pages/vertical_pages/WorkflowManagement";
import Fitness from "./pages/vertical_pages/Fitness";
import SportsManagement from "./pages/vertical_pages/SportsManagement";
import SaaS from "./pages/vertical_pages/SaaS";
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
          <Route path="ai-ml" element={<AIandML />} />
          <Route path="product-development" element={<ProductDevelopment />} />
          <Route path="pwa-development" element={<PWADevelopment />} />
          <Route path="web-api" element={<WebAPI />} />
          <Route path="software-architecture" element={<SoftwareArchitecture />} />
          <Route path="software-testing" element={<SoftwareTesting />} />
          <Route path="ui-ux-design" element={<UIUXDesign />} />
          <Route path="databases" element={<Databases />} />
          <Route path="cloud-services" element={<CloudServices />} />
          <Route path="reporting" element={<Reporting />} />
          <Route path="performance-marketing" element={<PerformanceMarketing />} />
          <Route path="ppc-advertising" element={<PPCAdvertising />} />
          <Route path="answer-engine-optimization" element={<AnswerEngineOptimization />} />
          <Route path="email-marketing" element={<EmailMarketing />} />
          {/* Technology Routes */}
          <Route path="technologies/reactjs" element={<ReactJS />} />
          <Route path="technologies/angular" element={<Angular />} />
          <Route path="technologies/vuejs" element={<VueJS />} />
          <Route path="technologies/nextjs" element={<NextJS />} />
          <Route path="technologies/typescript" element={<TypeScript />} />
          <Route path="technologies/html5" element={<HTML5 />} />
          <Route path="technologies/css3" element={<CSS3 />} />
          <Route path="technologies/tailwindcss" element={<TailwindCSS />} />
          <Route path="technologies/bootstrap" element={<Bootstrap />} />
          <Route path="technologies/nodejs" element={<NodeJS />} />
          <Route path="technologies/python" element={<Python />} />
          <Route path="technologies/java" element={<Java />} />
          <Route path="technologies/php" element={<PHP />} />
          <Route path="technologies/laravel" element={<Laravel />} />
          <Route path="technologies/wordpress" element={<WordPress />} />
          <Route path="technologies/react-native" element={<ReactNative />} />
          <Route path="technologies/flutter" element={<Flutter />} />
          <Route path="technologies/kotlin" element={<Kotlin />} />
          <Route path="technologies/swift" element={<Swift />} />
          <Route path="technologies/mongodb" element={<MongoDB />} />
          <Route path="technologies/mysql" element={<MySQL />} />
          <Route path="technologies/postgresql" element={<PostgreSQL />} />
          <Route path="technologies/firebase" element={<Firebase />} />
          <Route path="technologies/aws" element={<AWS />} />
          <Route path="technologies/figma" element={<Figma />} />
          {/* Vertical Routes */}
          <Route path="verticals/healthcare" element={<Healthcare />} />
          <Route path="verticals/fintech" element={<Fintech />} />
          <Route path="verticals/event-management" element={<EventManagement />} />
          <Route path="verticals/marketplace" element={<Marketplace />} />
          <Route path="verticals/compliance" element={<Compliance />} />
          <Route path="verticals/crm" element={<CRM />} />
          <Route path="verticals/logistics-transport" element={<LogisticsTransport />} />
          <Route path="verticals/real-estate" element={<RealEstate />} />
          <Route path="verticals/erp" element={<ERP />} />
          <Route path="verticals/ed-tech" element={<EdTech />} />
          <Route path="verticals/automotive" element={<Automotive />} />
          <Route path="verticals/fundraising-management" element={<FundraisingManagement />} />
          <Route path="verticals/travel-tourism" element={<TravelTourism />} />
          <Route path="verticals/workflow-management" element={<WorkflowManagement />} />
          <Route path="verticals/fitness" element={<Fitness />} />
          <Route path="verticals/sports-management" element={<SportsManagement />} />
          <Route path="verticals/saas" element={<SaaS />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-condition" element={<TermsAndConditions />} />
          <Route path="thank-you" element={<ThankYou />} />
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
