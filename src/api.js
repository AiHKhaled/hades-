const base_url =
  "https://api.rawg.io/api/games?key=df2c4e7f4b1b491983ba7de7a0bd7246&";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popularGames = `dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `date=${currentDate},${nextYear}&ordering=added&page_size=10`;
const newGames = `dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
export const popularGamesURL = () => `${base_url}${popularGames}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
export const newGamesURL = () => `${base_url}${newGames}`;
export const gameDetailURL = (game_id) =>
  `https://api.rawg.io/api/games/${game_id}?key=df2c4e7f4b1b491983ba7de7a0bd7246`;

export const gameScreenshotURL = (game_id) =>
  `https://api.rawg.io/api/games/${game_id}/screenshots?key=df2c4e7f4b1b491983ba7de7a0bd7246`;

//console.log(gameScreenshotURL(251509));
