const getMenu = () => ["home", "skills", "projects", "contact"];

const getIdentity = () => ({
  image: "images/ankit.jpg",
  welcomeText: "Hi! I'm Ankit Kumar",
  typeWriterText: [
    "Web Developer",
    "problem Solver",
    "Freelance Programmer",
  ],
  descriptionText:
    "Ankit Kumar here, a CSE student at VIT Chennai specializing in Cyber-Physical Systems. With a passion for technology and innovation, I explore the intricate fusion of the digital and physical world. Eager to bridge the gap between theory and real-world applications. Join me in this journey of knowledge, problem-solving, and the endless possibilities of Cyber-Physical Systems.",
  contactText:
    "I am currently looking for a internship. If you see me as a good fit, feel free to contact me. Let's work together!",
  socialLink: {
    mail: "ankitkumarsuman6@gmail.com",
    resume: "https://drive.google.com/file/d/1M7j4IS-3onkL0qORMGtUMRtdhDhPST03/view?usp=drivesdk",
    github: "https://github.com/crazzyrainbow",
    linkedin: "https://www.linkedin.com/in/ankit-kumar-532085221/",
    
  },
});

export { getMenu, getIdentity };
