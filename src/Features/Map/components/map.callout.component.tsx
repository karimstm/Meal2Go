import React from "react";
import { CompactRestaurantInfo } from "../../../components";

interface IMapCallout {
  restaurant: any;
}

export const MapCallout: React.FC<IMapCallout> = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};
