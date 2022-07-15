// 头部js代码
!function () {
    const small = document.querySelector("header .ad .small");
    const big = document.querySelector(".big");
    const adNum = random(1, 3)
    small.setAttribute('src', `./images/ad${adNum}.jpg`)
    // small.src = './images/ad2.jpg'
    big.setAttribute('src', `./images/ad${adNum}-big.jpg`)
}();
// 排行榜js代码
(function () {
    const items = document.querySelectorAll(".item");
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        item.addEventListener("mouseover", function () {
            // 因为有三个父盒子每个里面有5个子盒子
            // 所以要获取当前孩子的父盒子的所有子孩子取消样式
            const brotherAndMe = item.parentElement.children;
            for (let k = 0; k < brotherAndMe.length; k++) {
                brotherAndMe[k].classList.remove("active");
            }
            this.classList.add("active")
        })
    }
})();

// 生成某个区间内的整数
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}