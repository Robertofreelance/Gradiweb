(this.webpackJsonpgradiweb=this.webpackJsonpgradiweb||[]).push([[0],[,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(4),r=s.n(i),n=(s(9),s(2)),o=(s(10),s(11),s(0));function d(e){return Object(o.jsxs)("div",{style:{backgroundImage:"url(".concat(e.image,")"),padding:e.padding,minHeight:e.min,fontSize:e.size},className:"imgContainer",children:[Object(o.jsx)("p",{className:e.descriptionHigh?"text-purple":"text-white",children:Object(o.jsx)("i",{className:"fas fa-map-marker-alt"})}),Object(o.jsxs)("div",{style:{marginLeft:"10px"},children:[Object(o.jsx)("p",{className:e.descriptionHigh?"text-purple":"text-white",children:Object(o.jsx)("strong",{children:e.text})}),Object(o.jsx)("p",{className:e.descriptionHigh?"text-purple text-high":"text-white",children:Object(o.jsx)("strong",{children:e.description})})]}),e.adding&&Object(o.jsx)("div",{className:"adding",children:"+"})]})}var l=s.p+"static/media/Bogota.325b19e1.jpg";s(13);function u(e){var t=Object(c.useState)(function(){switch(e.status){case"Rain":return{ico:"fad fa-cloud-showers-heavy icon",color:"purple1"};case"Clouds":return{ico:"fad fa-clouds",color:"purple1"};case"Clear":return{ico:"fas fa-sun",color:"yellow1"};case"Thunderstorm":return{ico:"fas fa-bolt",color:"yellow1"};case"Drizzle":return{ico:"fad fa-cloud-drizzle",color:"purple1"};case"Snow":return{ico:"fas fa-snowflake",color:"blue1"};default:return{ico:"fas fa-exclamation-circle",color:"red"}}}()),s=Object(n.a)(t,1)[0];return Object(o.jsxs)("div",{className:"foreCast",children:[Object(o.jsxs)("div",{className:"capsule",children:[Object(o.jsx)("p",{className:"icon",children:Object(o.jsx)("i",{className:s.ico+" "+s.color})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"text",children:Object(o.jsx)("strong",{children:function(){switch(new Date(1e3*e.time).getDay()){case 0:return"Monday";case 1:return"Tuesday";case 2:return"Wednesday";case 3:return"Thursday";case 4:return"Friday";case 5:return"Saturday";case 6:return"Sunday";default:return"Error"}}()})}),Object(o.jsx)("p",{className:"status",children:Object(o.jsx)("strong",{children:e.status})})]})]}),Object(o.jsx)("div",{className:e.first?"temperature purple":"temperature normal",children:Object(o.jsx)("p",{className:e.first?"text-white":"",children:Object(o.jsx)("strong",{children:e.temperature})})})]})}var j=s.p+"static/media/profile1.f5858d23.jpg",p=s.p+"static/media/profile2.52fd646a.jpg",m=s.p+"static/media/profile3.2be43ef5.jpg",h=s.p+"static/media/location.40ef21b8.png",b=s.p+"static/media/Singapure.fac3a309.jpg",x=s.p+"static/media/Art.bec2ccdd.jpg",f=s.p+"static/media/Fountain.57bd8564.jpg";s(14);function O(e){var t=Object(c.useState)({}),s=Object(n.a)(t,2),a=s[0],i=s[1];return Object(c.useEffect)((function(){!function(){if(e.main){var t=new Date(1e3*e.time).toLocaleString("en-GB",{timeZone:"Europe/Paris"}),s=new Date(t),c=s.getHours()>6&&s.getHours()<18?"sun":"moon";i({ico:"fad fa-cloud-".concat(c,"-rain"),color:"purple2"})}else i({ico:"fas fa-exclamation-circle",color:"red"})}()}),[e.main]),Object(o.jsxs)("div",{className:e.first?"cityContainer shadow":"cityContainer shadow2",children:[Object(o.jsxs)("div",{className:"top",children:[Object(o.jsx)("div",{className:"iconContainer",children:Object(o.jsx)("i",{className:a.ico+" "+a.color})}),Object(o.jsxs)("div",{className:"Grades",children:[Object(o.jsxs)("p",{className:"grado",children:[Math.round(e.grados),Object(o.jsx)("span",{className:"celsius",children:"\xb0C"})," "]}),Object(o.jsx)("div",{className:"separator"}),Object(o.jsxs)("div",{className:"placed",children:[Object(o.jsx)("p",{children:e.city}),Object(o.jsx)("p",{children:e.country})]})]})]}),Object(o.jsxs)("div",{className:"bottom",children:[Object(o.jsxs)("p",{className:"humidity",children:["Humedity ",e.humidity,"%"]}),Object(o.jsx)("p",{className:"windDirection",children:function(){var t=e.windDirection;(t+=22.5)<0?t=360-Math.abs(t)%360:t%=360;var s=parseInt(t/45);return"".concat(["Northerly","North Easterly","Easterly","South Easterly","Southerly","South Westerly","Westerly","North Westerly"][s])}()}),Object(o.jsxs)("p",{className:"windSpeed",children:[e.windSpeed,"km/h"]})]})]})}var g=function(){var e=Object(c.useState)({}),t=Object(n.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)({}),r=Object(n.a)(i,2),g=r[0],w=r[1],N=Object(c.useState)({}),y=Object(n.a)(N,2),v=y[0],S=y[1],C=Object(c.useState)(),T=Object(n.a)(C,2),H=T[0],q=T[1];Object(c.useEffect)((function(){!function(){if(Object.keys(s).length>0){var e=new Date(1e3*s.current.dt),t=e.getHours()>6&&e.getHours()<18?"sun":"moon";switch(s.current.weather[0].main){case"Rain":return void q({ico:"fad fa-cloud-".concat(t,"-rain"),color:"white1"});case"Clouds":return void q({ico:"fad fa-cloud-".concat(t),color:"white1"});case"Clear":return void q({ico:"fas fa-".concat(t),color:"yellow1"});case"Thunderstorm":return void q({ico:"fad fa-thunderstorm-".concat(t),color:"white1"});case"Drizzle":return void q({ico:"fad fa-cloud-drizzle",color:"white"});case"Snow":return void q({ico:"fas fa-snowflake",color:"blue1"});default:q({ico:"fas fa-exclamation-circle",color:"red"})}}else q({ico:"fas fa-exclamation-circle",color:"red"})}()}),[s]),Object(c.useEffect)((function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){4===e.readyState&&(200===e.status?(a(JSON.parse(e.responseText)),console.log(JSON.parse(e.responseText))):alert("An error occurred during your request: "+e.status+" "+e.statusText))},e.open("Get","https://api.openweathermap.org/data/2.5/onecall?lat=4.7067108&lon=-74.083959&exclude=hourly,minutely,alert&appid=c23b17a15cfde7c66919161c6b90aeb4&units=metric"),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send()}),[]),Object(c.useEffect)((function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){4===e.readyState&&(200===e.status?(S(JSON.parse(e.responseText)),console.log(JSON.parse(e.responseText))):alert("An error occurred during your request: "+e.status+" "+e.statusText))},e.open("Get","https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=c23b17a15cfde7c66919161c6b90aeb4&units=metric"),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send()}),[]),Object(c.useEffect)((function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){4===e.readyState&&(200===e.status?(a(JSON.parse(e.responseText)),console.log(JSON.parse(e.responseText))):alert("An error occurred during your request: "+e.status+" "+e.statusText))},e.open("Get","https://api.openweathermap.org/data/2.5/onecall?lat=4.7067108&lon=-74.083959&exclude=hourly,minutely,alert&appid=c23b17a15cfde7c66919161c6b90aeb4&units=metric"),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send()}),[]),Object(c.useEffect)((function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){4===e.readyState&&(200===e.status?(w(JSON.parse(e.responseText)),console.log(JSON.parse(e.responseText))):alert("An error occurred during your request: "+e.status+" "+e.statusText))},e.open("Get","https://api.openweathermap.org/data/2.5/weather?q=Lyon&appid=c23b17a15cfde7c66919161c6b90aeb4&units=metric"),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send()}),[]);var z=Object(o.jsx)("i",{className:"fad fa-cloud-showers-heavy icon",style:{color:"#816BF5"}});return Object.keys(s).length<1||Object.keys(g).length<1||Object.keys(v).length<1?"loading...":Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"foring",children:[Object(o.jsx)(d,{padding:"70px",descriptionHigh:!0,image:l,text:"Bogot\xe1",min:"25vh",description:"\ud83d\uddfa"}),Object(o.jsxs)("div",{className:"informative",children:[Object(o.jsxs)("div",{className:"info1",children:[Object(o.jsx)("i",{className:H.ico+" "+H.color}),Object(o.jsx)("p",{children:s.current.weather[0].main})]}),Object(o.jsx)("div",{className:"info2",children:Object(o.jsxs)("p",{className:"gradoWhite",children:[Math.round(s.current.temp),Object(o.jsx)("span",{className:"celsius",children:"\xb0C"})]})})]})]}),Object(o.jsxs)("div",{className:"bottom_container ",children:[Object(o.jsxs)("div",{className:"section foringCast section-rigth ",children:[Object(o.jsxs)("p",{className:"subTitle",children:[Object(o.jsx)("strong",{children:"3 Days"})," ForeCast"]}),Object(o.jsx)("div",{className:"foringContainer",children:s.daily.filter((function(e,t){return t<3})).map((function(e,t){return Object(o.jsx)(u,{icon:z,time:e.dt,status:e.weather[0].main,temperature:"".concat(Math.round(e.temp.day),"\xb0 / ").concat(Math.round(e.temp.night),"\xb0"),first:0===t},t)}))})]}),Object(o.jsxs)("div",{className:"section section-rigth",children:[Object(o.jsxs)("p",{className:"subTitle",children:[Object(o.jsx)("strong",{children:"Place to"})," Visit"]}),Object(o.jsx)("div",{className:"expectedShadow",children:Object(o.jsx)(d,{image:b,text:"Asrab Street",padding:"10px",size:"12px",min:"120px",description:"singapure"})})]}),Object(o.jsxs)("div",{className:"section section-rigth lastRigth",children:[Object(o.jsxs)("div",{className:"taged",children:[Object(o.jsx)("p",{className:"tag-title",children:Object(o.jsxs)("strong",{children:[Object(o.jsx)("i",{className:"fas fa-plus"})," Top Reviews"]})}),Object(o.jsxs)("div",{className:"users",children:[Object(o.jsx)("img",{alt:"user1",src:j,className:"profiles"}),Object(o.jsx)("img",{alt:"user2",src:p,className:"profiles"}),Object(o.jsx)("img",{alt:"user3",src:m,className:"profiles"}),Object(o.jsx)("div",{className:"profiles",children:"8+"})]})]}),Object(o.jsxs)("div",{className:"flexed",children:[Object(o.jsx)(d,{image:x,text:"Asrab Street",padding:"10px",size:"12px",description:"singapure"}),Object(o.jsx)("br",{}),Object(o.jsx)(d,{image:f,text:"Asrab Street",padding:"10px",description:"singapure",min:"120px",size:"12px",adding:!0})]})]}),Object(o.jsx)("div",{className:"section sectionLoc",children:Object(o.jsxs)("div",{className:"locContainer",children:[Object(o.jsx)(O,{windSpeed:v.wind.speed.toFixed(1),windDirection:v.wind.deg,humidity:v.main.humidity,grados:v.main.temp,city:"Paris",time:v.dt,country:"Francia",main:v.weather[0].main,first:!0}),Object(o.jsx)(O,{windSpeed:g.wind.speed.toFixed(1),windDirection:g.wind.deg,humidity:g.main.humidity,grados:g.main.temp,city:"Lyon",time:g.dt,country:"Francia",main:g.weather[0].main,first:!0}),Object(o.jsxs)("div",{className:"location loc-dim",children:[Object(o.jsx)("div",{className:"message",children:Object(o.jsx)("strong",{children:"Add Locations"})}),Object(o.jsx)("img",{src:h,className:"img",alt:"Location"})]})]})})]})]})})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),w()}],[[15,1,2]]]);
//# sourceMappingURL=main.90e232de.chunk.js.map