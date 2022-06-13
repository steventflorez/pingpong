




//export default class GAME{constructor(t,e,h,i,s,o,r,a){this.time=t,this.movement=e,this.movementBar=h,this.width=i-e,this.height=s-e,this.controlGame=o,this.player1=r,this.player2=a}}









export default class GAME {


    constructor(time, movement,movementBar,width,height,controlGame,player1,player2){
        this.time = time
        this.movement = movement
        this.movementBar = movementBar
        this.width = width  - movement
        this.height = height - movement
        this.controlGame = controlGame
        this.player1 = player1
        this.player2 = player2
        

    }
    

 } 