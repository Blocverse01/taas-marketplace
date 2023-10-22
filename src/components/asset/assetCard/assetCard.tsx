"use client";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { Location } from "../../assets/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast';
import { useAccount } from "wagmi";

interface AssetDocument {
  id: string;
  label: string;
  fileURI: string;
  fileSize: number;
}

interface Asset {
  id: string;
  assetType: string;
  name: string;
  location: string;
  description: string;
  size: number;
  tokenPrice: number;
  media: any;
  documents: AssetDocument[];
}

interface AssetCardProps {
  asset: Asset;
}
const AssetCard: FC<AssetCardProps> = ({ asset }) => {
  const { name, tokenPrice, location, media, assetType, size } = asset;
  const notify = (id:any) => toast.error('Connect your wallet',{ id : id });
  const {isConnected: connected } =   useAccount()

  return (
    <>
       <Toaster />
       <div className="flex flex-col  text-white px-6 py-6 hover:scale-105 duration-200   space-y-3 glass-card rounded-xl">
        <div className="relative w-full h-[280px] rounded-[4.404px]">
          <p className="absolute capitalize z-30 top-2 right-2 text-[12px] py-2 px-4 bg-t-purple text-white rounded-full ">
            {assetType}
          </p>
          <Image src={media[0].fileURI} alt="Asset Image" fill className="w-full " />
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-[18px] font-medium"> {name}</p>
            <p className="text-[12px] flex items-center space-x-1">
              <Location /> {location}
            </p>
          </div>
          { connected ? 
          (
            <Link
              className="bg-t-purple py-3 px-5 rounded-lg"
              href={`/assetDetails/${asset.id}`}
            >
              Purchase
            </Link>
          ) : 
          (
            <>
              <Link
              href={'#'}
                className="bg-t-purple py-3 px-5 rounded-lg"
                onClick={() => notify(`${asset.id}`)}>
                Purchase 
              </Link>
            </> 
          )
          }
            
        </div>
        <div className="flex text-sm  justify-between">
          <p>Price per token</p>
          <p className="">${tokenPrice}</p>
        </div>
        <div className="flex text-sm  justify-between">
          <p>Property Size</p>
          <p className="">{size} m2</p>
        </div>
      </div>
    </>
     
  );
};

export { AssetCard };
