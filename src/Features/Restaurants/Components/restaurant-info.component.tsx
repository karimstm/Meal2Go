import React, { FC } from "react";
import { Title, Card, Cover } from "./style";

type Props = {
  restaurant?: {
    name: string;
    icon: string;
    photos: string[];
    address: string;
    isOpenNow: boolean;
    rating: number;
    isClosedTemporarily?: boolean;
  };
};

export const RestaurantInfo: FC<Props> = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "kdkd",
    photos = ["https://i.imgur.com/nS2oZwY.jpg"],
    address = "Rue Bourgogne, Mohammédia",
    isOpenNow = true,
    rating = 2,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <Card elevation={5}>
      <Cover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};
