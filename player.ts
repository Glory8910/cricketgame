import { Team } from "./team";



export class Player {


    PlayerScore: number = 0;


    name: String;
    id: number;

    balls: Array<Number> = [];
    hitcount: number;
    presentTeam: Team;
    turnover: boolean = false;



    constructor(plname, plId, presentteamval) {

        this.name = plname
        this.id = plId
        this.presentTeam = presentteamval





    }





    hit() {


        let randval = Math.floor(Math.random() * 7)

        this.balls.push(randval)
        this.PlayerScore=this.PlayerScore+randval;
       

        let tab=document.getElementById(`t${this.presentTeam.id}p${this.id}`)
        let tabnext=document.createElement('td')
        tabnext.id=`tdt${this.presentTeam.id}p${this.id}`
    
         tabnext.innerHTML=` ${randval}`

         tab.appendChild(tabnext);

         let tabtot=document.createElement('td')
         tabtot.id=`tot${this.presentTeam.id}p${this.id}`
         tabtot.innerHTML=`${this.PlayerScore}`

     ;

        if (randval == 0 || this.balls.length >= 6) {

            if(this.balls.length<6){
          
                for(let j=this.balls.length;j<6;j++){
                    // this.balls.push(0)
                    let tabnextt=document.createElement('td')
                    tabnextt.id=`tdt${this.presentTeam.id}p${this.id}`
                  
                     tabnextt.innerHTML=` ${randval}`
            
                     tab.appendChild(tabnextt);
                }

               
            }
        
            this.turnover = true;
            tab.appendChild(tabtot)
          

          

            this.presentTeam.changePlayer();

            return

        }
        
        return

    }







}



