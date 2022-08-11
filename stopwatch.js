const display = document.getElementById('display');

var s= 0;
var m = 0;
var h = 0;
var state = true;

function start() {
  if (state == true) {
    state = false;
    realFunction();
  }
}

function stop() {
  if (state == false) {
    state = true;
  }
}

function reset() {
  display.innerHTML = "00:00:00";
  s=0;
  m=0;
  h=0;

}

function realFunction() {
  if (state == false) {
    s = parseInt(s);
    m = parseInt(m);
    h = parseInt(h);
    s= s+1;

    if (s==60) {
      m = m+1;
      s = 0;
    }
    if(m==60) {
      h = h+1;
      m=0;
      s=0;
    }

    if (s < 10 || s == 0) {
      s = '0' + s;
    }
    if (m < 10 || m == 0) {
      m = '0' + m;
    }
    if (h < 10 || h == 0) {
      h = '0' + h;
    }

    display.innerHTML = h + ':' + m + ':' + s;

    setTimeout("realFunction()", 1000);
  }
}