const mainColorHTML = document.querySelector('.rgb-id');
const startBtn = document.querySelector('.start-btn');
const answer = document.querySelector('.answer');
const gridBoxParent = document.querySelectorAll('.divas');
let flag = false;
let pickedColor;







const SixNumberGenerator = () => {
    let stringas = "#";
    while (stringas.length < 7){
        stringas += generateRandomNumber(9)
    }
    return stringas;
}


const generateRandomNumber = (number) => {
    const randomNumber = Math.floor(Math.random() * number);
    return randomNumber;
};



const settingMainColor = () => {
    let rndBox = gridBoxParent[generateRandomNumber(gridBoxParent.length)];
    rndBox.style.backgroundColor = SixNumberGenerator();
    mainColorHTML.innerHTML = rndBox.style.backgroundColor;
}

const settingColorsForOthers = () => {
    for (const box of gridBoxParent){
        if (box.style.backgroundColor === ""){
            box.style.backgroundColor = SixNumberGenerator()
        }
    }
}

const checkingclassList = (arr) => {
    for (const box of arr){
        if (box.classList.contains("display-none")){
            box.classList.remove("display-none");
        }
        box.style.backgroundColor = mainColorHTML.innerHTML;
    }
}





const settingEventListeners = () => {
    for (const box of gridBoxParent){
        box.addEventListener("click", (event) => {
            let colorOfBox = event.target.style.backgroundColor;
            if (colorOfBox === mainColorHTML.innerHTML){
                answer.innerHTML = "Thats correct!!";
                answer.style.color = "green";
               checkingclassList(gridBoxParent); 
            } else {
                answer.innerHTML = "Thats incorrect!!";
                answer.style.color = "red";
                event.target.classList.add("display-none");
            };
        })
    };
}

settingEventListeners();
settingColorsForOthers();
settingMainColor();

startBtn.addEventListener("click", () => {
    answer.innerHTML = "";
        for (const box of gridBoxParent){
        box.style.backgroundColor = ""
    };
    settingColorsForOthers();
    settingMainColor();




})

