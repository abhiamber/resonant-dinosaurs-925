import axios from "axios";
import { ADD_ERROR, PROD_GET, QUERY_ITEM } from "./prod.type";

export const GetToProduct = () => async (dispatch) => {
  let { data } = await axios.get(" http://localhost:8080/prod");
  try {
    // console.log(data.messg);
    dispatch({ type: PROD_GET, payload: data.messg });
  } catch (e) {
    alert(e.message);
    dispatch({ type: ADD_ERROR });
  }
};

export const GetToQueryProduct = (query) => async (dispatch) => {
  let { data } = await axios.get(`http://localhost:8080/prod?query=${query}`);
  try {
    // console.log(data.messg);
    dispatch({ type: QUERY_ITEM, payload: data.messg });
  } catch (e) {
    alert(e.message);
    dispatch({ type: ADD_ERROR });
  }
};

export const GetToSearchQueryProduct = (query) => async (dispatch) => {
  let { data } = await axios.get(
    `http://localhost:8080/prod/search?query=${query}`
  );
  try {
    // console.log(data.messg);
    dispatch({ type: QUERY_ITEM, payload: data.messg });
  } catch (e) {
    alert(e.message);
    dispatch({ type: ADD_ERROR });
  }
};
