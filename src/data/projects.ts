import reservaImg from '@/assets/projects/reserva.png';
import umbraImg from '@/assets/projects/umbra.png';
import dameerImg from '@/assets/projects/dameer.png';
import laqtaImg from '@/assets/projects/laqta.png';
import mubarmijaImg from '@/assets/projects/mubarmija.png';

// Reserva project images
import reservaLogin from '@/assets/projects/reserva/login.png';
import reservaAttractions from '@/assets/projects/reserva/attractions.png';
import reservaDetails from '@/assets/projects/reserva/details.png';
import reservaTrips from '@/assets/projects/reserva/trips.png';
import reservaTripDetails from '@/assets/projects/reserva/trip-details.png';
import reservaHotels from '@/assets/projects/reserva/hotels.png';
import reservaSearch from '@/assets/projects/reserva/search.png';
import reservaRoom from '@/assets/projects/reserva/room.png';

// Dameer project images
import dameerAlternatives from '@/assets/projects/dameer/alternatives.png';
import dameerNonBoycott from '@/assets/projects/dameer/non-boycott.png';
import dameerSplash from '@/assets/projects/dameer/splash.png';
import dameerProductDetails from '@/assets/projects/dameer/product-details.png';
import dameerReport from '@/assets/projects/dameer/report.png';
import dameerHome from '@/assets/projects/dameer/home.png';
import dameerScanResult from '@/assets/projects/dameer/scan-result.png';
import dameerEncyclopedia from '@/assets/projects/dameer/encyclopedia.png';
import dameerNews from '@/assets/projects/dameer/news.png';

// Mubarmija project images
import mubarmijaHome from '@/assets/projects/mubarmija/home.png';
import mubarmijaCourses from '@/assets/projects/mubarmija/courses.png';
import mubarmijaSuccessStories from '@/assets/projects/mubarmija/success-stories.png';
import mubarmijaCommunity from '@/assets/projects/mubarmija/community.png';
import mubarmijaGuarantees from '@/assets/projects/mubarmija/guarantees.png';
import mubarmijaSignup from '@/assets/projects/mubarmija/signup.png';
import mubarmijaMembers from '@/assets/projects/mubarmija/members.png';

// Laqta project images
import laqtaMerchantDashboard from '@/assets/projects/laqta/merchant-dashboard.png';
import laqtaAdminDashboard from '@/assets/projects/laqta/admin-dashboard.png';
import laqtaUsers from '@/assets/projects/laqta/users.png';
import laqtaMerchants from '@/assets/projects/laqta/merchants.png';
import laqtaDriverHome from '@/assets/projects/laqta/driver-home.png';
import laqtaOrderDetails from '@/assets/projects/laqta/order-details.png';
import laqtaProductDetails from '@/assets/projects/laqta/product-details.png';
import laqtaCustomerHome from '@/assets/projects/laqta/customer-home.png';

// Umbra project images
import umbraEventsReport from '@/assets/projects/umbra/events-report.jpg';
import umbraNotifications from '@/assets/projects/umbra/notifications.jpg';
import umbraVisitorTimeline from '@/assets/projects/umbra/visitor-timeline.jpg';
import umbraFacesAssign from '@/assets/projects/umbra/faces-assign.jpg';
import umbraAssignDialog from '@/assets/projects/umbra/assign-dialog.jpg';

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  overview: string;
  problem: string;
  solution: string[];
  accentColor: string;
  behanceLink: string;
  fullDescription: string;
  features: {
    title: string;
    description: string;
  }[];
  gallery: string[];
  tools: string[];
  duration: string;
  role: string;
}

export const projects: ProjectDetail[] = [
  {
    id: "reserva",
    title: "Reserva",
    subtitle: "Travel & Booking App",
    image: reservaImg,
    category: "Mobile App",
    overview: "A smart travel app combining booking trips (flights, hotels, tours) with exploring archaeological and historical sites for Arab travelers.",
    problem: "Travelers face multiple booking platforms and difficulty finding reliable information about historical sites, making trip planning exhausting and reducing opportunities for full cultural benefit.",
    solution: [
      "Unified booking for flights, hotels, and tours in one place",
      "Interactive guide to archaeological and historical sites",
      "Smart trip planning with personalized recommendations"
    ],
    accentColor: "from-sky-500 to-blue-600",
    behanceLink: "#",
    fullDescription: "\"Reserva\" is a smart travel app that combines booking trips (flights, hotels, tours) with exploring archaeological and historical sites. It offers an integrated solution for Arab travelers who want a seamless and culturally rich travel experience.",
    features: [
      {
        title: "Unified Booking",
        description: "Flights, hotels, and tours all in one place with bundled offers to save time and money"
      },
      {
        title: "Exploring Archaeology",
        description: "An interactive guide to archaeological and historical sites with virtual tours and customized travel routes"
      },
      {
        title: "Personalized Experience",
        description: "Smart trip planning with recommendations tailored to your interests and reviews from real travelers"
      }
    ],
    gallery: [reservaLogin, reservaAttractions, reservaDetails, reservaTrips, reservaTripDetails, reservaHotels, reservaSearch, reservaRoom],
    tools: ["Figma", "VS Code", "Flutter"],
    duration: "3 months",
    role: "UI/UX Designer and Flutter Developer"
  },
  {
    id: "umbra",
    title: "Umbra",
    subtitle: "Event Management & Visitor Tracking",
    image: umbraImg,
    category: "Dashboard System",
    overview: "A centralized visitor and event management system at Digit Center, designed to organize visitor reception and coordinate events professionally.",
    problem: "Challenges in managing daily visitor flow, organizing events, and accurately recording attendance leading to disorganized experiences.",
    solution: [
      "Comprehensive visitor management with automated check-in/out",
      "Integrated event system with customized registration forms",
      "QR code generation for quick attendance tracking"
    ],
    accentColor: "from-violet-500 to-purple-600",
    behanceLink: "#",
    fullDescription: "A centralized visitor and event management system at Digit Center, designed to organize visitor reception and coordinate events professionally with seamless tracking capabilities.",
    features: [
      {
        title: "Visitor Management",
        description: "Comprehensive visitor management with automated check-in/out systems"
      },
      {
        title: "Event System",
        description: "Integrated event system with customized registration forms"
      },
      {
        title: "Attendance Tracking",
        description: "QR code generation for quick and accurate attendance tracking"
      }
    ],
    gallery: [umbraEventsReport, umbraNotifications, umbraVisitorTimeline, umbraFacesAssign, umbraAssignDialog],
    tools: ["Figma", "React", "VS Code"],
    duration: "4 months (still undergoing edits)",
    role: "UI/UX Designer, UI Developer"
  },
  {
    id: "dameer",
    title: "Dameer",
    subtitle: "Ethical Shopping Guide",
    image: dameerImg,
    category: "Mobile App",
    overview: "As an Arab engineer, proud of his Palestinian heritage, it was essential for me to express my cause, even if through a small mark in my designs. That is why \"Damir\" was created — an innovative app that empowers Arab consumers to make conscious purchasing decisions, harmonizing with their ethical values through complete transparency of product information.",
    problem: "Consumers face challenges distinguishing products that support or conflict with their ethical values, lacking reliable information.",
    solution: [
      "Barcode scanning for instant product information",
      "Transparent judgment cards with boycott status",
      "Alternative suggestions for local and ethical products"
    ],
    accentColor: "from-emerald-500 to-green-600",
    behanceLink: "#",
    fullDescription: "As an Arab engineer, proud of his Palestinian heritage, it was essential for me to express my cause, even if through a small mark in my designs. That is why \"Damir\" was created — an innovative app that empowers Arab consumers to make conscious purchasing decisions, harmonizing with their ethical values through complete transparency of product information.",
    features: [
      {
        title: "Barcode Scanning",
        description: "Instant product information through barcode scanning"
      },
      {
        title: "Judgment Cards",
        description: "Transparent judgment cards with boycott status"
      },
      {
        title: "Alternatives",
        description: "Alternative suggestions for local and ethical products"
      }
    ],
    gallery: [dameerSplash, dameerHome, dameerScanResult, dameerProductDetails, dameerAlternatives, dameerNonBoycott, dameerReport, dameerEncyclopedia, dameerNews],
    tools: ["Figma"],
    duration: "2 weeks",
    role: "UI/UX Designer"
  },
  {
    id: "laqta",
    title: "Laqta",
    subtitle: "Multi-Role E-Commerce Platform",
    image: laqtaImg,
    category: "Full Platform",
    overview: "A comprehensive e-commerce platform connecting local merchants with customers through four integrated interfaces.",
    problem: "Local e-commerce faces integration challenges between merchants, customers, and drivers, limiting market growth.",
    solution: [
      "Integrated management dashboard for platform oversight",
      "Smart driver app with navigation and order tracking",
      "Smooth customer app with live delivery tracking"
    ],
    accentColor: "from-cyan-500 to-teal-600",
    behanceLink: "#",
    fullDescription: "A comprehensive e-commerce platform connecting local merchants with customers through four integrated interfaces for seamless shopping experience.",
    features: [
      {
        title: "Management Dashboard",
        description: "Integrated management dashboard for complete platform oversight"
      },
      {
        title: "Driver App",
        description: "Smart driver app with navigation and order tracking"
      },
      {
        title: "Customer App",
        description: "Smooth customer app with live delivery tracking"
      }
    ],
    gallery: [laqtaMerchantDashboard, laqtaAdminDashboard, laqtaUsers, laqtaMerchants, laqtaDriverHome, laqtaOrderDetails, laqtaProductDetails, laqtaCustomerHome],
    tools: ["Figma"],
    duration: "2 months",
    role: "UI/UX Designer"
  },
  {
    id: "mubarmija",
    title: "Mubarmija",
    subtitle: "Tech Learning Platform for Women",
    image: mubarmijaImg,
    category: "Web Platform",
    overview: "The first comprehensive free Arabic platform empowering Arab women to enter the world of programming and technology.",
    problem: "Women in programming in the Arab world don't exceed 15% due to lack of Arabic content and absence of inspiring female role models.",
    solution: [
      "Specialized Arabic courses with expert female instructors",
      "Supportive community with 10,000+ members",
      "Career opportunities and job connections"
    ],
    accentColor: "from-pink-500 to-rose-600",
    behanceLink: "#",
    fullDescription: "The first comprehensive free Arabic platform empowering Arab women to enter the world of programming and technology with supportive community.",
    features: [
      {
        title: "Arabic Courses",
        description: "Specialized Arabic courses with expert female instructors"
      },
      {
        title: "Community",
        description: "Supportive community with 10,000+ members"
      },
      {
        title: "Career",
        description: "Career opportunities and job connections"
      }
    ],
    gallery: [mubarmijaHome, mubarmijaCourses, mubarmijaSuccessStories, mubarmijaCommunity, mubarmijaGuarantees, mubarmijaSignup, mubarmijaMembers],
    tools: ["Figma"],
    duration: "1 week",
    role: "UI/UX Designer"
  }
];

export const getProjectById = (id: string): ProjectDetail | undefined => {
  return projects.find(project => project.id === id);
};
