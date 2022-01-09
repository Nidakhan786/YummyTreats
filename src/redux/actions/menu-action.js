import apiFetch from "../../apis/api-fetch";
import { ActionTypes } from "../constants/action-types";

export const fetchMenus = () => {
  const response = await apiFetch.get("/categories.php");
  return {
    type: ActionTypes.SET_MENUS,
    payload: response,
  };
};
