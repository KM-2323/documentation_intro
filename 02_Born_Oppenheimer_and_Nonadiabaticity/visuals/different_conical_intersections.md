---
title: QVC conical-intersection visualiser
---

# QVC conical-intersection visualiser

This visualiser shows the two adiabatic potential-energy surfaces obtained by
diagonalising a two-state quadratic vibronic coupling model. The notebook in
this folder can still be used as a scratch file, but this page is the
GitHub Pages version.

$$
\mathbf H(x,y)=
\begin{pmatrix}
k_1x+\gamma_{1xx}x^2+\gamma_{1yy}y^2+\gamma_{1xy}xy & \lambda y \\
\lambda y & k_2x+\gamma_{2xx}x^2+\gamma_{2yy}y^2+\gamma_{2xy}xy
\end{pmatrix}
$$

$$
E_{\pm}(x,y)=\frac{H_{11}+H_{22}}{2}
\pm \sqrt{\left(\frac{H_{11}-H_{22}}{2}\right)^2 + H_{12}^2}
$$

The two plotted sheets are $E_+$ and $E_-$. In this simplified model the
intersection remains at $(x,y)=(0,0)$; the sliders change the opening,
curvature, and twisting of the surfaces around it.

<style>
  .ci-page {
    --ci-ink: #25302b;
    --ci-muted: #64716b;
    --ci-soft: #f7faf7;
    --ci-panel: #fbfaf5;
    --ci-border: #d8e0da;
    --ci-teal: #147a72;
    --ci-warm: #b94d38;
    --ci-shadow: rgba(31, 43, 36, 0.12);
    margin-top: 1.5rem;
  }

  .ci-note {
    border-left: 4px solid var(--ci-teal);
    background: var(--ci-soft);
    color: var(--ci-ink);
    margin: 1.25rem 0;
    padding: 0.9rem 1rem;
  }

  .ci-tool {
    border: 1px solid var(--ci-border);
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 10px 28px var(--ci-shadow);
    margin: 1.5rem 0 1rem;
    overflow: hidden;
  }

  .ci-tool-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 19rem;
    min-height: 560px;
  }

  .ci-plot {
    min-height: 560px;
    width: 100%;
  }

  .ci-controls {
    background: var(--ci-panel);
    border-left: 1px solid var(--ci-border);
    color: var(--ci-ink);
    padding: 1rem;
  }

  .ci-controls h2 {
    font-size: 1rem;
    line-height: 1.25;
    margin: 0 0 0.4rem;
  }

  .ci-readout {
    color: var(--ci-muted);
    display: grid;
    gap: 0.15rem;
    font-size: 0.85rem;
    margin-bottom: 0.9rem;
  }

  .ci-readout strong {
    color: var(--ci-ink);
    font-weight: 700 !important;
  }

  .ci-control-group {
    border: 0;
    border-top: 1px solid var(--ci-border);
    margin: 0;
    padding: 0.85rem 0 0.2rem;
  }

  .ci-control-group legend {
    color: var(--ci-ink);
    font-size: 0.86rem;
    font-weight: 700;
    padding: 0 0.4rem 0 0;
  }

  .ci-control {
    align-items: center;
    display: grid;
    gap: 0.55rem;
    grid-template-columns: 7.2rem minmax(0, 1fr) 3.2rem;
    min-height: 2.45rem;
  }

  .ci-control label {
    color: var(--ci-ink);
    font-size: 0.88rem;
    line-height: 1.2;
  }

  .ci-symbol {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.02em;
  }

  .ci-control input[type="range"] {
    accent-color: var(--ci-teal);
    width: 100%;
  }

  .ci-control output {
    color: var(--ci-muted);
    font-variant-numeric: tabular-nums;
    text-align: right;
  }

  .ci-actions {
    border-top: 1px solid var(--ci-border);
    display: grid;
    gap: 0.55rem;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 0.85rem;
    padding-top: 0.9rem;
  }

  .ci-actions button {
    background: #ffffff;
    border: 1px solid var(--ci-border);
    border-radius: 6px;
    color: var(--ci-ink);
    cursor: pointer;
    font: inherit;
    min-height: 2.2rem;
  }

  .ci-actions button:hover,
  .ci-actions button:focus {
    border-color: var(--ci-teal);
    color: var(--ci-teal);
  }

  .ci-caption {
    color: var(--ci-muted);
    font-size: 0.92rem;
  }

  @media (max-width: 900px) {
    .ci-tool-grid {
      grid-template-columns: 1fr;
    }

    .ci-controls {
      border-left: 0;
      border-top: 1px solid var(--ci-border);
    }

    .ci-plot {
      min-height: 430px;
    }
  }

  @media (max-width: 560px) {
    .ci-control {
      grid-template-columns: minmax(0, 1fr) 3.3rem;
      gap: 0.25rem 0.55rem;
      padding: 0.25rem 0;
    }

    .ci-control label {
      grid-column: 1 / -1;
    }

    .ci-actions {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="ci-page">
  <div class="ci-tool" id="ci-qvc-tool">
    <div class="ci-tool-grid">
      <div id="ci-plot" class="ci-plot" aria-label="Interactive Plotly surface plot of a two-state conical intersection">
        Loading visualisation...
      </div>

      <aside class="ci-controls" aria-label="QVC model parameters">
        <h2>Parameters</h2>
        <div class="ci-readout">
          <span>Linear opening in \(x\): <strong id="ci-x-opening">2.0</strong></span>
          <span>Linear opening in \(y\): <strong id="ci-y-opening">2.0</strong></span>
        </div>

        <fieldset class="ci-control-group">
          <legend>Linear terms</legend>
          <div class="ci-control">
            <label for="ci-k1">\(k_1\), state 1 slope</label>
            <input id="ci-k1" data-param="k1" type="range" min="-3" max="3" step="0.1" value="1">
            <output data-output="k1">1.0</output>
          </div>
          <div class="ci-control">
            <label for="ci-k2">\(k_2\), state 2 slope</label>
            <input id="ci-k2" data-param="k2" type="range" min="-3" max="3" step="0.1" value="-1">
            <output data-output="k2">-1.0</output>
          </div>
          <div class="ci-control">
            <label for="ci-lam"><span class="ci-symbol">&lambda;</span>, coupling slope</label>
            <input id="ci-lam" data-param="lam" type="range" min="0" max="3" step="0.1" value="1">
            <output data-output="lam">1.0</output>
          </div>
        </fieldset>

        <fieldset class="ci-control-group">
          <legend>Harmonic curvature</legend>
          <div class="ci-control">
            <label for="ci-g1xx"><span class="ci-symbol">&gamma;</span><sub>1xx</sub></label>
            <input id="ci-g1xx" data-param="g1xx" type="range" min="0" max="1" step="0.05" value="0.2">
            <output data-output="g1xx">0.20</output>
          </div>
          <div class="ci-control">
            <label for="ci-g1yy"><span class="ci-symbol">&gamma;</span><sub>1yy</sub></label>
            <input id="ci-g1yy" data-param="g1yy" type="range" min="0" max="1" step="0.05" value="0.2">
            <output data-output="g1yy">0.20</output>
          </div>
          <div class="ci-control">
            <label for="ci-g2xx"><span class="ci-symbol">&gamma;</span><sub>2xx</sub></label>
            <input id="ci-g2xx" data-param="g2xx" type="range" min="0" max="1" step="0.05" value="0.2">
            <output data-output="g2xx">0.20</output>
          </div>
          <div class="ci-control">
            <label for="ci-g2yy"><span class="ci-symbol">&gamma;</span><sub>2yy</sub></label>
            <input id="ci-g2yy" data-param="g2yy" type="range" min="0" max="1" step="0.05" value="0.2">
            <output data-output="g2yy">0.20</output>
          </div>
        </fieldset>

        <fieldset class="ci-control-group">
          <legend>Bilinear twist</legend>
          <div class="ci-control">
            <label for="ci-g1xy"><span class="ci-symbol">&gamma;</span><sub>1xy</sub></label>
            <input id="ci-g1xy" data-param="g1xy" type="range" min="-1" max="1" step="0.05" value="0">
            <output data-output="g1xy">0.00</output>
          </div>
          <div class="ci-control">
            <label for="ci-g2xy"><span class="ci-symbol">&gamma;</span><sub>2xy</sub></label>
            <input id="ci-g2xy" data-param="g2xy" type="range" min="-1" max="1" step="0.05" value="0">
            <output data-output="g2xy">0.00</output>
          </div>
        </fieldset>

        <div class="ci-actions">
          <button type="button" data-preset="reset">Reset</button>
          <button type="button" data-preset="planar">Planar</button>
          <button type="button" data-preset="twisted">Twisted</button>
        </div>
      </aside>
    </div>
  </div>

  <p class="ci-caption">
    The warm sheet is \(E_+\), the green sheet is \(E_-\), and the black point
    marks the degeneracy at the origin.
  </p>
</div>

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script>
  (function () {
    const root = document.getElementById("ci-qvc-tool");
    const plot = document.getElementById("ci-plot");

    if (!root || !plot) {
      return;
    }

    if (!window.Plotly) {
      plot.innerHTML = "Plotly could not be loaded. Check the network connection or CDN access.";
      return;
    }

    const defaults = {
      k1: 1.0,
      k2: -1.0,
      lam: 1.0,
      g1xx: 0.2,
      g1yy: 0.2,
      g2xx: 0.2,
      g2yy: 0.2,
      g1xy: 0.0,
      g2xy: 0.0
    };

    const presets = {
      reset: defaults,
      planar: {
        k1: 1.2,
        k2: -1.2,
        lam: 1.2,
        g1xx: 0.15,
        g1yy: 0.15,
        g2xx: 0.15,
        g2yy: 0.15,
        g1xy: 0.0,
        g2xy: 0.0
      },
      twisted: {
        k1: 1.4,
        k2: -0.8,
        lam: 0.75,
        g1xx: 0.08,
        g1yy: 0.28,
        g2xx: 0.32,
        g2yy: 0.12,
        g1xy: 0.35,
        g2xy: -0.3
      }
    };

    const controls = Array.from(root.querySelectorAll("[data-param]"));
    const outputByName = {};
    Array.from(root.querySelectorAll("[data-output]")).forEach(function (output) {
      outputByName[output.dataset.output] = output;
    });

    const xOpening = document.getElementById("ci-x-opening");
    const yOpening = document.getElementById("ci-y-opening");
    const x = linspace(-5, 5, 61);
    const y = linspace(-5, 5, 61);
    let queuedFrame = null;

    function linspace(start, end, count) {
      const values = [];
      const step = (end - start) / (count - 1);
      for (let index = 0; index < count; index += 1) {
        values.push(start + step * index);
      }
      return values;
    }

    function formatValue(name, value) {
      return name.indexOf("g") === 0 ? value.toFixed(2) : value.toFixed(1);
    }

    function getValues() {
      const values = {};
      controls.forEach(function (control) {
        values[control.dataset.param] = Number(control.value);
      });
      return values;
    }

    function setValues(values) {
      controls.forEach(function (control) {
        const name = control.dataset.param;
        control.value = values[name];
      });
      updateLabels();
      scheduleDraw();
    }

    function updateLabels() {
      const values = getValues();
      controls.forEach(function (control) {
        const name = control.dataset.param;
        outputByName[name].textContent = formatValue(name, values[name]);
      });
      xOpening.textContent = Math.abs(values.k1 - values.k2).toFixed(1);
      yOpening.textContent = (2 * Math.abs(values.lam)).toFixed(1);
    }

    function computeSurfaces(values) {
      const upper = [];
      const lower = [];
      let zMin = Infinity;
      let zMax = -Infinity;

      for (let rowIndex = 0; rowIndex < y.length; rowIndex += 1) {
        const rowUpper = [];
        const rowLower = [];
        const yValue = y[rowIndex];

        for (let colIndex = 0; colIndex < x.length; colIndex += 1) {
          const xValue = x[colIndex];
          const h11 =
            values.k1 * xValue +
            values.g1xx * xValue * xValue +
            values.g1yy * yValue * yValue +
            values.g1xy * xValue * yValue;
          const h22 =
            values.k2 * xValue +
            values.g2xx * xValue * xValue +
            values.g2yy * yValue * yValue +
            values.g2xy * xValue * yValue;
          const h12 = values.lam * yValue;
          const mean = 0.5 * (h11 + h22);
          const diff = 0.5 * (h11 - h22);
          const gap = Math.sqrt(diff * diff + h12 * h12);
          const zUpper = mean + gap;
          const zLower = mean - gap;

          rowUpper.push(zUpper);
          rowLower.push(zLower);
          zMin = Math.min(zMin, zUpper, zLower);
          zMax = Math.max(zMax, zUpper, zLower);
        }

        upper.push(rowUpper);
        lower.push(rowLower);
      }

      return { upper: upper, lower: lower, zMin: zMin, zMax: zMax };
    }

    function makeTrace(name, z, colorscale, opacity) {
      return {
        type: "surface",
        name: name,
        x: x,
        y: y,
        z: z,
        colorscale: colorscale,
        contours: {
          z: {
            show: true,
            usecolormap: true,
            highlightcolor: "#ffffff",
            project: { z: true }
          }
        },
        hovertemplate: name + "<br>x=%{x:.2f}<br>y=%{y:.2f}<br>E=%{z:.2f}<extra></extra>",
        lighting: {
          ambient: 0.55,
          diffuse: 0.8,
          roughness: 0.75,
          specular: 0.15
        },
        opacity: opacity,
        showscale: false
      };
    }

    function draw() {
      const values = getValues();
      const data = computeSurfaces(values);
      const padding = Math.max(1, (data.zMax - data.zMin) * 0.08);
      const zRange = [data.zMin - padding, data.zMax + padding];

      const traces = [
        makeTrace(
          "E+",
          data.upper,
          [
            [0, "#fff2d7"],
            [0.45, "#f0a35b"],
            [1, "#b94d38"]
          ],
          0.94
        ),
        makeTrace(
          "E-",
          data.lower,
          [
            [0, "#24534e"],
            [0.5, "#1b998b"],
            [1, "#dbf2ea"]
          ],
          0.95
        ),
        {
          type: "scatter3d",
          mode: "markers",
          name: "intersection",
          x: [0],
          y: [0],
          z: [0],
          marker: {
            color: "#101512",
            size: 4,
            symbol: "circle"
          },
          hovertemplate: "intersection<br>x=0<br>y=0<br>E=0<extra></extra>"
        }
      ];

      const layout = {
        autosize: true,
        font: {
          color: "#25302b",
          family: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        },
        legend: {
          bgcolor: "rgba(255, 255, 255, 0.75)",
          orientation: "h",
          x: 0.02,
          y: 1.02
        },
        margin: { l: 0, r: 0, t: 16, b: 0 },
        paper_bgcolor: "#ffffff",
        scene: {
          aspectmode: "manual",
          aspectratio: { x: 1, y: 1, z: 0.72 },
          camera: {
            eye: { x: 1.45, y: -1.55, z: 1.05 }
          },
          xaxis: axisStyle("tuning coordinate x", [-5, 5]),
          yaxis: axisStyle("coupling coordinate y", [-5, 5]),
          zaxis: axisStyle("energy E", zRange)
        },
        showlegend: true
      };

      Plotly.react(plot, traces, layout, {
        displayModeBar: false,
        responsive: true,
        scrollZoom: false
      });
    }

    function axisStyle(title, range) {
      return {
        backgroundcolor: "#fbfaf5",
        gridcolor: "#d8e0da",
        linecolor: "#9ba9a1",
        range: range,
        showbackground: true,
        tickfont: { size: 11 },
        title: { text: title, font: { size: 12 } },
        zerolinecolor: "#8ea098"
      };
    }

    function scheduleDraw() {
      if (queuedFrame) {
        window.cancelAnimationFrame(queuedFrame);
      }
      queuedFrame = window.requestAnimationFrame(function () {
        queuedFrame = null;
        draw();
      });
    }

    controls.forEach(function (control) {
      control.addEventListener("input", function () {
        updateLabels();
        scheduleDraw();
      });
    });

    Array.from(root.querySelectorAll("[data-preset]")).forEach(function (button) {
      button.addEventListener("click", function () {
        setValues(presets[button.dataset.preset]);
      });
    });

    window.addEventListener("resize", function () {
      Plotly.Plots.resize(plot);
    });

    updateLabels();
    draw();
  })();
</script>
