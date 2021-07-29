import { Generator, Template } from "webpack";
import { Game } from "./game";
import { Player } from "./player";

export class Team {
    Teamscore: Number = 0;

    name: String;
    id: number;

    Players: Array<Player> = []

    currentPlayer: Player;
    presentgame: Game;
    p: number = 1;





    constructor(teamname: String, teamid: number, presentgameval) {

        this.name = teamname;
        this.id = teamid;
        this.presentgame = presentgameval
        console.log(this.name, this.id)

        for (let p = 0; p < 10; p++) {
            // this.Players.push(new Player(`Player-${this.p}`,this.p, this))
            this.Players.push(new Player(`Player-${p}`,p, this))

            this.currentPlayer = this.Players[0]
            console.log("new team created", this.currentPlayer)
        }

    }





    changePlayer() {


        let playertobechanged=this.currentPlayer.id+1;

        // this.Players.push(new Player(`Player-${playertobechanged}`,playertobechanged, this))
        
        console.log("new team created", this.currentPlayer)
        this.currentPlayer=this.Players[playertobechanged-1]

        console.log(this.currentPlayer,playertobechanged)

        if(this.currentPlayer.id>=9){  
            console.log(this.currentPlayer.id,"changing team")
            this.presentgame.changeteam();
        }


        // if (this.id > 6) {
        //     console.log("change team to anotheeeeeeeeeeeee ", "exceed player limit")
        //     if (this.presentTeam < 1) {
        //         console.log(this.presentTeam, "new team")
        //         let newteam = new Team(`Team-${this.presentTeam + 1}`, this.presentTeam + 1)
        //     }
        //     else if (this.presentTeam > 1) {
        //         console.log("exceed team limit", this.presentTeam)
        //     }
        // }
        // else if (this.id < 6) {
        //     console.log("new player is created", `Player-${this.id + 1}`, this.id + 1)
        //     let newplayer = new Player(`Player-${this.id + 1}`, this.id + 1, this.presentTeam)


        // }

    }
}
