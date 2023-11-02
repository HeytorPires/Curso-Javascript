const cachorro = {
    raca: '',


    latir: function(){
        console.log("AU AU!")
    },
    rosnar: function(){
        console.log("GRRRRR")
    },
    SetRaca: function(raca){
        this.raca = raca;
    },
    GetRaca: function(){
        console.log("A Raça é " + this.raca);
    },
}

cachorro.latir()
cachorro.rosnar()
cachorro.SetRaca("Pug")
cachorro.GetRaca()