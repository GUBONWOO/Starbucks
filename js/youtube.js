var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: '8NpJ5eUSDrU',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: '8NpJ5eUSDrU',
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
