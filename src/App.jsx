import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Outlet />{" "}
      {/* this is where child routes like homepage.jsx will render */}
    </div>
  );
}

export default App;
