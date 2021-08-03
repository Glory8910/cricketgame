import { Generator, Template } from "webpack";
import { Game } from "./game";
import { Player } from "./player";

export class Team {
  Teamscore: number = 0;

  name: String;
  id: number;

  Players: Array<Player> = []

  currentPlayer: Player;
  presentgame: Game;
  p: number = 1;

  highScoreOfPlayer: number = 0;
  playerWithHighScore: String;

  isturnover:boolean= false;




  constructor(teamname: String, teamid: number, presentgameval) {

    this.name = teamname;
    this.id = teamid;
    this.presentgame = presentgameval
    console.log(this.name, this.id)

    let newpl = new Player(`Player-${this.p}`, this.p, this)


    this.Players.push(newpl)


    this.currentPlayer = this.Players[0]
    console.log("new team created", this.currentPlayer)


  }





  changePlayer() {

    if (this.Players.length < 10) {


      this.Teamscore = this.Teamscore + this.currentPlayer.PlayerScore
      if (this.currentPlayer.PlayerScore > this.highScoreOfPlayer) {
        this.highScoreOfPlayer = this.currentPlayer.PlayerScore
        this.playerWithHighScore = this.currentPlayer.name
      }

      // document.getElementById(`highscore${this.id}`).innerHTML = `${this.highScoreOfPlayer}--${this.playerWithHighScore}`


      // document.getElementById(`team${this.id}-score`).innerHTML = `${this.Teamscore}`

      let playertobechanged = this.currentPlayer.id + 1;
      console.log("new player is created", `Player-${playertobechanged}`, playertobechanged)
      let newplayer = new Player(`Player-${playertobechanged}`, playertobechanged, this)


      this.Players.push(newplayer)



      this.currentPlayer = this.Players[playertobechanged - 1]

      console.log(this.currentPlayer, playertobechanged)


      return

    }


  }



}


