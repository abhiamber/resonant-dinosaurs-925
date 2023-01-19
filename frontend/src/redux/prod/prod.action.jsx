import axios from "axios";
import { ADD_ERROR, PROD_GET } from "./prod.type";

export const GetToProduct = () => async (dispatch) => {
  let { data } = await axios.get(" https://skin-care-hub.onrender.com/product");
  try {
    dispatch({ type: PROD_GET, payload: data });
  } catch (e) {
    alert(e.message);
    dispatch({ type: ADD_ERROR });
  }
};
