var hiddenX = false;

function windowOpen() {
  let myWindow = window.open("https://discord.com/api/oauth2/authorize?client_id=752529751943544902&permissions=8&scope=bot", "affiliateagreement", "width=1000,height=1000");
  $(window).focus(function() {
    if (hiddenX) return;
    window.location.reload();
    myWindow.close();
    hiddenX = true;
  });
};

function sendReport(url) {
  var request = new Request(url);
  fetch(request, {
      mode: 'no-cors'
    })
    .then(function(response) {}).catch(function(error) {
      console.log('Request failed', error);
    });
}
