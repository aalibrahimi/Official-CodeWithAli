// FlashMessage.tsx
"use client"
import { useState, useEffect } from 'react';

interface FlashMessage {
  category: 'success' | 'error' | 'info';
  message: string;
}

export const FlashMessages = () => {
  const [messages, setMessages] = useState<FlashMessage[]>([]);

  //  we would likely get these messages from your state management solution
  // or from an API response. This is me testing
  useEffect(() => {
    // Example of setting a flash message
    // its just set to show, doesn't haave logic to when to show
    setMessages([
      { category: 'success', message: 'Website is up and running!' }
    ]);
  }, []);

  return (
    <div>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`alert alert-${msg.category} mb-4 p-2 rounded-lg ${
            msg.category === 'success' ? 'bg-red-100 text-green-700' :
            msg.category === 'error' ? 'bg-black-100 text-red-700' :
            'bg-blue-100 text-blue-700'
          }`}
        >
          {msg.message}
        </div>
      ))}
    </div>
  );
};

