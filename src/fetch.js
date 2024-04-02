import gameFilter from "./store/gameFilter";

const url =
  "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3df527336fmsh0044b4967187304p16cbe6jsne174d0de494d",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export default async function fetchGamesList() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    gameFilter.setGameList(result);
  } catch (error) {
    console.error(error);
  }
}
