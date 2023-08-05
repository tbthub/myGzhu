
//导航栏渲染
const navUl = document.querySelector('#navUl')

function navRender() {
    let navArrHead = ['学校概况', '组织机构', '师资队伍', '人才培养', '招生就业', '科学研究', '学科建设', '人才招聘', '合作交流']
    let subArr1 = ['学校简介', '现任领导', '学校章程', '校训校徽校歌', '校园风景']
    let subArr2 = ['学院(部)', '管理服务机构', '科研单位', '直属单位']
    let subArr3 = ['队伍概况', '人才招聘', '杰出人才']
    let subArr4 = ['本科生培养', '研究生培养', '留学生培养', '继续教育']
    let subArr5 = ['本科生招生', '研究生招生', '成人教育招生', '留学生招生', '就业指导']
    let subArr6 = ['科学研究简况', '重点科研平台', '学术期刊']
    let subArr7 = ['重点学科', '博士点', '学术硕士点', '专业硕士点']
    let subArr8 = ['高层次人才招聘公告', '博士后招聘公告', '其他系列招聘公告']
    let subArr9 = ['国际交流与合作', '港澳台交流与合作']
    let subArr = [subArr1, subArr2, subArr3, subArr4, subArr5, subArr6, subArr7, subArr8, subArr9,]
    let str = ''
    for (let i = 0; i < navArrHead.length; i++)
        str += `
         <li>
                <a href="#">${navArrHead[i]}</a>
                <div class="sub-navBox">
                   ${subArrContent(subArr[i])}
                </div>
         </li>
        `
    navUl.innerHTML = str
}

function subArrContent(arr) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        str += `<div class="drop-downBox">${arr[i]}</div>`
    }
    return str
}


navRender()


//导航栏鼠标经过下拉框模块================================================================================================

navUl.addEventListener('mouseover', function (e) {
    if (e.target.tagName === 'LI') {
        const div = e.target.querySelector('.sub-navBox')
        div.style.display = 'block'
    }
    if (e.target.tagName === 'A') {
        e.target.nextElementSibling.style.display = 'block'
    }
})
navUl.addEventListener('mouseout', function (e) {
    if (e.target.tagName === 'LI') {
        const div = e.target.querySelector('.sub-navBox')
        div.style.display = 'none'
    }
    if (e.target.tagName === 'A') {
        e.target.nextElementSibling.style.display = 'none'
    }
})
const sub_navBoxes = document.querySelectorAll('.sub-navBox')
for (let i = 0; i < sub_navBoxes.length; i++) {
    sub_navBoxes[i].addEventListener('mouseenter', function () {
        sub_navBoxes[i].style.display = 'block'
    })
    sub_navBoxes[i].addEventListener('mouseleave', function () {
        sub_navBoxes[i].style.display = 'none'
    })
}


// 点击搜索模块=====================================================================================
const navTopLink = document.querySelector('.navTopLink')
const searchIcon = document.querySelector('.searchIcon')
const searchBox = document.querySelector('.searchBox')
let iconOrInput = true
searchIcon.addEventListener('click', function () {
    navTopLink.style.marginRight = '200px'
    searchBox.style.display = 'inline-block'
    searchIcon.style.display = 'none'
    searchBox.firstElementChild.focus()
})
searchBox.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        navTopLink.style.marginRight = '0'
        searchBox.style.display = 'none'
        searchIcon.style.display = 'inline-block'
    }
})


//广告模块=========================================================================================
const ad = document.querySelector('#ad')
let Wtag = true
let Htag = true
let myTop = 200
let myLeft = 100

//广告移动=======================
function move() {
    let speed = 1
    if (myLeft >= window.innerWidth - 510 || myLeft <= 0)//到边了,转向
        Wtag = !Wtag
    if (myTop >= window.innerHeight - 270 || myTop <= 0)//到边了,转向
        Htag = !Htag
    myLeft = Wtag ? myLeft + speed : myLeft - speed
    myTop = Htag ? myTop + speed : myTop - speed

    ad.style.left = `${myLeft}px`
    ad.style.top = `${myTop}px`
}

let moveId = setInterval(move, 10)
ad.addEventListener('mouseenter', function () {
    clearInterval(moveId)
})
ad.addEventListener('mouseleave', function () {
    moveId = setInterval(move, 10)
})
const close = document.querySelector('.close')

//广告删除============================
function myClose() {
    let arr = ['您真的要删除我吗?', '您真的确认要删除我了吗?', '能不能不要删除我?', '您真的确定吗?', '您是否要反悔吗?', '不要再往下面点了!', '欸,罢了罢了!']
    let dele = false
    for (let i = 0; i < arr.length; i++) {
        if (i !== 2 && i !== 4 && i !== 5 && !confirm(arr[i])) {
            break
        } else if (i === 2 && confirm(arr[2])) {
            break
        } else if (i === 4 && confirm(arr[4])) {
            break
        } else if (i === 5 && confirm(arr[5])) {
            break
        }
        if (i === 6)
            dele = true
    }
    if (dele)
        ad.style.display = 'none'
}

close.addEventListener('click', myClose)

// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
    autoplay: true,
    mousewheel: true,
    keyboard: true,
});