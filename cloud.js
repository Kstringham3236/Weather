var noiseScale=0.0005;

function cloud(cloudCover){
  for (var x=0; x < width; x++) {

    var noiseVal = noise((mouseX+x)*noiseScale, cloudCover*noiseScale);
    stroke(0, 0,(noiseVal*x), 60);
    line(selectionX, selectionY, x, 0);
    
  }  fill('black');
    ellipse(selectionX,selectionY,10,10);
    fill('blue');
    text("Cloud Coverage: " + weatherData.clouds.all + "%", 550,height-25);
}
