import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RemoveIcon from "@mui/icons-material/Remove";
import { formatNumber } from "helpers";

type Props = {
  icon: string;
  title: string;
  balance: number;
  children?: React.ReactNode;
};

const Collapse = ({ icon, title, balance, children }: Props) => (
  <Box
    sx={{
      border: "1px solid #2c3a43",
      borderRadius: "16px",
      px: "12px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        py: "12px",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: "36px",
            height: "36px",
            backgroundColor: "primary.light",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: 1,
          }}
        >
          <img
            src={icon}
            alt="icon"
            style={{ width: "24px", height: "24px" }}
          />
        </Box>
        <Typography variant="h6" color="primary">
          {title}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="h6" color="white">
          {formatNumber(balance)}
        </Typography>
        <Box
          sx={{
            border: "2px solid white",
            width: "14px",
            height: "14px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RemoveIcon sx={{ color: "white", width: "14px", height: "14px" }} />
        </Box>
      </Box>
    </Box>
    {children}
  </Box>
);

export default Collapse;
