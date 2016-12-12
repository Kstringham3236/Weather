var noiseScale=0.5;

function temp(tempOverall){
  for (var x=0; x < width; x++) {

    var noiseVal = noise((mouseX+x)*noiseScale, tempOverall*noiseScale);
    stroke((tempOverall * 3), 0, 0, 60);
    line(selectionX, selectionY, x, height-100);    

  }
    fill('black');
    ellipse(selectionX,selectionY,10,10);
    fill((tempOverall * 3), 0, 0);
    text("Temp in Fahrenheit: " + weatherData.main.temp + " °F",550,height-50);
}
