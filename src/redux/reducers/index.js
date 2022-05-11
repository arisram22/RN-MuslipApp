import { combineReducers } from "redux";

import { QuranList } from "./quranListReducer";
import { QuranDetail } from "./quranDetailReducer";
import { Theme } from "./themeReducer";
import { PrayerTime } from "./prayerTimeReducer";

const appReducer = combineReducers({
  quranList: QuranList,
  quranDetail: QuranDetail,
  theme: Theme,
  prayerTime: PrayerTime,
});

export { appReducer };
