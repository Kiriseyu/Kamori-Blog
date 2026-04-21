var originalTitle;//存储原始标题
var restoreTimer; //存储定时器ID

window.onblur = function() {
    //清除恢复定时器
    clearTimeout(restoreTimer);
    //存储当前标题并修改为失焦提示
    originalTitle = document.title;
    document.title = "(╯°□°）╯︵ ┻━┻走什么神啊!";
};
window.onfocus = function() {
    //清除旧定时器
    clearTimeout(restoreTimer);
    //显示欢迎标题
    document.title = "欢迎回来(∠・ω< )⌒★";
    //设置恢复原标题的定时器
    restoreTimer = setTimeout(function() {
        if(originalTitle) {
            document.title = originalTitle;
        }
    }, 2000);//毫秒值
};
//页面加载时初始化标题
window.onload = function() {
    originalTitle = document.title || "个人主页";
};

