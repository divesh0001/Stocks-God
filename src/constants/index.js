import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

// import{
//   combined3,
//   predictionman,
//   whystocksgod1,
//   whystocksgod,
// } from "src/asset";
import stocksgod from "../asset/Stocks God.png"; 
import logoipo from "../asset/logoipo.png";
import logonews from "../asset/logonews.png";
import logors from "../asset/logors.png";
import predictionman from "../asset/predictionman.png";
import logocalendar from "../asset/logocalendar.png";
import logoprediction from "../asset/logoprediction.png";
import logograph from "../asset/logograph.png";
import logobull from "../asset/logobull.png";
import logomoney from "../asset/logomoney.png";

export const navigation = [
  {
    id: "0",
    title: "Stocks news",
    url: "/stocks-news",
  },
  {
    id: "1",
    title: "Ipo Gmp",
    url: "/ipo-gmp",
  },
  {
    id: "2",
    title: "Dividend calendar",
    url: "/dividend-calendar",
  },
  {
    id: "3",
    title: "Stock prediction",
    url: "/stock-prediction",
  },
  {
    id: "4",
    title: "New account",
    url: "/signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With stocksgod, everything is possible.stay up-to-date with the latest stock news, and maximize your earnings.";

export const collabContent = [
  {
    id: "0",
    title: "Feeling like you're always chasing the latest stock rally, but missing out due to lack of timely news?",
  
  },
  {
    id: "1",
    title: "Overwhelmed by the choice of IPOs, unsure where to invest your money wisely?",
  },
  {
    id: "2",
    title: "Ever missed out on a dividend record date, regretting not staying informed?",
  },
  {
    id: "3",
    title: "Struggling to predict which stocks will perform well in the future, missing out on potential gains?",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "logomoney",
    icon: logomoney,
    width: 966,
    height: 506,
  },
  {
    id: "1",
    title: "logonews",
    icon: logonews,
    width: 304,
    height: 306,
  },
  {
    id: "2",
    title: "logors",
    icon: logors,
    width: 306,
    height: 208,
  },
  {
    id: "3",
    title: "logoipo",
    icon: logoipo,
    width: 304,
    height: 3005,
  },
  {
    id: "4",
    title: "logocalendar",
    icon: logocalendar,
    width: 304,
    height: 304,
  },
  {
    id: "5",
    title: "logoprediction",
    icon: logoprediction,
    width: 304,
    height: 340,
  },
  {
    id: "6",
    title: "logograph",
    icon: logograph,
    width: 206,
    height: 304,
  },
  {
    id: "7",
    title: "logobull",
    icon: logobull,
    width: 380,
    height: 320,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Fastest News",
    text: "Stay ahead of the curve with Stocks God's up-to-the-minute stock news, ensuring you're always in the loop and never miss a rally again.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "GMP of upcoming IPOs",
    text: "Navigate the IPO landscape with confidence using our detailed analysis and Grey Market Premium insights, helping you make informed investment decisions.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Dividends calendar",
    text: "Keep track of all upcoming dividend record dates effortlessly with our comprehensive calendar, so you never miss an opportunity to maximize your earnings.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Stock prediction",
    text: "Discover top stock picks and future investment opportunities curated by experts, guiding you towards making smart, profitable decisions for long-term success.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  // {
  //   id: "4",
  //   title: "Ask anything",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-5.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: benefitImage2,
  // },
  {
    id: "4",
    title: "Doubts regarding investment",
    text: "Get personalized advice tailored to your investment goals, helping you decide whether a specific stock is the right choice for you.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
