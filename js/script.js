"use strict";

const quiz = document.querySelector("#scent-quiz");

if (quiz) {
  quiz.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(quiz);
    const result = document.querySelector("#quiz-result");
    const missingAnswer = ["scent", "budget", "occasion", "season"].some(
      (name) => !formData.get(name)
    );

    if (missingAnswer) {
      result.textContent = "Please answer all four questions to get your match.";
      result.classList.add("show");
      return;
    }

    const scent = formData.get("scent");
    const occasion = formData.get("occasion");
    let match = "Bleu de Chanel";

    if (scent === "spicy" || occasion === "date-night") {
      match = "YSL La Nuit de L'Homme";
    } else if (scent === "citrus" || formData.get("season") === "summer") {
      match = "Acqua di Gio";
    } else if (occasion === "work") {
      match = "Prada L'Homme";
    }

    result.textContent = `Your match is ${match}. Visit the Recommendations page to learn more.`;
    result.classList.add("show");
  });
}
