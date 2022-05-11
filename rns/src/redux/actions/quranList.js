import {
  REQ_QURAN_LIST,
  REQ_QURAN_LIST_SUCCESS,
  REQ_QURAN_LIST_FAILURE,
} from "./actionTypes";
import axios from "axios";
import { quranList } from "../../utils/api";
import { Constants } from "../../utils/constans";

const Config = {
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};
const getQuranList = () => async (dispatch) => {
  dispatch({ type: REQ_QURAN_LIST });
  try {
    const response = await axios.get(quranList, Config);
    // console.log(response?.data);
    if (response?.status === Constants.RESPONSE_CODE.SUCCESS) {
      dispatch({
        type: REQ_QURAN_LIST_SUCCESS,
        payload: response?.data,
      });
    } else {
      dispatch({
        type: REQ_QURAN_LIST_FAILURE,
        error: "Request Surah gagal",
      });
    }
  } catch (error) {
    dispatch({
      type: REQ_QURAN_LIST_FAILURE,
      error: "Request Surah gagal",
    });
  }
};

export { getQuranList };
