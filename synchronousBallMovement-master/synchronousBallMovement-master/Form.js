class Form{
    constructor(){

    }
    display(){
        var title = createElement("H1");
        title.html("Racing Car");
        title.position(630,0);
        var input = createInput("Name");
        input.position(650,130);
        var button = createButton("Play");
        button.position(650,170);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name= input.value();

            playerCount+= 1;
            player.updateCount(playerCount);
            player.updateName(name);
            var greeting = createElement("H2");
            greeting.html("Hello"+name);
            greeting.position(670,130);

        })
    }
}