$(function() {
    //init_airticle();
    // start_input(judge);
})

$("body").on("keyup", function(event) {
    start_judge(event);
})

function add_listener(judge, event) {
    var input = $(".input-text");
    var start = $("#result");
    var count = 0;
    var index = 0;
    var correct_rate = 100;
    var start_time = new Date();

    input.on("keyup", function(evt) {
        var text = input[0].value;
        console.log("插入位置index："+index + "   |||  数据位置count:" + count);
        console.log(judge + "+++++++");

        if(evt.keyCode === 16 || evt.keyCode === 20 || evt.keyCode === 13) {
            evt.preventDefault();
        } else {
            console.log(index +"字母是："+ text[index]+ "   |  " + judge[index]);
            if(text != " " || index < judge.length - 1) {
                if(evt.keyCode === 8) {
                    if($("." + (index-1)).text() == "_") {
                        $("." + (index-1)).html("&nbsp;&nbsp");
                    }
                    if(count > 0) {
                        count --;
                    }
                    index --;
                    correct_rate = ((judge.length - count) / judge.length).toFixed(2) * 100;
                    $("." + index)[0].style.color = "black";
                } else {
                    if(text[index] === judge[index]) {
                        console.log(judge[index] + "==========" + text[index]);
                        $("." + index)[0].style.color = "#D4D4D4";
                        $(".display-info")[0].style.display = "block";
                        $(".display-info2").html(correct_rate.toFixed(1) + "%");
                        index ++;
                    } else {
                        console.log(judge[index] + "--------" + text[index]);
                        if(judge[index] === " ") {
                            console.log(judge[index] + "   " + index);
                            $("." + index).html("_");
                            console.log("99999999");
                            $("." + index)[0].style.color = "red";
                            console.log("00000000000");
                            count ++;
                            correct_rate = ((judge.length - count) / judge.length).toFixed(2) * 100;
                            $(".display-info")[0].style.display = "block";
                            $(".display-info2").html(correct_rate.toFixed(1) + "%");
                            index ++;
                        } else {
                            $("." + index)[0].style.color = "red";
                            count ++;
                            correct_rate = ((judge.length - count) / judge.length).toFixed(2) * 100;
                            $(".display-info")[0].style.display = "block";
                            $(".display-info2").html(correct_rate.toFixed(1) + "%");
                            index ++;
                        }
                    }
                }
            } else {
                evt.preventDefault();

            }
        }
        if(text.length > judge.length - 1) {
            input_end(judge, start_time, start, input, correct_rate);
            count = 0;
            index = 0;
            correct_rate = 100;
            event.preventDefault();
            evt.preventDefault(evt);
            event.preventDefault(event);
        }
    })
}

function input_end(judge, start_time, start, input, correct_rate) {
    var time = 2;
    var end_time = new Date();
    var spend_time = (end_time.getMinutes() * 60 + end_time.getSeconds()) - (start_time.getMinutes() * 60 + start_time.getSeconds());
    var rate = ((judge.length) / (spend_time / 60)).toFixed(1);

    input.blur();
    start[0].style.display = "block";
    $(".result-info").append("您这次的正确率是：" + correct_rate + "%\n" + "<br>" +
                            "您这次的耗时是：" + spend_time + "s" + "<br>" +
                            "您这次的打字速率是：" + rate + " 字每分钟" + "<br>" +
                             time +"秒后自动消失！");
    input[0].value = null ;
    for(var i = 0; i < judge.length; i ++) {
        $("." + i).remove();
    }

    window.setInterval(function() {
        time --;
        if (time === 0) {
            location.href = "/typewriting/";
        }
    }, 1000);
}

function init_airticle(judge) {
    var write = judge.split('');

    for (var i = 0; i < write.length; i++) {
        if(write[i] === " ") {
            $(".airticle").append("<label class=" + i + ">" + "&nbsp;&nbsp;" + "</label>");
        } else {
            $(".airticle").append("<label class=" + i + ">" + write[i] + "</label>");
        }
    }
}

function start_input(judge) {
    $("body").on("keyup", function(event) {
        var judge = "Font size shijian mistake you can make in life is to continually.";
        var input = $(".input-text");
        var start = $("#result")[0];

        if (event.keyCode == "13" && input[0].value < judge.length - 1) {
            start.style.display = "none";
            input.focus();
            add_listener(judge);
        }
    })
}

function start_judge(event) {
    if (event.keyCode === 13) {
        var judge = null;
        judge = get_airticle();
        console.log(judge);
        var input = $(".input-text");
        var start = $("#result")[0];

        start.style.display = "none";
        input.focus();
        console.log("666666666");
        init_airticle(judge);
        console.log("77777777");
        $(".result-info").html("");

        add_listener(judge, event);

    }
}

function get_airticle() {
    var random_number = (Math.random() * 21).toFixed(0);
    var airticles = [
        "Font size shijian mistake you can make in life is to continually.",
        "Force has no place where there is need of skill and skil.",
        "I know that many will call this useless work.",
        "If there is a wrong wat to do something, then someone will do it.",
        "The sure way to miss success is to miss the opportunity.",
        "We dot't stop playing because wo grow old; we grow old because we stop playing.",
        "Never think that war, no matter how necessary, nor how justified, is not a crime.",
        "However beautiful the strategy, you should occasionally look at the results.",
        "To keep your secret is wisdom; to expect others keep it is folly.",
        "Luck is what happens when preparation meets opportunity.",
        "The biggest difference between time and space is that you can't reuse time.",
        "In the end, it's not going to matter how many breaths you took, but how many moments took your breath away.",
        "What we observe is not nature itself, but nature exposed to our method of questioning.",
        "Everything we call real is made of things that cannot be regarded ad real.",
        "What we think, or what we know, or what we believe is, in the end, of little ocnsequence. The only consequence is what we do.",
        "No one is thinking if everyone is thinking alike.",
        "The first step to getting the things you want out of life is this: Decide what you want.",
        "They are things that are so serious that you can only joke about them.",
        "The wind and fire where to stop but don't tell me.",
        "Kindness is a language which the deaf can hear and the blind can read.",
        "Success is never final, Failure is never fatal, It's courage that counts.",
        "I am not afraid of an army of lions led by a sheep, I am afraid of an army of sheep led by a lion"
    ];

    return airticles[random_number];
}
