import { Player } from "./player"
import { Team } from "./team"


export class Game{

    Highscore:Number;
    WinnerTeam:Team;
    ManoftheMatch:Player;
    TeamoftheManoftheMatch:Team;
    ManoftheMatchScore:Number;

    i:number=1
    
    currentTeam:Team;

    Teams:Array<Team>=[]

    constructor(){

      
          for(let i=0;i<2;i++){
            // this.Teams.push(new Team(`Team-${this.i}`,this.i,this))
            this.Teams.push(new Team(`Team-${i}`,i,this))

            this.currentTeam=this.Teams[0]
            console.log("curr team",this.currentTeam,this.Teams,this)
          }
      
    }

  
    changeteam(){
       
     

        let teamtobechanged=this.currentTeam.id+1;
        
        // this.Teams.push(new Team(`Team-${teamtobechanged}`,teamtobechanged,this))
            

        this.currentTeam=this.Teams[teamtobechanged-1]

        console.log(this.currentTeam,teamtobechanged
            )

        // let newteam=new Team(`Team-${this.id+1}`,this.id+1)


    }



}


