
var slider = document.getElementById("Ptip");
var percent = document.getElementById("percent");

percent.innerHTML = slider.value;

slider.oninput = function() {
  percent.innerHTML = this.value;
}

function getTotal(){
  var pTotal = document.getElementById("pTotal").value;

  document.getElementById("fTip").innerHTML = +pTotal * (percent.innerHTML / 100);

  document.getElementById("fTotal").innerHTML = +pTotal + (percent.innerHTML / 100) * +pTotal;

}