
function T1() {
    document.getElementById("container").style.display='block';
    document.getElementById("title").style.display='none';
    document.getElementById("Home").style.display='flex';
    document.getElementById("screen").innerHTML = "歡迎遊玩冷笑話大冒險！ *注意:您將會在之後的旅程服用到過多的冷笑話*<br>您確定還要進入遊戲？";
    document.getElementById("TB3").style.display='';
}
function T2() {
    document.getElementById("container").style.display='block';
    document.getElementById("title").style.display='none';
    document.getElementById("Home").style.display='flex';
    document.getElementById("screen").innerHTML = "主角在無意間轉生到了一個異世界，是一個充滿著魔物、被魔王控制的世界。神奇的是，這個世界觀並不是以正常的金木水火土類型的魔法打怪，而是要靠說”冷笑話”打擊魔物，但因為魔王長久的控制使得能夠使用冷笑話魔法的勇士數量幾乎為零。為了能換取和平的未來，最後一位冷笑話勇士(主角)成為了這個世界最後的希望";
}
function T3() {
    document.getElementById("container").style.display='block';
    document.getElementById("title").style.display='none';
    document.getElementById("Home").style.display='flex';
    document.getElementById("screen").innerHTML = "主角：擁有激發冷笑話魔力的人，在冒險的過程需要蒐集寶物、秘笈，並學習更多的冷笑話。目標是將這個世界的魔王擊敗。<br>中年大叔：曾經為冷笑話勇士，被魔王榨乾魔力之後逃走後，現在則是個躲在森林裡的麻瓜，因為擁有豐富知識，在故事裡扮演著主角的軍師，是推進故事劇情的重要角色。<br>尷尬魔王：統治世界的霸主，因為極度討厭聽冷笑話所以學了禁忌魔法-尷尬，透過尷尬魔法將所有會講冷笑話的人尷尬死了，不知不決就成了這個世界的魔王。<br>尷尬怪：尷尬魔王為了讓世界不再有冷笑話所創造的魔物，平常會像流浪狗一樣常常出現在世界的各個角落，在有人講冷笑話時出現並尷尬對方。";
}
function T4() {
    document.getElementById("container").style.display='none';
    document.getElementById("title").style.display='flex';
    document.getElementById("screen").innerHTML = "";
    document.getElementById("TB3").style.display='none';
}
function T5() {
    document.getElementById("screen").innerHTML = "歡迎遊玩冷笑話大冒險！！！(第二次..<br>首先就先來命名唄！ *長度不能超過15字，可為英文或中文";
    document.getElementById("Home").style.display='none';
    document.getElementById("NameBar").style.display='block';
}
var MC=0;
function T6() {
    MC= document.getElementById("name").value;
    if (MC.length===0) {
        document.getElementById("screen").innerHTML = "您不可以沒有名字，我們會不知道怎麼稱呼您，請再次輸入...!";
    }
    else {
        document.getElementById("NameBar").style.display='none';
        document.getElementById("bottom1").style.display='';
        document.getElementById("screen").innerHTML = "命名成功..<br>"+MC+" 勇者，開始您的冒險吧!!";
    }
    console.log(MC);
}
function T7() {
    document.getElementById("container").style.display='none';
    document.getElementById("container2").style.display='block';
    document.getElementById("container2").style.backgroundImage = "url('image/scene/S0.jpg')";
    document.getElementById("bottom2").innerHTML = '點擊對話框開始故事..';
}

function T8() {
    document.getElementById("container2").style.backgroundImage = "url('image/fight/F1.jpg')";
    document.getElementById("bottom3").innerHTML = '(登登登登愣登..嘟..嘟..登愣...)<br>旁白:'+ MC +'進入了戰鬥..';
    document.getElementById("container3").style.display='none';
    document.getElementById("bottom3").style.display='block';
    document.getElementById("bottom2").style.display='none';
}
function T9() {
    document.getElementById("container2").style.backgroundImage = "url('image/fight/F2.jpg')";
    document.getElementById("bottom2").innerHTML = '旁白: 因為中年大叔是通緝犯，所以尷尬怪直接攻擊了中年大叔和'+MC+'..<br>遊戲結束..<br>請重新選擇吧...';
}
function T10() {
    document.getElementById("container2").style.backgroundImage = "url('image/fight/F4.jpg')";
    document.getElementById("container4").style.display='none'
    document.getElementById("bottom3").innerHTML = MC +': 從前有一個人叫小菜..然後他就被端走了';
}
const x1=document.querySelector("div #bottom2");
const x2=document.querySelector("div #bottom3");
var num=0;
var fight=0;
x1.addEventListener("click",function(){
    num=num+1;
    switch (num){
        case 1:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S1.jpg')";
            document.getElementById("bottom2").innerHTML = '旁白: 一個風和日麗的早晨，'+ MC +'正在上班的途中，距離工作場所三個路口的距離，';
            break;
        case 2:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S2.jpg')";
            document.getElementById("bottom2").innerHTML = '一張一千元鈔票落在馬路上，'+ MC +'興奮的將它撿了起來，但在仔細檢查後發現了這張鈔票並不是新台幣，';
            break;
        case 3:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S3.jpg')";
            document.getElementById("bottom2").innerHTML = '正當'+ MC +'疑惑地端詳這張鈔票...';
            break;
        case 4:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S4.jpg')";
            document.getElementById("bottom2").innerHTML = MC +': 這是甚麼？？';
            break;
        case 5:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S5.jpg')";
            document.getElementById("bottom2").innerHTML = '(叭叭叭叭...)';
            break;
        case 6:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S6.jpg')";
            document.getElementById("bottom2").innerHTML = MC +':(驚)sh*t！！';
            break;
        case 7:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S7.jpg')";
            document.getElementById("bottom2").innerHTML = '(咚！)(翻滾…)';
            break;
        case 8:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S8.jpg')";
            document.getElementById("bottom2").innerHTML = MC +'(心想): 呃…我要死了嗎...(緩緩拿起手上的謎之鈔票)';
            break;
        case 9:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S9.jpg')";
            document.getElementById("bottom2").innerHTML = '旁白: 突然間一道光閃現';
            break;
        case 10:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S10.jpg')";
            document.getElementById("bottom2").innerHTML = '(' + MC + '意識轉移中…)';
            break;
        case 11:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S11.jpg')";
            document.getElementById("bottom2").innerHTML = '點擊對話框進入下一章..';
            break;
        case 12:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S12.jpg')";
            document.getElementById("bottom2").innerHTML = '旁白:'+ MC +'驚醒後，來到了一座森林，搞不清楚狀況的他遇到了一位穿著無袖背心的中年大叔在他身邊…';
            break;
        case 13:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S13.jpg')";
            document.getElementById("bottom2").innerHTML = '中年大叔: (搜搜搜)';
            break;
        case 14:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S14.jpg')";
            document.getElementById("bottom2").innerHTML = MC +': 你..你是誰，你想做甚麼！';
            break;
        case 15:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S15.jpg')";
            document.getElementById("bottom2").innerHTML = MC +': 你..你是誰，你想做甚麼！';
        case 16:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S16.jpg')";
            document.getElementById("bottom2").innerHTML = '中年大叔: 喔..沒有喔(心虛的摸下巴)，我只是路過喔，噓噓噓..(吹口哨)';
            break;
        case 17:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S17.jpg')";
            document.getElementById("bottom2").innerHTML = MC +': (想說些甚麼但想想還是算了)那麼大叔，請問這裡是甚麼地方？為什麼這麼冷阿？(打噴嚏)';
            break;
        case 18:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S18.jpg')";
            document.getElementById("bottom2").innerHTML = '中年大叔: 瞧你這個模樣，我看你是不懂喔...咳咳..喔你說這裡阿！這裡是冷颼颼森林，<br>是所有冷笑話的寒冷集散區，簡單來說，所有冷笑話帶給人產生的寒氣都會流向這裡';
            break;
        case 19:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S19.jpg')";
            document.getElementById("bottom2").innerHTML = MC +': 冷颼颼森林..？？大叔你開玩笑吧，說冷笑話可以產生寒氣然後再匯集到這裡？';
            break;
        case 20:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S20.jpg')";
            document.getElementById("bottom2").innerHTML = '中年大叔: 看來你似乎對這個世界不太了解，那就聽我娓娓道來吧...(切換口氣)';
            break;
        case 21:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S21.jpg')";
            document.getElementById("bottom2").innerHTML = '旁白: 中年大叔突然說起了故事..';
            break;
        case 22:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S22.jpg')";
            document.getElementById("bottom2").innerHTML = '中年大叔: 這個世界，是一個擁有魔法的世界，人們彼此說著冷笑話，藉此產生能量，<br>透過大城市中間的吸收器，轉換到各種設備維持著人們的生活機能，就這樣和平的過了好幾個世紀。';
            break;
        case 23:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S23.jpg')";
            document.getElementById("bottom2").innerHTML = '直到有一天，有一位極度厭世的人，因為非常討厭聽冷笑話，在街上大肆禁止人們講冷笑話，卻也因此受到排擠，<br>忍無可忍的他，學習了這個世界的禁忌魔法…尷尬之力，他利用尷尬使所有會講冷笑話的居民不敢再說冷笑話，城市的能源也就此減少。';
            break;
        case 24:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S24.jpg')";
            document.getElementById("bottom2").innerHTML = '然而一群可以善用冷笑話之力的勇者們決定起身反抗，他們試圖以冷笑話產生的能量擊倒這個破壞世界和平的人，殊不知全部的勇者通通抵不過被尷尬的命運，<br>每位勇者都被尷尬死、壯烈犧牲，這個人也順勢著當上了世界的統治者，我們稱他為尷尬王...';
            break;
        case 25:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S25.jpg')";
            document.getElementById("bottom2").innerHTML = '點擊對話框插話..';
            break;
        case 26:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S26.jpg')";
            document.getElementById("bottom2").innerHTML = MC +': 等等..你的意思是只要講冷笑話就會有魔法？但是對上尷尬魔法有可能會掛掉？！';
            break;
        case 27:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S27.jpg')";
            document.getElementById("bottom2").innerHTML = MC +'(心想): 完了，我應該是轉生到異世界了，而且還是一個世界觀很詭異的地方';
            break;
        case 28:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S28.jpg')";
            document.getElementById("bottom2").innerHTML = '中年大叔: 對的，因為尷尬王的關係，我們已經沒有辦法再說冷笑話了。而我也是當時的勇者之一，但我也敵不過尷尬王的尷尬之力，現在是能力被抽乾的凡人之軀，基本上這個世界已經沒有有能力打敗尷尬王的冷笑話勇者了...';
            break;
        case 29:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S29.jpg')";
            document.getElementById("bottom2").innerHTML = '(咻咻咻…簌簌簌…)';
            break;
        case 30:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S30.jpg')";
            document.getElementById("bottom2").innerHTML = '旁白: 在一個沒什麼之感的音效後，'+ MC +'身旁寒氣逐漸凝結成小小的粒子..';
            break;
        case 31:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S31.jpg')";
            document.getElementById("bottom2").innerHTML = MC +': 這..這是什麼(打噴嚏)';
            break;
        case 32:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S32.jpg')";
            document.getElementById("bottom2").innerHTML = '中年大叔: 那個難道是..！小子，你是能夠自由操控冷笑話能量的天選之人！<br>我原本以為這輩子不會再遇到了..(哭)';
            break;
        case 33:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S33.jpg')";
            document.getElementById("bottom2").innerHTML = MC + ': 痾..什麼意思，所以我是…冷笑話勇者？';
            break;
        case 34:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S34.jpg')";
            document.getElementById("bottom2").innerHTML = MC +'(心想): 標準的勇者劇情，不過不知道為什麼沒有什麼光榮的感覺...';
            break;
        case 35:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S35.jpg')";
            document.getElementById("bottom2").innerHTML = '中年大叔: 沒錯！！你是這個世界最後的希望！<br>但是以現在的情況，你現在需要一個老師！咳..(切換口氣)就由我這個冷笑話前輩幫助你吧...';
            break;
        case 36:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S36.jpg')";
            document.getElementById("bottom2").innerHTML = '(颼颼...咚)';
            break;
        case 37:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S37.jpg')";
            document.getElementById("bottom2").innerHTML = '旁白: 突然有一隻長得像史萊姆的怪物跳出來..';
            break;
        case 38:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S38.jpg')";
            document.getElementById("bottom2").innerHTML = '中年大叔：小子！趕快站起來，這是你測試實力的大好機會！這顆麻糬狀的東東叫尷尬怪，對牠講一句冷笑話，以這隻怪的等級你應該可以秒殺他，上啊！';
            break;
        case 39:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/S39.jpg')";
            document.getElementById("bottom2").innerHTML = '(選擇環節)';
            document.getElementById("container3").style.display='flex';
}
});
x2.addEventListener("click",function(){
    fight=fight+1;
    switch (fight){
        case 1:
            document.getElementById("container2").style.backgroundImage = "url('image/fight/F3.jpg')";
            document.getElementById("bottom3").innerHTML = '紫色的尷尬怪 生命值: 3';
            break;
        case 2:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/F4.jpg')";
            document.getElementById("bottom3").innerHTML = '你的選擇:';
            document.getElementById("container4").style.display='block';
            break;
        case 4:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/F4.jpg')";
            document.getElementById("bottom3").innerHTML = '旁白: 你的笑話讓尷尬怪感到寒冷..(對手生命-3';
            break;
        case 5:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/F4.jpg')";
            document.getElementById("bottom3").innerHTML = '旁白: 尷尬怪被你的冷笑話給冷死了...';
            break;
        case 6:
            document.getElementById("container2").style.backgroundImage = "url('image/scene/F4.jpg')";
            document.getElementById("bottom3").innerHTML = '旁白: '+ MC +'獲得勝利..';
            break;
        case 7:
            document.getElementById("container2").style.backgroundImage = "url('image/reading.jpg')";
            document.getElementById("bottom3").innerHTML = '等待開發中...';
            break;
    }});
const b1 = document.getElementById('TBA1');
b1.addEventListener('mouseover', function() {
    b1.style.backgroundColor = '#A9A9A9';
});
b1.addEventListener('mouseout', function() {
    b1.style.backgroundColor = '#F0F8FF';
});
const b2 = document.getElementById('TBA2');
b2.addEventListener('mouseover', function() {
    b2.style.backgroundColor = '#A9A9A9';
});
b2.addEventListener('mouseout', function() {
    b2.style.backgroundColor = '#F0F8FF';
});
const b3 = document.getElementById('TBA3');
b3.addEventListener('mouseover', function() {
    b3.style.backgroundColor = '#A9A9A9';
});
b3.addEventListener('mouseout', function() {
    b3.style.backgroundColor = '#F0F8FF';
});
const b4 = document.getElementById('TB2');
b4.addEventListener('mouseover', function() {
    b4.style.backgroundColor = '#A9A9A9';
});
b4.addEventListener('mouseout', function() {
    b4.style.backgroundColor = '#F0F8FF';
});
const b5 = document.getElementById('TB3');
b5.addEventListener('mouseover', function() {
    b5.style.backgroundColor = '#A9A9A9';
});
b5.addEventListener('mouseout', function() {
    b5.style.backgroundColor = '#F0F8FF';
});
const b6 = document.getElementById('TBN');
b6.addEventListener('mouseover', function() {
    b6.style.backgroundColor = '#A9A9A9';
});
b6.addEventListener('mouseout', function() {
    b6.style.backgroundColor = '#F0F8FF';
});
const b7 = document.getElementById('TBM1');
b7.addEventListener('mouseover', function() {
    b7.style.backgroundColor = '#A9A9A9';
});
b7.addEventListener('mouseout', function() {
    b7.style.backgroundColor = '#F0F8FF';
});
const b8 = document.getElementById('cho1');
b8.addEventListener('mouseover', function() {
    b8.style.backgroundColor = '#A9A9A9';
});
b8.addEventListener('mouseout', function() {
    b8.style.backgroundColor = '#F0F8FF';
});
const b9 = document.getElementById('cho2');
b9.addEventListener('mouseover', function() {
    b9.style.backgroundColor = '#A9A9A9';
});
b9.addEventListener('mouseout', function() {
    b9.style.backgroundColor = '#F0F8FF';
});
const b10 = document.getElementById('cho3');
b10.addEventListener('mouseover', function() {
    b10.style.backgroundColor = '#A9A9A9';
});
b10.addEventListener('mouseout', function() {
    b10.style.backgroundColor = '#F0F8FF';
});
    
console.log(MC);
