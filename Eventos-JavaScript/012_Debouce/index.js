window.addEventListener("mousemove", function(){
    this.clearTimeout(timeout);
    timeout = this.setTimeout(() => console.log("Debouce!"), 500)
})