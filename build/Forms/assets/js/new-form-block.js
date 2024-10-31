(()=>{"use strict";var e,t={72:(e,t,o)=>{const n=window.wp.blocks;var r=o(609);const l=window.wp.i18n,i=window.wp.blockEditor,a=window.wp.components,c=window.wp.data,s=window.wp.primitives;var p=o(848);const m=(0,p.jsx)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,p.jsx)(s.Path,{d:"M15.5 9.5a1 1 0 100-2 1 1 0 000 2zm0 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-2.25 6v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM9.5 8.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",fillRule:"evenodd"})}),d=[["core/heading",{placeholder:(0,l.__)("Write Form title…","newsletter-optin-box"),className:"noptin_form_title"}],["core/paragraph",{placeholder:(0,l.__)("Write Form Description","newsletter-optin-box"),className:"noptin_form_description"}]],u=JSON.parse('{"UU":"noptin/email-optin"}'),_=[{attributes:{title:{type:"string",source:"rich-text",selector:"h2",default:(0,l.__)("JOIN OUR NEWSLETTER","newsletter-optin-box")},description:{type:"string",source:"rich-text",default:(0,l.__)("Click the above title to edit it. You can also edit this section by clicking on it.","newsletter-optin-box"),selector:".noptin_form_description"},button:{type:"string",default:"SUBSCRIBE"},bg_color:{type:"string",default:"#eeeeee"},title_color:{type:"string",default:"#313131"},text_color:{type:"string",default:"#32373c"},button_color:{type:"string",default:"#313131"},button_text_color:{type:"string",default:"#fafafa"},redirect:{type:"string"}},supports:{anchor:!0,align:!0,background:{backgroundImage:!0,backgroundSize:!0},dimensions:{minHeight:!0},html:!1,shadow:!0,spacing:{padding:!0,margin:!0}},save({attributes:e}){const t=i.useBlockProps.save({style:{backgroundColor:e.bg_color,padding:"20px",color:e.text_color}});return(0,r.createElement)("div",{...t},(0,r.createElement)("form",null,(0,r.createElement)(i.RichText.Content,{tagName:"h2",style:{color:e.title_color,textAlign:"center"},value:e.title,className:"noptin_form_title"}),(0,r.createElement)(i.RichText.Content,{tagName:"p",style:{textAlign:"center"},value:e.description,className:"noptin_form_description"}),(0,r.createElement)("input",{type:"email",className:"noptin_form_input_email",placeholder:"Email Address",required:!0}),(0,r.createElement)("input",{value:e.button,type:"submit",style:{backgroundColor:e.button_color,color:e.button_text_color},className:"noptin_form_submit"}),(0,r.createElement)("input",{value:e.redirect,type:"hidden",className:"noptin_form_redirect"}),(0,r.createElement)("div",{style:{border:"1px solid rgba(6, 147, 227, 0.8)",display:"none",padding:"10px",marginTop:"10px"},className:"noptin_feedback_success"}),(0,r.createElement)("div",{style:{border:"1px solid rgba(227, 6, 37, 0.8)",display:"none",padding:"10px",marginTop:"10px"},className:"noptin_feedback_error"})))},migrate(e,t){const{title:o,description:r,bg_color:i,title_color:a,text_color:c,button_color:s,button_text_color:p,style:m,...d}=e;return[{...d,style:{...m||{},color:{...m?.color,text:c,background:i},elements:{...m?.elements,button:{...m?.elements?.button,color:{...m?.elements?.button?.color,text:p,background:s}}}}},[(0,n.createBlock)("core/heading",{content:e.title,textAlign:"center",placeholder:(0,l.__)("Write Form title…","newsletter-optin-box"),className:"noptin_form_title",style:{color:{text:a}}}),(0,n.createBlock)("core/paragraph",{content:e.description,textAlign:"center",placeholder:(0,l.__)("Write Form Description","newsletter-optin-box"),className:"noptin_form_description"}),...t]]}}];(0,n.registerBlockType)(u.UU,{edit:({attributes:e,setAttributes:t,clientId:o})=>{const s=(0,i.useBlockProps)(),{replaceBlock:p}=(0,c.useDispatch)(i.store);return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(i.InspectorControls,null,(0,r.createElement)(a.PanelBody,{title:(0,l.__)("Button Text","newsletter-optin-box")},(0,r.createElement)(a.__experimentalInputControl,{label:(0,l.__)("Button Text","newsletter-optin-box"),value:e.button||"",onChange:e=>t({button:e}),__next40pxDefaultSize:!0,hideLabelFromVision:!0})),(0,r.createElement)(a.PanelBody,{title:(0,l.__)("Redirect Url","newsletter-optin-box"),initialOpen:!1},(0,r.createElement)(a.__experimentalInputControl,{label:(0,l.__)("Redirect Url","newsletter-optin-box"),value:e.redirect||"",onChange:e=>t({redirect:e}),help:(0,l.__)("Optional. Where should we redirect users after they have successfully signed up?","newsletter-optin-box"),type:"url",placeholder:"http://example.com/download/gift.pdf",__next40pxDefaultSize:!0,hideLabelFromVision:!0}))),(0,r.createElement)(i.BlockControls,null,(0,r.createElement)(a.ToolbarGroup,null,(0,r.createElement)(a.ToolbarButton,{icon:m,title:(0,l.__)("Use an existing form","newsletter-optin-box"),onClick:function(){p(o,(0,n.createBlock)("noptin/form",{form:"0"}))}}))),(0,r.createElement)("div",{...s},(0,r.createElement)("form",null,(0,r.createElement)("div",{className:"noptin-block-form-header"},(0,r.createElement)(i.InnerBlocks,{template:d})),(0,r.createElement)("div",{className:"noptin-block-form-footer",style:{pointerEvents:"none"}},(0,r.createElement)("input",{type:"email",className:"noptin_form_input_email",placeholder:"Email Address",name:"noptin_fields[email]",required:!0}),(0,r.createElement)("input",{value:e.button,type:"submit",className:"noptin_form_submit wp-element-button"})))))},save:({attributes:e})=>(0,r.createElement)("div",{...i.useBlockProps.save()},(0,r.createElement)("form",null,(0,r.createElement)("div",{className:"noptin-block-form-header"},(0,r.createElement)(i.InnerBlocks.Content,null)),(0,r.createElement)("div",{className:"noptin-block-form-footer"},(0,r.createElement)("input",{type:"email",className:"noptin_form_input_email",placeholder:"Email Address",name:"noptin_fields[email]",required:!0}),(0,r.createElement)("input",{value:e.button,type:"submit",className:"noptin_form_submit wp-element-button"})),e.redirect&&(0,r.createElement)("input",{value:e.redirect,type:"hidden",className:"noptin_form_redirect"}),(0,r.createElement)("div",{className:"noptin-form-notice noptin-response",role:"alert"}),(0,r.createElement)("input",{type:"hidden",name:"source",value:"block"}))),deprecated:_})},20:(e,t,o)=>{var n=o(609),r=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,o){var n,c={},s=null,p=null;for(n in void 0!==o&&(s=""+o),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(p=t.ref),t)l.call(t,n)&&!a.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:r,type:e,key:s,ref:p,props:c,_owner:i.current}}},848:(e,t,o)=>{e.exports=o(20)},609:e=>{e.exports=window.React}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,o,r,l)=>{if(!o){var i=1/0;for(p=0;p<e.length;p++){o=e[p][0],r=e[p][1],l=e[p][2];for(var a=!0,c=0;c<o.length;c++)(!1&l||i>=l)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(a=!1,l<i&&(i=l));if(a){e.splice(p--,1);var s=r();void 0!==s&&(t=s)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[o,r,l]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={27:0,151:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,l,i=o[0],a=o[1],c=o[2],s=0;if(i.some((t=>0!==e[t]))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var p=c(n)}for(t&&t(o);s<i.length;s++)l=i[s],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(p)},o=self.webpackChunknoptin_premium=self.webpackChunknoptin_premium||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[151],(()=>n(72)));r=n.O(r)})();