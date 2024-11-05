/*
 * @Description: 
 * @Author: FallCicada
 * @Date: 2024-11-05 19:31:57
 * @LastEditors: FallCicada
 * @LastEditTime: 2024-11-05 19:32:25
 * @: 無限進步
 */
function switchCaptcha() {
    const captchaImage = document.getElementById('captchaImage');
    captchaImage.src = '/captcha?' + new Date().getTime();
}
function getRandomCaptcha() {
    const captchaImages = [
        './image/验证码/验证码1.jpg',
        './image/验证码/验证码2.jpg',
        './image/验证码/验证码3.jpg',
        './image/验证码/验证码4.jpg'
    ];
    const randomIndex = Math.floor(Math.random() * captchaImages.length);
    return captchaImages[randomIndex];
}

function switchCaptcha() {
    const captchaImage = document.getElementById('captchaImage');
    captchaImage.src = getRandomCaptcha() + '?' + new Date().getTime();
}

document.getElementById('switchCaptchaButton').addEventListener('click', switchCaptcha);