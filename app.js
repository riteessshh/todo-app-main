$(".sun-ico").click(() => {
  $(".background").toggleClass("background-dark");
  $(".background").toggleClass("background-light");
  $(".img-dark").toggleClass("dark-bg");
  $(".img-dark").toggleClass("light-bg");
  $(".sun-ico").toggleClass("dark-bg");
  $(".sun-ico").toggleClass("light-bg");
  $(".img-light").toggleClass("dark-bg");
  $(".img-light").toggleClass("light-bg");
  $(".moon-ico").toggleClass("dark-bg");
  $(".moon-ico").toggleClass("light-bg");
  $(".input-section").toggleClass("dark-theme");
  $(".input-section").toggleClass("light-theme");
  $(".input-area").toggleClass("dark-theme");
  $(".input-area").toggleClass("light-theme");
  $("li").toggleClass("dark-theme");
  $("li").toggleClass("light-theme");
  $(".functions").toggleClass("dark-theme");
  $(".functions").toggleClass("light-theme");
})

$(".moon-ico").click(() => {
  $(".background").toggleClass("background-dark");
  $(".background").toggleClass("background-light");
  $(".img-dark").toggleClass("dark-bg");
  $(".img-dark").toggleClass("light-bg");
  $(".sun-ico").toggleClass("dark-bg");
  $(".sun-ico").toggleClass("light-bg");
  $(".img-light").toggleClass("dark-bg");
  $(".img-light").toggleClass("light-bg");
  $(".moon-ico").toggleClass("dark-bg");
  $(".moon-ico").toggleClass("light-bg");
  $(".input-section").toggleClass("dark-theme");
  $(".input-section").toggleClass("light-theme");
  $(".input-area").toggleClass("dark-theme");
  $(".input-area").toggleClass("light-theme");
  $("li").toggleClass("dark-theme");
  $("li").toggleClass("light-theme");
  $(".functions").toggleClass("dark-theme");
  $(".functions").toggleClass("light-theme");
})


function print() {
  value = document.getElementById("input-data").value;
  var node = document.createElement("LI");                 // Create a <li> node
  var textnode = document.createTextNode(value);         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  if (value === '') {
    alert("You must write something!");
  } else {
    document.getElementById("mylist").appendChild(node);    // append <li> to <ul>
    $("li").addClass("dark-theme");
  }
  document.getElementById("input-data").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  node.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("IMG");
  var txt = document.createTextNode("close");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  $(".close").attr("src", "images/icon-cross.svg");
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
