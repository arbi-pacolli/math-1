export const formulaCategories = [
  {
    id: "addition",
    title: "Formulat e adicionit",
    description: "Formulat për shumën dhe ndryshimin e këndeve."
  },
  {
    id: "double-angle",
    title: "Formulat e këndit të dyfishtë",
    description: "Formulat për këndin 2a."
  },
  {
    id: "half-angle",
    title: "Formulat e këndit përgjysmë",
    description: "Formulat për këndin a/2."
  },
  {
    id: "t-formulas",
    title: "Formulat T",
    description: "Shprehja e funksioneve trigonometrike përmes t = tan(a/2)."
  },
  {
    id: "transformations",
    title: "Transformimet trigonometrike",
    description: "Shndërrimi i prodhimeve në shuma dhe anasjelltas."
  }
];

export const formulas = [
  // FORMULAT E ADICIONIT
  {
    id: "sin-addition",
    category: "addition",
    title: "Sinusi i shumës",
    expression: String.raw`\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta`
  },
  {
    id: "sin-subtraction",
    category: "addition",
    title: "Sinusi i ndryshimit",
    expression: String.raw`\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta`
  },
  {
    id: "cos-addition",
    category: "addition",
    title: "Kosinusi i shumës",
    expression: String.raw`\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta`
  },
  {
    id: "cos-subtraction",
    category: "addition",
    title: "Kosinusi i ndryshimit",
    expression: String.raw`\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta`
  },
  {
    id: "tan-addition",
    category: "addition",
    title: "Tangjenti i shumës",
    expression: String.raw`\tan(\alpha+\beta)=\frac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta}`
  },
  {
    id: "tan-subtraction",
    category: "addition",
    title: "Tangjenti i ndryshimit",
    expression: String.raw`\tan(\alpha-\beta)=\frac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta}`
  },
  {
    id: "cot-addition",
    category: "addition",
    title: "Kotangjenti i shumës",
    expression: String.raw`\cot(\alpha+\beta)=\frac{\cot\alpha\cot\beta-1}{\cot\alpha+\cot\beta}`
  },
  {
    id: "cot-subtraction",
    category: "addition",
    title: "Kotangjenti i ndryshimit",
    expression: String.raw`\cot(\alpha-\beta)=\frac{\cot\alpha\cot\beta+1}{\cot\beta-\cot\alpha}`
  },

  // FORMULAT E KENDIT TE DYFISHTE
  {
    id: "sin-double",
    category: "double-angle",
    title: "Sinusi i këndit të dyfishtë",
    expression: String.raw`\sin 2\alpha=2\sin\alpha\cos\alpha`
  },
  {
    id: "cos-double-1",
    category: "double-angle",
    title: "Kosinusi i këndit të dyfishtë",
    expression: String.raw`\cos 2\alpha=\cos^2\alpha-\sin^2\alpha`
  },
  {
    id: "cos-double-2",
    category: "double-angle",
    title: "Kosinusi i këndit të dyfishtë - forma 2",
    expression: String.raw`\cos 2\alpha=2\cos^2\alpha-1`
  },
  {
    id: "cos-double-3",
    category: "double-angle",
    title: "Kosinusi i këndit të dyfishtë - forma 3",
    expression: String.raw`\cos 2\alpha=1-2\sin^2\alpha`
  },
  {
    id: "tan-double",
    category: "double-angle",
    title: "Tangjenti i këndit të dyfishtë",
    expression: String.raw`\tan 2\alpha=\frac{2\tan\alpha}{1-\tan^2\alpha}`
  },
  {
    id: "cot-double",
    category: "double-angle",
    title: "Kotangjenti i këndit të dyfishtë",
    expression: String.raw`\cot 2\alpha=\frac{\cot^2\alpha-1}{2\cot\alpha}`
  },

  // FORMULAT E KENDIT PERGJYSME
  {
    id: "sin-half",
    category: "half-angle",
    title: "Sinusi i këndit përgjysmë",
    expression: String.raw`\sin\frac{\alpha}{2}=\pm\sqrt{\frac{1-\cos\alpha}{2}}`,
    note: "Shenja përcaktohet nga kuadranti ku ndodhet këndi a/2."
  },
  {
    id: "cos-half",
    category: "half-angle",
    title: "Kosinusi i këndit përgjysmë",
    expression: String.raw`\cos\frac{\alpha}{2}=\pm\sqrt{\frac{1+\cos\alpha}{2}}`,
    note: "Shenja përcaktohet nga kuadranti ku ndodhet këndi a/2."
  },
  {
    id: "tan-half-1",
    category: "half-angle",
    title: "Tangjenti i këndit përgjysmë",
    expression: String.raw`\tan\frac{\alpha}{2}=\pm\sqrt{\frac{1-\cos\alpha}{1+\cos\alpha}}`
  },
  {
    id: "tan-half-2",
    category: "half-angle",
    title: "Tangjenti i këndit përgjysmë - forma 2",
    expression: String.raw`\tan\frac{\alpha}{2}=\frac{\sin\alpha}{1+\cos\alpha}`
  },
  {
    id: "tan-half-3",
    category: "half-angle",
    title: "Tangjenti i këndit përgjysmë - forma 3",
    expression: String.raw`\tan\frac{\alpha}{2}=\frac{1-\cos\alpha}{\sin\alpha}`
  },

  // FORMULAT T
  {
    id: "t-sin",
    category: "t-formulas",
    title: "Sinusi përmes t",
    expression: String.raw`\sin\alpha=\frac{2t}{1+t^2}`,
    note: String.raw`Ku t=\tan\frac{\alpha}{2}.`
  },
  {
    id: "t-cos",
    category: "t-formulas",
    title: "Kosinusi përmes t",
    expression: String.raw`\cos\alpha=\frac{1-t^2}{1+t^2}`,
    note: String.raw`Ku t=\tan\frac{\alpha}{2}.`
  },
  {
    id: "t-tan",
    category: "t-formulas",
    title: "Tangjenti përmes t",
    expression: String.raw`\tan\alpha=\frac{2t}{1-t^2}`,
    note: String.raw`Ku t=\tan\frac{\alpha}{2}.`
  },
  {
    id: "t-cot",
    category: "t-formulas",
    title: "Kotangjenti përmes t",
    expression: String.raw`\cot\alpha=\frac{1-t^2}{2t}`,
    note: String.raw`Ku t=\tan\frac{\alpha}{2}.`
  },

  // TRANSFORMIMET TRIGONOMETRIKE
  {
    id: "product-sin-cos",
    category: "transformations",
    title: "Prodhimi sinusi dhe kosinusi",
    expression: String.raw`\sin\alpha\cos\beta=\frac{1}{2}[\sin(\alpha+\beta)+\sin(\alpha-\beta)]`
  },
  {
    id: "product-cos-sin",
    category: "transformations",
    title: "Prodhimi kosinusi dhe sinusi",
    expression: String.raw`\cos\alpha\sin\beta=\frac{1}{2}[\sin(\alpha+\beta)-\sin(\alpha-\beta)]`
  },
  {
    id: "product-cos-cos",
    category: "transformations",
    title: "Prodhimi i dy kosinuseve",
    expression: String.raw`\cos\alpha\cos\beta=\frac{1}{2}[\cos(\alpha+\beta)+\cos(\alpha-\beta)]`
  },
  {
    id: "product-sin-sin",
    category: "transformations",
    title: "Prodhimi i dy sinuseve",
    expression: String.raw`\sin\alpha\sin\beta=\frac{1}{2}[\cos(\alpha-\beta)-\cos(\alpha+\beta)]`
  },
  {
    id: "sum-sin",
    category: "transformations",
    title: "Shuma e dy sinuseve",
    expression: String.raw`\sin\alpha+\sin\beta=2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}`
  },
  {
    id: "difference-sin",
    category: "transformations",
    title: "Dallimi i dy sinuseve",
    expression: String.raw`\sin\alpha-\sin\beta=2\cos\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2}`
  },
  {
    id: "sum-cos",
    category: "transformations",
    title: "Shuma e dy kosinuseve",
    expression: String.raw`\cos\alpha+\cos\beta=2\cos\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}`
  },
  {
    id: "difference-cos",
    category: "transformations",
    title: "Dallimi i dy kosinuseve",
    expression: String.raw`\cos\alpha-\cos\beta=-2\sin\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2}`
  }
];

export const getFormulasByCategory = (categoryId) =>
  formulas.filter((formula) => formula.category === categoryId);

export const getFormulaById = (formulaId) =>
  formulas.find((formula) => formula.id === formulaId);

export const getFormulaCategory = (categoryId) =>
  formulaCategories.find((category) => category.id === categoryId);
