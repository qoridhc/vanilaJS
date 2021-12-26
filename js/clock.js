const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//setInterval(sayHello, 5000); arg1 : 내가 실행하려는 함수 , arg2 : 반복할 시간(ms단위 1000ms = 1s)
//setTimeout(sayHello, 5000); setInterval과 같으나 한번말 실행함.

getClock();
setInterval(getClock, 1000);
