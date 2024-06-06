import { useState } from "react";

import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome to my Blog</h1>

      <Welcome />
    </>
  );
}

export default App;
