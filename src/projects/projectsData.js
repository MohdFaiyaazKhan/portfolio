import projectOne from "../assets/p1.png";
import projectTwo from "../assets/p2.jpg";
import projectThree from "../assets/p3.jpeg";

const projects = {
  1: {
    title: "Weather Report App",
    image: projectOne,
    description: (
      <>
        <p>
        Discover real-time weather updates with user-friendly app. Built with precision using ReactJS, API integration, and styled with Tailwind CSS.
        </p>
      </>
    ),
    github: "https://github.com/MohdFaiyaazKhan/weather_report",
    demo: "https://mohdfaiyaazkhan.github.io/weather_report",
  },
  2: {
    title: "Youtube Clone",
    image: projectTwo,
    description: (
      <>
        <p>
        This YouTube clone offers a seamless experience. Simply click on YouTube icon, and explore a platform built with React, API integration, and Tailwind CSS.
        </p>
      </>
    ),
    github: "https://github.com/MohdFaiyaazKhan/youtube_clone",
    demo: "https://mohdfaiyaazkhan.github.io/youtube_clone",
  },
  3: {
    title: "Instagram Clone",
    image: projectThree,
    description: (
      <>
        <p>
        Explore the world of social media with our Instagram clone, powered by the MERN stack. Enjoy a feature-rich experience, and seamless navigation.
        </p>
      </>
    ),
    github: "https://github.com/MohdFaiyaazKhan/insta_clone",
    demo: "https://mohdfaiyaazkhan.github.io/insta_clone",
  },
};

export default projects;
