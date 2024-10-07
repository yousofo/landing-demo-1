import React from "react";

const ScreenWrapper = ({ className = "", children }) => {
  return (
    <div className={`w-full max-w-screen-2xl mx-auto p-4 ${className} `}>
      {children}
    </div>
  );
};

export default ScreenWrapper;
