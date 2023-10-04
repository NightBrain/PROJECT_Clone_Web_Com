const spinnerWrapperEI = document.querySelector(".loader");

setTimeout(() => {
  spinnerWrapperEI.style.opacity = "0";
  setTimeout(() => {
    spinnerWrapperEI.classList.add("loader-hidden");
  }, 500);
}, 2000);
