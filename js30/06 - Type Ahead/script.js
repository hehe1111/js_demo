const endpoint = 'https://gist.githubusercontent.com/soyaine/81399bb2b24ca1bb5313e1985533c640/raw/bdf7df2cbcf70706c4a5e51a7dfb8c933ed78878/TangPoetry.json';

const poetrys = []; // 声明一个空数组，用于存放解析 json 后的数据
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => poetrys.push(...data)); // 获取 JSON 资源，返回 Promise 对象；解析 JSON 数据；存入数组

function findMatches(wordToMatch, poetrys) {
    return poetrys.filter(poet => {
        // 正则找出匹配的诗句
        const regex = new RegExp(wordToMatch, 'gi');
        const author = poet.detail_author.join('');
        return poet.detail_text.match(regex) || poet.title.match(regex) || author.match(regex);
    });
}

function displayMatches() {
    const matches = findMatches(this.value, poetrys);
    const regex = new RegExp(this.value, 'gi');
    const html = matches.map(poet => {
        // 替换高亮的标签
        const text = poet.detail_text.replace(regex, `<span class="highlight">${ this.value }</span>`);
        const title = poet.title.replace(regex, `<span class="highlight">${ this.value }</span>`);
        // 构造 HTML 元素
        return `
            <li>
                <span class="poet">${ text }</span>
                <span class="title">${ title } - ${ poet.detail_author[0] }</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html; // 将匹配值的 HTML 标签放入 <ul> 中，会整个替换掉 <ul> 下所有原有的后代子标签
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches); // 清空输入的字符串后，能够显示 JSON 文档中所有的诗词
