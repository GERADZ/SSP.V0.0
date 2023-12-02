const wapper = document.querySelector('.wapper')
const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')

registerLink.onclick = () => {
    wapper.classList.add('active');
};
loginLink.onclick = () => {
    wapper.classList.remove('active')
};













