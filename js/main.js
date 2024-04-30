const links = document.getElementById("links")
const bar = document.getElementById("bar")

bar.onclick = () => {
    links.classList.toggle("active")
    bar.classList.toggle("active")
}