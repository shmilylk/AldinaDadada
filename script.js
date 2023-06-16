
// Disable right-click menu
// JavaScript
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});


// Welcome page fade in and out control, music control
var isMusicPlayed = false; // Record whether the music has been played
var isWelcomed = false; //Record whether you have left the welcome page
var BGM = new Audio("./music/morning starlight.mp3"); ///BGM

document.addEventListener("click", function (event) {
    if (!isWelcomed) {
        removeWelcomePageAndPlayMusic();
    }
});

function removeWelcomePageAndPlayMusic() {
    var welcomePage = document.getElementById("welcome-page");
    welcomePage.style.opacity = 0;
    setTimeout(function () {
        welcomePage.style.display = "none";
    }, 500);

    if (!isMusicPlayed && !isWelcomed) {
        playBackgroundMusic();
        isMusicPlayed = true;
        isWelcomed = true;
    }
}

function playBackgroundMusic() {
    BGM.loop = true; // Non-loop play
    BGM.play(); // Play music
    BGM.volume = 0.1; 

}


//Music playback control
var volumeControl = document.getElementById("volume-control");
var volumeIcon = document.getElementById("volume-icon");




//Music pause and play logic
volumeControl.addEventListener("click", function () {
    if (!isMusicPlayed) {
        // Play music
        BGM.play();
        volumeIcon.style.animationPlayState = "running";
        isMusicPlayed = true;
    } else {
        // Pause music
        BGM.pause();  
        volumeIcon.style.animationPlayState = "paused";
        isMusicPlayed = false;
    }
});




// ======================================================================================

//varible
var audioList = [];  // will be loaded later

let firstSquish = true;
//end varible

//language support
const LANGUAGES = {
    "_": { fallbackLanguage: "cn" },
    "cn": {
        audioList: [
            //Chinese version of Aldina voice
            "audio/CN_voice/da1.mp3",
            "audio/CN_voice/da2.mp3",
            "audio/CN_voice/da3.mp3",
            "audio/CN_voice/da4.mp3",
            "audio/CN_voice/呜啊.mp3",
            "audio/CN_voice/被骗了.mp3",
            "audio/CN_voice/喷嚏.mp3",
            "audio/CN_voice/哇酷哇酷.mp3"
        ],
        texts: {
            "page-title": "阿尔狄娜 哒哒哒~",
            "doc-title": "哒哒哒~",
            "page-descriptions": "给阿尔狄娜团长写的小网站，对，就是那个<del>最能吃的</del>最可爱的圣会骑士团长！",
            "counter-descriptions": ["阿尔狄娜已经哒哒哒~了", "阿尔狄娜已经哒了"],
            "counter-unit": ["次", "次哒哒哒"],
            "counter-button": ["哒哒哒~", "啦啦啦！"],
            "credits-gif": "鸣谢：是安然安三三鸭老师绘制的阿尔GIF图片，Dio5king老师绘制的头像",
            "footer-repository-text": "本网站的Github仓库在这儿：",
            "footer-repository-text-2": "阿尔狄娜哒哒哒的仓库",
            "footer-repository-text3":"鸣谢：duiqt和Graskli提供的本网站基础源代码",
            "footer-repository-text-4":"Herta_kuru Graskli"
        },
        //Chinese banner
        cardImage: "img/card_cn.jpg"
    },
    "ja": {
        audioList: [
            //Japanese version of Aldina voice
            "audio/JP_voice/da1.mp3",
            "audio/JP_voice/da2.mp3",
            "audio/JP_voice/da3.mp3",
            "audio/JP_voice/da4.mp3",
            "audio/JP_voice/被骗了.mp3",
            "audio/JP_voice/喷嚏.mp3",
            "audio/JP_voice/哇酷哇酷.mp3",
            "audio/JP_voice/呜啊.mp3"
        ],
        texts: {
            "page-title": "Aldinaーだだだ～",
            "doc-title": "だだだ~",
            "page-descriptions": "このサイトはAldinaのために作られました、 あの騎士団の <del>最も食べられる</del> 騎士団の中で一番可愛い団長です!",
            // TODO dynamic texts for Japanese
            "counter-descriptions": "だだだ数",
            "counter-unit": "回",
            "counter-button": "だだだ~!",
            "credits-gif": "感謝: 安然安三三鸭先生が描いたaldinaのGIF画像,Dio5king先生が描いたアイコンです",
            "footer-repository-text": "こちらはこのページGitHubリポジトリ:",
            "footer-repository-text-2": "阿尔狄娜哒哒哒的仓库",
            "footer-repository-text3":"感謝：duiqtとGraskli さんが提供してくれたこのウェブサイトの基礎ソースコード",
            "footer-repository-text-4":"Herta_kuru Graskli"
        },
        //Japanese banner
        cardImage: "img/card_jp.jpg"
    },
    "en": {
        audioList: [
            "audio/CN_voice/da1.mp3",
            "audio/CN_voice/da2.mp3",
            "audio/CN_voice/da3.mp3",
            "audio/CN_voice/da4.mp3",
            "audio/CN_voice/呜啊.mp3",
            "audio/CN_voice/被骗了.mp3",
            "audio/CN_voice/喷嚏.mp3",
            "audio/CN_voice/哇酷哇酷.mp3"
        ],
        texts: {
            "page-title": "Welcome to Aldina dadada~ &nbsp;",
            "doc-title": "Dadada~",
            "page-descriptions": "The website for Aldina, the <del>foodie</del> cutest genius paladin order's commander out there.",
            // dynamic texts
            "counter-descriptions": ["The Dadada~ has been squished for", "Aldina has been Dadada~ed for"],
            "counter-unit": "times",
            "counter-button": ["Squish the Dadada~!", "Da Da~!"],
            "credits-gif": "Acknowledgment: GIF images of Aldina provided by 安然安三三鸭，avatar image provided by Dio5king",
            "footer-repository-text": "You can check out the GitHub repository here:",
            "footer-repository-text-2": "阿尔狄娜哒哒哒的仓库",
            "footer-repository-text3":"Special thanks to duiqt and Graskli for providing the source code for this website.",
            "footer-repository-text-4":"Herta_kuru",
            "footer-repository-text-5":"Graskli"
        },
        // English banner
        cardImage: "img/card_en.jpg"
    }
};

//Default language
var current_language = localStorage.getItem("lang") || "cn";
if (current_language != "cn") {
    document.getElementById("language-selector").value = current_language;
};



// ==================================



function multiLangMutation() {
    let curLang = LANGUAGES[current_language];
    let localTexts = curLang.texts;
    Object.entries(localTexts).forEach(([textId, value]) => {
        if (!(value instanceof Array))
            if (document.getElementById(textId) != undefined)
                document.getElementById(textId).innerHTML = value;
    });
    refreshDynamicTexts()
    //Get the Dom element of the aldina-card dynamically
    document.getElementById("aldina-card").src = curLang.cardImage;
};

//Dynamically adjust the website language
multiLangMutation()
document.getElementById("language-selector").addEventListener("change", (ev) => {
    current_language = ev.target.value;
    localStorage.setItem("lang", ev.target.value);
    multiLangMutation();
});

//Return audio array
function getLocalAudioList() {
    return LANGUAGES[current_language].audioList;
};
//end language support

const getTimestamp = () => Date.parse(new Date());

const globalCounter = document.querySelector('#global-counter');
const localCounter = document.querySelector('#local-counter');
let globalCount = 0;
let localCount = localStorage.getItem('count-v2') || 0;
// stores counts from clicks until 5 seconds have passed without a click
let heldCount = 0;


//This should be a record of the number of global hits, but the author is too lazy to get the server and deployment...


// initialize counters
localCounter.textContent = localCount.toLocaleString('en-US');
let prevTime = 0;


let timer;

//Click button
const counterButton = document.querySelector('#counter-button');
counterButton.addEventListener('click', (e) => {
    prevTime = getTimestamp();

    heldCount++;
    localCount++;

    timer = setTimeout(() => update(e), 5000);

    localCounter.textContent = localCount.toLocaleString('en-US');

    triggerRipple(e);

    playDadada();
    animateAldina();
    refreshDynamicTexts();
});

var cachedObjects = {};

function tryCachedObject(origUrl) {
    // check if the object is already cached
    if (cachedObjects[origUrl]) {
        return cachedObjects[origUrl];
    } else {
        // start caching it
        fetch(origUrl)
            .then((response) => response.blob())
            .then((blob) => {
                // Create a blob URL for the object
                const blobUrl = URL.createObjectURL(blob);
                // get the object cached by storing the blob URL in the cachedObjects object
                cachedObjects[origUrl] = blobUrl;
            })
            .catch((error) => {
                console.error(`Error caching object from ${origUrl}: ${error}`);
            });
        return origUrl;
    }
};

//Passes in an array and returns a random element
function randomChoice(myArr) {
    const randomIndex = Math.floor(Math.random() * myArr.length);
    const randomItem = myArr[randomIndex];
    return randomItem;
};

//Get random audio
function getRandomAudioUrl() {
    var localAudioList = getLocalAudioList()
    if (current_language == "en" || current_language == "ja" || current_language == "kr") {
        const randomIndex = Math.floor(Math.random() * 8) ; //eight kinds of voices.  index from 0 to 7
        const randomItem = localAudioList[randomIndex];
        return randomItem;
    }
    const randomIndex = Math.floor(Math.random() * localAudioList.length);
    const randomItem = localAudioList[randomIndex];
    return randomItem;
};

//Play audio
var isFirstVoice = true;
function playDadada() {
    let audioUrl;

    if(isFirstVoice == true){
        isFirstVoice = false;
        audioUrl = getLocalAudioList()[1] //First play fixed Dadada
    }else{
        audioUrl = getRandomAudioUrl();
    }
    
    let audio = new Audio(tryCachedObject(audioUrl));

    audio.play();

    audio.addEventListener("ended", function () {
        this.remove();
    });
};

//Aldina's Animation
function animateAldina() {
    let id = null;

    const random = Math.floor(Math.random() * 5) +1; //1-6
    const elem = document.createElement("img");
    elem.src = tryCachedObject(`img/animation/${random}.gif`);
    elem.style.position = "absolute";
    elem.style.right = "-500px";
    elem.style.top = counterButton.getClientRects()[0].bottom + scrollY - 430 + "px"
    elem.style.zIndex = "-10";
    document.body.appendChild(elem);

    let pos = -500;
    const limit = window.innerWidth + 500;
    clearInterval(id);
    id = setInterval(() => {
        if (pos >= limit) {
            clearInterval(id);
            elem.remove()
        } else {
            pos += 20;
            elem.style.right = pos + 'px';
        }
    }, 12);
};


function triggerRipple(e) {
    let ripple = document.createElement("span");

    ripple.classList.add("ripple");

    const counter_button = document.getElementById("counter-button");
    counter_button.appendChild(ripple);

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    setTimeout(() => {
        ripple.remove();
    }, 300);
};
//end counter button


function refreshDynamicTexts() {
    let curLang = LANGUAGES[current_language];
    let localTexts = curLang.texts;
    Object.entries(localTexts).forEach(([textId, value]) => {
        if (value instanceof Array)
            if (document.getElementById(textId) != undefined)
                document.getElementById(textId).innerHTML = randomChoice(value);
    });
};
