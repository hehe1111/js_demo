const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open'); /* 点击时，如果不存在类 open，则添加；反之，则删除已存在的类 open */
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); /* 当 .panel 所在元素的样式转化完成时，添加/删除类 toggleActive，使其子元素即第一和最后一个 <p> 元素飞入/不应用对应样式。 */
