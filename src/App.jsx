import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
function App() {
  const accent = red[500];
  return (
    <>
      <Button variant="text" color="accent">
        Click me
      </Button>
    </>
  );
}

export default App;
