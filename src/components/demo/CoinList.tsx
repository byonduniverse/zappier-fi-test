import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import avalancheImg from "./avalanche.png";
import ethereumImg from "./ethereum.png";
import polygonImg from "./polygon.png";
import { formatNumber } from "helpers";

type Coin = {
  icon: string;
  name: string;
  price: number;
  balance: number;
  cap: number;
};

const coins: Coin[] = [
  {
    icon: avalancheImg,
    name: "AVAX",
    price: 19.89,
    balance: 1006.46,
    cap: 50.6,
  },
  {
    icon: ethereumImg,
    name: "CRA",
    price: 0.015,
    balance: 140.33,
    cap: 9142.51,
  },
  {
    icon: polygonImg,
    name: "TUS",
    price: 0.00025,
    balance: 60.05,
    cap: 235641.55,
  },
  {
    icon: avalancheImg,
    name: "ETH",
    price: 1223.42,
    balance: 45.84,
    cap: 0.037,
  },
  {
    icon: polygonImg,
    name: "NFTL",
    price: 0.0019,
    balance: 37.81,
    cap: 20000.0,
  },
];

const CoinItem = ({ icon, name, price, balance, cap }: Coin) => (
  <Box sx={{ display: "flex", justifyContent: "space-between", py: 0.5 }}>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ mr: 2 }}>
        <img src={icon} alt="icon" style={{ width: "32px", height: "32px" }} />
      </Box>
      <Typography variant="body1" color="primary">
        {name} <br />
        <Typography component="span" color="primary" sx={{ fontSize: "14px" }}>
          ${formatNumber(price)}
        </Typography>
      </Typography>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Typography variant="body1" color="primary" align="right">
        ${formatNumber(balance)} <br />
        <Typography component="span" color="primary" sx={{ fontSize: "14px" }}>
          ${formatNumber(cap)}
        </Typography>
      </Typography>
      <IconButton sx={{ width: "18px", height: "18px" }}>
        <ArrowForwardIosIcon
          sx={{ color: "white", width: "14px", height: "14px" }}
        />
      </IconButton>
    </Box>
  </Box>
);

const CoinList = () => (
  <Box sx={{ py: "12px" }}>
    {coins.map((coin) => (
      <CoinItem {...coin} />
    ))}
  </Box>
);

export default CoinList;
