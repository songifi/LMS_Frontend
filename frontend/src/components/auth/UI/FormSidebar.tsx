import React from "react";
import Image from "next/image";

const FormSidebar: React.FC = () => {
  return (
    <div className="hidden md:block md:w-1/2 bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <Image
          height={1024}
          width={602}
          src="/de99f699faf15d19b27de0829f6336e22f37578d.png"
          alt="Student using laptop"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default FormSidebar;
