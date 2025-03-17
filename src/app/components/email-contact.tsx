import * as React from "react";

interface EmailContactProps {
  name: string;
  email: string;
  service: string;
  projectDetails: string;
}

export const EmailContact: React.FC<Readonly<EmailContactProps>> = ({
  name,
  email,
  service,
  projectDetails
}) => {
  return (
    <>
    <h3 style={{ color: '#e94a4a' }}>A User/Client Contacted!</h3>
    <h5>Client Name: {name}</h5>
    <h5>Client Email: {email}</h5>
    <h5>Project Details</h5>
    <p style={{ fontStyle: 'italic' }}>{projectDetails}</p>
    <h5>Service</h5>
    <p>{service}</p>
    </>
  );
};
