import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { AppBar, Box, Typography } from "@mui/material";
function App() {
  return (
    <>
      <AppBar color="inherit" sx={{ padding: "1rem" }} >
        <Typography>Hello!!</Typography>

        <Box
          component={"img"}
          src="https://randomwordgenerator.com/img/picture-generator/51e6dc41434faa0df7c5d57bc32f3e7b1d3ac3e455517349762f72d794_640.jpg"
          sx={{
            height: "80px",
            width: "80px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </AppBar>
    </>
  );
}

export default App;
