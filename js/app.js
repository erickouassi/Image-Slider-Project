// immediate invoked function expression

(function() {
  const pictures = [
    "img0001",
    "img0002",
    "img0003",
    "img0004",
    "img0005"
  ];

  //select both left and right button. Add event listeners
  const buttons = document.querySelectorAll('.btn')
  const imageDIV = document.querySelector('.img-container')
  let counter = 0

  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('btn-left')){
        counter--
        if(counter < 0){
          counter = pictures.length -1
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`
      }
      if (button.classList.contains('btn-right')){
        counter++
        if(counter > pictures.length -1){
          counter = 0
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`
      }
    })
  })
})();
