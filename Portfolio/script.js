var typed = new Typed(".text", {
    strings: ["FrontEnd Developer", "Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
function toggleFrontend(isClose) {
    let arrow = document.getElementById("down-arrow")
    let element = document.getElementById("tech-bar-frontend");
    let css = getComputedStyle(element);
    let display = css.getPropertyValue("display");
    if (display === "block" || isClose) {
        arrow.style.animation = "arrowup 0.3s ease forwards"
        element.style.display = "none"
        element.style.animation = "barhide 0.3s ease-in "
    }
    else {
        element.style.display = "block"
        arrow.style.animation = "arrowdown 0.3s ease forwards"
        element.style.animation = "barvisible 0.3s ease-out"
        toggleBackend(true)
        // let backEndElement= document.getElementById("tech-bar-backend")
        // backEndElement.style.display = "none"

    }
}

function toggleBackend(isClose) {
    let arrow = document.getElementById("down-arrow-backend")
    let element = document.getElementById("tech-bar-backend");
    let css = getComputedStyle(element);
    let display = css.getPropertyValue("display");
    if (display === "block" || isClose) {
        arrow.style.animation = "arrowup 0.3s ease forwards"
        element.style.display = "none"
        element.style.animation = "barhide 0.3s ease-in "

    }
    else {
        element.style.display = "block"
        arrow.style.animation = "arrowdown 0.3s ease forwards"
        element.style.animation = "barvisible 0.3s ease-out"
        toggleFrontend(true)
        // let frontEndElement= document.getElementById("tech-bar-frontend")
        // frontEndElement.style.display = "none"

    }
}

// function scrollToElement(scrollid)
// {
//     let element= document.getElementById(scrollid)
//     element.scrollIntoView({
//         behavior: "smooth"
//     })
   
// }

/*==================== DARK LIGHT THEME ====================*/ 

// const themeButton = document.getElementById('theme-btn')
// const darkTheme = 'dark-theme'
// const iconTheme = 'bxs-sun'

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//   themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })