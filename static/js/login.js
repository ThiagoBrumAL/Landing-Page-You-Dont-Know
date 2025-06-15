const signin = document.getElementById("btn-signin");

signin.addEventListener("click", (event) =>{
    event.preventDefault();

    const fieldName = document.getElementById("field-name");
    const fieldPass = document.getElementById("field-password");

    const inp_name = document.getElementById("name-input").value;
    const inp_pass = document.getElementById("password-input").value;

    const containErrorName = document.getElementById("error-name");
    const containErrorPass = document.getElementById("error-password");

    let hasError = false;


    if(!inp_name || inp_name !== "admin"){
        if (!containErrorName){
            const message_error = document.createElement("p");
            message_error.id = "error-name";
            message_error.innerText = "Sorry, name not found!";
            message_error.style.color = "red";
            message_error.style.fontSize = "12px";
            fieldName.appendChild(message_error);
            hasError = true;
        }else{
            containErrorName.innerText = "Sorry, name not found!";
            fieldName.appendChild(containErrorName);
            hasError = true;
        }
    }else{
        containErrorName.innerText = "";
        fieldName.appendChild(containErrorName);
    }
    if(!inp_pass || inp_pass !== "123"){
        if (!containErrorPass){
            const message_error = document.createElement("p");
            message_error.id = "error-password";
            message_error.innerText = "Sorry, password not found!";
            message_error.style.color = "red";
            message_error.style.fontSize = "12px";
            fieldPass.appendChild(message_error);
            hasError = true;
        }else{
            containErrorPass.innerText = "Sorry, password not found!";
            fieldPass.appendChild(containErrorPass);
            hasError = true;
        }
    }else{
        containErrorPass.innerText = "";
        fieldPass.appendChild(containErrorPass);
    }

    if(hasError) return console.log("Erro in login");
    

    const loading = document.createElement("div");
    const body = document.querySelector("body");

    body.innerHTML = "";

    loading.classList.add("loading");
    for(let i = 1; i <= 5; i++){
        const effect = document.createElement("div");
        effect.classList.add("effect");
        effect.classList.add(`effect-${i}`);
        loading.appendChild(effect);
    }
    body.appendChild(loading);
    setTimeout(() =>{
        window.location.href = "../pages/home.html";
    },5000)
})