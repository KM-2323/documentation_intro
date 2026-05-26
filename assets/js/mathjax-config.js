/**
 * Site-wide MathJax configuration.
 *
 * _layouts/custom.html loads this file before loading the MathJax library.
 * MathJax reads window.MathJax at startup, then uses these delimiters and macros
 * when it renders equations in Markdown pages.
 */
window.MathJax = {
  tex: {
    // Inline math delimiters used inside prose, for example $E = mc^2$.
    inlineMath: [["$", "$"], ["\\(", "\\)"]],

    // Display math delimiters used for stand-alone equations.
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],

    // Enable AMS-style equation numbering with \tag{} support.
    tags: "ams",

    // Shared LaTeX-style shortcuts. Each key becomes a command such as \mat{}.
    // Entries with a trailing number take that many arguments.
    macros: {
      // General vector, matrix, and bra-ket notation.
      mat: ["\\mathbf{#1}", 1],
      vect: ["\\boldsymbol{#1}", 1],
      ket: ["|#1\\rangle", 1],
      bra: ["\\langle#1|", 1],
      braket: ["\\langle#1|#2\\rangle", 2],
      mel: ["\\langle#1|#2|#3\\rangle", 3],
      lrp: ["\\left(#1\\right)", 1],


      // Common coupling matrices and underlined matrix objects.
      Fmat: ["\\mat{F}"],
      F: ["\\underline{\\Fmat}"],
      Gmat: ["\\mat{G}"],
      G: ["\\underline{\\Gmat}"],

      // Partial-derivative helpers used throughout derivations.
      pdv: ["\\frac{\\partial #1}{\\partial #2}", 2], // \pdv{f}{x} = \partial f/\partial x
      pddv: ["\\frac{\\partial^{2} #1}{\\partial #2^{2}}", 2], // \pddv{f}{x} = \partial^2 f/\partial x^2
      pdvn: ["\\frac{\\partial^{#1} #2}{\\partial #3^{#1}}", 3], // \pdvn{3}{f}{x} = \partial^3 f/\partial x^3
      pddm: ["\\frac{\\partial^{2} #1}{\\partial #2 \\partial #3}", 3], // \pddm{f}{x}{y} = mixed second derivative
      pder: ["\\frac{\\partial}{\\partial #1}", 1], // \pder{x} = \partial/\partial x as an operator
      pdern: ["\\frac{\\partial}{\\partial #2^{#1}}", 2], // \pdern{2}{x} = \partial/\partial x^2 as an operator

      // Frequently used matrices and wavefunction vectors.
      V: ["\\mat V"],
      U: ["\\mat U"],
      Cmat: ["\\mat C"],
      Smat: ["\\mat S"],
      psivec: ["\\boldsymbol{\\psi}"],
      chivec: ["\\boldsymbol{\\chi}"],
      varphivec: ["\\boldsymbol{\\varphi}"],
      Cinv: ["\\Cmat^{\\dagger}"],
      W: ["\\mat W"],

      // Diabatic/adiabatic matrix notation.
      Dmat: ["\\mat D"],
      D: ["\\underline{\\Dmat}"],
      Gdiab: ["\\G^{\\text{D}}"],
      Gadiab: ["\\G^{\\text{A}}"],
      Hmat: ["\\mat H"],
      H: ["\\underline{\\Hmat}"],
      Hdiab: ["\\H^{\\text{D}}"],
      Hadiab: ["\\H^{\\text{A}}"],

      // dd-vMCG related short cuts
      gj: ["g_j"], // gwp j
      gk: ["g_k"],
      gl: ["g_l"],
      gjdot: ["\\dot{\\gj}"],
      gkdot: ["\\dot{\\gk}"],
      gldot: ["\\dot{\\gl}"],


      // Miscellaneous symbols and short aliases.
      odag: ["{#1}^{\\dagger}", 1],
      rv: ["\\mat r"],
      Rv: ["\\mat R"],
      I: ["\\mat 1"],
      qv: ["\\mat q"],
      Qv: ["\\mat Q"],
      BigO: ["\\mathcal{O}"],
      real:["\\operatorname{Re}"]
    }
  }
};
