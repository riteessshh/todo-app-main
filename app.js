if ($(window).width() > 480 ) {
  $(".desktop-dark-img").css("display", "block")
  $(".mobile-dark-img").css("display", "none")
} else if ($(window).width() < 480 ) {
  $(".mobile-dark-img").css("display", "block")
  $(".desktop-dark-img").css("display", "none")
}
$(".sun-ico").click(() => {
  $(".background").toggleClass("background-dark");
  $(".background").toggleClass("background-light");
  $(".sun-ico").toggleClass("dark-bg");
  $(".sun-ico").toggleClass("light-bg");
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
  if ($(window).width() > 480 ) {
    $(".desktop-dark-img").css("display", "none")
    $(".desktop-light-img").css("display", "block")
  }else if ($(window).width() < 480 ) {
    $(".mobile-dark-img").css("display", "none")
    $(".mobile-light-img").css("display", "block")
  }
})


$(".moon-ico").click(() => {
  $(".background").toggleClass("background-dark");
  $(".background").toggleClass("background-light");
  $(".sun-ico").toggleClass("dark-bg");
  $(".sun-ico").toggleClass("light-bg");
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
  if ($(window).width() > 480 ) {
    $(".desktop-dark-img").css("display", "block")
    $(".desktop-light-img").css("display", "none")
  }else if ($(window).width() < 480 ) {
    $(".mobile-dark-img").css("display", "block")
    $(".mobile-light-img").css("display", "none")
  }
})

function print() {
  value = document.getElementById("input-data").value;
  var node = document.createElement("LI");               // Create a <li> node
  var textnode = document.createTextNode(value);         // Create a text node
  node.appendChild(textnode);                            // Append the text to <li>
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
    div.remove();
  }
  var totalItems = document.getElementsByTagName("li").length
  document.getElementById("leftItems").innerHTML = totalItems;
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
  var all = $("li");
  all.not(".checked").show();
  var totalItems = document.getElementsByTagName("li").length
  document.getElementById("leftItems").innerHTML = totalItems;
})

$("#all").click(() => {
  var all = $("li");
  all.show();
  var totalItems = document.getElementsByTagName("li").length
  document.getElementById("leftItems").innerHTML = totalItems;
})

$("#checkers").click(() => {
    var done = $("li");
    // done.hide();
    done.not(".checked").hide();
})

if ($(window).width() > 1200) {
  $("#mylist").sortable();
  $("#mylist").disableSelection();
}
