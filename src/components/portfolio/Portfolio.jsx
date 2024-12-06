import React from 'react'
import './portfolio.css'
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";


const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Weather App",
    desc: "This is a dynamic weather application built using React.js that allows users to get real-time weather updates for any location.",
    link: "https://github.com/ChamothAshen/Weather-App.git",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "Singhe Automotive Company (Pvt.) Ltd. Web-Based Vehicle Service Management System 🚗",
    desc: "We're excited to unveil our Y2S2 ITP project, a comprehensive web-based vehicle service management system developed using the MERN stack (MongoDB, Express.js, React, Node.js) for Singhe Automotive Company (Pvt.) ", 
    link: "https://github.com/ChamothAshen/mern-vsms.git",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Supplement Store Application",
    desc: "This is an e-commerce application developed for a supplement store, allowing customers to browse, search, and purchase a variety of health and wellness products. The app features a modern and clean UI designed using React.js and Tailwind CSS for responsiveness",
    link: "https://github.com/ChamothAshen/mern-supliment.git",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Event Venue App",
    desc: "This app is designed to help users find and book event venues for various occasions, from corporate events to weddings and partiesThe app features a robust backend built with Java, providing users with a smooth and responsive experience.",
    link: "https://github.com/ChamothAshen/oop-project-use-java-.git"
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Animated Portfolio Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "https://github.com/ChamothAshen/MyPortfolio.git",
  },
];
const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
}; 

export default Portfolio;