const ratings = Array.from(document.getElementsByClassName("rating"));
let chosenRating: string = "";

for (let rating of ratings) {
  rating.addEventListener("click", () => {
    for (let r of ratings) {
      r.classList.remove("selected");
    }
    rating.classList.add("selected");
    chosenRating = document.getElementsByClassName("selected")[0].innerHTML;
  });
}

const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", () => {
  const inner = `
   <div>
    <img src="../illustration-thank-you.svg"/>
   </div>
   <div class="outlined">
    <p class="primary">You selected ${chosenRating} out of 5</p>
   </div>
   <h1>Thank you!</h1>
   <p class="center">
    We appreciate you taking the time to give a rating. If you ever need more support,
    don't hesitate to get in touch!
   </p>
`;

  const card = document.getElementsByClassName("card")[0];
  card.innerHTML = inner;
  card.classList.add("card-flex-center");
});
