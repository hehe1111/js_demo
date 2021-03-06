const checkboxs = document.querySelectorAll('.inbox input[type="checkbox"]');
const checkboxArr = Array.from(checkboxs);
let lastChecked;
let state = false;

// 利用数组索引获取需要选中的范围
function handleCheck1(e) {
    if (!lastChecked) {
        lastChecked = this;
    }
    state = lastChecked.checked ? true : false;
    if (e.shiftKey) {
        let start = checkboxArr.indexOf(this);
        let end = checkboxArr.indexOf(lastChecked);
        checkboxArr.slice(Math.min(start, end), Math.max(start, end) + 1)
            .forEach(input => input.checked = state);
    }
    lastChecked = this;
}

//	原作者给的方法
//  用变量 inBetween 对需要选中的元素进行标记
function handleCheck0(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked){
        boxs.forEach(input => {
            console.log(input);
            if (input === lastChecked || input === this) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                console.log("on");
                input.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxs.forEach(checkbox => checkbox.addEventListener('click', handleCheck1));
