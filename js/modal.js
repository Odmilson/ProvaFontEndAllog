const modalWrapper = document.querySelector(".modal-wrapper");

function closeModal() {
    modalWrapper.style.display = "none";
}

const rows = document.querySelectorAll(".suppliers-table__row");

rows.forEach((row) => {
    row.addEventListener("click", () =>{
        modalWrapper.style.display = "flex";
    })
});
