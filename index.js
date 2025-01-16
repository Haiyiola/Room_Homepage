const leftNav = document.getElementById("left-nav")
const rightNav = document.getElementById("right-nav")
const leftNavTwo = document.getElementById("left-nav-2")
const rightNavTwo = document.getElementById("right-nav-2")
const leftNavThree = document.getElementById("left-nav-3")
const rightNavThree = document.getElementById("right-nav-3")
const sectionOne = document.getElementById("section-1")
const sectionTwo = document.getElementById("section-2")
const sectionThree = document.getElementById("section-3")

function section(task) {
    task.style.display = "block"
    task.style.display = "flex"
    task.style.flexDirection = "row"
}
rightNav.addEventListener("click", function(){
    sectionOne.style.display = "none"
    // sectionTwo.style.display = "block"
    // sectionTwo.style.display = "flex"
    // sectionTwo.style.flexDirection = "row"
    section(sectionTwo)
})
leftNavTwo.addEventListener("click", function(){
    sectionTwo.style.display = "none"
    section(sectionOne)
})
rightNavTwo.addEventListener("click", function(){
    sectionTwo.style.display = "none"
    section(sectionThree)
})
leftNavThree.addEventListener("click", function(){
    sectionThree.style.display = "none"
    section(sectionTwo)
})