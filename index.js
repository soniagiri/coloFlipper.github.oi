
// HEX
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hex_btn = document.getElementById("hex-btn");
const hex_color = document.querySelector(".hex-color");
hex_btn.addEventListener("click", () => {
    let hexColor ="#"
    for(let i = 0; i<6;i++){
        const randomC=getHexRandomNumber()
        hexColor+=hex[randomC]
    }
    document.body.style.backgroundColor = hexColor;
    hex_color.textContent = hexColor;
  });

  const getHexRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
  };