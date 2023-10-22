"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Location } from "../../../components/assets/icons";
import { useEffect, useState } from "react";
import axios from 'axios';
import { DocumentCard } from "../../../components/asset/documentCard";
import { Formik } from 'formik';
import * as Yup from 'yup';
import {abi}  from "../../../abi/token"
import { sendTransaction, prepareSendTransaction } from '@wagmi/core'
import { parseEther } from 'viem'
import { getAccount } from '@wagmi/core'
import toast, { Toaster } from 'react-hot-toast';
import { usePrepareContractWrite, usePrepareSendTransaction } from "wagmi";
 
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
  const [isLoadingC, setIsLoadingC] = useState(true);

  const account = getAccount()

  console.log(account);

  const handleInputChange = (e: { target: { value: string } }) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value)) {
      setInputValue(0);
    } else {
      setInputValue(Math.max(0, value));
    }
  };

  const validationSchema = Yup.object().shape({
    amount : Yup.number()
      .required('Number of token is required')
      .min(1, 'Number of token must be greater than or equal to 1')
  });

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`/api/property/singleProperty?id=${id}`)
          setIsLoadingC(false);
          console.log(response.data.data);
          setAsset(response.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
          setIsLoadingC(false);
        }
      }
      fetchData()

      setProduct(inputValue * (asset?.tokenPrice || 0));

  }, [inputValue, asset?.tokenPrice]);


  const handleTransaction = async (amount:any) => {
    try {
      // Send the transaction
      const tokenAddress = asset?.tokenAddress;
      const amountStr = amount.toString();
      const { hash } = await sendTransaction({
        account: account.address,
        to: tokenAddress!.toString(),
        value: parseEther(amountStr),
      });
      toast.success('Transaction Successful');
    } catch (error) {
      toast.error('Failed to send Transaction');
      console.error('Error sending transaction:', error);
    }
  };

  if(isLoadingC){
    return <div className="z-50 mb-8 px-20  flex items-center justify-center h-screen">
      <h1 className="text-[24px] text-white">Loading....</h1>
    </div>
  }

  if (!asset || !asset.name) {
    return <div className="z-50 mb-8 px-20  flex items-center justify-center h-screen">
    <h1 className="text-[24px] text-white">Asset Not Found</h1>
  </div>;
  }

  
  return (
    <>
     <Toaster />
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
                height={380}
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
            <Formik
              initialValues={{ amount : 0 }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                handleTransaction(values.amount);
              }}
            >{({ 
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
              isValid }) => (
              <form onSubmit={handleSubmit} >
                <div className="flex flex-col space-y-4">
                  <label htmlFor="">No of tokens</label>
                  <input
                    className="border outline-none p-4 rounded-md text-black"
                    type="number"
                    name="amount"
                    value={values.amount}
                    onChange={(e) => {
                      handleChange(e)
                      handleInputChange(e)
                    }}
                  />
                 <p className="text-red-600"> {errors.amount && touched.amount && errors.amount? errors.amount : null}</p>
                </div>
                <p className="text-center pt-3 pb-3">${product}</p>
                  <button  type="submit" className="bg-t-purple py-3 px-5 rounded-lg w-full" >
                    Invest
                  </button>
                </form>
              )}
            </Formik>
            <div className="flex flex-col space-y-3">
              <DocumentCard
                documentArray={asset.documents}
                label={asset.documents[0].label}
                fileSize={asset.documents[0].fileSize}
                URI={asset.documents[0].fileURI}
                propertyName={asset.name}
              />
            </div>
          </div>
        </div>
      </div>
      }
     
    </>
     
  );
};

export default AssetDetail;
