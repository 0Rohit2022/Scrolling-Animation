const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checktheboxes);
 
checktheboxes()

function checktheboxes() {
   const Triggerdown = window.innerHeight / 5 * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < Triggerdown){
            box.classList.add("show-up");

        }
        else {
            box.classList.remove("show-up");
        }

    })
}