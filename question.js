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
        },
        {
            question: "What describes you the best?",
            options: ["Introverted", "Ambivert", "Extrovert"]
        },
        {
            question: "What's your spice tolerance?",
            options: ["Mild", "Low", "Brown"]
        },
        {
            question: "What do you like to watch?",
            options: ["Anime", "Shows", "Sports"]
        },
        {
            question: "What rarity do you like your meat?",
            options: ["Burnt", "Medium Rare", "Raw"]
        }
    ];

    const answersMapping = {
        1: {1: 1, 2: 2, 3: 3}, // Q1: Indian (1), Mexican (2), Chinese (3)
        2: {1: 2, 2: 1, 3: 3}, // Q2: Always there for me (1), Quiet (2), Is my cousin (3)
        3: {1: 1, 2: 2, 3: 3}, // Q3: Everyday (1), Mostly Everyday (2), Once in a while (3)
        4: {1: 1, 2: 2, 3: 3}, // Q4: Stay inside and watch anime (1), Eating food (2), Going kayaking (3)
        5: {1: 1, 2: 2, 3: 3}, // Q5: Introverted (1), Ambivert (2), Extrovert (3)
        6: {1: 1, 2: 2, 3: 3}, // Q6: Mild (1), Low (2), High (3)
        7: {1: 1, 2: 2, 3: 3}, // Q7: Anime (1), Shows (2), Sports (3)
        8: {1: 3, 2: 2, 3: 1}  // Q8: Burnt (1), Medium Rare (2), Raw (3)
    };

    const modelPoints = {
        1: {1: 3, 2: 2, 3: 1, 4: 3, 5: 3, 6: 1, 7: 1, 8: 3}, // Brandon
        2: {1: 2, 2: 1, 3: 2, 4: 2, 5: 3, 6: 1, 7: 1, 8: 2}, // Abraham
        3: {1: 1, 2: 3, 3: 3, 4: 3, 5: 2, 6: 3, 7: 2, 8: 1}, // Aditya
        4: {1: 3, 2: 1, 3: 1, 4: 2, 5: 3, 6: 3, 7: 3, 8: 2}, // Joshua
        5: {1: 3, 2: 1, 3: 1, 4: 2, 5: 2, 6: 3, 7: 1, 8: 3}, // Matt
        6: {1: 1, 2: 1, 3: 1, 4: 2, 5: 2, 6: 3, 7: 2, 8: 1}, // Md
        7: {1: 1, 2: 1, 3: 1, 4: 2, 5: 2, 6: 1, 7: 2, 8: 1}  // Nate
    };

    let currentQuestionIndex = 0;
    const userAnswers = {
        1: 0, // Brandon
        2: 0, // Abraham
        3: 0, // Aditya
        4: 0, // Joshua
        5: 0, // Matt
        6: 0, // Md
        7: 0  // Nate
    };

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

                    for (const model in userAnswers) {
                        if (modelPoints[model][index + 1] === answerModel) {
                            userAnswers[model]++;
                        }
                    }

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
