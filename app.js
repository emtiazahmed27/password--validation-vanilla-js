const input = document.querySelector("input"),
span = document.querySelector(".sp-1"),
iTag = document.querySelectorAll("i");

input.addEventListener("input",()=>{
    const data = input.value
    passvalidation(data)
})

function passvalidation (data) {
    const regex_08 = new RegExp("(?=.{8,})");
    const regex_az = new RegExp("(?=.*[a-z])");
    const regex_AZ = new RegExp("(?=.*[A-Z])");
    const regex_d = new RegExp("(?=.*[0-9])");
    const regex_sp = new RegExp("(?=.*[!@#\$%\^&\*])");


    if (regex_az.test(data)) {
        iTag[0].classList.remove("fa-hand-point-right")
        iTag[0].classList.add("fa-check")  
    } else{
        iTag[0].classList.remove("fa-check")
        iTag[0].classList.add("fa-hand-point-right")
    }
    if (regex_AZ.test(data)) {
        iTag[1].classList.remove("fa-hand-point-right")
        iTag[1].classList.add("fa-check")
    } else{
        iTag[1].classList.remove("fa-check")
        iTag[1].classList.add("fa-hand-point-right")
    }
    if (regex_d.test(data)) {
        iTag[2].classList.add("fa-check")
        iTag[2].classList.remove("fa-hand-point-right")
    }
    else{
        iTag[2].classList.remove("fa-check")
        iTag[2].classList.add("fa-hand-point-right")
    }
    if (regex_sp.test(data)) {
        iTag[3].classList.remove("fa-hand-point-right")
        iTag[3].classList.add("fa-check")
    }
    else{
        iTag[3].classList.remove("fa-check")
        iTag[3].classList.add("fa-hand-point-right")
    }
    if (regex_08.test(data)) {
        iTag[4].classList.remove("fa-hand-point-right")
        iTag[4].classList.add("fa-check")
    }
    else{
        iTag[4].classList.remove("fa-check")
        iTag[4].classList.add("fa-hand-point-right")
    }
}

