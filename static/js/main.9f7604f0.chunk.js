(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,a,t){e.exports=t(255)},108:function(e,a,t){},112:function(e,a,t){},114:function(e,a,t){e.exports=t.p+"static/media/carrefour-logo.895f7fce.png"},115:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABbklEQVQ4jY3TP0iWURQG8F+ipOHmYn9oqCE3xf6tLSVINqjtSYNLk0LY1FYRTQ1BU0JF0mKQDjoLotQgRdDQEJGmITWEgknEkXPh46XPvme57z3nfZ7zcO45B1qGn6jBQVzFFZxDG1Ywh+f4poJagV48xpnqT4k1jGGqNticZw/m0YH3eIRl7KILI+jDC7RisgiEg7C5iG68xHX8+oeDCdzFVrr9GMEmDCb5A67VIQfu4SkOYbwEQ2Aovx9iuw654AH+oD+F9gTOZnLpP2Rp+yuO4kgRaM3kbgMCUX0nv5uLwLsMnGpA4DCO4QfWi8BsJkcbEBjJYVtIkT2BZ/iOi7i1D/kSbmaj75dgU1q5kfc7OSS92eWodhK38Tpjm2UGVEY57MVTtuf9C37jeM3Ermb332AgdiMcFITS+dyHz/lUJ/AT07iQe/I2z5loanUbC2K8o1JU3igNS3Qm+XQ4KdaqiEZ9qpOLlb6MV+j8C6AwSvYwy/ZpAAAAAElFTkSuQmCC"},116:function(e,a,t){},252:function(e,a,t){},254:function(e,a,t){e.exports=t.p+"static/media/product-card.d08f0323.png"},255:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(51),c=t.n(l),m=(t(108),t(110),t(96)),s=t(97),i=t(101),o=t(98),d=t(102),p=(t(112),t(99)),u=t.n(p),h=t(114),E=t(115),g=function(){return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"header__logo"},n.a.createElement(u.a,{className:"Tilt",options:{max:55},style:{height:120,width:200}},n.a.createElement("div",{className:"Tilt-inner"},n.a.createElement("img",{src:h,alt:"Carrefour-logo"})," "))),n.a.createElement("div",{className:"header__search"},n.a.createElement("input",{id:"searchTerm",type:"checkbox"}),n.a.createElement("label",{className:"header__searchbar--icon",htmlFor:"searchTerm"},n.a.createElement("img",{src:E,alt:"Search-icon"})),n.a.createElement("input",{className:"header__searchbar--expanded",type:"text",placeholder:"Enter a search term."})))},f=(t(116),t(16)),_=t(33),b=Object(f.c)({mapPropsToValues:function(e){return{email:e.email||"",password:e.password||"",rememberme:e.rememberme||!1}},validationSchema:_.object().shape({email:_.string().email("Email not valid").required("Email is required"),password:_.string().min(6,"Password must be 6 characters or longer").required("Password is required")}),handleSubmit:function(e,a){var t=a.resetForm,r=a.setErrors,n=a.setSubmitting;setTimeout(function(){"nigelmarshal@gmail.com"===e.email&&"testing123"===e.password?r({email:"Welcome back, Nigel!"}):t(),n(!1)},1e3)}})(function(e){var a=e.values,t=e.errors,r=e.touched,l=e.isSubmitting;return n.a.createElement(f.b,{className:"login__form__container pa4 black-90 measure center"},n.a.createElement("div",null,n.a.createElement("h2",{className:"login__form--header"},"Sign In Now"),n.a.createElement("p",{className:"login__form--sub-header"},"Unlock awesome features!"),r.email&&t.email&&n.a.createElement("p",{className:"login__form__error--text"},t.email),n.a.createElement(f.a,{className:"login__form--text-field",type:"email",name:"email",placeholder:"Email"})),n.a.createElement("div",null,r.password&&t.password&&n.a.createElement("p",{className:"login__form__error--text"},t.password),n.a.createElement(f.a,{className:"login__form--text-field",type:"password",name:"password",placeholder:"Password"})),n.a.createElement("label",{className:"login__form__remember__me--label"},n.a.createElement(f.a,{type:"checkbox",name:"rememberme",checked:a.rememberme}),n.a.createElement("span",{className:"checkmark"}),n.a.createElement("p",{className:"login__form__remember__me--text"},"Keep me logged in"),n.a.createElement("a",{className:"login__form__forgot-password",href:"https://www.carrefourmyclub.com/ForgotPassword.aspx",target:"_blank",rel:"noopener noreferrer"},"Forgot password?")),n.a.createElement("button",{className:"login__form__submit-btn",disabled:l,type:"submit"},"Sign In"))}),w=(t(252),t(254)),N=function(){return n.a.createElement("div",{className:"mw9 center ph3-ns tc"},n.a.createElement("div",{className:"cf ph2-ns"},n.a.createElement("div",{className:"fl w-100 w-third-ns pa2"},n.a.createElement("img",{src:w,alt:"iPhone"}),n.a.createElement("p",{className:"products__card--product-name"},"iPhone 6 Black"),n.a.createElement("p",{className:"products__card--product-price"},"AED 1000")),n.a.createElement("div",{className:"fl w-100 w-third-ns pa2"},n.a.createElement("img",{src:w,alt:"iPhone"}),n.a.createElement("p",{className:"products__card--product-name"},"iPhone 7 Black"),n.a.createElement("p",{className:"products__card--product-price"},"AED 2000")),n.a.createElement("div",{className:"fl w-100 w-third-ns pa2"},n.a.createElement("img",{src:w,alt:"iPhone"}),n.a.createElement("p",{className:"products__card--product-name"},"iPhone 8 Black"),n.a.createElement("p",{className:"products__card--product-price"},"AED 3000"))))},k=function(){return n.a.createElement("footer",{className:"pv4 ph3 ph5-m ph6-l mid-gray"},n.a.createElement("small",{className:"f6 db tc"},"\xa9 2018 ",n.a.createElement("b",{className:"ttu"},"Nigel Marshal"),", Some Rights Reserved"),n.a.createElement("div",{className:"tc mt3"},n.a.createElement("a",{href:"https://github.com/NigelMarshal",target:"_blank",rel:"noopener noreferrer",title:"GitHub",className:"f6 dib ph2 link mid-gray dim"},"GitHub"),n.a.createElement("a",{href:"https://www.linkedin.com/in/nigelmarshal/",target:"_blank",rel:"noopener noreferrer",title:"Linkedin",className:"f6 dib ph2 link mid-gray dim"},"Linkedin"),n.a.createElement("a",{href:"https://nigelmarshal.github.io/",target:"_blank",rel:"noopener noreferrer",title:"Portfolio",className:"f6 dib ph2 link mid-gray dim"},"My website")))},A=function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,null),n.a.createElement(b,null),n.a.createElement(N,null),n.a.createElement(k,null))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[103,2,1]]]);
//# sourceMappingURL=main.9f7604f0.chunk.js.map