const comments = [
  "This is an amazing website!",
  "I love the content you provide.",
  "VERY GOOD!",
  "This has helped me a lot, thank you!",
  "GOOD BOY",
  "GOOD GURL",
  "FANTASTIC!",
  "THANK YOU BEYONCE!",
  "EXCELLENT",
  "AWESOME",
  "GREAT",
  "WOWI",
  "GRAH",
  "OMCIM",
  "WHAT IF?",
  "DI KA NA NYA MAHAL",
  "MAY BAGO NA SYA",
  "LUH! MAPANAKET SILA"
];

function displayRandomComment(element) {
  const randomIndex = Math.floor(Math.random() * comments.length);
  element.innerHTML = comments[randomIndex];
}

const commentElements = document.querySelectorAll(".comment");

commentElements.forEach(commentElement => {
  displayRandomComment(commentElement);
});

setInterval(() => {
  commentElements.forEach(commentElement => {
      displayRandomComment(commentElement);
  });
}, 30000);