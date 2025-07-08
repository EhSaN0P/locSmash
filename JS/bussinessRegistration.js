$(document).ready(function () {
    $(".login-box").hide()
    $(".next-btn").click(function (e) {
        e.preventDefault()
        if ($("#user_Number").val().length ==11){
            $("#errorAlert").alert('close'); //

            $(".numberCodeShow").html($("#user_Number").val())
            const current = $(this).closest(".step");
            const next = current.next(".step");
            current.removeClass("active");
            next.addClass("active");
        }
        else {
            $("#errorAlert").removeClass("hide")
            $("#errorAlert").addClass("show")

        }
    });





    $(".codeSubmit").click(function (e) {
        e.preventDefault()
        if ($("#user_Number-Submit").val() == "0000"){
            $("#errorCodeAlert").alert('close'); //

            $(".numberCodeShow").html($("#user_Number").val())

            $(".multi-step-form").hide()
            $(".login-box").show()



        }
        else if($("#user_Number-Submit").val() != "0000"){
            $("#errorCodeAlert").removeClass("hide")
            $("#errorCodeAlert").addClass("show")

        }
    });

    $(".Support").hide()
    $(".contact-support").click(function (){
        $(".Support").toggle("")

    } )


    $(".leaflet-control , .leaflet-top").remove()


});












let pr = document.querySelector("progress")




let currentTab = 0;


function tabs(pp) {

    let tabs = document.getElementsByClassName("tabb")

    for (let index = 0; index < tabs.length; index++) {
        let myTab = tabs.item(index)
        myTab.style.display = "none"


    }

    tabs.item(pp).style.display = "flex"
    document.getElementsByClassName("tabb").item(pp).classList = "tabb " + "animate__zoomInLeft"



}

tabs(currentTab)

let btn1 = document.getElementById("tab1next")

btn1.addEventListener("click",()=>{

    proggresTabsStep2()
    $(".step-1 span").html("yes")
    document.getElementsByClassName("tabb").item(0).classList = "tabb " + "animate__zoomOutLeft"
    setTimeout(() => {
        currentTab = 1
        tabs(currentTab)

    }, 1000);
})

let btn2 = document.getElementById("tab2next")
btn2.addEventListener("click",()=>{
    proggresTabsStep3()
    document.getElementsByClassName("tabb").item(1).classList = "tabb " + "animate__zoomOutLeft"

    setTimeout(() => {
        currentTab = 2
        tabs(currentTab)

    }, 1000);

})




function proggresTabsStep2() {
    pr.value = 50;
    document.querySelector(".step1").classList.add("completed");
    document.querySelector(".curentStep").classList.remove("curentStep");
    document.querySelector(".step2").classList.add("curentStep");
    document.querySelector(".step2 img").src = "../../icons/icons8-hourglass.jpg";
    document.querySelector(".step1 img").src = "../../icons/icons8-check-mark-50.png";
}


function proggresTabsStep3() {
    pr.value = 100;
    document.querySelector(".step2").classList.add("completed");
    document.querySelector(".curentStep").classList.remove("curentStep");
    document.querySelector(".step3").classList.add("curentStep");
    document.querySelector(".step3 img").src = "../../icons/icons8-hourglass.jpg";
    document.querySelector(".step2 img").src = "../../icons/icons8-check-mark-50.png";
}

// اضافه کردن تابع برای برگشت
function goBackStep(currentStep) {
    if (currentStep === 3) {
        pr.value = 50;
        document.querySelector(".step3").classList.remove("curentStep");
        document.querySelector(".step2").classList.remove("completed");
        document.querySelector(".step2").classList.add("curentStep");
        document.querySelector(".step2 img").src = "../../icons/icons8-hourglass.jpg";
        document.querySelector(".step3 img").src = "../../icons/icons8-box-important-50.png";
        currentTab = 1;
    } else if (currentStep === 2) {
        pr.value = 0;
        document.querySelector(".step2").classList.remove("curentStep");
        document.querySelector(".step1").classList.remove("completed");
        document.querySelector(".step1").classList.add("curentStep");
        document.querySelector(".step1 img").src = "../../icons/icons8-hourglass.jpg";
        document.querySelector(".step2 img").src = "../../icons/icons8-box-important-50.png";
        currentTab = 0;
    }
    tabs(currentTab);
}

// اصلاح event listener های دکمه‌های برگشت
document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let currentStep = parseInt(pr.value) / 50 + 1;
        document.getElementsByClassName("tabb").item(currentStep - 1).classList = "tabb animate__zoomOutRight";
        setTimeout(() => {
            goBackStep(currentStep);
        }, 500);
    });
});

// اضافه کردن اعتبارسنجی فرم
function validateForm() {
    let isValid = true;
    let requiredInputs = document.querySelectorAll('input[required]');

    requiredInputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
        }
    });

    return isValid;
}

// بهبود عملکرد دکمه‌های Next
document.getElementById("tab1next").addEventListener('click', (e) => {
    if (!validateForm()) {
        e.preventDefault();
        return;
    }
    proggresTabsStep2();
});

document.getElementById("tab2next").addEventListener('click', (e) => {
    if (!validateForm()) {
        e.preventDefault();
        return;
    }
    proggresTabsStep3();
});

// اضافه کردن container برای نوتیفیکیشن‌ها
document.body.insertAdjacentHTML('beforeend', '<div class="notification-container"></div>');

// تابع نمایش نوتیفیکیشن
function showNotification(message, type = 'error') {
    const container = document.querySelector('.notification-container');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    const icon = type === 'error' ? '⚠️' : '✅';
    notification.innerHTML = `
        <span class="notification-icon">${icon}</span>
        <span class="notification-message">${message}</span>
    `;

    container.appendChild(notification);

    // انیمیشن ورود
    setTimeout(() => {
        // انیمیشن خروج
        notification.style.animation = 'slideOut 0.5s ease forwards';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

function validateForms() {
    const errors = [];

    // اعتبارسنجی فرم اول
    const username = document.getElementById('usernameInput').value;
    if (!username) {
        errors.push('Username is required');
    }

    // اعتبارسنجی فرم دوم
    const email = document.getElementById('Emailinput').value;
    if (!email) {
        errors.push('Email is required');
    } else if (!email.includes('@')) {
        errors.push('Please enter a valid email');
    }

    const number = document.getElementById('Numberinput').value;
    if (!number) {
        errors.push('Phone number is required');
    }

    const gender = document.querySelector('input[name="GenderStatuse"]:checked');
    if (!gender) {
        errors.push('Please select your gender');
    }

    // اعتبارسنجی فرم سوم
    const password = document.getElementById('Passinput').value;
    const repeatPassword = document.getElementById('RepetePassinput').value;

    if (!password) {
        errors.push('Password is required');
    }
    if (!repeatPassword) {
        errors.push('Please repeat your password');
    }
    if (password !== repeatPassword) {
        errors.push('Passwords do not match');
    }

    return errors;
}


document.getElementById('tab1next').addEventListener('click', function(e) {
    const username = document.getElementById('usernameInput').value;
    if (!username) {
        e.preventDefault();
        showNotification('Please enter your username');
    }
});

document.getElementById('tab2next').addEventListener('click', function(e) {
    const email = document.getElementById('Emailinput').value;
    if (!email) {
        e.preventDefault();
        showNotification('Please enter your email');
    }
});

function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]+/)) strength++;
    if (password.match(/[A-Z]+/)) strength++;
    if (password.match(/[0-9]+/)) strength++;
    if (password.match(/[$@#&!]+/)) strength++;
    return strength;
}

document.getElementById('Passinput').addEventListener('input', function(e) {
    const strength = checkPasswordStrength(e.target.value);
    const colors = ['#ff4444', '#ffbb33', '#00C851', '#33b5e5', '#2BBBAD'];
    this.style.borderColor = colors[strength - 1] || '#ff4444';
});

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const validateEmail = debounce((email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
    }
}, 1000);

document.getElementById('Emailinput').addEventListener('input', (e) => {
    validateEmail(e.target.value);
});

// بهبود Submit Form

// اضافه کردن Smooth Scroll برای تغییر تب‌ها
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.querySelectorAll('#tab1next, #tab2next, .back-btn').forEach(btn => {
    btn.addEventListener('click', smoothScrollToTop);
});


document.addEventListener('DOMContentLoaded', function() {
    const loginBox = document.querySelector('.login-box');
    const finishBtn = loginBox.querySelector('.finishFormBTN');
    const inputs = loginBox.querySelectorAll('input[required], select[required]');

    function checkValidity() {
        let formIsValid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                formIsValid = false;
            }
        });

        if (formIsValid) {
            finishBtn.style.background = ''; // یا رنگ فعال دلخواه
            finishBtn.style.boxShadow = '';
            finishBtn.style.cursor = 'pointer';
            finishBtn.style.pointerEvents = 'auto';
            finishBtn.classList.remove('disabled');
        } else {
            finishBtn.style.background = 'linear-gradient(to right, #8b0a0a, #470707)';
            finishBtn.style.boxShadow = '0 0 5px';
            finishBtn.style.cursor = 'not-allowed';
            finishBtn.style.pointerEvents = 'none';
            finishBtn.classList.add('disabled');
        }
    }

    inputs.forEach(input => {
        input.addEventListener('input', checkValidity);
        input.addEventListener('change', checkValidity);
    });

    checkValidity();
});


window.addEventListener('wheel', e => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });
window.addEventListener('touchstart', e => { if (e.touches.length > 1) e.preventDefault(); }, { passive: false });
window.addEventListener('gesturestart', e => e.preventDefault());

    document.querySelector('.next-btn').addEventListener('click', function(e) {
    e.preventDefault();

    let phoneNumber = document.getElementById('user_Number').value.trim();
    const errorAlert = document.getElementById('errorAlert');

    if (!/^09\d{9}$/.test(phoneNumber)) {
    errorAlert.classList.add('show');
    errorAlert.classList.add('d-block');
    setTimeout(() => {
    errorAlert.classList.remove('show');
    errorAlert.classList.remove('d-block');
}, 3000);
    return;
}

    // اگر درست بود می‌تونی مرحله بعد رو فعال کنی
    document.querySelector('.step-1').classList.remove('active');
    document.querySelector('.step-2').classList.add('active');
});

