import { GET } from "../config/apiConfig";
import { apiEndpoints } from "../constants/apiEndpoints";

export const getGamesList = () => {
  return GET();
};
