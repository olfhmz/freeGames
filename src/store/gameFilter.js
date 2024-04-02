import { makeAutoObservable } from "mobx";

function formattedDate(dateString) {
  let dateParts = dateString.split("-");
  return new Date(
    dateParts[0],
    dateParts[1] - 1,
    dateParts[2]
  ).toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

class gameFilter {
  gamesList = [];
  gamesFiltred = [];
  platformSelect = "";
  genreSelect = "";
  sortSelect = "popular";

  constructor() {
    makeAutoObservable(this);
  }

  setGameList(newGamesList) {
    newGamesList.forEach((game) => {
      game.release_date = formattedDate(game.release_date);
    });
    this.gamesList = [...newGamesList];
    this.gamesFiltred = this.gamesList;
  }

  setPlatformSelect(checked) {
    this.platformSelect = checked;
  }

  setGenreSelect(checked) {
    this.genreSelect = checked;
  }

  setSortSelect(checked) {
    this.sortSelect = checked;
  }

  sortGameList(checked) {
    function getDate(str) {
      let dateParts = str.split(".");
      let year = parseInt(dateParts[2]);
      let month = parseInt(dateParts[1]) - 1;
      let day = parseInt(dateParts[0]);
      return new Date(year, month, day);
    }

    if (checked === "release") {
      this.gamesFiltred = this.gamesFiltred.sort((a, b) => {
        return (
          getDate(b.release_date).getTime() - getDate(a.release_date).getTime()
        );
      });
    } else if (checked === "popular") {
      this.filterGameList();
    }
  }

  filterGameList() {
    this.gamesFiltred = this.gamesList;
    this.gamesFiltred = this.gamesList.filter((game) => {
      return (
        (this.genreSelect ? game.genre === this.genreSelect : true) &&
        (this.platformSelect ? game.platform === this.platformSelect : true)
      );
    });
  }
}

export default new gameFilter();
