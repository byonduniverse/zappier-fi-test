import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import _ from "lodash";
import { NFT } from "types";

type Props = {
  nfts: NFT[];
};

const NftList = ({ nfts }: Props) => {
  const n = nfts.length;

  return (
    <Stack direction="row">
      {_.range(0, n, 2).map((index) => (
        <Box>
          <img
            src={nfts[index].src}
            alt="nft"
            style={{ display: "block", width: "62px", height: "62px" }}
          />
          {nfts[index + 1] && (
            <img
              src={nfts[index].src}
              alt="nft"
              style={{ display: "block", width: "62px", height: "62px" }}
            />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default NftList;
