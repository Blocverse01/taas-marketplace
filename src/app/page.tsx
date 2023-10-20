import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Assetcard } from "../components/assetCard";

function Page() {
  return (
    <div>
      <div className="flex m-4 justify-end">
        <ConnectButton />
      </div>

      <h1>TAAS Marketplace</h1>
      <div>
        <Assetcard />
      </div>
    </div>
  );
}

export default Page;
