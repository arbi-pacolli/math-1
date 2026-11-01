export const lessons = [
  {
    id: "addition-formulas",
    number: 1,
    title: "Formulat e adicionit",
    description: "Meso si te llogaritesh funksionet trigonometrike te shumes dhe ndryshimit te kendeve.",
    duration: "20 min",
    topics: [
      {
        title: "Sinusi i shumes dhe ndryshimit",
        explanation: "Per te gjetur sinusin e shumes ose ndryshimit te dy kendeve, perdor formulat e adicionit.",
        formulas: [
          String.raw`\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta`,
          String.raw`\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta`
        ]
      },
      {
        title: "Kosinusi i shumes dhe ndryshimit",
        explanation: "Te kosinusi, shenja ndermjet prodhimeve eshte e kundert me shenjen brenda kllapave.",
        formulas: [
          String.raw`\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta`,
          String.raw`\cos(\alpha-\beta)=\cos\alpha\cos\beta+\sin\alpha\sin\beta`
        ]
      },
      {
        title: "Tangjenti dhe kotangjenti",
        explanation: "Tangjenti dhe kotangjenti i shumes ose ndryshimit shprehen permes funksioneve te kendeve perkatese.",
        formulas: [
          String.raw`\tan(\alpha+\beta)=\frac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta}`,
          String.raw`\tan(\alpha-\beta)=\frac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta}`,
          String.raw`\cot(\alpha+\beta)=\frac{\cot\alpha\cot\beta-1}{\cot\alpha+\cot\beta}`,
          String.raw`\cot(\alpha-\beta)=\frac{\cot\alpha\cot\beta+1}{\cot\beta-\cot\alpha}`
        ]
      }
    ],
    example: {
      title: "Shembull: Llogaritja e cos 75e",
      steps: [
        {
          title: "Shkruaj kendin si shume",
          expression: String.raw`\cos 75^\circ=\cos(45^\circ+30^\circ)`
        },
        {
          title: "Perdor formulen e kosinusit",
          expression: String.raw`\cos(45^\circ+30^\circ)=\cos45^\circ\cos30^\circ-\sin45^\circ\sin30^\circ`
        },
        {
          title: "Zevendeso vlerat",
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
    title: "Formulat e kendit te dyfishte",
    description: "Nxjerrja dhe perdorimi i formulave per kendin 2a.",
    duration: "15 min",
    topics: [
      {
        title: "Sinusi i kendit te dyfishte",
        explanation: "Formula fitohet duke zbatuar formulen e adicionit per sin(a + a).",
        formulas: [
          String.raw`\sin 2\alpha=2\sin\alpha\cos\alpha`
        ]
      },
      {
        title: "Kosinusi i kendit te dyfishte",
        explanation: "Kosinusi i kendit te dyfishte mund te paraqitet ne tri forma te barasvlershme.",
        formulas: [
          String.raw`\cos 2\alpha=\cos^2\alpha-\sin^2\alpha`,
          String.raw`\cos 2\alpha=2\cos^2\alpha-1`,
          String.raw`\cos 2\alpha=1-2\sin^2\alpha`
        ]
      },
      {
        title: "Tangjenti dhe kotangjenti i kendit te dyfishte",
        explanation: "Keto formula shprehin tangjentin dhe kotangjentin e kendit 2a permes funksioneve te kendit a.",
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
    title: "Formulat e kendit pergjysme",
    description: "Perdorimi i formulave per kendin a/2.",
    duration: "15 min",
    topics: [
      {
        title: "Sinusi dhe kosinusi i kendit pergjysme",
        explanation: "Keto formula nxirren nga formulat e kosinusit te kendit te dyfishte. Shenja percaktohet nga kuadranti.",
        formulas: [
          String.raw`\sin\frac{\alpha}{2}=\pm\sqrt{\frac{1-\cos\alpha}{2}}`,
          String.raw`\cos\frac{\alpha}{2}=\pm\sqrt{\frac{1+\cos\alpha}{2}}`
        ]
      },
      {
        title: "Tangjenti i kendit pergjysme",
        explanation: "Tangjenti i kendit pergjysme mund te paraqitet ne disa forma.",
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
    description: "Shprehja e funksioneve trigonometrike permes zevendesimit t = tan(a/2).",
    duration: "15 min",
    topics: [
      {
        title: "Zevendesimi T",
        explanation: "Vendosim t = tan(a/2). Me kete zevendesim, funksionet trigonometrike te kendit a shprehen si thyesa racionale.",
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
    description: "Shnderrimi i prodhimeve ne shuma dhe i shumave ne prodhime.",
    duration: "20 min",
    topics: [
      {
        title: "Prodhimi ne shume",
        explanation: "Formulat e meposhtme mundesojne shnderrimin e prodhimeve te funksioneve trigonometrike ne shuma ose diferenca.",
        formulas: [
          String.raw`\sin\alpha\cos\beta=\frac{1}{2}[\sin(\alpha+\beta)+\sin(\alpha-\beta)]`,
          String.raw`\cos\alpha\sin\beta=\frac{1}{2}[\sin(\alpha+\beta)-\sin(\alpha-\beta)]`,
          String.raw`\cos\alpha\cos\beta=\frac{1}{2}[\cos(\alpha+\beta)+\cos(\alpha-\beta)]`,
          String.raw`\sin\alpha\sin\beta=\frac{1}{2}[\cos(\alpha-\beta)-\cos(\alpha+\beta)]`
        ]
      },
      {
        title: "Shuma ne prodhim",
        explanation: "Keto formula shnderrojne shumen ose diferencen e dy funksioneve trigonometrike ne prodhim.",
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
    description: "Zgjidhja e ekuacioneve baze trigonometrike.",
    duration: "20 min",
    topics: [
      {
        title: "Ekuacionet baze",
        explanation: "Ekuacionet baze trigonometrike perfshijne sinusin, kosinusin, tangjentin dhe kotangjentin.",
        formulas: [
          String.raw`\sin x=a`,
          String.raw`\cos x=b`,
          String.raw`\tan x=c`,
          String.raw`\cot x=d`
        ]
      },
      {
        title: "Perioda e funksioneve",
        explanation: "Sinusi dhe kosinusi kane periode 2p. Tangjenti dhe kotangjenti kane periode p.",
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
