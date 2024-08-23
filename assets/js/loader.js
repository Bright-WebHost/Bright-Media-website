document.addEventListener("DOMContentLoaded", function() {
    var hi = new Vivus('preloader', {
      type: 'scenario-sync',
      duration: a80,
      start: 'autostart',
      forceRender: false,
      dashGap: 20
    }, function (obj) {
      obj.el.classList.add('finished');
    });
  });
  