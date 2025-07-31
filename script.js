     document.querySelectorAll('[contenteditable="true"]').forEach(element => {
            const storageKey = `savedText_${element.className}_${element.tagName}`;
            element.innerText = localStorage.getItem(storageKey) || element.innerText;

            element.addEventListener('input', () => {
                localStorage.setItem(storageKey, element.innerText);
            });
        });

document.addEventListener("DOMContentLoaded", function (){

    const modal= document.querySelector(".modal");
    const btn = document.querySelector(".description-list__button");
    const closeBtn = document.querySelector(".close");
    
    btn.addEventListener("click", function () {
    modal.style.display = "block";
  });
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
    window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
})