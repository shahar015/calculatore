let num = 1, num1 = "0", num2 = "", op = "", result, isOp = false, isAR = true;
let resultText = document.querySelector(".result");
let lastText = document.querySelector(".last");
resultText.textContent = num1;


let numBtns = document.querySelectorAll(".numbers .btn");
let opBtns = document.querySelectorAll(".ops .btn");
let calcBtn = document.querySelector(".equals");
let decPoint = document.querySelector(".dec");
let del = document.querySelector(".del");
let ac = document.querySelector(".ac");

numBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        isOp = false;
        if (num == 1) {
            if (num1 === '0' || (num1 != '' && isAR)) {
                num1 = '';
                isAR = false;
            }
            lastText.textContent = "";
            num1 += btn.textContent;
            resultText.textContent = num1;
        }
        else {
            num2 += btn.textContent;
            resultText.textContent = num2;
            lastText.textContent = num1 + op;
        }
    })
});

opBtns.forEach(btn => {
    isOp = true;
    btn.addEventListener('click', (e) => {
        if (num2 != '') {
            result = calc(num1, num2, op);
            num1 = result;
            num2 = "";
        }
        op = btn.textContent;
        isOp = true;
        resultText.textContent = op;
        lastText.textContent = num1;
        num = 2;
    })
});

decPoint.addEventListener(
    'click', () => {
        if (num == 1) {
            num1 += "."
        }
        else {
            num2 += "."
        }
    }
)

calcBtn.addEventListener(
    'click', () => {
        isOp = false;
        result = calc(num1, num2, op);
        resultText.textContent = result;
        lastText.textContent += num2;
        op = "";
        num = 1;
        num1 = result;
        num2 = "";
        isAR = true;
    }
)

del.addEventListener('click', () => {
    if (!isOp) {
        if (num == 1) {
            num1 = num1.slice(0, -1);
            resultText.textContent = num1;
        }
        else {
            num2 = num2.slice(0, -1);
            if (num2 != "") {
                resultText.textContent = num2;
            }
            else {
                isOp = true;
                lastText.textContent = num1;
                resultText.textContent = op;
            }
        }
    }
    else {
        isOp = false;
        op = "";
        num = 1;
        lastText.textContent = "";
        resultText.textContent = num1;
    }
})

ac.addEventListener('click', ()=>{
    num = 1
    num1 = "0"
    num2 = ""
    op = ""
    result;
    isOp = false;
    isAR = true;
    resultText.textContent=num1;
    lastText.textContent="";
})

function calc(num1, num2, op) {
    switch (op) {
        case '+':
            return Number(num1) + Number(num2);

        case '-':
            return Number(num1) - Number(num2);

        case '/':
            return Number(num1) / Number(num2);

        case '*':
            return Number(num1) * Number(num2);

        default:
            return 0;
    }
}