import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Russ",
  lastName: "Madrigal",
  initials: "RM", // the example uses first and last, but feel free to use three or more if you like.
  position: "Technical SEO",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🤓",
      text: "Over 14 years experience",
    },
    {
      emoji: "🇨🇷",
      text: "San Jose, Costa Rica",
    },
    {
      emoji: "👨‍💻",
      text: "Technical SEO & Frontend Developer",
    },
    {
      emoji: "📧",
      text: "rusbenmadrigal@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.youtube.com/@rusbenmadrigal/",
      icon: "fa fa-youtube-play",
      label: "instagram",
    },

    {
      link: "https://www.instagram.com/rusbenmadrigal/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/rusbenmadrigal",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/rusbenmadrigal/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/rusbenmadrigal",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Russ. Senior SEO with more than 14 years of experience in different areas of SEO (Analytics, On-page and code) since 6 years ago I dedicate myself mainly to work the technical part of SEO, since it is the one I like the most, I am also a ReactJS Front End developer.",
  skills: {
    proficientWith: [
      "JavaScript",
      "NextJS",
      "React",
      "HTML",
      "Google Search Console",
      "Screaming Frog",
      "G. Anlaitycs",
      "Looker Studio",
    ],
    exposedTo: ["Leadership", "Training", "Learning"],
  },
  hobbies: [
    {
      label: "Mixed martial arts (MMA)",
      emoji: "🤼",
    },
    {
      label: "Coding / SEO",
      emoji: "👨‍💻",
    },
    {
      label: "Equal rights",
      emoji: "🏳️‍🌈",
    },
    {
      label: "Cooking",
      emoji: "🧑‍🍳",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Sportsbook Review",
      description: "Role: Technical SEO Manager",
      live: "https://bit.ly/44gzLKT", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Trip Advisor",
      live: "https://bit.ly/3HoTY7u",
      description: "Role: Senior Technical SEO",
      image: mock2,
    },
    {
      title: "Connect Assiatance",
      live: "https://bit.ly/40S163a",
      description: "Role: Technical SEO Manager",
      image: mock3,
    },
    {
      title: "MPD",
      live: "https://bit.ly/3LFoUmy",
      description: "Role: Technical SEO Manager",
      image: mock4,
    },
    {
      title: "Odds Trader",
      description: "Role: Technical SEO Manager",
      live: "https://bit.ly/3LobCcG",
      image: mock5,
    },
  ],
};
