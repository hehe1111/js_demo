!function () {
    let codeContainer = document.querySelector('.code')
    let style = document.querySelector('.style')
    let duration = 5
    let id
    let code = `
        /* 首先，画脸部皮肤 */
        .preview {
            height: 100%;
            background-color: #fff600;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .face {
            width: 320px;
            height: 200px;
            position: relative;
        }
        .face > :not(:last-child) {
            z-index: 1;
        }
        
        /* 接着，画鼻子 */
        .nose {
            display: inline-block;
            border-width: 12px 16px;
            border-style: solid;
            border-color: transparent;
            border-top-color: black;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            top: 50px;
            transform: translateX(-50%);
        }
        
        /* 画眼睛 */
        .eyes {
            width: 46px;
            height: 46px;
            background-color: #444;
            border: 2px solid black;
            border-radius: 50%;
            position: absolute;
            top: 10px;
        }
        /* 左眼 */
        .eyes.left {
            right: 50%;
            margin-right: 80px;
        }
        /* 右眼 */
        .eyes.right {
            left: 50%;
            margin-left: 80px;
        }
        /* 眼睛里的亮光 */
        .eyes::after {
            content: '';
            display: block;
            width: 24px;
            height: 24px;
            background-color: #fff;
            border: 2px solid black;
            border-radius: 50%;
            position: absolute;
            left: 4px;
            top: 2px;
        }

        /* 脸上红色的圆 */
        .dimples {
            width: 62px;
            height: 62px;
            background-color: red;
            border: 2px solid black;
            border-radius: 50%;
            position: absolute;
            top: 98px;
        }
        /* 左边 */
        .dimples.left {
            right: 50%;
            margin-right: 98px;
        }
        /* 右边 */
        .dimples.right {
            left: 50%;
            margin-left: 98px;
        }
        
        /* 上嘴唇 */
        .upper-lip {
            width: 70px;
            height: 20px;
            background-color: #fff600;
            border-bottom: 2px solid black;
            position: absolute;
            top: 70px;
        }
        .upper-lip.left {
            border-left: 2px solid black;
            border-bottom-left-radius: 40px 20px;
            transform: rotate(-20deg);
            right: 50%;
        }
        .upper-lip.right {
            border-right: 2px solid black;
            border-bottom-right-radius: 40px 20px;
            transform: rotate(20deg);
            left: 50%;
        }
        
        /* 下嘴唇 */
        .lower-lip-wrapper {
            width: 160px;
            height: 122px;
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            overflow: hidden;
        }
        .lower-lip {
            width: 180px;
            height: 2000px;
            background-color: #9f000a;
            border: 2px solid black;
            border-radius: 100px/600px;
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            overflow: hidden;
        }
        /* 舌头 */
        .lower-lip::after {
            content: '';
            display: block;
            width: 100px;
            height: 110px;
            border-radius: 100px/80px;
            background-color: #ff444f;
            position: absolute;
            left: 50%;
            bottom: -10px;
            transform: translateX(-50%);
        }

        /* 画完收工 */

        .code-wrapper, .speed-control {
             display: none;
        }
    `
    
    function writeCode(prefix, code, fn) {
        let n = 0
        id = setTimeout(function write() {
            n += 1
            codeContainer.textContent = code.slice(0, n)
            style.textContent = code.slice(0, n)
            highlightAndAutoScroll()

            if (n < code.length) {
                id = setTimeout(write, duration)
            } else {
                fn && fn.call()
            } 
        }, duration)
    }

    function highlightAndAutoScroll() {
        codeContainer.innerHTML = Prism.highlight(codeContainer.textContent, Prism.languages.css, 'css')
            codeContainer.scrollTop = codeContainer.scrollHeight
    }

    function skip() {
        codeContainer.textContent = code.slice()
        style.textContent = code.slice()
        highlightAndAutoScroll()
    }

    $('.speed-control').on('click', 'button', (e) => {
        let $button = $(e.currentTarget) // button
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active') // 注意有无加点的区别
        switch (speed) {
            case 'slow':
                duration = 50
                break
            case 'normal':
                duration = 20
                break
            case 'fast':
                duration = 5
                break
            case 'skip':
                window.clearTimeout(id)
                skip()
                break
        }
    })

    writeCode('', code)

}.call()