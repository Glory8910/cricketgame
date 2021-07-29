import { Team } from "./team";



export class Player {


    PlayerScore: number = 0;


    name: String;
    id: number;

    balls: Array<Number> = [];
    hitcount: number;
    presentTeam: Team;




    constructor(plname, plId, presentteamval) {

        this.name = plname
        this.id = plId
        this.presentTeam = presentteamval




        console.log("name", this.name, "id", this.id, "hitcount", this.hitcount, "balls arr", this.balls, "playing team", this.presentTeam)




    }


    startTimer() {

        document.getElementById("countdown").innerHTML = "ded"
        var timeleft = 60;
        var downloadTimer = setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "Finished";


            } else {
                document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
            }
            timeleft -= 1;
        }, 1000);


    }


    hit() {




        let randval = Math.floor(Math.random() * 7)
        // this.balls.length > 5

        // randval == 0 ||


        if (randval == 0 ) {


            console.log(randval, this.balls.length, "changeplayer")



            this.presentTeam.changePlayer();

                    return;
        }
        else{

            console.log(randval, this.balls.length)


            this.balls.push(randval)
    
            this.PlayerScore = this.PlayerScore + randval;
        }







        // console.log(this.hitcount,"hitcount updated")

    }

    hitt = (<HTMLInputElement>document.getElementById("hitbtn1")).addEventListener("click", (e: MouseEvent) => {

        console.log("hit",this.presentTeam.name)
        this.hit();




    })



}



