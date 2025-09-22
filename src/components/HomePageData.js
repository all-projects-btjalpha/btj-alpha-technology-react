import php from "../assets/images/Home-page/icons/php.png";
import angular from "../assets/images/Home-page/icons/angular.png";
import asp from "../assets/images/Home-page/icons/asp.png";
import bootstrap from "../assets/images/Home-page/icons/bootstrap.png";
import ci from "../assets/images/Home-page/icons/ci.png";
import css from "../assets/images/Home-page/icons/css.png";
import drupal from "../assets/images/Home-page/icons/drupal.png";
import figma from "../assets/images/Home-page/icons/figma.png";
import illustrator from "../assets/images/Home-page/icons/illustrator.png";
import js from "../assets/images/Home-page/icons/js.png";
import laravel from "../assets/images/Home-page/icons/laravel.png";
import shopify from "../assets/images/Home-page/icons/shopify.png";
import mysql from "../assets/images/Home-page/icons/mysql.png";
import photoshop from "../assets/images/Home-page/icons/photoshop.png";
import wordpress from "../assets/images/Home-page/icons/wordpress.png";
import html from "../assets/images/Home-page/icons/html.png";

const technologies = [
  { name: "PHP", icon: php },
  { name: "WordPress", icon: wordpress },
  { name: "ASP.net", icon: asp },
  { name: "MySQL", icon: mysql },
  { name: "HTML", icon: html },
  { name: "Drupal", icon: drupal },
  { name: "JavaScript", icon: js },
  { name: "CodeIgniter", icon: ci },
  { name: "Laravel", icon: laravel },
  { name: "Shopify", icon: shopify },
  { name: "Angular", icon: angular },
  { name: "CSS", icon: css },
  { name: "Photoshop", icon: photoshop },
  { name: "Illustrator", icon: illustrator },
  { name: "Figma", icon: figma },
  { name: "Bootstrap", icon: bootstrap },
];

const items = [
  {
    heading: "Website Designing",
    content:
      "Your website is your home on the internet. The Website Design is the first and foremost area to focus on as it represents the virtual face of a company.",
      url: "/website-designing"
  },
  {
    heading: "Mobile App Development",
    content:
      "Create user-friendly and efficient mobile apps tailored to meet your business needs with our expert development services.",
      url: "/mobile-app-development"
  },
  {
    heading: "Social Media Marketing (SMM)",
    content:
      "Boost your brand visibility and engagement across platforms like Instagram, Facebook, and LinkedIn. Reach your target audience with tailored content and paid campaigns.",
      url: "/social-media-marketing"
  },
  {
    heading: "Search Engine Optimization (SEO)",
    content:
      "Boost your online visibility and attract organic traffic with our tailored SEO strategies.",
      url: "/search-engine-optimization"
  },
  {
    heading: "Website Development",
    content:
      "Build robust and scalable websites that deliver seamless performance and exceptional user experience.",
      url: "/website-development"
  },
  {
    heading: "Bulk SMS",
    content:
      "Bulk SMS is a service to send large volumes of messages simultaneously for marketing, alerts, or notifications.",
      url: "/bulk-sms"
  },
];

export { technologies, items };
