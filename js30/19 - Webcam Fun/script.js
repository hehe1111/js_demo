window.onload = function () {
    canvas = document.querySelector('.photo'); // 参数也可以是 'canvas'
    video = document.querySelector('.player'); // 参数也可以是 'video'
    ctx = canvas.getContext('2d');
    img = document.querySelector('#my-img');
    slider = document.querySelector('.rgb');
    a = document.querySelector('.my-img-wrapper');

    // 滤色范围记录
    filter = {
        rmin: 0,
        rmax: 255,
        gmin: 0,
        gmax: 255,
        bmin: 0,
        bmax: 255
    }

    // 调用摄像头数据
    askWebcam();

    // 绑定 change 事件，动态修改图片颜色
    slider.onchange = function (e) {

        // 先将 canvas 恢复至原始截图
        ctx.putImageData(origindata, 0, 0);
        const target = e.target; // 值发生变动的 input 元素

        // startPosition 表示操作像素点数据时的起点，
        // 从 canvas 获取到的像素数据每四个值表示一个像素点。
        // 例如滑块为红色，则只需要改变像素数组中第 0, 4, 8......个元素的值。
        const startPosition = {
            'r': 0,
            'g': 1,
            'b': 2
        }[target.name[0]]; // target.name 返回页面 input 元素中的 name 属性；

        // filterMin 和 filterMax 表示相应的滤色范围上下限，
        // 若修改了红色滤色范围则取红色范围值。
        // 若修改蓝色的滤色范围，则取蓝色。
        var tempFilter = checkFilter(target.name, target.value);
        const filterMin = tempFilter.min;
        const filterMax = tempFilter.max;

        // 从 canvas 获取像素数据
        var img = ctx.getImageData(0, 0, 300, 200); // 后两个参数是 canvas 的宽高

        // 色彩过滤
        var imgData = img.data;
        for (var i = startPosition, len = imgData.length; i < len; i += 4) {
            if (imgData[i] < filterMin) {
                imgData[i] = filterMin;
            } else if (imgData[i] > filterMax) {
                imgData[i] = filterMax;
            }
        }

        // 将修改后的像素数据重绘制至 canvas
        ctx.putImageData(img, 0, 0);
        img.src = canvas.toDataURL();
    }
}

// 滤色函数
// 确保滑动条的 Min 值不会大于 Max 值，大则将两者对调
function checkFilter(name, value) {
    var _min;
    var _max;
    var _antiname = {
        'rmin': 'rmax', // 实现名字对调
        'rmax': 'rmin',
        'gmin': 'gmax',
        'gmax': 'gmin',
        'bmin': 'bmax',
        'bmax': 'bmin'
    }[name];

    filter[name] = value; // filter 对象在 window.onload 里定义了

    //当下限值超过上限时，将两者对调
    _min = Math.min(filter[name], filter[_antiname]);
    _max = Math.max(filter[name], filter[_antiname]);
    console.log(filter);
    return {
        min: _min,
        max: _max
    }
}

// 申请网络摄像头操作权限
function askWebcam() {
    if (window.navigator.mediaDevices.getUserMedia) {
        window.navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                width: 300,
                height: 200
            }
        })
        .then(function (mediaStream) { // 成功时，执行
            video.srcObject = mediaStream;
            video.onloadedmetadata = function (e) {
                video.play();
            }
        })
        .catch(function (error) { // 失败时，执行
            console.log('Error occured:' + error.name);
        })
    } else {
        console.log('this navigator doesn\'t support webcam!');
    }
}

// 点击函数
function takePhoto() {
    ctx.drawImage(video, 0, 0, 300, 200);

    // 将原始截图保存
    origindata = ctx.getImageData(0, 0, 300, 200);
}

// 保存图片
function savePhoto() {
    img.src = canvas.toDataURL();
    a.href = canvas.toDataURL();
    a.setAttribute('download', 'handsome');
}

var take = document.querySelector('.take-photo');
var save = document.querySelector('.save-photo');
take.addEventListener('click', takePhoto);
save.addEventListener('click', savePhoto);
