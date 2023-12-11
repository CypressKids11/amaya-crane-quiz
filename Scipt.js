let score = 0;
let points = 10;
let questions = document.body.childNodes;
let questionIterator = 1;

function correct(button, con = true){
    score+=points; //adds 10 to score
    button.style.backgroundColor = 'Teal'
    let parent = button.parentNode;
    let siblings = parent.childNodes;
 if(con){
    siblings.forEach(element => {
        element.disabled = true;
    });
    questionIterator+=2;
    questions[questionIterator].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
    })
 }
}

function incorrect(button){
    score-=points;
    button.style.backgroundColor = 'Black'
    let parent = button.parentNode;
    let siblings = parent.childNodes;
    siblings.forEach(element => {
        element.disabled = true;
    });
    questionIterator+=2;
    questions[questionIterator].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
    })
}

function calculateScore(button){
    button.innerHTML = "Score" + score;
    if(score == -100){    
        let ricklink = document.createElement("a");
        ricklink.href = "https://v16m-default.tiktokcdn-us.com/588096c7ff7e95ad8218275ee33af43d/65063a4b/video/tos/useast5/tos-useast5-ve-0068c003-tx/ae7f1b385fcb4fdcb80e84e440e315bc/?a=1988&ch=0&cr=3&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C3&cv=1&br=3570&bt=1785&bti=NDU3ZjAwOg%3D%3D&cs=0&ds=3&ft=_G6uMBnZq8Zmo9L~eQ_vjuSdsAhLrus&mime_type=video_mp4&qs=0&rc=aTxmNTppPDM7NjRoN2hpOEBpM2ZkOjg6Zjk0ZDMzZzczNEAtNF8yYDNgXi4xLmAzMS8xYSNwM19fcjQwY15gLS1kMS9zcw%3D%3D&l=2023091617275054B9C3D70D40E44563BD&btag=e00010000"
        ricklink.innerHTML = "see biggest horse in the WORLD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
        ricklink.target = "_blank"
        button.appendChild(ricklink);
    }
}