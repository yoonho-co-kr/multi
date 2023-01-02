const letter_change = document.getElementById('letter_box')
const sentences = [
    "어서오세요!",
    "환영합니다!",
    "반갑습니다!",
];
$(document).ready(function () {
    let lastr = sentences.length + 1;

    letter_change.addEventListener('click', function () {
        //랜덤 문장 출력
        let r;

        do {
            r = Math.floor((Math.random() * sentences.length) + 0);
        } while (r === lastr);
        lastr = r;

        //문장 길이 비교
        let max = 0;
        let min = 0;

        if (sentences[r].length > letter_change.innerHTML.length) {
            max = sentences[r].length;
            min = max;
        } else {
            max = letter_change.innerHTML.length;
            min = sentences[r].length;
        }

        //시간 세팅 및 초기화
        const speed = 60;
        let i = 0;
        let j = 0;

        function mainClock(i, j, max) {
            setTimeout(function () {
                if (j < 3 && i < min) {
                    letter_change.innerHTML = letter_change.innerHTML.replaceAt(i, randomLetter());
                    j++;
                    mainClock(i, j, max);
                } else {
                    letter_change.innerHTML = letter_change.innerHTML.replaceAt(i, sentences[r][i]);
                    if (i < min) {
                        i++
                    } else {
                        max--;
                    }
                    if (i < max) {
                        j = 0;
                        mainClock(i, j, max);
                    }
                }
            }, speed);
        }
        mainClock(i, j, max);

        event.preventDefault();
        // let href = $(this).attr('href');
        // let pos = $(href).offset().top;
        setTimeout(() => {
            $("html, body").animate({
                scrollTop: $(".info_contain").offset().top
            }, 500)
        }, 3000);

    });

});

//문자 변환
String.prototype.replaceAt = function (index, character) {
    if (character) {
        return this.substr(0, index) + character + this.substr(index + character.length);
    } else {
        return this.slice(0, index) + this.slice(index + 1);
    }
}

//랜덤 기호 넣기
function randomLetter() {
    const possible = ".,:!§$%/()=?+*#-";
    return possible.charAt(Math.floor(Math.random() * possible.length));
}

//스킬 섹션
$(document).ready(function () {
    let skill_names = ["HTML", "CSS", "JavaScript", "Jquery", "MySQL"]
    let skill_number = [90, 90, 80, 80, 50]
    let color_combo = ["#17252A", "#2B7A78", '#3AAFA9', '#DEF2F1', '#FEFFFF']

    let number = document.getElementsByClassName('skill_number')
    let progress = document.getElementsByTagName('circle')
    for (let i = 0; i < skill_names.length; i++) {
        let circle_size = 70;
        if (window.innerWidth < 600) { circle_size = 50 }
        let insert_skill = ` <div class="skill_wrap">              
                <div class="skill">
                    <div class="outer">
                        <div class="inner">
                            <div class="skill_number"></div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#2b7a78" />
                                <stop offset="100%" stop-color="#def2f1" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="${circle_size}" stroke-linecap="round" />
                    </svg>
                    
                </div>
                <div class="skill_txt">${skill_names[i]}</div></div>`

        $(".skill_info_box").append(insert_skill);
    }
    function increase_number(i) {
        let counter = 0;
        setInterval(() => {
            if (counter == skill_number[i]) {
                clearInterval();
            }
            else {
                counter += 1;
                number[i].innerHTML = counter + "%"
            }
        }, 30)
    }
    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        let landing_c = $(".landing_contain").offset().top;
        let info_c = $(".info_contain").offset().top;
        let skill_c = $(".skill_contain").offset().top;
        let port_c = $(".portfolio_contain").offset().top;
        let contact_c = $(".contact_contain").offset().top;

        let more_scroll = 150;
        let header_size = -100;

        let inner_shadow = "inset 12px 12px 24px #d8d9d9, inset -12px -12px 24px #ffffff";
        if (window.innerWidth < 600) {
            inner_shadow = "inset 8px 8px 16px #d8d9d9, inset -8px -8px 16px #ffffff"
        }
        if (window.innerWidth < 400) { header_size = -50 }
        if (s_top >= contact_c - more_scroll) {
            $('.containers').css({
                backgroundColor: "#3aafa9",
                transition: "background-color 0.5s"
            })
            $(".header").css({
                opacity: "1",
                backgroundColor: "rgba(58, 175, 169, 0.95)",
                transition: "all 0.3s"
            })
            $(".change_header").css({
                transform: `translate(0,${header_size * 3}px)`
            })
            $('.stick_header').css({
                color: "#17252a"
            })
            $('.change_header').css({
                color: "#feffff"
            })
            $(".contact_img").css({
                background: '#3AAFA9',
                boxShadow: '20px 20px 40px #319590, -20px -20px 40px #43c9c2'
            })
        }
        else if (s_top >= port_c - more_scroll) {
            $('.containers').css({
                backgroundColor: "#2b7a78",
                transition: "background-color 0.3s"
            })
            $(".header").css({
                opacity: "1",
                backgroundColor: "rgba(43, 122, 120, 0.95)",
                transition: "all 0.3s"
            })

            $(".change_header").css({
                transform: `translate(0,${header_size * 2}px)`
            })
            $('.stick_header').css({
                color: "#3AAFA9"
            })
            $('.change_header').css({
                color: "#feffff"
            })
            $(".txt_title").css({
                color: "#feffff"
            })
            $(".key").css({
                color: "#3aafa9"
            })
            $(".value").css({
                color: "#feffff"
            })
            $(".contact_img").css({
                background: '#2b7a78',
                boxShadow: '20px 20px 40px #256866,    -20px -20px 40px #318c8a'
            })
            $(".port_btn").css({
                boxShadow: '6px 6px 12px #256866, -6px -6px 12px #318c8a',
                background: '#2B7A78'
            })
        }
        else if (s_top >= skill_c - more_scroll) {
            $('.containers').css({
                backgroundColor: "#feffff",
                transition: "background-color 0.3s"
            })
            $(".header").css({
                opacity: "1",
                backgroundColor: "rgba(254, 255, 255, 0.95)",
                transition: "all 0.3s"
            })
            $(".change_header").css({
                transform: `translate(0,${header_size * 1}px)`
            })
            $('.stick_header').css({
                color: "#3AAFA9"
            })
            $('.change_header').css({
                color: "#17252A"
            })
            $(".outer").css({
                boxShadow: "6px 6px 10px 1px rgba(0, 0, 0, 0.15),-6px -6px 10px -1px rgba(255, 255, 255, 0.7)"
            })
            $(".inner").css({
                boxShadow: inner_shadow
            })
            $(".skill_number").css({
                color: "#17252a",
                transition: "all 0.3s"
            })
            $(".txt_title").css({
                color: "#3aafa9"
            })
            $(".key").css({
                color: "#3aafa9"
            })
            $(".value").css({
                color: "#3aafa9"
            })
            $(".close").css({
                color: "#def2f1"
            })
            $(".bar").css({
                boxShadow: "-6px -6px 7px rgba(255, 255, 255, 0.5), 7px 7px 7px rgba(70, 70, 70, 0.12), inset -6px -6px 7px rgba(255, 255, 255, 0.5), inset 7px 7px 7px rgba(70, 70, 70, 0.12) "
            })
            $(".port_btn").css({
                boxShadow: '6px 6px 12px #d8d9d9, -6px -6px 12px #ffffff',
                background: '#feffff'
            })
            for (let i = 0; i < skill_names.length; i++) {
                if (skill_number[i] == 90) {
                    $("circle").eq(i).css({
                        animation: "ninety 2.7s linear forwards"
                    })
                }
                else if (skill_number[i] == 80) {
                    $("circle").eq(i).css({
                        animation: "eightty 2.4s linear forwards"
                    })
                }
                else if (skill_number[i] == 50) {
                    $("circle").eq(i).css({
                        animation: "fifty 1.5s linear forwards"
                    })
                }
                // increase_number(i)
            }
        }
        else if (s_top >= info_c - more_scroll) {
            $('.containers').css({
                backgroundColor: "#17252a",
                transition: "background-color 0.3s"
            })
            $(".header").css({
                opacity: "1",
                backgroundColor: "rgba(23, 37, 42, 0.95)",
                transition: "all 0.3s"
            })
            $(".change_header").css({
                transform: "translate(0,0)"
            })
            $('.stick_header').css({
                color: "#3AAFA9"
            })
            $('.change_header').css({
                color: "#feffff"
            })
            $(".outer").css({
                boxShadow: " 20px 20px 60px #141f24, -20px -20px 60px #1a2b30",
                transition: "all 0.3s"
            })
            $(".inner").css({
                boxShadow: "inset 20px 20px 60px #141f24,  inset -20px -20px 60px #1a2b30",
                transition: "all 0.3s"
            })
            $(".skill_number").css({
                color: "#3aafa9"
            })
            $(".career_box").css({
                borderColor: '#3aafa9'
            })
            $(".career_circle").css({
                backgroundColor: '#3aafa9'
            })
            $(".close").css({
                color: "#def2f1"
            })
            $(".bar").css({
                boxShadow: "-6px -6px 7px #141f24, 7px 7px 7px #1a2b30, inset -6px -6px 7px #141f24, inset 7px 7px 7px #1a2b30 "
            })

        }
        else {
            $('.containers').css({
                backgroundColor: "#3aafa9",
                transition: "background-color 0.3s"
            })
            $(".header").css({
                opacity: "0"
            })
            $(".career_box").css({
                borderColor: '#feffff'
            })
            $(".career_circle").css({
                backgroundColor: '#feffff'
            })
            $(".close").css({
                color: "#def2f1"
            })
        }
    })
    let number2 = document.getElementsByClassName('number')
    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        let skill_c = $(".skill_contain").offset().top;
        let more_scroll = 150;
        let skill_number = [90, 90, 80, 80, 50]
        let progress = document.getElementsByClassName('progress')

        if (s_top >= skill_c - more_scroll && s_top <= skill_c) {
            for (let i = 0; i < skill_number.length; i++) {
                progress[i].setAttribute('style', `width: ${skill_number[i]}%`);
                increase_number2(i);
                increase_number(i);
            }
        }

    })

    function increase_number2(i) {
        let counter = 0;
        setInterval(() => {
            if (counter == skill_number[i]) {
                clearInterval();
            }
            else {
                counter += 1;
                number2[i].innerHTML = counter + "%"
            }
        }, 10)
    }
    $(".port_btn").click(function () {
        $(".port_btn").css({
            background: '#2B7A78'
        })
        $(this).css({
            background: 'linear-gradient(145deg, #276e6c, #2e8380)'
        })
    })

});
