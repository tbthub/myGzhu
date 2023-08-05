
let mainH = 0
let subH = [0, 0, 0, 0, 0, 0, 0, 0, 0]
// 点击触发下拉弹框模块
const nav = document.querySelector('.nav')
const pop = document.querySelector('.pop')

pop.addEventListener('click', function () {
    if (nav.style.height !== '60vh') {
        nav.style.height = '60vh'
        mainH = 60
    } else {
        nav.style.height = '0'
        mainH = 0
    }
})

function navRender() {
    //渲染nav数据
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
    for (let i = 0; i < navArrHead.length; i++) {
        str += `
         <li>
                <div class="mainNav">${navArrHead[i]} <span class="popSubNav">+</span></div>
                <ul class="origin">
                   ${subArrContent(subArr[i])}
                </ul>
            </li>
        `
    }
    const navHead = document.querySelector('.navHead')
    navHead.innerHTML = ' <li class="home">首页</li>' + str
}

function subArrContent(arr) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        str += ` <li class="subNav"><a href="#">${arr[i]}</a></li>`
    }
    return str
}

navRender()


//点击加号弹出subNav
const popSubNav = document.querySelectorAll('.popSubNav')
for (let i = 0; i < popSubNav.length; i++) {
    popSubNav[i].addEventListener('click', function () {
        const ulBox = popSubNav[i].parentElement.nextElementSibling
        if (subH[i] === 0) {
            subH[i] = 1
            mainH += ulBox.childElementCount * 4.5
            ulBox.style.height = `${ulBox.childElementCount * 4.5}vh`
        } else {
            subH[i] = 0
            mainH -= ulBox.childElementCount * 4.5
            ulBox.style.height = `0vh`
        }
        nav.style.height = `${mainH}vh`
    })
}