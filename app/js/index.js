// (bundle from remote urls) 
// import Whatever from 'https://unpkg.com/whatever'

// (bundle from npm)
// import Whatever from 'whatever'
// import $ from 'blingblingjs'

// (bundle from local)
// import whatever from './whatever.js'

// postCSS processed css-4-js
// (file as string)
// import { default as index_css }  from './css/index.css'

console?.log('💀')


const countdown   = document.querySelector('countdown')
const hour             = countdown.querySelector('#countdown-hrs')
const minute           = countdown.querySelector('#countdown-min')
const second           = countdown.querySelector('#countdown-seg')

var date = new Date();
date.setHours(0, 0, 0)
var countDownDate = date.setDate(date.getDate() + 1);


// Update the count down every 1 second
var countDownInterval = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  hour.textContent = hours
  minute.innerText = minutes
  second.innerText = seconds

  if (distance < 0) clearInterval(countDownInterval)
    
}, 1000);