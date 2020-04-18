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
    // language=CSS
    return css`
      :host {
        overflow: hidden
      }

      iframe {
        position: absolute;
        width: 100%;
        bottom: 0;
        right: 0;
        height: 100%;
        left: 0;
      }

      @media (max-width: 968px) {
        iframe {
          zoom: 5.5;
          width: 500px;
        }
      }
      @media (max-width: 868px) {
        iframe {
          zoom: 5.5;
          width: 400px;
        }
      }

      @media (max-width: 638px) {
        iframe {
          zoom: 2.5;
          width: 600px;
        }
      }

      @media (max-width: 500px) {
        iframe {
          zoom: 2.5;
          width: 500px;
        }
      }

      .app-footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        right: 0;
        left: 0;
        height: 50px;
        background-color: rgb(34, 34, 34);
        text-align: center;
        color: blanchedalmond;
        line-height: 50px;
      }

      a {
        color: #d9ae63;
        text-decoration: none;
      }
    `;
  }

  render() {
    return html`
      <iframe class="embedly-embed"  frameborder="0" style="border:0"  scrolling="no"  allowfullscreen
        src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fdatastudio.google.com%2Fembed%2Freporting%2F1_-jwGvUIrTH3O6h3LCui9rAopW-7BPAJ%2Fpage%2F1FtMB%3Ffeature%3Doembed&dntp=1&display_name=Google%2BData%2BStudio&url=https%3A%2F%2Fdatastudio.google.com%2Fembed%2Freporting%2F1_-jwGvUIrTH3O6h3LCui9rAopW-7BPAJ%2Fpage%2F1FtMB&image=https%3A%2F%2Fdatastudio.google.com%2Fembed%2Freporting%2F1_-jwGvUIrTH3O6h3LCui9rAopW-7BPAJ%2Fpage%2F1FtMB%2Fthumbnail%3Fsz%3Dw1366-h768-p-nu%26feature%3Doembed&key=4253048189d3442b8a90f022e0d4d49f&type=text%2Fhtml&schema=google">
      </iframe>

      <div class="app-footer">hope<small>dash</small> can be found on <a href="#github">github</a></div>
    `;
  }
}
