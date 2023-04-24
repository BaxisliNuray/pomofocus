let startMinutes = 25;
let time = startMinutes * 60;
let pause = document.querySelector(".pause")
let start = document.querySelector(".start")
let reset = document.querySelector(".reset")
let mainBtns = document.querySelector("main-btns")
let timercount = document.querySelector(".timer")
let clickaudio = new Audio("https://www.fesliyanstudios.com/play-mp3/2883")



start.onclick = function () {
    // start.style.display = "none"
    // pause.style.display = "block"
    start.style.boxShadow = "none"
    start.style.marginTop = "6px"
    clickaudio.play()
    intervalId = setInterval(() => {
        let minutes = Math.floor(time / 60)
        let seconds = time % 60

        if (seconds >= 0 && seconds < 10) {
            seconds = `0` + `${seconds}`;
        }
        else {
            seconds.innerHTML = `${seconds}`;
        }

        if (minutes >= 0 && minutes < 10) {
            minutes = `0` + `${minutes}`;

        }

        if (minutes < 0) {
            timercount.textContent = `00:00`
        }
        else {
            timercount.innerHTML = `${minutes}:${seconds}`;
        }
        if (minutes == 0 && seconds == 0) {
            let restaudio = new Audio("./audio/soft-bells-140885.mp3")
            restaudio.play()
            Swal.fire({
                title: '~AWESOME~',
                text: 'Go and drink a cup of tea.. ',
                imageUrl: 'https://media.tenor.com/p-aT9UjQHXQAAAAM/tea-pour-the-tea.gif',
                imageWidth: 300,
                imageHeight: 200,
            })
        }
        time--;

    }, 1000);




    pause.onclick = function () {
        clickaudio.play()
        // pause.style.display = "block"
        if (pause.onclick) {
            pause.style.boxShadow = "none"
            pause.style.marginTop = "6px"
            clearInterval(intervalId)

        }

        else {
            pause.style.boxShadow = " rgb(235, 235, 235) 0px 6px 0px"
            pause.style.marginTop = "0px"
            clearInterval(intervalId)
        }

    }

}











reset.onclick = function () {
    clickaudio.play()
    clearInterval(intervalId)
    timercount.textContent = `00:00`


}














let input = document.querySelector(".form-input")
let addbtn = document.querySelector(".add")
let list = document.querySelector("ul")
let focus = document.querySelector(".focus")

input.addEventListener("keydown", (e) => {
    input.style.backgroundColor = " #9e3e3e"
    input.style.color = "rgba(236, 230, 230, 0.658)"


})

addbtn.addEventListener("click", (e) => {
    e.preventDefault();
    focus.textContent = input.value

    if (input.value.trim() !== "") {

        let listItem = document.createElement("li")
        listItem.classList.add("list-group-item")
        listItem.classList.add("mt-2")
        listItem.classList.add("d-flex")
        listItem.classList.add("&#xf058")
        listItem.classList.add("justify-content-between")
        listItem.classList.add("align-items-center")
        listItem.style.padding = "10px 5px"
        listItem.style.fontSize = "20px"




        let wrapper = document.createElement("div")
        wrapper.classList.add("wrapper")


        let checkbtn = document.createElement("button")
        checkbtn.classList.add("check")
        checkbtn.classList.add("border-0")
        checkbtn.classList.add("mx-2")
        checkbtn.style.backgroundColor = "white"
        checkbtn.innerHTML = `<i class="fa-regular fa-circle-check"></i>`

        let span = document.createElement("span")
        span.innerText = input.value


        let deletebtn = document.createElement("button")
        deletebtn.classList.add("deletebtn")
        deletebtn.style.border = "none"
        deletebtn.style.backgroundColor = "white"
        deletebtn.style.marginRight = "10px"
        deletebtn.innerHTML = `<i class="fa-solid fa-trash"></i>`




        wrapper.append(checkbtn, span)
        listItem.append(wrapper, deletebtn)
        list.prepend(listItem)
        input.value = ""


        deletebtn.addEventListener("click", function (e) {
            if (window.confirm("Want to delete?")) {
                e.target.parentElement.parentElement.remove()
            }
        })

        checkbtn.addEventListener("click", function () {
            checkbtn.style.color = "#52a447"
            listItem.style.color = "rgb(158, 140, 140)"
            listItem.style.textDecoration = "line-through"


        })



    }



    let clearbtn = document.querySelector(".clear")
    clearbtn.addEventListener("click", function () {
        list.innerHTML = ""
    })



});








