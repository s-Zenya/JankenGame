var interval;
var cnt;
var you;
var me;
var flag = true;
var hands_table = {'グー':'rock','チョキ':'scissors','パー':'paper','rock':'グー','scissors':'チョキ','paper':'パー'};

$('input[name=my-hand]').change(function(){
    if(flag){
        flag = false;
        $('input[name=my-hand]').next('img').css('border-color','#e6e6e6');
        $('input[name=my-hand]:checked').next('img').css('border-color','red');
        me = hands_table[$('input[name=my-hand]:checked').val()];
        stopHand();
    }
});


function init(){
    interval = setInterval(function () {
        $('.you-hand img').attr('src','img/' + nextHand() + '.png');
    }, 300);
    cnt = -1;
    $('input[name=my-hand]').next('img').css('border-color','#e6e6e6');
    $('input[name=my-hand]').attr('checked',false);
}

function stopHand(){
    clearInterval(interval);
    $('.message').text('ぽん！');
    you = getRondomHand();
    $('.you-hand img').attr('src','img/' + hands_table[you] + '.png');
    setTimeout(function(){
        shouMessage(decision());
    },500);
}

function shouMessage(result){
    var message;
    switch (result) {
        case 'かち':
            message = 'かちo(^▽^)o';
            $('.message').text(message);
            setTimeout(function(){
                $('.message').text('じゃんけん！');
                flag = true;
                init();
            },2000);
            break;
        case 'まけ':
            message = 'まけ(￣◇￣;)';
            $('.message').text(message);
            setTimeout(function(){
                $('.message').text('じゃんけん！');
                flag = true;
                init();
            },2000);
            break;
        case 'あいこ':
            message = 'あいこで(`･ω･´)9';
            setTimeout(function(){
                flag = true;
                init();
            },1000);
            $('.message').text(message);
            break;
    }

}

function nextHand(){
    var hands = ['rock','scissors','paper'];
    cnt++;
    if(cnt >= 3){
        cnt = 0;
    }
    return hands[cnt];
}

function getRondomHand(){
    var hands = ['グー','チョキ','パー'];
    return hands[Math.floor( Math.random() * 3)];
}
