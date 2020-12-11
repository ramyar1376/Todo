



setInterval(function () {
    var timess = new Date().toLocaleTimeString();
    var p1 = document.getElementById('p1');
    p1.classList.add("time_style")
    p1.innerHTML = timess;

}, 1000)

















var txt = document.getElementById('txt')

document.getElementById('btn').addEventListener('click', sum)

function mamad() {
    return txt.value.length;
}


document.addEventListener("keypress", peress);
function peress(event) {
    if (mamad() > 0 && event.which == 13) {
        total();
        txt.value="";
    }
}


function sum() {

    if (mamad() > 0) {
        total();
        txt.value = "";
    } else {
        alert("فیلد را پر کنید")
    }



}

function total() {
    var limain = document.getElementById("lil")
    var txt = document.getElementById('txt').value

    var lil = document.createElement("li");
    var btn2 = document.createElement("button");
    btn2.appendChild(document.createTextNode("x"))

    var licontent = document.createTextNode(txt);


    lil.appendChild(licontent);
    lil.appendChild(btn2)

    limain.appendChild(lil);


    lil.classList.add("cs");

    btn2.classList.add("xx");

    function cross() {
        lil.classList.toggle("green")
    }
    lil.addEventListener('click', cross)


    btn2.addEventListener('click', function () {
        lil.classList.add("delete");
    })
}






























