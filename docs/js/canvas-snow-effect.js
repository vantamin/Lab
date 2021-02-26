(function (window, document, undefined) {
  'use strict';

  function init() {
    var canvas = document.getElementById('canvas');

    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var width = window.innerWidth; // 화면 너비
      var height = window.innerHeight; // 화면 높이
      var length = Math.floor(Math.random() * Math.sqrt(width * height)); // 갯수
      var speed = 20; // 속도
      var angle = 0; // 각도
      var snow = [];

      function update() {
        angle += 0.01;

        for (var i = 0; i < length; i++) {
          snow[i].x += Math.sin(angle) * 2;
          snow[i].y += Math.cos(angle + snow[i].d) + 1 + snow[i].r / 2;

          if (snow[i].x < 0 || snow[i].x > width) {
            snow[i].x = Math.sin(angle) > 0 ? 0 : width;
            snow[i].y = Math.random() * height;
          }

          if (snow[i].y > height) {
            snow[i].x = Math.random() * width;
            snow[i].y = 0;
          }
        }
      }

      function draw() {
        ctx.clearRect(0, 0, width, height);

        for (var i = 0; i < length; i++) {
          ctx.beginPath();
          ctx.moveTo(snow[i].x, snow[i].y);
          ctx.arc(snow[i].x, snow[i].y, snow[i].r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, ' + snow[i].a + ')';
          ctx.fill();
        }

        update();
      }

      for (var i = 0; i < length; i++) {
        snow.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.sqrt(Math.random() * 100) + 1, // 크기
          d: Math.random() * length, // 밀도
          a: Math.random(),
        });
      }

      canvas.width = width;
      canvas.height = height;

      setInterval(draw, speed);
    }
  }

  window.addEventListener('DOMContentLoaded', function () {
    init();
  });
})(window, document);
