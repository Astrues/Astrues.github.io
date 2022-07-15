// 轮播图
+function () {
    // 委托绑定
    const title = document.querySelector(".main .content .news .left .title");
    const image = document.querySelector(".main .content .news .left .images");
    const left = document.querySelector(".main .content .news .left");
    // 自动轮播下一个的函数
    title.addEventListener("mouseover", function (e) {
        let obj = e.target;
        const index = parseInt(obj.getAttribute("data-id"));
        image.style.left = (-604 * index) + "px";
        let brotherAndMe = obj.parentElement.children;
        for (let i = 0; i < brotherAndMe.length; i++) {
            brotherAndMe[i].classList.remove('active')
        }
        obj.classList.add('active');
        // 清除定时器
        clearInterval(loop);
    })
    // 代码执行的时候，自动轮播
    let loop = setInterval(autoPlay, 2000);
    left.addEventListener("mouseout", function () {
        // 移走轮播继续
        loop = setInterval(autoPlay, 2000);
    })
    left.addEventListener("mouseover", function () {
        // 移入清除定时器
        clearInterval(loop)
    })
    function autoPlay() {
        const active = document.querySelector(".main .content .news .left .title a.active");
        const index = parseInt(active.getAttribute("data-id"))
        let next = index === 4 ? 0 : index + 1;
        image.style.left = (-604 * next) + 'px';
        let brotherAndMe = active.parentElement.children;
        for (let i = 0; i < brotherAndMe.length; i++) {
            brotherAndMe[i].classList.remove('active')
        }
        brotherAndMe[next].classList.add('active');
    }
}();
-function () {
    const menu = document.querySelector(".main .content .news .center .menu");
    const allList = document.querySelector(".main .content .news .center .all-list")
    menu.addEventListener("mouseover", function (e) {
        let obj = e.target;
        if (obj.nodeName === "DIV") {
            let brother = obj.parentElement.children;
            for (let i = 0; i < brother.length; i++) {
                brother[i].classList.remove("active");
            }
            obj.classList.add("active")
            const index = obj.getAttribute("data-id")
            allList.style.left = -(360 * index) + 'px';
        }
    })
}()