window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    tags: 'ams',
    macros: {
      mat: ['\\mathbf{#1}', 1],
      vect: ['\\bm{#1}', 1],
      ket: ['|#1\\rangle', 1],
      bra: ['\\langle#1|', 1],
      braket: ['\\langle#1|#2\\rangle', 2],
      mel: ['\\langle#1|#2|#3\\rangle', 3],
      Fmat: ['\\mat{F}'],
      F : ['\\underline{\\Fmat}'],
      G: ['\\mat{G}'],
      pdv: ["\\frac{\\partial #1}{\\partial #2}", 2], // \pdv{f}{x} = \partial f/\partial x
      pddv: ["\\frac{\\partial^{2} #1}{\\partial #2^{2}}", 2],// \pddv{f}{x} = \partial^2 f/\partial x^2
      pdvn: ["\\frac{\\partial^{#1} #2}{\\partial #3^{#1}}", 3],// \pdvn[3]{f}{x} = \partial^3 f/\partial x^3
      pder: ["\\frac{\\partial}{\\partial #1}", 1],// \pder{x} = \partial/\partial x as a standalone operator
      pdern: ["\\frac{\\partial}{\\partial #2^{#1}}", 2],// \pder{x} = \partial/\partial x as a standalone operator
      V:["\\mat V"]


    }
  }
};
