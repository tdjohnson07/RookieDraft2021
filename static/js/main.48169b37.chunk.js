(this.webpackJsonprookiedraftapp=this.webpackJsonprookiedraftapp||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},35:function(e,t){},37:function(e,t){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(0),a=n.n(c),i=n(22),r=n.n(i),d=(n(31),n(7)),o={name:"Eskimos",needs:"WR, QB",picks:[103,108,303,307,403],playersSelectd:[]},l={name:"Head Hunters",needs:"WR, QB",picks:[103,108,303,307,403],playersSelectd:[]},u={name:"Lumberjacks",needs:"WR, QB",picks:[103,108,303,307,403],playersSelectd:[]},j={name:"River Rats",needs:"WR, QB",picks:[103,108,303,307,403],playersSelectd:[]},p={name:"Wyverns",needs:"WR, QB",picks:[103,108,303,307,403],playersSelectd:[]},b={name:"Muddogs",needs:"WR, QB",picks:[103,108,303,307,403],playersSelectd:[]},m={name:"Bandits",needs:"WR, QB",picks:[103,108,303,307,403],playersSelectd:[]},k={name:"Trash Pandas",needs:"WR, QB",picks:[103,108,303,307,403],playersSelectd:[]},O={name:"Valor",needs:"WR, QB",picks:[103,108,303,307,403],playersSelectd:[]},S={name:"Landsharks",needs:"WR, QB",picks:[103,108,303,307,403],playersSelectd:[]},f=[O,j,o,O,l,k,u,o,p,m,b,S],h=n(23);n(32);function x(e){var t=e.expiryTimestamp,n=e.isStarted,a=Object(c.useState)(0),i=Object(d.a)(a,2),r=i[0],o=i[1],l=Object(c.useState)(f[r].name),u=Object(d.a)(l,2),j=u[0],p=u[1],b=function(){o(r+1);var e=new Date;e.setSeconds(e.getSeconds()+600),R(e)},m=Object(h.useTimer)({expiryTimestamp:t,onExpire:function(){return b()}}),k=m.seconds,O=m.minutes,S=m.isRunning,x=m.start,y=m.pause,g=m.resume,R=m.restart;return Object(c.useEffect)((function(){n?g():y()}),[n]),Object(c.useEffect)((function(){p(f[r].name)}),[r]),Object(s.jsxs)("div",{style:{textAlign:"center"},children:[Object(s.jsxs)("h2",{children:["On the Clock: ",j]}),Object(s.jsx)("button",{onClick:b,children:"Make Pick"}),Object(s.jsxs)("div",{style:{fontSize:"100px"},children:[Object(s.jsx)("span",{children:O>9?O:"0"+O}),":",Object(s.jsx)("span",{children:k>9?k:"0"+k})]}),Object(s.jsx)("p",{children:S?"Running":"Not running"}),Object(s.jsx)("button",{onClick:x,children:"Start"}),Object(s.jsx)("button",{onClick:y,children:"Pause"}),Object(s.jsx)("button",{onClick:g,children:"Resume"}),Object(s.jsx)("button",{onClick:function(){var e=new Date;e.setSeconds(e.getSeconds()+600),R(e)},children:"Restart"})]})}var y=n(24);n(49);var g=function(){var e=new Date;e.setSeconds(e.getSeconds()+600);for(var t=Object(c.useState)(!1),n=Object(d.a)(t,2),a=n[0],i=n[1],r="",o=0;o<f.length;o++)r=r+(o+1).toString()+": "+f[o].name+" ";return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"MGFL Dyansty League 2021 Rookie Draft"}),Object(s.jsx)("button",{onClick:function(){return i(!a)},children:"Start Draft"}),Object(s.jsx)(x,{expiryTimestamp:e,isStarted:a}),Object(s.jsx)(y.a,{className:"pickScroll",children:r})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),R()}},[[50,1,2]]]);
//# sourceMappingURL=main.48169b37.chunk.js.map