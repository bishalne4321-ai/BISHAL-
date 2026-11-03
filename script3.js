const form =
  document.querySelector("#profileForm");

const result =
  document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name =
    document.querySelector("#nameInput").value;

  const level =
    document.querySelector("#levelSelect").value;

  const agreed =
    document.querySelector("#agreeInput").checked;

  result.innerHTML = `
    <h2>Saved Profile</h2>
    <p>Name: ${name}</p>
    <p>Level: ${level}</p>
    <p>Agreed: ${agreed}</p>
  `;
});
