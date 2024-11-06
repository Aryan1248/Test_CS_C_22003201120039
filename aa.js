async function getjoke() {
  try {
    let response = await fetch("https://v2.jokeapi.dev/joke/Any");
    let data = await response.json();
    console.log(data);
    data.forEach((element) => {
      let h1 = document.createElement("h1");
      h1.textContent = element.login;
      let a = document.createElement("a");
      a.textContent = element.node_id;
      a.setAttribute("href", element.html_url);
      let top = document.getElementById("top");
      top.appendChild(h1);
      top.appendChild(a);
    });
  } catch (error) {
    console.log(error);
  }
}
