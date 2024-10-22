import { useState } from "react";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');
  
  // Esta función se usará para enviar los datos al servidor Node.js
  const sendEmail = async (formData) => {
    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.code === 200) {
        setStatus("success");
        setMessage("Message sent successfully!");
      } else {
        setStatus("error");
        setMessage("Something went wrong, please try again later.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong, please try again later.");
    }
  };

  return (
    <>
      <Newsletter
        status={status}
        message={message}
        onValidated={sendEmail}  // Aquí pasas la función de enviar el formulario al servidor
      />
    </>
  )
}
