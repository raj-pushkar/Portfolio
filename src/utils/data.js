const getMenu = () => ["home", "skills", "projects", "contact"];

const getIdentity = () => ({
  image: "images/project/self.jpg",
  welcomeText: "Hi! I'm Pushkar Raj",
  typeWriterText: [
    "Web Developer",
    "problem Solver",
    "Freelance Programmer",
  ],
  descriptionText:
    "Pushkar Raj here, a CSE student at VIT Chennai specializing in Cyber-Physical Systems. With a passion for technology and innovation, I explore the intricate fusion of the digital and physical world. Eager to bridge the gap between theory and real-world applications. Join me in this journey of knowledge, problem-solving, and the endless possibilities of Cyber-Physical Systems.",
  contactText:
    "I am currently looking for a internship. If you see me as a good fit, feel free to contact me. Let's work together!",
  socialLink: {
    mail: "rajpushkar2211@gmail.com",
    github: "https://github.com/raj-pushkar",
    linkedin: "https://www.linkedin.com/in/pushkar-raj-61a3ba277/",
    
  },
});

export { getMenu, getIdentity };
