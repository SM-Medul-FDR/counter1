
// ============================== Dom part start ----------------
let numberInput = document.querySelectorAll(".numberInput")
let text        = document.querySelectorAll(".number")

let countText   = document.querySelectorAll(".counter")

// =============================== Dom part end ----------------



// ============================== Function  part start -------------
let addNumber = (item)=>{
    countText[item].innerHTML = numberInput[item].value
    countText[item].dataset.num = numberInput[item].value
    text[item].innerHTML      = numberInput[item].value
    numberInput[item].value   = ''
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=]-=-=-=-=

let startBTN = ()=>{
    countText.forEach((item)=>{
        let number = 0

        let incree = ()=>{
            number++
            item.innerHTML = number
            if(number == item.dataset.num){
                clearInterval(stop)
            }
        }
        let stop = setInterval(() => {
            incree()
        }, 50);
        if(item.dataset.num == 0){
            clearInterval(stop)  
        }
    })
}
// =================================== Function  part end ------------