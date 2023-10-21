import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import logo from "../components/assets/logo.svg";
import AssetOverview from "../components/asset/assetOverview/assetOverview";
import { AssetsDemoData } from "../components/asset/assetCard/assetDemoData";

const Page = () => {
  return (
    <div className=" ">
      <div className="flex p-4 z-50 justify-between  ">
        <div className="flex z-20 space-x-2 items-center">
          <Image src={logo} alt="logo" />
          <h1 className="text-white"> TAAS Marketplace</h1>
        </div>
        <ConnectButton />
      </div>

      <div className="z-50 mb-8 mt-10 px-20">
        <AssetOverview assets={AssetsDemoData} />
      </div>
    </div>
  );
};

export default Page;
