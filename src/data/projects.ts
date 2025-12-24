import reservaImg from "@/assets/projects/reserva.png";
import umbraImg from "@/assets/projects/umbra.png";
import dameerImg from "@/assets/projects/dameer.png";
import laqtaImg from "@/assets/projects/laqta.png";
import mubarmijaImg from "@/assets/projects/mubarmija.png";
import govComplaintsImg from "@/assets/projects/compliants.png";
import finzaImg from "@/assets/projects/finza.png";

// Reserva project images
import reservaLogin from "@/assets/projects/reserva/login.png";
import reservaAttractions from "@/assets/projects/reserva/attractions.png";
import reservaDetails from "@/assets/projects/reserva/details.png";
import reservaTrips from "@/assets/projects/reserva/trips.png";
import reservaTripDetails from "@/assets/projects/reserva/trip-details.png";
import reservaHotels from "@/assets/projects/reserva/hotels.png";
import reservaSearch from "@/assets/projects/reserva/search.png";
import reservaRoom from "@/assets/projects/reserva/room.png";

// Dameer project images
import dameerAlternatives from "@/assets/projects/dameer/alternatives.png";
import dameerNonBoycott from "@/assets/projects/dameer/non-boycott.png";
import dameerSplash from "@/assets/projects/dameer/splash.png";
import dameerProductDetails from "@/assets/projects/dameer/product-details.png";
import dameerReport from "@/assets/projects/dameer/report.png";
import dameerHome from "@/assets/projects/dameer/home.png";
import dameerScanResult from "@/assets/projects/dameer/scan-result.png";
import dameerEncyclopedia from "@/assets/projects/dameer/encyclopedia.png";
import dameerNews from "@/assets/projects/dameer/news.png";

// Mubarmija project images
import mubarmijaHome from "@/assets/projects/mubarmija/home.png";
import mubarmijaCourses from "@/assets/projects/mubarmija/courses.png";
import mubarmijaSuccessStories from "@/assets/projects/mubarmija/success-stories.png";
import mubarmijaCommunity from "@/assets/projects/mubarmija/community.png";
import mubarmijaGuarantees from "@/assets/projects/mubarmija/guarantees.png";
import mubarmijaSignup from "@/assets/projects/mubarmija/signup.png";
import mubarmijaMembers from "@/assets/projects/mubarmija/members.png";

// Laqta project images
import laqtaMerchantDashboard from "@/assets/projects/laqta/merchant-dashboard.png";
import laqtaAdminDashboard from "@/assets/projects/laqta/admin-dashboard.png";
import laqtaUsers from "@/assets/projects/laqta/users.png";
import laqtaMerchants from "@/assets/projects/laqta/merchants.png";
import laqtaDriverHome from "@/assets/projects/laqta/driver-home.png";
import laqtaOrderDetails from "@/assets/projects/laqta/order-details.png";
import laqtaProductDetails from "@/assets/projects/laqta/product-details.png";
import laqtaCustomerHome from "@/assets/projects/laqta/customer-home.png";

// Umbra project images
import umbraEventsReport from "@/assets/projects/umbra/events-report.jpg";
import umbraNotifications from "@/assets/projects/umbra/notifications.jpg";
import umbraVisitorTimeline from "@/assets/projects/umbra/visitor-timeline.jpg";
import umbraFacesAssign from "@/assets/projects/umbra/faces-assign.jpg";
import umbraAssignDialog from "@/assets/projects/umbra/assign-dialog.jpg";

// Complaints project images
import dashDashboard from "@/assets/projects/complaints/dash.png";
import compliantDashboard from "@/assets/projects/complaints/compliantdash.png";
import unitsDashboard from "@/assets/projects/complaints/unitsdash.png";
import usersDashboard from "@/assets/projects/complaints/usersmangedash.png";
import loginDashboard from "@/assets/projects/complaints/logindash.png";
import mobileLogin from "@/assets/projects/complaints/mobilelogin.png";
import mobileHome from "@/assets/projects/complaints/homemobile.png";
import mobileAddComplaint from "@/assets/projects/complaints/addnewmobile.png";
import mobileDetails from "@/assets/projects/complaints/detailsmobile.png";
import mobileNotifications from "@/assets/projects/complaints/notificationsmobile.png";

// Finza project images
import finzaLogin from "@/assets/projects/finza/login.png";
import finzaOverview from "@/assets/projects/finza/overview.png";
import finzaTransactions from "@/assets/projects/finza/transactions.png";
import finzaAddTransaction from "@/assets/projects/finza/add-transaction.png";
import finzaStatistics from "@/assets/projects/finza/statistics.png";
import finzaScheduled from "@/assets/projects/finza/scheduled.png";
import finzaReports from "@/assets/projects/finza/reports.png";
import finzaTickets from "@/assets/projects/finza/tickets.png";
import finzaAccounts from "@/assets/projects/finza/accounts.png";

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
  behanceLink?: string;
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
    overview:
      "A smart travel app combining booking trips (flights, hotels, tours) with exploring archaeological and historical sites for Arab travelers.",
    problem:
      "Travelers face multiple booking platforms and difficulty finding reliable information about historical sites, making trip planning exhausting and reducing opportunities for full cultural benefit.",
    solution: [
      "Unified booking for flights, hotels, and tours in one place",
      "Interactive guide to archaeological and historical sites",
      "Smart trip planning with personalized recommendations",
    ],
    accentColor: "from-sky-500 to-blue-600",
    behanceLink: "#",
    fullDescription:
      '"Reserva" is a smart travel app that combines booking trips (flights, hotels, tours) with exploring archaeological and historical sites. It offers an integrated solution for Arab travelers who want a seamless and culturally rich travel experience.',
    features: [
      {
        title: "Unified Booking",
        description:
          "Flights, hotels, and tours all in one place with bundled offers to save time and money",
      },
      {
        title: "Exploring Archaeology",
        description:
          "An interactive guide to archaeological and historical sites with virtual tours and customized travel routes",
      },
      {
        title: "Personalized Experience",
        description:
          "Smart trip planning with recommendations tailored to your interests and reviews from real travelers",
      },
    ],
    gallery: [
      reservaLogin,
      reservaAttractions,
      reservaDetails,
      reservaTrips,
      reservaTripDetails,
      reservaHotels,
      reservaSearch,
      reservaRoom,
    ],
    tools: ["Figma", "VS Code", "Flutter"],
    duration: "3 months",
    role: "UI/UX Designer and Flutter Developer",
  },
  {
    id: "umbra",
    title: "Umbra",
    subtitle: "Event Management & Visitor Tracking",
    image: umbraImg,
    category: "Dashboard System",
    overview:
      "A centralized visitor and event management system at Digit Center, designed to organize visitor reception and coordinate events professionally.",
    problem:
      "Challenges in managing daily visitor flow, organizing events, and accurately recording attendance leading to disorganized experiences.",
    solution: [
      "Comprehensive visitor management with automated check-in/out",
      "Integrated event system with customized registration forms",
      "QR code generation for quick attendance tracking",
    ],
    accentColor: "from-violet-500 to-purple-600",
    behanceLink: "#",
    fullDescription:
      "A centralized visitor and event management system at Digit Center, designed to organize visitor reception and coordinate events professionally with seamless tracking capabilities.",
    features: [
      {
        title: "Visitor Management",
        description:
          "Comprehensive visitor management with automated check-in/out systems",
      },
      {
        title: "Event System",
        description:
          "Integrated event system with customized registration forms",
      },
      {
        title: "Attendance Tracking",
        description:
          "QR code generation for quick and accurate attendance tracking",
      },
    ],
    gallery: [
      umbraEventsReport,
      umbraNotifications,
      umbraVisitorTimeline,
      umbraFacesAssign,
      umbraAssignDialog,
    ],
    tools: ["Figma", "React", "VS Code"],
    duration: "4 months (still undergoing edits)",
    role: "UI/UX Designer, UI Developer",
  },
  {
    id: "dameer",
    title: "Dameer",
    subtitle: "Ethical Shopping Guide",
    image: dameerImg,
    category: "Mobile App",
    overview:
      'As an Arab engineer, proud of her Palestinian heritage, it was essential for me to express my cause, even if through a small mark in my designs. That is why "Damir" was created — an innovative app that empowers Arab consumers to make conscious purchasing decisions, harmonizing with their ethical values through complete transparency of product information.',
    problem:
      "Consumers face challenges distinguishing products that support or conflict with their ethical values, lacking reliable information.",
    solution: [
      "Barcode scanning for instant product information",
      "Transparent judgment cards with boycott status",
      "Alternative suggestions for local and ethical products",
    ],
    accentColor: "from-emerald-500 to-green-600",
    behanceLink: "#",
    fullDescription:
      'As an Arab engineer, proud of his Palestinian heritage, it was essential for me to express my cause, even if through a small mark in my designs. That is why "Damir" was created — an innovative app that empowers Arab consumers to make conscious purchasing decisions, harmonizing with their ethical values through complete transparency of product information.',
    features: [
      {
        title: "Barcode Scanning",
        description: "Instant product information through barcode scanning",
      },
      {
        title: "Judgment Cards",
        description: "Transparent judgment cards with boycott status",
      },
      {
        title: "Alternatives",
        description: "Alternative suggestions for local and ethical products",
      },
    ],
    gallery: [
      dameerSplash,
      dameerHome,
      dameerScanResult,
      dameerProductDetails,
      dameerAlternatives,
      dameerNonBoycott,
      dameerReport,
      dameerEncyclopedia,
      dameerNews,
    ],
    tools: ["Figma"],
    duration: "2 weeks",
    role: "UI/UX Designer",
  },
  {
    id: "laqta",
    title: "Laqta",
    subtitle: "Multi-Role E-Commerce Platform",
    image: laqtaImg,
    category: "Full Platform",
    overview:
      "A comprehensive e-commerce platform connecting local merchants with customers through four integrated interfaces.",
    problem:
      "Local e-commerce faces integration challenges between merchants, customers, and drivers, limiting market growth.",
    solution: [
      "Integrated management dashboard for platform oversight",
      "Smart driver app with navigation and order tracking",
      "Smooth customer app with live delivery tracking",
    ],
    accentColor: "from-cyan-500 to-teal-600",
    // behanceLink: "#",
    fullDescription:
      "A comprehensive e-commerce platform connecting local merchants with customers through four integrated interfaces for seamless shopping experience.",
    features: [
      {
        title: "Management Dashboard",
        description:
          "Integrated management dashboard for complete platform oversight",
      },
      {
        title: "Driver App",
        description: "Smart driver app with navigation and order tracking",
      },
      {
        title: "Customer App",
        description: "Smooth customer app with live delivery tracking",
      },
    ],
    gallery: [
      laqtaMerchantDashboard,
      laqtaAdminDashboard,
      laqtaUsers,
      laqtaMerchants,
      laqtaDriverHome,
      laqtaOrderDetails,
      laqtaProductDetails,
      laqtaCustomerHome,
    ],
    tools: ["Figma"],
    duration: "2 months",
    role: "UI/UX Designer",
  },
  {
    id: "mubarmija",
    title: "Mubarmija",
    subtitle: "Tech Learning Platform for Women",
    image: mubarmijaImg,
    category: "Web Platform",
    overview:
      "The first comprehensive free Arabic platform empowering Arab women to enter the world of programming and technology.",
    problem:
      "Women in programming in the Arab world don't exceed 15% due to lack of Arabic content and absence of inspiring female role models.",
    solution: [
      "Specialized Arabic courses with expert female instructors",
      "Supportive community with 10,000+ members",
      "Career opportunities and job connections",
    ],
    accentColor: "from-pink-500 to-rose-600",
    behanceLink: "#",
    fullDescription:
      "The first comprehensive free Arabic platform empowering Arab women to enter the world of programming and technology with supportive community.",
    features: [
      {
        title: "Arabic Courses",
        description:
          "Specialized Arabic courses with expert female instructors",
      },
      {
        title: "Community",
        description: "Supportive community with 10,000+ members",
      },
      {
        title: "Career",
        description: "Career opportunities and job connections",
      },
    ],
    gallery: [
      mubarmijaHome,
      mubarmijaCourses,
      mubarmijaSuccessStories,
      mubarmijaCommunity,
      mubarmijaGuarantees,
      mubarmijaSignup,
      mubarmijaMembers,
    ],
    tools: ["Figma"],
    duration: "1 week",
    role: "UI/UX Designer",
  },
  {
    id: "university-complaints-system",
    title: "Complaints System",
    subtitle: "Academic Project - Internet Applications Course",
    image: govComplaintsImg,
    category: "Full Platform",
    overview:
      "A complete complaints management system built as a university project for the Internet Applications course. The system simulates how citizens can submit complaints to government units and track their status.",
    problem:
      "For the course project, we needed to build a system that handles concurrent users, data security, and real-time updates while implementing clean architecture and modern web practices.",
    solution: [
      "Built a mobile app for citizens to submit complaints with attachments",
      "Created an admin dashboard for managing complaints and users",
      "Implemented real-time status tracking and notifications",
      "Added government unit management with role-based permissions",
    ],
    accentColor: "from-[#C1B174] to-[#967F35]",
    fullDescription:
      "This was my final year project for the Internet Applications course at Damascus University. The assignment was to build a complete system simulating government complaint management. I focused on creating clean UI/UX for both mobile and web, implementing secure authentication, and ensuring the system handles concurrent operations properly. The project helped me practice full-stack development with Flutter for mobile and React for the dashboard.",
    features: [
      {
        title: "Mobile App for Citizens",
        description:
          "Flutter app allowing users to submit complaints, upload attachments, and track status in real-time",
      },
      {
        title: "Admin Dashboard",
        description:
          "React dashboard for administrators to manage complaints, users, and government units",
      },
      {
        title: "Real-time Updates",
        description:
          "Live status updates and notifications when complaint status changes",
      },
      {
        title: "University Requirements",
        description:
          "Implemented all course requirements including security, concurrency, and layered architecture",
      },
    ],
    gallery: [
      mobileLogin,
      mobileHome,
      mobileAddComplaint,
      mobileDetails,
      mobileNotifications,
      loginDashboard,
      dashDashboard,
      compliantDashboard,
      unitsDashboard,
      usersDashboard,
    ],
    tools: ["Figma", "Flutter", "Dart", "React", "TypeScript", "Tailwind CSS"],
    duration: "1 month",
    role: "UI/UX Designer & Flutter Developer",
  },
  {
    id: "finza-banking-system",
    title: "Finza Banking System",
    subtitle: "Software Engineering 3 - Design Patterns Project",
    image: finzaImg,
    category: "Dashboard System",
    overview:
      "An advanced banking system designed to implement 6+ software design patterns for a Software Engineering course. The project focuses on creating a scalable, maintainable banking platform using behavioral and structural design patterns.",
    problem:
      "Traditional banking systems often become monolithic and difficult to maintain. For this course project, we needed to demonstrate proper software architecture by implementing design patterns to handle complex banking operations while ensuring code reusability and flexibility.",
    solution: [
      "Implemented Composite pattern for hierarchical account structures",
      "Used Observer pattern for real-time notifications on account activities",
      "Applied Strategy pattern for different interest calculation algorithms",
      "Utilized State pattern to manage account status transitions",
      "Implemented Chain of Responsibility for transaction approval workflows",
      "Used Adapter pattern for integration with external payment gateways",
    ],
    accentColor: "from-gray-600 to-gray-800",
    fullDescription:
      "This was a Software Engineering 3 course project at Damascus University, focusing on implementing design patterns in a practical banking system. The goal was to build a system that demonstrates the application of 6+ behavioral and structural design patterns while providing core banking functionalities. The system handles account management, transactions, customer service, and administrative controls with proper software architecture principles. The complete source code is available on GitHub: https://github.com/danasaadeh/advanced-banking-system",
    features: [
      {
        title: "Design Patterns Implementation",
        description:
          "Successfully implemented 6+ design patterns including Composite, Observer, Strategy, State, Chain of Responsibility, and Adapter patterns",
      },
      {
        title: "Account Management System",
        description:
          "Support for multiple account types (savings, checking, loans, investments) with hierarchical structures",
      },
      {
        title: "Transaction Processing",
        description:
          "Complete transaction handling for deposits, withdrawals, transfers, with scheduled transactions support",
      },
      {
        title: "Academic Documentation",
        description:
          "Complete UML diagrams, design pattern justifications, and comprehensive test coverage as per course requirements",
      },
    ],
    gallery: [
      finzaLogin,
      finzaOverview,
      finzaTransactions,
      finzaAddTransaction,
      finzaScheduled,
      finzaAccounts,
      finzaStatistics,
      finzaReports,
      finzaTickets,
    ],
    tools: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Design Patterns",
      "UML",
      "JUnit",
      "Figma",
    ],
    duration: "1 week",
    role: "UI/UX Designer,Software Architect , Frontend Developer",
  },
];

export const getProjectById = (id: string): ProjectDetail | undefined => {
  return projects.find((project) => project.id === id);
};
