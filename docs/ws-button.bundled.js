/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new WeakMap;let r=class{constructor(t,s,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&i.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...s)=>{const i=1===t.length?t[0]:s.reduce((s,e,i)=>s+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[i+1],t[0]);return new r(i,t,e)},n=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const e of t.cssRules)s+=e.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,e))(s)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,f=p.trustedTypes,v=f?f.emptyScript:"",m=p.reactiveElementPolyfillSupport,b=(t,s)=>t,w={toAttribute(t,s){switch(s){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let e=t;switch(s){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},g=(t,s)=>!a(t,s),x={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:g};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=x){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const e=Symbol(),i=this.getPropertyDescriptor(t,e,s);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,s,e){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get:i,set(s){const o=i?.call(this);r?.call(this,s),this.requestUpdate(t,o,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,s=[...d(t),...h(t)];for(const e of s)this.createProperty(e,t[e])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,e]of s)this.elementProperties.set(t,e)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const e=this._$Eu(t,s);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)s.unshift(n(t))}else void 0!==t&&s.push(n(t));return s}static _$Eu(t,s){const e=s.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const e of s.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(s)e.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,e){this._$AK(t,e)}_$ET(t,s){const e=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,e);if(void 0!==i&&!0===e.reflect){const r=(void 0!==e.converter?.toAttribute?e.converter:w).toAttribute(s,e.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,s){const e=this.constructor,i=e._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=e.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=i;const o=r.fromAttribute(s,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,s,e,i=!1,r){if(void 0!==t){const o=this.constructor;if(!1===i&&(r=this[t]),e??=o.getPropertyOptions(t),!((e.hasChanged??g)(r,s)||e.useDefault&&e.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,e))))return;this.C(t,s,e)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,s,{useDefault:e,reflect:i,wrapped:r},o){e&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??s??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||e||(s=void 0),this._$AL.set(t,s)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,e]of t){const{wrapped:t}=e,i=this[s];!0!==t||this._$AL.has(s)||void 0===i||this.C(s,void 0,e,i)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[b("elementProperties")]=new Map,y[b("finalized")]=new Map,m?.({ReactiveElement:y}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,$=t=>t,z=k.trustedTypes,S=z?z.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,_="?"+E,A=`<${_}>`,M=document,O=()=>M.createComment(""),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,I="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,N=/>/g,R=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,L=/"/g,D=/^(?:script|style|textarea|title)$/i,W=(t=>(s,...e)=>({_$litType$:t,strings:s,values:e}))(1),H=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),K=new WeakMap,Y=M.createTreeWalker(M,129);function Z(t,s){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(s):s}const q=(t,s)=>{const e=t.length-1,i=[];let r,o=2===s?"<svg>":3===s?"<math>":"",n=U;for(let s=0;s<e;s++){const e=t[s];let a,l,c=-1,d=0;for(;d<e.length&&(n.lastIndex=d,l=n.exec(e),null!==l);)d=n.lastIndex,n===U?"!--"===l[1]?n=T:void 0!==l[1]?n=N:void 0!==l[2]?(D.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=R):void 0!==l[3]&&(n=R):n===R?">"===l[0]?(n=r??U,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?R:'"'===l[3]?L:B):n===L||n===B?n=R:n===T||n===N?n=U:(n=R,r=void 0);const h=n===R&&t[s+1].startsWith("/>")?" ":"";o+=n===U?e+A:c>=0?(i.push(a),e.slice(0,c)+C+e.slice(c)+E+h):e+E+(-2===c?s:h)}return[Z(t,o+(t[e]||"<?>")+(2===s?"</svg>":3===s?"</math>":"")),i]};class V{constructor({strings:t,_$litType$:s},e){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,c]=q(t,s);if(this.el=V.createElement(l,e),Y.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Y.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const s=c[o++],e=i.getAttribute(t).split(E),n=/([.?@])?(.*)/.exec(s);a.push({type:1,index:r,name:n[2],strings:e,ctor:"."===n[1]?tt:"?"===n[1]?st:"@"===n[1]?et:X}),i.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(D.test(i.tagName)){const t=i.textContent.split(E),s=t.length-1;if(s>0){i.textContent=z?z.emptyScript:"";for(let e=0;e<s;e++)i.append(t[e],O()),Y.nextNode(),a.push({type:2,index:++r});i.append(t[s],O())}}}else if(8===i.nodeType)if(i.data===_)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(E,t+1));)a.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,s){const e=M.createElement("template");return e.innerHTML=t,e}}function F(t,s,e=t,i){if(s===H)return s;let r=void 0!==i?e._$Co?.[i]:e._$Cl;const o=j(s)?void 0:s._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,e,i)),void 0!==i?(e._$Co??=[])[i]=r:e._$Cl=r),void 0!==r&&(s=F(t,r._$AS(t,s.values),r,i)),s}class G{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:e}=this._$AD,i=(t?.creationScope??M).importNode(s,!0);Y.currentNode=i;let r=Y.nextNode(),o=0,n=0,a=e[0];for(;void 0!==a;){if(o===a.index){let s;2===a.type?s=new Q(r,r.nextSibling,this,t):1===a.type?s=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(s=new it(r,this,t)),this._$AV.push(s),a=e[++n]}o!==a?.index&&(r=Y.nextNode(),o++)}return Y.currentNode=M,i}p(t){let s=0;for(const e of this._$AV)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,s),s+=e.strings.length-2):e._$AI(t[s])),s++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,e,i){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=e,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return void 0!==s&&11===t?.nodeType&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=F(this,t,s),j(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==H&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:e}=t,i="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(Z(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===i)this._$AH.p(s);else{const t=new G(i,this),e=t.u(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let s=K.get(t.strings);return void 0===s&&K.set(t.strings,s=new V(t)),s}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let e,i=0;for(const r of t)i===s.length?s.push(e=new Q(this.O(O()),this.O(O()),this,this.options)):e=s[i],e._$AI(r),i++;i<s.length&&(this._$AR(e&&e._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){const s=$(t).nextSibling;$(t).remove(),t=s}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,e,i,r){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=r,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=J}_$AI(t,s=this,e,i){const r=this.strings;let o=!1;if(void 0===r)t=F(this,t,s,0),o=!j(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=F(this,i[e+n],s,n),a===H&&(a=this._$AH[n]),o||=!j(a)||a!==this._$AH[n],a===J?t=J:t!==J&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class st extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class et extends X{constructor(t,s,e,i,r){super(t,s,e,i,r),this.type=5}_$AI(t,s=this){if((t=F(this,t,s,0)??J)===H)return;const e=this._$AH,i=t===J&&e!==J||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,r=t!==J&&(e===J||i);i&&this.element.removeEventListener(this.name,this,e),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,s,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const rt=k.litHtmlPolyfillSupport;rt?.(V,Q),(k.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class nt extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,s,e)=>{const i=e?.renderBefore??s;let r=i._$litPart$;if(void 0===r){const t=e?.renderBefore??null;i._$litPart$=r=new Q(s.insertBefore(O(),t),t,void 0,e??{})}return r._$AI(t),r})(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}}nt._$litElement$=!0,nt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:nt});const at=ot.litElementPolyfillSupport;at?.({LitElement:nt}),(ot.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=t=>(s,e)=>{void 0!==e?e.addInitializer(()=>{customElements.define(t,s)}):customElements.define(t,s)},ct={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:g},dt=(t=ct,s,e)=>{const{kind:i,metadata:r}=e;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(e.name,t),"accessor"===i){const{name:i}=e;return{set(e){const r=s.get.call(this);s.set.call(this,e),this.requestUpdate(i,r,t,!0,e)},init(s){return void 0!==s&&this.C(i,void 0,t,s),s}}}if("setter"===i){const{name:i}=e;return function(e){const r=this[i];s.call(this,e),this.requestUpdate(i,r,t,!0,e)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return(s,e)=>"object"==typeof e?dt(t,s,e):((t,s,e)=>{const i=s.hasOwnProperty(e);return s.constructor.createProperty(e,t),i?Object.getOwnPropertyDescriptor(s,e):void 0})(t,s,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut=t=>t??J,pt=o`
  :host {
    display: inline-flex;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none;
  }

  .button {
    align-items: center;
    border: 1px solid transparent;
    border-radius: var(--ws-button-radius, var(--ws-shape-full, 999px));
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font: var(--ws-button-font, var(--ws-typography-label-large, 600 14px / 20px system-ui, sans-serif));
    gap: var(--ws-spacing-sm, 8px);
    justify-content: center;
    min-inline-size: var(--ws-button-min-width, 64px);
    outline: none;
    position: relative;
    text-decoration: none;
    transform: translateY(0) scale(1);
    transition:
      background-color var(--ws-motion-duration-medium, 180ms) var(--ws-motion-easing-standard, ease),
      border-color var(--ws-motion-duration-medium, 180ms) var(--ws-motion-easing-standard, ease),
      box-shadow var(--ws-motion-duration-medium, 180ms) var(--ws-motion-easing-standard, ease),
      color var(--ws-motion-duration-medium, 180ms) var(--ws-motion-easing-standard, ease),
      opacity var(--ws-motion-duration-medium, 180ms) var(--ws-motion-easing-standard, ease),
      transform var(--ws-motion-duration-fast, 120ms) var(--ws-motion-easing-emphasized, ease);
    user-select: none;
    width: 100%;
  }

  .button:focus-visible {
    box-shadow:
      0 0 0 2px var(--ws-color-background, #f8fafc),
      0 0 0 5px color-mix(in srgb, var(--ws-button-focus-color, var(--ws-color-primary, #6c5cff)) 45%, transparent);
  }

  .button:not(:disabled):active {
    transform: translateY(1px) scale(0.98);
  }

  :host([variant='primary']) .button,
  :host(:not([variant])) .button {
    --ws-button-focus-color: var(--ws-color-primary, #6c5cff);
    background: var(--ws-color-primary, #6c5cff);
    box-shadow: var(--ws-elevation-sm, 0 1px 2px rgb(15 23 42 / 8%));
    color: var(--ws-color-on-primary, #f8fafc);
  }

  :host([variant='primary']) .button:not(:disabled):hover,
  :host(:not([variant])) .button:not(:disabled):hover {
    background: var(--ws-purple-dark, #4f46e5);
    box-shadow: var(--ws-elevation-md, 0 8px 24px rgb(15 23 42 / 12%));
  }

  :host([variant='secondary']) .button {
    --ws-button-focus-color: var(--ws-color-secondary, #3b82f6);
    background: var(--ws-color-secondary-container, #f1f5f9);
    border-color: var(--ws-color-outline-variant, #e2e8f0);
    color: var(--ws-color-on-secondary-container, #0f172a);
  }

  :host([variant='secondary']) .button:not(:disabled):hover {
    background: color-mix(in srgb, var(--ws-color-secondary, #3b82f6) 14%, var(--ws-color-secondary-container, #f1f5f9));
    border-color: color-mix(in srgb, var(--ws-color-secondary, #3b82f6) 26%, var(--ws-color-outline-variant, #e2e8f0));
  }

  :host([variant='outlined']) .button {
    --ws-button-focus-color: var(--ws-color-primary, #6c5cff);
    background: transparent;
    border-color: var(--ws-color-outline, #e2e8f0);
    color: var(--ws-color-primary, #6c5cff);
  }

  :host([variant='outlined']) .button:not(:disabled):hover {
    background: var(--ws-color-primary-container, #f5f3ff);
    border-color: var(--ws-color-primary, #6c5cff);
  }

  :host([variant='ghost']) .button {
    --ws-button-focus-color: var(--ws-color-primary, #6c5cff);
    background: transparent;
    color: var(--ws-color-primary, #6c5cff);
  }

  :host([variant='ghost']) .button:not(:disabled):hover {
    background: var(--ws-color-primary-container, #f5f3ff);
  }

  :host([size='small']) .button {
    block-size: 32px;
    font: var(--ws-typography-label-medium, 600 12px / 16px system-ui, sans-serif);
    gap: var(--ws-spacing-xs, 4px);
    padding: 0 var(--ws-spacing-md, 12px);
  }

  :host([size='medium']) .button,
  :host(:not([size])) .button {
    block-size: 40px;
    padding: 0 var(--ws-spacing-lg, 16px);
  }

  :host([size='large']) .button {
    block-size: 48px;
    font: var(--ws-typography-label-large, 600 14px / 20px system-ui, sans-serif);
    gap: var(--ws-spacing-md, 12px);
    padding: 0 var(--ws-spacing-xl, 24px);
  }

  .button:disabled {
    cursor: not-allowed;
    opacity: 0.48;
  }

  .icon,
  .spinner {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
  }

  .icon ::slotted(*) {
    display: inline-flex;
    font-size: 1.25em;
    inline-size: 1.25em;
    block-size: 1.25em;
  }

  :host([loading]) .icon {
    display: none;
  }

  .spinner {
    block-size: 1em;
    border: 2px solid currentcolor;
    border-block-start-color: transparent;
    border-radius: var(--ws-shape-full, 999px);
    box-sizing: border-box;
    inline-size: 1em;
    animation: ws-button-spin 800ms linear infinite;
  }

  @keyframes ws-button-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;var ft=function(t,s,e,i){for(var r,o=arguments.length,n=o<3?s:null===i?i=Object.getOwnPropertyDescriptor(s,e):i,a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(s,e,n):r(s,e))||n);return o>3&&n&&Object.defineProperty(s,e,n),n};let vt=class extends nt{constructor(){super(...arguments),this.variant="primary",this.size="medium",this.disabled=!1,this.loading=!1}render(){const t=this.disabled||this.loading;return W`
      <button
        class="button"
        part="button"
        type="button"
        ?disabled=${t}
        aria-busy=${ut(this.loading?"true":void 0)}
        aria-label=${ut(this.accessibleLabel)}
      >
        ${this.loading?W`<span class="spinner" aria-hidden="true"></span>`:W`<span class="icon"><slot name="icon"></slot></span>`}
        <span class="label"><slot></slot></span>
      </button>
    `}};vt.styles=pt,ft([ht({reflect:!0})],vt.prototype,"variant",void 0),ft([ht({reflect:!0})],vt.prototype,"size",void 0),ft([ht({type:Boolean,reflect:!0})],vt.prototype,"disabled",void 0),ft([ht({type:Boolean,reflect:!0})],vt.prototype,"loading",void 0),ft([ht({attribute:"aria-label"})],vt.prototype,"accessibleLabel",void 0),vt=ft([lt("ws-button")],vt);const mt=o`
  :host {
    display: block;
    inline-size: var(--ws-drawer-width, 280px);
    min-inline-size: 0;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none;
  }

  .drawer {
    background: var(
      --ws-drawer-container-color,
      var(--ws-color-surface, #ffffff)
    );
    block-size: var(--ws-drawer-height, 100%);
    border: 1px solid
      color-mix(in srgb, var(--ws-color-outline, #e2e8f0) 72%, transparent);
    border-radius: var(--ws-drawer-radius, var(--ws-shape-medium, 8px));
    box-shadow: var(--ws-drawer-elevation, var(--ws-elevation-none, none));
    box-sizing: border-box;
    color: var(--ws-color-on-surface, #0f172a);
    display: flex;
    flex-direction: column;
    gap: var(--ws-spacing-lg, 16px);
    min-block-size: 0;
    overflow: hidden;
    padding: var(--ws-drawer-padding, var(--ws-spacing-xl, 24px));
  }

  .content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--ws-drawer-item-gap, var(--ws-spacing-xs, 4px));
    min-block-size: 0;
    overflow: auto;
  }

  .header,
  .footer {
    flex: 0 0 auto;
  }

  .header slot,
  .footer slot {
    display: block;
  }
`,bt=o`
  :host {
    --ws-drawer-item-depth: 0;
    display: block;
    color: var(--ws-color-on-surface, #0f172a);
  }

  :host([hidden]) {
    display: none;
  }

  :host([selected]) {
    color: var(--ws-color-on-primary, #f8fafc);
  }

  .item {
    align-items: center;
    border-radius: var(--ws-drawer-item-radius, var(--ws-shape-medium, 8px));
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    gap: var(--ws-spacing-md, 12px);
    min-block-size: var(--ws-drawer-item-min-height, 44px);
    outline: none;
    padding-block: var(--ws-spacing-md, 12px);
    padding-inline: calc(
        var(--ws-spacing-md, 12px) + (var(--ws-drawer-item-depth) * 18px)
      )
      var(--ws-spacing-sm, 8px);
    position: relative;
    transition: background-color var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      box-shadow var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      color var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      opacity var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      transform var(--ws-motion-duration-fast, 120ms)
        var(--ws-motion-easing-standard, ease);
    user-select: none;
  }

  :host([selected]) .item {
    background: linear-gradient(
      90deg,
      var(--ws-purple, #6c5cff),
      var(--ws-purple-dark, #4f46e5)
    );
    box-shadow: var(--ws-elevation-sm, 0 1px 2px rgb(15 23 42 / 8%));
  }

  :host(:not([selected]):not([disabled])) .item:hover {
    background: var(--ws-color-surface-variant, #f1f5f9);
  }

  .item:focus-visible {
    box-shadow: 0 0 0 2px var(--ws-color-surface, #ffffff),
      0 0 0 4px var(--ws-color-primary, #6c5cff);
  }

  :host([disabled]) .item {
    cursor: not-allowed;
    opacity: 0.48;
  }

  :host([data-nested]) .item {
    border-radius: var(--ws-shape-small, 6px);
    min-block-size: 36px;
    padding-block: var(--ws-spacing-sm, 8px);
  }

  .icon,
  .bullet,
  .arrow {
    align-items: center;
    color: var(--ws-color-on-surface-variant, #64748b);
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
    transition: color var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      transform var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease);
  }

  :host([selected]) .icon,
  :host([selected]) .bullet,
  :host([selected]) .arrow {
    color: color-mix(in srgb, currentcolor 82%, transparent);
  }

  .icon {
    block-size: 20px;
    font-family: 'Material Symbols Outlined', 'Material Icons', sans-serif;
    font-size: 20px;
    font-weight: normal;
    inline-size: 20px;
    line-height: 1;
  }

  :host([data-nested]) .icon {
    block-size: 16px;
    font-size: 16px;
    inline-size: 16px;
  }

  .icon ::slotted(*) {
    display: inline-flex;
    font-size: 1em;
    block-size: 1em;
    inline-size: 1em;
  }

  .bullet {
    background: currentcolor;
    block-size: 5px;
    border-radius: var(--ws-shape-full, 999px);
    inline-size: 5px;
    opacity: 0.55;
  }

  :host([selected]) .bullet {
    block-size: 7px;
    inline-size: 7px;
    opacity: 1;
  }

  .text {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: 1px;
    min-inline-size: 0;
  }

  .title,
  .subtitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title {
    color: currentcolor;
    font: var(
      --ws-typography-body-medium,
      500 14px / 20px system-ui,
      sans-serif
    );
    font-weight: 500;
  }

  :host([selected]) .title,
  :host([data-has-children]) .title {
    font-weight: 600;
  }

  :host([data-nested]) .title {
    font: var(
      --ws-typography-label-medium,
      600 12px / 16px system-ui,
      sans-serif
    );
  }

  .subtitle {
    color: var(--ws-color-on-surface-variant, #64748b);
    font: var(
      --ws-typography-label-small,
      500 11px / 16px system-ui,
      sans-serif
    );
  }

  :host([selected]) .subtitle {
    color: color-mix(in srgb, currentcolor 82%, transparent);
  }

  .badge {
    background: color-mix(
      in srgb,
      var(--ws-color-primary, #6c5cff) 12%,
      transparent
    );
    border-radius: var(--ws-shape-extra-small, 4px);
    color: var(--ws-color-primary, #6c5cff);
    flex: 0 0 auto;
    font: var(
      --ws-typography-label-small,
      600 11px / 16px system-ui,
      sans-serif
    );
    font-weight: 700;
    padding: 2px var(--ws-spacing-sm, 8px);
  }

  :host([selected]) .badge {
    background: color-mix(in srgb, currentcolor 18%, transparent);
    color: currentcolor;
  }

  .arrow {
    font-size: 20px;
    margin-inline-start: calc(-1 * var(--ws-spacing-xs, 4px));
  }

  :host([expanded]) .arrow {
    transform: rotate(180deg);
  }

  .children {
    display: none;
    flex-direction: column;
    gap: var(--ws-spacing-xs, 4px);
    margin-block-start: var(--ws-spacing-xs, 4px);
  }

  :host([expanded]) .children {
    display: flex;
  }

  .progress-track {
    background: var(--ws-color-surface-variant, #f1f5f9);
    border-radius: var(--ws-shape-full, 999px);
    block-size: 4px;
    inline-size: 100%;
    margin-block-start: var(--ws-spacing-sm, 8px);
    overflow: hidden;
  }

  .progress-fill {
    background: var(--ws-color-primary, #6c5cff);
    block-size: 100%;
    border-radius: inherit;
    transition: inline-size var(--ws-motion-duration-medium, 180ms)
      var(--ws-motion-easing-standard, ease);
  }

  :host([selected]) .progress-track {
    background: color-mix(in srgb, currentcolor 28%, transparent);
  }

  :host([selected]) .progress-fill {
    background: currentcolor;
  }
`;var wt=function(t,s,e,i){for(var r,o=arguments.length,n=o<3?s:null===i?i=Object.getOwnPropertyDescriptor(s,e):i,a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(s,e,n):r(s,e))||n);return o>3&&n&&Object.defineProperty(s,e,n),n};let gt=class extends nt{constructor(){super(...arguments),this.itemId="",this.title="",this.icon="",this.subtitle="",this.badge="",this.disabled=!1,this.expanded=!1,this.selected=!1,this.hasChildren=!1}connectedCallback(){super.connectedCallback(),this.updateTreeState()}render(){const t=this.getNestingLevel(),s=this.clampedProgress;return this.toggleAttribute("data-nested",t>0),this.toggleAttribute("data-has-children",this.hasChildren),this.style.setProperty("--ws-drawer-item-depth",String(t)),W`
      <div
        class="item"
        role="button"
        tabindex=${this.disabled?"-1":"0"}
        aria-disabled=${this.disabled?"true":"false"}
        aria-expanded=${ut(this.hasChildren?this.expanded?"true":"false":void 0)}
        @click=${this.onClick}
        @keydown=${this.onKeydown}
      >
        ${this.renderLeadingIcon()}

        <div class="text">
          <span class="title">${this.title}</span>
          ${this.subtitle?W`<span class="subtitle">${this.subtitle}</span>`:J}
          ${void 0===s?J:this.renderProgress(s)}
        </div>

        ${this.badge?W`<span class="badge">${this.badge}</span>`:J}
        ${this.hasChildren?W`<span class="arrow" aria-hidden="true">⌄</span>`:J}
      </div>

      <div class="children">
        <slot @slotchange=${this.updateTreeState}></slot>
      </div>
    `}renderLeadingIcon(){const t=this.getNestingLevel()>0&&!this.icon;return this.icon?W`<span class="icon" aria-hidden="true"
        ><slot name="icon">${this.icon}</slot></span
      >`:t?W`<span class="bullet" aria-hidden="true"></span>`:W`<span class="icon" aria-hidden="true"
      ><slot name="icon"></slot
    ></span>`}renderProgress(t){return W`
      <div
        class="progress-track"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow=${t}
      >
        <div
          class="progress-fill"
          style=${`inline-size: ${100*t}%`}
        ></div>
      </div>
    `}onClick(t){t.stopPropagation(),this.activate()}onKeydown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.activate())}activate(){this.disabled||(this.hasChildren?this.expanded=!this.expanded:this.dispatchEvent(new CustomEvent("ws-drawer-item-activate",{bubbles:!0,composed:!0,detail:{itemId:this.itemId}})))}updateTreeState(){this.hasChildren=null!==this.querySelector("ws-drawer-item"),this.querySelectorAll("ws-drawer-item").forEach(t=>t.requestUpdate())}getNestingLevel(){let t=0,s=this.parentElement;for(;s;)"ws-drawer-item"===s.localName&&(t+=1),s=s.parentElement;return t}get clampedProgress(){if(void 0!==this.progress&&!Number.isNaN(this.progress))return Math.min(1,Math.max(0,this.progress))}};gt.styles=bt,wt([ht({attribute:"item-id"})],gt.prototype,"itemId",void 0),wt([ht()],gt.prototype,"title",void 0),wt([ht()],gt.prototype,"icon",void 0),wt([ht()],gt.prototype,"subtitle",void 0),wt([ht()],gt.prototype,"badge",void 0),wt([ht({type:Number})],gt.prototype,"progress",void 0),wt([ht({type:Boolean,reflect:!0})],gt.prototype,"disabled",void 0),wt([ht({type:Boolean,reflect:!0})],gt.prototype,"expanded",void 0),wt([ht({type:Boolean,reflect:!0})],gt.prototype,"selected",void 0),wt([function(t){return ht({...t,state:!0,attribute:!1})}()],gt.prototype,"hasChildren",void 0),gt=wt([lt("ws-drawer-item")],gt);var xt=function(t,s,e,i){for(var r,o=arguments.length,n=o<3?s:null===i?i=Object.getOwnPropertyDescriptor(s,e):i,a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(s,e,n):r(s,e))||n);return o>3&&n&&Object.defineProperty(s,e,n),n};let yt=class extends nt{constructor(){super(...arguments),this.selectedItemId="",this.syncSelection=()=>{this.querySelectorAll("ws-drawer-item").forEach(t=>{t.toggleAttribute("selected",t.getAttribute("item-id")===this.selectedItemId)})},this.onItemActivate=t=>{t.stopPropagation();const{itemId:s}=t.detail;this.dispatchEvent(new CustomEvent("ws-drawer-item-click",{bubbles:!0,composed:!0,detail:{itemId:s}}))}}connectedCallback(){super.connectedCallback(),this.addEventListener("ws-drawer-item-activate",this.onItemActivate)}disconnectedCallback(){this.removeEventListener("ws-drawer-item-activate",this.onItemActivate),super.disconnectedCallback()}render(){return W`
      <aside class="drawer">
        <div class="header"><slot name="header"></slot></div>
        <nav class="content" aria-label="Drawer navigation">
          <slot @slotchange=${this.syncSelection}></slot>
        </nav>
        <div class="footer"><slot name="footer"></slot></div>
      </aside>
    `}updated(t){t.has("selectedItemId")&&this.syncSelection()}};yt.styles=mt,xt([ht({attribute:"selected-item-id"})],yt.prototype,"selectedItemId",void 0),yt=xt([lt("ws-drawer")],yt);
