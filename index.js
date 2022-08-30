function time(){

    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");

    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let am_pm = "AM"

    if(hrs == 0){
        hrs = 12;
    }
    if(hrs > 12){
        hrs-=12;
        am_pm = "PM";
    }
    if(hrs < 10){
        hrs = "0" + hrs;
    }
    if(mins < 10){
        mins = "0" + mins;
    }
    if(secs < 10){
        secs = "0" + secs;
    }

    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
    ampm.innerText = am_pm;
}
time();

let oneSecond = 1000;
setInterval(time, oneSecond);

function setTime() {
    var x = document.getElementById("morning").value
    var y = document.getElementById("afternoon").value
    var z = document.getElementById("evening").value

    var hours = new Date().getHours();
    
    if(x == hours){
        document.getElementById("msg1").innerText = "Good Morning";

        document.getElementById("msg2").innerText = "Grab some healthy breakfast";

        let image = document.getElementById("alarmimage");
        image.style.backgroundImage = "url(./girlimg.svg)";
    }
    if(y == hours){
        document.getElementById("msg1").innerText = "Good Afternoon!! Take some sleep";

        document.getElementById("msg2").innerText = "lets have some lunch!";

        document.getElementById("aftr").innerHTML = x;

        let image = document.getElementById("alarmimage");
        image.style.backgroundImage = "url(./afternoon.svg)";
        
    }
    if(z == hours){
        document.getElementById("msg1").innerText = "Good evening";

        document.getElementById("msg2").innerText = "get some tea!";
        

        let image = document.getElementById("alarmimage");
        image.style.backgroundImage = "url(./evening.svg)";
        
    }

    var tag = document.getElementById("alarmdisplay");
    tag.style.opacity = 1;

    var e = document.getElementById("morning");
    var text1 = e.options[e.selectedIndex].text;
    var val1 = e.options[e.selectedIndex].value;
    var valued1 =  val1.slice(0,2);
    var muhurt1 = val1.slice(-2)
    muhurt1 = `'${muhurt1}'`;
    console.log(valued1, muhurt1);

    var f = document.getElementById("afternoon");
    var text2 = f.options[f.selectedIndex].text;
    var val2 = f.options[f.selectedIndex].value;
    var valued2 =  val2.slice(0,2);
    var muhurt2 = val2.slice(-2)
    muhurt2 = `'${muhurt2}'`;
    console.log(valued2, muhurt2);


    var g = document.getElementById("evening");
    var text3 = g.options[g.selectedIndex].text;
    var val3 = g.options[g.selectedIndex].value;
    var valued3 =  val3.slice(0,2);
    var muhurt3 = val3.slice(-2)
    muhurt3 = `'${muhurt3}'`;
    console.log(valued3, muhurt3);

    console.log(text3);
    var idExist1 = document.getElementById("mrng");
    if(idExist1){
        idExist1.innerHTML = `Wake Up Time : ${text1} `;
    }
    var idExist2 = document.getElementById("aftr");
    if(idExist2){
        idExist2.innerHTML = `Lunch time : ${text2} `;
    }
    var idExist3 = document.getElementById("eveng");
    if(idExist3){
        idExist3.innerHTML = `Nap Time : ${text3} `;
    }
    
}