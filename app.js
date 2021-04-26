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
  $(".list1").toggleClass("dark-theme");
  $(".list1").toggleClass("light-theme");
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
  $(".list1").toggleClass("dark-theme");
  $(".list1").toggleClass("light-theme");
  $(".functions").toggleClass("dark-theme");
  $(".functions").toggleClass("light-theme");
})

list = []
function print() {
  value = document.getElementById("input-data").value;
  // console.log(value);
  list.push(value);
  console.log(list);

  list.map( (item) => {
    document.getElementById("output").innerHTML = text;
  })
}

// list.map( (item) => {
//   document.getElementById("output").innerHTML = item;
// })
