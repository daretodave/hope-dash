import {LitElement, html, css} from 'lit-element';
import {hopeDashLogo} from './hope-dash-logo.js';

export class HopeDash extends LitElement {
  static get properties() {
    return {
      title: {type: String},
      page: {type: String},
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }

      main {
        flex-grow: 1;
      }

      .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  render() {
    return html`
      <main>
        <div class="logo">${hopeDashLogo}</div>
        <h1>hope <small>dash</small></h1>

        <p>hi there! <code>hope</code> is a dashboard for <small>X</small></p>
        <a
          class="app-link"
          href="#dash"
          target="_blank"
          rel="noopener noreferrer">

         enter
        </a>
      </main>

      <p class="app-footer">data mining and source code <a href="#github">here</a></p>
    `;
  }
}
