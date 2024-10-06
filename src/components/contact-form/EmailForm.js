import React, { useRef, useState } from "react";
import "./EmailForm.css";

const EmailForm = () => {
  const form = useRef();

  const [formcontent, setFormcontent] = useState("");
  const [formname, setFormname] = useState("");
  const [formemail, setFormemail] = useState("");

  return <div className="emailForm">ABC</div>;
};

export default EmailForm;
