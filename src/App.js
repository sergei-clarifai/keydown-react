import React, { useEffect } from "react";
import "./styles.css";

export default function App() {
  useEffect(() => {
    const clbck = function (e) {
      console.log("CLICK:", e.keyCode);
    };
    document.addEventListener("keydown", clbck);
    return () => document.removeEventListener("keydown", clbck);
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
