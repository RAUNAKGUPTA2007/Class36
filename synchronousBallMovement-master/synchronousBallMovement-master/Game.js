class Game{
    constructor(){

    }
    getGameSate(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value",function(data){
            gameState = data.val()
        })
    }
 updateCount(C){
     database.ref("/").update({
         gameState: C
 
     })
 }
 start(){
     if (gameState=== 0){
         player = new Player();
         player.getCount();
         form = new Form();
         form.display();

     }
 }
 
}

