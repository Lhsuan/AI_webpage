window.alert = function (messege) {
    const alert = document.createElement("div");
    const alertButton = document.createElement("button");
    alertButton.innerText = '離開';
    alert.classList.add('alert');
    alert.setAttribute('style', `
        position:fixed;
        top:100px;
        left:50%;
        padding:20px;
        border-radius:10px;
        background-color:white;
        color:white;
        display:flex;
        flex-direction:column;
    
    `);
    alertButton.setAttribute('style', `
        border:1px solid black;
        background-color:#C35555;
        border-radius:5px;
        padding:5px;

    `);
    alert.innerHTML = `<span style="padding:10px">${messege}</span>`;
    alert.appendChild(alertButton);
    alertButton.addEventListener('click', (e) => {
        alert.remove();
    });
    document.body.appendChild(alert);
}