// https://dog.ceo/api/breeds/image/random
const dogImgDiv = document.getElementById("dogImage");
const generateBtn = document.getElementById("dogButton");

const generateImg = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(json => {
            console.log(json.message);
            dogImgDiv.innerHTML = `<img src='${json.message}' class="dogImg"/>`;
        });
}

generateBtn.onclick = () => generateImg();


