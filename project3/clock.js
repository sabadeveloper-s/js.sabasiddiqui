const clock = document.querySelector('#Clock');

setInterval(() => {
  let date = new Date();
  //console.log(date.toLocaleTimeString);
  clock.innerHTML=date.toLocaleTimeString()
}, 1000);
