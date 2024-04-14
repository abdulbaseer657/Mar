// import React, { useState, useEffect } from "react";
// import WorkPostingCard from "./components/WorkPostingCard";
// import "bootstrap/dist/css/bootstrap.min.css";
// import cardData from "./components/cardData";
// import background1 from "./assets/images/background1.jpeg";
// import background2 from "./assets/images/background2.jpeg";
// import background3 from "./assets/images/background3.jpeg";
// import background4 from "./assets/images/background4.jpeg";
// import background5 from "./assets/images/background5.jpeg";
// import background6 from "./assets/images/background6.jpeg";

// const backgrounds = [
//   background1,
//   background2,
//   background3,
//   background4,
//   background5,
//   background6,
// ];

// const App = () => {
//   const [backgroundIndex, setBackgroundIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
//     }, 15000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="container-fluid p-0"
//       style={{
//         backgroundImage: `url(${backgrounds[backgroundIndex]})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         minHeight: "100vh",
//         overflowX: "hidden", // To prevent horizontal scrollbar
//       }}
//     >
//       <h1 className="mt-5 mb-4 text-center text-white">Job Postings</h1>
//       <div className="row">
//         {cardData.map((card) => (
//           <WorkPostingCard key={card.id} card={card} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import WorkPostingCard from "./components/WorkPostingCard";
// import "bootstrap/dist/css/bootstrap.min.css";
// import cardData from "./components/cardData";

// const App = () => {
//   const backgroundColors = [
//     "rgba(51, 0, 0, 0.25)",
//     "rgba(51, 0, 25, 0.25)",
//     "rgba(25, 51, 0, 0.25)", // Red with 25% opacity
//     "rgba(0, 0, 51, 0.25)", // Green with 25% opacity
//     "rgba(0, 0, 255, 0.25)", // Blue with 25% opacity
//     // Add more colors here if needed
//   ];

//   const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBackgroundColorIndex((prevIndex) =>
//         prevIndex === backgroundColors.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000); // Change background every 10 seconds

//     return () => clearInterval(interval);
//   }, [backgroundColors.length]); // Include backgroundColors.length in the dependency array

//   const bodyStyle = {
//     margin: 0,
//     minHeight: "100vh", // Use minHeight instead of height
//     backgroundColor: backgroundColors[backgroundColorIndex],
//     display: "flex",
//     flexDirection: "column",
//   };

//   return (
//     <div style={bodyStyle}>
//       <h1 className="mt-5 mb-4 text-center">Job Postings</h1>
//       <div className="container" style={{ flexGrow: 1 }}>
//         <div className="row">
//           {cardData.map((card) => (
//             <WorkPostingCard key={card.id} card={card} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { Component } from "react";
// import Navbar from "./components/Navbar";
// import WorkPostingCard from "./components/WorkPostingCard";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import cardData from "./components/cardData";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       backgroundColors: [
//         "rgba(51, 0, 0, 0.25)",
//         "rgba(51, 0, 25, 0.25)",
//         "rgba(25, 51, 0, 0.25)",
//         "rgba(0, 0, 51, 0.25)",
//         "rgba(0, 0, 255, 0.25)",
//       ],
//       backgroundColorIndex: 0,
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(this.changeBackgroundColor, 2000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   changeBackgroundColor = () => {
//     this.setState((prevState) => ({
//       backgroundColorIndex:
//         prevState.backgroundColorIndex ===
//         this.state.backgroundColors.length - 1
//           ? 0
//           : prevState.backgroundColorIndex + 1,
//     }));
//   };

//   render() {
//     const { backgroundColors, backgroundColorIndex } = this.state;

//     const bodyStyle = {
//       margin: 0,
//       minHeight: "100vh",
//       backgroundColor: backgroundColors[backgroundColorIndex],
//       display: "flex",
//       flexDirection: "column",
//     };

//     return (
//       <div style={bodyStyle}>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }

// function Home() {
//   return (
//     <div>
//       <h1 className="mt-5 mb-4 text-center">Job Postings</h1>
//       <div className="container" style={{ flexGrow: 1 }}>
//         <div className="row">
//           {cardData.map((card) => (
//             <WorkPostingCard key={card.id} card={card} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { Component } from "react";
// import Navbar from "./components/Navbar";
// import WorkPostingCard from "./components/WorkPostingCard";
// import StudentsPage from "./components/StudentsPage"; // Import the StudentsPage component
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import cardData from "./components/cardData";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       backgroundColors: [
//         "rgba(51, 0, 0, 0.25)",
//         "rgba(51, 0, 25, 0.25)",
//         "rgba(25, 51, 0, 0.25)",
//         "rgba(0, 0, 51, 0.25)",
//         "rgba(0, 0, 255, 0.25)",
//       ],
//       backgroundColorIndex: 0,
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(this.changeBackgroundColor, 2000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   changeBackgroundColor = () => {
//     this.setState((prevState) => ({
//       backgroundColorIndex:
//         prevState.backgroundColorIndex ===
//         this.state.backgroundColors.length - 1
//           ? 0
//           : prevState.backgroundColorIndex + 1,
//     }));
//   };

//   render() {
//     const { backgroundColors, backgroundColorIndex } = this.state;

//     const bodyStyle = {
//       margin: 0,
//       minHeight: "100vh",
//       backgroundColor: backgroundColors[backgroundColorIndex],
//       display: "flex",
//       flexDirection: "column",
//     };

//     return (
//       <div style={bodyStyle}>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route path="/students" element={<StudentsPage />} />{" "}
//             {/* Add this route */}
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }

// function Home() {
//   return (
//     <div>
//       <h1 className="mt-5 mb-4 text-center">Open Roles</h1>
//       <div className="container" style={{ flexGrow: 1 }}>
//         <div className="row">
//           {cardData.map((card) => (
//             <WorkPostingCard key={card.id} card={card} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { Component } from "react";
// import Navbar from "./components/Navbar";
// import WorkPostingCard from "./components/WorkPostingCard";
// import StudentsPage from "./components/StudentsPage";
// import ResearchNewsPage from "./components/New"; // Import the ResearchNewsPage component
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import cardData from "./components/cardData";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       backgroundColors: [
//         "rgba(51, 0, 0, 0.25)",
//         "rgba(51, 0, 25, 0.25)",
//         "rgba(25, 51, 0, 0.25)",
//         "rgba(0, 0, 51, 0.25)",
//         "rgba(0, 0, 255, 0.25)",
//       ],
//       backgroundColorIndex: 0,
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(this.changeBackgroundColor, 2000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   changeBackgroundColor = () => {
//     this.setState((prevState) => ({
//       backgroundColorIndex:
//         prevState.backgroundColorIndex ===
//         this.state.backgroundColors.length - 1
//           ? 0
//           : prevState.backgroundColorIndex + 1,
//     }));
//   };

//   render() {
//     const { backgroundColors, backgroundColorIndex } = this.state;

//     const bodyStyle = {
//       margin: 0,
//       minHeight: "100vh",
//       backgroundColor: backgroundColors[backgroundColorIndex],
//       display: "flex",
//       flexDirection: "column",
//     };

//     return (
//       <div style={bodyStyle}>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route path="/students" element={<StudentsPage />} />
//             <Route path="/research-news" element={<ResearchNewsPage />} />{" "}
//             {/* Add this route */}
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }

// function Home() {
//   return (
//     <div>
//       <h1 className="mt-5 mb-4 text-center">Open Roles</h1>
//       <div className="container" style={{ flexGrow: 1 }}>
//         <div className="row">
//           {cardData.map((card) => (
//             <WorkPostingCard key={card.id} card={card} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import WorkPostingCard from "./components/WorkPostingCard";
import StudentsPage from "./components/StudentsPage";
import ResearchNewsPage from "./components/New"; // Import the ResearchNewsPage component
import QuestionnairePage from "./components/QuestionnairePage"; // Import the QuestionnairePage component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import cardData from "./components/cardData";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColors: [
        "rgba(51, 0, 0, 0.25)",
        "rgba(51, 0, 25, 0.25)",
        "rgba(25, 51, 0, 0.25)",
        "rgba(0, 0, 51, 0.25)",
        "rgba(0, 0, 255, 0.25)",
      ],
      backgroundColorIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.changeBackgroundColor, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeBackgroundColor = () => {
    this.setState((prevState) => ({
      backgroundColorIndex:
        prevState.backgroundColorIndex ===
        this.state.backgroundColors.length - 1
          ? 0
          : prevState.backgroundColorIndex + 1,
    }));
  };

  render() {
    const { backgroundColors, backgroundColorIndex } = this.state;

    const bodyStyle = {
      margin: 0,
      minHeight: "100vh",
      backgroundColor: backgroundColors[backgroundColorIndex],
      display: "flex",
      flexDirection: "column",
    };

    return (
      <div style={bodyStyle}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/research-news" element={<ResearchNewsPage />} />
            <Route path="/questionnaire" element={<QuestionnairePage />} />{" "}
            {/* Add this route */}
          </Routes>
        </Router>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <h1 className="mt-5 mb-4 text-center">Open Roles</h1>
      <div className="container" style={{ flexGrow: 1 }}>
        <div className="row">
          {cardData.map((card) => (
            <WorkPostingCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
// asad
// test
