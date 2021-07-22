const quiz=[
    {
    question:'お茶漬けの素に入っている「あられ」には、何の意味があるでしょうか？',
    ansers: ['湿気予防のため','食感が良いから','香りが良いから','色合いのため'],
    collect:'湿気予防のため'
    },
    {
    question:'ことわざの「急がば回れ」の語源となったのはどこでしょうか？',
    ansers: ['富士山','鳥取砂丘','清水寺','琵琶湖'],
    collect:'琵琶湖'
    },
        {
    question:'「地震、雷、火事、親父」と怖いものを順に並べた言葉があります。この「親父」は元々自然災害を表していたという説がありますが、それは一体何でしょうか？',
    ansers: ['津波','台風','火山の噴火','雪崩'],
    collect:'台風'
    },
        {
    question:'靴の一種、「ローファー」には英語でどんな意味があるでしょうか？4',
    ansers: ['怠け者','働き者','親不孝者','幸せ者'],
    collect:'怠け者'
    },
        {
    question:'日本で人気のファーストフードのとあるメニューは、ドイツでは「ポメス」と呼ばれます。そのファーストフードとは一体なんでしょうか？',
    ansers: ['ハンバーガー','チキンナゲット','フライドポテト','アイスクリーム'],
    collect:'フライドポテト'
    },
        {
    question:'お寿司屋さんでは、醤油のことをある色の名前で呼びます。何と呼ぶでしょうか？',
    ansers: ['アカ','ミドリ','ムラサキ','クロ'],
    collect:'ムラサキ'
    },
        {
    question:'ラー油の「ラー」とはどんな意味でしょうか？',
    ansers: ['辛い','香ばしい','赤い','美味しい'],
    collect:'辛い'
    },
        {
    question:'昔の私の色は赤色をしていて、今の色になったのは突然変異と考えられています。私の多くは、取り出して、そのまま売られる場合もあれば、さらに綺麗に磨かれて売られることもあります。さて、わたしは誰でしょう。',
    ansers: ['じゃがいも','とうもろこし','お米','かぼちゃ'],
    collect:'お米'
    },
        {
    question:'しゃっくりはある調味料をなめると止まります。ある調味料とはなんでしょう？',
    ansers: ['お酢',' 砂糖','醤油','塩'],
    collect:'砂糖'
    },
        {
    question:'氷が長持ちする作り方はなんでしょう？',
    ansers: ['塩をいれた水で氷を作る','お酢をいれた水で氷りを作る','砂糖をいれた水で氷を作る','沸騰したお湯をいれて氷を作る'],
    collect:'沸騰したお湯をいれて氷を作る'
    }

];

/*const question=[
    '通るときには閉まって、通らないときには開いているものは何？',
    '問題2',
    '問題3',
    '問題4',
    '問題5',
    '問題6',
    '問題7',
    '問題8',
    '問題9',
    '問題10'
];
const ansers=[
    'A',
    'B',
    'C',
    'D'
];
const collect=[
    'A',
    'B',
    'A',
    'A',
    'A',
    'B',
    'A',
    'A',
    'B',
    'B'
];*/


//HTML内のbutton
const $button=document.getElementsByTagName('button');
const $comment=document.getElementById('comment');
const $next=document.getElementById('gonext');
let quizcount=0
let COUNT=1
let score=0

//while(quizcount<quiz.length){
console.log($next.textContent);
//セットアップ
const setup=()=>{
    //問題分を表示
    document.getElementById('jsQuestion').textContent=quiz[quizcount].question;
    //ボタン内に選択肢を表示
    for(let i=0;i<4;i++){
   $button[i].textContent=quiz[quizcount].ansers[i];
    }
}
setup();

let judge='-';
const comment=()=>{
    $comment.textContent=judge
}
comment();

let nextStr=COUNT +'問目';
const gonext=()=>{
    $next.textContent=nextStr
}
gonext();

//右下ボタンの値
const btnStr =()=>{
    if(quizcount<quiz.length){
        nextStr='次の問題へ'
        gonext();
    
}else{
    nextStr='おわり'
    gonext();
};
}

//正誤判定
//while(quizcount < quiz.length){

let j=0
while(j <quiz[quizcount].ansers.length){
//for(let j=0;j<quiz[quizcount].ansers.length;j++){

$button[j].addEventListener
        ('click',(e)=>{
            //クリックイベント
                    if(quiz[quizcount].collect === e.target.textContent){
                        //window.alert('おめでとう！正解です！');
                        judge='おめでとう！正解です！ '
                        comment();
                        btnStr();
                        score+=10;
                    }else{
                        //window.alert('残念！不正解です。');
                        judge='残念！不正解です。 '
                        comment();
                        btnStr();
                    }//ifおわり
                    

                    document.getElementById('gonext').addEventListener
                    ('click', ()=>{                          
                        if(quizcount< quiz.length){
                            setup();
                            nextStr=COUNT +'問目'; 
                            btnStr();
                            nextStr='-'
                            gonext();
                            judge='-'
                            comment();
                       // }
                        }else{
                            /*window.alert('得点：' + score +'点');*/
                            nextStr='終了'
                            btnStr();
                            judge='得点：' + score +'点' ;
                            comment();
                            //init();
                        }
                        
                    } );

                    quizcount++;
                    COUNT++;

                   
                  
                    })//回答クリックイベント処理終了
                    j++;
                }; 
              //  };　//for   
/////////////////////////////////////////////////////

                       
   
              
                   

          