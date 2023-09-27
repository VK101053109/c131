model_s=false;
function bacb(){
    window.location="index.html";
}
function preload() {
    pic_value=localStorage.getItem("pic_key");
    if(pic_value=="book"){
        pic = loadImage("book.jpg");
    }
}
function draw(){
    if(pic_value="book"){
        image(pic,0,0,480,380);
        model_s=true;
        if(model_s!=false){
        odecter.detect(pic, gotr);

        }
    }



}
function gotr(e,r){
if(e){
    console.error(e);
}else{
    console.log(r);
}
}
function setup(){
    odecter = ml5.objectDetector("cocossd", modelready);
    canvas=createCanvas(480,380);
    canvas.center();
  
}
function modelready(){
    console.log("model is working");
    
}
