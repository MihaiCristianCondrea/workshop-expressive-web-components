/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),r=new WeakMap;let i=class{constructor(t,s,r){if(this._$cssResult$=!0,r!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...s)=>{const r=1===t.length?t[0]:s.reduce((s,e,r)=>s+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[r+1],t[0]);return new i(r,t,e)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const e of t.cssRules)s+=e.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,e))(s)})(t):t,{is:n,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,w=p.trustedTypes,f=w?w.emptyScript:"",v=p.reactiveElementPolyfillSupport,b=(t,s)=>t,m={toAttribute(t,s){switch(s){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let e=t;switch(s){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},g=(t,s)=>!n(t,s),x={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:g};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=x){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const e=Symbol(),r=this.getPropertyDescriptor(t,e,s);void 0!==r&&c(this.prototype,t,r)}}static getPropertyDescriptor(t,s,e){const{get:r,set:i}=l(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get:r,set(s){const o=r?.call(this);i?.call(this,s),this.requestUpdate(t,o,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,s=[...d(t),...h(t)];for(const e of s)this.createProperty(e,t[e])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,e]of s)this.elementProperties.set(t,e)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const e=this._$Eu(t,s);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)s.unshift(a(t))}else void 0!==t&&s.push(a(t));return s}static _$Eu(t,s){const e=s.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const e of s.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{if(s)e.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of r){const r=document.createElement("style"),i=t.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=s.cssText,e.appendChild(r)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,e){this._$AK(t,e)}_$ET(t,s){const e=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,e);if(void 0!==r&&!0===e.reflect){const i=(void 0!==e.converter?.toAttribute?e.converter:m).toAttribute(s,e.type);this._$Em=t,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,s){const e=this.constructor,r=e._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=e.getPropertyOptions(r),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=r;const o=i.fromAttribute(s,t.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(t,s,e,r=!1,i){if(void 0!==t){const o=this.constructor;if(!1===r&&(i=this[t]),e??=o.getPropertyOptions(t),!((e.hasChanged??g)(i,s)||e.useDefault&&e.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,e))))return;this.C(t,s,e)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,s,{useDefault:e,reflect:r,wrapped:i},o){e&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??s??this[t]),!0!==i||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||e||(s=void 0),this._$AL.set(t,s)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,e]of t){const{wrapped:t}=e,r=this[s];!0!==t||this._$AL.has(s)||void 0===r||this.C(s,void 0,e,r)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[b("elementProperties")]=new Map,y[b("finalized")]=new Map,v?.({ReactiveElement:y}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,z=t=>t,$=k.trustedTypes,S=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+j,O=`<${A}>`,_=document,E=()=>_.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,I=Array.isArray,B="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,T=/>/g,P=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,G=/"/g,D=/^(?:script|style|textarea|title)$/i,F=(t=>(s,...e)=>({_$litType$:t,strings:s,values:e}))(1),R=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),H=new WeakMap,V=_.createTreeWalker(_,129);function Z(t,s){if(!I(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(s):s}const J=(t,s)=>{const e=t.length-1,r=[];let i,o=2===s?"<svg>":3===s?"<math>":"",a=L;for(let s=0;s<e;s++){const e=t[s];let n,c,l=-1,d=0;for(;d<e.length&&(a.lastIndex=d,c=a.exec(e),null!==c);)d=a.lastIndex,a===L?"!--"===c[1]?a=N:void 0!==c[1]?a=T:void 0!==c[2]?(D.test(c[2])&&(i=RegExp("</"+c[2],"g")),a=P):void 0!==c[3]&&(a=P):a===P?">"===c[0]?(a=i??L,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,n=c[1],a=void 0===c[3]?P:'"'===c[3]?G:U):a===G||a===U?a=P:a===N||a===T?a=L:(a=P,i=void 0);const h=a===P&&t[s+1].startsWith("/>")?" ":"";o+=a===L?e+O:l>=0?(r.push(n),e.slice(0,l)+C+e.slice(l)+j+h):e+j+(-2===l?s:h)}return[Z(t,o+(t[e]||"<?>")+(2===s?"</svg>":3===s?"</math>":"")),r]};class X{constructor({strings:t,_$litType$:s},e){let r;this.parts=[];let i=0,o=0;const a=t.length-1,n=this.parts,[c,l]=J(t,s);if(this.el=X.createElement(c,e),V.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=V.nextNode())&&n.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(C)){const s=l[o++],e=r.getAttribute(t).split(j),a=/([.?@])?(.*)/.exec(s);n.push({type:1,index:i,name:a[2],strings:e,ctor:"."===a[1]?tt:"?"===a[1]?st:"@"===a[1]?et:Q}),r.removeAttribute(t)}else t.startsWith(j)&&(n.push({type:6,index:i}),r.removeAttribute(t));if(D.test(r.tagName)){const t=r.textContent.split(j),s=t.length-1;if(s>0){r.textContent=$?$.emptyScript:"";for(let e=0;e<s;e++)r.append(t[e],E()),V.nextNode(),n.push({type:2,index:++i});r.append(t[s],E())}}}else if(8===r.nodeType)if(r.data===A)n.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(j,t+1));)n.push({type:7,index:i}),t+=j.length-1}i++}}static createElement(t,s){const e=_.createElement("template");return e.innerHTML=t,e}}function K(t,s,e=t,r){if(s===R)return s;let i=void 0!==r?e._$Co?.[r]:e._$Cl;const o=M(s)?void 0:s._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(t),i._$AT(t,e,r)),void 0!==r?(e._$Co??=[])[r]=i:e._$Cl=i),void 0!==i&&(s=K(t,i._$AS(t,s.values),i,r)),s}class Y{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:e}=this._$AD,r=(t?.creationScope??_).importNode(s,!0);V.currentNode=r;let i=V.nextNode(),o=0,a=0,n=e[0];for(;void 0!==n;){if(o===n.index){let s;2===n.type?s=new q(i,i.nextSibling,this,t):1===n.type?s=new n.ctor(i,n.name,n.strings,this,t):6===n.type&&(s=new rt(i,this,t)),this._$AV.push(s),n=e[++a]}o!==n?.index&&(i=V.nextNode(),o++)}return V.currentNode=_,r}p(t){let s=0;for(const e of this._$AV)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,s),s+=e.strings.length-2):e._$AI(t[s])),s++}}class q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,e,r){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=e,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return void 0!==s&&11===t?.nodeType&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=K(this,t,s),M(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==R&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>I(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:e}=t,r="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=X.createElement(Z(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===r)this._$AH.p(s);else{const t=new Y(r,this),e=t.u(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let s=H.get(t.strings);return void 0===s&&H.set(t.strings,s=new X(t)),s}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let e,r=0;for(const i of t)r===s.length?s.push(e=new q(this.O(E()),this.O(E()),this,this.options)):e=s[r],e._$AI(i),r++;r<s.length&&(this._$AR(e&&e._$AB.nextSibling,r),s.length=r)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){const s=z(t).nextSibling;z(t).remove(),t=s}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,e,r,i){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=s,this._$AM=r,this.options=i,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=W}_$AI(t,s=this,e,r){const i=this.strings;let o=!1;if(void 0===i)t=K(this,t,s,0),o=!M(t)||t!==this._$AH&&t!==R,o&&(this._$AH=t);else{const r=t;let a,n;for(t=i[0],a=0;a<i.length-1;a++)n=K(this,r[e+a],s,a),n===R&&(n=this._$AH[a]),o||=!M(n)||n!==this._$AH[a],n===W?t=W:t!==W&&(t+=(n??"")+i[a+1]),this._$AH[a]=n}o&&!r&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class st extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class et extends Q{constructor(t,s,e,r,i){super(t,s,e,r,i),this.type=5}_$AI(t,s=this){if((t=K(this,t,s,0)??W)===R)return;const e=this._$AH,r=t===W&&e!==W||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,i=t!==W&&(e===W||r);r&&this.element.removeEventListener(this.name,this,e),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,s,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const it=k.litHtmlPolyfillSupport;it?.(X,q),(k.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,s,e)=>{const r=e?.renderBefore??s;let i=r._$litPart$;if(void 0===i){const t=e?.renderBefore??null;r._$litPart$=i=new q(s.insertBefore(E(),t),t,void 0,e??{})}return i._$AI(t),i})(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};at._$litElement$=!0,at.finalized=!0,ot.litElementHydrateSupport?.({LitElement:at});const nt=ot.litElementPolyfillSupport;nt?.({LitElement:at}),(ot.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(s,e)=>{void 0!==e?e.addInitializer(()=>{customElements.define(t,s)}):customElements.define(t,s)},lt={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:g},dt=(t=lt,s,e)=>{const{kind:r,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),o.set(e.name,t),"accessor"===r){const{name:r}=e;return{set(e){const i=s.get.call(this);s.set.call(this,e),this.requestUpdate(r,i,t,!0,e)},init(s){return void 0!==s&&this.C(r,void 0,t,s),s}}}if("setter"===r){const{name:r}=e;return function(e){const i=this[r];s.call(this,e),this.requestUpdate(r,i,t,!0,e)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return(s,e)=>"object"==typeof e?dt(t,s,e):((t,s,e)=>{const r=s.hasOwnProperty(e);return s.constructor.createProperty(e,t),r?Object.getOwnPropertyDescriptor(s,e):void 0})(t,s,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return ht({...t,state:!0,attribute:!1})}
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
const pt=t=>t??W,wt=o`
  :host {
    font-family: var(
      --ws-font-family,
      'Google Sans Flex',
      system-ui,
      sans-serif
    );
    font-optical-sizing: auto;
    font-variation-settings: 'slnt' 0, 'wdth' 100, 'GRAD' 0, 'ROND' 0;
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
    font: var(--ws-button-font, var(--ws-typography-label-large));
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
    box-shadow: 0 0 0 var(--ws-focus-ring-inner-size, 2px)
        var(--ws-color-background, #f8fafc),
      0 0 0 var(--ws-focus-ring-outer-size, 5px)
        color-mix(
          in srgb,
          var(--ws-button-focus-color, var(--ws-color-primary, #6c5cff)) 45%,
          transparent
        );
  }

  .button:not(:disabled):active {
    transform: translateY(var(--ws-button-pressed-offset, 1px))
      scale(var(--ws-button-pressed-scale, 0.98));
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
    --ws-button-icon-size: var(--ws-button-small-icon-size, 16px);
    --ws-button-icon-spacing: var(
      --ws-button-small-icon-spacing,
      var(--ws-spacing-xs, 4px)
    );
    block-size: var(--ws-button-small-height, 36px);
    font: var(--ws-typography-label-small);
    padding: 0 var(--ws-button-small-padding-inline, var(--ws-spacing-md, 12px));
  }

  :host([size='medium']) .button,
  :host(:not([size])) .button {
    --ws-button-icon-size: var(--ws-button-medium-icon-size, 18px);
    --ws-button-icon-spacing: var(--ws-spacing-sm, 8px);
    block-size: var(--ws-button-medium-height, 44px);
    font: var(--ws-typography-label-medium);
    padding: 0
      var(--ws-button-medium-padding-inline, var(--ws-spacing-lg, 16px));
  }

  :host([size='large']) .button {
    --ws-button-icon-size: var(--ws-button-large-icon-size, 20px);
    --ws-button-icon-spacing: var(
      --ws-button-large-icon-spacing,
      var(--ws-spacing-md, 12px)
    );
    block-size: var(--ws-button-large-height, 52px);
    font: var(--ws-typography-label-large);
    padding: 0 var(--ws-spacing-xl, 24px);
  }

  :host([icon-only]) .button {
    padding-inline: 0;
  }

  :host([icon-only][size='small']) .button {
    min-inline-size: var(--ws-button-small-height, 36px);
  }

  :host([icon-only][size='medium']) .button,
  :host([icon-only]:not([size])) .button {
    min-inline-size: var(--ws-button-medium-height, 44px);
  }

  :host([icon-only][size='large']) .button {
    min-inline-size: var(--ws-button-large-height, 52px);
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
    align-items: center;
    block-size: var(--ws-button-icon-size, 18px);
    display: inline-flex;
    flex: 0 0 var(--ws-button-icon-size, 18px);
    font-size: var(--ws-button-icon-size, 18px);
    inline-size: var(--ws-button-icon-size, 18px);
    justify-content: center;
    line-height: 1;
    min-inline-size: var(--ws-button-icon-size, 18px);
  }

  .icon ::slotted(svg) {
    block-size: var(--ws-button-icon-size, 18px);
    inline-size: var(--ws-button-icon-size, 18px);
  }

  :host([loading]) .icon {
    display: none;
  }

  .spinner {
    block-size: var(--ws-button-spinner-size, 18px);
    border: var(--ws-button-spinner-stroke-size, 2px) solid currentcolor;
    border-block-start-color: transparent;
    border-radius: var(--ws-shape-full, 999px);
    box-sizing: border-box;
    inline-size: var(--ws-button-spinner-size, 18px);
    animation: ws-button-spin var(--ws-motion-duration-extra-slow, 800ms) linear
      infinite;
  }

  @keyframes ws-button-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;var ft=function(t,s,e,r){for(var i,o=arguments.length,a=o<3?s:null===r?r=Object.getOwnPropertyDescriptor(s,e):r,n=t.length-1;n>=0;n--)(i=t[n])&&(a=(o<3?i(a):o>3?i(s,e,a):i(s,e))||a);return o>3&&a&&Object.defineProperty(s,e,a),a};let vt=class extends at{constructor(){super(...arguments),this.variant="primary",this.size="medium",this.disabled=!1,this.loading=!1,this.hasIcon=!1,this.hasLabel=!1,this.contentObserver=new MutationObserver(()=>{this.syncSlottedState()})}connectedCallback(){super.connectedCallback(),this.contentObserver.observe(this,{attributeFilter:["slot"],attributes:!0,childList:!0,subtree:!0}),this.syncSlottedState()}disconnectedCallback(){this.contentObserver.disconnect(),super.disconnectedCallback()}render(){const t=this.disabled||this.loading;return this.toggleAttribute("icon-only",this.hasIcon&&!this.hasLabel),F`
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
    `}renderContent(){return F`
      ${this.hasIcon?F`<span class="icon"><slot name="icon"></slot></span>`:W}
      ${this.hasLabel?F`<span class="label"><slot></slot></span>`:W}
    `}renderSpinner(){return F`<span class="spinner" aria-hidden="true"></span>`}syncSlottedState(){const t=null!==this.querySelector('[slot="icon"]'),s=Array.from(this.childNodes).some(t=>t.nodeType===Node.TEXT_NODE?Boolean(t.textContent?.trim()):t.nodeType===Node.ELEMENT_NODE&&"icon"!==t.getAttribute("slot"));this.hasIcon!==t&&(this.hasIcon=t),this.hasLabel!==s&&(this.hasLabel=s)}};vt.styles=wt,ft([ht({reflect:!0})],vt.prototype,"variant",void 0),ft([ht({reflect:!0})],vt.prototype,"size",void 0),ft([ht({type:Boolean,reflect:!0})],vt.prototype,"disabled",void 0),ft([ht({type:Boolean,reflect:!0})],vt.prototype,"loading",void 0),ft([ht({attribute:"aria-label"})],vt.prototype,"accessibleLabel",void 0),ft([ut()],vt.prototype,"hasIcon",void 0),ft([ut()],vt.prototype,"hasLabel",void 0),vt=ft([ct("ws-button")],vt);const bt=o`
  :host {
    font-family: var(--ws-font-family, 'Google Sans Flex', system-ui, sans-serif);
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
`,mt=o`
  :host {
    font-family: var(
      --ws-font-family,
      'Google Sans Flex',
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
        var(--ws-spacing-md, 12px) +
          (var(--ws-drawer-item-depth) * var(--ws-drawer-item-indent, 18px))
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
    box-shadow: 0 0 0 var(--ws-focus-ring-inner-size, 2px)
        var(--ws-color-surface, #ffffff),
      0 0 0 var(--ws-focus-ring-outer-size, 4px)
        var(--ws-color-primary, #6c5cff);
  }

  :host([disabled]) .item {
    cursor: not-allowed;
    opacity: 0.48;
  }

  :host([data-nested]) .item {
    border-radius: var(--ws-shape-small, 6px);
    min-block-size: var(--ws-drawer-nested-item-min-height, 36px);
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
    block-size: var(--ws-drawer-item-icon-size, 20px);
    font-size: var(--ws-drawer-item-icon-size, 20px);
    font-weight: normal;
    inline-size: var(--ws-drawer-item-icon-size, 20px);
    line-height: 1;
  }

  :host([data-nested]) .icon {
    block-size: var(--ws-drawer-nested-item-icon-size, 16px);
    font-size: var(--ws-drawer-nested-item-icon-size, 16px);
    inline-size: var(--ws-drawer-nested-item-icon-size, 16px);
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
    animation: ws-drawer-settings-spin var(--ws-motion-duration-slow, 240ms)
      var(--ws-motion-easing-emphasized, ease);
  }

  .bullet {
    background: currentcolor;
    block-size: var(--ws-drawer-bullet-size, 5px);
    border-radius: var(--ws-shape-full, 999px);
    inline-size: var(--ws-drawer-bullet-size, 5px);
    opacity: 0.55;
  }

  :host([selected]) .bullet {
    block-size: var(--ws-drawer-selected-bullet-size, 7px);
    inline-size: var(--ws-drawer-selected-bullet-size, 7px);
    opacity: 1;
  }

  .text {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--ws-drawer-item-text-gap, 1px);
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
    font: var(--ws-typography-body-medium);
    font-weight: 500;
  }

  :host([selected]) .title,
  :host([data-has-children]) .title {
    font-weight: 600;
  }

  :host([data-nested]) .title {
    font: var(--ws-typography-label-medium);
  }

  .subtitle {
    color: var(--ws-color-on-surface-variant, #64748b);
    font: var(--ws-typography-label-small);
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
    font: var(--ws-typography-label-small);
    font-weight: 700;
    padding: var(--ws-drawer-badge-padding-block, 2px) var(--ws-spacing-sm, 8px);
  }

  :host([selected]) .badge {
    background: color-mix(in srgb, currentcolor 18%, transparent);
    color: currentcolor;
  }

  .arrow {
    block-size: var(--ws-drawer-item-icon-size, 20px);
    inline-size: var(--ws-drawer-item-icon-size, 20px);
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
        var(--ws-motion-easing-emphasized, ease),
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
    block-size: var(--ws-drawer-progress-height, 4px);
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
`;var gt=function(t,s,e,r){for(var i,o=arguments.length,a=o<3?s:null===r?r=Object.getOwnPropertyDescriptor(s,e):r,n=t.length-1;n>=0;n--)(i=t[n])&&(a=(o<3?i(a):o>3?i(s,e,a):i(s,e))||a);return o>3&&a&&Object.defineProperty(s,e,a),a};let xt=class extends at{constructor(){super(...arguments),this.itemId="",this.title="",this.icon="",this.subtitle="",this.badge="",this.disabled=!1,this.expanded=!1,this.selected=!1,this.hasChildren=!1}connectedCallback(){super.connectedCallback(),this.updateTreeState()}render(){const t=this.getNestingLevel(),s=this.clampedProgress;return this.toggleAttribute("data-nested",t>0),this.toggleAttribute("data-has-children",this.hasChildren),this.style.setProperty("--ws-drawer-item-depth",String(t)),F`
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
          ${this.subtitle?F`<span class="subtitle">${this.subtitle}</span>`:W}
          ${void 0===s?W:this.renderProgress(s)}
        </div>

        ${this.badge?F`<span class="badge">${this.badge}</span>`:W}
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
    `}renderLeadingIcon(){const t=null!==this.querySelector('[slot="icon"]'),s=this.getNestingLevel()>0&&!this.icon&&!t;return this.icon||t?F`<span class="icon" aria-hidden="true"
        ><slot name="icon">${this.renderIconClass()}</slot></span
      >`:s?F`<span class="bullet" aria-hidden="true"></span>`:F`<span class="icon" aria-hidden="true"
      ><slot name="icon"></slot
    ></span>`}renderIconClass(){return this.icon?F`<i class=${this.icon} aria-hidden="true"></i>`:W}renderDisclosureIcon(){return F`
      <span class="arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            d="M12 15.5 5.5 9l1.4-1.4 5.1 5.1 5.1-5.1L18.5 9 12 15.5Z"
          ></path>
        </svg>
      </span>
    `}renderProgress(t){return F`
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
    `}onClick(t){t.stopPropagation(),this.activate()}onKeydown(t){switch(t.key){case"Enter":case" ":t.preventDefault(),this.activate();break;case"ArrowDown":t.preventDefault(),this.focusSibling(1);break;case"ArrowUp":t.preventDefault(),this.focusSibling(-1);break;case"ArrowRight":this.hasChildren&&!this.expanded&&(t.preventDefault(),this.expanded=!0);break;case"ArrowLeft":if(this.hasChildren&&this.expanded)return t.preventDefault(),void(this.expanded=!1);this.focusParentItem()&&t.preventDefault()}}focusSibling(t){const s=this.getVisibleDrawerItems(),e=s.indexOf(this),r=s[e+t];r?.focusItem()}focusParentItem(){const t=this.parentElement?.closest("ws-drawer-item");return!!t&&(t.focusItem(),!0)}focusItem(){this.shadowRoot?.querySelector(".item")?.focus()}getVisibleDrawerItems(){const t=this.closest("ws-drawer")??this.getRootNode();return Array.from(t.querySelectorAll("ws-drawer-item")).filter(t=>t.isVisibleDrawerItem())}isVisibleDrawerItem(){if(this.disabled)return!1;let t=this.parentElement?.closest("ws-drawer-item");for(;t;){if(!t.expanded)return!1;t=t.parentElement?.closest("ws-drawer-item")}return!0}activate(){this.disabled||(this.hasChildren?this.expanded=!this.expanded:("settings"===this.itemId&&this.animateSettingsIcon(),this.dispatchEvent(new CustomEvent("ws-drawer-item-activate",{bubbles:!0,composed:!0,detail:{itemId:this.itemId}}))))}animateSettingsIcon(){this.toggleAttribute("data-settings-spin",!1),window.requestAnimationFrame(()=>{this.toggleAttribute("data-settings-spin",!0),window.setTimeout(()=>{this.toggleAttribute("data-settings-spin",!1)},360)})}updateTreeState(){this.hasChildren=null!==this.querySelector("ws-drawer-item"),this.querySelectorAll("ws-drawer-item").forEach(t=>t.requestUpdate())}getNestingLevel(){let t=0,s=this.parentElement;for(;s;)"ws-drawer-item"===s.localName&&(t+=1),s=s.parentElement;return t}get clampedProgress(){if(void 0!==this.progress&&!Number.isNaN(this.progress))return Math.min(1,Math.max(0,this.progress))}};xt.styles=mt,gt([ht({attribute:"item-id"})],xt.prototype,"itemId",void 0),gt([ht()],xt.prototype,"title",void 0),gt([ht()],xt.prototype,"icon",void 0),gt([ht()],xt.prototype,"subtitle",void 0),gt([ht()],xt.prototype,"badge",void 0),gt([ht({type:Number})],xt.prototype,"progress",void 0),gt([ht({type:Boolean,reflect:!0})],xt.prototype,"disabled",void 0),gt([ht({type:Boolean,reflect:!0})],xt.prototype,"expanded",void 0),gt([ht({type:Boolean,reflect:!0})],xt.prototype,"selected",void 0),gt([ut()],xt.prototype,"hasChildren",void 0),xt=gt([ct("ws-drawer-item")],xt);var yt=function(t,s,e,r){for(var i,o=arguments.length,a=o<3?s:null===r?r=Object.getOwnPropertyDescriptor(s,e):r,n=t.length-1;n>=0;n--)(i=t[n])&&(a=(o<3?i(a):o>3?i(s,e,a):i(s,e))||a);return o>3&&a&&Object.defineProperty(s,e,a),a};let kt=class extends at{constructor(){super(...arguments),this.selectedItemId="",this.syncSelection=()=>{this.querySelectorAll("ws-drawer-item").forEach(t=>{t.toggleAttribute("selected",t.getAttribute("item-id")===this.selectedItemId)})},this.onItemActivate=t=>{t.stopPropagation();const{itemId:s}=t.detail;this.dispatchEvent(new CustomEvent("ws-drawer-item-click",{bubbles:!0,composed:!0,detail:{itemId:s}}))}}connectedCallback(){super.connectedCallback(),this.addEventListener("ws-drawer-item-activate",this.onItemActivate)}disconnectedCallback(){this.removeEventListener("ws-drawer-item-activate",this.onItemActivate),super.disconnectedCallback()}render(){return F`
      <aside class="drawer">
        <div class="header"><slot name="header"></slot></div>
        <nav class="content" aria-label="Drawer navigation">
          <slot @slotchange=${this.syncSelection}></slot>
        </nav>
        <div class="footer"><slot name="footer"></slot></div>
      </aside>
    `}updated(t){t.has("selectedItemId")&&this.syncSelection()}};kt.styles=bt,yt([ht({attribute:"selected-item-id"})],kt.prototype,"selectedItemId",void 0),kt=yt([ct("ws-drawer")],kt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const zt=1;let $t=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,e){this._$Ct=t,this._$AM=s,this._$Ci=e}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St="important",Ct=" !"+St,jt=(t=>(...s)=>({_$litDirective$:t,values:s}))(class extends $t{constructor(t){if(super(t),t.type!==zt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((s,e)=>{const r=t[e];return null==r?s:s+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[s]){const{style:e}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(s)),this.render(s);for(const t of this.ft)null==s[t]&&(this.ft.delete(t),t.includes("-")?e.removeProperty(t):e[t]=null);for(const t in s){const r=s[t];if(null!=r){this.ft.add(t);const s="string"==typeof r&&r.endsWith(Ct);t.includes("-")||s?e.setProperty(t,s?r.slice(0,-11):r,s?St:""):e[t]=r}}return R}}),At=o`
  :host {
    --ws-brand-mark-size: var(--ws-spacing-xxl, 32px);
    --ws-brand-mark-gradient: var(--ws-color-surface, #ffffff);
    color: var(--ws-color-on-surface, #0f172a);
    display: inline-block;
    font-family: var(
      --ws-font-family,
      'Google Sans Flex',
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
    color: var(--ws-color-primary, #6c5cff);
    display: inline-flex;
    flex: 0 0 auto;
    font-size: calc(var(--ws-brand-mark-size) * 0.42);
    font-weight: 900;
    inline-size: var(--ws-brand-mark-size);
    justify-content: center;
    letter-spacing: -0.04em;
    line-height: 1;
    overflow: hidden;
    padding: calc(var(--ws-brand-mark-size) * 0.08);
    user-select: none;
  }

  .logo {
    block-size: 100%;
    display: block;
    inline-size: 100%;
  }

  .text {
    display: grid;
    gap: calc(var(--ws-spacing-xs, 4px) / 2);
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
    font: var(--ws-typography-title-medium);
  }

  .subtitle {
    color: var(--ws-color-on-surface-variant, #64748b);
    font: var(--ws-typography-label-medium);
  }
`;var Ot=function(t,s,e,r){for(var i,o=arguments.length,a=o<3?s:null===r?r=Object.getOwnPropertyDescriptor(s,e):r,n=t.length-1;n>=0;n--)(i=t[n])&&(a=(o<3?i(a):o>3?i(s,e,a):i(s,e))||a);return o>3&&a&&Object.defineProperty(s,e,a),a};let _t=class extends at{constructor(){super(...arguments),this.markText="W",this.title="Workshop",this.subtitle="",this.size="48px",this.gradientColors=""}render(){const t={"--ws-brand-mark-size":this.size,...this.gradientColors?{"--ws-brand-mark-gradient":this.gradientValue}:{}};return F`
      <div class="root" style=${jt(t)}>
        <span class="mark" part="mark" aria-hidden="true">
          <slot name="mark">${this.renderDefaultMark()}</slot>
        </span>
        <span class="text">
          <slot>
            <span class="title" part="title">${this.title}</span>
            ${this.subtitle?F`<span class="subtitle" part="subtitle"
                  >${this.subtitle}</span
                >`:W}
          </slot>
        </span>
      </div>
    `}renderDefaultMark(){return"W"!==this.markText?this.markText:F`
      <svg
        class="logo"
        viewBox="0 0 100 100"
        focusable="false"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="wGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#AA42FF"></stop>
            <stop offset="50%" stop-color="#7066F5"></stop>
            <stop offset="100%" stop-color="#4B3BFF"></stop>
          </linearGradient>
          <linearGradient id="dotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FF94A5"></stop>
            <stop offset="100%" stop-color="#DE7283"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 18 25 L 34 76 L 50 55 L 66 76 L 82 25"
          fill="none"
          stroke="url(#wGrad)"
          stroke-width="20"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <circle cx="50" cy="28" r="10" fill="url(#dotGrad)"></circle>
      </svg>
    `}get gradientValue(){const t=this.gradientColors.split(",").map(t=>t.trim()).filter(Boolean);if(!(t.length<2))return`linear-gradient(135deg, ${t.join(", ")})`}};_t.styles=At,Ot([ht({attribute:"mark-text"})],_t.prototype,"markText",void 0),Ot([ht()],_t.prototype,"title",void 0),Ot([ht()],_t.prototype,"subtitle",void 0),Ot([ht()],_t.prototype,"size",void 0),Ot([ht({attribute:"gradient-colors"})],_t.prototype,"gradientColors",void 0),_t=Ot([ct("ws-brand-mark")],_t);const Et=o`
  :host {
    --ws-tabs-gap: var(--ws-spacing-xs, 4px);
    display: inline-flex;
    min-inline-size: 0;
  }

  :host([hidden]) {
    display: none;
  }

  .tabs {
    align-items: center;
    display: inline-flex;
    gap: var(--ws-tabs-gap);
    min-inline-size: 0;
  }
`;var Mt=function(t,s,e,r){for(var i,o=arguments.length,a=o<3?s:null===r?r=Object.getOwnPropertyDescriptor(s,e):r,n=t.length-1;n>=0;n--)(i=t[n])&&(a=(o<3?i(a):o>3?i(s,e,a):i(s,e))||a);return o>3&&a&&Object.defineProperty(s,e,a),a};let It=class extends at{render(){return F`
      <div
        class="tabs"
        part="tabs"
        role="tablist"
        aria-label=${pt(this.accessibleLabel)}
      >
        <slot></slot>
      </div>
    `}};It.styles=Et,Mt([ht({attribute:"aria-label"})],It.prototype,"accessibleLabel",void 0),It=Mt([ct("ws-tabs")],It);const Bt=o`
  :host {
    color: var(--ws-color-on-surface-variant, #64748b);
    display: inline-flex;
    font-family: var(
      --ws-font-family,
      'Google Sans Flex',
      system-ui,
      sans-serif
    );
  }

  :host([hidden]) {
    display: none;
  }

  .tab {
    align-items: center;
    border-radius: var(--ws-tab-radius, var(--ws-shape-medium, 8px));
    box-sizing: border-box;
    color: inherit;
    display: inline-flex;
    gap: var(--ws-spacing-sm, 8px);
    font: var(--ws-typography-label-medium);
    min-block-size: var(--ws-tab-height, 48px);
    padding: 0 var(--ws-spacing-lg, 16px);
    position: relative;
    text-align: center;
    text-decoration: none;
    outline: none;
    transition: background-color var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      color var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease);
  }

  .tab::after {
    background: var(--ws-color-primary, #6c5cff);
    block-size: var(--ws-tab-indicator-size, 3px);
    border-radius: var(
        --ws-tab-indicator-radius,
        var(--ws-shape-extra-small, 4px)
      )
      var(--ws-tab-indicator-radius, var(--ws-shape-extra-small, 4px)) 0 0;
    content: '';
    inset-block-end: var(--ws-spacing-sm, 8px);
    inset-inline: var(--ws-spacing-lg, 16px);
    position: absolute;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform var(--ws-motion-duration-slow, 240ms)
      var(--ws-motion-easing-standard, ease);
  }

  .tab:focus-visible {
    box-shadow: 0 0 0 var(--ws-focus-ring-inner-size, 2px)
        var(--ws-color-surface, #ffffff),
      0 0 0 var(--ws-focus-ring-outer-size, 4px)
        var(--ws-color-primary, #6c5cff);
  }

  .tab:hover {
    background: var(--ws-color-primary-container, #f5f3ff);
    color: var(--ws-color-primary, #6c5cff);
  }

  :host([selected]) {
    color: var(--ws-color-primary, #6c5cff);
  }

  :host([selected]) .tab {
    background: color-mix(
      in srgb,
      var(--ws-color-primary, #6c5cff) 12%,
      transparent
    );
  }

  :host([selected]) .tab::after {
    transform: scaleX(1);
  }

  .icon,
  ::slotted([slot='icon']) {
    align-items: center;
    display: inline-flex;
    font-size: 1em;
    justify-content: center;
    line-height: 1;
  }
`;var Lt=function(t,s,e,r){for(var i,o=arguments.length,a=o<3?s:null===r?r=Object.getOwnPropertyDescriptor(s,e):r,n=t.length-1;n>=0;n--)(i=t[n])&&(a=(o<3?i(a):o>3?i(s,e,a):i(s,e))||a);return o>3&&a&&Object.defineProperty(s,e,a),a};let Nt=class extends at{constructor(){super(...arguments),this.href="#",this.selected=!1,this.currentWhenSelected="page"}render(){return F`
      <a
        class="tab"
        part="tab"
        role="tab"
        href=${this.href}
        aria-selected=${this.selected?"true":"false"}
        aria-current=${pt(this.selected?this.currentWhenSelected:void 0)}
      >
        <slot name="icon">${W}</slot>
        <slot></slot>
      </a>
    `}};Nt.styles=Bt,Lt([ht()],Nt.prototype,"href",void 0),Lt([ht({type:Boolean,reflect:!0})],Nt.prototype,"selected",void 0),Lt([ht({attribute:"current-when-selected"})],Nt.prototype,"currentWhenSelected",void 0),Nt=Lt([ct("ws-tab")],Nt);const Tt=o`
  :host {
    color: var(
      --ws-breadcrumbs-color,
      var(--ws-color-on-surface-variant, #64748b)
    );
    display: block;
    font-family: var(--ws-font-family, 'Google Sans Flex', system-ui, sans-serif);
  }

  :host([hidden]) {
    display: none;
  }

  .breadcrumbs {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: var(--ws-spacing-xs, 4px);
  }

  .crumb {
    border-radius: var(--ws-shape-extra-small, 4px);
    color: inherit;
    font: var(--ws-typography-body-medium);
    font-weight: 500;
    padding: var(--ws-spacing-xs, 4px) var(--ws-spacing-sm, 8px);
    text-decoration: none;
  }

  a.crumb:hover {
    background: var(--ws-color-primary-container, #f5f3ff);
    color: var(--ws-color-primary, #6c5cff);
  }

  .crumb[aria-current='page'] {
    color: var(--ws-color-on-surface, #0f172a);
    font-weight: 600;
  }

  .separator {
    block-size: 16px;
    color: color-mix(in srgb, currentColor 50%, transparent);
    inline-size: 16px;
  }
`;var Pt=function(t,s,e,r){for(var i,o=arguments.length,a=o<3?s:null===r?r=Object.getOwnPropertyDescriptor(s,e):r,n=t.length-1;n>=0;n--)(i=t[n])&&(a=(o<3?i(a):o>3?i(s,e,a):i(s,e))||a);return o>3&&a&&Object.defineProperty(s,e,a),a};let Ut=class extends at{constructor(){super(...arguments),this.crumbs=[]}static get observedAttributes(){return[...super.observedAttributes,"crumbs"]}attributeChangedCallback(t,s,e){super.attributeChangedCallback(t,s,e),"crumbs"===t&&s!==e&&(this.crumbs=this.parseCrumbsAttribute(e))}render(){return 0===this.crumbs.length?W:F`
      <nav class="breadcrumbs" part="nav" aria-label="Breadcrumb">
        ${this.crumbs.map((t,s)=>this.renderCrumb(t,s))}
      </nav>
    `}parseCrumbsAttribute(t){if(!t)return[];try{const s=JSON.parse(t);return Array.isArray(s)?s.filter(t=>Boolean(t)&&"object"==typeof t).filter(t=>"string"==typeof t.id&&"string"==typeof t.label&&(void 0===t.href||"string"==typeof t.href)).map(t=>({id:t.id,label:t.label,href:t.href})):[]}catch{return[]}}renderCrumb(t,s){const e=s===this.crumbs.length-1,r=t.label,i=e?F`<span class="crumb" part="crumb" aria-current="page"
          >${r}</span
        >`:F`<a class="crumb" part="crumb" href=${t.href??"#"}
          >${r}</a
        >`;return F`
      ${i} ${e?W:this.renderSeparator()}
    `}renderSeparator(){return F`
      <svg
        class="separator"
        part="separator"
        viewBox="0 0 24 24"
        focusable="false"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="m13.172 12-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
        ></path>
      </svg>
    `}};Ut.styles=Tt,Pt([ht({attribute:!1})],Ut.prototype,"crumbs",void 0),Ut=Pt([ct("ws-breadcrumbs")],Ut);const Gt=o`
  :host {
    display: block;
    font-family: var(
      --ws-code-font-family,
      'Google Sans Code',
      ui-monospace,
      monospace
    );
    --ws-color-code-background: #ffffff;
    --ws-color-code-on-background: #0f172a;
    --ws-color-code-border: #e2e8f0;
    --ws-color-code-muted: #64748b;
    --ws-color-code-button: #f1f5f9;
    --ws-color-code-button-hover: #e2e8f0;
    --ws-color-code-token-comment: #64748b;
    --ws-color-code-token-keyword: #7c3aed;
    --ws-color-code-token-string: #047857;
    --ws-color-code-token-number: #c2410c;
    --ws-color-code-token-tag: #2563eb;
    --ws-color-code-token-attr: #be123c;
    --ws-color-code-token-punctuation: #475569;
    --ws-color-code-token-operator: #9333ea;
  }

  :host-context(:root[data-ws-theme='dark']),
  :host-context([data-ws-theme='dark']) {
    --ws-color-code-background: #0f172a;
    --ws-color-code-on-background: #f8fafc;
    --ws-color-code-border: rgb(255 255 255 / 12%);
    --ws-color-code-muted: rgb(255 255 255 / 68%);
    --ws-color-code-button: rgb(255 255 255 / 10%);
    --ws-color-code-button-hover: rgb(255 255 255 / 16%);
    --ws-color-code-token-comment: #94a3b8;
    --ws-color-code-token-keyword: #c4b5fd;
    --ws-color-code-token-string: #86efac;
    --ws-color-code-token-number: #fdba74;
    --ws-color-code-token-tag: #93c5fd;
    --ws-color-code-token-attr: #fda4af;
    --ws-color-code-token-punctuation: #cbd5e1;
    --ws-color-code-token-operator: #f0abfc;
  }

  :host([hidden]) {
    display: none;
  }

  .source {
    display: none;
  }

  .code-block {
    margin: 0;
    overflow: hidden;
    border: 1px solid var(--ws-color-code-border);
    border-radius: var(--ws-shape-large, 12px);
    background: var(--ws-color-code-background);
    box-shadow: var(--ws-elevation-sm, 0 1px 2px rgb(15 23 42 / 8%));
  }

  .header {
    min-height: var(--ws-code-block-header-height, 40px);
    padding: 0 var(--ws-spacing-md, 12px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--ws-color-code-border);
  }

  .language {
    color: var(--ws-color-code-muted);
    font: var(--ws-typography-label-small);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  pre {
    margin: 0;
    overflow: auto;
    padding: var(--ws-spacing-lg, 16px);
  }

  code {
    white-space: pre;
    color: var(--ws-color-code-on-background);
    font: var(--ws-typography-code);
  }

  .token.comment {
    color: var(--ws-color-code-token-comment);
  }
  .token.keyword {
    color: var(--ws-color-code-token-keyword);
  }
  .token.string {
    color: var(--ws-color-code-token-string);
  }
  .token.number {
    color: var(--ws-color-code-token-number);
  }
  .token.tag {
    color: var(--ws-color-code-token-tag);
  }
  .token.attr {
    color: var(--ws-color-code-token-attr);
  }
  .token.punctuation {
    color: var(--ws-color-code-token-punctuation);
  }
  .token.operator {
    color: var(--ws-color-code-token-operator);
  }

  .copy-button {
    border: 0;
    border-radius: var(--ws-shape-small, 6px);
    padding: var(--ws-code-copy-padding-block, var(--ws-spacing-xs, 4px))
      var(--ws-code-copy-padding-inline, var(--ws-spacing-md, 12px));
    cursor: pointer;
    color: var(--ws-color-code-on-background);
    background: var(--ws-color-code-button);
    font: var(--ws-typography-label-small);
    transition: background-color var(--ws-motion-duration-fast, 120ms)
        var(--ws-motion-easing-standard, ease),
      transform var(--ws-motion-duration-fast, 120ms)
        var(--ws-motion-easing-standard, ease);
  }

  .copy-button:focus-visible {
    outline: var(--ws-focus-ring-inner-size, 2px) solid
      var(--ws-color-code-on-background);
    outline-offset: var(--ws-spacing-xs, 4px);
  }

  .copy-button:hover {
    background: var(--ws-color-code-button-hover);
  }

  .copy-button:active {
    transform: scale(0.96);
  }
`;var Dt=function(t,s,e,r){for(var i,o=arguments.length,a=o<3?s:null===r?r=Object.getOwnPropertyDescriptor(s,e):r,n=t.length-1;n>=0;n--)(i=t[n])&&(a=(o<3?i(a):o>3?i(s,e,a):i(s,e))||a);return o>3&&a&&Object.defineProperty(s,e,a),a};let Ft=class extends at{constructor(){super(...arguments),this.language="text",this.code="",this.copy=!1,this.copied=!1,this.slottedCode=""}get displayCode(){return this.code||this.slottedCode}async copyCode(){const t=this.displayCode;if(t.trim())try{await navigator.clipboard.writeText(t),this.copied=!0,window.setTimeout(()=>{this.copied=!1},1400),this.dispatchEvent(new CustomEvent("ws-code-copy",{detail:{code:t},bubbles:!0,composed:!0}))}catch(t){console.error("Failed to copy code: ",t)}}render(){const t=this.displayCode;return F`
      <slot class="source" @slotchange=${this.syncSlottedCode}></slot>
      <figure class="code-block">
        <figcaption class="header">
          <span class="language">${this.language}</span>

          ${this.copy?F`
                <button
                  class="copy-button"
                  type="button"
                  @click=${this.copyCode}
                >
                  <span class="copy-label">
                    ${this.copied?"Copied":"Copy"}
                  </span>
                </button>
              `:W}
        </figcaption>

        <pre><code>${this.renderHighlightedCode(t)}</code></pre>
      </figure>
    `}renderHighlightedCode(t){return this.tokenize(t).map(t=>t.kind?F`<span class="token ${t.kind}">${t.text}</span>`:F`${t.text}`)}tokenize(t){return t?["html","xml","svg"].includes(this.language.toLowerCase())?this.tokenizeMarkup(t):["js","javascript","ts","typescript","css"].includes(this.language.toLowerCase())?this.tokenizeScript(t):[{text:t}]:[]}tokenizeMarkup(t){const s=[],e=/(<!--[\s\S]*?-->|<\/?[\w:-]+|\/?\s*>|[\w:-]+(?==)|"[^"]*"|'[^']*')/g;let r,i=0;for(;r=e.exec(t);){r.index>i&&s.push({text:t.slice(i,r.index)});const o=r[0];let a="punctuation";o.startsWith("\x3c!--")?a="comment":o.startsWith("<")?a="tag":o.startsWith('"')||o.startsWith("'")?a="string":/[<>]/.test(o)||(a="attr"),s.push({kind:a,text:o}),i=e.lastIndex}return i<t.length&&s.push({text:t.slice(i)}),s}tokenizeScript(t){const s=[],e=/(\/\*[\s\S]*?\*\/|\/\/.*|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|`(?:\\.|[^`])*`|\b(?:const|let|var|function|return|if|else|for|while|class|import|export|from|type|new|await|async|true|false|null|undefined)\b|\b\d+(?:\.\d+)?\b|[{}()[\].,;:]|[-+*/%=!<>|&?]+)/g;let r,i=0;for(;r=e.exec(t);){r.index>i&&s.push({text:t.slice(i,r.index)});const o=r[0];let a="operator";o.startsWith("//")||o.startsWith("/*")?a="comment":/^["'`]/.test(o)?a="string":/^\d/.test(o)?a="number":/^[{}()[\].,;:]$/.test(o)?a="punctuation":/^[a-z]/.test(o)&&(a="keyword"),s.push({kind:a,text:o}),i=e.lastIndex}return i<t.length&&s.push({text:t.slice(i)}),s}syncSlottedCode(){const t=this.codeNodes.map(t=>t.nodeType===Node.TEXT_NODE?t.textContent??"":t instanceof HTMLTemplateElement?t.innerHTML:t instanceof Element?t.outerHTML:"").join("").replace(/^\n|\n$/g,"");this.slottedCode!==t&&(this.slottedCode=t)}};Ft.styles=Gt,Dt([ht({type:String})],Ft.prototype,"language",void 0),Dt([ht({type:String})],Ft.prototype,"code",void 0),Dt([ht({type:Boolean,reflect:!0})],Ft.prototype,"copy",void 0),Dt([ut()],Ft.prototype,"copied",void 0),Dt([ut()],Ft.prototype,"slottedCode",void 0),Dt([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(s,e)=>{const{slot:r}=t??{},i="slot"+(r?`[name=${r}]`:":not([name])");return((t,s,e)=>(e.configurable=!0,e.enumerable=!0,e))(0,0,{get(){const s=this.renderRoot?.querySelector(i);return s?.assignedNodes(t)??[]}})}}({flatten:!0})],Ft.prototype,"codeNodes",void 0),Ft=Dt([ct("ws-code-block")],Ft);const Rt=o`
  :host {
    display: inline-flex;
    vertical-align: middle;
    --_track-width: var(--ws-switch-track-width, 52px);
    --_track-height: var(--ws-switch-track-height, 32px);
    --_handle-size: var(--ws-switch-handle-size, 24px);
  }

  :host([hidden]) {
    display: none;
  }

  .switch {
    border: 0;
    background: transparent;
    cursor: pointer;
    display: inline-flex;
    padding: var(--ws-switch-hit-area-padding, 4px);
    -webkit-tap-highlight-color: transparent;
  }

  :host([disabled]) .switch {
    cursor: not-allowed;
    opacity: 0.58;
  }

  .switch:focus-visible {
    outline: var(--ws-focus-ring-inner-size, 2px) solid
      var(--ws-color-primary, #6c5cff);
    outline-offset: var(--ws-spacing-xs, 4px);
    border-radius: 999px;
  }

  .track {
    position: relative;
    width: var(--_track-width);
    height: var(--_track-height);
    border: 2px solid var(--ws-color-outline, #e2e8f0);
    border-radius: 999px;
    background: var(--ws-color-surface-variant, #f1f5f9);
    transition: background-color var(--ws-motion-duration-medium, 220ms)
        var(--ws-motion-easing-standard, ease),
      border-color var(--ws-motion-duration-medium, 220ms)
        var(--ws-motion-easing-standard, ease);
  }

  .handle {
    position: absolute;
    inset-block-start: 2px;
    inset-inline-start: 2px;
    width: var(--_handle-size);
    height: var(--_handle-size);
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: var(--ws-color-primary, #6c5cff);
    background: var(--ws-color-surface, #ffffff);
    box-shadow: 0 2px 6px rgb(15 23 42 / 24%);
    transition: transform var(--ws-motion-duration-medium, 260ms)
        cubic-bezier(0.2, 0, 0, 1),
      color var(--ws-motion-duration-fast, 120ms)
        var(--ws-motion-easing-standard, ease);
  }

  :host([checked]) .track {
    border-color: var(--ws-color-primary, #6c5cff);
    background: var(--ws-color-primary-container, #f5f3ff);
  }

  :host([checked]) .handle {
    transform: translateX(
      calc(var(--_track-width) - var(--_handle-size) - 8px)
    );
  }

  .checked-icon,
  .unchecked-icon {
    grid-area: 1 / 1;
    display: inline-grid;
    place-items: center;
    font-size: var(--ws-switch-icon-size, 16px);
    line-height: 1;
  }

  :host(:not([checked])) .checked-icon,
  :host([checked]) .unchecked-icon {
    display: none;
  }
`;var Wt=function(t,s,e,r){for(var i,o=arguments.length,a=o<3?s:null===r?r=Object.getOwnPropertyDescriptor(s,e):r,n=t.length-1;n>=0;n--)(i=t[n])&&(a=(o<3?i(a):o>3?i(s,e,a):i(s,e))||a);return o>3&&a&&Object.defineProperty(s,e,a),a};let Ht=class extends at{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}render(){return F`
      <button
        class="switch"
        part="button"
        type="button"
        role="switch"
        aria-checked=${this.checked?"true":"false"}
        aria-label=${pt(this.accessibleLabel)}
        ?disabled=${this.disabled}
        @click=${this.toggleChecked}
      >
        <span class="track" part="track" aria-hidden="true">
          <span class="handle" part="handle">
            <span class="unchecked-icon"
              ><slot name="unchecked-icon"></slot
            ></span>
            <span class="checked-icon"><slot name="checked-icon"></slot></span>
          </span>
        </span>
      </button>
    `}toggleChecked(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}};Ht.styles=Rt,Wt([ht({type:Boolean,reflect:!0})],Ht.prototype,"checked",void 0),Wt([ht({type:Boolean,reflect:!0})],Ht.prototype,"disabled",void 0),Wt([ht({attribute:"aria-label"})],Ht.prototype,"accessibleLabel",void 0),Ht=Wt([ct("ws-switch")],Ht);
