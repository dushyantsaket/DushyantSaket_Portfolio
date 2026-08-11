const config = {
  title: "Dushyant Saket | Full Stack Developer",
  description: {
    long: "Full Stack Developer (B.Sc. CS, 2026) with internship experience in MERN stack, RESTful APIs, MongoDB, system design, and AI integration.",
    short: "Full Stack Developer | MERN Stack | AI Integration | System Design",
  },
  keywords: [
    "Dushyant",
    "Dushyant Saket",
    "Full Stack Developer",
    "MERN",
    "React",
    "Node.js",
    "MongoDB",
    "AWS",
  ],
  author: "Dushyant Saket",
  email: "dushyantsaket20@gmail.com",
  site: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/dushyant-choudhuary-aa20b52b2/",
    github: "https://github.com/dushyantsaket",
  },
};
export { config };
