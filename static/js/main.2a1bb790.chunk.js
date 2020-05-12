(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n(1),s=n(2),i=n(4),l=n(3),u=n(0),c=n.n(u),o=n(7),m=n.n(o),h=(n(14),n(5));u.Component;function v(e){var t="square"+(e.highlight?" highlight":"");return c.a.createElement("button",{className:t,onClick:e.onClick},e.value)}var p=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"renderSquare",value:function(e){var t=this,n=this.props.winLine;return c.a.createElement(v,{key:e,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},highlight:n&&n.includes(e)})}},{key:"render",value:function(){for(var e=[],t=0;t<3;++t){for(var n=[],a=0;a<3;++a)n.push(this.renderSquare(3*t+a));e.push(c.a.createElement("div",{key:t,className:"board-row"},n))}return c.a.createElement("div",null,e)}}]),n}(c.a.Component),d=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,isAscending:!0},a}return Object(s.a)(n,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();f(n).winner||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n,latestMoveSquare:e}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleSortToggle",value:function(){this.setState({isAscending:!this.state.isAscending})}},{key:"render",value:function(){var e=this,t=this.state.history,n=this.state.stepNumber,a=t[n],r=f(a.squares),s=r.winner,i=document.getElementById("player1").value,l=document.getElementById("player2").value;document.getElementById("player").innerHTML="<div>player1: "+i+"</div><div>player2: "+l+"</div>";var u,o=t.map((function(t,a){var r=t.latestMoveSquare,s=1+r%3,i=1+Math.floor(r/3),l=a?"Go to move #".concat(a," (").concat(s,", ").concat(i,")"):"Go to game start";return c.a.createElement("li",{key:a},c.a.createElement("button",{className:a===n?"move-list-item-selected":"",onClick:function(){return e.jumpTo(a)}},l))}));return u=s?"Winner: "+(this.state.xIsNext?l:i):r.isDraw?"Draw":"Next player: "+(this.state.xIsNext?i:l),this.state.isAscending||o.reverse(),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(p,{squares:a.squares,onClick:function(t){return e.handleClick(t)},winLine:r.line})),c.a.createElement("div",{className:"game-info"},c.a.createElement("div",null,u),c.a.createElement("button",{id:"button"},"Restart"),c.a.createElement("ol",null,o))))}}]),n}(c.a.Component);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(a.a)(t[n],3),s=r[0],i=r[1],l=r[2];if(e[s]&&e[s]===e[i]&&e[s]===e[l])return{winner:e[s],line:t[n],isDraw:!1}}for(var u=!0,c=0;c<e.length;c++)if(null===e[c]){u=!1;break}return{winner:null,line:null,isDraw:u}}m.a.render(c.a.createElement(d,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.2a1bb790.chunk.js.map