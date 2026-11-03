const button =
  document.querySelector("#makeBtn");

const result =
  document.querySelector("#result");

button.addEventListener("click", () => {
  result.innerHTML = `
    <article>
      <h2>JavaScript Card</h2>
      <p>Created with innerHTML.</p>
    </article>
  `;
});
