function openSide(){
    let sidebar = document.querySelector(".side-bar");
    let sideEffect1 = document.querySelector(".side-effect-1");
    let sideEffect2 = document.querySelector(".side-effect-2");

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