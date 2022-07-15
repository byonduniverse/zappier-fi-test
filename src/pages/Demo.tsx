import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NftList from "components/demo/NftList";
import Profile from "components/demo/Profile";
import TabControl from "components/demo/TabControl";
import nft from "./nft.jpg";

const nfts = Array(24).fill({ src: nft });

const Demo = () => (
  <Box sx={{ display: "flex", justifyContent: "center" }}>
    <Box
      sx={{
        maxWidth: "960px",
        minHeight: "100vh",
        border: "1px solid #2C3A43",
      }}
    >
      <Box>
        <Typography
          color="primary"
          sx={{ display: "flex", alignItems: "center", px: 2 }}
        >
          <ArrowBackIcon sx={{ p: 1, mr: 2 }} />
          0x05c2...0fa8
        </Typography>
      </Box>
      <NftList nfts={nfts} />
      <Profile />
      <TabControl />
    </Box>
  </Box>
);

export default Demo;
