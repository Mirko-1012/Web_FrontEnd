const btn = document.querySelector(".add");
const ul = document.querySelector("ul");

const nodeList = document.querySelectorAll(".list-item");
const liveList = document.getElementsByClassName("list-item");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "New Item";
  li.classList.add("list-item");
  ul.appendChild(li);

  console.log(nodeList.length); 
  console.log(liveList.length); 
});