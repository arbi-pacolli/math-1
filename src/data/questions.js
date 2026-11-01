export const questions = [
  {
    id: 1,
    category: "addition",
    difficulty: "easy",
    question: String.raw`Sa eshte formula e \sin(\alpha+\beta)?`,
    options: [
      String.raw`\sin\alpha\cos\beta+\cos\alpha\sin\beta`,
      String.raw`\sin\alpha\cos\beta-\cos\alpha\sin\beta`,
      String.raw`\cos\alpha\cos\beta-\sin\alpha\sin\beta`,
      String.raw`\sin\alpha+\sin\beta`
    ],
    answer: 0,
    explanation: String.raw`Formula e adicionit eshte \sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta.`
  },
  {
    id: 2,
    category: "addition",
    difficulty: "easy",
    question: String.raw`Cila eshte formula e \cos(\alpha+\beta)?`,
    options: [
      String.raw`\cos\alpha\cos\beta+\sin\alpha\sin\beta`,
      String.raw`\cos\alpha\cos\beta-\sin\alpha\sin\beta`,
      String.raw`\sin\alpha\cos\beta+\cos\alpha\sin\beta`,
      String.raw`\cos\alpha-\cos\beta`
    ],
    answer: 1,
    explanation: String.raw`Kosinusi i shumes eshte \cos\alpha\cos\beta-\sin\alpha\sin\beta.`
  },
  {
    id: 3,
    category: "addition",
    difficulty: "medium",
    question: String.raw`Cila eshte formula e \tan(\alpha+\beta)?`,
    options: [
      String.raw`\frac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta}`,
      String.raw`\frac{\tan\alpha+\tan\beta}{1+\tan\alpha\tan\beta}`,
      String.raw`\frac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta}`,
      String.raw`\tan\alpha+\tan\beta`
    ],
    answer: 2,
    explanation: String.raw`Tangjenti i shumes eshte \frac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta}.`
  },
  {
    id: 4,
    category: "double-angle",
    difficulty: "easy",
    question: String.raw`Sa eshte \sin 2\alpha?`,
    options: [
      String.raw`\sin^2\alpha+\cos^2\alpha`,
      String.raw`2\sin\alpha\cos\alpha`,
      String.raw`\cos^2\alpha-\sin^2\alpha`,
      String.raw`2\sin\alpha`
    ],
    answer: 1,
    explanation: String.raw`\sin 2\alpha=2\sin\alpha\cos\alpha.`
  },
  {
    id: 5,
    category: "double-angle",
    difficulty: "medium",
    question: String.raw`Cila nga keto eshte formule e sakte per \cos 2\alpha?`,
    options: [
      String.raw`1-2\cos^2\alpha`,
      String.raw`2\sin^2\alpha-1`,
      String.raw`1-2\sin^2\alpha`,
      String.raw`2\cos\alpha-1`
    ],
    answer: 2,
    explanation: String.raw`\cos 2\alpha=1-2\sin^2\alpha.`
  },
  {
    id: 6,
    category: "half-angle",
    difficulty: "medium",
    question: String.raw`Cila eshte formula per \sin\frac{\alpha}{2}?`,
    options: [
      String.raw`\pm\sqrt{\frac{1+\cos\alpha}{2}}`,
      String.raw`\pm\sqrt{\frac{1-\cos\alpha}{2}}`,
      String.raw`\frac{1-\cos\alpha}{\sin\alpha}`,
      String.raw`2\sin\alpha\cos\alpha`
    ],
    answer: 1,
    explanation: String.raw`\sin\frac{\alpha}{2}=\pm\sqrt{\frac{1-\cos\alpha}{2}}. Shenja varet nga kuadranti.`
  },
  {
    id: 7,
    category: "t-formulas",
    difficulty: "medium",
    question: String.raw`Si percaktohet zevendesimi t ne formulat T?`,
    options: [
      String.raw`t=\sin\alpha`,
      String.raw`t=\cos\alpha`,
      String.raw`t=\tan\frac{\alpha}{2}`,
      String.raw`t=\tan 2\alpha`
    ],
    answer: 2,
    explanation: String.raw`Ne formulat T perdoret zevendesimi t=\tan\frac{\alpha}{2}.`
  },
  {
    id: 8,
    category: "t-formulas",
    difficulty: "medium",
    question: String.raw`Cila eshte formula e \sin\alpha permes t?`,
    options: [
      String.raw`\frac{1-t^2}{1+t^2}`,
      String.raw`\frac{2t}{1+t^2}`,
      String.raw`\frac{2t}{1-t^2}`,
      String.raw`\frac{1+t^2}{2t}`
    ],
    answer: 1,
    explanation: String.raw`\sin\alpha=\frac{2t}{1+t^2}.`
  },
  {
    id: 9,
    category: "transformations",
    difficulty: "medium",
    question: String.raw`Sa eshte shnderrimi i \cos\alpha+\cos\beta?`,
    options: [
      String.raw`2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}`,
      String.raw`2\cos\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}`,
      String.raw`2\cos\frac{\alpha-\beta}{2}\sin\frac{\alpha+\beta}{2}`,
      String.raw`\cos(\alpha+\beta)`
    ],
    answer: 1,
    explanation: String.raw`\cos\alpha+\cos\beta=2\cos\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}.`
  },
  {
    id: 10,
    category: "trigonometric-equations",
    difficulty: "easy",
    question: "Cila eshte perioda themelore e funksionit sinus?",
    options: [
      String.raw`\pi`,
      String.raw`2\pi`,
      String.raw`\frac{\pi}{2}`,
      String.raw`4\pi`
    ],
    answer: 1,
    explanation: String.raw`Funksioni sinus perserit vlerat e tij pas edo intervali 2\pi.`
  }
];

export const getQuestionsByCategory = (categoryId) =>
  questions.filter((question) => question.category === categoryId);

export const getQuestionById = (questionId) =>
  questions.find((question) => question.id === questionId);

export const getRandomQuestions = (count = 5) =>
  [...questions].sort(() => Math.random() - 0.5).slice(0, count);
