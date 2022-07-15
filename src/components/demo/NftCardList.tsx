import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SortIcon from "@mui/icons-material/Sort";
import Collapse from "components/common/Collapse";
import nftsImg from "./nfts.svg";
import nftImg from "./nft.jpg";
import { formatNumber } from "helpers";

const nfts = [
  {
    src: nftImg,
    title: "TIMEPieces Build a Bett...",
    floorPrice: 0.185,
    estValue: 5.5,
  },
  {
    src: nftImg,
    title: "adidas Originals Into th...",
    floorPrice: 1.11,
    estValue: 4.1,
  },
  {
    src: nftImg,
    title: "merge.",
    floorPrice: 0.1249,
    estValue: 3.4,
  },
];

const NftCard = ({
  src,
  title,
  floorPrice,
  estValue,
}: {
  src: string;
  title: string;
  floorPrice: number;
  estValue: number;
}) => (
  <Card sx={{ borderRadius: "16px", height: "100%" }}>
    <CardMedia component="img" height="100" image={src} alt="nft" />
    <CardContent sx={{ padding: "12px" }}>
      <Typography variant="body1" color="white">
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "12px",
        }}
      >
        <Box>
          <Typography color="primary">Floor Price</Typography>
          <Typography
            color="white"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <SortIcon />
            {formatNumber(floorPrice)}
          </Typography>
        </Box>
        <Box>
          <Typography color="primary">Est.Value</Typography>
          <Typography
            color="white"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <SortIcon />${formatNumber(estValue)}K
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const NftCardList = () => (
  <Collapse icon={nftsImg} title="NFTs" balance={18415.08}>
    <Grid container sx={{ py: "12px", mx: "-12px", width: "auto" }}>
      {nfts.map((nft) => (
        <Grid item lg={4} md={3} sm={6} xs={12} sx={{ px: "12px" }}>
          <NftCard {...nft} />
        </Grid>
      ))}
    </Grid>
  </Collapse>
);

export default NftCardList;
