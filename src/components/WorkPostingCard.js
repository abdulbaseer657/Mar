// import React, { useState } from "react";

// const WorkPostingCard = ({ card }) => {
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <div className="col-md-4">
//       <div className="card" style={{ width: "18rem", margin: "20px auto" }}>
//         <div style={{ maxHeight: "250px", overflow: "hidden" }}>
//           <img
//             src={card.image}
//             className="card-img-top"
//             alt={card.posting}
//             style={{ width: "100%", height: "auto" }}
//           />
//         </div>
//         <div className="card-body" style={{ overflowY: "auto" }}>
//           <h5 className="card-title">{card.posting}</h5>
//           <p className="card-text">
//             <span style={{ fontWeight: "bold" }}>Professor Name:</span>{" "}
//             {card.professorName}
//           </p>
//           <p className="card-text">
//             <span style={{ fontWeight: "bold" }}>Research Field:</span>{" "}
//             {card.researchField}
//           </p>
//           <button className="btn btn-primary" onClick={toggleModal}>
//             Know More
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div
//           className="modal"
//           tabIndex="-1"
//           style={{
//             display: "block",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             position: "fixed",
//             top: 0,
//             bottom: 0,
//             left: 0,
//             right: 0,
//             zIndex: 1050,
//           }}
//         >
//           <div
//             className="modal-dialog modal-dialog-centered"
//             style={{ maxWidth: "800px" }}
//           >
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Details</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={toggleModal}
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>Professor Name:</span>{" "}
//                   {card.professorName}
//                 </p>
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>Research Field:</span>{" "}
//                   {card.researchField}
//                 </p>
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
//                   {card.description}
//                 </p>
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>Start Date:</span>{" "}
//                   {card.startDate}
//                 </p>
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>
//                     Application Deadline:
//                   </span>{" "}
//                   {card.applicationDeadline}
//                 </p>
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>Preferred Skill:</span>{" "}
//                   {card.preferredSkill}
//                 </p>
//                 {/* Add more details here */}
//               </div>
//               <div className="modal-footer">
//                 {/* Change the button to Apply button and style it as green */}
//                 <button
//                   type="button"
//                   className="btn btn-success"
//                   onClick={toggleModal}
//                 >
//                   Apply
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WorkPostingCard;

import React, { useState } from "react";

const WorkPostingCard = ({ card }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleApply = () => {
    // Open a new window with the questionnaire page
    window.open("/questionnaire", "_blank");
  };

  return (
    <div className="col-md-4">
      <div className="card" style={{ width: "18rem", margin: "20px auto" }}>
        <div style={{ maxHeight: "250px", overflow: "hidden" }}>
          <img
            src={card.image}
            className="card-img-top"
            alt={card.posting}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="card-body" style={{ overflowY: "auto" }}>
          <h5 className="card-title">{card.posting}</h5>
          <p className="card-text">
            <span style={{ fontWeight: "bold" }}>Professor Name:</span>{" "}
            {card.professorName}
          </p>
          <p className="card-text">
            <span style={{ fontWeight: "bold" }}>Research Field:</span>{" "}
            {card.researchField}
          </p>
          <button className="btn btn-primary" onClick={toggleModal}>
            Know More
          </button>
          <button className="btn btn-success ms-2" onClick={handleApply}>
            Apply
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal"
          tabIndex="-1"
          style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1050,
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ maxWidth: "800px" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <span style={{ fontWeight: "bold" }}>Professor Name:</span>{" "}
                  {card.professorName}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Research Field:</span>{" "}
                  {card.researchField}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
                  {card.description}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Start Date:</span>{" "}
                  {card.startDate}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Application Deadline:
                  </span>{" "}
                  {card.applicationDeadline}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Preferred Skill:</span>{" "}
                  {card.preferredSkill}
                </p>
                {/* Add more details here */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkPostingCard;
