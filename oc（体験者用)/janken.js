var win=0;
function decision(){
    //勝敗結果を格納する変数
    var result;
    //自分の出す手が「グー」の場合
    if(me == 'グー'){
        //「かち」になる場合
        if(you == ''){
            result = 'かち';
        } else
        //「あいこ」になる場合
        if(you == ''){
            result = 'あいこ';
        } else
        //「まけ」になる場合
        if(you == ''){
            result = 'まけ';
        }
    }

		/*else
    //自分の出す手が「チョキ」の場合
    if(me == ''){
        //「かち」になる場合
        if(you == ''){
            result = '';
        } else
        //「あいこ」になる場合
        if(you == ''){
            result = '';
        } else
        //「まけ」になる場合
        if(you == ''){
            result = '';
        }
    }
		*/

		/*else
    //自分の出す手が「パー」の場合
    if(){
        //「かち」になる場合
        if(){
            
        } else
        //「あいこ」になる場合
        if(){

        } else
        //「まけ」になる場合
        if(){

        }
    }
    */

    // document.getElementById("result").textContent="自分    "+win+"回勝ち";
    return result;
}
