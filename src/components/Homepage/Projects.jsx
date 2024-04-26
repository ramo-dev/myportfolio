
import { color } from "framer-motion";
import Project1 from "../../assets/projects/HAzel.png"
import Project2 from "../../assets/projects/Notestack.png";
import Project3 from "../../assets/projects/devbyte.png";
import Project4 from "../../assets/projects/Sneakr.png";
import Project5 from "../../assets/projects/SneakrPlanet.png";
import Project6 from "../../assets/projects/Imagenn.png";
import Project7 from "../../assets/projects/digistore.png";


export const projects = [
  {
    id: 1,
    className: "homepage-product-info",
    div: "showDiv1",
    title: "Digi Store",
    image: Project7,
    background: "teal",
    color: "#fff",
    link: "https://thedigistore.netlify.app",
    date: "12 Dec",
    type: "web",
    description:
      "DigiStore, the premier platform where talented individuals like you converge to showcase their exceptional abilities and connect with a global audience hungry for unique services. Whether you're a master craftsman, a green-thumbed gardener, a visionary painter, or possess any other remarkable talent, DigiTalent is your stage to shine.",
  },
  {
    id: 2,
    className: "homepage-product-info reverse",
    title: "Imagenn Ai",
    div: "showDiv2",
    image: Project6,
    background: "#2293AF",
    color: "#fff",
    link: "https://imagenn.netlify.app/",
    date: "12 Dec",
    type: "web",
    description:
      "Imagenn, the AI-powered image generator, turns your text into captivating visuals instantly. Say goodbye to boring text – with Imagenn, your messages come to life in stunning images. Try Imagenn now and unleash the power of visual storytelling!",
  },
  {
    id: 3,
    className: "homepage-product-info",
    title: "NoteStack",
    div: "showDiv3",
    image: Project2,
    background: "#0C2032",
    color: "#fff",
    link: "/",
    date: "12 Dec",
    type: "web",
    description:
      "NoteStack is more than just a note-taking app; it's your knowledge hub. Tired of information scattered across emails, documents, and your brain? NoteStack gathers it all in one beautiful, searchable space.",
  },
  {
    id: 4,
    className: "homepage-product-info reverse",
    title: "Hazel Bakhoyah",
    div: "showDiv4",
    background: "linear-gradient(#1B1017 , #111)",
    color: "#E2947B",
    image: Project1,
    link: "https://hazel-bakhoya.vercel.app",
    date: "12 Dec",
    type: "web",
    description:
      "This is a portfolio React application built using Vite.for Hazel",
  },
  {
    id: 5,
    className: "homepage-product-info",
    title: "Sneakr Planet",
    div: "showDiv5",
    image: Project5,
    background: "linear-gradient(#111 , #0E0E0E)",
    color: "orangered",
    link: "/",
    date: "12 Dec",
    type: "web",
    description:
      "Sneakr Planet is a website dedicated to showcasing and selling a variety of sneakers. It offers a range of features and sections to explore different products and learn more about them.",
  },

  {
    id: 6,
    className: "homepage-product-info reverse",
    title: "Devbyte",
    div: "showDiv6",
    image: Project3,
    background: "linear-gradient(#0E0E0E, #000)",
    color: "crimson",
    link: "https://thedevbyte.netlify.app",
    date: "12 Dec",
    type: "web",
    description:
      "This is a full-stack web application for creating, browsing, and managing blog posts. It utilizes React for the front end, Firebase as a Backend as a Service (BaaS), Firestore for database management, and user authentication. ",
  },
];