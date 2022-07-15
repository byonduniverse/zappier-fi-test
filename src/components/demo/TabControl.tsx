import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Portfolio from "./Portfolio";

const TabControl = () => {
  const [value, setValue] = useState(0);

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", px: 2 }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Portfolio" />
          <Tab label="NFTs" />
          <Tab label="History" />
        </Tabs>
      </Box>
      <Box sx={{ visibility: value === 0 ? "visible" : "hidden" }}>
        <Portfolio />
      </Box>
      <Box sx={{ visibility: value === 1 ? "visible" : "hidden" }}></Box>
      <Box sx={{ visibility: value === 2 ? "visible" : "hidden" }}></Box>
    </>
  );
};

export default TabControl;
