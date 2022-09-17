const inputText = document.querySelector(".inputText");
const btn = document.querySelector(".btn");
const result = document.querySelector(".ouput");

let url = "https://api.agify.io/";

const getTranslatedUrl = (text) => {
  return url + "?" + `name=${text}`;
};

const fetchData = async (text) => {
  try {
    const res = await fetch(getTranslatedUrl(text));
    const data = await res.json();
    const age = data.age;
    result.innerHTML = `<h3>${age}</h3>`;
  } catch (error) {
    console.log(error);
    alert("Something Wrong please try again after some time");
  }
};

btn.addEventListener("click", () => {
  if (inputText.value == "") {
    alert("please enter your name");
  } else {
    fetchData(inputText.value);
  }
});
