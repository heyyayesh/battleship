(()=>{"use strict";var e={771:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,'*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody{\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.content{\n  display: flex;\n  gap: 300px;\n  margin: 50px;\n}\n\n.board{\n  width: 502px;\n  height: 502px;\n  border: 1px solid;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.block{\n  width: 50px;\n  height: 50px;\n  border: 1px solid black;\n}\n\n.miss{\n  position: relative;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.miss::before{\n  content: "";\n  background: black;\n  position: absolute;\n  width: 30%;\n  height: 30%;\n  border-radius: 50%;\n}\n\n.hit{\n  position: relative;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hit::before, .hit::after{\n  content: "";\n  background: black;\n  position: absolute;\n  width: 90%;\n  height: 5px;\n}\n\n.hit::before{\n  transform: rotate(45deg);\n}\n\n.hit::after{\n  transform: rotate(-45deg);\n}\n\n.sunk{\n  opacity: 0.5;\n}\n\n.carrier{\n  background: rgb(218, 94, 94);\n}\n\n.battleship{\n  background: rgb(185, 70, 185);\n}\n\n.cruiser{\n  background: yellow;\n}\n\n.submarine{\n  background: rgb(101, 197, 230);\n}\n\n.destroyer{\n  background: rgb(20, 207, 20);\n}\n\n.game-over{\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: white;\n  z-index: 1;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.game-over-text{\n  font-size: 42px;\n  font-family: monospace, sans-serif;\n}\n\n.winner-text{\n  font-size: 32px;\n  font-family: monospace, sans-serif;\n}\n\n.controls{\n  display: flex;\n  gap: 20px;\n}\n\n.game-over button{\n  font-size: 22px;\n  font-family: monospace, sans-serif;\n  padding: 5px 10px;\n}\n\n.game-over.active{\n  display: flex;\n}\n\n#restart{\n  position: absolute;\n  font-size: 22px;\n  font-family: monospace, sans-serif;\n  top: 20px;\n  right: 20px;\n  padding: 5px 15px;\n}\n\n@media screen and (max-width: 1000px){\n  .content{\n    flex-direction: column;\n    gap: 50px;\n  }\n\n  .board{\n    width: 302px;\n    height: 302px;\n  }\n\n  .block{\n    width: 30px;\n    height: 30px;\n  }\n\n  #restart{\n    font-size: 16px;\n  }\n}',""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(771),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=(e,n)=>{const t=[];for(let n=0;n<e;n+=1)t.push(1);let r="h",o=0;return{name:n,length:e,isSunk:function(){return o===e},hit:function(n){return n>e-1||o===e||0===t[n]?"invalid hit":o<e?(t[n]=0,o+=1,n):"could not hit"},getAlignment:()=>r,toggleAlignment:function(){r="h"===r?"v":"h"}}},g=e=>{const n=e,t=m(5,"carrier"),r=m(4,"battleship"),o=m(3,"cruiser"),i=m(3,"submarine"),a=m(2,"destroyer"),s=[t,r,o,i,a],c=(()=>{const e=new Array(10);for(let n=0;n<10;n+=1){e[n]=new Array(10);for(let t=0;t<10;t+=1)e[n][t]={vehicle:null,hasShip:!1,shipBlock:-1,isHit:!1,isMissed:!1}}function n(){let n=0;for(let t=0;t<10;t+=1)for(let r=0;r<10;r+=1)e[t][r].hasShip&&(n+=1);return n}return{getStatus:function(n,t){return e[n][t]},placeShip:function(n,t,r){const o=n.length;if("h"===n.getAlignment()&&t>10-o||r>9)return"failed";if("v"===n.getAlignment()&&r>10-o||t>9)return"failed";if(e[t][r].hasShip)return"failed";if("h"===n.getAlignment()){for(let i=0;i<o;i+=1)e[t+i][r].vehicle=n,e[t+i][r].shipBlock=i,e[t+i][r].hasShip=!0;return`success ${n.getAlignment()}`}if("v"===n.getAlignment()){for(let i=0;i<o;i+=1)e[t][r+i].vehicle=n,e[t][r+i].shipBlock=i,e[t][r+i].hasShip=!0;return`success ${n.getAlignment()}`}return"could not place"},clearBoard:function(){for(let n=0;n<10;n+=1)for(let t=0;t<10;t+=1)e[n][t]={vehicle:null,hasShip:!1,shipBlock:-1,isHit:!1,isMissed:!1}},recieveAttack:function(n,t){return e[n][t].isHit||e[n][t].isMissed?"invalid":(function(n,t){return!e[n][t].hasShip}(n,t)?e[n][t].isMissed=!0:(e[n][t].vehicle.hit(e[n][t].shipBlock),e[n][t].isHit=!0),"success")},getTotalShipBlocks:n,isAllSunk:function(){let t=0;for(let n=0;n<10;n+=1)for(let r=0;r<10;r+=1)e[n][r].hasShip&&e[n][r].vehicle.isSunk()&&(t+=1);return n()===t}}})();function l(e){let n,t,r=!0;if("h"===e.getAlignment()?(n=Math.floor(Math.random()*(11-e.length)),t=Math.floor(10*Math.random())):"v"===e.getAlignment()&&(n=Math.floor(10*Math.random()),t=Math.floor(Math.random()*(11-e.length))),"h"===e.getAlignment())for(let o=0;o<e.length;o+=1)c.getStatus(n+o,t).hasShip&&(r=!1);if("v"===e.getAlignment())for(let o=0;o<e.length;o+=1)c.getStatus(n,t+o).hasShip&&(r=!1);r?c.placeShip(e,n,t):l(e)}return{playerName:n,fleet:s,board:c,hasLost:function(){return s.every((e=>e.isSunk()))},placeFleetRandomly:function(){Math.random()>.5&&t.toggleAlignment(),Math.random()>.5&&r.toggleAlignment(),Math.random()>.5&&o.toggleAlignment(),Math.random()>.5&&i.toggleAlignment(),Math.random()>.5&&a.toggleAlignment(),l(t),l(r),l(o),l(i),l(a)},attack:function(e,n,t){t.board.recieveAttack(e,n)},recieveAttack:function(e,n){return c.recieveAttack(e,n)}}};(()=>{const e=document.querySelector(".game-over"),n=document.querySelector(".winner-text"),t=document.querySelector("#playAgain"),r=document.querySelector("#reviewGame"),o=document.querySelector(".content"),i=document.getElementById("restart");function a(e){const n=document.createElement("div");"player"===e&&n.classList.add("board","player"),"enemy"===e&&n.classList.add("board","enemy");for(let t=0;t<10;t+=1)for(let r=0;r<10;r+=1){const o=document.createElement("div");"player"===e&&o.classList.add("block","player"),"enemy"===e&&(o.classList.add("block","enemy"),o.style.cursor="pointer"),o.dataset.coords=`${r}${t}`,n.appendChild(o)}o.appendChild(n)}function s(e,n,t){const r=n.toString()+t.toString();let o;return"player"===e&&(o=document.querySelectorAll(".block.player")),"enemy"===e&&(o=document.querySelectorAll(".block.enemy")),Array.from(o).filter((e=>e.dataset.coords===r))[0]}function c(e,n,t){if(t.classList.contains("player")){console.log("rendering p board");for(let n=0;n<10;n+=1)for(let t=0;t<10;t+=1)e.board.getStatus(n,t).isHit&&(console.log("hit p board"),s("player",n,t).classList.add("hit")),e.board.getStatus(n,t).isMissed&&(console.log("missed p board"),s("player",n,t).classList.add("miss")),e.board.getStatus(n,t).hasShip&&e.board.getStatus(n,t).vehicle.isSunk()&&s("player",n,t).classList.add("sunk")}if(t.classList.contains("enemy"))for(let e=0;e<10;e+=1)for(let t=0;t<10;t+=1)n.board.getStatus(e,t).isMissed&&s("enemy",e,t).classList.add("miss"),n.board.getStatus(e,t).isHit&&s("enemy",e,t).classList.add("hit"),n.board.getStatus(e,t).hasShip&&n.board.getStatus(e,t).vehicle.isSunk()&&s("enemy",e,t).classList.add("sunk")}function l(){!function(){for(;o.firstChild;)o.removeChild(o.firstChild)}();const t=g("temp"),r={...g("Boteshwar"),computerAttack:function e(n){const t=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],r=t[0],o=t[1];return n.board.getStatus(r,o).isHit&&e(n),n.board.getStatus(r,o).isMissed&&e(n),n.recieveAttack(r,o),console.log(r,o),"success"}};let i=!0;t.placeFleetRandomly(),r.placeFleetRandomly(),a("player"),a("enemy"),function(e){for(let n=0;n<10;n+=1)for(let t=0;t<10;t+=1){if(!e.board.getStatus(n,t).hasShip)continue;const r=e.board.getStatus(n,t).vehicle.name;s("player",n,t).classList.add(r)}}(t);const l=document.querySelector(".board.player"),d=document.querySelector(".board.enemy");function u(){return t.hasLost()||r.hasLost()}function p(){return u?t.hasLost()?r:t:null}document.querySelectorAll(".block.enemy").forEach((o=>{o.addEventListener("click",(o=>{const a=Number(o.target.dataset.coords.slice("")[0]),s=Number(o.target.dataset.coords.slice("")[1]);if(u())return n.textContent=p()===t?"You Win!":"Computer Wins!",void e.classList.add("active");i&&"invalid"!==r.recieveAttack(a,s)&&(c(t,r,d),i=!1,console.log("Computers Turn"),i||(u()?(n.textContent=p()===t?"You Win!":"Computer Wins!",e.classList.add("active")):setTimeout((()=>{r.computerAttack(t),i=!0,c(t,r,l),console.log("Your Turn")}),500)))}))}))}return t.addEventListener("click",(()=>{e.classList.remove("active"),l()})),r.addEventListener("click",(()=>{e.classList.remove("active")})),i.addEventListener("click",(function(){l()})),{startGame:l}})().startGame()})()})();