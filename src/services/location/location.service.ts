const camelize = require("camelize");
import { locations } from "./location.mock";

export const locationRequest = (searchTerm: string) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject(new Error("not found"));
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result: any) => {
  const fomattedResponse = camelize(result);
  const { geometry = {} } = fomattedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
