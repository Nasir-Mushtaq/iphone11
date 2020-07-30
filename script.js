let images = [
    "./green.png",
    "./full.png",
    "./colors.png",
    
  ];
  
  let index = 0; 

  let img = document.querySelector('img');
  let next = document.getElementById('right');
  let prev = document.getElementById('left');
  
  let incrementIndex = function(){
      index = index + 1;
      if (index > images.length - 1) {index = 0}
      return index;
  }
  
  let decrementIndex = function(){
      index = index - 1;
      if (index < 0) {index = images.length - 1}
      return index;
  }
  next.onclick = function(){
    img.setAttribute('src', images[incrementIndex(index)]);  
  }
  
  prev.onclick = function(){
    img.setAttribute('src', images[decrementIndex(index)]);  
  }

  let learnMore = document.querySelector('#learnMore');
  learnMore.onclick= function() {
    let up = document.getElementById("up");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("learnMore");
  
    if (up.style.display === "none") {
      up.style.display = "inline";
      btnText.innerHTML = "Learn more";
      moreText.style.display = "none";
    } else {
      up.style.display = "none";
      btnText.innerHTML = "Learn less";
      moreText.style.display = "inline";
    }
  }


 