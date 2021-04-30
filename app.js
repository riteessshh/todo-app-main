$(".sun-ico").click(() => {
  $(".background").toggleClass("background-dark");
  $(".background").toggleClass("background-light");
  $(window).width() <= 480 ? $(".mobile-dark-img").toggleClass("dark-bg") : $(".desktop-dark-img").toggleClass("dark-bg");
  $(window).width() <= 480 ? $(".mobile-dark-img").toggleClass("light-bg") : $(".desktop-dark-img").toggleClass("light-bg");
  // $(".img-dark").toggleClass("dark-bg");
  // $(".img-dark").toggleClass("light-bg");
  $(".sun-ico").toggleClass("dark-bg");
  $(".sun-ico").toggleClass("light-bg");
  $(window).width() <= 480 ? $(".mobile-light-img").toggleClass("dark-bg") : $(".desktop-light-img").toggleClass("dark-bg");
  $(window).width() <= 480 ? $(".mobile-light-img").toggleClass("light-bg") : $(".desktop-light-img").toggleClass("light-bg");
  // $(".img-light").toggleClass("dark-bg");
  // $(".img-light").toggleClass("light-bg");
  $(".moon-ico").toggleClass("dark-bg");
  $(".moon-ico").toggleClass("light-bg");
  $(".input-section").toggleClass("dark-theme");
  $(".input-section").toggleClass("light-theme");
  $(".input-area").toggleClass("dark-theme");
  $(".input-area").toggleClass("light-theme");
  $("li").toggleClass("dark-theme");
  $("li").toggleClass("light-theme");
  $(".features").toggleClass("dark-theme");
  $(".features").toggleClass("light-theme");
})

$(".moon-ico").click(() => {
  $(".background").toggleClass("background-dark");
  $(".background").toggleClass("background-light");
  $(window).width() <= 480 ? $(".mobile-dark-img").toggleClass("dark-bg") : $(".desktop-dark-img").toggleClass("dark-bg");
  $(window).width() <= 480 ? $(".mobile-dark-img").toggleClass("light-bg") : $(".desktop-dark-img").toggleClass("light-bg");
  // $(".img-dark").toggleClass("dark-bg");
  // $(".img-dark").toggleClass("light-bg");
  $(".sun-ico").toggleClass("dark-bg");
  $(".sun-ico").toggleClass("light-bg");
  $(window).width() <= 480 ? $(".mobile-light-img").toggleClass("dark-bg") : $(".desktop-light-img").toggleClass("dark-bg");
  $(window).width() <= 480 ? $(".mobile-light-img").toggleClass("light-bg") : $(".desktop-light-img").toggleClass("light-bg");
  // $(".img-light").toggleClass("dark-bg");
  // $(".img-light").toggleClass("light-bg");
  $(".moon-ico").toggleClass("dark-bg");
  $(".moon-ico").toggleClass("light-bg");
  $(".input-section").toggleClass("dark-theme");
  $(".input-section").toggleClass("light-theme");
  $(".input-area").toggleClass("dark-theme");
  $(".input-area").toggleClass("light-theme");
  $("li").toggleClass("dark-theme");
  $("li").toggleClass("light-theme");
  $(".features").toggleClass("dark-theme");
  $(".features").toggleClass("light-theme");
})

// $(window).width() <= 480 ? 'bubble' : 'bottom';


function print() {
  value = document.getElementById("input-data").value;
  var node = document.createElement("LI"); // Create a <li> node
  var textnode = document.createTextNode(value); // Create a text node
  node.appendChild(textnode); // Append the text to <li>
  if (value === '') {
    alert("You must write something!");
  } else {
    document.getElementById("mylist").appendChild(node); // append <li> to <ul>
    if ($(".input-section").hasClass("dark-theme")) {
      $("li").addClass("dark-theme");
    } else {
      $("li").addClass("light-theme");
    }
  }
  document.getElementById("input-data").value = "";

  var span = document.createElement("IMG");
  var txt = document.createTextNode("close");
  span.className = "close";
  span.appendChild(txt);
  node.appendChild(span);
  $(".close").attr("src", "images/icon-cross.svg");

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  var totalItems = document.getElementsByTagName("li").length
  document.getElementById("leftItems").innerHTML = totalItems;
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


$("#remove").click(() => {
  var completed = $(".checked");
  completed.remove();
  totalItems = 0;
  var totalItems = document.getElementsByTagName("li").length
  document.getElementById("leftItems").innerHTML = totalItems;
})

$("#active").click(() => {
  var completed = $(".checked");
  completed.hide();
  var totalItems = document.getElementsByTagName("li").length
  document.getElementById("leftItems").innerHTML = totalItems;
})

$("#all").click(() => {
  var all = $("li");
  all.show();
  var totalItems = document.getElementsByTagName("li").length
  document.getElementById("leftItems").innerHTML = totalItems;
})

// document.onchange(() => {
//   var totalItems = document.getElementsByTagName("li").length
//   document.getElementById("leftItems").innerHTML = totalItems;
// })

// window.onload((event) => {
//   var totalItems = document.getElementsByTagName("li").length
//   document.getElementById("leftItems").innerHTML = totalItems;
// })

// var totalItems = document.getElementsByTagName("LI")
// document.getElementsById("leftItems").appendChild(totalItems.length)

// $("#checkers").click(() => {
//   // var completed = $(".checked");
//   if ($("li").hasClass(".checked")) {
//     this.hide();
//   }
// })
