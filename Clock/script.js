const btn = document.getElementById("time");

btn.addEventListener("onclick",()=>{
    let date = new Date();
    btn.innerHTML=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
})

setInterval(()=>{
    let date = new Date();
    btn.innerHTML=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
})