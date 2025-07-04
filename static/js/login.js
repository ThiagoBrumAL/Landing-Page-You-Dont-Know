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
            containErrorName.innerText = "Sorry, name not found!";
            fieldName.appendChild(containErrorName);
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
            message_error.innerText = "Sorry, password not found!";
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
    
    const body = document.querySelector("body");
    const loading = document.createElement("div");

    body.innerHTML = "";
    
    loading.classList.add("loading");

    for(let i = 1; i<=5; i++){
        const effect = document.createElement("div");
        effect.classList.add("effect",`effect-${i}`);
        loading.appendChild(effect);
    }
    body.appendChild(loading);
    setTimeout(() =>{
        window.location.href = "../pages/home.html";
    },5000);
})