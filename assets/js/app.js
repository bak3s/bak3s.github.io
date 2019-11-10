---
layout: null
---
window.onload = function () {
    var script = document.createElement('script');
    var firstScript = document.getElementsByTagName('script')[0];
    script.async = true;
    script.src = '/sw-register.js?v=' + Date.now();
    firstScript.parentNode.insertBefore(script, firstScript);
};

// fetch('https://content.spaceship.com.au/data/super/investment/global-index/unit-price.json')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     // Work with JSON data here
//     console.log(data.slice(-1))
//   })
//   .catch(err => {
//     // Do something for an error here
//   })