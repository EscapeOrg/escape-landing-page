import React from 'react';
import Carousel from '../components/Carousel';
import "../styles/Features.css"
import logo from "../assets/escape_logo.jpeg"

const Features = () => {
  const features = [
    {
      title: "Customaziable Schedule Sharing",
      desc: "Share your daily schedule with friends or keep them private, you have full control.",
      img: logo,
    },
    {
      title: "Intelligent Matching",
      desc: "Connect with users who share similar schedules and activities. Meet like-minded individuals effortlessly.",
      img: logo,
    },
    {
      title: "Personalized Recommendations",
      desc: "Recieve suggestions based on your interests, professions, and personal preferences. Discover what you love.",
      img: logo,
    },
    {
      title: "Location-based Networking",
      desc:"Expand your social and professional networks through local recommendations and searches. Connect with your community.",
      img: logo,
    },
    {
      title: "Safe User Experience",
      desc: "Authentication and verified profiles ensure your interactions are secure. Network with confidence.",
      img: logo,
    },
    {
      title: "Group Scheduling & In-App Messaging",
      desc: "Plan activites and communicate effortlessly within the app. Collaboration made easy.",
      img: logo
    },
    {
      title: "Calendar Integration",
      desc: "Seamless integrate Escape with your existing calendars for efficient daily planning. Stay organized effortlessly.",
      img: logo
    }

  ];

  return (
    <div id='features'>
      <div className='primary-heading' id='feature-heading'>
        <h1>Our Features</h1>
      </div>
      <div className='carousel-container'>
        <Carousel items={features} />
      </div>
    </div>
  );
};

export default Features;
