import { Injectable } from '@angular/core';

@Injectable()
export class GameListServiceService {

  constructor() { }
  getGameList() {
    return this.gameList;
  }
  gameList = [
    {
      name: "Destiny 2",
      about: "Destiny is our main game that we are based upon and strive to increase our stats everyday with our committed community.",
      img: "../assets/destiny_2.png"
    },
    {
      name: "PUBG",
      about: "Pubg is a relatively new game for us but we already have a very strong core. we are always doing tournaments and grinding out games for great stats.",
      img: "../assets/pubg.png"
    },
    {
      name: "Overwatch",
      about: "Overwatch is a smaller community but the players we do have are some of the better players you'll see. we are currently grinding to expand this part of our clan.",
      img: "../assets/overwatch.png"
    },
    {
      name: "Warframe",
      about: "Warframe is a very popular part of the clan. we always have people for missions and have an amazing community of friendly players.",
      img: "../assets/warframe.png"
    },
    {
      name: "Runescape",
      about: "Runescape is also a new part of the clan and many of our admins have taken part in expanding this in the clan as well as outside of it. we also are currently looking to expand this.",
      img: "../assets/runescape.png"
    }
  ];
}
