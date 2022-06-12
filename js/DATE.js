import GAME from "./GAME.js";
import { game } from "./main.js";
import UI from "./UI.js";

export default class DATE {

    

    /* static async start(dato) {
       await UI.init(dato);
       
        dato.controlGame = setInterval(this.play(dato), dato.time);
    }

    static  play(dato){
        console.log(dato.time)
        UI.moveBall(dato);
        UI.moveBar(dato);
        this.checkIfLost(dato);
    } */

    static collidePlayer1(dato){
       
        if(ball.offsetLeft <= (bar1.clientWidth) &&
           ball.offsetTop >= bar1.offsetTop &&
           ball.offsetTop <= (bar1.offsetTop + bar1.clientHeight)){
            return true;
        }

        return false;
    }

    static collidePlayer2(dato){
        
        if(ball.offsetLeft >= (game.width-bar2.clientWidth) &&  
           ball.offsetTop >= bar2.offsetTop &&
           ball.offsetTop <= (bar2.offsetTop + bar2.clientHeight)){
            return true;
        }
        return false;

    }
   

    static checkIfLost(dato){
        
        if(ball.offsetLeft >= game.width){
            UI.stop(game);
            console.log("punto player 1");
        }
        if(ball.offsetLeft <= 0){
            console.log(game.width)
            UI.stop(game);
           
        }
    }
    
    

    

}