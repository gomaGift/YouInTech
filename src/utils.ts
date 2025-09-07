 export const toggleMenuBar = () => {
    const button = document.querySelector(".menu-toggle") as HTMLElement;
    const navLinks = document.querySelector(".nav-links") as HTMLElement

    button.addEventListener('click', () => {
        navLinks.classList.toggle("show")
    })
}