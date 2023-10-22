"use client";
import { useParams } from "next/navigation";
// import { AssetsDemoData } from "../../../components/asset/assetCard/assetDemoData";
import Image from "next/image";
import { Location } from "../../../components/assets/icons";
import { useEffect, useState } from "react";
import axios from 'axios';
import { DocumentCard } from "../../../components/asset/documentCard";

interface Asset{
  name: string;
  tokenAddress: string;
  tokenPrice: number;
  tokenTicker: string;
  description: string;
  media: {
    type: string;
    fileURI: string;
  }[];
  documents: {
    fileType: string;
    fileURI: string;
    fileSize: number;
    label: string;
  }[];
  type: string;
  location: string;
  size: number;
}

const AssetDetail = () => {
  const { id } = useParams();
  const [inputValue, setInputValue] = useState(0);
  const [product, setProduct] = useState(0);
  const [asset, setAsset] = useState<Asset>();
  const [isLoading, setIsLoading] = useState(true);

  const handleInputChange = (e: { target: { value: string } }) => {
    const value = parseInt(e.target.value, 10);
    // Ensure the value is never below zero
    setInputValue(Math.max(0, value));
  };

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`/api/property/singleProperty?id=${id}`)
          setAsset(response.data.data);
          setIsLoading(false);
          
        } catch (error) {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        }
      }
      fetchData()

      setProduct(inputValue * (asset?.tokenPrice || 0));

  }, [inputValue, asset?.tokenPrice]);

  if(isLoading){
    <div className="z-50 mb-8 px-20  flex items-center justify-center h-screen">
      <h1 className="text-[24px] text-white">Loading....</h1>
    </div>
  }

  if (!asset || !asset.name) {
    return <p>Asset not found</p>;
  }

  
  return (
    <>
    {
       <div className="relative py-12 flex items-center justify-center  text-white  gradient-bg ">
        <div className="inset-0 absolute -z-10 h-[100%] w-full  backdrop-blur-xl "></div>
        <div className="glass-card flex items-center   space-x-32   w-fit rounded-lg  p-12">
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
                src={asset.media[0].fileURI}
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
                className="border outline-none p-4 rounded-md text-black"
                type="number"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <p className="text-center">${product}</p>
            <button className="bg-t-purple py-3 px-5 rounded-lg w-full">
              Invest
            </button>
            <div className="flex flex-col space-y-3">
              <DocumentCard
                documentArray={asset.documents}
                label={asset.documents[0].label}
                fileSize={asset.documents[0].fileSize}
                URI={asset.documents[0].fileURI}
                propertyName={asset.name}
              />
              {/* <DocumentCard
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
              /> */}
            </div>
          </div>
        </div>
      </div>
      }
     
    </>
     
  );
};

export default AssetDetail;
