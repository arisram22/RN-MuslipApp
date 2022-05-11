import {
  REQ_PRAYER,
  REQ_PRAYER_SUCCESS,
  REQ_PRAYER_FAILURE,
} from "../actions/actionTypes";
import moment from "moment";

const initialState = {
  actionStatus: "",
  data: [],
  dataFilter: [],
  error: false,
  errorMessage: "",
  loading: true,
  refreshing: true,
};

const PrayerTime = (state = initialState, action) => {
  // console.log("3");
  switch (action.type) {
    case REQ_PRAYER:
      // console.log("pangggil 1");
      return {
        ...state,
        actionStatus: REQ_PRAYER,
        error: false,
        errorMessage: "",
        loading: true,
        refreshing: true,
        dataFilter: getDate(state.data, action.payload),
      };
    case REQ_PRAYER_SUCCESS:
      // console.log("pangggil 2");
      return {
        ...state,
        actionStatus: REQ_PRAYER_SUCCESS,
        data: action.payload,
        error: false,
        loading: false,
        refreshing: false,
      };
    case REQ_PRAYER_FAILURE:
      // console.log("pangggil 3");
      return {
        ...state,
        actionStatus: REQ_PRAYER_FAILURE,
        error: true,
        // data,
        errorMessage: action.error,
        loading: false,
        refreshing: false,
      };
    default:
      return state;
  }
};

export { PrayerTime };

const getDate = async (data, params) => {
  const { date, type } = params;
  const dateUpdate = moment(date, "DD-MM-YYYY")
    .add(type, "days")
    .format("DD-MM-YYYY");
  // console.log("masuk");
  // console.log(params);
  // console.log(data);
  const getMonth = moment(date, "DD-MM-YYYY").add(type, "days").format("MM");
  const getYear = moment(date, "DD-MM-YYYY").add(type, "days").format("YYYY");
  const dateOk = data?.data.filter(
    (element) => element.date.gregorian.date == dateUpdate
  );
  console.log(dateOk);
  console.log(dateOk[0]);
  if (dateOk[0] == undefined) {
    // const payload = { long, lat, getMonth, getYear };
    // await dispatch(getPrayerTime(payload));
    // await dateFilter();
  }
  return dateOk[0];
};
