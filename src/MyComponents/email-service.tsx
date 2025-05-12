import * as React from "react";

interface EmailServiceProps {
  name: string;
  email: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

export const EmailService: React.FC<Readonly<EmailServiceProps>> = ({
  name,
  email,
  service,
  budget,
  timeline,
  message,
}) => {
  return (
    <>
      <h2 style={{ color: 'blue' }}>Service is Needed!</h2>
      <h3 style={{ color: 'red' }}>Client Details:</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Service: {service}</p>
      <p>Budget: {budget}</p>
      <p>Timeline: {timeline}</p>
      <p>Messsage: {message}</p>
    </>
  );
};
