import{r as t,h as e,F as r,g as o}from"./p-db3a8ca7.js";import{g as a,a as n}from"./p-786cd6dc.js";import{s as i}from"./p-726d9019.js";const d=class{constructor(e){t(this,e),this.css=JSON.stringify({})}componentDidLoad(){Object.assign(this.host.style,{...JSON.parse(this.css)}),i(this.host,this.events),this.operations=a(this.name)}render(){return e(r,null,e("div",{class:"dropdown dropdown-click"},e("jsc-button",{tabindex:"0",label:this.label,...n(this.buttonProps)}),e("ul",{tabindex:"0",class:"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"},n(this.items).map((t=>e("li",null,e("a",{href:t.href,target:t.target},t.label)))))))}get host(){return o(this)}};d.style='/*! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}html{-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}:root,[data-theme]{background-color:hsla(var(--b1)/var(--tw-bg-opacity,1));color:hsla(var(--bc)/var(--tw-text-opacity,1))}:root,[data-theme=corporate]{--p:229 96% 64%;--pf:229 96% 51%;--sf:215 26% 47%;--af:154 49% 48%;--nf:233 27% 10%;--b2:0 0% 90%;--b3:0 0% 81%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--pc:229 100% 93%;--sc:215 100% 12%;--ac:154 100% 12%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--btn-text-case:uppercase;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:215 26% 59%;--a:154 49% 60%;--n:233 27% 13%;--nc:210 38% 95%;--b1:0 0% 100%;--bc:233 27% 13%;--rounded-box:0.25rem;--rounded-btn:.125rem;--rounded-badge:.125rem;--animation-btn:0;--animation-input:0;--btn-focus-scale:1}[data-theme=garden]{--p:139 16% 43%;--pf:139 16% 34%;--sf:97 37% 75%;--af:0 68% 75%;--nf:0 4% 28%;--b2:0 4% 82%;--b3:0 4% 74%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--pc:139 100% 89%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:97 37% 93%;--sc:96 32% 15%;--a:0 68% 94%;--ac:0 22% 16%;--n:0 4% 35%;--nc:0 4% 91%;--b1:0 4% 91%;--bc:0 3% 6%}[data-theme=pastel]{--p:284 22% 80%;--pf:284 22% 64%;--sf:352 70% 70%;--af:158 55% 65%;--nf:199 44% 49%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--bc:0 0% 20%;--pc:284 59% 16%;--sc:352 100% 18%;--ac:158 100% 16%;--nc:199 100% 12%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:352 70% 88%;--a:158 55% 81%;--n:199 44% 61%;--b1:0 0% 100%;--b2:210 20% 98%;--b3:216 12% 84%;--rounded-btn:1.9rem}[data-theme=greenheart]{--p:151 55% 42%;--pf:151 55% 33%;--sf:53 92% 40%;--af:146 38% 55%;--nf:153 67% 23%;--b3:150 17% 88%;--bc:150 4% 20%;--pc:151 100% 8%;--sc:53 100% 10%;--ac:146 100% 14%;--inc:193 100% 14%;--suc:167 100% 13%;--wac:24 100% 90%;--erc:336 100% 92%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:53 92% 50%;--a:146 38% 69%;--n:153 67% 28%;--b1:150 33% 99%;--b2:150 17% 98%;--in:193 97% 70%;--su:167 65% 66%;--wa:24 94% 50%;--er:336 80% 58%;--nc:139 57% 95%;--card-border:#d7dcda}[data-theme=nexus]{--p:206 100% 50%;--pf:206 100% 40%;--sf:292 45% 41%;--af:226 55% 36%;--nf:211 100% 35%;--b3:210 17% 88%;--bc:210 4% 20%;--pc:206 100% 90%;--sc:292 100% 90%;--ac:226 100% 89%;--inc:226 100% 91%;--suc:131 100% 9%;--wac:53 100% 10%;--erc:358 100% 92%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:292 45% 51%;--a:226 55% 45%;--n:211 100% 43%;--b1:210 33% 99%;--b2:210 17% 98%;--in:226 70% 55%;--su:131 41% 46%;--wa:53 92% 50%;--er:358 75% 59%;--nc:210 100% 96%;--card-border:#d7dbdf}[data-theme=slate]{--p:206 6% 56%;--pf:206 6% 45%;--sf:292 45% 41%;--af:252 56% 46%;--nf:206 6% 35%;--b3:210 100% 88%;--bc:206 9% 20%;--sc:292 100% 90%;--ac:252 100% 92%;--inc:226 100% 91%;--suc:131 100% 9%;--wac:53 100% 10%;--erc:358 100% 92%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:292 45% 51%;--a:252 56% 58%;--n:206 6% 44%;--b1:206 100% 99%;--b2:210 100% 98%;--in:226 70% 56%;--su:131 41% 47%;--wa:53 92% 50%;--er:358 75% 59%;--nc:209 13% 95%;--pc:209 13% 95%;--card-border:#96c7f2}[data-theme=slateDark]{--p:206 6% 44%;--pf:206 6% 35%;--sf:292 45% 41%;--af:252 56% 46%;--nf:206 6% 50%;--b3:216 50% 11%;--bc:212 39% 82%;--sc:292 100% 90%;--ac:252 100% 92%;--inc:226 100% 91%;--suc:131 100% 9%;--wac:53 100% 10%;--erc:358 100% 92%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:292 45% 51%;--a:252 56% 58%;--n:206 6% 63%;--b1:212 35% 9%;--b2:216 50% 12%;--in:226 70% 56%;--su:131 41% 47%;--wa:53 92% 50%;--er:358 75% 59%;--nc:197 7% 14%;--pc:197 7% 14%;--card-border:#0a4481}[data-theme=nexusDark]{--p:206 100% 50%;--pf:206 100% 40%;--sf:292 45% 41%;--af:252 56% 46%;--nf:210 100% 53%;--b3:195 7% 10%;--bc:200 7% 82%;--pc:206 100% 90%;--sc:292 100% 90%;--ac:252 100% 92%;--inc:226 100% 91%;--suc:131 100% 9%;--wac:53 100% 10%;--erc:358 100% 92%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:292 45% 51%;--a:252 56% 58%;--n:210 100% 66%;--b1:200 7% 9%;--b2:195 7% 11%;--in:226 70% 56%;--su:131 41% 47%;--wa:53 92% 50%;--er:358 75% 59%;--nc:214 59% 15%;--card-border:#3a3f42}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.visible{visibility:visible}.static{position:static}.w-52{width:13rem}.bg-base-100{--tw-bg-opacity:1;background-color:hsl(var(--b1)/var(--tw-bg-opacity))}.p-2{padding:.5rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.btm-nav{--tw-bg-opacity:1;background-color:hsl(var(--b1)/var(--tw-bg-opacity));bottom:0;color:currentColor;flex-direction:row;height:4rem;justify-content:space-around;left:0;position:fixed;right:0;width:100%}.btm-nav,.btm-nav>*{align-items:center;display:flex}.btm-nav>*{border-color:currentColor;cursor:pointer;flex-basis:100%;flex-direction:column;gap:.25rem;height:100%;justify-content:center}.btm-nav>*,.dropdown{position:relative}.dropdown{display:inline-block}.dropdown>:focus{outline:2px solid transparent;outline-offset:2px}.dropdown .dropdown-content{--tw-scale-x:.95;--tw-scale-y:.95;opacity:0;position:absolute;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform-origin:top;transition-duration:.2s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);visibility:hidden;z-index:50}.dropdown-end .dropdown-content{right:0}.dropdown-left .dropdown-content{bottom:auto;right:100%;top:0;transform-origin:right}.dropdown-right .dropdown-content{bottom:auto;left:100%;top:0;transform-origin:left}.dropdown-top .dropdown-content{bottom:100%;top:auto;transform-origin:bottom}.dropdown-end.dropdown-left .dropdown-content,.dropdown-end.dropdown-right .dropdown-content{bottom:0;top:auto}.dropdown.dropdown-hover:hover .dropdown-content,.dropdown.dropdown-open .dropdown-content,.dropdown:not(.dropdown-hover):focus .dropdown-content,.dropdown:not(.dropdown-hover):focus-within .dropdown-content{opacity:1;visibility:visible}.label{align-items:center;justify-content:space-between;padding:.5rem .25rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.label,.menu{display:flex}.menu{flex-direction:column;flex-wrap:wrap}.menu.horizontal{display:inline-flex;flex-direction:row}.menu.horizontal :where(li){flex-direction:row}.menu :where(li){align-items:stretch;display:flex;flex-direction:column;flex-shrink:0;flex-wrap:wrap;position:relative}.menu :where(li:not(.menu-title))>:where(:not(ul)){display:flex}.menu :where(li:not(.disabled):not(.menu-title))>:where(:not(ul)){align-items:center;cursor:pointer;outline:2px solid transparent;outline-offset:2px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.menu>:where(li>:not(ul):focus){outline:2px solid transparent;outline-offset:2px}.menu>:where(li.disabled>:not(ul):focus){cursor:auto}.menu>:where(li) :where(ul){align-items:stretch;display:flex;flex-direction:column}.menu>:where(li)>:where(ul){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top-left-radius:inherit;border-top-right-radius:inherit;display:none;left:100%;position:absolute;top:auto}.menu>:where(li:hover)>:where(ul){display:flex}.menu>:where(li:focus)>:where(ul){display:flex}.btm-nav>:where(.active){--tw-bg-opacity:1;background-color:hsl(var(--b1)/var(--tw-bg-opacity));border-top-width:2px}.btm-nav>.disabled,.btm-nav>.disabled:hover,.btm-nav>[disabled],.btm-nav>[disabled]:hover{--tw-border-opacity:0;--tw-bg-opacity:0.1;--tw-text-opacity:0.2;background-color:hsl(var(--n)/var(--tw-bg-opacity));color:hsl(var(--bc)/var(--tw-text-opacity));pointer-events:none}.btm-nav>* .label{font-size:1rem;line-height:1.5rem}.card.bordered{--tw-border-opacity:1;border-color:hsl(var(--b2,var(--b1))/var(--tw-border-opacity));border-width:1px}.card.compact .card-body{font-size:.875rem;line-height:1.25rem;padding:1rem}.dropdown.dropdown-hover:hover .dropdown-content,.dropdown.dropdown-open .dropdown-content,.dropdown:focus .dropdown-content,.dropdown:focus-within .dropdown-content{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.label a:hover{--tw-text-opacity:1;color:hsl(var(--bc)/var(--tw-text-opacity))}.menu.horizontal li.bordered>a,.menu.horizontal li.bordered>button,.menu.horizontal li.bordered>span{--tw-border-opacity:1;border-bottom-width:4px;border-color:hsl(var(--p)/var(--tw-border-opacity));border-left-width:0}.menu[class*=" p-"] li>*,.menu[class^=p-] li>*{border-radius:var(--rounded-btn,.5rem)}.menu :where(li.bordered>*){--tw-border-opacity:1;border-color:hsl(var(--p)/var(--tw-border-opacity));border-left-width:4px}.menu :where(li)>:where(:not(ul)){color:currentColor;gap:.75rem;padding:.75rem 1rem}.menu :where(li:not(.menu-title):not(:empty))>:where(:not(ul):focus),.menu :where(li:not(.menu-title):not(:empty))>:where(:not(ul):hover){--tw-bg-opacity:0.1;background-color:hsl(var(--bc)/var(--tw-bg-opacity))}.menu :where(li:not(.menu-title):not(:empty))>:where(:not(ul).active),.menu :where(li:not(.menu-title):not(:empty))>:where(:not(ul):active){--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--p)/var(--tw-bg-opacity));color:hsl(var(--pc)/var(--tw-text-opacity))}.menu :where(li:empty){--tw-bg-opacity:0.1;background-color:hsl(var(--bc)/var(--tw-bg-opacity));height:1px;margin:.5rem 1rem}.menu li.disabled>*{--tw-text-opacity:0.2;color:hsl(var(--bc)/var(--tw-text-opacity));-webkit-user-select:none;-moz-user-select:none;user-select:none}.menu li.disabled>:hover{background-color:transparent}.menu li.hover-bordered a{border-color:transparent;border-left-width:4px}.menu li.hover-bordered a:hover{--tw-border-opacity:1;border-color:hsl(var(--p)/var(--tw-border-opacity))}.menu.compact li>a,.menu.compact li>span{font-size:.875rem;line-height:1.25rem;padding-bottom:.5rem;padding-top:.5rem}.menu .menu-title>*{--tw-text-opacity:0.4;color:hsl(var(--bc)/var(--tw-text-opacity));font-size:.75rem;font-weight:700;line-height:1rem;padding-bottom:.25rem;padding-top:.25rem}.menu :where(li:not(.disabled))>:where(:not(ul)){outline:2px solid transparent;outline-offset:2px;transition-duration:.2s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.menu>:where(li:first-child){border-bottom-left-radius:unset;border-bottom-right-radius:unset;border-top-left-radius:inherit;border-top-right-radius:inherit}.menu>:where(li:first-child)>:where(:not(ul)){border-bottom-left-radius:unset;border-bottom-right-radius:unset;border-top-left-radius:inherit;border-top-right-radius:inherit}.menu>:where(li:last-child){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top-left-radius:unset;border-top-right-radius:unset}.menu>:where(li:last-child)>:where(:not(ul)){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top-left-radius:unset;border-top-right-radius:unset}.menu>:where(li)>:where(ul) :where(li){white-space:nowrap;width:100%}.menu>:where(li)>:where(ul) :where(li) :where(ul){padding-left:1rem}.menu>:where(li)>:where(ul) :where(li)>:where(:not(ul)){white-space:nowrap;width:100%}.menu>:where(li)>:where(ul)>:where(li:first-child){border-bottom-left-radius:unset;border-bottom-right-radius:unset;border-top-left-radius:inherit;border-top-right-radius:inherit}.menu>:where(li)>:where(ul)>:where(li:first-child)>:where(:not(ul)){border-bottom-left-radius:unset;border-bottom-right-radius:unset;border-top-left-radius:inherit;border-top-right-radius:inherit}.menu>:where(li)>:where(ul)>:where(li:last-child){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top-left-radius:unset;border-top-right-radius:unset}.menu>:where(li)>:where(ul)>:where(li:last-child)>:where(:not(ul)){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top-left-radius:unset;border-top-right-radius:unset}.table tr.active td,.table tr.active th,.table tr.active:nth-child(2n) td,.table tr.active:nth-child(2n) th{--tw-bg-opacity:1;background-color:hsl(var(--b3,var(--b2))/var(--tw-bg-opacity))}.rounded-box{border-radius:var(--rounded-box,1rem)}.artboard.phone-1.artboard-horizontal,.artboard.phone-1.horizontal{height:320px;width:568px}.artboard.phone-2.artboard-horizontal,.artboard.phone-2.horizontal{height:375px;width:667px}.artboard.phone-3.artboard-horizontal,.artboard.phone-3.horizontal{height:414px;width:736px}.artboard.phone-4.artboard-horizontal,.artboard.phone-4.horizontal{height:375px;width:812px}.artboard.phone-5.artboard-horizontal,.artboard.phone-5.horizontal{height:414px;width:896px}.artboard.phone-6.artboard-horizontal,.artboard.phone-6.horizontal{height:320px;width:1024px}.btm-nav-xs>:where(.active){border-top-width:1px}.btm-nav-sm>:where(.active){border-top-width:2px}.btm-nav-md>:where(.active){border-top-width:2px}.btm-nav-lg>:where(.active){border-top-width:4px}.menu-vertical :where(li.bordered>*){border-bottom-width:0;border-left-width:4px}.menu-horizontal :where(li.bordered>*){border-bottom-width:4px;border-left-width:0}:host{box-sizing:border-box;display:block}@keyframes spin{to{transform:rotate(1turn)}}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale,.95))}40%{transform:scale(1.02)}}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}}@keyframes progress-loading{50%{left:107%}}@keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset}}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}}@keyframes toast-pop{0%{opacity:0;transform:scale(.9)}}';export{d as jsc_dropdown}