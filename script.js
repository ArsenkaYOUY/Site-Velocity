
function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(btn => btn.classList.remove("button--active"));
}

function showTab(index) {
    tabsBtns[index].classList.add("button--active");
    tabsItems[index].classList.remove("hide"); 
}

const tabsBtns = document.querySelectorAll(".tabs button");
const tabsItems = document.querySelectorAll(".tabs__item");
const anchors = document.querySelectorAll(".header__nav a");

hideTabs();
showTab(0);

tabsBtns.forEach((btn , index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}))

anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();

        const id = anc.getAttribute("href");
        const element = document.querySelector(id);
        window.scroll({
            top: element.offsetTop - 80,
            behavior: 'smooth'
        })
    })
})



