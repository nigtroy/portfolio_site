import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    detetction,
    classification,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Computer Vision Expert",
      icon: web,
    },
    {
      title: "Data Analyst/BI Expert",
      icon: mobile,
    },
    {
      title: "AI Engineer",
      icon: backend,
    },
    {
      title: "Data Scientist",
      icon: creator,
    },
    {
      title: "Deep Learning Engineer",
      icon: creator,
    },
    {
      title: "Remote Sensing",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Data Scientist",
      company_name: "Ishango (with Barry Callebaut)",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Present",
      points: [
        "Developing validation engines using Great Expectations to validate incoming data in Databricks",
        "Collaborating with other Data scientists on how best to optimize validation engines",
        "Building and assessing accuracy of models to predict KPi and drive business value ",
        "Monitoring model lifecyle performance of said models to avoid incorrect predicitions from model",
      ],
    },
    {
      title: "Data Scientist",
      company_name: "Freelance",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - March 2023",
      points: [
        "Analysis of Land Cover/ Land User change patterns in an area (Techiman).",
        "Built models on Google Earth Engine to classify different land cover types using satellite imagery",
        "Analysed the evolution and change of Land covers over a period of time.",
        "Analyse Land Surface Temperature and it's effect on Land Cover Change",
        
      ],
    },
    {
      title: "Data Science Fellow",
      company_name: "Ishango (with Phastar) ",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jun 2022 - Jul 2022",
      points: [
        "Developed a amchine learning solutionto tackle a medical coding problem using Natural Language Processing.",
        "Designed a spell correction algorithm specifically for medical context, specifically for the solution.",
        "Achieved a 92% coding accuracy;i.e could code 92% of terms as supposed to 60 percent from manual coding.",
        "Reduced time to code by about 3 weeks, saving time and resources.",
      ],
    },
    {
      title: "Data Scientist Intern",
      company_name: "Explore AI",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Dec 2022",
      points: [
        "Developed a computer vision model for fibre pole detection in google street‑view images",
        "Deployed model as a streamlit app over an amazon ec2 instance and s3 bucket",
        "include functionality of google streetview and automatically selecting an area on the map, we used the osmnx framework alongside",
        "folium maps to give users functionality of an interactive map",
        "I lead the team that tackled this project and our app was further shortlisted for demo purposes",
      ],
    },
    {
      title: "Drone Technical Support",
      company_name: "DroneHub Ghana Ltd",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Sep 2019 - Dec 2021",
      points: [
        "Provided after sales technical support for drones that had developed some faults and also client inquiries).",
        "Provided drone services like aerial photography and videography.",
        "Services also included mapping and surveying and also photogrammetry using advanced drone technologies like thhe DJI Phantom 4 RTK and the Matrice 300RTK. GIS softwares like ArcGIS was used in the pocessing of raw images for photogrammetry purposes",
        "Sale of drones and drone spare parts.",
      ],
    }
  ];
 
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Ivy",
      designation: "GM",
      company: "Healthfirst Consult",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Shadrack does.",
      name: "Mr Adusei",
      designation: "COO",
      company: "UNICSAJ",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Shadrack optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Mr. Dan",
      designation: "GM",
      company: "Nasaconsult",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Movie Recommender App",
      description:
        "Web-based platform that allows users receive movie recommendations based on collaborative filtering.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Fibre Pole Detection App",
      description:
        "Streamlit app that allow users to detect any object in streetview images.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: detetction,
      source_code_link: "https://github.com/shaddynetwork",
    },
    {
      name: "LULC Classification project",
      description:
        "Detection LULC change over a period of time and the effect of LST on Land cover change",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: classification,
      source_code_link: "https://github.com/shaddydevops",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };