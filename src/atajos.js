$(document).on('keydown', function(event) {
  if (event.altKey && event.which === 73) {
    window.location.href = './index.html'
  }
  if (event.altKey && event.which === 84) {
    window.location.href = './tnf.html'
  }
  if (event.altKey && event.which === 71) {
    window.location.href = './gc.html'
  }
  console.log(event.which);
});