import{a as t,b as n}from"./p-726d9019.js";import{r}from"./p-786cd6dc.js";var e=t((function(t){t.exports=function(){var t=6e4,n=36e5,r="millisecond",e="second",i="minute",u="hour",s="day",a="week",h="month",c="quarter",o="year",f="date",d="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,M=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l=function(t,n,r){var e=String(t);return!e||e.length>=n?t:""+Array(n+1-e.length).join(r)+t},D={s:l,z:function(t){var n=-t.utcOffset(),r=Math.abs(n),e=Math.floor(r/60),i=r%60;return(n<=0?"+":"-")+l(e,2,"0")+":"+l(i,2,"0")},m:function t(n,r){if(n.date()<r.date())return-t(r,n);var e=12*(r.year()-n.year())+(r.month()-n.month()),i=n.clone().add(e,h),u=r-i<0,s=n.clone().add(e+(u?-1:1),h);return+(-(e+(r-i)/(u?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:h,y:o,w:a,d:s,D:f,h:u,m:i,s:e,ms:r,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",w={};w[g]=m;var y=function(t){return t instanceof $},S=function t(n,r,e){var i;if(!n)return g;if("string"==typeof n){var u=n.toLowerCase();w[u]&&(i=u),r&&(w[u]=r,i=u);var s=n.split("-");if(!i&&s.length>1)return t(s[0])}else{var a=n.name;w[a]=n,i=a}return!e&&i&&(g=i),i||!e&&g},_=function(t,n){if(y(t))return t.clone();var r="object"==typeof n?n:{};return r.date=t,r.args=arguments,new $(r)},Y=D;Y.l=S,Y.i=y,Y.w=function(t,n){return _(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var $=function(){function m(t){this.$L=S(t.locale,null,!0),this.parse(t)}var l=m.prototype;return l.parse=function(t){this.$d=function(t){var n=t.date,r=t.utc;if(null===n)return new Date(NaN);if(Y.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var e=n.match(v);if(e){var i=e[2]-1||0,u=(e[7]||"0").substring(0,3);return r?new Date(Date.UTC(e[1],i,e[3]||1,e[4]||0,e[5]||0,e[6]||0,u)):new Date(e[1],i,e[3]||1,e[4]||0,e[5]||0,e[6]||0,u)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return Y},l.isValid=function(){return!(this.$d.toString()===d)},l.isSame=function(t,n){var r=_(t);return this.startOf(n)<=r&&r<=this.endOf(n)},l.isAfter=function(t,n){return _(t)<this.startOf(n)},l.isBefore=function(t,n){return this.endOf(n)<_(t)},l.$g=function(t,n,r){return Y.u(t)?this[n]:this.set(r,t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,n){var r=this,c=!!Y.u(n)||n,d=Y.p(t),v=function(t,n){var e=Y.w(r.$u?Date.UTC(r.$y,n,t):new Date(r.$y,n,t),r);return c?e:e.endOf(s)},M=function(t,n){return Y.w(r.toDate()[t].apply(r.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(n)),r)},m=this.$W,l=this.$M,D=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case o:return c?v(1,0):v(31,11);case h:return c?v(1,l):v(0,l+1);case a:var w=this.$locale().weekStart||0,y=(m<w?m+7:m)-w;return v(c?D-y:D+(6-y),l);case s:case f:return M(g+"Hours",0);case u:return M(g+"Minutes",1);case i:return M(g+"Seconds",2);case e:return M(g+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(t,n){var a,c=Y.p(t),d="set"+(this.$u?"UTC":""),v=(a={},a[s]=d+"Date",a[f]=d+"Date",a[h]=d+"Month",a[o]=d+"FullYear",a[u]=d+"Hours",a[i]=d+"Minutes",a[e]=d+"Seconds",a[r]=d+"Milliseconds",a)[c],M=c===s?this.$D+(n-this.$W):n;if(c===h||c===o){var m=this.clone().set(f,1);m.$d[v](M),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else v&&this.$d[v](M);return this.init(),this},l.set=function(t,n){return this.clone().$set(t,n)},l.get=function(t){return this[Y.p(t)]()},l.add=function(r,c){var f,d=this;r=Number(r);var v=Y.p(c),M=function(t){var n=_(d);return Y.w(n.date(n.date()+Math.round(t*r)),d)};if(v===h)return this.set(h,this.$M+r);if(v===o)return this.set(o,this.$y+r);if(v===s)return M(1);if(v===a)return M(7);var m=(f={},f[i]=t,f[u]=n,f[e]=1e3,f)[v]||1,l=this.$d.getTime()+r*m;return Y.w(l,this)},l.subtract=function(t,n){return this.add(-1*t,n)},l.format=function(t){var n=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var e=t||"YYYY-MM-DDTHH:mm:ssZ",i=Y.z(this),u=this.$H,s=this.$m,a=this.$M,h=r.weekdays,c=r.months,o=function(t,r,i,u){return t&&(t[r]||t(n,e))||i[r].slice(0,u)},f=function(t){return Y.s(u%12||12,t,"0")},v=r.meridiem||function(t,n,r){var e=t<12?"AM":"PM";return r?e.toLowerCase():e},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:Y.s(a+1,2,"0"),MMM:o(r.monthsShort,a,c,3),MMMM:o(c,a),D:this.$D,DD:Y.s(this.$D,2,"0"),d:String(this.$W),dd:o(r.weekdaysMin,this.$W,h,2),ddd:o(r.weekdaysShort,this.$W,h,3),dddd:h[this.$W],H:String(u),HH:Y.s(u,2,"0"),h:f(1),hh:f(2),a:v(u,s,!0),A:v(u,s,!1),m:String(s),mm:Y.s(s,2,"0"),s:String(this.$s),ss:Y.s(this.$s,2,"0"),SSS:Y.s(this.$ms,3,"0"),Z:i};return e.replace(M,(function(t,n){return n||m[t]||i.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(r,f,d){var v,M=Y.p(f),m=_(r),l=(m.utcOffset()-this.utcOffset())*t,D=this-m,g=Y.m(this,m);return g=(v={},v[o]=g/12,v[h]=g,v[c]=g/3,v[a]=(D-l)/6048e5,v[s]=(D-l)/864e5,v[u]=D/n,v[i]=D/t,v[e]=D/1e3,v)[M]||D,d?g:Y.a(g)},l.daysInMonth=function(){return this.endOf(h).$D},l.$locale=function(){return w[this.$L]},l.locale=function(t,n){if(!t)return this.$L;var r=this.clone(),e=S(t,n,!0);return e&&(r.$L=e),r},l.clone=function(){return Y.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},m}(),p=$.prototype;return _.prototype=p,[["$ms",r],["$s",e],["$m",i],["$H",u],["$W",s],["$M",h],["$y",o],["$D",f]].forEach((function(t){p[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),_.extend=function(t,n){return t.$i||(t(n,$,_),t.$i=!0),_},_.locale=S,_.isDayjs=y,_.unix=function(t){return _(1e3*t)},_.en=w[g],_.Ls=w,_.p={},_}()})),i=t((function(t){t.exports=function(t,n,r){var e=n.prototype,i=e.format;r.en.ordinal=function(t){var n=["th","st","nd","rd"],r=t%100;return"["+t+(n[(r-20)%10]||n[r]||n[0])+"]"},e.format=function(t){var n=this,r=this.$locale();if(!this.isValid())return i.bind(this)(t);var e=this.$utils(),u=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(t){switch(t){case"Q":return Math.ceil((n.$M+1)/3);case"Do":return r.ordinal(n.$D);case"gggg":return n.weekYear();case"GGGG":return n.isoWeekYear();case"wo":return r.ordinal(n.week(),"W");case"w":case"ww":return e.s(n.week(),"w"===t?1:2,"0");case"W":case"WW":return e.s(n.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return e.s(String(0===n.$H?24:n.$H),"k"===t?1:2,"0");case"X":return Math.floor(n.$d.getTime()/1e3);case"x":return n.$d.getTime();case"z":return"["+n.offsetName()+"]";case"zzz":return"["+n.offsetName("long")+"]";default:return t}}));return i.bind(this)(u)}}}));function u({value:t,formatter:n,format:r}){return"date"===n?e(t).format(r):"native"===n?r.replaceAll("{{value}}",t):t}function s(t,n){return"jid"===t?n.jid:"j_timestamp"===t?n.j_timestamp:n.context[t]}function a(t,n){return t.map(((t,e)=>n[e].render?`<td>${r(n[e].render).replaceAll("{{value}}",t)}</td>`:`<td>${t}</td>`)).join("")}e.extend(i);export{u as f,s as g,a as r}