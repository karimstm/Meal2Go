import { mockImages, mocks as Fake } from "./mock";
const camelize = require("camelize");

const mocks: { [key: string]: any } = Fake;

export const restaurantsRequest = (location: string) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }: any) => {
  const mappedResults = results.map((restaurant: any) => {
    restaurant.photos = restaurant.photos.map(() => {
      return mockImages[Math.ceil(Math.random() * mockImages.length) - 1];
    });

    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
