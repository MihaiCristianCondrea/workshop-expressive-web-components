/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),e=new WeakMap;let o=class{constructor(t,s,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const i=this.t;if(s&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=e.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&e.set(i,t))}return t}toString(){return this.cssText}};const r=(t,...s)=>{const e=1===t.length?t[0]:s.reduce((s,i,e)=>s+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[e+1],t[0]);return new o(e,t,i)},n=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(s)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,f=p.trustedTypes,m=f?f.emptyScript:"",v=p.reactiveElementPolyfillSupport,b=(t,s)=>t,w={toAttribute(t,s){switch(s){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,s)=>!a(t,s),y={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:g};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),e=this.getPropertyDescriptor(t,i,s);void 0!==e&&l(this.prototype,t,e)}}static getPropertyDescriptor(t,s,i){const{get:e,set:o}=c(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get:e,set(s){const r=e?.call(this);o?.call(this,s),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,s=[...d(t),...h(t)];for(const i of s)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)s.unshift(n(t))}else void 0!==t&&s.push(n(t));return s}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,e)=>{if(s)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of e){const e=document.createElement("style"),o=t.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=s.cssText,i.appendChild(e)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(s,i.type);this._$Em=t,null==o?this.removeAttribute(e):this.setAttribute(e,o),this._$Em=null}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=e;const r=o.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null}}requestUpdate(t,s,i,e=!1,o){if(void 0!==t){const r=this.constructor;if(!1===e&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??g)(o,s)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,s,{useDefault:i,reflect:e,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),!0===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];!0!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,v?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,z=t=>t,$=k.trustedTypes,S=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,_="?"+A,j=`<${_}>`,E=document,O=()=>E.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,I=Array.isArray,T="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,N=/>/g,R=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,L=/"/g,D=/^(?:script|style|textarea|title)$/i,G=(t=>(s,...i)=>({_$litType$:t,strings:s,values:i}))(1),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),Z=new WeakMap,H=E.createTreeWalker(E,129);function J(t,s){if(!I(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(s):s}const K=(t,s)=>{const i=t.length-1,e=[];let o,r=2===s?"<svg>":3===s?"<math>":"",n=P;for(let s=0;s<i;s++){const i=t[s];let a,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===P?"!--"===l[1]?n=U:void 0!==l[1]?n=N:void 0!==l[2]?(D.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=R):void 0!==l[3]&&(n=R):n===R?">"===l[0]?(n=o??P,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?R:'"'===l[3]?L:B):n===L||n===B?n=R:n===U||n===N?n=P:(n=R,o=void 0);const h=n===R&&t[s+1].startsWith("/>")?" ":"";r+=n===P?i+j:c>=0?(e.push(a),i.slice(0,c)+C+i.slice(c)+A+h):i+A+(-2===c?s:h)}return[J(t,r+(t[i]||"<?>")+(2===s?"</svg>":3===s?"</math>":"")),e]};class V{constructor({strings:t,_$litType$:s},i){let e;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,c]=K(t,s);if(this.el=V.createElement(l,i),H.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(e=H.nextNode())&&a.length<n;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(C)){const s=c[r++],i=e.getAttribute(t).split(A),n=/([.?@])?(.*)/.exec(s);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?tt:"?"===n[1]?st:"@"===n[1]?it:X}),e.removeAttribute(t)}else t.startsWith(A)&&(a.push({type:6,index:o}),e.removeAttribute(t));if(D.test(e.tagName)){const t=e.textContent.split(A),s=t.length-1;if(s>0){e.textContent=$?$.emptyScript:"";for(let i=0;i<s;i++)e.append(t[i],O()),H.nextNode(),a.push({type:2,index:++o});e.append(t[s],O())}}}else if(8===e.nodeType)if(e.data===_)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(A,t+1));)a.push({type:7,index:o}),t+=A.length-1}o++}}static createElement(t,s){const i=E.createElement("template");return i.innerHTML=t,i}}function Y(t,s,i=t,e){if(s===F)return s;let o=void 0!==e?i._$Co?.[e]:i._$Cl;const r=M(s)?void 0:s._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,e)),void 0!==e?(i._$Co??=[])[e]=o:i._$Cl=o),void 0!==o&&(s=Y(t,o._$AS(t,s.values),o,e)),s}class q{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,e=(t?.creationScope??E).importNode(s,!0);H.currentNode=e;let o=H.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let s;2===a.type?s=new Q(o,o.nextSibling,this,t):1===a.type?s=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(s=new et(o,this,t)),this._$AV.push(s),a=i[++n]}r!==a?.index&&(o=H.nextNode(),r++)}return H.currentNode=E,e}p(t){let s=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,i,e){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return void 0!==s&&11===t?.nodeType&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=Y(this,t,s),M(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>I(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:i}=t,e="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=V.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===e)this._$AH.p(s);else{const t=new q(e,this),i=t.u(this.options);t.p(s),this.T(i),this._$AH=t}}_$AC(t){let s=Z.get(t.strings);return void 0===s&&Z.set(t.strings,s=new V(t)),s}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,e=0;for(const o of t)e===s.length?s.push(i=new Q(this.O(O()),this.O(O()),this,this.options)):i=s[e],i._$AI(o),e++;e<s.length&&(this._$AR(i&&i._$AB.nextSibling,e),s.length=e)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){const s=z(t).nextSibling;z(t).remove(),t=s}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,e,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=s,this._$AM=e,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,s=this,i,e){const o=this.strings;let r=!1;if(void 0===o)t=Y(this,t,s,0),r=!M(t)||t!==this._$AH&&t!==F,r&&(this._$AH=t);else{const e=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=Y(this,e[i+n],s,n),a===F&&(a=this._$AH[n]),r||=!M(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!e&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class st extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends X{constructor(t,s,i,e,o){super(t,s,i,e,o),this.type=5}_$AI(t,s=this){if((t=Y(this,t,s,0)??W)===F)return;const i=this._$AH,e=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==W&&(i===W||e);e&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const ot=k.litHtmlPolyfillSupport;ot?.(V,Q),(k.litHtmlVersions??=[]).push("3.3.3");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let nt=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,s,i)=>{const e=i?.renderBefore??s;let o=e._$litPart$;if(void 0===o){const t=i?.renderBefore??null;e._$litPart$=o=new Q(s.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o})(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};nt._$litElement$=!0,nt.finalized=!0,rt.litElementHydrateSupport?.({LitElement:nt});const at=rt.litElementPolyfillSupport;at?.({LitElement:nt}),(rt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=t=>(s,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,s)}):customElements.define(t,s)},ct={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:g},dt=(t=ct,s,i)=>{const{kind:e,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===e&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===e){const{name:e}=i;return{set(i){const o=s.get.call(this);s.set.call(this,i),this.requestUpdate(e,o,t,!0,i)},init(s){return void 0!==s&&this.C(e,void 0,t,s),s}}}if("setter"===e){const{name:e}=i;return function(i){const o=this[e];s.call(this,i),this.requestUpdate(e,o,t,!0,i)}}throw Error("Unsupported decorator location: "+e)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return(s,i)=>"object"==typeof i?dt(t,s,i):((t,s,i)=>{const e=s.hasOwnProperty(i);return s.constructor.createProperty(i,t),e?Object.getOwnPropertyDescriptor(s,i):void 0})(t,s,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return ht({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=t=>t??W,ft=r`
  :host {
    font-family: var(
      --ws-font-family,
      'Google Sans Flex',
      'Google Sans',
      Roboto,
      system-ui,
      sans-serif
    );
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
    border-radius: var(--ws-button-radius, var(--ws-shape-medium, 8px));
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font: var(
      --ws-button-font,
      var(--ws-typography-label-large, 600 14px / 20px system-ui, sans-serif)
    );
    gap: var(--ws-button-icon-spacing, var(--ws-spacing-sm, 8px));
    justify-content: center;
    min-inline-size: var(--ws-button-min-width, 64px);
    outline: none;
    position: relative;
    text-decoration: none;
    transform: translateY(0) scale(1);
    transition: background-color var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      border-color var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      box-shadow var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      color var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      opacity var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      transform var(--ws-motion-duration-fast, 120ms)
        var(--ws-motion-easing-emphasized, ease);
    user-select: none;
    width: 100%;
  }

  .button:focus-visible {
    box-shadow: 0 0 0 2px var(--ws-color-background, #f8fafc),
      0 0 0 5px
        color-mix(
          in srgb,
          var(--ws-button-focus-color, var(--ws-color-primary, #6c5cff)) 45%,
          transparent
        );
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
    background: color-mix(
      in srgb,
      var(--ws-color-secondary, #3b82f6) 14%,
      var(--ws-color-secondary-container, #f1f5f9)
    );
    border-color: color-mix(
      in srgb,
      var(--ws-color-secondary, #3b82f6) 26%,
      var(--ws-color-outline-variant, #e2e8f0)
    );
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
    --ws-button-icon-size: 16px;
    --ws-button-icon-spacing: 6px;
    block-size: 36px;
    font: var(
      --ws-typography-label-small,
      600 11px / 16px system-ui,
      sans-serif
    );
    padding: 0 14px;
  }

  :host([size='medium']) .button,
  :host(:not([size])) .button {
    --ws-button-icon-size: 18px;
    --ws-button-icon-spacing: 8px;
    block-size: 44px;
    font: var(
      --ws-typography-label-medium,
      600 12px / 16px system-ui,
      sans-serif
    );
    padding: 0 18px;
  }

  :host([size='large']) .button {
    --ws-button-icon-size: 20px;
    --ws-button-icon-spacing: 10px;
    block-size: 52px;
    font: var(
      --ws-typography-label-large,
      600 14px / 20px system-ui,
      sans-serif
    );
    padding: 0 24px;
  }

  :host([icon-only]) .button {
    padding-inline: 0;
  }

  :host([icon-only][size='small']) .button {
    min-inline-size: 36px;
  }

  :host([icon-only][size='medium']) .button,
  :host([icon-only]:not([size])) .button {
    min-inline-size: 44px;
  }

  :host([icon-only][size='large']) .button {
    min-inline-size: 52px;
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
    block-size: var(--ws-button-icon-size, 18px);
    font-size: var(--ws-button-icon-size, 18px);
    inline-size: var(--ws-button-icon-size, 18px);
  }

  :host([loading]) .icon {
    display: none;
  }

  .spinner {
    block-size: 18px;
    border: 2px solid currentcolor;
    border-block-start-color: transparent;
    border-radius: var(--ws-shape-full, 999px);
    box-sizing: border-box;
    inline-size: 18px;
    animation: ws-button-spin 800ms linear infinite;
  }

  @keyframes ws-button-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;var mt=function(t,s,i,e){for(var o,r=arguments.length,n=r<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(s,i,n):o(s,i))||n);return r>3&&n&&Object.defineProperty(s,i,n),n};let vt=class extends nt{constructor(){super(...arguments),this.variant="primary",this.size="medium",this.disabled=!1,this.loading=!1,this.hasIcon=!1,this.hasLabel=!1,this.contentObserver=new MutationObserver(()=>{this.syncSlottedState()})}connectedCallback(){super.connectedCallback(),this.contentObserver.observe(this,{attributeFilter:["slot"],attributes:!0,childList:!0,subtree:!0}),this.syncSlottedState()}disconnectedCallback(){this.contentObserver.disconnect(),super.disconnectedCallback()}render(){const t=this.disabled||this.loading;return this.toggleAttribute("icon-only",this.hasIcon&&!this.hasLabel),G`
      <button
        class="button"
        part="button"
        type="button"
        ?disabled=${t}
        aria-busy=${pt(this.loading?"true":void 0)}
        aria-label=${pt(this.accessibleLabel)}
      >
        ${this.loading?this.renderSpinner():this.renderContent()}
      </button>
    `}renderContent(){return G`
      ${this.hasIcon?G`<span class="icon"><slot name="icon"></slot></span>`:W}
      ${this.hasLabel?G`<span class="label"><slot></slot></span>`:W}
    `}renderSpinner(){return G`<span class="spinner" aria-hidden="true"></span>`}syncSlottedState(){const t=null!==this.querySelector('[slot="icon"]'),s=Array.from(this.childNodes).some(t=>t.nodeType===Node.TEXT_NODE?Boolean(t.textContent?.trim()):t.nodeType===Node.ELEMENT_NODE&&"icon"!==t.getAttribute("slot"));this.hasIcon!==t&&(this.hasIcon=t),this.hasLabel!==s&&(this.hasLabel=s)}};vt.styles=ft,mt([ht({reflect:!0})],vt.prototype,"variant",void 0),mt([ht({reflect:!0})],vt.prototype,"size",void 0),mt([ht({type:Boolean,reflect:!0})],vt.prototype,"disabled",void 0),mt([ht({type:Boolean,reflect:!0})],vt.prototype,"loading",void 0),mt([ht({attribute:"aria-label"})],vt.prototype,"accessibleLabel",void 0),mt([ut()],vt.prototype,"hasIcon",void 0),mt([ut()],vt.prototype,"hasLabel",void 0),vt=mt([lt("ws-button")],vt);const bt=r`
  :host {
    font-family: var(
      --ws-font-family,
      'Google Sans Flex',
      'Google Sans',
      Roboto,
      system-ui,
      sans-serif
    );
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
`,wt=r`
  :host {
    font-family: var(
      --ws-font-family,
      'Google Sans Flex',
      'Google Sans',
      Roboto,
      system-ui,
      sans-serif
    );
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

  .icon > i,
  .icon ::slotted(*) {
    align-items: center;
    block-size: 1em;
    display: inline-flex;
    font-size: 1em;
    inline-size: 1em;
    justify-content: center;
    line-height: 1;
  }

  :host([data-settings-spin]) .icon > i,
  :host([data-settings-spin]) .icon ::slotted(*) {
    animation: ws-drawer-settings-spin 320ms
      var(--ws-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1));
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
    block-size: 20px;
    inline-size: 20px;
    margin-inline-start: calc(-1 * var(--ws-spacing-xs, 4px));
  }

  .arrow svg {
    block-size: 100%;
    fill: currentcolor;
    inline-size: 100%;
  }

  :host([expanded]) .arrow {
    transform: rotate(180deg);
  }

  .children {
    display: grid;
    grid-template-rows: 0fr;
    margin-block-start: 0;
    opacity: 0;
    overflow: hidden;
    transition: grid-template-rows var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1)),
      margin-block-start var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      opacity var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease);
  }

  .children-inner {
    display: flex;
    flex-direction: column;
    gap: var(--ws-spacing-xs, 4px);
    min-block-size: 0;
  }

  :host([expanded]) .children {
    grid-template-rows: 1fr;
    margin-block-start: var(--ws-spacing-xs, 4px);
    opacity: 1;
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

  @keyframes ws-drawer-settings-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;var gt=function(t,s,i,e){for(var o,r=arguments.length,n=r<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(s,i,n):o(s,i))||n);return r>3&&n&&Object.defineProperty(s,i,n),n};let yt=class extends nt{constructor(){super(...arguments),this.itemId="",this.title="",this.icon="",this.subtitle="",this.badge="",this.disabled=!1,this.expanded=!1,this.selected=!1,this.hasChildren=!1}connectedCallback(){super.connectedCallback(),this.updateTreeState()}render(){const t=this.getNestingLevel(),s=this.clampedProgress;return this.toggleAttribute("data-nested",t>0),this.toggleAttribute("data-has-children",this.hasChildren),this.style.setProperty("--ws-drawer-item-depth",String(t)),G`
      <div
        class="item"
        role="button"
        tabindex=${this.disabled?"-1":"0"}
        aria-disabled=${this.disabled?"true":"false"}
        aria-expanded=${pt(this.hasChildren?this.expanded?"true":"false":void 0)}
        @click=${this.onClick}
        @keydown=${this.onKeydown}
      >
        ${this.renderLeadingIcon()}

        <div class="text">
          <span class="title">${this.title}</span>
          ${this.subtitle?G`<span class="subtitle">${this.subtitle}</span>`:W}
          ${void 0===s?W:this.renderProgress(s)}
        </div>

        ${this.badge?G`<span class="badge">${this.badge}</span>`:W}
        ${this.hasChildren?this.renderDisclosureIcon():W}
      </div>

      <div
        class="children"
        aria-hidden=${this.hasChildren&&!this.expanded?"true":"false"}
      >
        <div class="children-inner">
          <slot @slotchange=${this.updateTreeState}></slot>
        </div>
      </div>
    `}renderLeadingIcon(){const t=null!==this.querySelector('[slot="icon"]'),s=this.getNestingLevel()>0&&!this.icon&&!t;return this.icon||t?G`<span class="icon" aria-hidden="true"
        ><slot name="icon">${this.renderIconClass()}</slot></span
      >`:s?G`<span class="bullet" aria-hidden="true"></span>`:G`<span class="icon" aria-hidden="true"
      ><slot name="icon"></slot
    ></span>`}renderIconClass(){return this.icon?G`<i class=${this.icon} aria-hidden="true"></i>`:W}renderDisclosureIcon(){return G`
      <span class="arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            d="M12 15.5 5.5 9l1.4-1.4 5.1 5.1 5.1-5.1L18.5 9 12 15.5Z"
          ></path>
        </svg>
      </span>
    `}renderProgress(t){return G`
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
    `}onClick(t){t.stopPropagation(),this.activate()}onKeydown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.activate())}activate(){this.disabled||(this.hasChildren?this.expanded=!this.expanded:("settings"===this.itemId&&this.animateSettingsIcon(),this.dispatchEvent(new CustomEvent("ws-drawer-item-activate",{bubbles:!0,composed:!0,detail:{itemId:this.itemId}}))))}animateSettingsIcon(){this.toggleAttribute("data-settings-spin",!1),window.requestAnimationFrame(()=>{this.toggleAttribute("data-settings-spin",!0),window.setTimeout(()=>{this.toggleAttribute("data-settings-spin",!1)},360)})}updateTreeState(){this.hasChildren=null!==this.querySelector("ws-drawer-item"),this.querySelectorAll("ws-drawer-item").forEach(t=>t.requestUpdate())}getNestingLevel(){let t=0,s=this.parentElement;for(;s;)"ws-drawer-item"===s.localName&&(t+=1),s=s.parentElement;return t}get clampedProgress(){if(void 0!==this.progress&&!Number.isNaN(this.progress))return Math.min(1,Math.max(0,this.progress))}};yt.styles=wt,gt([ht({attribute:"item-id"})],yt.prototype,"itemId",void 0),gt([ht()],yt.prototype,"title",void 0),gt([ht()],yt.prototype,"icon",void 0),gt([ht()],yt.prototype,"subtitle",void 0),gt([ht()],yt.prototype,"badge",void 0),gt([ht({type:Number})],yt.prototype,"progress",void 0),gt([ht({type:Boolean,reflect:!0})],yt.prototype,"disabled",void 0),gt([ht({type:Boolean,reflect:!0})],yt.prototype,"expanded",void 0),gt([ht({type:Boolean,reflect:!0})],yt.prototype,"selected",void 0),gt([ut()],yt.prototype,"hasChildren",void 0),yt=gt([lt("ws-drawer-item")],yt);var xt=function(t,s,i,e){for(var o,r=arguments.length,n=r<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(s,i,n):o(s,i))||n);return r>3&&n&&Object.defineProperty(s,i,n),n};let kt=class extends nt{constructor(){super(...arguments),this.selectedItemId="",this.syncSelection=()=>{this.querySelectorAll("ws-drawer-item").forEach(t=>{t.toggleAttribute("selected",t.getAttribute("item-id")===this.selectedItemId)})},this.onItemActivate=t=>{t.stopPropagation();const{itemId:s}=t.detail;this.dispatchEvent(new CustomEvent("ws-drawer-item-click",{bubbles:!0,composed:!0,detail:{itemId:s}}))}}connectedCallback(){super.connectedCallback(),this.addEventListener("ws-drawer-item-activate",this.onItemActivate)}disconnectedCallback(){this.removeEventListener("ws-drawer-item-activate",this.onItemActivate),super.disconnectedCallback()}render(){return G`
      <aside class="drawer">
        <div class="header"><slot name="header"></slot></div>
        <nav class="content" aria-label="Drawer navigation">
          <slot @slotchange=${this.syncSelection}></slot>
        </nav>
        <div class="footer"><slot name="footer"></slot></div>
      </aside>
    `}updated(t){t.has("selectedItemId")&&this.syncSelection()}};kt.styles=bt,xt([ht({attribute:"selected-item-id"})],kt.prototype,"selectedItemId",void 0),kt=xt([lt("ws-drawer")],kt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const zt=1;let $t=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St="important",Ct=" !"+St,At=(t=>(...s)=>({_$litDirective$:t,values:s}))(class extends $t{constructor(t){if(super(t),t.type!==zt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((s,i)=>{const e=t[i];return null==e?s:s+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(t,[s]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(s)),this.render(s);for(const t of this.ft)null==s[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in s){const e=s[t];if(null!=e){this.ft.add(t);const s="string"==typeof e&&e.endsWith(Ct);t.includes("-")||s?i.setProperty(t,s?e.slice(0,-11):e,s?St:""):i[t]=e}}return F}}),_t=r`
  :host {
    --ws-brand-mark-size: 48px;
    --ws-brand-mark-gradient: linear-gradient(
      135deg,
      var(--ws-color-primary, #6c5cff),
      var(--ws-gradient-accent, #06b6d4)
    );
    color: var(--ws-color-on-surface, #0f172a);
    display: inline-block;
    font-family: var(
      --ws-font-family,
      'Google Sans Flex',
      'Google Sans',
      Roboto,
      system-ui,
      sans-serif
    );
    gap: var(--ws-spacing-md, 12px);
    min-inline-size: 0;
  }

  .root {
    align-items: center;
    display: inline-flex;
    gap: inherit;
    min-inline-size: 0;
  }

  :host([hidden]) {
    display: none;
  }

  .mark {
    align-items: center;
    background: var(--ws-brand-mark-gradient);
    block-size: var(--ws-brand-mark-size);
    border-radius: var(--ws-brand-mark-radius, var(--ws-shape-large, 12px));
    box-sizing: border-box;
    color: var(--ws-color-on-primary, #ffffff);
    display: inline-flex;
    flex: 0 0 auto;
    font-size: calc(var(--ws-brand-mark-size) * 0.42);
    font-weight: 900;
    inline-size: var(--ws-brand-mark-size);
    justify-content: center;
    letter-spacing: -0.04em;
    line-height: 1;
    overflow: hidden;
    user-select: none;
  }

  .text {
    display: grid;
    gap: 2px;
    min-inline-size: 0;
  }

  .title,
  .subtitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title {
    color: var(--ws-color-on-surface, #0f172a);
    font: var(
      --ws-typography-title-medium,
      600 18px / 24px var(--ws-font-family, system-ui, sans-serif)
    );
  }

  .subtitle {
    color: var(--ws-color-on-surface-variant, #64748b);
    font: var(
      --ws-typography-label-medium,
      600 12px / 16px var(--ws-font-family, system-ui, sans-serif)
    );
  }
`;var jt=function(t,s,i,e){for(var o,r=arguments.length,n=r<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(s,i,n):o(s,i))||n);return r>3&&n&&Object.defineProperty(s,i,n),n};let Et=class extends nt{constructor(){super(...arguments),this.markText="W",this.title="Workshop",this.subtitle="",this.size="48px",this.gradientColors=""}render(){const t={"--ws-brand-mark-size":this.size,...this.gradientColors?{"--ws-brand-mark-gradient":this.gradientValue}:{}};return G`
      <div class="root" style=${At(t)}>
        <span class="mark" part="mark" aria-hidden="true">
          <slot name="mark">${this.markText}</slot>
        </span>
        <span class="text">
          <slot>
            <span class="title" part="title">${this.title}</span>
            ${this.subtitle?G`<span class="subtitle" part="subtitle"
                  >${this.subtitle}</span
                >`:W}
          </slot>
        </span>
      </div>
    `}get gradientValue(){const t=this.gradientColors.split(",").map(t=>t.trim()).filter(Boolean);if(!(t.length<2))return`linear-gradient(135deg, ${t.join(", ")})`}};Et.styles=_t,jt([ht({attribute:"mark-text"})],Et.prototype,"markText",void 0),jt([ht()],Et.prototype,"title",void 0),jt([ht()],Et.prototype,"subtitle",void 0),jt([ht()],Et.prototype,"size",void 0),jt([ht({attribute:"gradient-colors"})],Et.prototype,"gradientColors",void 0),Et=jt([lt("ws-brand-mark")],Et);
