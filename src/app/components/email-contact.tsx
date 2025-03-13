import * as React from "react";

interface EmailContactProps {
  email: string;
  message: string;
}

export const EmailContact: React.FC<Readonly<EmailContactProps>> = ({
  email,
  message,
}) => {
  return (
    <>
    <h3 style={{ color: '#e94a4a' }}>A User/Client Contacted!</h3>
    <h5>Client Email: {email}</h5>
    <h5>Message</h5>
    <p style={{ fontStyle: 'italic' }}>{message}</p>
    </>
  );
};
