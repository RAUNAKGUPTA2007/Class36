class Player {
    constructor(){

    }
   getCount(){
       var playerCountref = database.ref("playerCount");
       playerCountref.on("value",function(data){
           playerCount = data.val()
       })
   }
updateCount(C){
    database.ref("/").update({
        playerCount: C

    })
}
updateName(N){
    var playerindex = "player"+ playerCount;
    database.ref(playerindex).set({
        name: N
    })
}

}