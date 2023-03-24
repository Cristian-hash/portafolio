const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toogleColors = document.getElementById("toggle-colors");

<<<<<<< HEAD
const rootStyles = document.getElement.style;


toggleTheme.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src='assets/icons/sun.svg'
        toggleText.textContent='Light Mode'
    }else{
        toggleIcon.src='assets/icons/moon.svg'
        toggleText.textContent='Dark Mode'
=======
const rootStyles = document.documentElement.style;

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(toggleIcon.src.includes("moon.svg")) {
        toggleIcon.src="assets/icons/sun.svg";
        toggleText.textContent="Light Mode";
    } else {
        toggleIcon.src = "assets/icons/moon.svg";
        toggleText.textContent="Dark Mode";
>>>>>>> 65810e33fd3f492deb5eb35cb7391aa201ad3177
    }
});

toggleColors.addEventListener('click',(e)=>{
<<<<<<< HEAD
    rootStyles.setProperty ('--primary-color',e.target.dataset.color);
})
=======
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
});
>>>>>>> 65810e33fd3f492deb5eb35cb7391aa201ad3177
