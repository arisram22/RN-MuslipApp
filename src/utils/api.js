const QURAN_URL = "https://quran.kemenag.go.id/api/";
const QURAN_URL1 = "https://api.npoint.io/99c279bb173a6e28359c/data";
const Config = {
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};
const mapboxGetPlace = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const accessTokenMapbox =
  "pk.eyJ1IjoiaXJmYW5wdWxlIiwiYSI6ImNqdnpxbHFvbzAzM3UzeWxrcWtkbTVhamIifQ.TJM77G3WOEIOIYzk_IiWKQ";

const PRAYER_URL = "https://api.pray.zone/v2/times/month.json";
const PRAYER_URL2 = "https://api.pray.zone/v2/times/today.json";
const PRAYER_URL1 = "http://api.aladhan.com/v1/calendar";

// const quranList = `${BASE_URL1}v1/surat`;
const quranList = `${QURAN_URL1}`;
const quranDetail = (surahId, jmlAyat) =>
  `${QURAN_URL}v1/ayatweb/${surahId}/0/0/${jmlAyat}`;
const prayerTime = (lat, long, month, year) =>
  `${PRAYER_URL}?longitude=${long}&latitude=${lat}&elevation=333&month=${month}-${year}&school=9`;
const prayerTime2 = (lat, long, month, year) =>
  `${PRAYER_URL1}?longitude=${long}&latitude=${lat}&method=11&month=${month}&year=${year}`;
export { quranList, quranDetail, Config, prayerTime, prayerTime2 };
