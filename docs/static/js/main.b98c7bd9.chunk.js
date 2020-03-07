(this["webpackJsonpreact-svg-circle-chart"]=this["webpackJsonpreact-svg-circle-chart"]||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(5),c=a.n(l),o=a(6),s=a(1),i=r.forwardRef((function(e,t){var a=e.angle,n=e.r,l=Object(s.a)(e,["angle","r"]);if(0===a)return null;var c=(a=Math.min(360,Math.abs(a))*Math.pow(a,0))*Math.PI/180,o=["M",n,0,"A",n,n,0,Number(a>=180),1,Math.cos(c)*n,Math.sin(c)*n];return r.createElement("path",Object.assign({},l,{ref:t,d:o.join(" ")}))})),m=r.forwardRef((function(e,t){var a=e.color1,n=e.color2,l=e.angle,c=e.border,o=e.radius,m=Object(s.a)(e,["color1","color2","angle","border","radius"]);return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"-50 -50 300 200"},m,{ref:t}),r.createElement("defs",null,r.createElement("linearGradient",{id:"grad1"},r.createElement("stop",{offset:"0",stopColor:"yellow"}),r.createElement("stop",{offset:"25%",stopColor:n}))),r.createElement(i,{r:o,fill:"none",strokeWidth:c,stroke:n,angle:1.2*l,transform:"rotate(90)"}),r.createElement(i,{r:o,angle:360-.8*l,fill:"none",strokeWidth:c,stroke:a,transform:"rotate(-135) scale(.75)"}),r.createElement("g",{transform:"translate(".concat(2*o+4*c,", 0)")},r.createElement(i,{r:o,angle:Math.min(180,l),fill:"none",strokeWidth:c,stroke:"url(#grad1)",transform:"rotate(-90)"}),l>180&&r.createElement(i,{r:o,angle:l-180,fill:"none",strokeWidth:c,stroke:a,transform:"rotate(90)"})))})),u=a(2),d=a(3),g={angle:145,border:5,radius:45,color1:"#FFFF00",color2:"#2E2EFE"},h=function(e,t){var a=t.attribute,r=t.value;return e[a]===r?e:Object(d.a)({},e,Object(u.a)({},a,r))},p=function(e){var t=e.dispatch,a=e.value,n=e.attribute,l=e.unit,c=Object(s.a)(e,["dispatch","value","attribute","unit"]);switch(c.type){case"range":Object.assign(c,Object(d.a)({},c,{step:1,min:1,max:100}))}var o="".concat(n,"Input");return r.createElement("div",{className:"form-group"},r.createElement("label",{htmlFor:o},"Select ",n," ",r.createElement("span",{className:"badge badge-secondary"},a,l)),r.createElement("input",Object.assign({className:"form-control-range",id:o,value:a,onChange:function(e){var a=["range","number"].includes(c.type)?parseInt(e.currentTarget.value,10):e.currentTarget.value;t({attribute:n,value:a})}},c)))},b=r.memo((function(){var e=r.useReducer(h,g),t=Object(o.a)(e,2),a=t[0],n=t[1];return r.createElement("article",null,r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12 col-md-6"},r.createElement("div",{className:"card text-white bg-dark mb-3"},r.createElement("div",{className:"card-header"},"Demonstration"),r.createElement("div",{className:"card-body"},r.createElement(m,Object.assign({height:"200px"},a))))),r.createElement("div",{className:"col-12 col-md-6"},r.createElement(p,{dispatch:n,value:a.angle,attribute:"angle",unit:"\xb0",max:360,min:1,type:"range"}),r.createElement(p,{dispatch:n,value:a.border,attribute:"border",unit:"px",max:10,type:"range"}),r.createElement(p,{dispatch:n,value:a.radius,attribute:"radius",unit:"px",max:100,type:"range"}),r.createElement(p,{dispatch:n,value:a.color1,attribute:"color1",unit:"",type:"color"}),r.createElement(p,{dispatch:n,value:a.color2,attribute:"color2",unit:"",type:"color"}))))}));b.displayName="Presentation.Layout",c.a.render(n.a.createElement((function(){return n.a.createElement("main",{role:"main",className:"flex-shrink-0"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"mt-5 display-4"},"React SVG Circle Chart"),n.a.createElement("p",{className:"lead"},"Change values to interact with chart."),n.a.createElement(b,null),n.a.createElement("p",null,"Available on ",n.a.createElement("a",{href:"https://github.com/Horat1us/react-svg-circle-graph",target:"_blank",rel:"noopener noreferrer"},"GitHub")," | ",n.a.createElement("a",{href:"https://github.com/Horat1us/",target:"_blank",rel:"noopener noreferrer"},"Horat1us"))))}),null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.b98c7bd9.chunk.js.map