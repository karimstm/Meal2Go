import React, { FC } from "react";
import { View } from "react-native";
import {
  Title,
  Card,
  Cover,
  Info,
  Address,
  Rating,
  RadingContainer,
  Open,
  Icon,
} from "./restaurant-info.style";
import { SvgXml } from "react-native-svg";

import open from "../../../../assets/open";
import star from "../../../../assets/start";
import { Spacer, Text, Favourite } from "../../../components";

type Props = {
  restaurant?: {
    name: string;
    icon: string;
    photos: string[];
    address: string;
    isOpenNow: boolean;
    rating: number;
    isClosedTemporarily?: boolean;
    place_id?: string;
  };
};

export const RestaurantInfo: FC<Props> = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://i.imgur.com/nS2oZwY.jpg"],
    address = "Rue Bourgogne, Mohammédia",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    place_id = "",
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card elevation={5}>
      <View>
        <Favourite restaurant={restaurant} />
        <Cover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Title>{name}</Title>
        <RadingContainer>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`start-${place_id}-${i}`}
                xml={star}
                width="20"
                height="20"
              />
            ))}
          </Rating>
          <Open>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width="20" height="20" />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </Open>
        </RadingContainer>
        <Address>{address}</Address>
      </Info>
    </Card>
  );
};
