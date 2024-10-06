import React, { useRef, useState } from "react";
import "./Email.css";
import emailjs from "@emailjs/browser";

const Email = (props) => {
  const form = useRef();

  const [formcontent, setFormcontent] = useState("");
  const [formname, setFormname] = useState("");
  const [formemail, setFormemail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hm7tmua", "template_n4pli9v", form.current, {
        publicKey: "yJC8j_WODIfX6drXQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    alert("Form successfully submitted. Thank you for your message.");
    setFormcontent("");
    setFormname("");
    setFormemail("");
  };

  const CloseEmailForm = () => {
    props.setShowPopup(!props.showPopup);
  }

  return (
    <div className="email">
      <div className="email--form_container">
        <form className="email--form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name..."
            className="email--name_input"
            name="from_name"
            value={formname}
            onChange={(e) => setFormname(e.target.value)}
          />
          <input
            type="text"
            placeholder="email..."
            className="email--name_email"
            name="from_email"
            value={formemail}
            onChange={(e) => setFormemail(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Please type what you want to say..."
            className="email--content_input"
            name="message"
            value={formcontent}
            onChange={(e) => setFormcontent(e.target.value)}
          ></textarea>
        </form>
        <div className="email--buttons">
          <button className="email--submit_button" onClick={sendEmail}>Submit</button>
          <button className="email--close_button" onClick={CloseEmailForm}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Email;
