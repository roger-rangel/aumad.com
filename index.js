

    var CountDownDate = new Date().getTime();
    
    var x = setInterval(function(){
        var now = new Date().getTime();
        var distance = CountDownDate * now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / ( 1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance / (100 * 60) / 1000);

    document.getElementById("launch").innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s";

    if (distance < 0){
        clearInterval(x);
        document.getElementsByClass("Shortly").innerHTML = "EXPIRED";
    }
    }, 1000)

