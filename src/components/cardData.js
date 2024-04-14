import { v4 as uuidv4 } from "uuid";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";
import image5 from "../assets/images/image5.jpeg";
import image6 from "../assets/images/image6.jpeg";
import image7 from "../assets/images/image7.jpeg";
import image8 from "../assets/images/image8.jpeg";

const cardData = [
  {
    id: uuidv4(),
    posting: "WEB DEVELOPER",
    professorName: "John Doe",
    researchField: "Computer Science",
    image: image1,
    description:
      "A position for a skilled web developer to work on exciting web projects using modern technologies.",
    startDate: "2024-05-01",
    applicationDeadline: "2024-04-20",
    preferredSkill: "React.js",
  },
  {
    id: uuidv4(),
    posting: "WEB SCRAPER1",
    professorName: "Michael Johnson",
    researchField: "Biology",
    image: image4,
    description:
      "Similar to the previous project, this involves web scraping but with a different set of websites and data requirements.",
    startDate: "2024-05-15",
    applicationDeadline: "2024-05-05",
    preferredSkill: "Python, Scrapy",
  },
  {
    id: uuidv4(),
    posting: "AI ENGINEER",
    professorName: "Emily Brown",
    researchField: "Artificial Intelligence",
    image: image6,
    description:
      "Join our team of AI engineers to develop cutting-edge artificial intelligence solutions for various applications.",
    startDate: "2024-06-01",
    applicationDeadline: "2024-05-20",
    preferredSkill: "Machine Learning, TensorFlow",
  },
  {
    id: uuidv4(),
    posting: "DATA ANALYST",
    professorName: "David Jones",
    researchField: "Statistics",
    image: image7,
    description:
      "An opening for a skilled data analyst to analyze large datasets and derive meaningful insights for decision-making.",
    startDate: "2024-06-10",
    applicationDeadline: "2024-05-30",
    preferredSkill: "SQL, R, Python",
  },
  {
    id: uuidv4(),
    posting: "ML BUG FIX",
    professorName: "Jane Smith",
    researchField: "Physics",
    image: image2,
    description:
      "This project involves identifying and fixing bugs in machine learning algorithms used for data analysis.",
    startDate: "2024-04-25",
    applicationDeadline: "2024-04-15",
    preferredSkill: "Python",
  },
  {
    id: uuidv4(),
    posting: "WEB SCRAPER",
    professorName: "Michael Johnson",
    researchField: "Biology",
    image: image3,
    description:
      "We are looking for a web scraper to collect data from various biology-related websites for research purposes.",
    startDate: "2024-05-10",
    applicationDeadline: "2024-05-01",
    preferredSkill: "Python, BeautifulSoup",
  },
  {
    id: uuidv4(),
    posting: "WEB SCRAPER2",
    professorName: "Michael Johnson",
    researchField: "Biology",
    image: image5,
    description:
      "Another opportunity for a web scraper to gather data from biology-related sources for analysis and research purposes.",
    startDate: "2024-05-20",
    applicationDeadline: "2024-05-10",
    preferredSkill: "Python, Selenium",
  },
  {
    id: uuidv4(),
    posting: "SOFTWARE ENGINEER",
    professorName: "Sarah Miller",
    researchField: "Software Engineering",
    image: image8,
    description:
      "We are seeking a software engineer to design and develop software applications using best practices and methodologies.",
    startDate: "2024-07-01",
    applicationDeadline: "2024-06-20",
    preferredSkill: "Java, JavaScript",
  },
  // Add more card data objects here...
];

export default cardData;
