var current = 0;
var a = document.getElementsByTagName("a");
function slide(x){
  var image = document.getElementsByClassName('img');
  current = current + x;
  for(var i = 0; i < image.length; i++){
    image[i].style.opacity = 0;
  }
  if(current > image.length - 1){
    current = 0;
  }
  image[current].style.opacity = 1;
}

setInterval(function(){
  slide(1);
},3000);