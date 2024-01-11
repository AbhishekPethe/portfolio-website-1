// import img1 from "../../assets/portfolio1.jpg";
// import img2 from "../../assets/portfolio2.jpg";
// import img3 from "../../assets/portfolio3.jpg";
// import img4 from "../../assets/portfolio4.jpg";
// import img5 from "../../assets/portfolio5.png";
// import img6 from "../../assets/portfolio6.jpg";

import img1 from "../../assets/portfolio.jpg";
import img2 from "../../assets/E-shoppee.jpg";
import img3 from "../../assets/RealEstate.jpg";
import img4 from "../../assets/Pro-fitness.jpg";
import img5 from "../../assets/Krypto.png";
import img6 from "../../assets/Metaverse.jpg";
import img7 from "../../assets/Space.jpg";
import img8 from "../../assets/Modern UI.jpg";
import img9 from "../../assets/BusinessUI.jpg";
import img10 from "../../assets/Digital Agency.jpg";
import img11 from "../../assets/rental.webp"
import img12 from "../../assets/nike.webp"
import img13 from "../../assets/ahead.webp"
import img14 from "../../assets/office.webp"

import { FaReact } from "react-icons/fa"
import { SiCss3, SiJavascript, SiTailwindcss, SiStyledcomponents, SiAuth0 , SiRedux } from "react-icons/si"
import {TbBrandVite , TbBrandFramerMotion , TbBrandFigma} from "react-icons/tb"


export const data = [
  {
    id: 1,
    image: img1,
    title: "Portfolio Website",
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-myportfolio.netlify.app",
    details : [<SiCss3 /> , <SiJavascript /> , <FaReact /> ]
  },
  {
    id: 2,
    image: img2,
    title: "E-Shoppee",
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-eshoppee.netlify.app/",
    details : [ <SiJavascript /> ,<FaReact /> , <SiStyledcomponents /> , <SiAuth0 /> , <TbBrandVite />  ]
  },
  {
    id: 3,
    image: img3,
    title: "Real-Estate",
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-realestate.netlify.app/",
    details : [ <SiJavascript /> ,<FaReact /> , <SiStyledcomponents /> , <TbBrandVite /> , <TbBrandFramerMotion /> ]
  },
  {
    id: 12,
    image: img12,
    title: "Nike-Store",
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-nike.netlify.app/",
    details : [ <FaReact /> , <SiTailwindcss/> , <SiRedux /> ,<TbBrandVite /> ]
  },
  {
    id: 4,
    image: img4,
    title: "Pro-Fitness",
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-profitness.netlify.app/",
    details : [<SiCss3 /> , <SiJavascript /> , <FaReact /> , <TbBrandVite /> ]
  },
  {
    id: 11,
    image: img11,
    title: "Car-Rental",
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-rental.netlify.app/",
    details : [<SiTailwindcss /> , <SiJavascript /> , <FaReact /> , <TbBrandVite /> ]
  },
  {
    id: 13,
    image: img13,
    title: "The Ahead App",
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-aheadapp.netlify.app/",
    details : [<SiTailwindcss /> , <SiJavascript /> , <FaReact /> , <TbBrandVite /> , <TbBrandFramerMotion /> ]
  },
  {
    id: 5,
    image: img5,
    title: "Krypto",
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-crypto.netlify.app/",
    details : [<SiTailwindcss /> , <SiJavascript /> , <FaReact /> , <TbBrandVite /> ]
  },
  {
    id: 6,
    image: img6,
    title: "Meta-Framer",
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-framer.netlify.app/",
    details : [<SiTailwindcss /> , <SiJavascript /> , <FaReact /> , <TbBrandVite /> , <TbBrandFramerMotion /> ]
  },
  {
    id: 14,
    image: img14,
    title: "Office Rent",
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-office.netlify.app/",
    details : [<SiTailwindcss /> , <SiJavascript /> , <FaReact /> , <TbBrandVite /> , <TbBrandFramerMotion /> ]
  },
  {
    id: 7,
    image: img7,
    title: "SpaceTour",
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-space.netlify.app/",
    details : [<SiTailwindcss /> , <SiJavascript /> , <FaReact /> , <TbBrandVite /> ]
  },
  {
    id: 8,
    image: img8,
    title: "Modern UI",
    github: "https://github.com/AbhishekPethe",
    demo: "https://chatgpt3-portfolio.netlify.app",
    details : [<TbBrandFigma /> , <SiCss3 /> , <FaReact /> ]
  },
  {
    id: 9,
    image: img9,
    title: "Business UI",
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-business.netlify.app/",
    details : [<SiTailwindcss /> , <FaReact /> , <TbBrandVite /> , <TbBrandFigma />  ]
  },
  {
    id: 10,
    image: img10,
    title: "Digital Agency(Desktop Only)",
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-agency.netlify.app/",
    details : [<FaReact /> , <SiStyledcomponents /> , <TbBrandVite />  ]
  },
];
