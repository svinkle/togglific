/* Set `href` of bookmarklet toggler */
(function() {
  const toggler = document.querySelector('#toggler-bookmarklet');

  const setBookmarkletHref = function() {
    if (this.readyState === 4) {
      if (this.status === 200 || this.status == 0) {
        toggler.setAttribute('href', this.responseText);
      }
    }
  };

  const client = new XMLHttpRequest();
  client.onload = setBookmarkletHref;
  client.open('GET', '../../src/bundles/bookmarklet/bundle.js');
  client.send();
})();

/* CSS Transition Example */
(function() {
  let menu = document.querySelector('.js-menu'),
    menuButton = document.querySelector('.js-menu-button');

  menuButton.addEventListener(
    'click',
    function() {
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menu.setAttribute('aria-hidden', 'true');
        menuButton.setAttribute('aria-expanded', 'false');
      } else {
        menu.classList.add('active');
        menu.setAttribute('aria-hidden', 'false');
        menuButton.setAttribute('aria-expanded', 'true');
      }
    },
    false
  );
})();

/* requestAnimationFrame Example */
(function() {
  const animationStartTime = window.performance.now();

  function animate(time) {
    let box = document.getElementById('rafBox'),
      t = (time - animationStartTime) / 10 % 100;

    box.style.left = 50 + (time - animationStartTime) / 10 % 300 + 'px';
    box.style.top =
      150 -
      10 * ((time - animationStartTime) / 100 % 10) +
      (time - animationStartTime) / 100 % 10 *
        ((time - animationStartTime) / 100 % 10) +
      'px';
    box.style.backgroundPosition = -Math.floor(t / (100 / 2)) * 60 + 'px';

    window.requestAnimationFrame(animate);
  }

  window.requestAnimationFrame(animate);
})();

/* jQuery Example */
(function() {
  $('.jquery-button').on('click', function() {
    $('.jquery-box').toggle('slow');
  });
})();
