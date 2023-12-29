var crsr = document.querySelector("#crsr");
document.querySelector("#main").addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.clientX + "px";
  crsr.style.top = dets.clientY + "px";
});

// var dark = document.getElementById("#moon");
// var light = document.getElementById("#sun");
// var left1 = document.getElementById("#left1");
// var leftfirst = document.getElementById("#leftfirst");
// var leftsec = document.getElementById("#leftsec");
// var footer1 = document.getElementById("#footer1");
// var footer2 = document.getElementById("#footer2");

// console.log(confirm("Dark Mode ON"));
$("#left1>i").hover(
    function () {
      $("#crsr").css("width", "40px");
      $("#crsr").css("height", "40px");
      $("#crsr").css("transition", "all ease 0.3s");
    },
    function () {
      $("#crsr").css("width", "20px");
      $("#crsr").css("height", "20px");
      $("#crsr").css("transition", "none");
    }
  );

$("#dark").hover(
  function () {
    $("#crsr").css("width", "40px");
    $("#crsr").css("height", "40px");
    $("#crsr").css("transition", "all ease 0.3s");
  },
  function () {
    $("#crsr").css("width", "20px");
    $("#crsr").css("height", "20px");
    $("#crsr").css("transition", "none");
  }
);

$("#sun").hover(
  function () {
    $("#crsr").css("width", "40px");
    $("#crsr").css("height", "40px");
    $("#crsr").css("transition", "all ease 0.3s");
  },
  function () {
    $("#crsr").css("width", "20px");
    $("#crsr").css("height", "20px");
    $("#crsr").css("transition", "none");
  }
);
function darkmode() {
  if (confirm("Do You Want To ON Dark Mode ? ") == true) {
    $("#left1").css({ "background-color": "#092635" });
    $("#leftfirst").css({ "background-color": "#22092C" });
    $("#leftsec").css({ "background-color": "#040D12" });
    $("#footer1").css({ "background-color": "#1A120B" });
    $("#footer2").css({ "background-color": "#180A0A" });
    $("#dark").css({ display: "none" });
    $("#sun").css({ display: "initial" });
  }

}
function lightmode() {
    if (confirm("Do You Want To OFF Dark Mode ? ") == true){
        $("#left1").css({ "background-color": "#ffffff" });
        $("#leftfirst").css({ "background-color": "#9babc6" });
        $("#leftsec").css({ "background-color": "#425d8a" });
        $("#footer1").css({ "background-color": "#cbdffb" });
        $("#footer2").css({ "background-color": "#ffffff" });
        $("#dark").css({ display: "initial" });
        $("#sun").css({ display: "none" });
    }

}

document.querySelector("#dark").addEventListener("click", function () {
  darkmode();
});
document.querySelector("#sun").addEventListener("click", function () {
  lightmode();
});

gsap.from('#left1',{
    z:-500,
    opacity:0,
    duration:3,
    rotate:360
})
gsap.from('#leftfirst>h2,#leftfirst>h1',{
    y:-500,
    opacity:0,
    duration:3,
    rotate:180
})
gsap.from('#leftsec>h1',{
    y:-500,
    opacity:0,
    duration:3,
    rotate:180
})
gsap.from('#right',{
    y:-800,
    opacity:0,
    duration:3,
    // rotate:180
})
gsap.from('#footer',{
    y:500,
    opacity:0,
    duration:3,
    // rotate:180
})