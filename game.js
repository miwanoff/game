var timer; // таймер
var i; // номер строки массива
var j; // номер столбца массива
var number = 0; // номер картинки
var count = 0; // начальное значение счета
var thingsArr = [
  ["images/alena.jpg", "images/ilia.jpg", "images/nastia.jpg"],
  ["images/Earth.jpg", "images/Mercury.jpg", "images/Venus.jpg"],
];

var field = document.getElementById("field"); // поле
var score = document.getElementById("score"); // счет

function getRandomInt(n) {
  // случайное число
  return Math.floor(Math.random() * n);
}

function create() {
  i = getRandomInt(2); // номер строки массива
  j = getRandomInt(3); // номер столбца массива
  var left = getRandomInt(550); // левый отступ
  var top = getRandomInt(350); // верхний отступ
  var id = "thing" + number; // создаем id по номеру
  var thing = document.createElement("img"); // Создаем элемент img
  thing.id = id; // Добавляем id='thing0' и т.д.
  //thing.setAttribute('id', id);
  thing.src = thingsArr[i][j]; // Добавляем src='images/...' из массива.
  //thing.setAttribute('src', thingsArr[i][j]);

  thing.setAttribute("onclick", "check(" + id + ")"); // Добавляем обработку события click

  thing.style.left = left + "px"; // Устанавливаем левый отступ
  thing.style.top = top + "px"; // Устанавливаем верхний отступ
  if (i == 0) thing.className = "noneatable"; // Добавляем class='noneatable'
  else thing.className = "eatable"; // Добавляем class='eatable'

  field.appendChild(thing); // Встраиваем элемент на поле
  removeThing(id);
  number++;
  if (number >= 20) {
    stop();
    score.innerHTML = count + " Game over!";
  }
}

function removeThing(id) {
  var item = document.getElementById(id);
  setTimeout(function () {
    field.removeChild(item);
  }, 1000); //удаляем через секунду
}

function check(thing) {
  //var thing = document.getElementById(id);
  if (thing.className == "eatable") {
    count++; //увеличиваем счет
  } else count--; //уменьшаем счет
  score.innerHTML = count;
}

timer = setInterval(create, 1000); // рисовать каждые 10мс

function stop() {
  clearInterval(timer); // завершить анимацию
}
