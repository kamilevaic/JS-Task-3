/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.getElementById("btn").addEventListener("click", showUsers);

function generateHtml(card) {
  const userCard = document.createElement("div");
  userCard.setAttribute("class", "user-card");
  const image = document.createElement("img");
  image.setAttribute("class", "user-img");
  const login = document.createElement("id");
  login.setAttribute("class", "user-login");

  login.innerHTML = card.login;
  image.src = card.avatar_url;

  document.getElementById("output").append(userCard);
  userCard.append(image, login);
}

async function showUsers() {
  const res = await fetch("https://api.github.com/users");
  const resJson = await res.json();
  resJson.forEach((card) => {
    generateHtml(card);
  });
  const hideMsg = document.getElementById("message");
  hideMsg.remove();
}
