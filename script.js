/* 
Please don't go any further! I'm cleaning it I swear! 
No... no please it's a mess! Let me clean it before you look at it!
That's not suppose to go there. I swear... 
and the recursive if statements... 
the if statements are just temporary...
until I have time to do it properly. I swear!

- Switching to buttons and then back to icons breaks icons size.
- Also breaks tab layout
- Buttons also don't work after a certain point
- Animation issue on scrolling causes o width elements and funky behavior when switching of scroll 
*/
var loadText = ["Fluffing pillows and propping cushions...","Stitching buttons to the HTML thingy doodad...","Napping... just for like... 2 seconds...","Another quick snooze...Zzzzzzzzzzzzz","Tufting upholstery...","Having a midnight snack...","Making the bed...","Oiling sliders so they don't squeak...","Deleting System32... Just kidding! Haha","Wow, okay this is taking a while...","Knitting all the preference sliders...","Making sure the matress is comfy...","Checking to see why everything is taking so long...","Getting a cup of hot coco and marshmallows...","Eating the last few packing peanuts...","Daydreaming..."]
var currentIndex = 0;
setInterval(function() {
    var randomIndex = Math.floor(Math.random() * loadText.length);
    var randomText = loadText[randomIndex];
    $("#loadtext").text(randomText);
}, 5000);

var imgWidth;
var imgSize = 100;
var gradAngle = 180;
var btnFont = 2;
var tabSpace = 0;
var storedPicker = "";
var btnW = 15;
var btnH = 4;
var btnBvl = 50;
var btnClr = 0;
var tgl = 0;
var imgLimit = "20rem";
var tblLineThick;
var anim = "scale";
var font1 = "Poppins:400,600,700";
var font2 = "Poppins:400,600,700";
var font3 = "Poppins:400,600,700";
var font4 = "Poppins:400,600,700";
var mnuPos = 1;
var btnPad;
var wdthStore;
var scheme = 1;
var ico = 0;

$(document).ready(function () {
  const hueRotate = () => {
    let angle = Math.floor(Math.random() * 360);
    while (angle > 30 && angle < 200) {
      angle = Math.floor(Math.random() * 360);
    }
    let initialPrimary = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--primary");

    initialPrimary = initialPrimary.substring(1);

    const primaryLight = chroma(`hsl(${angle}, 50%, 75% )`);
    const primary = chroma(`hsl(${angle}, 50%, 65%)`);
    const primaryDark = chroma(`hsl(${angle}, 50%, 55%)`);
    const initialHue = chroma(initialPrimary).hsl()[0];
    const newHue = primary.hsl()[0];
    const rotation = newHue - initialHue;
    document.documentElement.style.setProperty(
      "--primary-light",
      primaryLight.css()
    );
    document.documentElement.style.setProperty("--primary", primary.css());
    document.documentElement.style.setProperty(
      "--primary-scroll",
      primary.css()
    );
    document.documentElement.style.setProperty(
      "--primary-dark",
      primaryDark.css()
    );
    $(".placeholder").css({ filter: `hue-rotate(${rotation}deg)` });
    $("style").each(function () {
      $(this).html(
        $(this)
          .html()
          .replace(
            "--primary-light: #8abdff;",
            "--primary-light: " + primaryLight + ";"
          )
      );
      $(this).html(
        $(this)
          .html()
          .replace("--primary: #6d5dfc;", "--primary: " + primary + ";")
      );
      $(this).html(
        $(this)
          .html()
          .replace(
            "--primary-dark: #5b0eeb;",
            "--primary-dark: " + primaryDark + ";"
          )
      );
    });
  };
  hueRotate();

  $("[id^='bIcon']").on("click", function () {
	  storedPicker = $(this).attr("id");
  });
// Function to set the BG image to cover.
function setCover() {
  $("#main-container").css("background-size", "cover");
  $("#main-container").css("background-repeat", "no-repeat");
}
// Function to set the BG image to contain.
function setContain() {
  $("#main-container").css("background-size", "contain");
  $("#main-container").css("background-repeat", "no-repeat");
}
// Function to update the background img url.
$("#imgurl").on("change", function () {
  var img = new Image();
  var imgUrl = $(this).val();
  if (imgUrl == "") imgUrl = $("#imgurl").attr("placeholder");
  img.src = imgUrl;
  img.onload = function () {
    imgWidth = img.naturalWidth;
    var imgSize = $("#imgsize").data("value");
    var percent = (imgSize / 100) * imgWidth;
    $("#main-container").css("background-image", "url(" + imgUrl + ")");
    $("#main-container").css("background-size", percent + "px");
    setTile();
  };
});
// We're lazy so we're going to just trigger the background image change on load.

  $("#imgurl").trigger("change");
  $("#firstTable").colResizable({
    resizeMode: "flex",
  });

// Function to set the background image to tile.
function setTile() {
  var percent = (imgSize / 100) * imgWidth;

  $("#main-container").css("background-size", percent + "px");
  $("#main-container").css("background-repeat", "repeat");
}
// On load we get the placeholder and set that up. Again becase I'm lazy.

var imgUrl = $("#imgurl").val();
if (imgUrl == "") imgUrl = $("#imgurl").attr("placeholder");
$("#main-container").css("background-image", "url(" + imgUrl + ")");
//This will check the state of the #tab-1a, #tab-2a, #tab-3a on page load, and trigger the corresponding function.
$("#txt-left").on("click", function () {
  $("#navbar .btn").css("display","flex");
$("#storage .btn").css("display","flex");
$("#navbar .btn").css("justify-content","flex-start");
$("#storage .btn").css("justify-content","flex-start");
});
$("#txt-right").on("click", function () {
   $("#navbar .btn").css("display","flex");
$("#storage .btn").css("display","flex");
$("#navbar .btn").css("justify-content","flex-end");
$("#storage .btn").css("justify-content","flex-end"); 
});
$("#txt-mid").on("click", function () {
$("#navbar .btn").css("display","flex");
$("#storage .btn").css("display","flex");
$("#navbar .btn").css("justify-content","center");
$("#storage .btn").css("justify-content","center");
});
$("#tab-3a").on("click", function () {
  setCover();
});
$("#tab-3a").on("click", function () {
  setCover();
});
$("#tab-2a").on("click", function () {
  setContain();
});
$("#tab-1a").on("click", function () {
  setTile();
});
$("#tab-3a").on("click", function () {
  setCover();
});
$("#s-70-Tsft").on("click", function () {
  scheme = 1;
});
$("#s-70-Tscl").on("click", function () {
  scheme = 2;
});
$("#s-70-Tdrk").on("click", function () {
  scheme = 3;
});
$("#s-7-ico").click(function () {
  $("#17-not").css("display", "inline-block");
  $("#18-not").css("display", "none");
  $("#txtButtons").css("display", "inline-block");
  $("#txtIcons").css("display", "none");
});
$("#x-swch").click(function () {
  if ($("#x-swch-ico").css("display") === "none") {
    $("#x-swch-ico").css("display", "inline-block");
  } else {
    $("#x-swch-ico").css("display", "none");
  }
});
// tab 1 is the selection for having a bg img. We do that here when it's clicked.
$("#tab-1").click(function () {
  var imgUrl = $("#imgurl").val();
  if (imgUrl == "") imgUrl = $("#imgurl").attr("placeholder");
  $("#main-container").css("background-image", "url(" + imgUrl + ")");

  if ($("#tab-3a").is(":checked")) {
    setCover();
  } else if ($("#tab-2a").is(":checked")) {
    setContain();
  } else if ($("#tab-1a").is(":checked")) {
    setTile();
  }
});
// tab 2 is the selection for having a bg gradient.
$("#tab-2").on("click", function () {
  var color1 = $("#clr1").val();
  var color2 = $("#clr2").val();
  var angle = $("#grdang").data("value") + "deg";
  var gradient =
    "linear-gradient(" + angle + ", " + color1 + ", " + color2 + ")";
  $("#main-container").css("background-image", gradient);
  $("#main-container").css("background-repeat", "no-repeat");
  $("#main-container").css("background-size", "unset");
});
// Updating the gradient color.
$("#clr1, #clr2").on("input", function () {
  var color1 = $("#clr1").val();
  var color2 = $("#clr2").val();
  var angle = $("#grdang").data("value") + "deg";
  var gradient =
    "linear-gradient(" + angle + ", " + color1 + ", " + color2 + ")";
  $("#main-container").css("background-image", gradient);
});
$("#clr11").on("input", function () {
  $("#navbar").css("background-color", $("#clr11").val());
});
// This sets the font size of buttons (or icons)


// The sliders control a few different things. Here I lazily just shoehorn in cases for different sliders.
$(".slider__box").each(function () {
  $(this).on("mousedown", function (e) {
    if (!$(e.target).hasClass("slider__btn")) return;

    let angle;
    let $btn = $(e.target);
    let $container = $btn.closest(".slider__box");
    let $color = $container.find(".slider__color");
    let $tooltip = $container.find(".slider__tooltip");

    $btn.on("mouseover", function () {
      $tooltip.css("opacity", 1);
    });

    $btn.on("mouseout", function () {
      $tooltip.css("opacity", 0);
    });

    function onMouseMove(e) {
      e.preventDefault();
      let targetRect = $container[0].getBoundingClientRect();
      let x = e.pageX - targetRect.left + 10;
      if (x > targetRect.width) {
        x = targetRect.width;
      }
      if (x < 0) {
        x = 0;
      }
      $btn.css("left", x - 10 + "px");

      // get the position of the button inside the container (%)
      let percentPosition = ((x + 10) / targetRect.width) * 100;

      // color width = position of button (%)
      $color.css("width", percentPosition + "%");

      // move the tooltip when button moves, and show the tooltip
      $tooltip.css("left", x - 5 + "px");
      $tooltip.css("opacity", 1);

      // show the percentage or angle in the tooltip
      if ($tooltip.hasClass("angle__tooltip")) {
        // show the angle in the tooltip
        angle = Math.round((percentPosition * 360) / 100); // update angle here
        $tooltip.text(angle + "°");
        $tooltip.data("value", angle);
        var currentGradient =
          "linear-gradient(" +
          angle +
          "deg, " +
          $("#clr1").val() +
          ", " +
          $("#clr2").val() +
          ")";
        $("#main-container").css("background-image", currentGradient);
      } else {
        // show the percentage in the tooltip
        if ($tooltip.hasClass("double__tooltip")) {
          $tooltip.text(Math.round(percentPosition * 2) + "%");
          $tooltip.attr("data-value", Math.round(percentPosition * 2));
          imgSize = Math.round(percentPosition * 2);
          setTile();
        } else if ($tooltip.hasClass("slider__font")) {
          percentPosition = percentPosition / 10 / 2 + 1;
          $tooltip.text(percentPosition.toFixed(2));
          $tooltip.attr("data-value", percentPosition.toFixed(2));
          btnFont = percentPosition;
          	$("#navbar .btn p").css("font-size", btnFont + "rem");
	$("#storage .btn p").css("font-size", btnFont + "rem");
	$("#navbar .btn p i").css("font-size", btnFont + "rem");
	$("#storage .btn p i").css("font-size", btnFont + "rem");
        } else if ($tooltip.hasClass("slider__padLeft")) {
          percentPosition = percentPosition - 3.09;
          $tooltip.text(percentPosition.toFixed(2));
          $tooltip.attr("data-value", percentPosition.toFixed(2) + "%");
          $("#navbar").css("padding-left", percentPosition + "%");
        } else if ($tooltip.hasClass("slider__padRight")) {
          percentPosition = percentPosition - 3.09;
          $tooltip.text(percentPosition.toFixed(2));
          $tooltip.attr("data-value", percentPosition.toFixed(2) + "%");
          $("#navbar").css("padding-right", percentPosition + "%");
        } else if ($tooltip.hasClass("slider__mnuTop")) {
          percentPosition = percentPosition - 3.09;
          $tooltip.text(percentPosition.toFixed(2));
          $tooltip.attr("data-value", percentPosition.toFixed(2) + "%");
          $("#navbar").css("padding-top", percentPosition + "%");
        } else if ($tooltip.hasClass("slider__padBtn")) {
          percentPosition = percentPosition / 10 / 2 - 0.15;
          $tooltip.text(percentPosition.toFixed(2));
          $tooltip.attr("data-value", percentPosition.toFixed(2));
          btnPad = percentPosition;
          if (mnuPos === 3) {
            $("#navbar .btn, #storage .btn").css(
              "margin-left",
              percentPosition + "rem"
            );
            $("#navbar .btn, #storage .btn").css(
              "margin-right",
              percentPosition + "rem"
            );
            $("#navbar .btn, #storage .btn").css("margin-top", "0rem");
            $("#navbar .btn, #storage .btn").css("margin-bottom", "0rem");
          } else {
            $("#navbar .btn, #storage .btn").css(
              "margin-top",
              percentPosition + "rem"
            );
            $("#navbar .btn, #storage .btn").css(
              "margin-bottom",
              percentPosition + "rem"
            );
            $("#navbar .btn, #storage .btn").css("margin-left", "0rem");
            $("#navbar .btn, #storage .btn").css("margin-right", "0rem");
          }
        } else if ($tooltip.hasClass("slider__fontText")) {
          percentPosition = percentPosition / 10 / 3 + 0.5;
          $tooltip.text(percentPosition.toFixed(2));
          $tooltip.attr("data-value", percentPosition.toFixed(2));
          $(".editor").css("font-size", percentPosition + "rem");
        } else if ($tooltip.hasClass("slider__fontH1")) {
          percentPosition = percentPosition / 10 / 2 + 1;
          $tooltip.text(percentPosition.toFixed(2));
          $tooltip.attr("data-value", percentPosition.toFixed(2));
          $("#sub-container h1").css("font-size", percentPosition + "rem");
        } else if ($tooltip.hasClass("slider__fontH2")) {
          percentPosition = percentPosition / 10 / 3 + 1;
          $tooltip.text(percentPosition.toFixed(2));
          $tooltip.attr("data-value", percentPosition.toFixed(2));
          $(".editor h2").css("font-size", percentPosition + "rem");
        } else if ($tooltip.hasClass("slider__border")) {
          percentPosition = percentPosition / 5 - 0.62;
          $tooltip.text(percentPosition.toFixed(2));
          $tooltip.attr("data-value", percentPosition.toFixed(2));
          tblLineThick = percentPosition;
          if (percentPosition <= 0) {
            $(".editTable td, .editTable th").css(
              "border",
              "1px dashed #a495a3"
            );
          } else {
            $(".editTable td, .editTable th").css(
              "border",
              percentPosition + "px solid " + $("#clr9").val()
            );
          }
        } else if ($tooltip.hasClass("slider__round")) {
          percentPosition = percentPosition / 10 / 2 - 0.15;
          $tooltip.text(percentPosition.toFixed(2));
          $tooltip.attr("data-value", percentPosition.toFixed(2));
          $(".title").css(
            "border-radius",
            percentPosition + "rem " + percentPosition + "rem 0 0"
          );
          $(".editor").css(
            "border-radius",
            "0 0 " + percentPosition + "rem " + percentPosition + "rem"
          );
        } else if ($tooltip.hasClass("slider__cntPad")) {
          percentPosition = percentPosition - 3;
          percentPosition = percentPosition / 4;
          $tooltip.text(Math.round(percentPosition) + "%");
          $tooltip.attr("data-value", Math.round(percentPosition));
          $(".editor").css("padding-left", percentPosition + "%");
          $(".editor").css("padding-right", percentPosition + "%");
          percentPosition = Math.max(0, percentPosition - 1);
          $(".title").css("padding-left", percentPosition + "%");
          $(".title").css("padding-right", percentPosition + "%");
        } else if ($tooltip.hasClass("slider__btnW")) {
          percentPosition = percentPosition / 3 + 1;
          $tooltip.text(percentPosition.toFixed(2));
          $tooltip.attr("data-value", percentPosition.toFixed(2));
          btnW = percentPosition;
$("#navbar .btn").css("height", btnH + "rem");
  $("#storage .btn").css("height", btnH + "rem");
  $("#navbar .btn").css("border-radius", btnBvl + "rem");
  $("#storage .btn").css("border-radius", btnBvl + "rem");
  var menuSize = btnW.toFixed(2);
  var contSize = 100 - menuSize;
  console.log(mnuPos);
  if (mnuPos === 1) {
    $("#main-container").css(
      "grid-template-columns",
      menuSize + "% " + contSize + "%"
    );
    $("#navbar .btn").css("width", "100%");
    $("#navbar").css("height", "100%");
  } else if (mnuPos === 2) {
    var temp = contSize;
    contSize = menuSize;
    menuSize = temp;
    $("#main-container").css(
      "grid-template-columns",
      menuSize + "% " + contSize + "%"
    );
    $("#navbar .btn").css("width", "100%");
    $("#navbar").css("height", "100%");
  } else if (mnuPos === 3) {
    $("#navbar .btn").css("width", menuSize + "%");
	$("#storage .btn").css("width", menuSize + "%");
    $("#navbar").css("height", "auto");
  }
        } else if ($tooltip.hasClass("slider__opacity")) {
          percentPosition = percentPosition - 3;
          $tooltip.text(Math.round(percentPosition) + "%");
          $tooltip.attr("data-value", Math.round(percentPosition));
          var colorRGB = chroma($("#clr8").val()).rgb();
          var alpha = percentPosition / 100;
          var color =
            "rgba(" +
            colorRGB[0] +
            "," +
            colorRGB[1] +
            "," +
            colorRGB[2] +
            "," +
            alpha +
            ")";
          $(".title").css("background-color", color);
          $(".editor").css("background-color", color);
        } else if ($tooltip.hasClass("slider__opacity2")) {
          percentPosition = percentPosition - 3;
          $tooltip.text(Math.round(percentPosition) + "%");
          $tooltip.attr("data-value", Math.round(percentPosition));
          var colorRGB = chroma($("#clr10").val()).rgb();
          var alpha = percentPosition / 100;
          var color =
            "rgba(" +
            colorRGB[0] +
            "," +
            colorRGB[1] +
            "," +
            colorRGB[2] +
            "," +
            alpha +
            ")";
          $(".editor table").css("background-color", color);
        } else if ($tooltip.hasClass("slider_cntWidth")) {
          percentPosition = percentPosition - 3;
          $tooltip.text(Math.round(percentPosition) + "%");
          $tooltip.attr("data-value", Math.round(percentPosition));
          $("#sub-container").css("width", percentPosition + "%");
        } else if ($tooltip.hasClass("slider__btnH")) {
          percentPosition = percentPosition / 8 + 1;
          $tooltip.text(percentPosition.toFixed(2));
          $tooltip.attr("data-value", percentPosition.toFixed(2));
          btnH = percentPosition;
            $("#navbar .btn").css("height", btnH + "rem");
  $("#storage .btn").css("height", btnH + "rem");
  $("#navbar .btn").css("border-radius", btnBvl + "rem");
  $("#storage .btn").css("border-radius", btnBvl + "rem");
  var menuSize = btnW.toFixed(2);
  var contSize = 100 - menuSize;
  if (mnuPos === 1) {
    $("#main-container").css(
      "grid-template-columns",
      menuSize + "% " + contSize + "%"
    );
    $("#navbar .btn").css("width", "100%");
    $("#navbar").css("height", "100%");
  } else if (mnuPos === 2) {
    var temp = contSize;
    contSize = menuSize;
    menuSize = temp;
    $("#main-container").css(
      "grid-template-columns",
      menuSize + "% " + contSize + "%"
    );
    $("#navbar .btn").css("width", "100%");
    $("#navbar").css("height", "100%");
  } else if (mnuPos === 3) {
    $("#navbar .btn").css("width", menuSize + "%");
    $("#navbar").css("height", "auto");
  }
        } else if ($tooltip.hasClass("slider__btnBvl")) {
          percentPosition = percentPosition / 10 - 0.31;
          $tooltip.text(percentPosition.toFixed(2));
          $tooltip.attr("data-value", percentPosition.toFixed(2));
          btnBvl = percentPosition;
            $("#navbar .btn").css("height", btnH + "rem");
  $("#storage .btn").css("height", btnH + "rem");
  $("#navbar .btn").css("border-radius", btnBvl + "rem");
  $("#storage .btn").css("border-radius", btnBvl + "rem");
  var menuSize = btnW.toFixed(2);
  var contSize = 100 - menuSize;
  if (mnuPos === 1) {
    $("#main-container").css(
      "grid-template-columns",
      menuSize + "% " + contSize + "%"
    );
    $("#navbar .btn").css("width", "100%");
    $("#navbar").css("height", "100%");
  } else if (mnuPos === 2) {
    var temp = contSize;
    contSize = menuSize;
    menuSize = temp;
    $("#main-container").css(
      "grid-template-columns",
      menuSize + "% " + contSize + "%"
    );
    $("#navbar .btn").css("width", "100%");
    $("#navbar").css("height", "100%");
  } else if (mnuPos === 3) {
    $("#navbar .btn").css("width", menuSize + "%");
    $("#navbar").css("height", "auto");
  }
        } else if ($tooltip.hasClass("slider__space")) {
          percentPosition = percentPosition / 3 - 1.03;
          $tooltip.text(percentPosition.toFixed(2));
          $tooltip.attr("data-value", percentPosition.toFixed(2));
          tabSpace = percentPosition;
          $(".editor").css("margin-bottom", tabSpace + "rem");
        } else {
          $tooltip.text(Math.round(percentPosition) + "%");
          $tooltip.attr("data-value", Math.round(percentPosition));
        }
      }
    }
    $(document).on("mousemove", onMouseMove);
    $(document).on("mouseup", function () {
      $(document).off("mousemove", onMouseMove);
    });
  });
});
// This uses a method to relate id references to buttons so we can more easily add and hide content based on what the user is choosing.
;
  $(document).ready(function () {
  $(".clk").on("click", function (event) {
    const $target = $(event.target);
    const id = $target.attr("id");
    const focus = id.substring(2);
    const idParts = id.split("-");
    const behavior = idParts[0];
    const group = idParts[1];
    const reference = idParts[2];

    if (behavior === "t") {
		$(`[id^="${group}-"]`).each(function () {
		   if ($(this).attr("id") === "5-tabs") {
              $(this).css("display", "");
            } else if ($(this).css("display") === "none") {
              $(this).css("display", "inline-block");
            } else {
            $(this).css("display", "none");
          }
        });
    } else if (behavior === "s") {
      if ($(this).hasClass("show-n")) {
        $("#1-n").css("display", "inline-block");
      }
      if ($(this).hasClass("menu-button")) {
        $("#menu-button").css("display", "inline-block");
        $("#menu-icon").css("display", "none");
      }
      $(`[id^="${group}-"]`).each(function () {
        if ($(this).attr("id") === focus) {
          $(this).css("display", "inline-block");
        } else {
          $(this).css("display", "none");
        }
      });
    } else if (behavior === "x") {
      if ($(this).hasClass("menu-icon")) {
        $("#menu-icon").css("display", "inline-block");
        $("#menu-button").css("display", "none");
      }
      $(".form2").css("display", "inline-block");
      $("#7-ico").css("display", "inline-block");
    } else if (behavior === "a") {
      if ($("#" + focus).hasClass("grey")) {
        $("#" + focus).removeClass("grey");
      } else {
        $("#" + focus).addClass("grey");
      }
    }
  });

  ["1-n", "1-img", "0-Xbg"].forEach(function (idValue) {
    $(`[id^="${idValue}"]`).css("display", "inline-block");
  });

  [
    "1-clr",
    "1-grd",
    "5-not",
    "15-not",
    "7-scr",
    "11-not",
    "12-fix",
    "9-fix",
    "16-not",
    "18-not",
    "txtIcons",
    "97-adv",
  ].forEach(function (idValue) {
    $(`[id^="${idValue}"]`).css("display", "none");
  });

  $("#font")
    .fontselect()
    .change(function () {
      // replace + signs with spaces for css
      const font = $(this).val().replace(/\+/g, " ");
      // set the font for the body
      $("body").css("font-family", font);
      // set the font for the fontselect dropdown
      $(this).css("font-family", font);
    });
    
  WebFont.load({
  google: {
    families: [
      "Aclonica",
      "Allan",
      "Annie+Use+Your+Telescope",
      "Anonymous+Pro",
      "Allerta+Stencil",
      "Allerta",
      "Amaranth",
      "Anton",
      "Architects+Daughter",
      "Arimo",
      "Artifika",
      "Arvo",
      "Asset",
      "Astloch",
      "Bangers",
      "Bentham",
      "Bevan",
      "Bigshot+One",
      "Bowlby+One",
      "Bowlby+One+SC",
      "Brawler",
      "Buda:300",
      "Cabin",
      "Calligraffitti",
      "Candal",
      "Cantarell",
      "Cardo",
      "Carter One",
      "Caudex",
      "Cedarville+Cursive",
      "Cherry+Cream+Soda",
      "Chewy",
      "Coda",
      "Coming+Soon",
      "Copse",
      "Corben:700",
      "Cousine",
      "Covered+By+Your+Grace",
      "Crafty+Girls",
      "Crimson+Text",
      "Crushed",
      "Cuprum",
      "Damion",
      "Dancing+Script",
      "Dawning+of+a+New+Day",
      "Didact+Gothic",
      "Droid+Sans",
      "Droid+Sans+Mono",
      "Droid+Serif",
      "EB+Garamond",
      "Expletus+Sans",
      "Fontdiner+Swanky",
      "Forum",
      "Francois+One",
      "Geo",
      "Give+You+Glory",
      "Goblin+One",
      "Goudy+Bookletter+1911",
      "Gravitas+One",
      "Gruppo",
      "Hammersmith+One",
      "Holtwood+One+SC",
      "Homemade+Apple",
      "Inconsolata",
      "Indie+Flower",
      "IM+Fell+DW+Pica",
      "IM+Fell+DW+Pica+SC",
      "IM+Fell+Double+Pica",
      "IM+Fell+Double+Pica+SC",
      "IM+Fell+English",
      "IM+Fell+English+SC",
      "IM+Fell+French+Canon",
      "IM+Fell+French+Canon+SC",
      "IM+Fell+Great+Primer",
      "IM+Fell+Great+Primer+SC",
      "Irish+Grover",
      "Irish+Growler",
      "Istok+Web",
      "Josefin+Sans",
      "Josefin+Slab",
      "Judson",
      "Jura",
      "Jura:500",
      "Jura:600",
      "Just+Another+Hand",
      "Just+Me+Again+Down+Here",
      "Kameron",
      "Kenia",
      "Kranky",
      "Kreon",
      "Kristi",
      "La+Belle+Aurore",
      "Lato:100",
      "Lato:100italic",
      "Lato:300",
      "Lato",
      "Lato:bold",
      "Lato:900",
      "League+Script",
      "Lekton",
      "Limelight",
      "Lobster",
      "Lobster Two",
      "Lora",
      "Love+Ya+Like+A+Sister",
      "Loved+by+the+King",
      "Luckiest+Guy",
      "Maiden+Orange",
      "Mako",
      "Maven+Pro",
      "Maven+Pro:500",
      "Maven+Pro:700",
      "Maven+Pro:900",
      "Meddon",
      "MedievalSharp",
      "Megrim",
      "Merriweather",
      "Metrophobic",
      "Michroma",
      "Miltonian Tattoo",
      "Miltonian",
      "Modern Antiqua",
      "Monofett",
      "Molengo",
      "Mountains of Christmas",
      "Muli:300",
      "Muli",
      "Neucha",
      "Neuton",
      "News+Cycle",
      "Nixie+One",
      "Nobile",
      "Nova+Cut",
      "Nova+Flat",
      "Nova+Mono",
      "Nova+Oval",
      "Nova+Round",
      "Nova+Script",
      "Nova+Slim",
      "Nova+Square",
      "Nunito:light",
      "Nunito",
      "OFL+Sorts+Mill+Goudy+TT",
      "Old+Standard+TT",
      "Open+Sans:300",
      "Open+Sans",
      "Open+Sans:600",
      "Open+Sans:800",
      "Open+Sans+Condensed:300",
      "Orbitron",
      "Orbitron:500",
      "Orbitron:700",
      "Orbitron:900",
      "Oswald",
      "Over+the+Rainbow",
      "Reenie+Beanie",
      "Pacifico",
      "Patrick+Hand",
      "Paytone+One",
      "Permanent+Marker",
      "Philosopher",
      "Play",
      "Playfair+Display",
      "Podkova",
      "PT+Sans",
      "PT+Sans+Narrow",
      "PT+Sans+Narrow:regular,bold",
      "PT+Serif",
      "PT+Serif Caption",
      "Puritan",
      "Quattrocento",
      "Quattrocento+Sans",
      "Radley",
      "Raleway:100",
      "Redressed",
      "Rock+Salt",
      "Rokkitt",
      "Ruslan+Display",
      "Schoolbell",
      "Shadows+Into+Light",
      "Shanti",
      "Sigmar+One",
      "Six+Caps",
      "Slackey",
      "Smythe",
      "Sniglet:800",
      "Special+Elite",
      "Stardos+Stencil",
      "Sue+Ellen+Francisco",
      "Sunshiney",
      "Swanky+and+Moo+Moo",
      "Syncopate",
      "Tangerine",
      "Tenor+Sans",
      "Terminal+Dosis+Light",
      "The+Girl+Next+Door",
      "Tinos",
      "Ubuntu",
      "Ultra",
      "Unkempt",
      "UnifrakturCook:bold",
      "UnifrakturMaguntia",
      "Varela",
      "Varela Round",
      "Vibur",
      "Vollkorn",
      "VT323",
      "Waiting+for+the+Sunrise",
      "Wallpoet",
      "Walter+Turncoat",
      "Wire+One",
      "Yanone+Kaffeesatz",
      "Yanone+Kaffeesatz:300",
      "Yanone+Kaffeesatz:400",
      "Yanone+Kaffeesatz:700",
      "Yeseva+One",
      "Zeyada",
    ],
  },
});  
    
});

// Here we preload a bovine udder tonne of fonts for no other reason than making the user not have to wait for them to load when they click the font dropdown. Everything below until the next comment is font selection guff. Not mine.

/*
 * jQuery.fontselect - A font selector for the Google Web Fonts api
 * Tom Moor, http://tommoor.com
 * Copyright (c) 2011 Tom Moor
 * MIT Licensed
 * @version 0.1
 */

var fontSelectCounter = 0;
(function ($) {
  $.fn.fontselect = function (options) {
    var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    };

    var fonts = [
      "Aclonica",
      "Allan",
      "Annie+Use+Your+Telescope",
      "Anonymous+Pro",
      "Allerta+Stencil",
      "Allerta",
      "Amaranth",
      "Anton",
      "Architects+Daughter",
      "Arimo",
      "Artifika",
      "Arvo",
      "Asset",
      "Astloch",
      "Bangers",
      "Bentham",
      "Bevan",
      "Bigshot+One",
      "Bowlby+One",
      "Bowlby+One+SC",
      "Brawler",
      "Buda:300",
      "Cabin",
      "Calligraffitti",
      "Candal",
      "Cantarell",
      "Cardo",
      "Carter One",
      "Caudex",
      "Cedarville+Cursive",
      "Cherry+Cream+Soda",
      "Chewy",
      "Coda",
      "Coming+Soon",
      "Copse",
      "Corben:700",
      "Cousine",
      "Covered+By+Your+Grace",
      "Crafty+Girls",
      "Crimson+Text",
      "Crushed",
      "Cuprum",
      "Damion",
      "Dancing+Script",
      "Dawning+of+a+New+Day",
      "Didact+Gothic",
      "Droid+Sans",
      "Droid+Sans+Mono",
      "Droid+Serif",
      "EB+Garamond",
      "Expletus+Sans",
      "Fontdiner+Swanky",
      "Forum",
      "Francois+One",
      "Geo",
      "Give+You+Glory",
      "Goblin+One",
      "Goudy+Bookletter+1911",
      "Gravitas+One",
      "Gruppo",
      "Hammersmith+One",
      "Holtwood+One+SC",
      "Homemade+Apple",
      "Inconsolata",
      "Indie+Flower",
      "IM+Fell+DW+Pica",
      "IM+Fell+DW+Pica+SC",
      "IM+Fell+Double+Pica",
      "IM+Fell+Double+Pica+SC",
      "IM+Fell+English",
      "IM+Fell+English+SC",
      "IM+Fell+French+Canon",
      "IM+Fell+French+Canon+SC",
      "IM+Fell+Great+Primer",
      "IM+Fell+Great+Primer+SC",
      "Irish+Grover",
      "Irish+Growler",
      "Istok+Web",
      "Josefin+Sans",
      "Josefin+Slab",
      "Judson",
      "Jura",
      "Jura:500",
      "Jura:600",
      "Just+Another+Hand",
      "Just+Me+Again+Down+Here",
      "Kameron",
      "Kenia",
      "Kranky",
      "Kreon",
      "Kristi",
      "La+Belle+Aurore",
      "Lato:100",
      "Lato:100italic",
      "Lato:300",
      "Lato",
      "Lato:bold",
      "Lato:900",
      "League+Script",
      "Lekton",
      "Limelight",
      "Lobster",
      "Lobster Two",
      "Lora",
      "Love+Ya+Like+A+Sister",
      "Loved+by+the+King",
      "Luckiest+Guy",
      "Maiden+Orange",
      "Mako",
      "Maven+Pro",
      "Maven+Pro:500",
      "Maven+Pro:700",
      "Maven+Pro:900",
      "Meddon",
      "MedievalSharp",
      "Megrim",
      "Merriweather",
      "Metrophobic",
      "Michroma",
      "Miltonian Tattoo",
      "Miltonian",
      "Modern Antiqua",
      "Monofett",
      "Molengo",
      "Mountains of Christmas",
      "Muli:300",
      "Muli",
      "Neucha",
      "Neuton",
      "News+Cycle",
      "Nixie+One",
      "Nobile",
      "Nova+Cut",
      "Nova+Flat",
      "Nova+Mono",
      "Nova+Oval",
      "Nova+Round",
      "Nova+Script",
      "Nova+Slim",
      "Nova+Square",
      "Nunito:light",
      "Nunito",
      "OFL+Sorts+Mill+Goudy+TT",
      "Old+Standard+TT",
      "Open+Sans:300",
      "Open+Sans",
      "Open+Sans:600",
      "Open+Sans:800",
      "Open+Sans+Condensed:300",
      "Orbitron",
      "Orbitron:500",
      "Orbitron:700",
      "Orbitron:900",
      "Oswald",
      "Over+the+Rainbow",
      "Reenie+Beanie",
      "Pacifico",
      "Patrick+Hand",
      "Paytone+One",
      "Permanent+Marker",
      "Philosopher",
      "Play",
      "Playfair+Display",
      "Podkova",
      "PT+Sans",
      "PT+Sans+Narrow",
      "PT+Sans+Narrow:regular,bold",
      "PT+Serif",
      "PT+Serif Caption",
      "Puritan",
      "Quattrocento",
      "Quattrocento+Sans",
      "Radley",
      "Raleway:100",
      "Redressed",
      "Rock+Salt",
      "Rokkitt",
      "Ruslan+Display",
      "Schoolbell",
      "Shadows+Into+Light",
      "Shanti",
      "Sigmar+One",
      "Six+Caps",
      "Slackey",
      "Smythe",
      "Sniglet:800",
      "Special+Elite",
      "Stardos+Stencil",
      "Sue+Ellen+Francisco",
      "Sunshiney",
      "Swanky+and+Moo+Moo",
      "Syncopate",
      "Tangerine",
      "Tenor+Sans",
      "Terminal+Dosis+Light",
      "The+Girl+Next+Door",
      "Tinos",
      "Ubuntu",
      "Ultra",
      "Unkempt",
      "UnifrakturCook:bold",
      "UnifrakturMaguntia",
      "Varela",
      "Varela Round",
      "Vibur",
      "Vollkorn",
      "VT323",
      "Waiting+for+the+Sunrise",
      "Wallpoet",
      "Walter+Turncoat",
      "Wire+One",
      "Yanone+Kaffeesatz",
      "Yanone+Kaffeesatz:300",
      "Yanone+Kaffeesatz:400",
      "Yanone+Kaffeesatz:700",
      "Yeseva+One",
      "Zeyada",
    ];

    var settings = {
      style: "font-select",
      placeholder: "Select a font",
      lookahead: 2,
      api: "https://fonts.googleapis.com/css?family=",
    };

    var Fontselect = (function () {
      function Fontselect(original, o) {
        this.$original = $(original);
        this.options = o;
        this.active = false;
        this.setupHtml();
        this.getVisibleFonts();
        this.bindEvents();

        var font = this.$original.val();
        if (font) {
          this.updateSelected();
          this.addFontLink(font);
        }
      }

      Fontselect.prototype.bindEvents = function () {
        var self = this;
        // Close dropdown automatically on clicks outside dropdown
        $(document).click(function (event) {
          if (
            self.active &&
            !$(event.target).parents("#" + self.$element.attr("id")).length
          ) {
            self.toggleDrop();
          }
        });

        $("li", this.$results)
          .click(__bind(this.selectFont, this))
          .mouseenter(__bind(this.activateFont, this))
          .mouseleave(__bind(this.deactivateFont, this));

        $("span", this.$select).click(__bind(this.toggleDrop, this));
        this.$arrow.click(__bind(this.toggleDrop, this));
      };

      Fontselect.prototype.toggleDrop = function (ev) {
        if (this.active) {
          this.$element.removeClass("font-select-active");
          this.$drop.hide();
          clearInterval(this.visibleInterval);
        } else {
          this.$element.addClass("font-select-active");
          this.$drop.show();
          this.moveToSelected();
          this.visibleInterval = setInterval(
            __bind(this.getVisibleFonts, this),
            500
          );
        }

        this.active = !this.active;
      };

      Fontselect.prototype.selectFont = function () {
        var font = $("li.active", this.$results).data("value");
        this.$original.val(font).change();
        this.updateSelected();
        this.toggleDrop();
      };

      Fontselect.prototype.moveToSelected = function () {
        var $li,
          font = this.$original.val();

        if (font) {
          $li = $("li[data-value='" + font + "']", this.$results);
        } else {
          $li = $("li", this.$results).first();
        }

        this.$results.scrollTop($li.addClass("active")[0].offsetTop);
      };

      Fontselect.prototype.activateFont = function (ev) {
        $("li.active", this.$results).removeClass("active");
        $(ev.currentTarget).addClass("active");
      };

      Fontselect.prototype.deactivateFont = function (ev) {
        $(ev.currentTarget).removeClass("active");
      };

      Fontselect.prototype.updateSelected = function () {
        var font = this.$original.val();
        $("span", this.$element)
          .text(this.toReadable(font))
          .css(this.toStyle(font));
      };

      Fontselect.prototype.setupHtml = function () {
        this.$original.empty().hide();

        this.$element = $("<div>", {
          id: "fontSelect-" + fontSelectCounter,
          class: this.options.style,
        });

        this.$arrow = $("<div><b></b></div>");
        this.$select = $(
          "<a><span>" + this.options.placeholder + "</span></a>"
        );
        this.$drop = $("<div>", { class: "fs-drop" });
        this.$results = $("<ul>", { class: "fs-results" });
        this.$original.after(
          this.$element
            .append(this.$select.append(this.$arrow))
            .append(this.$drop)
        );
        this.$drop.append(this.$results.append(this.fontsAsHtml())).hide();
      };

      Fontselect.prototype.fontsAsHtml = function () {
        var l = fonts.length;
        var r,
          s,
          h = "";

        for (var i = 0; i < l; i++) {
          r = this.toReadable(fonts[i]);
          s = this.toStyle(fonts[i]);
          h +=
            '<li data-value="' +
            fonts[i] +
            '" style="font-family: ' +
            s["font-family"] +
            "; font-weight: " +
            s["font-weight"] +
            '">' +
            r +
            "</li>";
        }

        return h;
      };

      Fontselect.prototype.toReadable = function (font) {
        return font.replace(/[\+|:]/g, " ");
      };

      Fontselect.prototype.toStyle = function (font) {
        var t = font.split(":");
        return {
          "font-family": this.toReadable(t[0]),
          "font-weight": t[1] || 400,
        };
      };

      Fontselect.prototype.getVisibleFonts = function () {
        if (this.$results.is(":hidden")) return;

        var fs = this;
        var top = this.$results.scrollTop();
        var bottom = top + this.$results.height();

        if (this.options.lookahead) {
          var li = $("li", this.$results).first().height();
          bottom += li * this.options.lookahead;
        }

        $("li", this.$results).each(function () {
          var ft = $(this).position().top + top;
          var fb = ft + $(this).height();

          if (fb >= top && ft <= bottom) {
            var font = $(this).data("value");
            fs.addFontLink(font);
          }
        });
      };

      Fontselect.prototype.addFontLink = function (font) {
        var link = this.options.api + font;

        if ($("link[href*='" + font + "']").length === 0) {
          $("link:last").after(
            '<link href="' + link + '" rel="stylesheet" type="text/css">'
          );
        }
      };

      return Fontselect;
    })();

    return this.each(function () {
      // If options exist, lets merge them
      if (options) $.extend(settings, options);

      return new Fontselect(this, settings);
    });
    fontSelectCounter += 1;
  };
})(jQuery);
$(document).ready(function () {
  $(".font-selector")
    .fontselect()
    .change(function () {
      // ...
    });
});
(function () {
  var material_icons = [
    "3d_rotation",
    "ac_unit",
    "access_alarm",
    "access_alarms",
    "access_time",
    "accessibility",
    "accessible",
    "account_balance",
    "account_balance_wallet",
    "account_box",
    "account_circle",
    "adb",
    "add",
    "add_a_photo",
    "add_alarm",
    "add_alert",
    "add_box",
    "add_circle",
    "add_circle_outline",
    "add_location",
    "add_shopping_cart",
    "add_to_photos",
    "add_to_queue",
    "adjust",
    "airline_seat_flat",
    "airline_seat_flat_angled",
    "airline_seat_individual_suite",
    "airline_seat_legroom_extra",
    "airline_seat_legroom_normal",
    "airline_seat_legroom_reduced",
    "airline_seat_recline_extra",
    "airline_seat_recline_normal",
    "airplanemode_active",
    "airplanemode_inactive",
    "airplay",
    "airport_shuttle",
    "alarm",
    "alarm_add",
    "alarm_off",
    "alarm_on",
    "album",
    "all_inclusive",
    "all_out",
    "android",
    "announcement",
    "apps",
    "archive",
    "arrow_back",
    "arrow_downward",
    "arrow_drop_down",
    "arrow_drop_down_circle",
    "arrow_drop_up",
    "arrow_forward",
    "arrow_upward",
    "art_track",
    "aspect_ratio",
    "assessment",
    "assignment",
    "assignment_ind",
    "assignment_late",
    "assignment_return",
    "assignment_returned",
    "assignment_turned_in",
    "assistant",
    "assistant_photo",
    "attach_file",
    "attach_money",
    "attachment",
    "audiotrack",
    "autorenew",
    "av_timer",
    "backspace",
    "backup",
    "battery_alert",
    "battery_charging_full",
    "battery_full",
    "battery_std",
    "battery_unknown",
    "beach_access",
    "beenhere",
    "block",
    "bluetooth",
    "bluetooth_audio",
    "bluetooth_connected",
    "bluetooth_disabled",
    "bluetooth_searching",
    "blur_circular",
    "blur_linear",
    "blur_off",
    "blur_on",
    "book",
    "bookmark",
    "bookmark_border",
    "border_all",
    "border_bottom",
    "border_clear",
    "border_color",
    "border_horizontal",
    "border_inner",
    "border_left",
    "border_outer",
    "border_right",
    "border_style",
    "border_top",
    "border_vertical",
    "branding_watermark",
    "brightness_1",
    "brightness_2",
    "brightness_3",
    "brightness_4",
    "brightness_5",
    "brightness_6",
    "brightness_7",
    "brightness_auto",
    "brightness_high",
    "brightness_low",
    "brightness_medium",
    "broken_image",
    "brush",
    "bubble_chart",
    "bug_report",
    "build",
    "burst_mode",
    "business",
    "business_center",
    "cached",
    "cake",
    "call",
    "call_end",
    "call_made",
    "call_merge",
    "call_missed",
    "call_missed_outgoing",
    "call_received",
    "call_split",
    "call_to_action",
    "camera",
    "camera_alt",
    "camera_enhance",
    "camera_front",
    "camera_rear",
    "camera_roll",
    "cancel",
    "card_giftcard",
    "card_membership",
    "card_travel",
    "casino",
    "cast",
    "cast_connected",
    "center_focus_strong",
    "center_focus_weak",
    "change_history",
    "chat",
    "chat_bubble",
    "chat_bubble_outline",
    "check",
    "check_box",
    "check_box_outline_blank",
    "check_circle",
    "chevron_left",
    "chevron_right",
    "child_care",
    "child_friendly",
    "chrome_reader_mode",
    "class",
    "clear",
    "clear_all",
    "close",
    "closed_caption",
    "cloud",
    "cloud_circle",
    "cloud_done",
    "cloud_download",
    "cloud_off",
    "cloud_queue",
    "cloud_upload",
    "code",
    "collections",
    "collections_bookmark",
    "color_lens",
    "colorize",
    "comment",
    "compare",
    "compare_arrows",
    "computer",
    "confirmation_number",
    "contact_mail",
    "contact_phone",
    "contacts",
    "content_copy",
    "content_cut",
    "content_paste",
    "control_point",
    "control_point_duplicate",
    "copyright",
    "create",
    "create_new_folder",
    "credit_card",
    "crop",
    "crop_16_9",
    "crop_3_2",
    "crop_5_4",
    "crop_7_5",
    "crop_din",
    "crop_free",
    "crop_landscape",
    "crop_original",
    "crop_portrait",
    "crop_rotate",
    "crop_square",
    "dashboard",
    "data_usage",
    "date_range",
    "dehaze",
    "delete",
    "delete_forever",
    "delete_sweep",
    "description",
    "desktop_mac",
    "desktop_windows",
    "details",
    "developer_board",
    "developer_mode",
    "device_hub",
    "devices",
    "devices_other",
    "dialer_sip",
    "dialpad",
    "directions",
    "directions_bike",
    "directions_boat",
    "directions_bus",
    "directions_car",
    "directions_railway",
    "directions_run",
    "directions_subway",
    "directions_transit",
    "directions_walk",
    "disc_full",
    "dns",
    "do_not_disturb",
    "do_not_disturb_alt",
    "do_not_disturb_off",
    "do_not_disturb_on",
    "dock",
    "domain",
    "done",
    "done_all",
    "donut_large",
    "donut_small",
    "drafts",
    "drag_handle",
    "drive_eta",
    "dvr",
    "edit",
    "edit_location",
    "eject",
    "email",
    "enhanced_encryption",
    "equalizer",
    "error",
    "error_outline",
    "euro_symbol",
    "ev_station",
    "event",
    "event_available",
    "event_busy",
    "event_note",
    "event_seat",
    "exit_to_app",
    "expand_less",
    "expand_more",
    "explicit",
    "explore",
    "exposure",
    "exposure_neg_1",
    "exposure_neg_2",
    "exposure_plus_1",
    "exposure_plus_2",
    "exposure_zero",
    "extension",
    "face",
    "fast_forward",
    "fast_rewind",
    "favorite",
    "favorite_border",
    "featured_play_list",
    "featured_video",
    "feedback",
    "fiber_dvr",
    "fiber_manual_record",
    "fiber_new",
    "fiber_pin",
    "fiber_smart_record",
    "file_download",
    "file_upload",
    "filter",
    "filter_1",
    "filter_2",
    "filter_3",
    "filter_4",
    "filter_5",
    "filter_6",
    "filter_7",
    "filter_8",
    "filter_9",
    "filter_9_plus",
    "filter_b_and_w",
    "filter_center_focus",
    "filter_drama",
    "filter_frames",
    "filter_hdr",
    "filter_list",
    "filter_none",
    "filter_tilt_shift",
    "filter_vintage",
    "find_in_page",
    "find_replace",
    "fingerprint",
    "first_page",
    "fitness_center",
    "flag",
    "flare",
    "flash_auto",
    "flash_off",
    "flash_on",
    "flight",
    "flight_land",
    "flight_takeoff",
    "flip",
    "flip_to_back",
    "flip_to_front",
    "folder",
    "folder_open",
    "folder_shared",
    "folder_special",
    "font_download",
    "format_align_center",
    "format_align_justify",
    "format_align_left",
    "format_align_right",
    "format_bold",
    "format_clear",
    "format_color_fill",
    "format_color_reset",
    "format_color_text",
    "format_indent_decrease",
    "format_indent_increase",
    "format_italic",
    "format_line_spacing",
    "format_list_bulleted",
    "format_list_numbered",
    "format_paint",
    "format_quote",
    "format_shapes",
    "format_size",
    "format_strikethrough",
    "format_textdirection_l_to_r",
    "format_textdirection_r_to_l",
    "format_underlined",
    "forum",
    "forward",
    "forward_10",
    "forward_30",
    "forward_5",
    "free_breakfast",
    "fullscreen",
    "fullscreen_exit",
    "functions",
    "g_translate",
    "gamepad",
    "games",
    "gavel",
    "gesture",
    "get_app",
    "gif",
    "golf_course",
    "gps_fixed",
    "gps_not_fixed",
    "gps_off",
    "grade",
    "gradient",
    "grain",
    "graphic_eq",
    "grid_off",
    "grid_on",
    "group",
    "group_add",
    "group_work",
    "hd",
    "hdr_off",
    "hdr_on",
    "hdr_strong",
    "hdr_weak",
    "headset",
    "headset_mic",
    "healing",
    "hearing",
    "help",
    "help_outline",
    "high_quality",
    "highlight",
    "highlight_off",
    "history",
    "home",
    "hot_tub",
    "hotel",
    "hourglass_empty",
    "hourglass_full",
    "http",
    "https",
    "image",
    "image_aspect_ratio",
    "import_contacts",
    "import_export",
    "important_devices",
    "inbox",
    "indeterminate_check_box",
    "info",
    "info_outline",
    "input",
    "insert_chart",
    "insert_comment",
    "insert_drive_file",
    "insert_emoticon",
    "insert_invitation",
    "insert_link",
    "insert_photo",
    "invert_colors",
    "invert_colors_off",
    "iso",
    "keyboard",
    "keyboard_arrow_down",
    "keyboard_arrow_left",
    "keyboard_arrow_right",
    "keyboard_arrow_up",
    "keyboard_backspace",
    "keyboard_capslock",
    "keyboard_hide",
    "keyboard_return",
    "keyboard_tab",
    "keyboard_voice",
    "kitchen",
    "label",
    "label_outline",
    "landscape",
    "language",
    "laptop",
    "laptop_chromebook",
    "laptop_mac",
    "laptop_windows",
    "last_page",
    "launch",
    "layers",
    "layers_clear",
    "leak_add",
    "leak_remove",
    "lens",
    "library_add",
    "library_books",
    "library_music",
    "lightbulb_outline",
    "line_style",
    "line_weight",
    "linear_scale",
    "link",
    "linked_camera",
    "list",
    "live_help",
    "live_tv",
    "local_activity",
    "local_airport",
    "local_atm",
    "local_bar",
    "local_cafe",
    "local_car_wash",
    "local_convenience_store",
    "local_dining",
    "local_drink",
    "local_florist",
    "local_gas_station",
    "local_grocery_store",
    "local_hospital",
    "local_hotel",
    "local_laundry_service",
    "local_library",
    "local_mall",
    "local_movies",
    "local_offer",
    "local_parking",
    "local_pharmacy",
    "local_phone",
    "local_pizza",
    "local_play",
    "local_post_office",
    "local_printshop",
    "local_see",
    "local_shipping",
    "local_taxi",
    "location_city",
    "location_disabled",
    "location_off",
    "location_on",
    "location_searching",
    "lock",
    "lock_open",
    "lock_outline",
    "looks",
    "looks_3",
    "looks_4",
    "looks_5",
    "looks_6",
    "looks_one",
    "looks_two",
    "loop",
    "loupe",
    "low_priority",
    "loyalty",
    "mail",
    "mail_outline",
    "map",
    "markunread",
    "markunread_mailbox",
    "memory",
    "menu",
    "merge_type",
    "message",
    "mic",
    "mic_none",
    "mic_off",
    "mms",
    "mode_comment",
    "mode_edit",
    "monetization_on",
    "money_off",
    "monochrome_photos",
    "mood",
    "mood_bad",
    "more",
    "more_horiz",
    "more_vert",
    "motorcycle",
    "mouse",
    "move_to_inbox",
    "movie",
    "movie_creation",
    "movie_filter",
    "multiline_chart",
    "music_note",
    "music_video",
    "my_location",
    "nature",
    "nature_people",
    "navigate_before",
    "navigate_next",
    "navigation",
    "near_me",
    "network_cell",
    "network_check",
    "network_locked",
    "network_wifi",
    "new_releases",
    "next_week",
    "nfc",
    "no_encryption",
    "no_sim",
    "not_interested",
    "note",
    "note_add",
    "notifications",
    "notifications_active",
    "notifications_none",
    "notifications_off",
    "notifications_paused",
    "offline_pin",
    "ondemand_video",
    "opacity",
    "open_in_browser",
    "open_in_new",
    "open_with",
    "pages",
    "pageview",
    "palette",
    "pan_tool",
    "panorama",
    "panorama_fish_eye",
    "panorama_horizontal",
    "panorama_vertical",
    "panorama_wide_angle",
    "party_mode",
    "pause",
    "pause_circle_filled",
    "pause_circle_outline",
    "payment",
    "people",
    "people_outline",
    "perm_camera_mic",
    "perm_contact_calendar",
    "perm_data_setting",
    "perm_device_information",
    "perm_identity",
    "perm_media",
    "perm_phone_msg",
    "perm_scan_wifi",
    "person",
    "person_add",
    "person_outline",
    "person_pin",
    "person_pin_circle",
    "personal_video",
    "pets",
    "phone",
    "phone_android",
    "phone_bluetooth_speaker",
    "phone_forwarded",
    "phone_in_talk",
    "phone_iphone",
    "phone_locked",
    "phone_missed",
    "phone_paused",
    "phonelink",
    "phonelink_erase",
    "phonelink_lock",
    "phonelink_off",
    "phonelink_ring",
    "phonelink_setup",
    "photo",
    "photo_album",
    "photo_camera",
    "photo_filter",
    "photo_library",
    "photo_size_select_actual",
    "photo_size_select_large",
    "photo_size_select_small",
    "picture_as_pdf",
    "picture_in_picture",
    "picture_in_picture_alt",
    "pie_chart",
    "pie_chart_outlined",
    "pin_drop",
    "place",
    "play_arrow",
    "play_circle_filled",
    "play_circle_outline",
    "play_for_work",
    "playlist_add",
    "playlist_add_check",
    "playlist_play",
    "plus_one",
    "poll",
    "polymer",
    "pool",
    "portable_wifi_off",
    "portrait",
    "power",
    "power_input",
    "power_settings_new",
    "pregnant_woman",
    "present_to_all",
    "print",
    "priority_high",
    "public",
    "publish",
    "query_builder",
    "question_answer",
    "queue",
    "queue_music",
    "queue_play_next",
    "radio",
    "radio_button_checked",
    "radio_button_unchecked",
    "rate_review",
    "receipt",
    "recent_actors",
    "record_voice_over",
    "redeem",
    "redo",
    "refresh",
    "remove",
    "remove_circle",
    "remove_circle_outline",
    "remove_from_queue",
    "remove_red_eye",
    "remove_shopping_cart",
    "reorder",
    "repeat",
    "repeat_one",
    "replay",
    "replay_10",
    "replay_30",
    "replay_5",
    "reply",
    "reply_all",
    "report",
    "report_problem",
    "restaurant",
    "restaurant_menu",
    "restore",
    "restore_page",
    "ring_volume",
    "room",
    "room_service",
    "rotate_90_degrees_ccw",
    "rotate_left",
    "rotate_right",
    "rounded_corner",
    "router",
    "rowing",
    "rss_feed",
    "rv_hookup",
    "satellite",
    "save",
    "scanner",
    "schedule",
    "school",
    "screen_lock_landscape",
    "screen_lock_portrait",
    "screen_lock_rotation",
    "screen_rotation",
    "screen_share",
    "sd_card",
    "sd_storage",
    "search",
    "security",
    "select_all",
    "send",
    "sentiment_dissatisfied",
    "sentiment_neutral",
    "sentiment_satisfied",
    "sentiment_very_dissatisfied",
    "sentiment_very_satisfied",
    "settings",
    "settings_applications",
    "settings_backup_restore",
    "settings_bluetooth",
    "settings_brightness",
    "settings_cell",
    "settings_ethernet",
    "settings_input_antenna",
    "settings_input_component",
    "settings_input_composite",
    "settings_input_hdmi",
    "settings_input_svideo",
    "settings_overscan",
    "settings_phone",
    "settings_power",
    "settings_remote",
    "settings_system_daydream",
    "settings_voice",
    "share",
    "shop",
    "shop_two",
    "shopping_basket",
    "shopping_cart",
    "short_text",
    "show_chart",
    "shuffle",
    "signal_cellular_4_bar",
    "signal_cellular_connected_no_internet_4_bar",
    "signal_cellular_no_sim",
    "signal_cellular_null",
    "signal_cellular_off",
    "signal_wifi_4_bar",
    "signal_wifi_4_bar_lock",
    "signal_wifi_off",
    "sim_card",
    "sim_card_alert",
    "skip_next",
    "skip_previous",
    "slideshow",
    "slow_motion_video",
    "smartphone",
    "smoke_free",
    "smoking_rooms",
    "sms",
    "sms_failed",
    "snooze",
    "sort",
    "sort_by_alpha",
    "spa",
    "space_bar",
    "speaker",
    "speaker_group",
    "speaker_notes",
    "speaker_notes_off",
    "speaker_phone",
    "spellcheck",
    "star",
    "star_border",
    "star_half",
    "stars",
    "stay_current_landscape",
    "stay_current_portrait",
    "stay_primary_landscape",
    "stay_primary_portrait",
    "stop",
    "stop_screen_share",
    "storage",
    "store",
    "store_mall_directory",
    "straighten",
    "streetview",
    "strikethrough_s",
    "style",
    "subdirectory_arrow_left",
    "subdirectory_arrow_right",
    "subject",
    "subscriptions",
    "subtitles",
    "subway",
    "supervisor_account",
    "surround_sound",
    "swap_calls",
    "swap_horiz",
    "swap_vert",
    "swap_vertical_circle",
    "switch_camera",
    "switch_video",
    "sync",
    "sync_disabled",
    "sync_problem",
    "system_update",
    "system_update_alt",
    "tab",
    "tab_unselected",
    "tablet",
    "tablet_android",
    "tablet_mac",
    "tag_faces",
    "tap_and_play",
    "terrain",
    "text_fields",
    "text_format",
    "textsms",
    "texture",
    "theaters",
    "thumb_down",
    "thumb_up",
    "thumbs_up_down",
    "time_to_leave",
    "timelapse",
    "timeline",
    "timer",
    "timer_10",
    "timer_3",
    "timer_off",
    "title",
    "toc",
    "today",
    "toll",
    "tonality",
    "touch_app",
    "toys",
    "track_changes",
    "traffic",
    "train",
    "tram",
    "transfer_within_a_station",
    "transform",
    "translate",
    "trending_down",
    "trending_flat",
    "trending_up",
    "tune",
    "turned_in",
    "turned_in_not",
    "tv",
    "unarchive",
    "undo",
    "unfold_less",
    "unfold_more",
    "update",
    "usb",
    "verified_user",
    "vertical_align_bottom",
    "vertical_align_center",
    "vertical_align_top",
    "vibration",
    "video_call",
    "video_label",
    "video_library",
    "videocam",
    "videocam_off",
    "videogame_asset",
    "view_agenda",
    "view_array",
    "view_carousel",
    "view_column",
    "view_comfy",
    "view_compact",
    "view_day",
    "view_headline",
    "view_list",
    "view_module",
    "view_quilt",
    "view_stream",
    "view_week",
    "vignette",
    "visibility",
    "visibility_off",
    "voice_chat",
    "voicemail",
    "volume_down",
    "volume_mute",
    "volume_off",
    "volume_up",
    "vpn_key",
    "vpn_lock",
    "wallpaper",
    "warning",
    "watch",
    "watch_later",
    "wb_auto",
    "wb_cloudy",
    "wb_incandescent",
    "wb_iridescent",
    "wb_sunny",
    "wc",
    "web",
    "web_asset",
    "weekend",
    "whatshot",
    "widgets",
    "wifi",
    "wifi_lock",
    "wifi_tethering",
    "work",
    "wrap_text",
    "youtube_searched_for",
    "zoom_in",
    "zoom_out",
    "zoom_out_map",
  ];

  $('input[type="text"].use-material-icon-picker').each(function () {
    // Add the current icon as a prefix, and update when the field changes.
    $(this).before(
      '<i class="material-icons material-icon-picker-prefix prefix"></i>'
    );
    $(this).on("change keyup", function () {
      $(this).prev().text($(this).val());
    });
    $(this).prev().text($(this).val());
    // Append the picker and the search box.
    var $picker = $("#pickerWindow");
    var $search = $("#pickerSearch");
    // Do simple filtering based on the search.
    $search.on("keyup", function () {
      var search = $search.val().toLowerCase();
      var $icons = $(this).siblings(".icons");
      $icons.find("i").css("display", "none");
      $icons.find("i:contains(" + search + ")").css("display", "inline-block");
    });
    $(document).on("click", ".material-icons", function () {
      $("#" + storedPicker)
        .val($(this).text())
        .trigger("change");
      var number = $("#" + storedPicker)
        .attr("id")
        .split("bIcon")[1];
      $("#nvbtn" + number + " p i").text($(this).text());
      $("#icon-menu").fadeOut(200);
    });
    // Show the picker when the input field gets focus

    $(this).on("focusin", function () {
      storedPicker = $(this).attr("id");
      $("#icon-menu").fadeIn(200);
    });
  });
  // Hide any picker when it or the input field loses focus.
  $(document).on("mousedown", function (e) {
    var $picker = $(".material-icon-picker");
    if (
      $picker.length &&
      !$picker.is(e.target) &&
      !$(e.target).hasClass("use-material-icon-picker") &&
      $picker.has(e.target).length === 0
    ) {
      $("#icon-menu").fadeOut(200);
    }
  });
})();
// This is the colour formatting code for the shamelessly stolen rich-text editor. But I didn't like how they limited you to a pallet so we recoded it to be a colour-picker.



$("#copy1").on("click", function () {
  navigator.clipboard.writeText($("#code-html").text());
});
$("#copy2").on("click", function () {
  navigator.clipboard.writeText($("#code-css").text());
});
$("#copy3").on("click", function () {
  navigator.clipboard.writeText($("#code-js").text());
});
$("#animoff").on("click", function () {
  if (anim != 0) {
    anim = 0;
    $(".editor, .title").removeClass(
      "fade-out fade-in slide-in slide-out scale-out scale-in"
    );
  } else {
    if ($("tab-1d").is(":checked")) {
      anim = "scale";
      $(".editor, .title").addClass("scale-out scale-in");
      $(".editor, .title").removeClass("fade-out fade-in slide-in slide-out");
    } else if ($("tab-2d").is(":checked")) {
      anim = "slide";
      $(".editor, .title").addClass("slide-out slide-in");
      $(".editor, .title").removeClass("fade-out fade-in scale-in scale-out");
    } else if ($("tab-3d").is(":checked")) {
      anim = "fade";
      $(".editor, .title").addClass("fade-out fade-in");
      $(".editor, .title").removeClass("slide-out slide-in scale-in scale-out");
    }
  }
});
$("#s-13-anim1").on("click", function () {
  anim = "scale";
  $(".editor, .title").addClass("scale-out scale-in");
  $(".editor, .title").removeClass("fade-out fade-in slide-out slide-in");
});
$("#s-13-anim2").on("click", function () {
  anim = "slide";
  $(".editor, .title").addClass("slide-out slide-in");
  $(".editor, .title").removeClass("fade-out fade-in scale-out scale-in");
});
$("#s-13-anim3").on("click", function () {
  anim = "fade";
  $(".editor, .title").addClass("fade-out fade-in");
  $(".editor, .title").removeClass("slide-out slide-in scale-out scale-in");
});
$("#clearcache").on("click", function () {

    var result = prompt("This will remove all your content and reset the editor to defaults. Are you sure you wish to do this? You will lose all changes. Type 'purge' to confirm. ");
    if (result === "purge") {
        localStorage.clear();
      window.location.reload()
    }
});

$("[id^='nvbtn']").on("click", function () {
  var number = this.id.slice(-1);
  var h1Id = "#h1-" + number;
  var editorId = "#editor-" + number;
  var delay;
  if (anim === 0) {
    delay = 0;
  } else {
    delay = 300;
  }
  if ($(editorId).hasClass("shown")) {
  } else {
    $(".shown").removeClass("slide-in scale-in fade-in");
    $(h1Id).removeClass("slide-in scale-in fade-in");
    $(editorId).removeClass("slide-in scale-in fade-in");

    setTimeout(function () {
      $(".shown").hide();
      $(".shown").removeClass("shown");
      $(h1Id).show();
      $(editorId).show();
      setTimeout(function () {
        $(h1Id).addClass("shown");
        $(h1Id).addClass(anim + "-in");
        $(editorId).addClass(anim + "-in");
        $(editorId).addClass("shown");
      }, delay / 10);
    }, delay);
  }
});
$(".editor").addClass("scale-out scale-in");
$(".title").addClass("scale-out scale-in");
interact("img")
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },

    listeners: {
      move(event) {
        var target = event.target;
        var x = parseFloat(target.getAttribute("data-x")) || 0;
        var y = parseFloat(target.getAttribute("data-y")) || 0;

        // update the element's style
        target.style.width = event.rect.width + "px";
        target.style.height = event.rect.height + "px";

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.transform = "translate(" + x + "px," + y + "px)";

        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
        target.textContent =
          Math.round(event.rect.width) +
          "\u00D7" +
          Math.round(event.rect.height);
      },
    },
    modifiers: [
      interact.modifiers.aspectRatio({
        ratio: "preserve",
      }),
      interact.modifiers.restrictSize({
        min: { width: 50, height: 50 },
      }),
    ],

    inertia: true,
  })
  .draggable({
    listeners: { move: window.dragMoveListener },
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "parent",
        endOnly: true,
      }),
    ],
  });
});
jQuery(function () {
  function handleColor(value) {
    // Check if value is a valid hex color
    if (chroma.valid(value)) {
      return value;
    }

    // Check if value starts with a # and remove leading space if present
    if (value[0] === "#") {
      if (value[1] === " ") {
        value = value.slice(1);
      }
      return value;
    }

    // Check if value is in rgb() format and convert to hex
    if (value.startsWith("rgb(")) {
      let hex = chroma(value).hex();
      return hex;
    }

    // Throw an error if value is not a valid color
    throw new Error(`Error: couldn't check & convert the value: ${value}`);
  }
  var OprimaryLight = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--primary-light");
  var Oprimary = getComputedStyle(document.documentElement).getPropertyValue(
    "--primary"
  );
  var OprimaryScroll = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--primary-scroll");
  var OprimaryDark = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--primary-dark");
  var OgreyLight1 = getComputedStyle(document.documentElement).getPropertyValue(
    "--greyLight-1"
  );
  var OgreyLight2 = getComputedStyle(document.documentElement).getPropertyValue(
    "--greyLight-2"
  );
  var OgreyLight3 = getComputedStyle(document.documentElement).getPropertyValue(
    "--greyLight-3"
  );
  var OgreyLightScroll = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--greyLight-scroll");
  var OgreyDark = getComputedStyle(document.documentElement).getPropertyValue(
    "--greyDark"
  );
  var Owhite = getComputedStyle(document.documentElement).getPropertyValue(
    "--greyDark"
  );

  $("#theme").on("click", function () {
    var c1 = $("#clr13").val();
    var c2 = $("#clr14").val();
    var primaryLight = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--primary-light");
    var primary = getComputedStyle(document.documentElement).getPropertyValue(
      "--primary"
    );
    var primaryScroll = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--primary-scroll");
    var primaryDark = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--primary-dark");
    var greyLight1 = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--greyLight-1");
    var greyLight2 = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--greyLight-2");
    var greyLight3 = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--greyLight-3");
    var greyLightScroll = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--greyLight-scroll");
    var greyDark = getComputedStyle(document.documentElement).getPropertyValue(
      "--greyDark"
    );
    var white = getComputedStyle(document.documentElement).getPropertyValue(
      "--white"
    );

    primaryLight = handleColor(primaryLight);
    primary = handleColor(primary);
    primaryDark = handleColor(primaryDark);
    primaryScroll = handleColor(primaryScroll);
    greyLight1 = handleColor(greyLight1);
    greyLight2 = handleColor(greyLight2);
    greyLight3 = handleColor(greyLight3);
    greyLightScroll = handleColor(greyLightScroll);
    greyDark = handleColor(greyDark);

    switch (scheme) {
      case 1:
        primaryLight = chroma(OprimaryLight).hsl();
        primary = chroma(Oprimary).hsl();
        primaryScroll = chroma(OprimaryScroll).hsl();
        primaryDark = chroma(OprimaryDark).hsl();
        greyLight1 = chroma(OgreyLight1).hsl();
        greyLight2 = chroma(OgreyLight2).hsl();
        greyLight3 = chroma(OgreyLight3).hsl();
        greyLightScroll = chroma(OgreyLightScroll).hsl();
        greyDark = chroma(OgreyDark).hsl();
        white = chroma(Owhite).hsl();
        c1 = chroma(c1).hsl();
        c2 = chroma(c2).hsl();

        // Create the 9 new colors
        var newPrimary = chroma.hsl(c1[0], primary[1], primary[2]);
        var newPrimaryScroll = chroma.hsl(
          c1[0],
          primaryScroll[1],
          primaryScroll[2]
        );
        var newPrimaryLight = chroma.hsl(
          c1[0],
          primaryLight[1],
          primaryLight[2]
        );
        var newPrimaryDark = chroma.hsl(c1[0], primaryDark[1], primaryDark[2]);
        var newGreyLight1 = chroma.hsl(c2[0], greyLight1[1], greyLight1[2]);
        var newGreyLight2 = chroma.hsl(c2[0], greyLight2[1], greyLight2[2]);
        var newGreyLight3 = chroma.hsl(c2[0], greyLight3[1], greyLight3[2]);
        var newGreyLightScroll = chroma.hsl(
          c2[0],
          greyLightScroll[1],
          greyLightScroll[2]
        );
        var newWhite = chroma.hsl(c2[0], white[1], white[2]);
        newGreyDark = chroma.hsl(c2[0], greyDark[1], greyDark[2]);

        break;
      case 2:
        var scale = chroma.bezier([c1, c2]).scale();
        var colors = scale.colors(4);
        var L30 = colors.every(function (c) {
          return c.l < 0.3;
        });
        var G60 = colors.every(function (c) {
          return c.l > 0.5;
        });
        if (L30) {
          var TopClr = colors[colors.length - 1];
          var TopClrLum = chroma(TopClr).luminance();
          TopClrLum += 0.1;
          TopClr = chroma(TopClr).luminance(TopClrLum);
          TopClr = TopClr.brighten().saturate();
        } else if (G60) {
          var BotClr = colors[0];
          var BotClrLum = chroma(BotClr).luminance();
          BotClrLum -= 0.3;
          BotClr = chroma(BotClr).luminance(BotClrLum);
          BotClr = BotClr.darken(2);
        }
        colors.forEach(function (c, i) {
          colors[i] = chroma(c).hex();
        });
        colors.sort(function (a, b) {
          return a.l - b.l;
        });
        var newPrimary = colors[colors.length - 1];
        var newPrimaryScroll = newPrimary;
        var newPrimaryDark = colors[0];
        var newPrimaryLight = colors[1];
        var TopClr = colors.reduce(function (prev, current) {
          return current.l > prev.l ? current : prev;
        });

        var TopClrLum = chroma(TopClr).luminance();
        TopClrLum += 0.1;
        chroma(TopClr).luminance(TopClrLum);
        chroma(TopClr).brighten().saturate();
        var newGreyLight1 = chroma(TopClr).brighten(1).desaturate(0.4);
        var newGreyLightScroll = newGreyLight1;
        var newGreyLight2 = chroma(newGreyLight1).darken(0.3).desaturate(0.8);
        var newGreyLight3 = chroma(newGreyLight2).darken(0.3).desaturate(0.8);
        var newGreyDark = chroma(newGreyLight3).saturate(0.35).darken(1);
        var newWhite = chroma(newGreyLight1).brighten(1).desaturate(0.5);

        newPrimary = chroma(newPrimary).hsl();
        newPrimaryLight = chroma(newPrimaryLight).hsl();
        newPrimaryDark = chroma(newPrimaryDark).hsl();

        break;
      default:
        primaryLight = chroma(OprimaryLight).hsl();
        primary = chroma(Oprimary).hsl();
        primaryScroll = chroma(OprimaryScroll).hsl();
        primaryDark = chroma(OprimaryDark).hsl();
        greyLight1 = chroma(OgreyLight1).hsl();
        greyLight2 = chroma(OgreyLight2).hsl();
        greyLight3 = chroma(OgreyLight3).hsl();
        greyLightScroll = chroma(OgreyLightScroll).hsl();
        greyDark = chroma(OgreyDark).hsl();
        c1 = chroma(c1).hsl();
        c2 = chroma(c2).hsl();
        var newWhite = "0,0,0,1";
        var newPrimary = chroma.hsl(c1[0], primary[1], primary[2]);
        
        var newPrimaryScroll = chroma.hsl(
          c1[0],
          primaryScroll[1],
          primaryScroll[2]
        );
        var newPrimaryLight = chroma.hsl(
          c1[0],
          primaryLight[1],
          primaryLight[2]
        );
        var newPrimaryDark = chroma.hsl(c1[0], primaryDark[1], primaryDark[2]);
        var newGreyLight1 = chroma.hsl(c2[0], greyLight1[1], greyLight1[2]);
        var newGreyLight2 = chroma.hsl(c2[0], greyLight2[1], greyLight2[2]);
        var newGreyLight3 = chroma.hsl(c2[0], greyLight3[1], greyLight3[2]);
        var newGreyLightScroll = chroma.hsl(
          c1[0],
          greyLightScroll[1],
          greyLightScroll[2]
        );
        var newGreyDark = chroma.hsl(c1[0], greyDark[1], greyDark[2]);
        // Create a dark mode version of the colors
        var newPrimaryDark = chroma(newPrimaryDark).darken(3);
        var newGreyLight1 = chroma(newGreyLight1).darken(4.5);
        var newGreyLight2 = chroma(c2).darken(2);
        var newGreyLight3 = chroma(newGreyLight3).darken(2);
        var newGreyLightScroll = chroma(newGreyLightScroll).darken(3);
        var newGreyDark = chroma(newGreyDark).darken(1);
       
    }
    primaryLight = chroma(chroma.hsl(newPrimaryLight).hex());
    primary = chroma(chroma.hsl(newPrimary).hex());
    
    primaryScroll = chroma(chroma.hsl(newPrimaryScroll).hex());
    primaryDark = chroma(chroma.hsl(newPrimaryDark).hex());
    greyLight1 = chroma(chroma.hsl(newGreyLight1).hex());
    greyLight2 = chroma(chroma.hsl(newGreyLight2).hex());
    greyLight3 = chroma(chroma.hsl(newGreyLight3).hex());
    greyLightScroll = chroma(chroma.hsl(newGreyLightScroll).hex());
    greyDark = chroma(chroma.hsl(newGreyDark).hex());
    white = chroma(chroma.hsl(newWhite).hex());
    
    var picker_primary = ["clr4","clr1","back-color-picker","clr3", "clr12", "clr6", "clr16"].forEach(function (
      id
    ) {
      $("#" + id).val(primary);
    });
    var picker_secondary = ["clr5","clr2","fore-color-picker", "clr7", "clr15", "clr9"].forEach(function (
      id
    ) {
      $("#" + id).val(primaryDark);
    });
    var picker_grey1 = ["clr8"].forEach(function (id) {
      $("#" + id).val(greyLight1);
    });
    var picker_greyDark = ["clr11", "clr10"].forEach(function (id) {
      $("#" + id).val(greyDark);
    });

    document.documentElement.style.setProperty(
      "--primary", primary);
    document.documentElement.style.setProperty(
      "--primary-scroll",
      primary
    );
    document.documentElement.style.setProperty(
      "--primary-light",
      primaryLight
    );
    document.documentElement.style.setProperty(
      "--primary-dark",
     primaryDark
    );
    document.documentElement.style.setProperty(
      "--greyLight-1",
      greyLight1
    );
    document.documentElement.style.setProperty(
      "--greyLight-scroll",
      greyLightScroll
    );
    document.documentElement.style.setProperty(
      "--greyLight-2",
      greyLight2
    );
    document.documentElement.style.setProperty(
      "--greyLight-3",
      greyLight3
    );
    document.documentElement.style.setProperty(
      "--greyDark",
      greyDark
    );
    document.documentElement.style.setProperty(
      "--white",
     white
    );
  });
});
$("#customcss-box").on("input", function () {
  var customCSS = $(this).val();
  var existingStylesheet = $("#customcss");
  if (existingStylesheet.length) {
    existingStylesheet.html(customCSS);
  } else {
    $("<style>", {
      id: "customcss",
      html: customCSS,
    }).appendTo("head");
  }
  var allSelectors = customCSS.split("}");
  allSelectors.forEach(function (selector) {
    if (selector.trim() != "") {
      var sel = selector.split("{")[0].trim();
      var css = selector.split("{")[1].trim();
      $(sel).css(css);
    }
  });
});
var timeout;
// Listen for changes to the page
$(document).on("input change click", "body *", function () {
  clearTimeout(timeout);
  timeout = setTimeout(savePage, 2000);
});
function savePage() {
  var bodyData = $("#main-wrapper").html();
  var umbrella = $("#tri").html();
  var customStyle = $("#customcss").html();
  var appliedStyle = $("#defaultcss").html();

localStorage.setItem("bodyData",bodyData);
localStorage.setItem("umbrella",triData); 
localStorage.setItem("imgWidth",imgWidth);
localStorage.setItem("gradAngle",gradAngle);  
localStorage.setItem("imgWidth",imgWidth);
localStorage.setItem("gradAngle",gradAngle);
localStorage.setItem("btnFont",btnFont);
localStorage.setItem("tabSpace",tabSpace);
localStorage.setItem("storedPicker",storedPicker);
localStorage.setItem("btnW",btnW);
localStorage.setItem("btnH",btnH);
localStorage.setItem("btnBvl",btnBvl);
localStorage.setItem("btnClr",btnClr);
localStorage.setItem("tgl",tgl);
localStorage.setItem("imgLimit",imgLimit);
localStorage.setItem("tblLineThick",tblLineThick);
localStorage.setItem("anim",anim);
localStorage.setItem("font1",font1);
localStorage.setItem("font2",font2);
localStorage.setItem("font3",font3);
localStorage.setItem("font4",font4);
localStorage.setItem("mnuPos",mnuPos);
localStorage.setItem("btnPad",btnPad);
localStorage.setItem("wdthStore",wdthStore);
localStorage.setItem("scheme",scheme);
localStorage.setItem("ico",ico);

localStorage.setItem("css1",customStyle);
localStorage.setItem("css2",appliedStyle);

    $("#saved").addClass("saving");
    setTimeout(function () {
      $("#saved").removeClass("saving");
    }, 2000);
  };

$(document).ready(function () {
  // Check if data exists in local storage

  if (localStorage.getItem("bodyData") !== null) {
    // Retrieve the stored HTML
    var bodyData = localStorage.getItem("bodyData");
    var umbrella = localStorage.getItem("triData");

imgWidth = localStorage.getItem("imgWidth");
imgSize = localStorage.getItem("imgSize");
gradAngle = localStorage.getItem("gradAngle");
btnFont = localStorage.getItem("btnFont");
tabSpace = localStorage.getItem("tabSpace");
storedPicker = localStorage.getItem("storedPicker");
btnW = localStorage.getItem("btnW");
btnH = localStorage.getItem("btnH");
btnBvl = localStorage.getItem("btnBvl");
btnClr = localStorage.getItem("btnClr");
tgl = localStorage.getItem("tgl");
imgLimit = localStorage.getItem("imgLimit ");
tblLineThick = localStorage.getItem("tblLineThick");
anim = localStorage.getItem("anim");
font1 = localStorage.getItem("font1");
font2 = localStorage.getItem("font2");
font3 = localStorage.getItem("font3");
font4 = localStorage.getItem("font4");
mnuPos = localStorage.getItem("mnuPos");
btnPad = localStorage.getItem("btnPad ");
wdthStore = localStorage.getItem("wdthStore");
scheme = localStorage.getItem("scheme");
ico = localStorage.getItem("ico");
	
	customStyle = localStorage.getItem("css1");
	defaultStyle = localStorage.getItem("css2");
	
	$("#defaultcss").html(defaultStyle);
	$("#customcss").html(customStyle);
    // Replace the inner HTML of the #body element with the stored data
    $("#main-wrapper").html(bodyData);
    $("#tri").html(umbrella);
  }
  
});
function setupToolbar() {
  // Get references to the color picker inputs
  let backPicker = $("#back-color-picker");
  let forePicker = $("#fore-color-picker");

  // Listen for changes on the color picker inputs
  backPicker.on("input", function () {
    // Get the current selected color
    let color = $(this).val();
    // Create a command event to backcolor
    $(this).data("command", "backcolor");
    $(this).data("value", color);
    //Trigger the click event
    $(this).trigger("click");
  });

  forePicker.on("input", function () {
    // Get the current selected color
    let color = $(this).val();
    // Create a command event to forecolor
    $(this).data("command", "forecolor");
    $(this).data("value", color);
    //Trigger the click event
    $(this).trigger("click");
  });

  // Keep the existing click event
  $(".toolbar a, #back-color-picker, #fore-color-picker").click(function (e) {
    var command = $(this).data("command");
    if (command == "h1" || command == "h2" || command == "p") {
      document.execCommand("formatBlock", false, command);
    }
    if (command == "forecolor" || command == "backcolor") {
      document.execCommand(
        $(this).data("command"),
        false,
        $(this).data("value")
      );
    }
    if (command == "createlink") {
      url = prompt("Enter the link here: ", "http://");
      document.execCommand($(this).data("command"), false, url);
    } else if (command == "insertimage") {
    } else {
      document.execCommand($(this).data("command"), false, null);
    }
  });
  
    $("#fore-color-picker,#back-color-picker").on("change", function () {
    var selectedColor = $(this).val();
    $(this).css("color", selectedColor);
  });
  
  function getCaretCharacterOffsetWithin(element) {
  var caretOffset = 0;
  var doc = element.ownerDocument || element.document;
  var win = doc.defaultView || doc.parentWindow;
  var sel;
  if (typeof win.getSelection != "undefined") {
    sel = win.getSelection();
    if (sel.rangeCount > 0) {
      var range = win.getSelection().getRangeAt(0);
      var preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      caretOffset = preCaretRange.toString().length;
    }
  } else if ((sel = doc.selection) && sel.type != "Control") {
    var textRange = sel.createRange();
    var preCaretTextRange = doc.body.createTextRange();
    preCaretTextRange.moveToElementText(element);
    preCaretTextRange.setEndPoint("EndToEnd", textRange);
    caretOffset = preCaretTextRange.text.length;
  }
  return caretOffset;
}
  $("a[data-command='InsertPref']").on("click", function () {
    console.log("Activating")
  var sel = window.getSelection();
  var range = sel.getRangeAt(0);
  var editor = range.startContainer.parentNode;

  if (!$(editor).hasClass("editor")) {
    editor = $(editor).closest(".editor");
  }
  if (editor.length === 0) {
    alert(
      "Cannot find where you want the preferences to be placed. Please make sure you are selecting an area inside the editor window before pressing the button. Please try again."
    );
    return;
  }

  var prefpoint = $("#body i[class='fa fa-sliders'][id='prefpoint']");
  if (prefpoint.length > 0) {
    if (
      confirm(
        "You already have the preferences placeholder on the page. Would you like to move it to the newly selected location?"
      )
    ) {
      prefpoint.remove();
      var newRange = range.cloneRange();
      var icon = document.createElement("i");
      icon.classList.add("fa", "fa-sliders");
      icon.setAttribute("id", "prefpoint");
      icon.setAttribute(
        "title",
        "Preferences will be inserted wherever this icon is."
      );
      newRange.insertNode(icon);
    }
  } else {
    var newRange = range.cloneRange();
    var icon = document.createElement("i");
    icon.classList.add("fa", "fa-sliders");
    icon.setAttribute("id", "prefpoint");
    icon.setAttribute(
      "title",
      "Preferences will be inserted wherever this icon is."
    );
    newRange.insertNode(icon);
  }
});
$("a[data-command='insertimage']").on("click", function () {
  var sel = window.getSelection();
  var range = sel.getRangeAt(0);
  var editor = range.startContainer.parentNode;

  if (editor.length === 0) {
    alert(
      "Cannot find where you want the profile image to be placed. Please make sure you are selecting an area inside the editor window before pressing the button. Please try again."
    );
    return;
  }
  var url = prompt("Enter the link here: ", "http://");
  var title = prompt(
    "Enter any text you wish you have appear when the image is hovered over",
    ""
  );
  var img = $("<img>").attr("src", url);
  var newRange = range.cloneRange();
  var img = document.createElement("img");
  img.setAttribute("src", url);
  img.setAttribute("title", title);
  newRange.insertNode(img);
  
});

$("a[data-command='ProfileImage']").on("click", function () {
  var sel = window.getSelection();
  var range = sel.getRangeAt(0);
  var editor = range.startContainer.parentNode;

  if (!$(editor).hasClass("editor")) {
    editor = $(editor).closest(".editor");
  }
  if (editor.length === 0) {
    alert(
      "Cannot find where you want the profile image to be placed. Please make sure you are selecting an area inside the editor window before pressing the button. Please try again."
    );
    return;
  }
  var newRange = range.cloneRange();
  var icon = document.createElement("i");
  icon.classList.add("fa", "fa-id-badge");
  icon.setAttribute(
    "title",
    "A copy of the image you uploaded to your profile will be inserted here."
  );
  icon.setAttribute("id", "imgpoint");
  newRange.insertNode(icon);
});
$("a[data-command='InsertUmbrella']").on("click", function () {
  if ($(".triangle-container").hasClass("user")) {
    var previousText = $(".triangle-text").text();
    var replace = confirm(
      "Do you wish to replace your previous umbrella text? Your previous text was: " +
        previousText
    );
    if (replace) {
      url = prompt("Enter your word/s here." + "☂️", "Leave blank to remove");
      if (url === "Leave blank to remove" || url === "") {
        $(".triangle-container").removeClass("user");
		$(".triangle-text").text("Enabled ;)");
      } else {
        $(".triangle-text").text(url);
      }
    }
  } else {
    url = prompt("Enter your word/s here." + "☂️", "Leave blank to remove");
    $(".triangle-text").text(url);
    $(".triangle-text").text("☂️" + url);
  }
  $(".triangle-container").addClass("user");
});
// Popup stuff for closing the code window.

  // Select the popup-close button and the modal element
  let $popupClose = $(".popup-close");
  let $modal = $(".popup");

  // Add a click event listener to the popup-close button
  $popupClose.on("click", function () {
    // Hide the modal by setting the display property to 'none'
    $modal.css("display", "none");
    $("#toolbar").css("display", "block");
  });

// Folding menu.

  $("#collapse-button").click(function () {
    if ($("#sidebar").hasClass("collapsed")) {
      $("#collapse-button").html("<i class='fas fa-angle-double-left'></i>");
      $("#sidebar").removeClass("collapsed");
      $("#collapse-button").removeClass("collapsed");
      $("#toolbar").removeClass("collapsed");
      $(".spacer").removeClass("collapsed");
    } else {
      $("#collapse-button").html("<i class='fas fa-angle-double-right'></i>");
      $("#sidebar").addClass("collapsed");
      $("#collapse-button").addClass("collapsed");
      $("#toolbar").addClass("collapsed");
      $(".spacer").addClass("collapsed");
    }
  });

$("#s-1-img").on("click", function () {
  $("1-n").css("display", "inline-block");
});
// If you just want a single color bg.
$("#tab-3").on("click", function () {
  $("#main-container").css("background-image", "none");
  $("#main-container").css("background-color", $("#clr3").val());
});
$("#clr3").on("input", function () {
  $("#main-container").css("background-color", $(this).val());
});
$("#clr15").on("input", function () {
  var c = $(this).val();
  document.documentElement.style.setProperty("--primary-scroll", c);
});
$("#clr16").on("input", function () {
  var c = $(this).val();
  document.documentElement.style.setProperty("--greyLight-scroll", c);
});
// Updating the editor window font & colors
$("#fnt1").on("change", function () {
  var selectedFont = $(this).val();
  font1 = selectedFont;
  selectedFont = selectedFont.replace(/\+/g, " ");
  var fontName = selectedFont.split(":")[0];
  var fontWeight = selectedFont.split(":")[1];
  $(".editor").css("font-family", selectedFont + ",sans-serif");
  $(".editor").css("font-family", fontName + ",sans-serif");
  if (fontWeight) {
    $(".editor").css("font-weight", fontWeight);
  }
});
$("#fnt2").on("change", function () {
  var selectedFont = $(this).val();
  font2 = selectedFont;
  selectedFont = selectedFont.replace(/\+/g, " ");
  var fontName = selectedFont.split(":")[0];
  var fontWeight = selectedFont.split(":")[1];
  $(".title").css("font-family", selectedFont + ",sans-serif");
  $(".title").css("font-family", fontName + ",sans-serif");
  if (fontWeight) {
    $(".title").css("font-weight", fontWeight);
  }
});
$("#fnt3").on("change", function () {
  var selectedFont = $(this).val();
  font3 = selectedFont;
  selectedFont = selectedFont.replace(/\+/g, " ");
  var fontName = selectedFont.split(":")[0];
  var fontWeight = selectedFont.split(":")[1];
  $("#navbar .btn, #storage .btn").css("font-family", fontName + ",sans-serif");
  if (fontWeight) {
    $("#navbar .btn, #storage .btn").css("font-weight", fontWeight);
  }
});
$("#fnt4").on("change", function () {
  var selectedFont = $(this).val();
  font4 = selectedFont;
  selectedFont = selectedFont.replace(/\+/g, " ");
  var fontName = selectedFont.split(":")[0];
  var fontWeight = selectedFont.split(":")[1];
  $(".editor h2").css("font-family", fontName + ",sans-serif");
  if (fontWeight) {
    $(".editor h2").css("font-weight", fontWeight);
  }
});
$("#clr4").on("input", function () {
  $("#main-container").css("color", $(this).val());
});
$("#clr5").on("input", function () {
  $("#main-container h1").css("color", $(this).val());
});
// Sorting the editors into order. Mainly for if a user wants to scroll navigate.
  function sortEditors() {
    var editorElements = $("#sub-container .editor");
    var nvbtnElements = $("#navbar .nvbtn");
    var numbers = editorElements
      .map(function () {
        return parseInt(this.id.replace("editor-", ""));
      })
      .get();
    numbers.sort(function (a, b) {
      return a - b;
    });

    $.each(numbers, function (index, number) {
      var editorId = "#editor-" + number;
      var buttonId = "#nvbtn" + number;
      var h1Id = "#h1-" + number;
      $(editorId).appendTo("#sub-container");
      $(buttonId).appendTo("#navbar");
      $(h1Id).insertBefore(editorId);
    });
  }
  $("#taboff").on("change", function () {
    if (!$(this).is(":checked")) {
      var elementIds = [
        "h1-2",
        "h1-3",
        "h1-4",
        "h1-5",
        "h1-6",
        "h1-7",
        "h1-8",
        "editor-2",
        "editor-3",
        "editor-4",
        "editor-5",
        "editor-6",
        "editor-7",
        "editor-8",
        "nvbtn1",
        "nvbtn2",
        "nvbtn3",
        "nvbtn4",
        "nvbtn5",
        "nvbtn6",
        "nvbtn7",
        "nvbtn8",
      ];
      for (var i = 0; i < elementIds.length; i++) {
        $("#" + elementIds[i]).appendTo("#storage");
      }
      wdthStore = $("#navbar").css("width");
      $("#navbar").css("width", "0");
    } else {
      var tabOnChecked = false;
      for (var i = 2; i <= 7; i++) {
        if ($("#tabOn-" + i).is(":checked")) {
          tabOnChecked = true;
          var editorId = "editor-" + i;
          var h1Id = "h1-" + i;
          var btnId = "nvbtn" + i;
          $("#" + editorId).prependTo("#sub-container");
          $("#" + h1Id).insertBefore("#" + editorId);
          $("#" + btnId).appendTo("#navbar");
          $("#navbar").css("width", wdthStore);
          sortEditors();
        }
      }
      if (!tabOnChecked) {
        $(
          "#nvbtn1, #nvbtn2, #nvbtn3, #nvbtn4, #nvbtn5, #nvbtn6, #nvbtn7, #nvbtn8"
        ).appendTo("#storage");
      }
    }
  });

  $("[id^='tabOn-']").on("change", function () {
    var number = this.id.slice(-1);
    var editorId = "editor-" + number;
    var h1Id = "h1-" + number;
    var btnId = "nvbtn" + number;
    var checkbox = $(this).prev("input[type='checkbox']");
    if ($(this).prop("checked")) {
      $("#" + editorId).prependTo("#sub-container");
      $("#" + h1Id).insertBefore("#" + editorId);
      $("#" + btnId).appendTo("#navbar");
	  if (ico === 1){
      $("#nvbtn" + number + " p i").text($("bIcon" + number).closest( "i" ).text());
["#bIcon1","#bIcon2","#bIcon3","#bIcon4","#bIcon5","#bIcon6","#bIcon7"].forEach(function (icon, index) {
    var getIcon = $(icon).val();
    var number = index + 1;
    $("#nvbtn" + number + " p i").text(getIcon);
});
	  }
      sortEditors();
    } else {
      $("#" + editorId).appendTo("#storage");
      $("#" + h1Id).appendTo("#storage");
      $("#" + btnId).appendTo("#storage");
    }

    var tabOnChecked = false;
    for (var i = 2; i <= 7; i++) {
      if ($("#tabOn-" + i).is(":checked")) {
        tabOnChecked = true;
        break;
      }
    }

    if (!tabOnChecked) {
      $("#nvbtn1").appendTo("#storage");
      $("#editor-1").css("display", "block");
      $("#h1-1").css("display", "block");
      var VisibilityReset = [
        "h1-2",
        "h1-3",
        "h1-4",
        "h1-5",
        "h1-6",
        "h1-7",
        "h1-8",
        "editor-2",
        "editor-3",
        "editor-4",
        "editor-5",
        "editor-6",
        "editor-7",
        "editor-8",
      ];
      for (var i = 0; i < VisibilityReset.length; i++) {
        $("#" + VisibilityReset[i]).css("display", "none");
      }
    }
  });

//Code for updating the navbar buttons.
$("input[id^='6-tab'].form__input").change(function () {
  var number = $(this).attr("id").split("6-tab")[1];
  var newValue = $(this).val();

  $("#h1-" + number).text(newValue);
  if (ico === 1) {
    
  } else {
	  $("#nvbtn" + number + " p").text(newValue);
  }

});
var editors = $(".editor");

$("#x-7-ico").on("click", function () {
	ico = 1;
  $("#main-container").off("DOMNodeInserted", visibilityBehaviour);
  $(".editor").css("margin-bottom", "0");
  $("#7-scr").css("display", "none");
  
  if(mnuPos === 3) {
	  $("#navbar").css("display", "flex");
  } else {
	  $("#navbar").css("display", "inline-block");
  }
  
  $(".btn p", "#navbar, #storage").empty();
  $(".btn p", "#navbar, #storage").append("<i class='material-icons'></i>");

  $(".btn", "#navbar, #storage").each(function () {
    var buttonId = $(this).attr("id");
    var bIconId = "#bIcon" + [buttonId.slice(-1)];
    var bIconValue = $(bIconId).val();
    $(this).find("i").text(bIconValue);
	console.log("We're setting the icons");
    $("#navbar .btn p").css("font-size", btnFont + "rem");
	$("#storage .btn p").css("font-size", btnFont + "rem");
	$("#navbar .btn p i").css("font-size", btnFont + "rem");
	$("#storage .btn p i").css("font-size", btnFont + "rem");
  });
["#bIcon1","#bIcon2","#bIcon3","#bIcon4","#bIcon5","#bIcon6","#bIcon7"].forEach(function (icon, index) {
    var getIcon = $(icon).val();
    var number = index + 1;
    $("#nvbtn" + number + " p i").text(getIcon);
});
  
 
  
  var VisibilityReset = [
    "h1-2",
    "h1-3",
    "h1-4",
    "h1-5",
    "h1-6",
    "h1-7",
    "h1-8",
    "editor-2",
    "editor-3",
    "editor-4",
    "editor-5",
    "editor-6",
    "editor-7",
    "editor-8",
  ];
  for (var i = 0; i < VisibilityReset.length; i++) {
    $("#" + VisibilityReset[i]).css("display", "none");
  }
  $("[id^='tabOn-']").trigger("change");
});
$("#s-7-ico").on("click", function () {
	ico = 0;
  $("#main-container").off("DOMNodeInserted", visibilityBehaviour);
  $(".editor").css("margin-bottom", "0");
  $("#navbar").css("display", "inline-block");
  //  $(".title").css("position", "absolute");
  //  $(".editor").css("position", "absolute");
  $(".btn p i", "#navbar, #storage").remove();
  $(".btn", "#navbar, #storage").each(function () {
    var buttonId = $(this).attr("id");
    var number = buttonId.slice(-1);
    var tabValue = $("#6-tab" + number).val();
    if (tabValue == "") tabValue = $("#6-tab" + number).attr("placeholder");
    $(this).find("p").text(tabValue);
  });
  var VisibilityReset = [
    "h1-2",
    "h1-3",
    "h1-4",
    "h1-5",
    "h1-6",
    "h1-7",
    "h1-8",
    "editor-2",
    "editor-3",
    "editor-4",
    "editor-5",
    "editor-6",
    "editor-7",
    "editor-8",
  ];
  for (var i = 0; i < VisibilityReset.length; i++) {
    $("#" + VisibilityReset[i]).css("display", "none");
  }
  $("[id^='tabOn-']").trigger("change");
});
var visibilityBehaviour = function (e) {
  if ($(e.target).hasClass("title") || $(e.target).hasClass("editor")) {
    $(e.target).css("display", "block");
  } else if ($(e.target).hasClass("btn")) {
    $(e.target).appendTo("#storage");
  }
};
$("#s-7-scr").on("click", function () {
	ico = 0;
  // Move all .btn elements inside #navbar to #storage
  $("#navbar .btn").appendTo("#storage");
  $("#navbar").css("display", "none");
  //  $(".title").css("position", "inherit");
  //  $(".editor").css("position", "inherit");
  // Make all .title & .editor elements in #sub-container visible
  $("#sub-container .title, #sub-container .editor").css("display", "block");

  // Watch for new .title and .editor elements being added to sub-container and sets them to visible
  $("#main-container").on("DOMNodeInserted", visibilityBehaviour);
});
$("#t-9-fix").on("click", function () {
  if ($("#main-container").css("background-attachment") === "fixed") {
    $("#main-container").css("background-attachment", "local");
  } else {
    $("#main-container").css("background-attachment", "fixed");
  }
});
$("#mnu-left").on("click", function () {
  mnuPos = 1;
    if (mnuPos === 3) {
    $("#navbar .btn, #storage .btn").css("margin-left", btnPad + "rem");
    $("#navbar .btn, #storage .btn").css("margin-right", btnPad + "rem");
    $("#navbar .btn, #storage .btn").css("margin-top", "0rem");
    $("#navbar .btn, #storage .btn").css("margin-bottom", "0rem");
  } else {
    $("#navbar .btn, #storage .btn").css("margin-top", btnPad + "rem");
    $("#navbar .btn, #storage .btn").css("margin-bottom", btnPad + "rem");
    $("#navbar .btn, #storage .btn").css("margin-left", "0rem");
    $("#navbar .btn, #storage .btn").css("margin-right", "0rem");
  }
    $("#navbar .btn").css("height", btnH + "rem");
  $("#storage .btn").css("height", btnH + "rem");
  $("#navbar .btn").css("border-radius", btnBvl + "rem");
  $("#storage .btn").css("border-radius", btnBvl + "rem");
  var menuSize = btnW.toFixed(2);
  var contSize = 100 - menuSize;
  if (mnuPos === 1) {
    $("#main-container").css(
      "grid-template-columns",
      menuSize + "% " + contSize + "%"
    );
    $("#navbar .btn").css("width", "100%");
	$("#storage .btn").css("width", "100%");
    $("#navbar").css("height", "100%");
  } else if (mnuPos === 2) {
    var temp = contSize;
    contSize = menuSize;
    menuSize = temp;
    $("#main-container").css(
      "grid-template-columns",
      menuSize + "% " + contSize + "%"
    );
    $("#navbar .btn").css("width", "100%");
	$("#storage .btn").css("width", "100%");
    $("#navbar").css("height", "100%");
  } else if (mnuPos === 3) {
    $("#navbar .btn").css("width", menuSize + "%");
	$("#storage .btn").css("width", menuSize + "%");
    $("#navbar").css("height", "auto");
  }
  $("#navbar").css("display", "block");
  $("#main-container").css("display", "grid");
  $("#sub-container").css("grid-column", "2 / 3");
  $("#navbar").css("grid-column", "1 / 2");
  $("#navbar").css("display", "block");
});
$("#mnu-right").on("click", function () {
  mnuPos = 2;
    $("#navbar .btn").css("height", btnH + "rem");
  $("#storage .btn").css("height", btnH + "rem");
  $("#navbar .btn").css("border-radius", btnBvl + "rem");
  $("#storage .btn").css("border-radius", btnBvl + "rem");
  var menuSize = btnW.toFixed(2);
  var contSize = 100 - menuSize;
  if (mnuPos === 1) {
    $("#main-container").css(
      "grid-template-columns",
      menuSize + "% " + contSize + "%"
    );
    $("#navbar .btn").css("width", "100%");
	$("#storage .btn").css("width", "100%");
    $("#navbar").css("height", "100%");
  } else if (mnuPos === 2) {
    var temp = contSize;
    contSize = menuSize;
    menuSize = temp;
    $("#main-container").css(
      "grid-template-columns",
      menuSize + "% " + contSize + "%"
    );
    $("#navbar .btn").css("width", "100%");
	$("#storage .btn").css("width", "100%");
    $("#navbar").css("height", "100%");
  } else if (mnuPos === 3) {
    $("#navbar .btn").css("width", menuSize + "%");
	$("#storage .btn").css("width", menuSize + "%");
    $("#navbar").css("height", "auto");
  }
    if (mnuPos === 3) {
    $("#navbar .btn, #storage .btn").css("margin-left", btnPad + "rem");
    $("#navbar .btn, #storage .btn").css("margin-right", btnPad + "rem");
    $("#navbar .btn, #storage .btn").css("margin-top", "0rem");
    $("#navbar .btn, #storage .btn").css("margin-bottom", "0rem");
  } else {
    $("#navbar .btn, #storage .btn").css("margin-top", btnPad + "rem");
    $("#navbar .btn, #storage .btn").css("margin-bottom", btnPad + "rem");
    $("#navbar .btn, #storage .btn").css("margin-left", "0rem");
    $("#navbar .btn, #storage .btn").css("margin-right", "0rem");
  }
  $("#navbar").css("display", "block");
  $("#main-container").css("display", "grid");
  $("#navbar").css("grid-column", "2 / 3");
  $("#sub-container").css("grid-column", "1 / 2");
  $("#navbar").css("display", "block");
});
$("#mnu-top").on("click", function () {
  mnuPos = 3;
    if (mnuPos === 3) {
    $("#navbar .btn, #storage .btn").css("margin-left", btnPad + "rem");
    $("#navbar .btn, #storage .btn").css("margin-right", btnPad + "rem");
    $("#navbar .btn, #storage .btn").css("margin-top", "0rem");
    $("#navbar .btn, #storage .btn").css("margin-bottom", "0rem");
  } else {
    $("#navbar .btn, #storage .btn").css("margin-top", btnPad + "rem");
    $("#navbar .btn, #storage .btn").css("margin-bottom", btnPad + "rem");
    $("#navbar .btn, #storage .btn").css("margin-left", "0rem");
    $("#navbar .btn, #storage .btn").css("margin-right", "0rem");
  }
    $("#navbar .btn").css("height", btnH + "rem");
  $("#storage .btn").css("height", btnH + "rem");
  $("#navbar .btn").css("border-radius", btnBvl + "rem");
  $("#storage .btn").css("border-radius", btnBvl + "rem");
  var menuSize = btnW.toFixed(2);
  var contSize = 100 - menuSize;
  if (mnuPos === 1) {
    $("#main-container").css(
      "grid-template-columns",
      menuSize + "% " + contSize + "%"
    );
    $("#navbar .btn").css("width", "100%");
	$("#storage .btn").css("width", "100%");
    $("#navbar").css("height", "100%");
  } else if (mnuPos === 2) {
    var temp = contSize;
    contSize = menuSize;
    menuSize = temp;
    $("#main-container").css(
      "grid-template-columns",
      menuSize + "% " + contSize + "%"
    );
    $("#navbar .btn").css("width", "100%");
	$("#storage .btn").css("width", "100%");
    $("#navbar").css("height", "100%");
  } else if (mnuPos === 3) {
    $("#navbar .btn").css("width", menuSize + "%");
	$("#storage .btn").css("width", menuSize + "%");
    $("#navbar").css("height", "auto");
  }
  $("#main-container").css("display", "flex");
  $("#main-container").css("flex-direction", "column");
  $("#navbar").css("display", "flex");
  $("#navbar").css("justify-content", "center");
  $("#navbar").css("flex-wrap", "wrap");
});
$("#t-11-not").on("click", function () {
  if (!$("#btnShade").is(":checked")) {
    var color = $("#clr7").val();
    var primaryLight = chroma(color).brighten(2).saturate().hex();
    var primaryDark = chroma(color).darken(2).saturate().hex();

    $(".btn__primary", "#navbar, #storage").css(
      "box-shadow",
      "inset 0.2rem 0.2rem 1rem " +
        primaryLight +
        ", inset -0.2rem -0.2rem 1rem " +
        primaryDark
    );
    $(".btn__primary:active", "#navbar, #storage").css(
      "box-shadow",
      "inset 0.2rem 0.2rem 1rem " +
        primaryDark +
        ", inset -0.2rem -0.2rem 1rem " +
        primaryLight
    );
  } else {
    $(".btn__primary:active", "#navbar, #storage").css("box-shadow", "none");
    $(".btn__primary", "#navbar, #storage").css("box-shadow", "none");
  }
});
$("#clr6").on("input", function () {
  $(".btn p", "#navbar, #storage").css("color", $("#clr6").val());
  $(".btn p i", "#navbar, #storage").css("color", $("#clr6").val());
});
$("#clr7").on("input", function () {
  var color = $("#clr7").val();
  var primaryLight = chroma(color).brighten(2).saturate().hex();
  var primaryDark = chroma(color).darken(2).saturate().hex();
  $(".btn", "#navbar, #storage").css("background-color", color);

  if ($("#btnShade").is(":checked")) {
    $(".btn__primary", "#navbar, #storage").css(
      "box-shadow",
      "inset 0.2rem 0.2rem 1rem " +
        primaryLight +
        ", inset -0.2rem -0.2rem 1rem " +
        primaryDark
    );
    $(".btn__primary:active", "#navbar, #storage").css(
      "box-shadow",
      "inset 0.2rem 0.2rem 1rem " +
        primaryDark +
        ", inset -0.2rem -0.2rem 1rem " +
        primaryLight
    );
  }
});

$("#clr11").on("input", function () {
$(".editor h2").css("color",$("#clr11").val());
});

$("a[data-command='InsertTable']").on("click", function () {
  var columns = prompt("Enter the number of columns for the table:");
  var rows = prompt("Enter the number of rows for the table:");
  if (isNaN(columns) || isNaN(rows)) {
    alert("Please enter a number.");
    return;
  }
  if (columns > 250 || rows > 250) {
    alert("The number of columns or rows must be 250 or less.");
    return;
  }
  if (columns > 100 || rows > 100) {
    if (
      !confirm(
        "Creating a table with that many rows or columns may slow down the page. Do you want to continue?"
      )
    ) {
      return;
    }
  }
  var sel = window.getSelection();
  var range = sel.getRangeAt(0);
  var editor = range.startContainer.parentNode;

  if (!$(editor).hasClass("editor")) {
    editor = $(editor).closest(".editor");
  }
  if (editor.length === 0) {
    alert("Cannot find the selected .editor element. Please try again.");
    return;
  }

  var table = document.createElement("table");
  $(table).attr("class", "editTable");
  for (var i = 0; i < rows; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < columns; j++) {
      var cell = document.createElement("td");
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  range.insertNode(table);
  $(table).colResizable({
    resizeMode: "fit",
  });
});
var pseudos = ["", ":hover", ":active"]; // Add the pseudo-selectors you want to include
var pseudoSelectors = pseudos.join(", ");

function getDescendants(element) {
  var descendants = [];
  var children = element.children;
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    descendants.push(child);
    descendants = descendants.concat(getDescendants(child));
  }
  return descendants;
}
$("#t-16-not").on("click", function () {
  if ($("#navbar").css("background-color") === "rgba(0, 0, 0, 0)") {
    $("#mnuClr").css("display", "inline-block");
    $("#navbar").css("background", $("#clr11").val());
  } else {
    $("#navbar").css("background-color", "rgba(0, 0, 0, 0)");
    $("#mnuClr").css("display", "none");
  }
});

$("#getcode").on("click", function () {
  var js = $("#takeout").html();
  js.text(function(_,txt) {
    return txt.replace(/@fnt1/g, fnt1)
              .replace(/@fnt2/g, fnt2)
              .replace(/@fnt3/g, fnt3)
              .replace(/@fnt4/g, fnt4);
});
 js = "<script>" + js + "</script>";
  //Show the box where the output code is displayed.
  $("#code").css("display", "flex");
  //Hide the editor toolbar.
  $("#toolbar").hide();
  //Get the html and put the code for it in the html box.
  var classesToRemove = [".JCLRgrips"];
  $("#main-container").clone().appendTo("#processing");
  $(".editor", "#processing").removeAttr("contenteditable");
  classesToRemove.forEach(function (classToRemove) {
    $(classToRemove, "#processing").remove();
  });
  $("#deps").clone().prependTo("#processing");
  if ($("#tri").hasClass("user")) {
    $("#tri").clone().appendTo("#processing");
  }
  $("#main-container").attr("data-anim", anim);
  $("#nvbtn1").trigger("change");
  var html = $("#processing").html();

  var html = $("#processing").html() + js;
  const rex =
    /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/gu;
  html = html.replace(
    rex,
    (match) => `&#x${match.codePointAt(0).toString(16)};`
  );

  $("#code-html").text(html);
  $("#processing").empty();
/*  var selectorsToRemove = ["#collapse-button, .container, html", ".container"];
  var css = $("style").html();
  $.each(selectorsToRemove, function (index, selector) {
    css = css.replace(
      new RegExp("(^|\\n)\\s*" + selector + "\\s*\\{[^\\}]*\\}", "g"),
      ""
    );
  });*/
  var css = $("#defaultcss").html() + $("#customcss").html();
  $("#code-css").text(css);

  //We then add out own JS as a variable to the JS box.

  $("#code-js").text(js);
});
jQuery("div").bind("dragover drop", function (event) {
  event.preventDefault();
  return false;
});
};
$(window).on('load', function() {
  setupToolbar()
  $("#loading").css("opacity",0);
      setTimeout(function () {
      $("#loading").css("display","none");
    }, 500);
});

