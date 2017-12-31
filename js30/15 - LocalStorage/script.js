const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
var items = JSON.parse(localStorage.getItem('items')) || [];


function addItem(e) {
    e.preventDefault(); // 取消点击提交按钮后触发的 submit 事件的默认行为：刷新整个页面。刷新会导致重新加载之后的页面中，会丢失刚提交的内容。
    const text = this.querySelector('[name=item]').value; // 获取输入框中的值；this 指向 form 表单
    const item = {
        text: text, // ES6中可简写为 text,
        done: false // 为后续的勾选做准备
    }
    items.push(item);
    populateList(items, itemsList); // 动态显示页面内容
    localStorage.setItem('items', JSON.stringify(items));
    this.reset(); // 清空 input 中输入的值
    // console.log(text);
}

function populateList(plates=[], plateslist) { // 根据输入的数据更新页面的内容
    plateslist.innerHTML = plates.map((plate, i) => { // i 是当前位置
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const element = e.target;
    const index = element.dataset.index;
    items[index].done = !items[index].done; /* 修改状态：是否选中 */
    populateList(items, itemsList); // 动态显示页面内容
    localStorage.setItem('items', JSON.stringify(items));
    // console.log(element.dataset.index);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

// populateList(items, itemsList); // 动态显示页面内容

// 延伸部分
const checkAllBtn = document.querySelector('.check-all');
const unCheckAllBtn = document.querySelector('.uncheck-all');
const deleteAllBtn = document.querySelector('.delete-all');

checkAllBtn.addEventListener('click', () => {
    items.forEach(item => {
        item.done = true;
    });
    populateList(items, itemsList); // 动态显示页面内容
    localStorage.setItem('items', JSON.stringify(items));
});

unCheckAllBtn.addEventListener('click', () => {
    items.forEach(item => {
        item.done = false;
    });
    populateList(items, itemsList); // 动态显示页面内容
    localStorage.setItem('items', JSON.stringify(items));
});

deleteAllBtn.addEventListener('click', () => {
    items = [];
    populateList(items, itemsList); // 动态显示页面内容
    localStorage.setItem('items', JSON.stringify(items));
});
