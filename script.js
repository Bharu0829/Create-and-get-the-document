function change() {
    
    document.getElementsByClassName("head")[0].setAttribute("style", "background-color:yellow;font-size:30px;color:red");
    var header = document.createElement("h4");
    header.innerText = "content";
    header.setAttribute("style", "background-color:green;font-size:30px");
    document.getElementsByClassName("tittle")[0].appendChild(header);
    var about = document.getElementsByClassName("hack");
    about[0].setAttribute("style", "background-color:orange;font-size:20px;color:green");
    document.getElementsByTagName("p")[0].setAttribute("id", "phara");
    document.getElementById("phara").setAttribute("style", "background-color:gray;font-size:30px;color:white");
    document.getElementsByTagName("p")[1].setAttribute("style", "font-size:40px;border-bottom:solid;border-color:black");
    var bharu = document.createElement("h5");
    bharu.innerText = "continue"
    document.getElementsByClassName("block")[0].innerText = "continue";
    var disable = document.getElementsByClassName('tittle')[0];
    if (disable) {
        disable.remove();
    }
}

function movement() {
    document.getElementsByTagName("p")[2].setAttribute("style", "background-color:gray;font-size:35px");
    document.getElementById("Backup").setAttribute("style", "background-color:oklch");
    document.getElementsByTagName("h1")[0].setAttribute("style", "font-size:30px;padding:5px;boder:solid;boder-color:yellow");
    var correct = document.getElementById('Backup');
    if (correct) {
        correct.remove();
    }
}

function added() {
    document.getElementsByTagName("h3")[0].setAttribute("style", "color:red;font-size:25px");
    var apply = document.createElement("h6");
    apply.innerText = "step one";
    apply.setAttribute("style", "color:red;font-size:25px");
    document.getElementById("application").appendChild(apply);
    apply.addEventListener("click", function () {
        var applytext = document.createElement("h6");
        applytext.innerText = "step two";
        applytext.setAttribute("style", "color:red;font-size:25px");
        document.getElementById("application").appendChild(applytext);

        applytext.addEventListener("click", function () {
            var applytext1 = document.createElement("h6");
            applytext1.innerText = "step three";
            applytext1.setAttribute("style", "color:red;font-size:25px");
            document.getElementById("application").appendChild(applytext1);
           
        })
    })
}

function empty() {
    var collect=document.getElementById('empty');
    if (collect) {
        collect.remove();
}
    
}





