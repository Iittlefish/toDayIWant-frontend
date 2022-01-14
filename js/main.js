function toggle_category(b) {
    var a = document.getElementById("f_f");
    var c = document.getElementById(b);
    if (a.getAttribute("disabled")) {
        a.removeAttribute("disabled")
    }
    if (c.getAttribute("data-disabled")) {
        c.removeAttribute("data-disabled");
        a.value = parseInt(a.value) - b
    } else {
        c.setAttribute("data-disabled", 1);
        a.value = parseInt(a.value) + b
    }
}

function toggle_result(){
    var a = document.getElementById("f_f");
    var x =  a.toString(2);
    if(a.value == 0 || a.value == 1){
        err();
    }
    else{
        //axios.get('https://todayiwant.com/api')
        //.then( (response) => console.log(x))
        //.catch( (error) => console.log(error));
        switch(a.value){
            case '5':
            window.location.href="result.html";
            break;
            case '15':
            window.location.href="result1.html";
            break;
            case '16':
            window.location.href="result2.html";
            break;
        }
    }
}

function err(){
    window.location.href="error.html"
}

