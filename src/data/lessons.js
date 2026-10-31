export const lessons = [
  {
    id: "addition-formulas",
    number: 1,
    title: "Formulat e adicionit",
    description: "Mëso si të llogaritësh funksionet trigonometrike të shumës dhe ndryshimit të këndeve.",
    duration: "20 min",
    topics: [
      {
        title: "Sinusi i shumës dhe ndryshimit",
        explanation: "Për të gjetur sinusin e shumës ose ndryshimit të dy këndeve, përdor formulat e adicionit.",
        formulas: [
          String.raw`\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta`,
          String.raw`\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta`
        ]
      },
      {
        title: "Kosinusi i shumës dhe ndryshimit",
        explanation: "Te kosinusi, shenja ndërmjet prodhimeve është e kundërt me shenjën brenda kllapave.",
        formulas: [
          String.raw`\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta`,
          String.raw`\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta`
        ]
      },
      {
        title: "Tangjenti dhe kotangjenti",
        explanation: "Tangjenti dhe kotangjenti i shumës ose ndryshimit shprehen përmes funksioneve të këndeve përkatëse.",
        formulas: [
          String.raw`\tan(\alpha+\beta)=\frac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta}`,
          String.raw`\tan(\alpha-\beta)=\frac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta}`,
          String.raw`\cot(\alpha+\beta)=\frac{\cot\alpha\cot\beta-1}{\cot\alpha+\cot\beta}`,
          String.raw`\cot(\alpha-\beta)=\frac{\cot\alpha\cot\beta+1}{\cot\beta-\cot\alpha}`
        ]
      }
    ],
    example: {
      title: "Shembull: Llogaritja e cos 75°",
      steps: [
        {
          title: "Shkruaj këndin si shumë",
          expression: String.raw`\cos 75^\circ=\cos(45^\circ+30^\circ)`
        },
        {
          title: "Përdor formulën e kosinusit",
          expression: String.raw`\cos(45^\circ+30^\circ)=\cos45^\circ\cos30^\circ-\sin45^\circ\sin30^\circ`
        },
        {
          title: "Zëvendëso vlerat",
          expression: String.raw`=\frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2}-\frac{\sqrt{2}}{2}\cdot\frac{1}{2}`
        },
        {
          title: "Rezultati",
          expression: String.raw`=\frac{\sqrt{6}-\sqrt{2}}{4}`
        }
      ]
    }
  },
  {
    id: "double-angle",
    number: 2,
    title: "Formulat e këndit të dyfishtë",
    description: "Nxjerrja dhe përdorimi i formulave për këndin 2a.",
    duration: "15 min",
    topics: [
      {
        title: "Sinusi i këndit të dyfishtë",
        explanation: "Formula fitohet duke zbatuar formulën e adicionit për sin(a + a).",
        formulas: [
          String.raw`\sin 2\alpha=2\sin\alpha\cos\alpha`
        ]
      },
      {
        title: "Kosinusi i këndit të dyfishtë",
        explanation: "Kosinusi i këndit të dyfishtë mund të paraqitet në tri forma të barasvlershme.",
        formulas: [
          String.raw`\cos 2\alpha=\cos^2\alpha-\sin^2\alpha`,
          String.raw`\cos 2\alpha=2\cos^2\alpha-1`,
          String.raw`\cos 2\alpha=1-2\sin^2\alpha`
        ]
      },
      {
        title: "Tangjenti dhe kotangjenti i këndit të dyfishtë",
        explanation: "Këto formula shprehin tangjentin dhe kotangjentin e këndit 2a përmes funksioneve të këndit a.",
        formulas: [
          String.raw`\tan 2\alpha=\frac{2\tan\alpha}{1-\tan^2\alpha}`,
          String.raw`\cot 2\alpha=\frac{\cot^2\alpha-1}{2\cot\alpha}`
        ]
      }
    ]
  },
  {
    id: "half-angle",
    number: 3,
    title: "Formulat e këndit përgjysmë",
    description: "Përdorimi i formulave për këndin a/2.",
    duration: "15 min",
    topics: [
      {
        title: "Sinusi dhe kosinusi i këndit përgjysmë",
        explanation: "Këto formula nxirren nga formulat e kosinusit të këndit të dyfishtë. Shenja përcaktohet nga kuadranti.",
        formulas: [
          String.raw`\sin\frac{\alpha}{2}=\pm\sqrt{\frac{1-\cos\alpha}{2}}`,
          String.raw`\cos\frac{\alpha}{2}=\pm\sqrt{\frac{1+\cos\alpha}{2}}`
        ]
      },
      {
        title: "Tangjenti i këndit përgjysmë",
        explanation: "Tangjenti i këndit përgjysmë mund të paraqitet në disa forma.",
        formulas: [
          String.raw`\tan\frac{\alpha}{2}=\pm\sqrt{\frac{1-\cos\alpha}{1+\cos\alpha}}`,
          String.raw`\tan\frac{\alpha}{2}=\frac{\sin\alpha}{1+\cos\alpha}`,
          String.raw`\tan\frac{\alpha}{2}=\frac{1-\cos\alpha}{\sin\alpha}`
        ]
      }
    ]
  },
  {
    id: "t-formulas",
    number: 4,
    title: "Formulat T",
    description: "Shprehja e funksioneve trigonometrike përmes zëvendësimit t = tan(a/2).",
    duration: "15 min",
    topics: [
      {
        title: "Zëvendësimi T",
        explanation: "Vendosim t = tan(a/2). Me këtë zëvendësim, funksionet trigonometrike të këndit a shprehen si thyesa racionale.",
        formulas: [
          String.raw`t=\tan\frac{\alpha}{2}`,
          String.raw`\sin\alpha=\frac{2t}{1+t^2}`,
          String.raw`\cos\alpha=\frac{1-t^2}{1+t^2}`,
          String.raw`\tan\alpha=\frac{2t}{1-t^2}`,
          String.raw`\cot\alpha=\frac{1-t^2}{2t}`
        ]
      }
    ]
  },
  {
    id: "transformations",
    number: 5,
    title: "Transformimet trigonometrike",
    description: "Shndërrimi i prodhimeve në shuma dhe i shumave në prodhime.",
    duration: "20 min",
    topics: [
      {
        title: "Prodhimi në shumë",
        explanation: "Formulat e mëposhtme mundësojnë shndërrimin e prodhimeve të funksioneve trigonometrike në shuma ose diferenca.",
        formulas: [
          String.raw`\sin\alpha\cos\beta=\frac{1}{2}[\sin(\alpha+\beta)+\sin(\alpha-\beta)]`,
          String.raw`\cos\alpha\sin\beta=\frac{1}{2}[\sin(\alpha+\beta)-\sin(\alpha-\beta)]`,
          String.raw`\cos\alpha\cos\beta=\frac{1}{2}[\cos(\alpha+\beta)+\cos(\alpha-\beta)]`,
          String.raw`\sin\alpha\sin\beta=\frac{1}{2}[\cos(\alpha-\beta)-\cos(\alpha+\beta)]`
        ]
      },
      {
        title: "Shuma në prodhim",
        explanation: "Këto formula shndërrojnë shumën ose diferencën e dy funksioneve trigonometrike në prodhim.",
        formulas: [
          String.raw`\sin\alpha+\sin\beta=2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}`,
          String.raw`\sin\alpha-\sin\beta=2\cos\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2}`,
          String.raw`\cos\alpha+\cos\beta=2\cos\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}`,
          String.raw`\cos\alpha-\cos\beta=-2\sin\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2}`
        ]
      }
    ]
  },
  {
    id: "trigonometric-equations",
    number: 6,
    title: "Ekuacionet trigonometrike",
    description: "Zgjidhja e ekuacioneve bazë trigonometrike.",
    duration: "20 min",
    topics: [
      {
        title: "Ekuacionet bazë",
        explanation: "Ekuacionet bazë trigonometrike përfshijnë sinusin, kosinusin, tangjentin dhe kotangjentin.",
        formulas: [
          String.raw`\sin x=a`,
          String.raw`\cos x=b`,
          String.raw`\tan x=c`,
          String.raw`\cot x=d`
        ]
      },
      {
        title: "Perioda e funksioneve",
        explanation: "Sinusi dhe kosinusi kanë periodë 2p. Tangjenti dhe kotangjenti kanë periodë p.",
        formulas: [
          String.raw`\sin(x+2k\pi)=\sin x`,
          String.raw`\cos(x+2k\pi)=\cos x`,
          String.raw`\tan(x+k\pi)=\tan x`,
          String.raw`\cot(x+k\pi)=\cot x`
        ]
      }
    ]
  }
];

export const getLessonById = (lessonId) =>
  lessons.find((lesson) => lesson.id === lessonId);

export const getLessonByNumber = (number) =>
  lessons.find((lesson) => lesson.number === number);
