(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,n,t){e.exports=t.p+"static/media/ocean.f7b31a19.mp4"},120:function(e,n,t){e.exports=t.p+"static/media/logo.8b32ee1c.svg"},121:function(e,n,t){e.exports=t.p+"static/media/sumate.921dab27.svg"},123:function(e,n,t){e.exports=t.p+"static/media/mano.5132af15.svg"},124:function(e,n,t){e.exports=t.p+"static/media/huella.8ba8cbed.svg"},125:function(e,n,t){e.exports=t.p+"static/media/finalizado.f2be5f61.svg"},126:function(e,n,t){e.exports=t.p+"static/media/lapiz.1f43d02b.svg"},127:function(e,n,t){e.exports=t.p+"static/media/enviar.b90fd636.svg"},128:function(e,n,t){},129:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(32),c=t.n(r),o=t(4),m=t(14),l=t(13),s=t(1),u=t(2),d=t(48),p=t.n(d);function h(){var e=Object(s.a)(["\n  margin-top: 30px;\n"]);return h=function(){return e},e}function f(){var e=Object(s.a)(["\n  height: 65rem;\n  width: 65rem;\n  @media (max-width: 700px) {\n    height: 30rem;\n    width: 30rem;\n  }\n"]);return f=function(){return e},e}function g(){var e=Object(s.a)(["\n  margin-top: 7rem;\n  height: 7rem;\n  width: 7rem;\n  @media (max-width: 700px) {\n    height: 5rem;\n    width: 5rem;\n  }\n"]);return g=function(){return e},e}function x(){var e=Object(s.a)(["\n  height: 20rem;\n  width: 20rem;\n  @media (max-width: 700px) {\n    height: 10rem;\n    width: 10rem;\n  }\n"]);return x=function(){return e},e}function b(){var e=Object(s.a)(["\n  display: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n"]);return b=function(){return e},e}function v(){var e=Object(s.a)(["\n  position: fixed;\n  z-index: -1;\n"]);return v=function(){return e},e}function E(){var e=Object(s.a)(["\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  > img {\n    height: 120px;\n    width: 120px;\n  }\n"]);return E=function(){return e},e}var w=u.a.div(E()),j=u.a.video(v()),O=u.a.div(b()),A=u.a.img(x()),I=(u.a.img(g()),u.a.img(f())),y=Object(u.a)(p.a)(h()),k=Object(m.e)(function(e){var n=e.one,r=e.history,c=Object(a.useState)(!1),o=Object(l.a)(c,2),m=o[0],s=o[1];return window.setTimeout(function(){n||r.push("/slide/3")},3e3),i.a.createElement(w,null,i.a.createElement(j,{loop:!0,autoPlay:!0,playsinline:!0,muted:!0},i.a.createElement("source",{src:t(119),type:"video/mp4"}),"Your browser does not support the video tag."),n?i.a.createElement(O,null,i.a.createElement(A,{alt:"foto",src:t(120)}),i.a.createElement(y,{checked:m,onChange:function(){s(!m),window.setTimeout(function(){document.body.requestFullscreen(),r.push("/slide/2")},500)}})):i.a.createElement(O,null,i.a.createElement(I,{alt:"foto",src:t(121)})))}),S=function(){return i.a.createElement(k,{one:!0})},C=function(){return i.a.createElement(k,{one:!1})};function G(){var e=Object(s.a)(["\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: linear-gradient(#833582, #351335);\n  color: white;\n  > img {\n    height: 10rem;\n    width: 10rem;\n\n    @media (max-width: 700px) {\n      height: 7rem;\n      width: 7rem;\n    }\n  }\n  > * > img {\n    height: 10rem;\n    width: 10rem;\n\n    @media (max-width: 700px) {\n      height: 7rem;\n      width: 7rem;\n    }\n  }\n  > img.hand {\n    animation-name: wave-animation;\n    animation-duration: 2.5s;\n    animation-iteration-count: infinite;\n    transform-origin: 70% 70%;\n    @keyframes wave-animation {\n      0% {\n        transform: rotate(0deg);\n      }\n      10% {\n        transform: rotate(-10deg);\n      }\n      20% {\n        transform: rotate(12deg);\n      }\n      30% {\n        transform: rotate(-10deg);\n      }\n      40% {\n        transform: rotate(9deg);\n      }\n      50% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(0deg);\n      }\n    }\n  }\n  > h1 {\n    margin: 0;\n    font-size: 4rem;\n    @media (max-width: 700px) {\n      font-size: 2rem;\n    }\n  }\n  > p {\n    text-align: center;\n    margin: 0;\n    font-size: 1.5rem;\n    width: 600px;\n    @media (max-width: 700px) {\n      width: 300px;\n      font-size: 1rem;\n    }\n  }\n"]);return G=function(){return e},e}var L=u.a.div(G()),Q=Object(m.e)(function(e){var n=e.number,a=e.history;return window.setTimeout(function(){3===n&&a.push("/slide/4")},4e3),i.a.createElement(i.a.Fragment,null,3===n?i.a.createElement(L,null,i.a.createElement("img",{alt:"mano",className:"hand",src:t(123)}),i.a.createElement("h1",null,"Hola"),i.a.createElement("p",null,"Estas interactuando con Anchipurac.")):null,4===n?i.a.createElement(L,null,i.a.createElement(o.b,{to:"/slide/".concat(n+1)},i.a.createElement("img",{alt:"huella",src:t(124)})),i.a.createElement("h1",null,"Dejanos tu huella"),i.a.createElement("p",null,"Posiciona tu dedo")):null,10===n?i.a.createElement(o.b,{to:10!==n?"/slide/".concat(n+1):"/sumate"},i.a.createElement(L,null,i.a.createElement("img",{alt:"finalizado",src:t(125)}),i.a.createElement("h1",null,"Gracias"),i.a.createElement("p",null,"Por compartir tu experiencia con Anchipurac. Ahora sos nuestro"," ",i.a.createElement("strong",null,"soicio comprometido")," con el ciudado del ambiente."))):null)}),z=function(){return i.a.createElement(Q,{number:3})},H=function(){return i.a.createElement(Q,{number:4})},N=t(12);function W(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: black;\n  height: 78%;\n  flex-wrap: wrap;\n\n  > * > img {\n    height: 10rem;\n    width: 10rem;\n    @media (max-width: 700px) {\n      height: 5rem;\n      width: 5rem;\n    }\n  }\n  > p {\n    margin: 0;\n    font-size: 1.5rem;\n    font-weight: 300;\n    @media (max-width: 700px) {\n      font-size: 0.75rem;\n    }\n  }\n"]);return W=function(){return e},e}function B(){var e=Object(s.a)(["\n  background-color: #cbcbcb;\n  border-radius: 50%;\n  margin: 0 1rem;\n  height: 1rem;\n  width: 1rem;\n\n  @media (max-width: 1520px) {\n    height: 0.8rem;\n    width: 0.8rem;\n  }\n  @media (max-width: 700px) {\n    height: 0.5rem;\n    width: 0.5rem;\n  }\n"]);return B=function(){return e},e}function M(){var e=Object(s.a)(["\n  display: flex;\n  .selected {\n    border: 1px solid black;\n  }\n"]);return M=function(){return e},e}function Y(){var e=Object(s.a)(['\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  height: 60%;\n  width: 80%;\n  padding: 3rem;\n  @media (max-width: 700px) {\n    padding: 1rem;\n    width: 90%;\n  }\n  @media (max-width: 1520px) {\n    padding: 1rem;\n    width: 90%;\n  }\n  .last-item {\n    justify-self: flex-start;\n  }\n  > li {\n    display: flex;\n    align-items: center;\n    flex-basis: 25rem;\n    justify-content: center;\n    @media (max-width: 700px) {\n      padding: 5px;\n      flex-basis: 7rem;\n    }\n  }\n  > li > .checkbox {\n    height: 50px;\n    width: 50px;\n    border: 1px solid #747474;\n\n    @media (max-width: 1520px) {\n      height: 40px;\n      width: 40px;\n    }\n    @media (max-width: 700px) {\n      height: 30px;\n      width: 30px;\n    }\n  }\n  > li > .active {\n    background: url("data:image/png;base64,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");\n    background-size: cover;\n  }\n  > li > span {\n    font-size: 24px;\n    width: 50%;\n    margin-left: 10px;\n\n    @media (max-width: 1520px) {\n      font-size: 18px;\n    }\n    @media (max-width: 700px) {\n      font-size: 10px;\n    }\n  }\n']);return Y=function(){return e},e}function q(){var e=Object(s.a)(["\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #030303;\n  > * > h1 {\n    @media (max-width: 700px) {\n      font-size: 16px;\n    }\n  }\n"]);return q=function(){return e},e}var T=u.a.div(q()),V=u.a.ul(Y()),D=u.a.div(M()),K=u.a.div(B()),R=u.a.div(W()),Z=function(e){var n=e.number,a=e.title,r=e.checkboxs,c=e.onActiveChange;return i.a.createElement(T,null,i.a.createElement(o.b,{to:"/slide/".concat(n+1)},i.a.createElement("h1",null,a)),8!==n?i.a.createElement(V,null,r.map(function(e){return i.a.createElement("li",{key:e.span,className:"Tu energ\xeda hace la diferencia"===e.span||"Somos naturaleza"===e.span?"last-item":""},i.a.createElement("div",{name:e.span,className:e.active?"checkbox active":"checkbox",onClick:function(){return n=e.span,void c(n);var n}}),i.a.createElement("span",null,e.span))})):i.a.createElement(R,null,i.a.createElement(o.b,{to:"/slide/".concat(n+1)},i.a.createElement("img",{alt:"lapiz",src:t(126)})),i.a.createElement("p",null,"Con el l\xe1piz digital deja tu mensaje o ilustraci\xf3n en esta pantalla.")),i.a.createElement(D,null,i.a.createElement(o.b,{to:"/slide/5"},i.a.createElement(K,{className:5===n?"selected":""})),i.a.createElement(o.b,{to:"/slide/6"},i.a.createElement(K,{className:6===n?"selected":""})),i.a.createElement(o.b,{to:"/slide/7"},i.a.createElement(K,{className:7===n?"selected":""})),i.a.createElement(o.b,{to:"/slide/8"},i.a.createElement(K,{className:8===n?"selected":""}))))},P=[{active:!1,span:"Herencia Ancestral"},{active:!1,span:"Somos parte del todo"},{active:!1,span:"Tu huella"},{active:!1,span:"El ciclo de los residuos"},{active:!1,span:"Laboratorio ambiental"},{active:!1,span:"Observatorio ambiental"},{active:!1,span:"El sost\xe9n de la vida"},{active:!1,span:"Nuestro mundo. Tu casa"},{active:!1,span:"M\xe1s de un futuro es posible"},{active:!1,span:"Las voces del compromiso"},{active:!1,span:"La fuerza que mueve al mundo"},{active:!1,span:"Anchipurac, dise\xf1o bioclim\xe1tico"},{active:!1,span:"Tu energ\xeda hace la diferencia"},{active:!1,span:"Somos naturaleza"}],U=[{active:!1,span:"Glaciares"},{active:!1,span:"Recursos naturales"},{active:!1,span:"El hombre"},{active:!1,span:"Biodiversidad"}],X=[{active:!1,span:"Herencia Ancestral"},{active:!1,span:"Somos parte del todo"},{active:!1,span:"Tu huella"},{active:!1,span:"El ciclo de los residuos"},{active:!1,span:"Laboratorio ambiental"},{active:!1,span:"Observatorio ambiental"},{active:!1,span:"El sost\xe9n de la vida"},{active:!1,span:"Nuestro mundo. Tu casa"},{active:!1,span:"M\xe1s de un futuro es posible"},{active:!1,span:"Las voces del compromiso"},{active:!1,span:"La fuerza que mueve al mundo"},{active:!1,span:"Anchipurac, dise\xf1o bioclim\xe1tico"},{active:!1,span:"Tu energ\xeda hace la diferencia"},{active:!1,span:"Somos naturaleza"}],J="Dej\xe1 un mensaje de tu experiencia con nosotros",F=function(){var e=Object(a.useState)(P),n=Object(l.a)(e,2),t=n[0],r=n[1];return i.a.createElement(Z,{number:5,checkboxs:t,title:"\xbfQu\xe9 temas son los que m\xe1s te interesaron?",onActiveChange:function(e){var n=t.findIndex(function(n){return n.span===e}),a=t[n];a.active=!a.active;var i=t.slice(0,n);i.concat(a);var c=t.slice(n,t.length),o=[].concat(Object(N.a)(i),Object(N.a)(c));r(o)}})},$=function(){var e=Object(a.useState)(U),n=Object(l.a)(e,2),t=n[0],r=n[1];return i.a.createElement(Z,{number:6,checkboxs:t,title:"\xbfQu\xe9 temas te gustar\xeda que incluyamos?",onActiveChange:function(e){var n=t.findIndex(function(n){return n.span===e}),a=t[n];a.active=!a.active;var i=t.slice(0,n);i.concat(a);var c=t.slice(n,t.length),o=[].concat(Object(N.a)(i),Object(N.a)(c));r(o)}})},_=function(){var e=Object(a.useState)(X),n=Object(l.a)(e,2),t=n[0],r=n[1];return i.a.createElement(Z,{number:7,checkboxs:t,title:"\xbfQu\xe9 informaci\xf3n quieres que te enviemos?",onActiveChange:function(e){var n=t.findIndex(function(n){return n.span===e}),a=t[n];a.active=!a.active;var i=t.slice(0,n);i.concat(a);var c=t.slice(n,t.length),o=[].concat(Object(N.a)(i),Object(N.a)(c));r(o)}})},ee=function(){return i.a.createElement(Z,{number:8,title:J})},ne=function(){return i.a.createElement(Q,{number:10})},te=t(53),ae=t.n(te);function ie(){var e=Object(s.a)(["\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  .canvas {\n    margin: 20px;\n    height: 70%;\n    width: 80%;\n    border: 1px solid #cbcbcb;\n    border-radius: 5px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n    @media (max-width: 700px) {\n      margin: 20px;\n      overflow: hidden;\n    }\n  }\n  > * > h1 {\n    font-size: 24px;\n    @media (max-width: 700px) {\n      font-size: 16px;\n    }\n  }\n  > * .image {\n    height: 5rem;\n    width: 5rem;\n    @media (max-width: 700px) {\n      height: 3rem;\n      width: 3rem;\n    }\n  }\n"]);return ie=function(){return e},e}var re=u.a.div(ie()),ce=function(e){var n=e.title;return i.a.createElement(re,null,i.a.createElement(o.b,{to:"/slide/10"},i.a.createElement("h1",null,n)),i.a.createElement("div",{className:"canvas"},i.a.createElement(ae.a,null)),i.a.createElement(o.b,{to:"/slide/10"},i.a.createElement("img",{className:"image",alt:"img",src:t(127)})))},oe=function(){return i.a.createElement(ce,{number:9,title:J})},me=function(){return i.a.createElement("div",{className:"app"},i.a.createElement(o.a,null,i.a.createElement(m.a,{path:"/sumate/",exact:!0,component:S}),i.a.createElement(m.a,{path:"/slide/2",component:C}),i.a.createElement(m.a,{path:"/slide/3",component:z}),i.a.createElement(m.a,{path:"/slide/4",component:H}),i.a.createElement(m.a,{path:"/slide/5",component:F}),i.a.createElement(m.a,{path:"/slide/6",component:$}),i.a.createElement(m.a,{path:"/slide/7",component:_}),i.a.createElement(m.a,{path:"/slide/8",component:ee}),i.a.createElement(m.a,{path:"/slide/9",component:oe}),i.a.createElement(m.a,{path:"/slide/10",component:ne})))};t(128);c.a.render(i.a.createElement(me,null),document.getElementById("root"))},56:function(e,n,t){e.exports=t(129)}},[[56,1,2]]]);
//# sourceMappingURL=main.70c443af.chunk.js.map