(()=>{

const quiz = [
    {
    question:'takkunの身長は次のうちどれ？',
    answers:['165cm','170cm','175cm','180cm'],
    correct:'170cm'
    },{
    question:'takkunの体重は次のうちどれ？',
    answers:['70kg','65kg','60kg','55kg'],
    correct:'60kg' 
    },{
    question:'takkunの誕生日は次のうちどれ？',
    answers:['2月14日','2月11日','2月17日','2月21日'],
    correct:'2月21日' 
    }
];

const accord = [
    {
        hint:'日本人男性の平均身長とほぼ同じです。'
    },{
        hint:'自分の理想の体重は今の体重より10kg多いです。'
    },{
        hint:'2022年の誕生日の曜日は月曜日でした。'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
let accordIndex = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question
    document.getElementById('js-faq').textContent = accord[accordIndex].hint
    document.getElementById('js-faq').style.display = 'none';
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];

        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {

    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解!');
        score++;
    }else{
        window.alert('ざんね～ん不正解!');
    }

    quizIndex++;
    accordIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    }else{
        window.alert('クイズは終了です!ちみの正解数は' + score + '/' + quizLength + 'です!');
    }

};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

class Accordion {
constructor(obj){    
const $elm = document.querySelector(obj.hookName);
const $trigger =  $elm.getElementsByTagName(obj.tagName);
const $triggerLen = $trigger.length;

let index = 0;
while(index < $triggerLen){
   $trigger[index].addEventListener('click', (e) => this.clickHandler2(e));
    index++;
}
}

clickHandler2(e){
    e.preventDefault();

    const $target = e.currentTarget;
    const $content = $target.nextElementSibling;

    if($content.style.display === 'block'){
        $content.style.display = 'none';
    }else{
        $content.style.display = 'block';
    }
}
}

const fuckingAccordion = new Accordion({
    hookName: '#js-tag',
    tagName: 'a'
});

})();
