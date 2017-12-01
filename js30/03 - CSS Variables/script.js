const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || ''; // 根据 data-sizing 获取参数的后缀
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // 设置页面 CSS 变量的值
}

inputs.forEach(input => input.addEventListener('change', handleUpdate)); // 监听滑块位置（value属性）的变化，在滑块不再被拖动时，更新页面的样式
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // 在滑块拖动过程中也实时变化
