import LoginForm from "@/components/react-hook-form/loginForm";
import React from "react";

export default function Index() {
  return (
    <div>
      <h2>React Hook Form</h2>
      <div>
        <h3>Install</h3>
        <p>npm install react-hook-form</p>
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}
