// // components/Contact.js
// import React from 'react';
// import '../styles/contact.css';

// const Contact = () => {
//   return (
//     <section id="contact">
//       <div className="wrapper">
//         <div className="contact-form">
//           <div className="top">
//             <h1 className="title">
//               <span className="gradient-text">Join forces with us!</span>
//             </h1>
//             <p className="muted">
//               We build with precision and passion,
//               creating structures that stand the test of time. It's as straightforward as that!
//             </p>
//           </div>

//           <div className="middle">
//             <div className="flex row">
//               <input
//                 type="text"
//                 placeholder="First name"
//                 name="firstname"
//                 className="control"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Last name"
//                 name="lastname"
//                 className="control"
//                 required
//               />
//             </div>
//             <div className="flex row">
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 name="email"
//                 className="control"
//                 required
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone number"
//                 name="phone"
//                 className="control"
//               />
//             </div>
//             <textarea
//               name="message"
//               cols={30}
//               rows={10}
//               placeholder="Message"
//               className="control"
//             ></textarea>
//           </div>

//           <div className="bottom">
//             <button className="btn primary">Send Now</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// components/Contact.js
import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="form-container">
        <div className="contact-form">
          <div className="contact-form-header">
            <h1 className="form-title">
              <span className="highlight-text">Join forces with us!</span>
            </h1>
            <p className="form-description">
              We build with precision and passion,
              creating structures that stand the test of time. It's as straightforward as that!
            </p>
          </div>

          <div className="form-body">
            <div className="form-row">
              <input
                type="text"
                placeholder="First name"
                name="firstname"
                className="input-field"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                name="lastname"
                className="input-field"
                required
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                className="input-field"
                required
              />
              <input
                type="tel"
                placeholder="Phone number"
                name="phone"
                className="input-field"
              />
            </div>
            <textarea
              name="message"
              cols={30}
              rows={1}
              placeholder="Message"
              className="input-field"
            ></textarea>
          </div>

          <div className="form-footer">
            <button className="submit-button">Send Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;