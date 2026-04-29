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
      F: ['\\mat{F}'],
      G: ['\\mat{G}']
    }
  }
};
