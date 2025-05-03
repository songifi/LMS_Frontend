import LoginStep from "@/components/auth/AuthForm/Login";
import FormSidebar from "@/components/auth/UI/FormSidebar";
import React from "react";

function App() {
  return (
    <div className="flex h-screen w-full flex-col md:flex-row items-center">
      <FormSidebar />

      <LoginStep />
    </div>
  );
}

export default App;
