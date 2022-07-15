import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SendIcon from "@mui/icons-material/Send";
import TuneIcon from "@mui/icons-material/Tune";
import avatar from "./avatar.png";

const Profile = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      px: 2,
      position: "relative",
    }}
  >
    <Avatar
      src={avatar}
      sx={{ position: "absolute", width: "96px", height: "96px", top: "-48px" }}
    />
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "8px",
        py: 2,
      }}
    >
      <Button
        variant="outlined"
        sx={{ display: "flex", alignItems: "center", px: 4, height: "32px" }}
      >
        Follow
        <PersonAddAltIcon sx={{ ml: 1 }} />
      </Button>
      <Button variant="outlined" sx={{ px: 1.5, height: "32px" }}>
        <StarBorderIcon />
      </Button>
      <Button
        variant="outlined"
        sx={{ display: "flex", alignItems: "center", px: 1.5, height: "32px" }}
      >
        Send
        <SendIcon sx={{ ml: 1 }} />
      </Button>
    </Box>
    <Grid container>
      <Grid item sm={6}>
        <Typography variant="h6" color="white">
          antolio.eth
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography color="primary">0x05c2...0fa8</Typography>
          <IconButton>
            <ContentCopyIcon sx={{ color: "primary.main" }} />
          </IconButton>
        </Box>
        <Typography variant="body1" color="primary" sx={{ marginTop: "12px" }}>
          Active Since September 2021
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="body1" color="white">
            0 Following
          </Typography>
          <Typography variant="body1" color="white">
            0 Followers
          </Typography>
          <Button
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "center",
              height: "32px",
              fontSize: "14px",
              px: 1,
            }}
          >
            <EmojiEventsIcon
              sx={{ mr: 1, color: "white", width: "14px", height: "14px" }}
            />
            Unranked
          </Button>
        </Box>
      </Grid>
      <Grid item sm={6}>
        <Paper sx={{ borderRadius: "16px", p: "12px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body2">Net Worth</Typography>
            <Button variant="outlined" sx={{ borderRadius: "8px", p: 0.5 }}>
              <TuneIcon sx={{ width: "18px", height: "18px" }} />
            </Button>
          </Box>
          <Typography variant="h5">$1,210.50</Typography>
          <progress style={{ width: "100%" }} value="95" max="100" />
          <Box sx={{ display: "flex" }}>
            <Typography
              align="center"
              sx={{
                fontSize: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "100%", md: "50%" },
              }}
            >
              <CircleIcon
                sx={{
                  width: "6px",
                  height: "6px",
                  mr: 0.5,
                  color: "secondary.main",
                }}
              />
              100% Wallet
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "100%", md: "50%" },
              }}
            >
              <CircleIcon sx={{ width: "6px", height: "6px", mr: 0.5 }} />
              &lt;1% Other
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

export default Profile;
