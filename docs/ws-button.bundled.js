/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),e=new WeakMap;let o=class{constructor(t,s,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const i=this.t;if(s&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=e.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&e.set(i,t))}return t}toString(){return this.cssText}};const r=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(s)})(t):t,{is:n,defineProperty:a,getOwnPropertyDescriptor:h,getOwnPropertyNames:c,getOwnPropertySymbols:l,getPrototypeOf:d}=Object,u=globalThis,f=u.trustedTypes,p=f?f.emptyScript:"",v=u.reactiveElementPolyfillSupport,b=(t,s)=>t,m={toAttribute(t,s){switch(s){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,s)=>!n(t,s),w={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:g};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=w){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),e=this.getPropertyDescriptor(t,i,s);void 0!==e&&a(this.prototype,t,e)}}static getPropertyDescriptor(t,s,i){const{get:e,set:o}=h(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get:e,set(s){const r=e?.call(this);o?.call(this,s),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,s=[...c(t),...l(t)];for(const i of s)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)s.unshift(r(t))}else void 0!==t&&s.push(r(t));return s}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,e)=>{if(s)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of e){const e=document.createElement("style"),o=t.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=s.cssText,i.appendChild(e)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:m).toAttribute(s,i.type);this._$Em=t,null==o?this.removeAttribute(e):this.setAttribute(e,o),this._$Em=null}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=e;const r=o.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null}}requestUpdate(t,s,i,e=!1,o){if(void 0!==t){const r=this.constructor;if(!1===e&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??g)(o,s)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,s,{useDefault:i,reflect:e,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),!0===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];!0!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[b("elementProperties")]=new Map,y[b("finalized")]=new Map,v?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,S=t=>t,$=x.trustedTypes,k=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,z="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+_,C=`<${A}>`,E=document,M=()=>E.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,U="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,N=/>/g,R=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,B=(t=>(s,...i)=>({_$litType$:t,strings:s,values:i}))(1),W=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),J=new WeakMap,Y=E.createTreeWalker(E,129);function Z(t,s){if(!j(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(s):s}const q=(t,s)=>{const i=t.length-1,e=[];let o,r=2===s?"<svg>":3===s?"<math>":"",n=P;for(let s=0;s<i;s++){const i=t[s];let a,h,c=-1,l=0;for(;l<i.length&&(n.lastIndex=l,h=n.exec(i),null!==h);)l=n.lastIndex,n===P?"!--"===h[1]?n=T:void 0!==h[1]?n=N:void 0!==h[2]?(L.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=R):void 0!==h[3]&&(n=R):n===R?">"===h[0]?(n=o??P,c=-1):void 0===h[1]?c=-2:(c=n.lastIndex-h[2].length,a=h[1],n=void 0===h[3]?R:'"'===h[3]?I:D):n===I||n===D?n=R:n===T||n===N?n=P:(n=R,o=void 0);const d=n===R&&t[s+1].startsWith("/>")?" ":"";r+=n===P?i+C:c>=0?(e.push(a),i.slice(0,c)+z+i.slice(c)+_+d):i+_+(-2===c?s:d)}return[Z(t,r+(t[i]||"<?>")+(2===s?"</svg>":3===s?"</math>":"")),e]};class K{constructor({strings:t,_$litType$:s},i){let e;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[h,c]=q(t,s);if(this.el=K.createElement(h,i),Y.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(e=Y.nextNode())&&a.length<n;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(z)){const s=c[r++],i=e.getAttribute(t).split(_),n=/([.?@])?(.*)/.exec(s);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?X:"?"===n[1]?tt:"@"===n[1]?st:Q}),e.removeAttribute(t)}else t.startsWith(_)&&(a.push({type:6,index:o}),e.removeAttribute(t));if(L.test(e.tagName)){const t=e.textContent.split(_),s=t.length-1;if(s>0){e.textContent=$?$.emptyScript:"";for(let i=0;i<s;i++)e.append(t[i],M()),Y.nextNode(),a.push({type:2,index:++o});e.append(t[s],M())}}}else if(8===e.nodeType)if(e.data===A)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(_,t+1));)a.push({type:7,index:o}),t+=_.length-1}o++}}static createElement(t,s){const i=E.createElement("template");return i.innerHTML=t,i}}function V(t,s,i=t,e){if(s===W)return s;let o=void 0!==e?i._$Co?.[e]:i._$Cl;const r=O(s)?void 0:s._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,e)),void 0!==e?(i._$Co??=[])[e]=o:i._$Cl=o),void 0!==o&&(s=V(t,o._$AS(t,s.values),o,e)),s}class F{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,e=(t?.creationScope??E).importNode(s,!0);Y.currentNode=e;let o=Y.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let s;2===a.type?s=new G(o,o.nextSibling,this,t):1===a.type?s=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(s=new it(o,this,t)),this._$AV.push(s),a=i[++n]}r!==a?.index&&(o=Y.nextNode(),r++)}return Y.currentNode=E,e}p(t){let s=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,i,e){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return void 0!==s&&11===t?.nodeType&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=V(this,t,s),O(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>j(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==H&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:i}=t,e="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===e)this._$AH.p(s);else{const t=new F(e,this),i=t.u(this.options);t.p(s),this.T(i),this._$AH=t}}_$AC(t){let s=J.get(t.strings);return void 0===s&&J.set(t.strings,s=new K(t)),s}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,e=0;for(const o of t)e===s.length?s.push(i=new G(this.O(M()),this.O(M()),this,this.options)):i=s[e],i._$AI(o),e++;e<s.length&&(this._$AR(i&&i._$AB.nextSibling,e),s.length=e)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){const s=S(t).nextSibling;S(t).remove(),t=s}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,e,o){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=s,this._$AM=e,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}_$AI(t,s=this,i,e){const o=this.strings;let r=!1;if(void 0===o)t=V(this,t,s,0),r=!O(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const e=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=V(this,e[i+n],s,n),a===W&&(a=this._$AH[n]),r||=!O(a)||a!==this._$AH[n],a===H?t=H:t!==H&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!e&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==H)}}class st extends Q{constructor(t,s,i,e,o){super(t,s,i,e,o),this.type=5}_$AI(t,s=this){if((t=V(this,t,s,0)??H)===W)return;const i=this._$AH,e=t===H&&i!==H||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==H&&(i===H||e);e&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const et=x.litHtmlPolyfillSupport;et?.(K,G),(x.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rt extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,s,i)=>{const e=i?.renderBefore??s;let o=e._$litPart$;if(void 0===o){const t=i?.renderBefore??null;e._$litPart$=o=new G(s.insertBefore(M(),t),t,void 0,i??{})}return o._$AI(t),o})(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}rt._$litElement$=!0,rt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:rt});const nt=ot.litElementPolyfillSupport;nt?.({LitElement:rt}),(ot.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:g},ht=(t=at,s,i)=>{const{kind:e,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===e&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===e){const{name:e}=i;return{set(i){const o=s.get.call(this);s.set.call(this,i),this.requestUpdate(e,o,t,!0,i)},init(s){return void 0!==s&&this.C(e,void 0,t,s),s}}}if("setter"===e){const{name:e}=i;return function(i){const o=this[e];s.call(this,i),this.requestUpdate(e,o,t,!0,i)}}throw Error("Unsupported decorator location: "+e)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(t){return(s,i)=>"object"==typeof i?ht(t,s,i):((t,s,i)=>{const e=s.hasOwnProperty(i);return s.constructor.createProperty(i,t),e?Object.getOwnPropertyDescriptor(s,i):void 0})(t,s,i)}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=t=>t??H,dt=((t,...s)=>{const e=1===t.length?t[0]:s.reduce((s,i,e)=>s+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[e+1],t[0]);return new o(e,t,i)})`
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
`;var ut=function(t,s,i,e){for(var o,r=arguments.length,n=r<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(s,i,n):o(s,i))||n);return r>3&&n&&Object.defineProperty(s,i,n),n};let ft=class extends rt{constructor(){super(...arguments),this.variant="primary",this.size="medium",this.disabled=!1,this.loading=!1}render(){const t=this.disabled||this.loading;return B`
      <button
        class="button"
        part="button"
        type="button"
        ?disabled=${t}
        aria-busy=${lt(this.loading?"true":void 0)}
        aria-label=${lt(this.accessibleLabel)}
      >
        ${this.loading?B`<span class="spinner" aria-hidden="true"></span>`:B`<span class="icon"><slot name="icon"></slot></span>`}
        <span class="label"><slot></slot></span>
      </button>
    `}};ft.styles=dt,ut([ct({reflect:!0})],ft.prototype,"variant",void 0),ut([ct({reflect:!0})],ft.prototype,"size",void 0),ut([ct({type:Boolean,reflect:!0})],ft.prototype,"disabled",void 0),ut([ct({type:Boolean,reflect:!0})],ft.prototype,"loading",void 0),ut([ct({attribute:"aria-label"})],ft.prototype,"accessibleLabel",void 0),ft=ut([(t=>(s,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,s)}):customElements.define(t,s)})("ws-button")],ft);export{ft as WsButton};
