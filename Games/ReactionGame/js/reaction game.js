const infoPara = document.querySelector("#info-para");
const start = document.querySelector("#start");
const score = document.querySelector("#pervious-score-para");
const result = document.querySelector("#result-para");
const p1 = document.querySelector("#p-1");
const warning = document.querySelector("#warning");
const retry = document.querySelector("#play-again");
const allscore = document.querySelector("#rtg-score");
// text content
p1.innerHTML = "Test your reaction time.";
warning.innerHTML = '<strong>Note:</strong> After clicking on the start button, a red box will appear, hold back for the red box to change to green. After that, tap anywhere on the green box. ';

let tries=0;
let a=0,b=0,c=0,temp=0;
// jquery
$(document).ready(function() {

    $("#start").click(function() {
        tries+=1;
        let i=0;
        temp=i;
        infoPara.innerHTML = "Wait for green box!";
        $(".alert-dark").slideDown("slow");
        $("#box").slideDown("slow");
        $("#warning").slideUp("slow");
        $("#start").slideUp("slow");
       

        let nowtime = new Date().getTime();
        let randomtime = Math.floor(Math.random() * 9999) + 1000;
        console.log(nowtime);
        console.log(randomtime);

        // timer
        let timeout = setTimeout(() => {
            $("#box").hide(1);
            $("#green-box").show(1);
            result.innerHTML = "Tap Now!"
        }, randomtime);


        $("#box").click(function() {
            if(i==0 && temp==0){
                tries-=1;
                i=1;
                temp=i;
            }
            clearTimeout(timeout);
            $("#start").slideDown(1000);
            start.innerHTML = "You tapped on red box, Click to restart";
            $("#box").slideUp(1000);
            $("#warning").slideDown(1000);
        });

        $("#green-box").click(function() {
            $(".alert-success").slideDown(500);
            let clickedtime = new Date().getTime();
            console.log(clickedtime);
            let result = clickedtime - ( nowtime + randomtime);
            score.innerHTML =" " +result/1000 + " seconds";
            $("#green-box").slideUp(1000);
            $("#play-again").slideDown("slow");

            
            switch(tries){
                case 1:a=" " +result/1000 + " sec";
                    break;
                case 2:b=" " +result/1000 + " sec";
                    break;
                case 3:c=" " +result/1000 + " sec";
                    break;
            }
            p1.innerHTML="Test your reaction time.<br><span class='rtg-score'>Score1:"+a+"</span><span class='rtg-score'>Score2:"+b+"</span><span class='rtg-score'>Score3:"+c;
            if(tries>2){
                retry.innerHTML="Next";
                p1.innerHTML="Your final score!<br><span class='rtg-score'>Score1:"+a+"</span><span class='rtg-score'>Score2:"+b+"</span><span class='rtg-score'>Score3:"+c;
                $("#play-again").click(function() {         
                    location.href = "../../wm-instructions.html";
                });
            }
            else{
                $("#play-again").click(function() {         
                    score.innerHTML = "";
                    p1.innerHTML="Test your reaction time.";
                    $("#play-again").slideUp("slow");
                    $("#green-box").slideUp("slow");
                    $("#start").slideDown("slow");
                    $("#warning").slideDown("slow");
                    $(".alert-success").slideUp("slow");
                    start.innerHTML = "Start";

                });
            }
        
    }); 
});
});
