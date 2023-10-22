"use client"
import { ConnectButton,  } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import logo from "../components/assets/logo.svg";
import AssetOverview from "../components/asset/assetOverview/assetOverview";
// import { AssetsDemoData } from "../components/asset/assetCard/assetDemoData";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page = () => {

  const [isConnected, setIsConnected] = useState(false);
  const [assets, setAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/property')
        setIsLoading(false);
        setAssets(response.data.data); 
        console.log(response.data.data)
      } catch (error) {
        setIsLoading(false);
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
  }, []);

  return (
    <div className=" ">
      <div className="flex p-4 z-50 justify-between  ">
        <div className="flex z-20 space-x-2 items-center">
          <Image src={logo} alt="logo" />
          <h1 className="text-white"> TAAS Marketplace</h1>
        </div>
        {/* <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button" className="text-white bg-[#000000]"> 
                    Connect Wallet
                  </button>
                );
              }else{
                setIsConnected(true); 
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button" className="text-white">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button" className="text-white"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 16, height: 16 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button onClick={openAccountModal} type="button" className="text-white">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom> */}
        <ConnectButton />
      </div>

      {
        isLoading ? 
        <div className="z-50 mb-8 px-20 text-white flex items-center justify-center h-screen">
          <h1 className="text-[24px]">Loading....</h1>
        </div>
        :
        <div className="z-50 mb-8 mt-10 px-20">
          <AssetOverview assets={assets}/>
        </div>
      }

    </div>
  );
};

export default Page;
