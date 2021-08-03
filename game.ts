import { Player } from "./player"
import { Team } from "./team"

export class Game {

    forcetimeroff: boolean = false;
    i: number = 1
    timerout: boolean = false;
    currentTeam: Team;

    Teams: Array<Team> = []
    downloadTimer: NodeJS.Timer;



    constructor() {



        this.Teams.push(new Team(`Team-${this.i}`, this.i, this))


        this.currentTeam = this.Teams[0]
     

    }





    changeteam() {


        if (this.Teams.length < 2) {


            let teamtobechanged = this.currentTeam.id + 1;
            this.currentTeam.isturnover = true;
        
            let newteam = new Team(`Team-${teamtobechanged}`, teamtobechanged, this)

            this.Teams.push(newteam);
            this.currentTeam = this.Teams[teamtobechanged - 1]
            this.timerout = true;

        


         


            return



        }
        else {
            this.currentTeam.isturnover = true;
            return
        }
    }


    stoptimer() {

        clearInterval(this.downloadTimer)


        if (this.Teams.length == 2) {
            document.getElementById("hit2btn").setAttribute("disabled", "disabled")

        }
        else {

            this.changeteam()
            this.currentTeam.isturnover=true;
            document.getElementById("hit2btn").removeAttribute("disabled")
            document.getElementById("hitbtn1").setAttribute("disabled", "disabled")


        }
        document.getElementById("timerarea").innerHTML = "0";

    }

    startTimer = () => {

        let self = this;
       
        let timeleft = 60;
        this.downloadTimer = setInterval(function () {

            if (timeleft <= 0) {

               


                self.stoptimer();

               

            }
            else {
                document.getElementById("timerarea").innerHTML =` ${timeleft}`;



            }


            timeleft -= 1;


        }, 1000);

    }



    hitt1 = (<HTMLInputElement>document.getElementById("hitbtn1")).addEventListener("click", (e: MouseEvent) => {





        if (this.currentTeam.Players.length >= 10 && this.currentTeam.currentPlayer.turnover) {
         
            clearInterval(this.downloadTimer)
            document.getElementById("timerarea").innerHTML = "Finished";

            this.changeteam()

            this.forcetimeroff = true;






            document.getElementById("hit2btn").removeAttribute("disabled")
            document.getElementById("hitbtn1").setAttribute("disabled", "disabled")

            return
        }
        else {
          
            this.currentTeam.currentPlayer.hit();

            if (this.currentTeam.currentPlayer.id == 1 && this.currentTeam.currentPlayer.balls.length == 1) {
                this.startTimer();
                document.getElementById("hit2btn").setAttribute("disabled", "disabled")
            }
            return
        }
    })


    hitt2 = (<HTMLInputElement>document.getElementById("hit2btn")).addEventListener("click", (e: MouseEvent) => {


        if (this.currentTeam.Players.length >= 10 && this.currentTeam.currentPlayer.turnover) {


            this.forcetimeroff = true;

            clearInterval(this.downloadTimer)
            document.getElementById("timerarea").innerHTML = "Finished";

          


            
            document.getElementById("hit2btn").setAttribute("disabled", "disabled")

            this.changeteam();
            return
        }
        else {

            this.currentTeam.currentPlayer.hit();

            if (this.currentTeam.currentPlayer.id == 1 && this.currentTeam.currentPlayer.balls.length == 1) {
                this.startTimer();
                document.getElementById("hitbtn1").setAttribute("disabled", "disabled")
            }
            return
        }
    })


    results = document.getElementById("result").addEventListener("click", () => {

        if (this.Teams.length == 2 && this.currentTeam.isturnover) {


         
            if (this.Teams[0].Teamscore > this.Teams[1].Teamscore) {
                document.getElementById("winteam").innerHTML = `${this.Teams[0].name}`

                document.getElementById("winner").innerHTML = `${this.Teams[0].playerWithHighScore}`
                document.getElementById("winteamscore").innerHTML = `${this.Teams[0].Teamscore}`
                document.getElementById("winnerscore").innerHTML = `${this.Teams[0].highScoreOfPlayer}`


            }

        }
    })

}


