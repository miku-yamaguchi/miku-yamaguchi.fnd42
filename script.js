'use strict'

const td = document.getElementsByTagName("td");

const blackWord = "黒の番です⚫";
const whiteWord = "白の番です⚪";

const passButton = document.getElementById("passButton");

// パスの時の処理
passButton.addEventListener("click", function() {

  const flag = document.getElementById("flag"); 

  if (flag.innerText === blackWord) {
    flag.innerText = whiteWord;
    
  } else {
    flag.innerText = blackWord;
  }
  
});

// マスにクリックしたときの処理
for (let i = 0; i < td.length; i++) {

  td[i].addEventListener("click", function() {

    const flag = document.getElementById("flag"); 
    const grid = document.getElementsByClassName("grid");
    const player = flag.innerText;

    const reverseArr = putPiece(player, i);

    if (this.className !== "grid" || !reverseArr[0]) {
      error();

    } else {

      for (const reverse of reverseArr) {

        if (reverse.className === "white") {
          reverse.innerText = "⚫";
          reverse.className = "black";

        } else {
          reverse.innerText = "⚪";
          reverse.className = "white";

        }

      }

      if (flag.innerText === blackWord) {
        this.innerText = "⚫";
        this.className = "black";
        flag.innerText = whiteWord;
          
      } else if (flag.innerText = whiteWord) {
        this.innerText = "⚪";
        this.className = "white";
        flag.innerText = blackWord;   
      }
    }


    // ゲーム終了時の処理
      const black = document.getElementsByClassName("black");
      const white = document.getElementsByClassName("white");

      if (grid.length === 0 || white.length === 0 || black.length === 0) {
        gameEnd();
      }
     
  });
 
}


/**
 * @param {string} player
 * @param {number} cell 
 * @returns {array} ひっくり返すコマを配列で返す
 */
function putPiece(player, cell) {
  const reverseArr = [];

  // 右方向の確認
  for (let j = cell; j < td.length; j++) {;
  
    if (player === blackWord) {

      if (td[j + 1].dataset.col === "rightTop" || td[j + 1].className === "grid") {
        break;

      } else if (td[j + 1].className === "white" && td[j + 2].className === "black") {
        reverseArr.push(td[j + 1]);

      } else if (td[j + 1].className === "white" && td[j + 2].className === "white" && td[j + 3].className === "black") {
        reverseArr.push(td[j + 1], td[j + 2]);
        break;


      } else {
        break;

      }
      
    } else if (player === whiteWord) {

      if (td[j + 1].dataset.col === "rightTop" || td[j + 1].className === "grid") {
        break;

      } else if (td[j + 1].className === "black" && td[j + 2].className === "white") {
        reverseArr.push(td[j + 1]);

      } else if (td[j + 1].className === "black" && td[j + 2].className === "black" && td[j + 3].className === "white") {
        reverseArr.push(td[j + 1], td[j + 2]);
        break;
        
      } else {
        break;

      }
    }
  }

  // 左方向の確認
  for (let k = cell; k < td.length; k--) {

    if (player === blackWord) {

      if (td[k - 1].dataset.col === "leftTop" || td[k - 1].className === "grid") {
        break;

      } else if (td[k - 1].className === "white" && td[k - 2].className === "black") {
        reverseArr.push(td[k - 1]);

      } else if (td[k - 1].className === "white" && td[k - 2].className === "white" && td[k - 3].className === "black") {
        reverseArr.push(td[k - 1], td[k - 2]);
        break;

      } else {
        break;

      }
  
    } else if (player === whiteWord) {

      if (td[k - 1].dataset.row === "leftTop" || td[k - 1].className === "grid") {
        break;

      } else if (td[k - 1].className === "black" && td[k - 2].className === "white") {
        reverseArr.push(td[k - 1]);

      } else if (td[k - 1].className === "black" && td[k - 2].className === "black" && td[k - 3].className === "white") {
        reverseArr.push(td[k - 1], td[k - 2]);
        break;
        
      } else {
        break;

      }
    }
  }  

   // 上方向の確認
  for (let j = cell; j < td.length; j = j - 6) {

    if (player === blackWord) {

      if (td[j - 6].dataset.row === "rowTop" || td[j - 6].className === "grid"){
        break;

      } else if (td[j - 6].className === "white" && td[j - 12].className === "black") {
        reverseArr.push(td[j - 6]);

      } else if (td[j - 6].className === "white" && td[j - 12].className === "white" && td[j - 18].className === "black") {
        reverseArr.push(td[j - 6], td[j - 12]);
        break;


      } else {
        break;

      }

    } else if (player === whiteWord) {
      if (td[j - 6].dataset.row === "rowTop" || td[j - 6].className === "grid") {
        break;

      } else if (td[j - 6].className === "black" && td[j - 12].className === "white") {
          reverseArr.push(td[j - 6]);

      } else if (td[j - 6].className === "black" && td[j - 12].className === "black" && td[j - 18].className === "white") {
        reverseArr.push(td[j - 6], td[j - 12]);
        break;

      } else {
        break;

      }
    }
  }

  // 下方向の確認
  for (let k = cell; k < td.length; k = k + 6) {

    if (player === blackWord) {

      if (td[k + 6].dataset.row === "rowBottom" || td[k + 6].className === "grid") {
        break;

      } else if (td[k + 6].className === "white" && td[k + 12].className === "black") {
        reverseArr.push(td[k + 6]);

      } else if (td[k + 6].className === "white" && td[k + 12].className === "white" && td[k + 18].className === "black") {
        reverseArr.push(td[k + 6], td[k + 12]);
        break;


      } else {
        break;

      }

    } else if (player === whiteWord) {
      if (td[k + 6].dataset.row === "rowBottom" || td[k + 6].className === "grid") {
        break;

      } else if (td[k + 6].className === "black" && td[k + 12].className === "white") {
        reverseArr.push(td[k + 6]);

      } else if (td[k + 6].className === "black" && td[k + 12].className === "black" && td[k + 18].className === "white") {
        reverseArr.push(td[k + 6], td[k + 12]);
        break;


      } else {
        break;

      }
    }
  }

  // 左上方向の確認
  for (let j = cell; j < td.length; j = j - 7) {

    if (player === blackWord) {

      if (td[j - 7].dataset.row === "rowTop" || td[j - 7].dataset.col === "leftTop" || td[j - 7].className === "grid") {
        break;

      } else if (td[j - 7].className === "white" && td[j - 14].className === "black") {
        reverseArr.push(td[j - 7]);

      } else if (td[j - 7].className === "white" && td[j - 14].className === "white" && td[j - 21].className === "black") {
        reverseArr.push(td[j - 7], td[j - 14]);
        break;

      } else {
        break;

      }

    } else if (player === whiteWord) {
      if (td[j - 7].dataset.row === "rowTop" || td[j - 7].dataset.col === "leftTop" || td[j - 7].className === "grid") {
        break;

      } else if (td[j - 7].className === "black" && td[j - 14].className === "white") {
        reverseArr.push(td[j - 7]);

      } else if (td[j - 7].className === "black" && td[j - 14].className === "black" && td[j - 21].className === "white") {
        reverseArr.push(td[j - 7], td[j - 14]);
        break;

      } else {
        break;

      }
    }   
  }

  // 右上方向の確認
  for (let k = cell; k < td.length; k = k - 5) {

    if (player === blackWord) {

      if (td[k - 5].dataset.row === "rowTop" || td[k- 5].dataset.col === "rightTop" || td[k - 5].className === "grid") {
        break;

      } else if (td[k - 5].className === "white" && td[k - 10].className === "black") {
        reverseArr.push(td[k - 5]);

      } else if (td[k - 5].className === "white" && td[k - 10].className === "white" && td[k - 15].className === "black") {
        reverseArr.push(td[k - 5], td[k - 10]);
        break;

      } else {
        break;

      }

    } else if (player === whiteWord) {
      if (td[k - 5].dataset.row === "rowTop" || td[k - 5].dataset.col === "rightTop" || td[k - 5].className === "grid") {
        break;

      } else if (td[k - 5].className === "black" && td[k - 10].className === "white") {
        reverseArr.push(td[k - 5]);

      } else if (td[k - 5].className === "black" && td[k - 10].className === "black" && td[k - 15].className === "white") {
        reverseArr.push(td[k - 5], td[k - 10]);
        break;

      } else {
        break;

      }
    }
  }

  // 左下方向の確認
  for (let j = cell; j < td.length; j = j + 5) {

    if (player === blackWord) {

      if (td[j + 5].dataset.row === "rowBottom" || td[j + 5].dataset.col === "leftTop" || td[j + 5].className === "grid") {
        break;

      } else if (td[j + 5].className === "white" && td[j + 10].className === "black") {
        reverseArr.push(td[j + 5]);

      } else if (td[j + 5].className === "white" && td[j + 10].className === "white" && td[j + 15].className === "black") {
        reverseArr.push(td[j + 5], td[j + 10]);
        break;

      } else {
        break;

      }

    } else if (player === whiteWord) {
      if (td[j + 5].dataset.row === "rowBottom" || td[j + 5].dataset.col === "leftTop" || td[j + 5].className === "grid") {
        break;

     } else if (td[j + 5].className === "black" && td[j + 10].className === "white") {
        reverseArr.push(td[j + 5]);

     } else if (td[j + 5].className === "black" && td[j + 10].className === "black" && td[j + 15].className === "white") {
        reverseArr.push(td[j + 5], td[j + 10]);
        break;

     } else {
      break;

     } 
   }
  }

    // 右下方向の確認
  for (let k = cell; k < td.length; k = k + 7) {

    if (player === blackWord) {

      if (td[k + 7].dataset.row === "rowBottom" || td[k + 7].dataset.col === "rightTop" || td[k + 7].className === "grid") {
        break;

      } else if (td[k + 7].className === "white" && td[k + 14].className === "black") {
        reverseArr.push(td[k + 7]);

      } else if (td[k + 7].className === "white" && td[k + 14].className === "white" && td[k + 21].className === "black") {
        reverseArr.push(td[k + 7], td[k + 14]);
        break;

      } else {
        break;

      }

    } else if (player === whiteWord){
      if (td[k + 7].dataset.row === "rowBottom" || td[k + 7].dataset.col === "rightTop" || td[k + 7].className === "grid") {
        break;

      } else if (td[k + 7].className === "black" && td[k + 14].className === "white") {
        reverseArr.push(td[k + 7]);

      } else if (td[k + 7].className === "black" && td[k + 14].className === "black" && td[k + 21].className === "white") {
        reverseArr.push(td[k + 7], td[k + 14]);
        break;

      } else {
        break;
        
      }
    }
  }

  return reverseArr;
}

/**
 * @returns {} 現在のコマの数に応じた、結果画面を表示する
 */
function gameEnd() {

  const end = document.getElementById("end");
  const black = document.getElementsByClassName("black");
  const white = document.getElementsByClassName("white");
  const blackScore = document.getElementById("blackScore");
  const whiteScore = document.getElementById("whiteScore");
  const result = document.getElementById("result");
  
  blackScore.innerText = black.length;
  whiteScore.innerText = white.length;

  if (black.length > white.length) {
    result.innerText = "黒の勝利🎊";

  } else if (black.length < white.length) {
    result.innerText = "白の勝利🎊"

  } else {
    result.innerText = "引き分け😏"
  }
 
    end.style.visibility = "visible";
  
}

const reloadButton = document.getElementById("reloadButton");

reloadButton.addEventListener("click", function() {
  location.reload();
});

const resultButton = document.getElementById("resultButton");
resultButton.addEventListener("click", gameEnd);


/**
 * @param {string} classname クリックしたコマのクラス名
 * @param {array} reverseArr ひっくり返すコマを集めた配列  
 * @returns {} エラーメッセージを1秒表示する 
 */
function error() {

  const error = document.getElementById("error");
    
    error.style.visibility = "visible";

    setTimeout(function() {
      error.style.visibility = "hidden";
    }, 800);
  }
