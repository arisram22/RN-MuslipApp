import {
  REQ_PRAYER,
  REQ_PRAYER_SUCCESS,
  REQ_PRAYER_FAILURE,
} from "./actionTypes";
import axios from "axios";
import { Config, prayerTime2 } from "../../utils/api";
import { Constants } from "../../utils/constans";

const getPrayerTime = (payload) => async (dispatch) => {
  // console.log("2");
  const { lat, long, getYear, getMonth } = payload;

  // dispatch({ type: REQ_PRAYER });

  try {
    const response = await axios.get(
      prayerTime2(lat, long, getMonth, getYear),
      Config
    );
    if (response?.status === Constants.RESPONSE_CODE.SUCCESS) {
      return dispatch({
        type: REQ_PRAYER_SUCCESS,
        payload: response?.data?.data,
      });
    } else {
      return dispatch({
        type: REQ_PRAYER_FAILURE,
        error: "Request jadwal gagal 1",
      });
    }
    // console.log(response);
  } catch (error) {
    return dispatch({
      type: REQ_PRAYER_FAILURE,
      error: "Request jadwal gagal",
    });
    console.log("error log " + error);
  }
};

export { getPrayerTime };
