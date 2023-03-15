let kapik1 = document.getElementById('kapik1');
let kapik2 = document.getElementById('kapik2');
let hard = document.getElementById('hard');
let medium = document.getElementById('medium');
let eazy = document.getElementById('eazy');
let bg = 0;
kapik1.onmouseover = function () {
    kapik1.classList.add('boxsh')
}
kapik1.onmouseout = function () {
    kapik1.classList.remove('boxsh')
}
kapik2.onmouseover = function () {
    kapik2.classList.add('boxsh')
}
kapik2.onmouseout = function () {
    kapik2.classList.remove('boxsh')
}
let jam = false;
let kapik = false;
kapik1.onclick = function () {
    kapik1.classList.add('boxshadow');
    kapik2.classList.remove('boxshadow');
    kapik = true
    document.getElementById('q6').style.backgroundImage = 'url(./pngwing.com.png)';
    document.getElementById('q6').style.width = '150px';
    document.getElementById('q6').style.height = '150px';
    bg = 1;
}
kapik2.onclick = function () {
    kapik1.classList.remove('boxshadow');
    kapik2.classList.add('boxshadow');
    kapik = true
    // document.getElementById('q6').style.backgroundColor='silver';
    document.getElementById('q6').style.backgroundImage = 'url(./kapik1.gif)';
    document.getElementById('q6').style.width = '170px';
    document.getElementById('q6').style.height = '150px';
    bg = 2;
}
var mode = 0;
hard.onclick = function () {
    hard.classList.add('boxssev');
    medium.classList.remove('boxssev');
    eazy.classList.remove('boxssev');
    jam = true;
    mode = 1;
}
medium.onclick = function () {
    hard.classList.remove('boxssev');
    medium.classList.add('boxssev');
    eazy.classList.remove('boxssev');
    jam = true;
    mode = 2;
}
eazy.onclick = function () {
    hard.classList.remove('boxssev');
    medium.classList.remove('boxssev');
    eazy.classList.add('boxssev');
    jam = true;
}
//PLAY GAME
let play = document.getElementById('play');
play.onclick = function () {
    if (jam == false) {
        document.getElementById('mode').style.display = 'block';
        setTimeout(() => {
            document.getElementById('mode').style.display = 'none';
        }, 1000);
    }
    if (kapik == false) {
        document.getElementById('kapiks').style.display = 'block';
        setTimeout(() => {
            document.getElementById('kapiks').style.display = 'none';
        }, 1000);
    }

    if (kapik == true && jam == true) {
        hard.style.display = 'none';
        medium.style.display = 'none';
        eazy.style.display = 'none';
        kapik1.style.display = 'none';
        kapik2.style.display = 'none';
        play.style.display = 'none';

        if (bg == 2) {
            document.body.style.backgroundImage = 'url(./0.jpg)'
        }
        if (bg == 1) {
            document.body.style.backgroundImage = 'url(./desert.jpeg)';
        }

        document.getElementById('win').style.display = 'block';
        document.getElementById('lose').style.display = 'block';
        let banana = document.getElementsByClassName("q")
        for (let i = 0; i < banana.length; i++) {
            banana[i].style.display = 'block';
        }
        document.getElementById('q6').style.display = 'block';
        document.getElementById('gayl').style.display = 'block';
        let w = 0;  //krvel
        let x = 0;  //krel
        let rep = document.getElementById('replay');
        rep.onclick = function () {
            rep.style.display = 'none';
            gayl.style.display = 'block';
            document.getElementById('q7').style.opacity = 0;
            gayl.style.left = '1%';
            gayl.style.top = '20px';
            gayl.style.transition = '0s'
            document.getElementById('q6').style.display = 'block';
            document.getElementById('q8').style.display = 'none';
            document.getElementById('q7').style.display = 'none';
            let banana = document.getElementsByClassName("q")
            for (let i = 0; i < banana.length; i++) {
                banana[i].classList.remove('rr');
            }

            game();
        }

        function game() {
            let audio = new Audio('./48bb90af8e1e401.mp3');
            audio.play();

            let banana = document.getElementsByClassName("q")
            for (let i = 0; i < banana.length; i++) {
                banana[i].style.left = Math.round(Math.random() * 92) + '%'
                banana[i].style.top = Math.round(Math.random() * 500) + 'px'
            }

            //partutyun
            let u = 60;
            if (mode == 1) {
                u = 20;
            }
            if (mode == 2) {
                u = 40;
            }
            let stop = setInterval(function () {
                if (document.getElementById('q6').style.display == 'block') {
                    u--
                    document.getElementById('a2').innerHTML = u;
                    if (u == 0) {
                        clearInterval(stop);
                        document.getElementById('q7').style.display = 'block';
                        document.getElementById('q7').style.opacity = 1;
                        w++;
                        audio.pause();
                        setTimeout(() => {
                            krvel();
                        }, 500);

                        document.getElementById('lose').innerHTML = 'Lose ' + w;
                        document.getElementById('replay').style.display = 'block';
                        document.onkeydown = null;

                    }
                }

            }, 1000)

            //bot gayl
            let gayl = document.getElementById('gayl');
            let llg = 0;
            let ttg = 0;
            let stopgayl = setInterval(() => {
                llg = document.getElementById('gayl').offsetLeft;
                ttg = document.getElementById('gayl').offsetTop;
                if (document.getElementById('q7').style.opacity == 1) {
                    clearInterval(stopgayl);
                }
            }, 100);

            let stopxax = setInterval(() => {
                gayl.style.left = Math.floor(Math.random() * 90) + '%';
                gayl.style.top = Math.floor(Math.random() * 500) + 'px';
                let ll = document.getElementById('q6').offsetLeft;
                let tt = document.getElementById('q6').offsetTop;

                if (ll + 100 > llg && ll < llg + 100 && tt + 100 > ttg && tt < ttg + 100) {
                    clearInterval(stopxax);
                    clearInterval(stop);
                    document.getElementById('q6').style.display = 'none';
                    document.getElementById('q7').style.display = 'block';
                    document.getElementById('q7').style.opacity = 1;
                    w++;
                    audio.pause();
                    setTimeout(() => {
                        krvel()
                    }, 500);

                    document.getElementById('lose').innerHTML = 'Lose ' + w;
                    document.getElementById('replay').style.display = 'block';
                    if (mode == 1) {
                        u = 20;
                    }
                    if (mode == 2) {
                        u = 40;
                    }

                }

                gayl.style.transition = '4s';

            }, 1000);



            //kapiki sharj
            document.onkeydown = function (e) {

                let ll = document.getElementById('q6').offsetLeft
                let tt = document.getElementById('q6').offsetTop

                let ll1 = document.getElementById('q').offsetLeft
                let tt1 = document.getElementById('q').offsetTop

                let ll2 = document.getElementById('q1').offsetLeft
                let tt2 = document.getElementById('q1').offsetTop

                let ll3 = document.getElementById('q2').offsetLeft
                let tt3 = document.getElementById('q2').offsetTop

                let ll4 = document.getElementById('q3').offsetLeft
                let tt4 = document.getElementById('q3').offsetTop

                let ll5 = document.getElementById('q4').offsetLeft
                let tt5 = document.getElementById('q4').offsetTop

                let ll6 = document.getElementById('q5').offsetLeft
                let tt6 = document.getElementById('q5').offsetTop

                if (e.keyCode == 38 || e.keyCode == 87) {
                    if (document.getElementById('q7').style.opacity == 0) {
                        tt -= 15;
                        if (tt < -50) {
                            tt = 1000
                        }
                        document.getElementById('q6').style.top = tt + 'px';

                    }
                }
                if (e.keyCode == 40 || e.keyCode == 83) {
                    if (document.getElementById('q7').style.opacity == 0) {
                        tt += 15;
                        if (tt > 850) {
                            tt = 0;
                        }
                        document.getElementById('q6').style.top = tt + 'px'
                    }
                }
                if (e.keyCode == 37 || e.keyCode == 65) {
                    if (document.getElementById('q7').style.opacity == 0) {
                        ll -= 15;
                        if (ll < -50) {
                            ll = 1555
                        }
                        document.getElementById('q6').style.left = ll + 'px'
                        document.getElementById('q6').style.transform ='rotateY(180deg)'
                    }
                }
                if (e.keyCode == 39 || e.keyCode == 68) {
                    if (document.getElementById('q7').style.opacity == 0) {
                        ll += 15;
                        if (ll > 1560) {
                            ll = 0;
                        }
                        document.getElementById('q6').style.left = ll + 'px'
                        document.getElementById('q6').style.transform ='rotateY(0deg)'
                    }
                }

                //banan utel

                if (ll + 100 > ll1 && ll < ll1 + 100 && tt + 100 > tt1 && tt < tt1 + 100) {
                    document.getElementById('q').classList.add('rr');
                    utel();
                }
                if (ll + 100 > ll2 && ll < ll2 + 100 && tt + 100 > tt2 && tt < tt2 + 100) {
                    document.getElementById('q1').classList.add('rr')
                    utel();

                }
                if (ll + 100 > ll3 && ll < ll3 + 100 && tt + 100 > tt3 && tt < tt3 + 100) {
                    document.getElementById('q2').classList.add('rr')
                    utel();

                }
                if (ll + 100 > ll4 && ll < ll4 + 100 && tt + 100 > tt4 && tt < tt4 + 100) {
                    document.getElementById('q3').classList.add('rr')
                    utel();

                }
                if (ll + 100 > ll5 && ll < ll5 + 100 && tt + 100 > tt5 && tt < tt5 + 100) {
                    document.getElementById('q4').classList.add('rr')
                    utel();

                }
                if (ll + 100 > ll6 && ll < ll6 + 100 && tt + 100 > tt6 && tt < tt6 + 100) {
                    document.getElementById('q5').classList.add('rr')
                    utel();

                }

                //haxtanak
                let win = document.getElementById('win');
                let cl = document.getElementsByClassName('rr').length * 5
                document.getElementById('a1').innerHTML = cl
                if (cl == 30) {
                    document.getElementById('gayl').style.display = 'none';
                    document.getElementById('q8').style.opacity = 1;
                    document.getElementById('q8').style.display = 'block';
                    document.getElementById('replay').style.display = 'block';
                    x++;
                    audio.pause();
                    setTimeout(() => {
                        haxtanak();
                    }, 500);

                    win.innerHTML = 'Win ' + x;
                    clearInterval(stop);
                    clearInterval(stopxax)
                    document.onkeydown = null;
                }
            }
        }
    }
    game();
}

let menu = document.getElementById('menu');
menu.onclick = function () {
    location.reload();
    clearInterval(stopxax);
    clearInterval(stopgayl);
    clearInterval(stop);
}

function utel() {
    let audio1 = new Audio();
    audio1.src = "./utel.mp3";
    audio1.autoplay = true;
}

function krvel() {
    let audio2 = new Audio();
    audio2.src = "./krvel.mp3";
    audio2.autoplay = true;
}
function haxtanak() {
    let audio = new Audio();
    audio.src = './haxtanak.mp3';
    audio.autoplay = true;
}