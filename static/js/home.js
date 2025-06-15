function openSide(){
    let sidebar = document.getElementById("side-bar");
    let sideEffect1 = document.getElementById("side-effect-1");
    let sideEffect2 = document.getElementById("side-effect-2");

    sidebar.classList.toggle("active");
    sideEffect1.classList.toggle("active");
    sideEffect2.classList.toggle("active");
}

const logout = document.getElementById("logout");

logout.addEventListener("click", ()=>{
    const body = document.querySelector("body");
    body.innerHTML = "";
    const divspinner = document.createElement("div")
    divspinner.classList.add("spinner");
    body.appendChild(divspinner);
    setInterval(()=>{
        window.location.href = "../pages/login.html";
    }, 10000);
})

const btnMode = document.getElementById("btn-mode");

btnMode.addEventListener("click", () => {
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    const navBar = document.querySelectorAll("#nav-bar ul li a");
    const nodeSideBarlinks = document.querySelectorAll("#side-bar ul li a");
    const nodeSideBarItems = document.querySelectorAll("#side-bar ul li");
    const sideEffect1 = document.getElementById("side-effect-1");
    const sideEffect2 = document.getElementById("side-effect-2");
    const nodeSecDevices = document.querySelectorAll(".sec2 .c-sec-geral .container .device");
    const sec_Geral_2 = document.querySelectorAll(".c-sec-geral-2")
    const sideBar = document.getElementById("side-bar");
    const menu = document.querySelector(".menu");

    const hasValue = btnMode.querySelector(".fa-moon") !== null;

    btnMode.innerText = "";

    const i = document.createElement("i");
    i.classList.add("fa-solid");

    if(hasValue){
        i.classList.add("fa-sun")
    }else{
        i.classList.add("fa-moon");
    }

    btnMode.appendChild(i);

    body.classList.toggle("dark");
    header.classList.toggle("dark");
    navBar.forEach(link => link.classList.toggle("dark"));
    nodeSideBarlinks.forEach(icon => icon.classList.toggle("dark"));
    nodeSideBarItems.forEach(item => item.classList.toggle("dark"));
    sideEffect1.classList.toggle("dark");
    sideEffect2.classList.toggle("dark");
    nodeSecDevices.forEach(device => device.classList.toggle("dark"));
    sec_Geral_2.forEach(item => item.classList.toggle("dark"));
    menu.classList.toggle("dark");
    sideBar.classList.toggle("dark");
})