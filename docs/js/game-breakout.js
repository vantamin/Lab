(function (window, document, undefined) {
  'use strict';

  function init() {
    var canvas = document.getElementById('canvas');

    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var ballRadius = 10;
      var x = canvas.width / 2;
      var y = canvas.height - 30;
      var dx = 2;
      var dy = -2;
      var paddleWidth = 75;
      var paddleHeight = 10;
      var paddleX = (canvas.width - paddleWidth) / 2;
      var leftPressed = false;
      var rightPressed = false;

      document.addEventListener('keydown', keyDownHandler, false);
      document.addEventListener('keyup', keyUpHandler, false);

      function keyDownHandler(e) {
        if (e.keyCode === 37) {
          leftPressed = true;
        } else if (e.keyCode === 39) {
          rightPressed = true;
        }
      }

      function keyUpHandler(e) {
        if (e.keyCode === 37) {
          leftPressed = false;
        } else if (e.keyCode === 39) {
          rightPressed = false;
        }
      }

      function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#0095DD';
        ctx.fill();
        ctx.closePath();
      }

      function drawPaddle() {
        ctx.beginPath();
        ctx.rect(
          paddleX,
          canvas.height - paddleHeight,
          paddleWidth,
          paddleHeight
        );
        ctx.fillStyle = '#0095DD';
        ctx.fill();
        ctx.closePath();
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawPaddle();

        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
          dx = -dx;
        }

        if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
          dy = -dy;
        }

        if (leftPressed && paddleX > 0) {
          paddleX -= 7;
        } else if (rightPressed && paddleX < canvas.width - paddleWidth) {
          paddleX += 7;
        }

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
