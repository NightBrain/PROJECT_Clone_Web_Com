const spinnerWrapperEI = document.querySelector('.loader');

setTimeout(() => {
  spinnerWrapperEI.style.opacity = '0';

  spinnerWrapperEI.classList.add("loader-hidden");

  spinnerWrapperEI.addEventListener("transitionend", () => {
    document.body;
  });
}, 1000);
