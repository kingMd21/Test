document.addEventListener("DOMContentLoaded", () => {
    const questionsContainer = document.getElementById('question-container');

    const questions = [
        {
            question: "If you had to choose, what would be your favorite food?",
            options: ["Indian", "Mexican", "Chinese"]
        },
        {
            question: "What do you look for in your perfect man?",
            options: ["Always there for me", "Quiet", "Is my cousin"]
        },
        {
            question: "In a week, how many times should a man shower?",
            options: ["Everyday", "Mostly Everyday", "Once in a while"]
        },
        {
            question: "What's your ideal date?",
            options: ["Stay inside and watch anime", "Eating food", "Going kayaking"]
        }
    ];

    const answersMapping = {
        1: {1: 1, 2: 2, 3: 3},
        2: {1: 1, 2: 2, 3: 3},
        3: {1: 1, 2: 2, 3: 3},
        4: {1: 1, 2: 2, 3: 3}
    };

    let currentQuestionIndex = 0;
    const userAnswers = {1: 0, 2: 0, 3: 0};

    const showQuestion = (index) => {
        if (index < questions.length) {
            const questionData = questions[index];
            questionsContainer.innerHTML = `
                <div class="question">
                    <h2>${questionData.question}</h2>
                    <div class="options">
                        ${questionData.options.map((option, idx) => `
                            <button class="option" data-index="${idx + 1}">${option}</button>
                        `).join('')}
                    </div>
                </div>
            `;

            document.querySelectorAll('.option').forEach(optionButton => {
                optionButton.addEventListener('click', () => {
                    const answerIndex = parseInt(optionButton.dataset.index);
                    const answerModel = answersMapping[index + 1][answerIndex];
                    userAnswers[answerModel]++;
                    currentQuestionIndex++;
                    showQuestion(currentQuestionIndex);
                });
            });
        } else {
            displayResult();
        }
    };

    const displayResult = () => {
        let maxCount = 0;
        let selectedModel = 1;

        for (const model in userAnswers) {
            if (userAnswers[model] > maxCount) {
                maxCount = userAnswers[model];
                selectedModel = model;
            }
        }

        questionsContainer.innerHTML = `
            <div class="result">
                <h2>Here is a model based on your preferences!</h2>
                <img src="img${selectedModel}.png" alt="Matching Model" class="profile-img">
                <p>To learn more about your model, visit our <a href="model.html">Model Page</a>.</p>
                <button onclick="location.href='model.html'">Check Out Our Model</button>
            </div>
        `;
    };

    showQuestion(currentQuestionIndex);
});
