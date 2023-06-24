function sayHello() {
  console.log("안녕하세요!!");
}

// setInterval(sayHello, 1000);
// 주기성 1000=1초 1.0000초에 한번
// setTimeout(sayHello, 1000);
//1회성 1.000초 이후에 1번

function setTime() {
  const time = new Date();
  const 분 = time.getMinutes().toString();
  const 초 = time.getSeconds().toString();
  const timeH1 = document.querySelector(".time");
  timeH1.innerText = `${분.padStart(2, "0")}:${초.padStart(2, "0")}`;
}

//ㅇㄴ녕하세요

// setInterval(setTime, 1000);
