var button = document.getElementById('clicker'),
    count = 0;
button.onclick = function() {
    count += 1;
  button.innerHTML = "Mainīt kuba lokāciju un krāsu: " + count ;
};
