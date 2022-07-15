import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import WindowIcon from "@mui/icons-material/Window";
import allNetworkImg from "./all_network.svg";
import avalancheImg from "./avalanche.png";
import ethereumImg from "./ethereum.png";
import polygonImg from "./polygon.png";
import NftCardList from "./NftCardList";
import Wallet from "./Wallet";
import { formatNumber } from "helpers";

type NetworkMenuItemProps = {
  icon: string;
  label: string;
  balance: number;
  onClick: (label: string) => void;
};

const NetworkMenuItem = ({
  icon,
  label,
  balance,
  onClick,
}: NetworkMenuItemProps) => (
  <MenuItem onClick={() => onClick(label)}>
    <Box sx={{ width: "100%", display: "flex", alignItems: "center", gap: 2 }}>
      <Avatar src={icon} alt="icon" sx={{ width: "24px", height: "24px" }} />
      <Typography variant="body1" color="primary" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
      <Typography variant="body1" color="primary">
        ${formatNumber(balance, ",")}
      </Typography>
    </Box>
  </MenuItem>
);

const networkItems = [
  {
    icon: allNetworkImg,
    label: "All Networks",
    balance: 1295.26,
  },
  {
    icon: avalancheImg,
    label: "Avalanche",
    balance: 1211.75,
  },
  {
    icon: ethereumImg,
    label: "Ethereum",
    balance: 83.42,
  },
  {
    icon: polygonImg,
    label: "Polygon",
    balance: 0.099,
  },
];

const Portfolio = () => {
  const [networkMenu, setNetworkMenu] = useState<HTMLElement | null>(null);
  const [network, setNetwork] = useState("All Networks");

  const handleOpenNetworkMenu = (e: React.MouseEvent<HTMLElement>) => {
    setNetworkMenu(e.currentTarget);
  };

  const handleCloseNetworkMenu = () => {
    setNetworkMenu(null);
  };

  const handleChangeNetwork = (label: string) => {
    setNetwork(label);
    handleCloseNetworkMenu();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 2, gap: 2 }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            borderRadius: "16px",
            px: 1.5,
          }}
          onClick={handleOpenNetworkMenu}
        >
          {network}
          <KeyboardArrowDownIcon sx={{ ml: 0.5 }} />
        </Button>
        <Menu
          anchorEl={networkMenu}
          open={Boolean(networkMenu)}
          onClose={handleCloseNetworkMenu}
        >
          {networkItems.map((item) => (
            <NetworkMenuItem
              key={item.label}
              {...item}
              onClick={handleChangeNetwork}
            />
          ))}
        </Menu>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "28px",
              border: "1px solid #2c3a43",
              borderRadius: "16px",
              px: 1,
              py: 0.5,
            }}
          >
            <Box
              sx={{
                px: 1,
                py: 0.5,
                borderRadius: "16px",
                backgroundColor: "primary.light",
              }}
            >
              <ViewAgendaIcon sx={{ color: "white" }} fontSize="small" />
            </Box>
            <Box sx={{ px: 1, py: 0.5 }}>
              <WindowIcon sx={{ color: "white" }} fontSize="small" />
            </Box>
          </Box>
          <Button
            variant="outlined"
            sx={{ fontSize: "14px", borderRadius: "16px" }}
          >
            &ge; $0.010
          </Button>
        </Box>
      </Box>
      <Wallet />
      <NftCardList />
    </Box>
  );
};

export default Portfolio;
