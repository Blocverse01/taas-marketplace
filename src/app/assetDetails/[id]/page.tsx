"use client";
import { useParams } from "next/navigation";
import { AssetsDemoData } from "../../../components/asset/assetCard/assetDemoData";
import Image from "next/image";
import { Location } from "../../../components/assets/icons";
import { useEffect, useState } from "react";
import { DocumentCard } from "../../../components/asset/documentCard";

const AssetDetail = () => {
  const { id } = useParams();
  const asset = AssetsDemoData.find((item) => item.id === id);
  const [inputValue, setInputValue] = useState(0);
  const [product, setProduct] = useState(0);

  const handleInputChange = (e: { target: { value: string } }) => {
    const value = parseInt(e.target.value, 10);
    // Ensure the value is never below zero
    setInputValue(Math.max(0, value));
  };

  useEffect(() => {
    setProduct(inputValue * (asset?.tokenPrice || 0));
  }, [inputValue, asset?.tokenPrice]);

  if (!asset) {
    return <p>Asset not found</p>;
  }

  return (
    <div className="relative flex items-center justify-center py-12 text-white gradient-bg ">
      <div className="inset-0 absolute -z-10 h-[100%] w-full  backdrop-blur-xl "></div>
      <div className="flex items-center p-12 space-x-32 rounded-lg glass-card w-fit">
        <div className="w-[630px] flex flex-col space-y-4">
          <p className="text-[32px] font-medium"> {asset.name}</p>
          <p className="flex items-center space-x-2">
            <Location /> {asset.location}
          </p>
          <p>
            Size: {asset.size} m<sup>2</sup>
          </p>
          <div className="relative ">
            <Image
              src={asset.displayImage}
              width={630}
              height={484}
              alt="Asset Image"
              className="rounded"
            />
          </div>
          <p>Description:</p>
          <p className="text-[18px] text-white/80 "> {asset.description}</p>
        </div>

        <div className="glass-card flex flex-col space-y-6  w-[397px] p-6 rounded-lg h-fit ">
          <div className="flex justify-between">
            <p>Price per token</p>
            <p>${asset.tokenPrice}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">No of tokens</label>
            <input
              className="p-4 text-black border rounded-md outline-none"
              type="number"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <p className="text-center">${product}</p>
          <button className="w-full px-5 py-3 rounded-lg btn">Invest</button>
          <div className="flex flex-col space-y-3">
            <DocumentCard
              label={asset.documents[0].label}
              fileSize={asset.documents[0].fileSize}
              URI={asset.documents[0].fileURI}
              propertyName={asset.name}
            />
            <DocumentCard
              label={asset.documents[1].label}
              fileSize={asset.documents[1].fileSize}
              URI={asset.documents[1].fileURI}
              propertyName={asset.name}
            />
            <DocumentCard
              label={asset.documents[2].label}
              fileSize={asset.documents[2].fileSize}
              URI={asset.documents[2].fileURI}
              propertyName={asset.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDetail;
