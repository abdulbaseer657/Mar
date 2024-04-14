// // import React, { Component } from "react";
// // import { Link } from "react-router-dom";

// // export class Navbar extends Component {
// //   render() {
// //     return (
// //       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
// //         <div className="container">
// //           <Link className="navbar-brand" to="/">
// //             JobPortal
// //           </Link>
// //           <button
// //             className="navbar-toggler"
// //             type="button"
// //             data-bs-toggle="collapse"
// //             data-bs-target="#navbarSupportedContent"
// //             aria-controls="navbarSupportedContent"
// //             aria-expanded="false"
// //             aria-label="Toggle navigation"
// //           >
// //             <span className="navbar-toggler-icon"></span>
// //           </button>
// //           <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //               <li className="nav-item">
// //                 <Link className="nav-link" to="/">
// //                   Home
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link className="nav-link" to="/students">
// //                   Students
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link className="nav-link" to="/research-news">
// //                   Research News
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </nav>
// //     );
// //   }
// // }

// // export default Navbar;

// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// export class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             ProjectHub
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/students">
//                   Students
//                 </Link>
//               </li>
//               {/* Add the Research News route */}
//               <li className="nav-item">
//                 <Link className="nav-link" to="/research-news">
//                   Research News
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Navbar;

import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            ProjectHub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/students">
                  Students
                </Link>
              </li>
              {/* Add the Research News route */}
              <li className="nav-item">
                <Link className="nav-link" to="/research-news">
                  Research News
                </Link>
              </li>
            </ul>
            {/* Search form */}
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
