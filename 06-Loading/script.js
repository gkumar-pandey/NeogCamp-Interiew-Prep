const btn = document.querySelector(".btn");

const disappearLoading = () => {
  document.querySelector(".loading").style.display = "none";
};

btn.addEventListener("click", disappearLoading);
