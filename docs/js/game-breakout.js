(function (window, document, undefined) {
  'use strict';

  function init() {
    var canvas = document.getElementById('canvas');

    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var x = canvas.width / 2;
      var y = canvas.height - 30;
      var dx = 2;
      var dy = -2;

      function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = '#0095DD';
        ctx.fill();
        ctx.closePath();
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        x += dx;
        y += dy;
      }

      setInterval(draw, 10);
    }
  }

  window.addEventListener('DOMContentLoaded', function () {
    init();
  });
})(window, document);
