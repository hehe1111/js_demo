!function () {
    var canvas = $('#canvas')[0];
    var context = canvas.getContext('2d');
    var lineWidth
    var strokeStyle
    var eraserEnabled
    var rainbowEnabled = false
    var hue = 0
    
    autoFullScreenCanvas(canvas, context);
    listenToUser(canvas, context);
    
    function autoFullScreenCanvas(canvas, context) {
        function fullScreenCanvas(canvas) {
            canvas.width = document.documentElement.clientWidth;
            canvas.height = document.documentElement.clientHeight;
        }
        
        function generateWhiteCanvas(context) {
            context.fillStyle = 'white';
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(canvas.width, 0);
            context.lineTo(canvas.width, canvas.height);
            context.lineTo(0, canvas.height);
            context.fill();
        }
        
        fullScreenCanvas(canvas);
        generateWhiteCanvas(context);
    }
    
    function listenToUser(canvas, context) {
        var lastPoint = { 'x': undefined, 'y': undefined }
        var newPoint = { 'x': undefined, 'y': undefined }
        
        switchBrushOrEraser() // 切换画笔、橡皮擦
        changeColor(context) // 切换画笔颜色
        context.lineWidth = $("#slide").val() // 初始画笔粗细
        changeLineWidth(context) // 切换画笔粗细
        clearCanvas(canvas, context) // 清屏
        save(canvas) // 保存图片

        if (document.documentElement.ontouchstart !== undefined) {
            // 触屏设备
            touchMotion(canvas, context, lastPoint, newPoint)
        } else {
            // 非触屏设备
            mouseMotion(canvas, context, lastPoint, newPoint)
        }

        $('#rainbow').on('click', () => { 
            rainbowEnabled = true
            $('#rainbow').addClass('active')
                .siblings().removeClass('active')
         })
        $('.colors').on('click', 'li', () => { rainbowEnabled = false })

        $('#menu-button').on('click', () => {
            $('#cross').toggleClass('active').siblings().toggleClass('hide')
            $('.tools').toggleClass('active')
        })
    }

    function drawLine(startX, startY, endX, endY, lineWidth, color = 'pink') {
        context.lineWidth = lineWidth;
        context.strokeStyle = color;
        context.lineCap = 'round';
        context.lineJoin = 'round';

        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.stroke();
    }

    function erase(x, y) {
        context.beginPath();
        context.arc(x, y, 50, 0, Math.PI * 2); // 点
        context.fillStyle = 'white';
        context.fill();
    }

    function changeColor(context) {
        var $black = $('#black')
        var $red = $('#red')
        var $green = $('#green')
        var $blue = $('#blue')
        var $pallet = $('#pallet')

        $black.on('click', function () {
            context.strokeStyle = 'black'
            $black.addClass('active')
                .siblings().removeClass('active')
        })
        $red.on('click', function () {
            context.strokeStyle = 'red'
            $red.addClass('active')
                .siblings().removeClass('active')
        })
        $green.on('click', function () {
            context.strokeStyle = '#00ff00'
            $green.addClass('active')
                .siblings().removeClass('active')
        })
        $blue.on('click', function () {
            context.strokeStyle = '#8a2be2'
            $blue.addClass('active')
                .siblings().removeClass('active')
        })
        $pallet.on('change click', function (e) {
            context.strokeStyle = e.currentTarget.value
            $('#pallet-wrapper').siblings().removeClass('active')
        })
    }

    function rainbow() {
        if (hue >= 360) { hue = 0 }
        context.strokeStyle = `hsl(${ hue }, 90%, 50%)`
        hue += 1
    }

    function switchBrushOrEraser() {
        var eraserIcon = $('#eraser');
        var brushIcon = $('#brush');
        eraserIcon.on('click', function () {
            eraserEnabled = true;
            eraserIcon.addClass('active');
            brushIcon.removeClass('active');
            $('body').css("cursor", 'url(eraser-min.png)16 16, pointer')
        })
        brushIcon.on('click', function () {
            eraserEnabled = false;
            brushIcon.addClass('active');
            eraserIcon.removeClass('active');
            $('body').css("cursor", 'url(brush-min.png) 0 32, pointer')
        })
    }

    function changeLineWidth(context) {
        var value
        $('#slide').on('change', function () {
            value = $('#slide').val()
            context.lineWidth = value
            $('#slide-value').text(value + 'px')
        })
    }

    function clearCanvas(canvas, context) {
        $('#clear').on('click', function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            lineWidth = context.lineWidth
            strokeStyle = context.strokeStyle
            autoFullScreenCanvas(canvas, context);
            context.lineWidth = lineWidth
            context.strokeStyle = strokeStyle
        })
    }

    function save(canvas) {
        $('#download').on('click', function () {
            var a = document.createElement('a');
            $('body').append(a);
            a.href = canvas.toDataURL('image/png')
            a.download = '我的画儿.png'; // 保存时图片的名称
            a.click();
            a.remove();
        })
    }

    function touchMotion(canvas, context, lastPoint, newPoint) {
        var x
        var y

        canvas.ontouchstart = function (e) {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
            if (eraserEnabled) { erase(x, y) }
            else { lastPoint = { 'x': x, 'y': y } }
        }

        canvas.ontouchmove = function (e) {
            e.preventDefault()
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;

            if (eraserEnabled) { erase(x, y) }
            else {
                newPoint = { 'x': x, 'y': y }
                if (rainbowEnabled) { rainbow() }
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y, 
                    context.lineWidth, context.strokeStyle);
                lastPoint = newPoint; // 最重要的是这一句
            }
        }

        canvas.ontouchend = function (e) { console.log('touch end'); }
    }

    function mouseMotion(canvas, context, lastPoint, newPoint) {
        var clicked = false; // clicked 用于判断是否按下鼠标
        var x
        var y

        canvas.onmousedown = function (e) {
            clicked = true; // 按下鼠标，所以为 true
            x = e.clientX;
            y = e.clientY;
            if (eraserEnabled) { erase(x, y) }
            else { lastPoint = { 'x': x, 'y': y } }
        }

        canvas.onmousemove = function (e) {
            x = e.clientX;
            y = e.clientY;
            if (!clicked) { return }
            if (eraserEnabled) { erase(x, y) }
            else {
                newPoint = { 'x': x, 'y': y }
                if (rainbowEnabled) { rainbow() }
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y,
                    context.lineWidth, context.strokeStyle);
                lastPoint = newPoint; // 最重要的是这一句
            }
        }

        canvas.onmouseup = function (e) { clicked = false; }
    }
}.call()
