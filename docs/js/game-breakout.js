(function (window, document, undefined) {
  'use strict';

  function init() {
    var canvas = document.getElementById('canvas');

    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.rect(20, 40, 50, 50);
      ctx.fillStyle = '#FF0000';
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.rect(160, 10, 100, 40);
      ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
      ctx.stroke();
      ctx.closePath();
    }
  }

  window.addEventListener('DOMContentLoaded', function () {
    init();
  });
})(window, document);
