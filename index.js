let no_btn = document.getElementById("no");
function yesLove() {
    alert('<3 <3 <3')
}
function noRun() {
    let a = Math.random() * window.innerWidth;
    let b = Math.random() * window.innerHeight;
    no_btn.style.left = a + "px";
    no_btn.style.top = b + "px";
}