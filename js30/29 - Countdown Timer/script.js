const endTime = document.querySelector('.display-end-time');
const leftTime = document.querySelector('.display-time-left');
const buttons = document.querySelectorAll('button');
const date = new Date();
var left = 0; // 剩余时间
var end = 0; // 结束时间
var intervalID; // interval 计时器
leftTime.textContent = left; // 未操作时，剩余时间显示 0

// 为 button 绑定点击事件
const btnArray = Array.from(buttons);
btnArray.map(function (item) {
    item.addEventListener('click', clickAction);
});

// 监听自定义输入
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let value = Number(this.minutes.value);
    if (!value) {
        alert('请输入数字。');
    } else {
        updateTime(value * 60);
        updateTimer();
    }
});

function clickAction(e) {
    // 获取 button 预先设置好的时间
    let preSetTime = this.dataset.time;
    updateTime(preSetTime);

    //点击后更新计时器
    updateTimer();
}

// 更新倒数时间、结束时间
function updateTime(time){
    left += parseInt(time, 10);
    end = date.getTime() + (left * 1000);
    leftTime.textContent = left;
    let localeTimeString = new Date(end).toLocaleTimeString();
    endTime.textContent = '倒数结束时间为：' +  localeTimeString;
}

// 每秒刷新时间，即只更新倒数时间
function updateTimer(){
	// 清除以前的 timer
	if(intervalID){
		clearInterval(intervalID);
	}

    // 设置新的 timer
    intervalID = setInterval(function () {
    	if(left === 0){
    		endTime.textContent = 'End';
            clearInterval(intervalID);
    	}else{
    		left -= 1;
    		leftTime.textContent = left;
    	}
    }, 1000);
}
