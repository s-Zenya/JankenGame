var win=0;
function decision(){
    //勝敗結果を格納する変数
    var result;
    //自分の出す手が「グー」の場合
    if(me == 'グー'){
        //「かち」になる場合
        if(you == 'チョキ'){
            result = 'かち';
            win++;
        } else
        //「あいこ」になる場合
        if(you == 'グー'){
            result = 'あいこ';
        } else
        //「まけ」になる場合
        if(you == 'パー'){
            result = 'まけ';
        }
    }

		else
    //自分の出す手が「チョキ」の場合
    if(me == 'チョキ'){
        //「かち」になる場合
        if(you == 'パー'){
            result = 'かち';
            win++;
        } else
        //「あいこ」になる場合
        if(you == 'チョキ'){
            result = 'あいこ';
        } else
        //「まけ」になる場合
        if(you == 'グー'){
            result = 'まけ';
        }
    }


		else
    //自分の出す手が「パー」の場合
    if(me=='パー'){
        //「かち」になる場合
        if(you=='グー'){
            result='かち';
            win++;
        } else
        //「あいこ」になる場合
        if(you=='パー'){
            result='あいこ';
        } else
        //「まけ」になる場合
        if(you=='チョキ'){
            result='まけ';
        }
    }


    document.getElementById("result").textContent="自分    "+win+"回勝ち";
    return result;
}
