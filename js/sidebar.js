// let schedule = document.getElementById("schedule");

// schedule.addEventListener("click", () => {
//     let subListas = document.querySelectorAll(".navbar__sub-list");

//     subListas.forEach(function (currentValue) {
//         currentValue.classList.add("navbar__sub-list--active");
//     });
// });

// let orders = document.getElementById("orders");

// orders.addEventListener("click", () => {
//     let subListas = document.querySelector(".navbar__sub-list");
//     subListas.classList.add("navbar__sub-list--active");
//     for(subListas in subListas){
//         subListas.classList.add("navbar__sub-list--active");
//     }
// });

const buttons = document.querySelectorAll(".navbar__button");
const sublists = document.querySelectorAll(".navbar__sub-list");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {

        const isActive = sublists[index].classList.contains("navbar__sub-list--active");

        sublists.forEach((sublist) => {
            sublist.classList.remove("navbar__sub-list--active");
        });


        if (!isActive) {
            sublists[index].classList.add("navbar__sub-list--active");
        }

        buttons.forEach((btn) => {
            btn.querySelector(".fa-angle-right").classList.remove("fa-angle--down");
        });

        if (!isActive) {
            button.querySelector(".fa-angle-right").classList.add("fa-angle--down");
        }
    });
});