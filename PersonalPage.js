function toggleCategory(button) {
    const targetId = button.getAttribute('data-target');
    const content = document.getElementById(targetId);
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // 切换展开状态
    button.setAttribute('aria-expanded', !isExpanded);
    content.classList.toggle('active');
    
    // 切换按钮旋转角度（通过CSS变量控制）
    button.style.setProperty('--angle', isExpanded ? '135deg' : '315deg');

    // 自动关闭其他分类
    // document.querySelectorAll('.category-block').forEach(block => {
    //     if (block !== button.closest('.category-block')) {
    //         const otherBtn = block.querySelector('.expand-btn');
    //         const otherContent = block.querySelector('.expand-content');
    //         if (otherBtn.getAttribute('aria-expanded') === 'true') {
    //             otherBtn.click();
    //         }
    //     }
    // });
}