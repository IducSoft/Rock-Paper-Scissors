import App from "./App/App.js"


document.addEventListener("DOMContentLoaded", (e)=>{

    App();
});

document.addEventListener("click", (e)=>{

    if(e.target.id=="rock" || e.target.id=="paper" || e.target.id=="scissors"){

        console.log(e.target)
    }
})