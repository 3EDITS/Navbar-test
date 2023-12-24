const loginNav = document.querySelector(".login-nav"),
    wrapperDisplay = document.querySelector(".wrapper-display"),
    overLay = document.querySelector(".overlay")

const selectLang = document.getElementById("select-lang")
const flagIcon = document.querySelector(".flag-icon")

const th = {
    menu_title: "สมาคมนักกีฬาล้อเดียวไทย",
    menu_home: "หน้าแรก",
    menu_product: "สินค้า",
    menu_list: "รายชื่อนักกีฬา",
    menu_contact: "ติดต่อ",
    menu_login: "เข้าสู่ระบบ",
    login_title: "เข้าสู่ระบบ",
    login_input_user: "ชื่อผู้ใช้หรือที่อยู่อีเมล * ",
    login_input_password: "รหัสผ่าน *",
    login_input_checked: "จำฉันไว้",
    login_input_btn: "เข้าสู่ระบบ",
    login_input_rem: "คุณจำรหัสผ่านไม่ได้?",
    sighup_title: "ลงทะเบียน",
    sighup_input_user: "ชื่อผู้ใช้ * ",
    sighup_input_email: "อีเมล *",
    sighup_input_password: "รหัสผ่าน *",
    sighup_info: "ข้อมูลส่วนบุคคลของคุณจะถูกใช้เพื่อสนับสนุนประสบการณ์ของคุณในเว็บไซต์นี้เพื่อจัดการการเข้าถึงบัญชีของคุณและเพื่อวัตถุประสงค์อื่น ๆ ที่อธิบายไว้ใน ",
    sighup_info_a: "นโยบายความเป็นส่วนตัว",
    sighup_btn: "ลงทะเบียน",
}

const en = {
    menu_title: "Thai Unicyclist Association",
    menu_home: "Home",
    menu_product: "Product",
    menu_list: "List of athletes",
    menu_contact: "Contact",
    menu_login: "Login",
    login_title: "Login",
    login_input_user: "Username or Email Address * ",
    login_input_password: "Password *",
    login_input_checked: "Remember me",
    login_input_btn: "Login",
    login_input_rem: "You forgot password?",
    sighup_title: "Sighup",
    sighup_input_user: "Username * ",
    sighup_input_email: "Email *",
    sighup_input_password: "Password *",
    sighup_info: "Your personal information will be used to support your experience on this website, to manage access to your account, and for other purposes described in ",
    sighup_info_a: "Privacy Policy",
    sighup_btn: "Signup",
}

function renderlang(){
    if (!localStorage.lang) {
        localStorage.setItem("lang", "en")
    } else {

        // Nav Menu
        $("#menu_title").text(settext("menu_title"))
        $("#menu_home").text(settext("menu_home"))
        $("#menu_product").text(settext("menu_product"))
        $("#menu_list").text(settext("menu_list"))
        $("#menu_contact").text(settext("menu_contact"))
        $("#menu_login").text(settext("menu_login"))

        // ================================

        // Login Container

        $("#login_title").text(settext("login_title"))
        $("#login_input_user").text(settext("login_input_user"))
        $("#login_input_password").text(settext("login_input_password"))
        $("#login_input_checked").text(settext("login_input_checked"))
        $("#login_input_btn").text(settext("login_input_btn"))
        $("#login_input_rem").text(settext("login_input_rem"))

        // ================================

        // Sighup Container

        $("#sighup_title").text(settext("sighup_title"))
        $("#sighup_input_user").text(settext("sighup_input_user"))
        $("#sighup_input_email").text(settext("sighup_input_email"))
        $("#sighup_input_password").text(settext("sighup_input_password"))
        $("#sighup_info").text(settext("sighup_info"))
        $("#sighup_info_a").text(settext("sighup_info_a"))
        $("#sighup_btn").text(settext("sighup_btn"))
    }
}

function settext(key){
    if (localStorage.lang == "en") {
        return en[key]
    } else {
        return th[key]
    }
}
function thaiLang() {
    if (localStorage.lang == "en") {
        localStorage.setItem("lang", "th")
    }
    renderlang()
}

function engLang() {
    if (localStorage.lang == "th") {
        localStorage.setItem("lang", "en")
    }
    renderlang()
}

renderlang()


selectLang.addEventListener("change", () => {
    if (selectLang.value == "Th") {
        flagIcon.classList.add("Thai-Flag")
        flagIcon.classList.remove("Eng-Flag")
        thaiLang()
    } else if (selectLang.value == "Eng") {
        flagIcon.classList.add("Eng-Flag")
        flagIcon.classList.remove("Thai-Flag")
        engLang()
    }
})

loginNav.addEventListener("click", () => {
    wrapperDisplay.classList.toggle("display")
    overLay.classList.toggle("display")
})

