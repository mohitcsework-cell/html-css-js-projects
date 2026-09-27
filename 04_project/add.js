// const color = document.getElementById('');
// colors.addEventListener('click', (e)=>{
//     const child = e.target;
//     const body = document.querySelector('body');
//     body.style.backgroundcolor = child.id ;
// })

const color = document.getElementById("colors");

color.addEventListener("click", (e) => {

    const child = e.target;

    const body = document.querySelector("body");

    body.style.backgroundColor = child.id;

});