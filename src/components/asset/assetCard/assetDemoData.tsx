export interface AssetDocument {
  id: string;
  label: string;
  fileURI: string;
  fileSize: number;
}

export interface Asset {
  id: string;
  assetType: string;
  name: string;
  location: string;
  description: string;
  size: number;
  tokenPrice: number;
  displayImage: string;
  documents: AssetDocument[];
}

export const AssetsDemoData: Asset[] = [
  {
    id: "asset-1",
    assetType: "real estate",
    name: "Eko Hotel",
    location: "Hyacinth Close, Ilford, Redbridge",
    description:
      "The property is a 2-bedroom leasehold flat located in the district of Ilford within the London Borough of Redbridge. The property is in a nice neighbourhood with indoor and real-estate security",
    size: 2000,
    tokenPrice: 100,
    displayImage:
      "https://ipfs.moralis.io:2053/ipfs/QmeMtpZPDQk9CJV2V7hnCMbG6DYuKkJjxRiH6Kmwja4tkE/demo-real-estate-asset-image.jpeg",
    documents: [
      {
        label: "Land Document",
        fileURI:
          "https://ipfs.moralis.io:2053/ipfs/QmeMtpZPDQk9CJV2V7hnCMbG6DYuKkJjxRiH6Kmwja4tkE/demo-real-estate-asset-image.jpeg",
        id: "document-1",
        fileSize: 200000,
      },
      {
        label: "Registry Agreeement",
        fileURI:
          "https://ipfs.moralis.io:2053/ipfs/QmeMtpZPDQk9CJV2V7hnCMbG6DYuKkJjxRiH6Kmwja4tkE/demo-real-estate-asset-image.jpeg",
        id: "document-2",
        fileSize: 300000,
      },
      {
        label: "Sample Document",
        fileURI:
          "https://ipfs.moralis.io:2053/ipfs/QmeMtpZPDQk9CJV2V7hnCMbG6DYuKkJjxRiH6Kmwja4tkE/demo-real-estate-asset-image.jpeg",
        id: "document-3",
        fileSize: 210000,
      },
    ],
  },
  {
    id: "asset-2",
    assetType: "real estate",
    name: "Berberis Court",
    location: "Hyacinth Close, Ilford, Redbridge",

    description:
      "The property is a 2-bedroom leasehold flat located in the district of Ilford within the London Borough of Redbridge. The property is in a nice neighbourhood with indoor and real-estate security",
    size: 2000,
    tokenPrice: 100,

    displayImage:
      "https://ipfs.moralis.io:2053/ipfs/QmeMtpZPDQk9CJV2V7hnCMbG6DYuKkJjxRiH6Kmwja4tkE/demo-real-estate-asset-image.jpeg",
    documents: [
      {
        label: "Land Document",
        fileURI:
          "https://ipfs.moralis.io:2053/ipfs/QmeMtpZPDQk9CJV2V7hnCMbG6DYuKkJjxRiH6Kmwja4tkE/demo-real-estate-asset-image.jpeg",
        id: "document-1",
        fileSize: 200000,
      },
      {
        label: "Registry Agreeement",
        fileURI:
          "https://ipfs.moralis.io:2053/ipfs/QmeMtpZPDQk9CJV2V7hnCMbG6DYuKkJjxRiH6Kmwja4tkE/demo-real-estate-asset-image.jpeg",
        id: "document-2",
        fileSize: 300000,
      },
      {
        label: "Sample Document",
        fileURI:
          "https://ipfs.moralis.io:2053/ipfs/QmeMtpZPDQk9CJV2V7hnCMbG6DYuKkJjxRiH6Kmwja4tkE/demo-real-estate-asset-image.jpeg",
        id: "document-3",
        fileSize: 210000,
      },
    ],
  },
  {
    id: "asset-3",
    assetType: "real estate",
    name: "Berberis Court",
    location: "Hyacinth Close, Ilford, Redbridge",

    description:
      "The property is a 2-bedroom leasehold flat located in the district of Ilford within the London Borough of Redbridge. The property is in a nice neighbourhood with indoor and real-estate security",
    size: 2000,
    tokenPrice: 100,

    displayImage:
      "https://ipfs.moralis.io:2053/ipfs/QmeMtpZPDQk9CJV2V7hnCMbG6DYuKkJjxRiH6Kmwja4tkE/demo-real-estate-asset-image.jpeg",
    documents: [
      {
        label: "Land Document",
        fileURI:
          "https://ipfs.moralis.io:2053/ipfs/QmeMtpZPDQk9CJV2V7hnCMbG6DYuKkJjxRiH6Kmwja4tkE/demo-real-estate-asset-image.jpeg",
        id: "document-1",
        fileSize: 200000,
      },
      {
        label: "Registry Agreeement",
        fileURI:
          "https://ipfs.moralis.io:2053/ipfs/QmeMtpZPDQk9CJV2V7hnCMbG6DYuKkJjxRiH6Kmwja4tkE/demo-real-estate-asset-image.jpeg",
        id: "document-2",
        fileSize: 300000,
      },
      {
        label: "Sample Document",
        fileURI:
          "https://ipfs.moralis.io:2053/ipfs/QmeMtpZPDQk9CJV2V7hnCMbG6DYuKkJjxRiH6Kmwja4tkE/demo-real-estate-asset-image.jpeg",
        id: "document-3",
        fileSize: 210000,
      },
    ],
  },
  {
    id: "asset-4",
    assetType: "real estate",
    name: "Berberis Court",
    location: "Hyacinth Close, Ilford, Redbridge",

    description:
      "The property is a 2-bedroom leasehold flat located in the district of Ilford within the London Borough of Redbridge. The property is in a nice neighbourhood with indoor and real-estate security",
    size: 2000,
    tokenPrice: 100,
    displayImage:
      "https://ipfs.moralis.io:2053/ipfs/QmeMtpZPDQk9CJV2V7hnCMbG6DYuKkJjxRiH6Kmwja4tkE/demo-real-estate-asset-image.jpeg",
    documents: [
      {
        label: "Land Document",
        fileURI:
          "https://ipfs.moralis.io:2053/ipfs/QmeMtpZPDQk9CJV2V7hnCMbG6DYuKkJjxRiH6Kmwja4tkE/demo-real-estate-asset-image.jpeg",
        id: "document-1",
        fileSize: 200000,
      },
      {
        label: "Registry Agreeement",
        fileURI:
          "https://ipfs.moralis.io:2053/ipfs/QmeMtpZPDQk9CJV2V7hnCMbG6DYuKkJjxRiH6Kmwja4tkE/demo-real-estate-asset-image.jpeg",
        id: "document-2",
        fileSize: 300000,
      },
      {
        label: "Sample Document",
        fileURI:
          "https://ipfs.moralis.io:2053/ipfs/QmeMtpZPDQk9CJV2V7hnCMbG6DYuKkJjxRiH6Kmwja4tkE/demo-real-estate-asset-image.jpeg",
        id: "document-3",
        fileSize: 210000,
      },
    ],
  },
];
