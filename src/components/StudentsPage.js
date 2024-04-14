// import React, { useState } from "react";
// import students from "./studentData";

// const StudentsPage = () => {
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const toggleModal = (student) => {
//     setSelectedStudent(student);
//   };

//   const closeModal = () => {
//     setSelectedStudent(null);
//   };

//   return (
//     <div>
//       <h1 className="mt-5 mb-4 text-center">Student Network</h1>
//       <div className="container" style={{ flexGrow: 1 }}>
//         <div className="row">
//           {students.map((student) => (
//             <div key={student.id} className="col-md-4">
//               <div
//                 className="card"
//                 style={{ width: "18rem", margin: "20px auto" }}
//               >
//                 <div style={{ maxHeight: "250px", overflow: "hidden" }}>
//                   <img
//                     src={student.image}
//                     className="card-img-top"
//                     alt={student.name}
//                     style={{ width: "100%", height: "auto" }}
//                   />
//                 </div>
//                 <div className="card-body" style={{ overflowY: "auto" }}>
//                   <h5 className="card-title">{student.name}</h5>
//                   <p className="card-text">
//                     <span style={{ fontWeight: "bold" }}>Field of Study:</span>{" "}
//                     {student.fieldOfStudy}
//                   </p>
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => toggleModal(student)}
//                   >
//                     Know More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedStudent && (
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
//                   onClick={closeModal}
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>Name:</span>{" "}
//                   {selectedStudent.name}
//                 </p>
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>Field of Study:</span>{" "}
//                   {selectedStudent.fieldOfStudy}
//                 </p>
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
//                   {selectedStudent.description}
//                 </p>
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>Skills:</span>{" "}
//                   {selectedStudent.skills.join(", ")}
//                 </p>
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>Interests:</span>{" "}
//                   {selectedStudent.interests.join(", ")}
//                 </p>
//                 {/* Add more details here */}
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={closeModal}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentsPage;

// import React, { useState } from "react";
// import students from "./studentData";

// const StudentsPage = () => {
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [reachOutModalOpen, setReachOutModalOpen] = useState(false);
//   const [message, setMessage] = useState("");

//   const toggleModal = (student) => {
//     setSelectedStudent(student);
//   };

//   const toggleReachOutModal = () => {
//     setReachOutModalOpen(!reachOutModalOpen);
//   };

//   const closeModal = () => {
//     setSelectedStudent(null);
//     setReachOutModalOpen(false);
//     setMessage("");
//   };

//   const sendMessage = () => {
//     // Logic to send message to the selected student's email
//     console.log("Message sent:", message);
//     closeModal();
//   };

//   return (
//     <div>
//       <h1 className="mt-5 mb-4 text-center">Student Network</h1>
//       <div className="container" style={{ flexGrow: 1 }}>
//         <div className="row">
//           {students.map((student) => (
//             <div key={student.id} className="col-md-4">
//               <div
//                 className="card"
//                 style={{ width: "18rem", margin: "20px auto" }}
//               >
//                 <div style={{ maxHeight: "250px", overflow: "hidden" }}>
//                   <img
//                     src={student.image}
//                     className="card-img-top"
//                     alt={student.name}
//                     style={{ width: "100%", height: "auto" }}
//                   />
//                 </div>
//                 <div className="card-body" style={{ overflowY: "auto" }}>
//                   <h5 className="card-title">{student.name}</h5>
//                   <p className="card-text">
//                     <span style={{ fontWeight: "bold" }}>Field of Study:</span>{" "}
//                     {student.fieldOfStudy}
//                   </p>
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => toggleModal(student)}
//                   >
//                     Know More
//                   </button>
//                   <button
//                     className="btn btn-success ms-2"
//                     onClick={() => {
//                       setSelectedStudent(student);
//                       toggleReachOutModal();
//                     }}
//                   >
//                     Reach Out
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal for "Know More" */}
//       {selectedStudent && (
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
//                   onClick={closeModal}
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>Name:</span>{" "}
//                   {selectedStudent.name}
//                 </p>
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>Field of Study:</span>{" "}
//                   {selectedStudent.fieldOfStudy}
//                 </p>
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
//                   {selectedStudent.description}
//                 </p>
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>Skills:</span>{" "}
//                   {selectedStudent.skills.join(", ")}
//                 </p>
//                 <p>
//                   <span style={{ fontWeight: "bold" }}>Interests:</span>{" "}
//                   {selectedStudent.interests.join(", ")}
//                 </p>
//                 {/* Add more details here */}
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={closeModal}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Modal for "Reach Out" */}
//       {reachOutModalOpen && (
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
//                 <h5 className="modal-title">Reach Out</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={toggleReachOutModal}
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <p>To: {selectedStudent ? selectedStudent.name : ""}</p>
//                 <textarea
//                   className="form-control"
//                   style={{ height: "300px" }}
//                   placeholder="Write your message..."
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 ></textarea>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-success"
//                   onClick={sendMessage}
//                 >
//                   Send
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentsPage;

import React, { useState } from "react";
import students from "./studentData";

const StudentsPage = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [reachOutModalOpen, setReachOutModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleModal = (student) => {
    setSelectedStudent(student);
  };

  const toggleReachOutModal = () => {
    setReachOutModalOpen(!reachOutModalOpen);
  };

  const closeModal = () => {
    setSelectedStudent(null);
    setReachOutModalOpen(false);
    setMessage("");
  };

  const sendMessage = () => {
    // Logic to send message to the selected student's email
    console.log("Message sent:", message);
    closeModal();
  };

  return (
    <div>
      <h1 className="mt-5 mb-4 text-center">Student Network</h1>
      <div className="container" style={{ flexGrow: 1 }}>
        <div className="row">
          {students.map((student) => (
            <div key={student.id} className="col-md-4">
              <div
                className="card"
                style={{ width: "18rem", margin: "20px auto" }}
              >
                <div style={{ maxHeight: "250px", overflow: "hidden" }}>
                  <img
                    src={student.image}
                    className="card-img-top"
                    alt={student.name}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="card-body" style={{ overflowY: "auto" }}>
                  <h5 className="card-title">{student.name}</h5>
                  <p className="card-text">
                    <span style={{ fontWeight: "bold" }}>Field of Study:</span>{" "}
                    {student.fieldOfStudy}
                  </p>
                  <p className="card-text">
                    <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                    {student.email}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => toggleModal(student)}
                  >
                    Know More
                  </button>
                  <button
                    className="btn btn-success ms-2"
                    onClick={() => {
                      setSelectedStudent(student);
                      toggleReachOutModal();
                    }}
                  >
                    Reach Out
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for "Know More" */}
      {selectedStudent && (
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
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <span style={{ fontWeight: "bold" }}>Name:</span>{" "}
                  {selectedStudent.name}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                  {selectedStudent.email}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Field of Study:</span>{" "}
                  {selectedStudent.fieldOfStudy}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
                  {selectedStudent.description}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Skills:</span>{" "}
                  {selectedStudent.skills.join(", ")}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Interests:</span>{" "}
                  {selectedStudent.interests.join(", ")}
                </p>
                {/* Add more details here */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for "Reach Out" */}
      {reachOutModalOpen && (
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
                <h5 className="modal-title">Reach Out</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleReachOutModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>To: {selectedStudent ? selectedStudent.name : ""}</p>
                <textarea
                  className="form-control"
                  style={{ height: "300px" }}
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={sendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsPage;
