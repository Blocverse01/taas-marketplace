import React, { ComponentProps, FC } from "react";
import { AssetCard } from "../assetCard";
import { GridListing } from "../../gridListing";

type AssetCardProps = ComponentProps<typeof AssetCard>;
interface AssetOverviewProps {
  assets: Array<AssetCardProps["asset"]>;
}

const AssetOverview: FC<AssetOverviewProps> = ({ assets }) => {
  return (
    <div className="z-40">
      <GridListing<(typeof assets)[number]>
        items={assets}
        renderItem={(item) => <AssetCard asset={item} />}
      />
    </div>
  );
};

export default AssetOverview;
