import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (bounds) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: bounds.sw.lat,
        tr_latitude: bounds.ne.lat,
        bl_longitude: bounds.sw.lng,
        tr_longitude: bounds.ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "7b1821ad18msh1412caacb4e07e6p1b04a3jsn06f83c417978",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
