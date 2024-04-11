// import images
import Hero_person from "./assets/images/Hero/person.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import adobexd from "./assets/images/Skills/adobe-xd.png";
import laravel from "./assets/images/Skills/laravel.png";
import matlab from "./assets/images/Skills/matlab.png";
import flutter from "./assets/images/Skills/flutter.png";
import django from "./assets/images/Skills/django.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";



// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer | Data Scientist",
    firstName: "MATHIEU",
    LastName: "DJAKPATA",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Adobe xd",
        para: "Tool for wireframes creation",
        logo: adobexd,
      },
      {
        name: "Node js",
        para: "JavaSript Framework for back-end development",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Tool for images editing",
        logo: ps,
      },
      {
        name: "React js",
        para: "JavaScript Framework for Front-end development",
        logo: reactjs,
      },
      {
        name: "Django",
        para: "Python framework for web development",
        logo: django,
      },
      {
        name: "Flutter",
        para: "Dart framework for mobile development",
        logo: flutter,
      },
      {
        name: "Laravel",
        para: "PHP web framework",
        logo: laravel,
      },
      {
        name: "Matlab",
        para: "High-level programming language",
        logo: matlab,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "",
        logo: services_logo1,
      },
      {
        title: "Mobile Development",
        para: "",
        logo: services_logo2,
      },
      {
        title: "Logo making",
        para: "",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Intership management application",
        image: project2,
      },
      {
        title: "Portfolio",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hero_person,
    image2: Hero_person,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "mathieuakakpodjakpata@gmail.com",
        icon: GrMail,
        link: "mailto:mathieuakakpodjakpata@gmail.com",
      },
      {
        text: "+212 774-467662",
        icon: MdCall,
        link: "https://wa.me/+212774467662",
      },
      {
        text: "math_ieu228",
        icon: BsInstagram,
        link: "https://www.instagram.com/math_ieu228?igsh=MmFqdzh1bDV6emgw",
      },
    ],
  },
  Footer: {
    text: "All © CopyRight Reserved 2024",
  },
};
