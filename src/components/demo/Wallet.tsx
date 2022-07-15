import CoinList from "./CoinList";
import walletImg from "./wallet.svg";
import Collapse from "components/common/Collapse";

const Wallet = () => (
  <Collapse icon={walletImg} title="Wallet" balance={1285.47}>
    <CoinList />
  </Collapse>
);

export default Wallet;
