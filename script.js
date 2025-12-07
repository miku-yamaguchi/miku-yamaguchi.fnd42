'use strict'

const td = document.getElementsByTagName("td");
console.log(td);

const button = document.getElementById("button");

const blackWord = "黒の番です⚫";
const whiteWord = "白の番です⚪";

button.addEventListener("click", function() {

  const flag = document.getElementById("flag"); 

  if (flag.innerText === blackWord) {
    flag.innerText = whiteWord
    
  } else {
    flag.innerText = blackWord
  }
  
});

for (let i = 0; i < td.length; i++) {

  td[i].addEventListener("click", function() {

    const flag = document.getElementById("flag"); 
    const player = flag.innerText
    let cell = i;
    let select = this.className;

    if (select !== "grid") {
      window.alert("そこのマスには置けません！😭");
    }

    const reverseArr = putPiece(player, cell, select)
  
    for (const reverse of reverseArr) {

      if (reverse.className === "white") {

        reverse.innerText = "⚫";
        reverse.className = "black";
        this.innerText = "⚫";
        this.className = "black";
        flag.innerText = whiteWord

      } else {
        reverse.innerText = "⚪";
        reverse.className = "white";
        this.innerText = "⚪";
        this.className = "white";
        flag.innerText = blackWord   

      }
    }
  });
}


function putPiece(player, cell) {
  const reverseArr = [];

  // 右方向の確認
  for (let j = cell; j < td.length; j++) {

    if (player === blackWord) {

      if (td[j + 1].dataset.col === "rightTop") {
        break;

      } else if (td[j + 1].className === "white") {

        if (td[j + 2].className === "black") {
        reverseArr.push(td[j + 1]);
        }
      }
    } else if (player === whiteWord) {
      if (td[j + 1].dataset.col === "rightTop") {
        break;

      } else if (td[j + 1].className === "black") {

        if (td[j + 2].className === "white") {
        reverseArr.push(td[j + 1]);

        }      
      }
    }
  }

  // 左方向の確認
  for (let k = cell; k < td.length; k--) {

    if (player === blackWord) {

      if (td[k - 1].dataset.col === "leftTop") {
        break;

      } else if (td[k - 1].className === "white") {

        if (td[k - 2].className === "black") {
        reverseArr.push(td[k - 1]);
        }
      }

    } else if (player === whiteWord) {
      if (td[k - 1].dataset.row === "leftTop") {
        break;

      } else if (td[k - 1].className === "black") {

        if (td[k - 2].className === "white") {
        reverseArr.push(td[k - 1]);
        }      
      }
    }
  }

   // 上方向の確認
  for (let l = cell; l < td.length; l = l - 6) {

    if (player === blackWord) {

      if (td[l - 6].dataset.row === "rowTop"){
        break;

      } else if (td[l - 6].className === "white") {

        if (td[l - 12].className === "black") {
        reverseArr.push(td[l - 6]);
        console.log(reverseArr);
        }
      }

    } else if (player === whiteWord) {
      if (td[l - 6].dataset.row === "rowTop") {
        break;

      } else if (td[l - 6].className === "black") {

        if (td[l - 12].className === "white") {
        reverseArr.push(td[l - 6]);
        }      
      }
    }
  }

  // 下方向の確認
  for (let n = cell; n < td.length; n = n + 6) {

    if (player === blackWord) {

      if (td[n + 6].dataset.row === "rowBottom") {
        break;

      } else if (td[n + 6].className === "white") {

        if (td[n + 12].className === "black") {
        reverseArr.push(td[n + 6]);
        }
      }

    } else if (player === whiteWord) {
      if (td[n + 6].dataset.row === "rowBottom") {
        break;

      } else if (td[n + 6].className === "black") {

        if (td[n + 12].className === "white") {
        reverseArr.push(td[n + 6]);
        }      
      }
    }
  }

  // 左上方向の確認
  for (let m = cell; m < td.length; m = m - 7) {

    if (player === blackWord) {

      if (td[m - 7].dataset.row === "rowTop" || td[m - 7].dataset.col === "leftTop") {
        break;

      } else if (td[m - 7].className === "white") {

        if (td[m - 14].className === "black") {
        reverseArr.push(td[m - 7]);
        console.log(reverseArr);
        }
      }
    } else if (player === whiteWord) {
      if (td[m - 7].dataset.row === "rowTop" || td[m - 7].dataset.col === "leftTop") {
        break;

      } else if (td[m - 7].className === "black") {

        if (td[m - 14].className === "white") {
        reverseArr.push(td[m - 7]);
        // console.log(reverseArr);
        }      
      }
    }   
  }

  // 右上方向の確認
  for (let m = cell; m < td.length; m = m - 5) {

    if (player === blackWord) {

      if (td[m - 5].dataset.row === "rowTop" || td[m - 5].dataset.col === "rightTop" ) {
        break;

      } else if (td[m - 5].className === "white") {

        if (td[m - 10].className === "black") {
        reverseArr.push(td[m - 5]);
        // console.log(reverseArr);
        }
      }

    } else if (player === whiteWord) {
      if (td[m - 5].dataset.row === "rowTop" || td[m - 5].dataset.col === "rightTop") {
        break;

      } else if (td[m - 5].className === "black") {

        if (td[m - 10].className === "white") {
        reverseArr.push(td[m - 5]);
        // console.log(reverseArr);
        }      
      }
    }
  }

  // 左下方向の確認
  for (let m = cell; m < td.length; m = m + 5) {

    if (player === blackWord) {

      if (td[m + 5].dataset.row === "rowBottom" || td[m + 5].dataset.col === "leftTop") {
        break;

      } else if (td[m + 5].className === "white") {

        if (td[m + 10].className === "black") {
        reverseArr.push(td[m + 5]);
        console.log(reverseArr);
        }
      }

    } else if (player === whiteWord) {
      if (td[m + 5].dataset.row === "rowBottom" || td[m + 5].dataset.col === "leftTop") {
        break;

      } else if (td[m + 5].className === "black") {

        if (td[m + 10].className === "white") {
        reverseArr.push(td[m + 5]);
        // console.log(reverseArr);
        }      
      }
    }
  }

    // 右下方向の確認
  for (let m = cell; m < td.length; m = m + 7) {

    if (player === blackWord) {

      if (td[m + 7].dataset.row === "rowBottom" || td[m + 7].dataset.col === "rightTop") {
        break;

      } else if (td[m + 7].className === "white") {

        if (td[m + 14].className === "black") {
        reverseArr.push(td[m + 7]);
        console.log(reverseArr);
        } 
      }

    } else if (player === whiteWord){
      if (td[m + 7].dataset.row === "rowBottom" || td[m + 7].dataset.col === "leftTop") {
        break;

      } else if (td[m + 7].className === "black") {

        if (td[m + 14].className === "white") {
          reverseArr.push(td[m + 7]);
        // console.log(reverseArr);
        } else if (td[m + 21].className === "black") {

          if (td[m + 21].className === "white")
          reverseArr.push(td[m + 7], td[m + 14]);
        }
      }
    }
  }

    if (!reverseArr[0]) {
    window.alert("そこのマスには置けません！😭");
    }
  
  return reverseArr;
}
