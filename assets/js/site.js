function validateName() {
  var customerName = $("#customer-name")[0].value;
  var nameRGEX = /([A-Z])\w+/;
  if (nameRGEX.test(customerName)) {
  } else {
    $("#error").show();
    $("#errorContent").text("Ime nije u ispravnom formatu");
  }
}
function validateNumber() {
  var numberOfPeople = $("#number-of-people")[0].value;
  if (numberOfPeople > 6) {
    $("#error").show();
    $("#errorContent").text("Najvise do 6 osoba");
  }
  if (numberOfPeople < 1) {
    $("#error").show();
    $("#errorContent").text("Unesite pozitivan broj");
  }
}
function validateDate() {
  var selectedDate = $("#datetimepicker")[0].value;
  var selectedTime = new Date(selectedDate).getTime();
  if (selectedTime < new Date().getTime()) {
    $("#error").show();
    $("#errorContent").text("Izabrani datum je u prošlosti");
  }
}
// JQuery plugin
$(document).ready(function () {
  $("#datetimepicker").datetimepicker();
  loadMenuContent();
});
//
var menuContent = [
  {
    href: "assets/img/cheeseburger.jpg",
    src: "assets/img/cheeseburger.jpg",
    alt: "Cheeseburger",
    name: "Cheeseburger",
    price: "8.00$",
    description: "Kačkavalj, svinjsko meso, paradajz",
  },
  {
    href: "assets/img/burger-jabuka.jpg",
    src: "assets/img/burger-jabuka.jpg",
    alt: "Burger sa jabukom",
    name: "Burger sa jabukom",
    price: "7.00$",
    description: "jabuka, svinjsko meso, burger sos",
  },
  {
    href: "assets/img/vege-burger_375x250.jpg",
    src: "assets/img/vege-burger_375x250.jpg",
    alt: "Vegeterijanski burger",
    name: "Vegeterijanski burger",
    price: "9.00$",
    description: "Tri vrste pečuraka, crni pirinač, cvekla",
  },
  {
    href: "assets/img/Pileći-burger.jpg",
    src: "assets/img/Pileći-burger.jpg",
    alt: "Pohovani pileći burger",
    name: "Pohovani pileći burger",
    price: "6.99$",
    description: "Hrskava piletina, ljuti ajvar, majonez",
  },
  {
    href: "assets/img/meksicki-burger.jpg",
    src: "assets/img/meksicki-burger.jpg",
    alt: "Meksički burger",
    name: "Meksički burger",
    price: "8.00$",
    description: "Cheese, beef, tomatoes",
  },
  {
    href: "assets/img/chickburger_01_1_375x250.jpg",
    src: "assets/img/chickburger_01_1_375x250.jpg",
    alt: "Pileći burger",
    name: "Pileći burger",
    price: "6.00$",
    description: "Piletina, luk, majonez",
  },
  {
    href: "assets/img/Mini-burgeri.jpg",
    src: "assets/img/Mini-burgeri.jpg",
    alt: "Mini burgeri",
    name: "Mini burgeri",
    price: "8.00$",
    description: "Sirni krekeri, hrskava slanina, rajčica ",
  },
  {
    href: "assets/img/pileci-burger-riza.jpg",
    src: "assets/img/pileci-burger-riza.jpg",
    alt: "Pileći burger u pecivu od pirinča",
    name: "Pileći burger u pecivu od pirinča",
    price: "8.00$",
    description: "Pohovana piletina, paradajz, salata",
  },
];
function loadMenuContent() {
  var menuElement = $("#menuContent")[0];
  var contentString = "";
  for (i = 0; i < menuContent.length; i++) {
    contentString +=
      "<div class='menu-item-container'><a class='menu-item' href='" +
      menuContent[i].href +
      "'><img src='" +
      menuContent[i].src +
      "'" +
      menuContent[i].alt +
      "/></a>";
    contentString +=
      "<div class='menu-item-description'>" +
      "<b>" +
      menuContent[i].name +
      "</b>" +
      " <br>" +
      "Sastojci: " +
      menuContent[i].description +
      " " +
      "<br>" +
      menuContent[i].price +
      "</div></div>";
  }

  menuElement.innerHTML = contentString;
}
function filterContent() {
  var menuElement = $("#menuContent")[0];
  var searchFilter = $("#search")[0].value;
  var nameRGEX = new RegExp(".*" + searchFilter + ".*");
  var contentString = "";
  for (i = 0; i < menuContent.length; i++) {
    if (nameRGEX.test(menuContent[i].description + menuContent[i].name)) {
      contentString +=
        "<div class='menu-item-container'><a class='menu-item' href='" +
        menuContent[i].href +
        "'><img src='" +
        menuContent[i].src +
        "'" +
        menuContent[i].alt +
        "/></a>";
      contentString +=
        "<div class='menu-item-description'>" +
        "<b>" +
        menuContent[i].name +
        "</b>" +
        " <br>" +
        "Sastojci: " +
        menuContent[i].description +
        " " +
        "<br>" +
        menuContent[i].price +
        "</div></div>";
    }
  }

  menuElement.innerHTML = contentString;
}
