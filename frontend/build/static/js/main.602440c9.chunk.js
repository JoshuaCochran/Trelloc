(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{157:function(e,t,a){e.exports=a(309)},166:function(e,t,a){},309:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(4),l=a(44),o=a(19),c=a(51),s=(a(166),a(167),a(310)),d=a(54),u={backgroundImage:"url(https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png)",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"80px 30px",height:"40px",width:"100%",display:"flex",justifyContent:"flex-start",flexGrow:1,padding:"4px",lineHeight:"0",maxHeight:"40px"},p={display:"flex",justifyContent:"flex-start",flexGrow:1},m={display:"flex",justifyContent:"flex-end",flexGrow:1},f={display:"inline-block",position:"relative",marginRight:"4px",width:"32px",height:"32px",padding:0},b=function(){return i.a.createElement(s.a.Header,{style:u},i.a.createElement("div",{style:p},i.a.createElement(c.b,{to:"/"},i.a.createElement(d.a,{style:f,icon:"home"})),i.a.createElement(d.a,{style:f,icon:"file-search"}),i.a.createElement(d.a,{style:f,icon:"search"})),i.a.createElement("div",{style:m},i.a.createElement(d.a,{style:f,icon:"plus"}),i.a.createElement(d.a,{style:f,icon:"bell"}),i.a.createElement(d.a,{style:f,shape:"circle",icon:"codepen"})))},h=a(46),y=a(23),x=a(311),g={borderRadius:"3px",zIndex:10,boxShadow:"0 1px 0 rgba(9, 30, 66, .25)",marginBottom:"8px",minHeight:"20px",maxWidth:"300px",padding:"0px !important"},v={padding:"6px 8px 2px"},E=function(e){var t=e.cards;return i.a.createElement("div",null,Object.values(t).sort((function(e,t){return e.position-t.position})).map((function(e){return i.a.createElement(x.a,{key:e.id,style:g,bodyStyle:v},e.title)})))},w=0,I=Object(l.b)({name:"cards",initialState:{},reducers:{addCard:{reducer:function(e,t){var a=t.payload,n=a.id,i=a.listId,r=a.title,l=a.description,o=Object.values(e).filter((function(e){return e.listId===i})).length;e[n]={id:n,listId:i,title:r,description:l,position:o}},prepare:function(e,t,a){return{payload:{listId:e,title:t,description:a,id:w++}}}},deleteCard:{reducer:function(e,t){delete e[t.payload.id]}},moveCard:{reducer:function(e,t){e[t.payload.id].listId=t.payload.listId}},moveCards:{reducer:function(e,t){Object.keys(e).forEach((function(a){e[a].listId===t.payload.listId&&(e[a].listId=t.payload.swapListId)}))}}}}),k=I.actions,j=k.addCard,O=(k.deleteCard,k.moveCard,k.moveCards,I.reducer),C=a(313),S=a(315),A={maxHeight:"162px",minHeight:"54px"},L={display:"flex",flexDirection:"row",justifyContent:"flex-start",alignContent:"center"},H={minHeight:"38px",maxHeight:"38px",backgroundColor:"#5aac44",color:"white"},B={borderColor:"#ebecf0",color:"#5e6c84",textAlign:"left",boxShadow:"none",height:"38px",width:"38px",minWidth:"38px"},D={borderColor:"#ebecf0",color:"#5e6c84",textAlign:"left",boxShadow:"none"},W={addCard:j},V=Object(o.b)(null,W)((function(e){var t=e.addCard,a=e.listId,r=e.isVisible,l=e.setIsVisible,o=e.fromDropDown,c=Object(n.useState)(""),s=Object(y.a)(c,2),u=s[0],p=s[1];return r?i.a.createElement(C.a,{layout:"inline",onSubmit:function(e){e.preventDefault(),u.trim()&&(t(a,u,""),p(""),l(!1))}},i.a.createElement(C.a.Item,{style:{width:"100%"}},i.a.createElement(S.a.TextArea,{style:A,value:u,onChange:function(e){return p(e.target.value)},type:"text",placeholder:"Enter a title for this card...",autoFocus:!0,autoSize:!0})),i.a.createElement(C.a.Item,null,i.a.createElement("div",{style:L},i.a.createElement(d.a,{htmlType:"submit",style:H,block:!0},"Add Card"),i.a.createElement(d.a,{ghost:!0,onClick:function(){l(!1),p("")},style:B,icon:"close"})))):r||o?null:i.a.createElement(d.a,{block:!0,ghost:!0,onClick:function(){l(!0)},style:D,icon:"plus"},"Add another card")})),M=a(316),z=a(9),P=a(312),R={width:"304px",overflow:"hidden"},T={margin:"4px 0"},G={display:"block",textAlign:"center",height:"40px",color:"#172b4d"},F={display:"block",lineHeight:"40px",margin:"0 12px",overflow:"hidden",padding:"0 32px",textOverflow:"ellipsis",whiteSpace:"nowrap"},Y={overflowX:"hidden",overflowY:"auto",padding:"0 12px 12px"},J={cursor:"pointer",display:"block",fontWeight:"400",padding:"6px 12px",margin:"0 -12px",textDecoration:"none",color:"#172b4d"},X=function(e){var t=e.setIsVisible,a=e.setShowingMoveList;return i.a.createElement(P.a,{onClick:function(e){return function(e,t,a){"1"===e.key?t(!0):"3"===e.key&&a(!0)}(e,t,a)},style:R},i.a.createElement(P.a.Item,{style:G},i.a.createElement("span",{style:F},"List Actions")),i.a.createElement(P.a.Divider,{style:T}),i.a.createElement(P.a.ItemGroup,{style:Y},i.a.createElement(P.a.Item,{key:"1",style:J},"Add Card..."),i.a.createElement(P.a.Item,{key:"2",style:J},"Copy List..."),i.a.createElement(P.a.Item,{key:"3",style:J},"Move List..."),i.a.createElement(P.a.Item,{key:"4",style:J},"Watch"),i.a.createElement(P.a.Divider,{style:T}),i.a.createElement(P.a.Item,{key:"5",style:J},"Sort By..."),i.a.createElement(P.a.Divider,{style:T}),i.a.createElement(P.a.Item,{key:"6",style:J},"Move All Cards in This List..."),i.a.createElement(P.a.Item,{key:"7",style:J},"Archive All Cards in This List..."),i.a.createElement(P.a.Divider,{style:T}),i.a.createElement(P.a.Item,{key:"8",style:J},"Archive This List")))},N=a(314),$=0,q=Object(l.b)({name:"lists",initialState:{},reducers:{addList:{reducer:function(e,t){var a=t.payload,n=a.id,i=a.boardId,r=a.title,l=Object.values(e).filter((function(e){return e.boardId===i})).length;e[n]={id:n,boardId:i,title:r,position:l}},prepare:function(e,t){return{payload:{boardId:e,title:t,id:$++}}}},deleteList:{reducer:function(e,t){delete e[t.payload.id]}},moveList:{reducer:function(e,t){var a=t.payload,n=a.listId,i=a.newPosition,r=a.newBoardId;console.log(i);var l=[];if(Object.keys(e).map((function(t){return e[t].boardId===r?l.push([e[t],t]):null})),l.sort((function(e,t){return e[0].position-t[0].position})),e[n].boardId!=r&&(e[n].position=l.length,e[n].boardId=r,l.push([e[n],n])),e[n].position<l.length-1)for(var o=e[n].position+1;o<=i;o++)l[o][0].position-=1;else for(var c=i;c<e[n].position;c++)l[c][0].position+=1;e[n].position=i,l.forEach((function(t){return e[t[1]].position=t[0].position}))},prepare:function(e,t,a){return{payload:{listId:e,newPosition:t,newBoardId:a}}}}}}),K=q.actions,Q=K.addList,U=(K.deleteList,K.moveList),Z=q.reducer,_=function(e){return e[Object.keys(e).find((function(t){return!0===e[t].isActive}))]},ee=function(e){return e.title},te=function(e){return e.id},ae=function(e){return e.position},ne=N.a.Option,ie={width:"304px",overflow:"hidden",height:"auto"},re={margin:"4px 0"},le={display:"flex",alignItems:"center",textAlign:"center",justifyContent:"space-between",height:"40px",color:"#172b4d"},oe={display:"block",lineHeight:"40px",margin:"0 12px",overflow:"hidden",padding:"0 32px",textOverflow:"ellipsis",whiteSpace:"nowrap"},ce={borderColor:"transparent",color:"#5e6c84",textAlign:"left",boxShadow:"none",display:"block",height:"auto",padding:"10px 8px 10px 12px"},se={left:0,margin:0,border:"none",width:"100%"},de={height:"8px",margin:"8px",padding:"4px",fontSize:"14px",fontWeight:600},ue={moveList:U},pe=Object(o.b)((function(e){return{boards:e.boards,lists:e.lists}}),ue)((function(e){var t=e.setIsVisible,a=e.setShowingMoveList,r=e.listId,l=e.boards,o=e.lists,c=e.moveList,s=Object(n.useState)(te(_(l))),u=Object(y.a)(s,2),p=u[0],m=u[1],f=Object(n.useState)(ae(o[r])),b=Object(y.a)(f,2),h=b[0],x=b[1];return i.a.createElement(P.a,{onClick:function(e){return function(e,t,a){"1"===e.key?t(!0):"3"===e.key&&a(!0)}(e,t,a)},style:ie},i.a.createElement(P.a.Item,{style:le},i.a.createElement(d.a,{onClick:function(){return a(!1)},icon:"left",style:ce}),i.a.createElement("span",{style:oe},"Move List"),i.a.createElement(d.a,{icon:"close",style:ce})),i.a.createElement(P.a.Divider,{style:re}),i.a.createElement("div",null,i.a.createElement("div",{style:de},"Board: "),i.a.createElement(N.a,{defaultValue:ee(_(l)),style:se,onChange:function(e){return m(e)}},Object.keys(l).map((function(e){return i.a.createElement(ne,{value:te(l[e]),key:e},ee(l[e]))})))),i.a.createElement("div",{style:de},"Position: "),i.a.createElement(N.a,{defaultValue:r,style:se,onChange:function(e){return x(e)}},Object.keys(o).map((function(e){return o[e].boardId==p?i.a.createElement(ne,{value:ae(o[e]),key:e},ae(o[e]),ae(o[e])===r?" (current)":null):null}))),i.a.createElement(P.a.Item,null,i.a.createElement(d.a,{onClick:function(){return c(r,h,p)}},"Move")))})),me=function(e){var t=e.setIsVisible,a=e.showingMoveList,n=e.setShowingMoveList,r=e.listId;return a?i.a.createElement(pe,{setIsVisible:t,setShowingMoveList:n,listId:r}):i.a.createElement(X,{setIsVisible:t,setShowingMoveList:n})},fe={borderColor:"#ebecf0",color:"#5e6c84",textAlign:"left",boxShadow:"none",float:"right"},be=function(e){var t=e.setIsVisible,a=e.listId,r=Object(n.useState)(!1),l=Object(y.a)(r,2),o=l[0],c=l[1];return i.a.createElement(M.a,{overlay:i.a.createElement(me,{setIsVisible:t,showingMoveList:o,setShowingMoveList:c,listId:a}),trigger:["click"],placement:"bottomRight"},i.a.createElement(z.a,{type:"ellipsis",style:fe}))},he={width:"272px",height:"100%",margin:"0 4px",boxSizing:"border-box",display:"inline-block",verticalAlign:"top"},ye={width:"272px",backgroundColor:"#ebecf0",marginLeft:"8px",borderRadius:"3px",boxSizing:"border-box",display:"flex",flexDirection:"column",maxHeight:"100%",overflowY:"hidden"},xe={},ge={flex:"0 0 auto",padding:"10px 8px",position:"relative",minHeight:"20px",fontWeight:600},ve={minWidth:"100%",position:"relative",padding:"4px 0px",display:"flex",justify:"space-between"},Ee={borderColor:"#ebecf0",color:"#5e6c84",textAlign:"left",boxShadow:"none",float:"right"},we=function(e){var t=e.id,a=e.title,r=e.cards,l=Object(n.useRef)(null),o=Object(n.useState)(!1),c=Object(y.a)(o,2),s=c[0],d=c[1],u=Object(n.useState)(!1),p=Object(y.a)(u,2),m=p[0],f=p[1];Object(n.useEffect)((function(){return document.addEventListener("mousedown",b,!1),function(){document.removeEventListener("mousedown",b,!1)}}),[]);var b=function(e){l.current&&!l.current.contains(e.target)&&(d(!1),f(!1))};return i.a.createElement("div",{style:he,ref:l},i.a.createElement(x.a,{style:ye,bodyStyle:{padding:"0 4px"}},i.a.createElement("div",{style:xe},i.a.createElement("div",{style:ge},a," ",i.a.createElement(be,{style:Ee,setIsVisible:d,listId:t})),i.a.createElement("div",{style:ve},i.a.createElement(V,{listId:t,isVisible:s,setIsVisible:d,fromDropDown:!0},"Add another card")),i.a.createElement("div",{style:{zIndex:10,maxHeight:"80vh",overflowY:"scroll"}},i.a.createElement(E,{cards:r})),i.a.createElement("div",{style:ve},i.a.createElement(V,{listId:t,isVisible:m,setIsVisible:f,fromDropDown:!1},"Add another card")))))},Ie={marginLeft:"8px",minHeight:"38px",maxHeight:"38px",backgroundColor:"hsla(0, 0%, 100%, .24)",color:"white",borderColor:"transparent",width:"272px",display:"flex",justifyContent:"flex-start",maxWidth:"272px"},ke={marginLeft:"8px"},je={addList:Q},Oe=Object(o.b)(null,je)((function(e){var t=e.addList,a=e.boardId,r=Object(n.useState)(!1),l=Object(y.a)(r,2),o=l[0],c=l[1],s=Object(n.useState)(""),u=Object(y.a)(s,2),p=u[0],m=u[1];return o?i.a.createElement(C.a,{layout:"inline",onSubmit:function(e){e.preventDefault(),p.trim()&&(t(parseInt(a,10),p),m(""),c(!1))},style:ke},i.a.createElement(C.a.Item,null,i.a.createElement(S.a,{value:p,onChange:function(e){return m(e.target.value)},type:"text",placeholder:"Enter a list title...",autoFocus:!0})),i.a.createElement(C.a.Item,null,i.a.createElement(d.a,{htmlType:"submit",style:Ie},"Add List"))):i.a.createElement(d.a,{onClick:function(){return c(!0)},style:Ie,icon:"plus"},"Add another list")})),Ce={display:"flex",overflowX:"auto",flexWrap:"nowrap"},Se=Object(o.b)((function(e){return{cards:e.cards}}),null)((function(e){var t=e.boardId,a=e.lists,n=e.cards;return i.a.createElement("div",{style:Ce},a?Object.values(a).sort((function(e,t){return e.position-t.position})).map((function(e,t){return i.a.createElement(we,Object.assign({key:e.id},e,{cards:Object.values(n).filter((function(t){return parseInt(t.listId)===e.id}))}))})):null,i.a.createElement(Oe,{boardId:t}))})),Ae=Object(o.b)((function(e){return{lists:e.lists}}),null)((function(e){var t=e.id,a=e.lists;return i.a.createElement("div",null,i.a.createElement(Se,{boardId:t,lists:Object.values(a).filter((function(e){return parseInt(e.boardId)===parseInt(t)}))}))})),Le=0,He=Object(l.b)({name:"boards",initialState:{},reducers:{addBoard:{reducer:function(e,t){var a=t.payload,n=a.id,i=a.title,r=a.isPrivate,l=a.isActive;e[n]={id:n,title:i,isPrivate:r,isActive:l}},prepare:function(e,t,a){return{payload:{title:e,isPrivate:t,isActive:a,id:Le++}}}},deleteBoard:{reducer:function(e,t){delete e[t.payload.id]}},setActive:{reducer:function(e,t){Object.keys(e).forEach((function(t){!0===e[t].isActive&&(e[t].isActive=!1)})),e[t.payload.id].isActive=t.payload.isActive},prepare:function(e,t){return{payload:{id:e,isActive:t}}}}}}),Be=He.actions,De=Be.addBoard,We=(Be.deleteBoard,Be.setActive),Ve=He.reducer,Me={marginRight:"8px",marginBottom:"8px",backgroundColor:"#97a0af",height:"80px",width:"100%",fontSize:"16px",fontWeight:700,color:"white",borderColor:"transparent"},ze={marginLeft:"8px"},Pe={addBoard:De},Re=Object(o.b)(null,Pe)((function(e){var t=e.addBoard,a=Object(n.useState)(!1),r=Object(y.a)(a,2),l=r[0],o=r[1],c=Object(n.useState)(""),s=Object(y.a)(c,2),u=s[0],p=s[1];return l?i.a.createElement(C.a,{layout:"inline",onSubmit:function(e){e.preventDefault(),u.trim()&&(t(u,!0,!1),p(""),o(!1))},style:ze},i.a.createElement(C.a.Item,null,i.a.createElement(S.a,{value:u,onChange:function(e){return p(e.target.value)},type:"text",placeholder:"Enter a board title...",autoFocus:!0})),i.a.createElement(C.a.Item,null,i.a.createElement(d.a,{htmlType:"submit",style:Me},"Add Board"))):i.a.createElement(d.a,{onClick:function(){return o(!0)},style:Me},"Create new board")})),Te={backgroundColor:"rgb(81, 152, 57)",height:"80px",width:"100%",fontSize:"16px",fontWeight:700,color:"white",display:"inline-block",overflow:"hidden",wordWrap:"break-word",flex:"0 0 auto",borderColor:"transparent"},Ge={setActive:We},Fe=Object(o.b)(null,Ge)((function(e){var t=e.id,a=e.title,n=(e.isPrivate,e.setActive);return i.a.createElement(c.b,{to:"/user/boards/"+t},i.a.createElement(d.a,{style:Te,onClick:function(){return n(t,!0)}},a))})),Ye={color:"white",fontSize:"24px",lineHeight:"20px",fontWeight:400},Je={display:"flex",flexWrap:"wrap",flexGrow:1,minHeight:"100%",width:"100%"},Xe={width:"calc(50% - 4px)",marginRight:"4px",marginBottom:"4px"},Ne=Object(o.b)((function(e){return{boards:e.boards}}),null)((function(e){var t=e.boards;return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("p",{style:Ye},i.a.createElement(z.a,{type:"user"})," Personal Boards")),i.a.createElement("div",{style:Je},Object.values(t).map((function(e,t){return i.a.createElement("div",{style:Xe,key:t+e.id},i.a.createElement(Fe,Object.assign({key:e.id},e)))})),i.a.createElement("div",{style:Xe},i.a.createElement(Re,null))))})),$e=function(){return i.a.createElement("main",null,i.a.createElement(h.d,null,i.a.createElement(h.b,{exact:!0,path:"/user/boards/:id",render:function(e){return i.a.createElement(Ae,{id:e.match.params.id})}}),i.a.createElement(h.b,{exact:!0,path:"/user/boards",render:function(){return i.a.createElement(Ne,null)}}),i.a.createElement(h.b,{exact:!0,path:"/",render:function(){return i.a.createElement(h.a,{to:"/user/boards"})}})))},qe={backgroundColor:"black",minHeight:"100vh",fontFamily:"Helvetica",fontSize:"14px",fontWeight:400,lineHeight:"20px"},Ke={padding:"4px",backgroundColor:"black",height:"100%"};var Qe=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(s.a,{style:qe},i.a.createElement(b,null),i.a.createElement(s.a.Content,{style:Ke},i.a.createElement($e,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ue=a(27),Ze=Object(Ue.combineReducers)({cards:O,lists:Z,boards:Ve}),_e=Object(l.a)({reducer:Ze});Object(r.render)(i.a.createElement(o.a,{store:_e},i.a.createElement(c.a,null,i.a.createElement(Qe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[157,1,2]]]);
//# sourceMappingURL=main.602440c9.chunk.js.map