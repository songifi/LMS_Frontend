import PasswordRecoveryStep from "@/components/auth/AuthForm/PasswordRecovery";
import FormSidebar from "@/components/auth/UI/FormSidebar";
import React from "react";

function App() {
  return (
    <div className="flex h-screen w-full flex-col md:flex-row items-center">
      <FormSidebar />
      <PasswordRecoveryStep />
    </div>
  );
}

export default App;
