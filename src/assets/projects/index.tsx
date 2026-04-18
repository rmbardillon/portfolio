import cswd from "./cswd.png";
import cswd2 from "./cswd2.png";
import cswd3 from "./cswd3.png";
import cswd4 from "./cswd4.png";
import cswd5 from "./cswd5.png";
import cswd6 from "./cswd6.png";
import lqtech1 from "./lqtech1.png";
import lqtech2 from "./lqtech2.png";
import lqtech3 from "./lqtech3.png";
import lqtech4 from "./lqtech4.png";
import lqtech5 from "./lqtech5.png";
import lqtech6 from "./lqtech6.png";
import lqtech7 from "./lqtech7.png";
import lqtech8 from "./lqtech8.png";
import lqtech9 from "./lqtech9.png";
import lqtech10 from "./lqtech10.png";
import lqtech11 from "./lqtech11.png";
import lqtech12 from "./lqtech12.png";
import lqtech13 from "./lqtech13.png";
import lqtech14 from "./lqtech14.png";
import payroll1 from "./payroll1.png";
import payroll2 from "./payroll2.png";
import payroll3 from "./payroll3.png";
import payroll4 from "./payroll4.png";
import payroll5 from "./payroll5.png";
import payroll6 from "./payroll6.png";
import payroll7 from "./payroll7.png";
import payroll8 from "./payroll8.png";
import payroll9 from "./payroll9.png";
import payroll10 from "./payroll10.png";
import payroll11 from "./payroll11.png";
import payroll12 from "./payroll12.png";
import todo from "./todo.png";
import basketball1 from "./basketball1.png";
import basketball2 from "./basketball2.png";
import basketball3 from "./basketball3.png";
import basketball4 from "./basketball4.png";
import basketball5 from "./basketball5.png";
import basketball6 from "./basketball6.png";
import basketball7 from "./basketball7.png";
import basketball8 from "./basketball8.png";
import basketball9 from "./basketball9.png";
import basketball10 from "./basketball10.png";
import ots from "./ots.png";
import ots2 from "./ots2.png";
import ots3 from "./ots3.png";
import ots4 from "./ots4.png";
import tax_calculator from "./tax-calculator.png";
import ems1 from "./ems1.png";
import ems2 from "./ems2.png";
import ems3 from "./ems3.png";
import ems4 from "./ems4.png";
import emsapi1 from "./emsapi1.png";
import emsapi2 from "./emsapi2.png";
import emsapi3 from "./emsapi3.png";

export interface Project {
  name: string;
  description: string;
  images: string[];
  stack: string[];
  code: string;
  link: string;
}

export const products: Project[] = [
  {
    name: "Employee Management System API",
    description:
      "RESTful backend service with layered architecture — controller, service, and repository pattern. Demonstrates API design and MongoDB integration.",
    images: [ems1, emsapi1, emsapi2, emsapi3],
    stack: ["Spring Boot", "Java", "MongoDB", "Maven", "Postman"],
    code: "https://github.com/rmbardillon/employee-management-system-api",
    link: "https://springboot-employee-api.onrender.com/",
  },
  {
    name: "Employee Management System",
    description:
      "Full-stack CRUD app consuming the Spring Boot API above. Server-side rendering with Next.js and type-safe data handling.",
    images: [ems1, ems2, ems3, ems4],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    code: "https://github.com/rmbardillon/employee-management-system",
    link: "https://employee-management-system-xi.vercel.app/",
  },
  {
    name: "Lucas Payroll System",
    description:
      "Automated payroll engine handling salary computation, tax deduction logic, and employee records. Business rules implemented in PHP backend.",
    images: [
      payroll1, payroll2, payroll3, payroll4, payroll5, payroll6,
      payroll7, payroll8, payroll9, payroll10, payroll11, payroll12,
    ],
    stack: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    code: "https://github.com/rmbardillon/payroll",
    link: "http://payrollsystem.liveblog365.com/",
  },
  {
    name: "LQTech Inventory System",
    description:
      "Multi-module inventory platform with product tracking, supply chain management, and reporting dashboards for business insights.",
    images: [
      lqtech1, lqtech2, lqtech3, lqtech4, lqtech5, lqtech6, lqtech7,
      lqtech8, lqtech9, lqtech10, lqtech11, lqtech12, lqtech13, lqtech14,
    ],
    stack: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    code: "https://github.com/rmbardillon/lqtech",
    link: "https://business.lqtech.tech/",
  },
  {
    name: "Tax Calculator",
    description:
      "Philippine tax deduction tool computing SSS, Pag-ibig, PhilHealth, and Income Tax. Rule-based calculation engine with real-time output.",
    images: [tax_calculator],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    code: "https://github.com/rmbardillon/tax-calculator",
    link: "https://tax-calculator-nu-self.vercel.app/",
  },
  {
    name: "CSWDO Registration System",
    description:
      "Government registration system for social welfare programs. Handles citizen data management and program enrollment workflows.",
    images: [cswd, cswd2, cswd3, cswd4, cswd5, cswd6],
    stack: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    code: "https://github.com/rmbardillon/cswd",
    link: "",
  },
  {
    name: "Optimal Transmission Switching",
    description:
      "Engineering optimization tool for power system analysis using mathematical modeling and constraint solving.",
    images: [ots, ots2, ots3, ots4],
    stack: ["Python", "Pyomo", "NumPy", "PyQt5"],
    code: "https://drive.google.com/drive/folders/1KiKBb35aJ55O9-uyrWeJwzd3-zt86TdK?usp=sharing",
    link: "",
  },
  {
    name: "Basketball League Website",
    description:
      "Data-driven sports platform with game scheduling, player statistics, and team standings backed by a relational database.",
    images: [
      basketball1, basketball2, basketball3, basketball4, basketball5,
      basketball6, basketball7, basketball8, basketball9, basketball10,
    ],
    stack: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    code: "https://github.com/rmbardillon/christmas-league.git",
    link: "http://rose-pointe-sports.games/",
  },
  {
    name: "Todo List App",
    description:
      "MERN stack CRUD application demonstrating end-to-end data flow from React frontend to Express/MongoDB backend.",
    images: [todo],
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    code: "https://github.com/rmbardillon/crud",
    link: "https://crud-3p7y.onrender.com/",
  },
];
