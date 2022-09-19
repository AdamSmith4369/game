//? 1 ila 100 arası sayı tut

let ranNum = Math.round(Math.random() * 100);
console.log(ranNum);

//? Variables
let score = 10;
// let topScore = 0;
let topScore = localStorage.getItem("topScore") || 0;
document.querySelector("#sp2").textContent = topScore;
// console.log(topScore);
//? Checkbtn basıldığında kontrolleri yap.

document.querySelector(".box2").addEventListener("click", () => {
  const guessInput = Number(document.querySelector("#input1").value);
  //   console.log(guessInput);
  const msg = document.querySelector("#p3");
  const body = document.querySelector("body");
  //? Eğer input girilmediyse uyarı ver.
  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //! Eğer rastgele == input.value
  } else if (ranNum === guessInput) {
    msg.innerHTML = `Congrulations, You won. <i class="fa-solid fa-face-smile fa-2x"></i>`;
    body.style.backgroundColor = "rgb(6, 81, 6)";
    if (score > topScore) {
      //   topScore = score;
      localStorage.setItem("topScore", score);
      document.querySelector("#sp2").textContent = score;
    }
    document.querySelector("#box").textContent = ranNum;
  } else {
    if (score > 0) {
      score -= 1;
      guessInput > ranNum
        ? (msg.innerHTML = `DECREASE <i class="fa-sharp fa-solid fa-arrow-down fa-2x"></i>`)
        : (msg.innerHTML = `INCREASE <i class="fa-sharp fa-solid fa-arrow-up fa-2x"></i> `);
      document.querySelector("#sp1").textContent = score;
    } else {
      msg.innerHTML = `You lost <i class="fa-sharp fa-solid fa-face-sad-cry fa-2x"></i> `;
      document.querySelector("body").style.backgroundColor = "red ";
    }
  }
});

//* AGAİN START

document.querySelector(".box3").addEventListener("click", () => {
  score = 10;
  document.querySelector("body").style.backgroundColor =
    "rgba(51, 50, 50, 0.885)";
  document.querySelector("#sp1").textContent = score;
  ranNum = Math.round(Math.random() * 100);
  console.log(ranNum);
  document.querySelector("#box").textContent = "?";
  document.querySelector("#input1").value = "";
  document.querySelector("#p3").innerText = "Starting...";
});

document.querySelector("#input1").addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    document.querySelector(".box2").click();
  }
});
//

// myObj = { a: 1, b: 2, c: 3, d: 4 };
// localStorage.setItem("OBJ", JSON.stringify(myObj));

//? Tebrikler bildiniz.
//? Bacjkground green
//? Eğer score > top score
//? top score == score

//! Değilse
//! eĞER SCORE > 0
//! Score == score - 1
//? Eğer rastgele < input.value
//? AZALT
//! Değilse
//? ARTTIR.
