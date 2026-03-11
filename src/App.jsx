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
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";
import Hostinger from "./pages/Hostinger";
import BusinessLanding from "./pages/BusinessLanding";

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
import DotNet from "./pages/technology_pages/DotNet";
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
import Azure from "./pages/technology_pages/Azure";
import IBMCloud from "./pages/technology_pages/IBMCloud";
import GoogleCloudPlatform from "./pages/technology_pages/GoogleCloudPlatform";
import Figma from "./pages/technology_pages/Figma";
// Database Pages
import IndexedDatabaseAPI from "./pages/technology_pages/IndexedDatabaseAPI";
import AzureCosmosDB from "./pages/technology_pages/AzureCosmosDB";
import AmazonDynamoDB from "./pages/technology_pages/AmazonDynamoDB";
import MsSQL from "./pages/technology_pages/MsSQL";
// Third Party Integration Pages
import Telerik from "./pages/technology_pages/Telerik";
import QuickBooksXero from "./pages/technology_pages/QuickBooksXero";
import TwilioPlivo from "./pages/technology_pages/TwilioPlivo";
import DevExpress from "./pages/technology_pages/DevExpress";
import SyncFusion from "./pages/technology_pages/SyncFusion";
import MudBlazor from "./pages/technology_pages/MudBlazor";
import StripePaypal from "./pages/technology_pages/StripePaypal";
import GoogleAPI from "./pages/technology_pages/GoogleAPI";
import Highcharts from "./pages/technology_pages/Highcharts";
import YahooFinance from "./pages/technology_pages/YahooFinance";
import Zoom from "./pages/technology_pages/Zoom";
import PowerBI from "./pages/technology_pages/PowerBI";
import MaterialUI from "./pages/technology_pages/MaterialUI";
import PrimeNG from "./pages/technology_pages/PrimeNG";
import Radzen from "./pages/technology_pages/Radzen";
import CKEditor from "./pages/technology_pages/CKEditor";
import EasyPost from "./pages/technology_pages/EasyPost";
import KitBuilder from "./pages/technology_pages/KitBuilder";
import Shopify from "./pages/technology_pages/Shopify";
import Daisy from "./pages/technology_pages/Daisy";
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
import SaaS from "./pages/technology_pages/SaaS";
import SaaSVertical from "./pages/vertical_pages/SaaS";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import FAQChatbot from "./components/Chatbot";
import WhatsAppButton from "./components/WhatsAppButton";
import SocialMediaButtons from "./components/SocialMediaButtons";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<BusinessLanding />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="bulk-sms" element={<BulkSMS />} />
          <Route path="services" element={<Services />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="best-hosting-in-india" element={<Hostinger />} />
          <Route path="business-landing" element={<BusinessLanding />} />
          <Route path="technologies/saas" element={<SaaS />} />
          <Route path="meta-ads" element={<MetaAds />} />
          <Route path="google-ads" element={<GoogleAds />} />
          <Route
            path="social-media-marketing-company-in-india"
            element={<SocialMediaMarketing />}
          />
          <Route
            path="mobile-app-development-company-in-india"
            element={<MobileAppDevelopment />}
          />
          <Route path="website-development" element={<WebsiteDevelopment />} />
          <Route path="search-engine-optimization" element={<SEO />} />
          <Route
            path="website-design-services-in-india"
            element={<WebsiteDesigning />}
          />
          <Route path="ai-ml" element={<AIandML />} />
          <Route
            path="product-development-services-in-india"
            element={<ProductDevelopment />}
          />
          <Route
            path="progressive-web-app-development-company-in-india"
            element={<PWADevelopment />} />
          <Route path="api-development-company-in-india" element={<WebAPI />} />
          <Route
            path="software-architecture-services-in-india"
            element={<SoftwareArchitecture />}
          />
          <Route
            path="software-testing-companies-in-india"
            element={<SoftwareTesting />}
          />
          <Route
            path="ui-ux-design-company-in-india"
            element={<UIUXDesign />}
          />
          <Route path="databases" element={<Databases />} />
          <Route path="cloud-services" element={<CloudServices />} />
          <Route path="reporting" element={<Reporting />} />
          <Route
            path="performance-marketing"
            element={<PerformanceMarketing />}
          />
          <Route path="ppc-advertising" element={<PPCAdvertising />} />
          <Route
            path="answer-engine-optimization-services"
            element={<AnswerEngineOptimization />}
          />
          <Route
            path="email-marketing-services-in-india"
            element={<EmailMarketing />}
          />
          {/* Technology Routes */}
          <Route
            path="reactjs-development-company-in-india"
            element={<ReactJS />}
          />
          <Route
            path="angular-development-company-in-india"
            element={<Angular />}
          />
          <Route
            path="vuejs-development-company-in-india"
            element={<VueJS />}
          />
          <Route
            path="javascript-development-company-in-india"
            element={<NextJS />}
          />
          <Route
            path="typescript-development-company-in-india"
            element={<TypeScript />}
          />
          <Route
            path="html5-development-company-in-india"
            element={<HTML5 />}
          />
          <Route path="css3-development-company-in-india" element={<CSS3 />} />
          <Route
            path="tailwind-css-development-company-in-india"
            element={<TailwindCSS />}
          />
          <Route
            path="bootstrap-development-company-in-india"
            element={<Bootstrap />}
          />
          <Route
            path="nodejs-development-company-in-india"
            element={<NodeJS />}
          />
          <Route path="technologies/python" element={<Python />} />
          <Route path="technologies/java" element={<Java />} />
          <Route path="technologies/php" element={<PHP />} />
          <Route path="technologies/dotnet" element={<DotNet />} />
          <Route path="technologies/laravel" element={<Laravel />} />
          <Route
            path="wordpress-development-company-in-india"
            element={<WordPress />}
          />
          <Route
            path="react-native-development-company-in-india"
            element={<ReactNative />}
          />
          <Route
            path="flutter-development-company-in-india"
            element={<Flutter />}
          />
          <Route
            path="kotlin-development-company-in-india"
            element={<Kotlin />}
          />
          <Route path="swift-development-services" element={<Swift />} />
          <Route
            path="mongodb-development-services-company-in-india"
            element={<MongoDB />}
          />
          <Route
            path="mysql-development-company-in-india"
            element={<MySQL />}
          />
          <Route
            path="postgresql-development-company-in-india"
            element={<PostgreSQL />}
          />
          <Route
            path="firebase-development-company-in-india"
            element={<Firebase />}
          />
          <Route path="aws-cloud-services-company-in-india" element={<AWS />} />
          <Route
            path="microsoft-azure-cloud-services-in-india"
            element={<Azure />}
          />
          <Route
            path="ibm-cloud-platform-services-provider-in-india"
            element={<IBMCloud />}
          />
          <Route
            path="best-google-cloud-provider-in-india"
            element={<GoogleCloudPlatform />}
          />
          <Route path="figma-design-company-in-india" element={<Figma />} />
          {/* Database Routes */}
          <Route
            path="indexeddb-api-development-company-in-india"
            element={<IndexedDatabaseAPI />}
          />
          <Route
            path="azure-cosmos-db-development-services-in-india"
            element={<AzureCosmosDB />}
          />
          <Route
            path="amazon-dynamodb-development-services-in-india"
            element={<AmazonDynamoDB />}
          />
          <Route
            path="sql-server-integration-services-in-india"
            element={<MsSQL />}
          />
          {/* Third Party Integration Routes */}
          <Route
            path="telerik-development-services-in-india"
            element={<Telerik />}
          />
          <Route
            path="quickbooks-xero-integration-services-in-india"
            element={<QuickBooksXero />}
          />
          <Route
            path="twilio-plivo-integration-services-in-india"
            element={<TwilioPlivo />}
          />
          <Route
            path="devexpress-development-services-in-india"
            element={<DevExpress />}
          />
          <Route
            path="syncfusion-development-services-in-india"
            element={<SyncFusion />}
          />
          <Route
            path="mudblazor-development-services-in-india"
            element={<MudBlazor />}
          />
          <Route
            path="payment-integration-services-in-india"
            element={<StripePaypal />}
          />
          <Route
            path="google-api-integration-services-in-india"
            element={<GoogleAPI />}
          />
          <Route
            path="highcharts-echarts-development-company-in-india"
            element={<Highcharts />}
          />
          <Route
            path="financial-data-integration-services-in-india"
            element={<YahooFinance />}
          />
          <Route path="zoom-integration-services-in-india" element={<Zoom />} />
          <Route
            path="power-bi-dashboard-development-services"
            element={<PowerBI />}
          />
          <Route
            path="react-material-ui-development-services"
            element={<MaterialUI />}
          />
          <Route
            path="primeng-development-services-in-india"
            element={<PrimeNG />}
          />
          <Route
            path="radzen-blazor-development-services"
            element={<Radzen />}
          />
          <Route path="ckeditor-integration-services" element={<CKEditor />} />
          <Route path="easypost-integration-services" element={<EasyPost />} />
          <Route
            path="kit-builder-development-services-in-india"
            element={<KitBuilder />}
          />
          <Route path="shopify-development-company" element={<Shopify />} />
          <Route
            path="daisyui-development-services-in-india"
            element={<Daisy />}
          />
          {/* Vertical Routes */}
          <Route
            path="healthcare-software-development-services"
            element={<Healthcare />}
          />
          <Route
            path="fintech-solutions-company-in-india"
            element={<Fintech />}
          />
          <Route
            path="event-management-software-development-company"
            element={<EventManagement />}
          />
          <Route
            path="marketplace-solutions-company-in-india"
            element={<Marketplace />}
          />
          <Route
            path="compliance-software-development-company"
            element={<Compliance />}
          />
          <Route path="custom-crm-development-services" element={<CRM />} />
          <Route
            path="logistics-transport-software-development-company"
            element={<LogisticsTransport />}
          />
          <Route
            path="real-estate-software-development-company"
            element={<RealEstate />}
          />
          <Route path="erp-software-development-company" element={<ERP />} />
          <Route
            path="ed-tech-solutions-development-company-in-india"
            element={<EdTech />}
          />
          <Route
            path="automotive-solutions-company-in-india"
            element={<Automotive />}
          />
          <Route
            path="fundraising-software-development-company-in-india"
            element={<FundraisingManagement />}
          />
          <Route
            path="travel-software-development-company"
            element={<TravelTourism />}
          />
          <Route
            path="workflow-automation-development-company"
            element={<WorkflowManagement />}
          />
          <Route path="fitness-app-development-company" element={<Fitness />} />
          <Route
            path="sports-software-development-company"
            element={<SportsManagement />}
          />
          <Route
            path="saas-solutions-company-in-india"
            element={<SaaSVertical />}
          />

          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-condition" element={<TermsAndConditions />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <FAQChatbot />
      <SocialMediaButtons />
      <ToastContainer position="top-center" autoClose={2500} />
    </>
  );
}

export default App;
