(this["webpackJsonpoc-voltec"]=this["webpackJsonpoc-voltec"]||[]).push([[0],{178:function(e,t,a){e.exports=a(313)},184:function(e,t,a){},186:function(e,t,a){},207:function(e,t){},209:function(e,t){},247:function(e,t){},248:function(e,t){},308:function(e,t,a){},310:function(e,t,a){},311:function(e,t,a){},312:function(e,t,a){},313:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),l=(a(183),a(184),a(18)),i=a(42),s=a(15),u=a.n(s),m=a(27),d=a(9),p=(a(186),a(4)),v=a(346),E=a(54),b=a(105),f=a(375),g=a(351),h=a(166),O=a.n(h).a.create({baseURL:"http://apposvoltecrs-com.umbler.net/api/"}),j=a(203);var S=Object(p.a)((function(){return{input:{margin:"1rem"},paper:{padding:25},button:{marginTop:"1.5rem",marginBottom:"1rem",padding:"0 2rem 0 2rem"},title:{marginBottom:"4rem",color:"#ffffff"}}}))((function(e){var t=e.classes,a=Object(n.useState)(""),c=Object(d.a)(a,2),o=c[0],l=c[1],s=Object(n.useState)(""),p=Object(d.a)(s,2),h=p[0],S=p[1],k=Object(i.g)();if(localStorage.getItem("token"))return k.push("/dashboard"),null;function y(){return(y=Object(m.a)(u.a.mark((function e(t){var a,n,r,c,l,i,s,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={login:o,userPassword:h},e.prev=2,e.next=5,O.post("login",a);case 5:n=e.sent,r=n.data,c=r.token,l=r.isAdmin,i=j.decode(c),s=i.userId,m=i.name,console.log(s),localStorage.setItem("name",m),localStorage.setItem("userId",s),localStorage.setItem("token",c),localStorage.setItem("isAdmin",l),c&&k.push("/dashboard"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"loginContainer"},r.a.createElement(v.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(E.a,{variant:"h2",className:t.title},"Entrar"),r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){return y.apply(this,arguments)}},r.a.createElement(b.a,{elevation:3,className:t.paper},r.a.createElement(v.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(f.a,{className:t.input,label:"Login",onChange:function(e){return l(e.target.value)}}),r.a.createElement(f.a,{className:t.input,label:"Senha",type:"password",onChange:function(e){return S(e.target.value)}}),r.a.createElement(g.a,{className:t.button,size:"large",variant:"outlined",color:"primary",disableElevation:!0,type:"submit"},r.a.createElement("span",null,"Entrar")))))))})),k=a(363),y=a(364),N=a(365),w=a(360),C=a(350),x=a(361),I=a(362),A=a(168),F=a(353),z=a(354),B=a(314),T=a(377),P=a(355),R=a(169),W=a.n(R),D=a(352),H=function(){return r.a.createElement("div",null,r.a.createElement(g.a,{color:"inherit"},r.a.createElement(D.a,null),r.a.createElement(l.b,{to:"/dashboard"}," Voltar")))},V=(a(308),Object(P.a)((function(e){return{toolBar:{display:"flex",justifyContent:"space-between"}}}))),M=function(e){var t=r.a.useState({open:!1}),a=Object(d.a)(t,2),n=a[0],c=a[1],o=Object(i.g)(),l=V(),s=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&c(Object(A.a)({},n,{open:e}))}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{position:"sticky"},r.a.createElement(z.a,{className:l.toolBar},!0===e.backButton&&r.a.createElement(H,null),r.a.createElement(E.a,{variant:"h6",color:"inherit"},e.title),r.a.createElement(B.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:s(!0)},r.a.createElement(W.a,null)))),r.a.createElement(T.a,{anchor:"right",open:n.open,onClose:s(!1)},r.a.createElement("div",{className:"side-menu"},r.a.createElement(E.a,{onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("isAdmin"),localStorage.removeItem("name"),localStorage.removeItem("userId"),o.push("/")},variant:"h6"},"Sair"))))},L=a(356),U=a(357),J=a(358),_=a(359),Q=Object(P.a)({cardHeader:{display:"flex",flexDirection:"row",justifyContent:"space-between"},cardActions:{marginLeft:"auto"},card:{marginTop:"1rem",marginBottom:"1rem"},inProgress:{color:"red"},complete:{color:"green"}}),Y=function(e){var t=e.status,a=e.type,n=e.name,c=e.description,o=e.date,i=e.serviceOrder,s=e.id,u=Q();return r.a.createElement("div",{className:u.card},r.a.createElement(L.a,null,r.a.createElement(U.a,null,r.a.createElement("div",{className:u.cardHeader},r.a.createElement(E.a,{variant:"h6"},i),"complete"===t&&r.a.createElement(E.a,{variant:"subtitle1",className:u.complete},"Conclu\xeddo"),"inprogress"===t&&r.a.createElement(E.a,{variant:"subtitle1",className:u.inProgress},"Em Andamento"),"active"===t&&r.a.createElement(E.a,{variant:"subtitle1",className:u.complete},"Ativa"),1===a&&r.a.createElement(E.a,{variant:"h6"},"Obra"),2===a&&r.a.createElement(E.a,{variant:"h6"},"Defeito"),3===a&&r.a.createElement(E.a,{variant:"h6"},"Contru\xe7\xe3o")),r.a.createElement(E.a,{variant:"subtitle1"},n),r.a.createElement(E.a,{variant:"subtitle2"},c),r.a.createElement(E.a,{variant:"caption",color:"textSecondary"},o)),r.a.createElement(J.a,null,r.a.createElement("div",{className:u.cardActions},r.a.createElement(g.a,{color:"primary"},r.a.createElement(l.b,{to:"/order/".concat(s)},"Abrir ordem"),r.a.createElement(_.a,null))))))};var Z=Object(p.a)({container:{paddingBottom:"3rem"},navTab:{position:"fixed",bottom:0,width:"100vw"},headingFive:{position:"absolute",top:"30vh",left:"30vw"}})((function(e){var t=e.classes,a=localStorage.getItem("token"),c=Object(n.useState)(0),o=Object(d.a)(c,2),l=o[0],i=o[1],s=Object(n.useState)([]),p=Object(d.a)(s,2),b=p[0],f=p[1],g=Object(n.useState)("active"),h=Object(d.a)(g,2),j=h[0],S=h[1],A=localStorage.getItem("userId");function F(e){S(e)}Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get("orders/".concat(A,"/").concat(j),{headers:{"x-access-token":a}});case 3:t=e.sent,f(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),window.scrollTo({top:0,left:0,behavior:"smooth"})}),[j,a]);var z={year:"numeric",month:"numeric",day:"numeric",hour12:!1,timeZone:"America/Sao_Paulo"},B=b.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(Y,{status:e.status,type:e.type,serviceOrder:e.serviceOrder,name:e.clientName,description:e.service,id:e.id,date:new Intl.DateTimeFormat("pt-BR",z).format(e.serviceDate)}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{title:"Ordens de servi\xe7o"}),r.a.createElement(w.a,{className:t.container},r.a.createElement(v.a,null,r.a.createElement(C.a,null,b.length?B:r.a.createElement(E.a,{className:t.headingFive,variant:"h5"},"Nenhuma Ordem!")))),r.a.createElement(x.a,{value:l,onChange:function(e,t){i(t)},showLabels:!0,className:t.navTab},r.a.createElement(I.a,{label:"Ordens Ativas",icon:r.a.createElement(k.a,null),onClick:function(){return F("active")}}),r.a.createElement(I.a,{label:"Em Andamento",icon:r.a.createElement(y.a,null),onClick:function(){return F("inprogress")}}),r.a.createElement(I.a,{label:"Conclu\xeddas",icon:r.a.createElement(N.a,null),onClick:function(){return F("complete")}})))})),$=a(376),q=a(368),G=a(369),K=a(170),X=a(171),ee=a.n(X),te=(a(310),a(311),function(e){var t=e.children,a=e.height,n=e.padding,c=Object(P.a)({srollView:{overflowY:"scroll",height:"".concat(a,"vh"),paddingRight:"".concat(n,"rem")}})();return r.a.createElement("div",{className:c.srollView},t)}),ae=a(366),ne=a(367),re=function(e){return 1!==e.currentStep?null:r.a.createElement("div",null,r.a.createElement(ae.a,{open:!0},r.a.createElement("div",{className:"step-container"},r.a.createElement(ne.a,null,"Concluido?"),r.a.createElement("div",{className:"step-buttons"},r.a.createElement(g.a,{variant:"contained",className:"step-button",color:"secondary",disableElevation:!0,onClick:e.prev},"N\xe3o"),r.a.createElement(g.a,{variant:"contained",className:"step-button",color:"primary",disableElevation:!0,onClick:e.next},"Sim")))))},ce=function(e){var t=Object(n.useState)(!0),a=Object(d.a)(t,2),c=a[0],o=a[1];return"percentageStep"!==e.currentStep?null:r.a.createElement("div",null,r.a.createElement(ae.a,{open:c},r.a.createElement("div",{className:"step-container"},r.a.createElement(ne.a,null,"Porcentagem"),r.a.createElement(f.a,{type:"number",label:"Porcentagem",placeholder:"%",name:"percent",value:e.value,onChange:e.onChange}),r.a.createElement("div",{className:"step-buttons"},r.a.createElement(g.a,{variant:"contained",className:"step-button",color:"secondary",disableElevation:!0,onClick:function(){return o(!1)}},"Cancelar"),r.a.createElement(g.a,{variant:"contained",className:"step-button",color:"primary",disableElevation:!0,onClick:function(){return o(!1)}},r.a.createElement(l.b,{className:"links",to:"/dashboard"},"Finalizar"))))))},oe=function(e){return 2!==e.currentStep?null:r.a.createElement("div",null,r.a.createElement(ae.a,{open:!0},r.a.createElement("div",{className:"step-container"},r.a.createElement(ne.a,null,"Servi\xe7o Realizado"),r.a.createElement(f.a,{multiline:!0,label:"Servi\xe7o Realizado",name:"service",value:e.value,onChange:e.onChange}),r.a.createElement("div",{className:"step-buttons"},r.a.createElement(g.a,{variant:"contained",className:"step-button",color:"secondary",disableElevation:!0,onClick:e.prev},"Voltar"),r.a.createElement(g.a,{variant:"contained",className:"step-button",color:"primary",disableElevation:!0,onClick:e.next},"Continuar")))))},le=function(e){var t=Object(n.useState)(!0),a=Object(d.a)(t,2),c=a[0];a[1];return 3!==e.currentStep?null:r.a.createElement("div",null,r.a.createElement(ae.a,{open:c},r.a.createElement("div",{className:"step-container"},r.a.createElement(ne.a,null,"Observa\xe7\xf5es"),r.a.createElement(f.a,{label:"Observa\xe7\xf5es",name:"observation",value:e.value,onChange:e.onChange}),r.a.createElement("div",{className:"step-buttons"},r.a.createElement(g.a,{variant:"contained",className:"step-button",color:"secondary",disableElevation:!0,onClick:e.prev},"Voltar"),r.a.createElement(g.a,{variant:"contained",className:"step-button",color:"primary",disableElevation:!0,onClick:e.onClick},r.a.createElement(l.b,{className:"links",to:"/dashboard"},"Finalizar"))))))},ie=(a(312),function(e){var t=e.time,a=Object(i.h)().id,c=localStorage.getItem("token"),o=Object(n.useState)(1),l=Object(d.a)(o,2),s=l[0],p=l[1],v=Object(n.useState)(""),E=Object(d.a)(v,2),b=E[0],f=E[1],g=Object(n.useState)(""),h=Object(d.a)(g,2),j=h[0],S=h[1],k=Object(n.useState)(""),y=Object(d.a)(k,2),N=y[0],w=y[1];function C(){return(C=Object(m.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={serviceCompleted:j,observation:N,time:t,percentage:b,status:"complete"},console.log(n),e.prev=2,e.next=5,O.put("order/".concat(a),n,{headers:{"x-access-token":c}});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}var x=function(e){p("percentageStep"!==e?s>=2?3:s+1:"percentageStep")},I=function(){p(s<=1?1:s-1)};return r.a.createElement("div",null,r.a.createElement(re,{currentStep:s,next:x,prev:function(){return x("percentageStep")}}),r.a.createElement(ce,{currentStep:s,next:x,value:b,onChange:function(e){return f(e.target.value)}}),r.a.createElement(oe,{currentStep:s,next:x,prev:I,value:j,onChange:function(e){return S(e.target.value)}}),r.a.createElement(le,{currentStep:s,next:x,prev:I,value:N,onChange:function(e){return w(e.target.value)},onClick:function(){return C.apply(this,arguments)}}))});var se=Object(P.a)({cardHeader:{margin:"2rem",padding:"1rem",position:"relative",bottom:"-8rem",marginTop:"-5rem"},margin:{marginBottom:"1.2rem"}}),ue=function(){var e=Object(K.useStopwatch)(),t=e.seconds,a=e.minutes,c=e.hours,o=e.start,s=e.pause,p=Object(n.useState)([]),v=Object(d.a)(p,2),f=v[0],h=v[1],j=Object(n.useState)(!1),S=Object(d.a)(j,2),k=S[0],y=S[1],N=Object(n.useState)(!1),w=Object(d.a)(N,2),x=w[0],I=w[1],A=Object(n.useState)(!1),F=Object(d.a)(A,2),z=F[0],B=F[1],T=Object(n.useState)([]),P=Object(d.a)(T,2),R=P[0],W=P[1],D=Object(n.useState)([]),H=Object(d.a)(D,2),V=H[0],L=H[1],U=Object(n.useState)({color:"primary",text:"Iniciar"}),J=Object(d.a)(U,2),_=J[0],Q=J[1],Y=Object(n.useState)({timeSeconds:"00",timeMinutes:"00",timeHours:"00"}),Z=Object(d.a)(Y,2),X=Z[0],ae=Z[1];Object(n.useEffect)((function(){ae({timeSeconds:"0".concat(t).slice(-2),timeMinutes:"0".concat(a).slice(-2),timeHours:"0".concat(c).slice(-2)})}),[c,a,t]);var ne=Object(i.h)().id,re=localStorage.getItem("userId"),ce=localStorage.getItem("token");function oe(e){return le.apply(this,arguments)}function le(){return(le=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={userId:re,orderId:ne,type:t,start:k},e.prev=1,e.next=4,O.post("resume",a,{headers:{"x-access-token":ce}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}function ue(){return me.apply(this,arguments)}function me(){return(me=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("resume/".concat(ne),{headers:{"x-access-token":ce}});case 2:t=e.sent,L(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(){!1===x?(oe(2),I(!0),ue(),s()):(oe(1),I(!1),ue(),o())}Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get("order/".concat(ne),{headers:{"x-access-token":ce}});case 3:t=e.sent,W(t.data),"inprogress"===t.data.status&&(y(!0),Q({color:"secondary",text:"Finalizar"}),I(!0)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get("cars/".concat(R.serviceOrder,"/").concat(re),{headers:{"x-access-token":ce}});case 3:t=e.sent,h(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[R.serviceOrder,ce,re]);var pe=se(),ve=f.map((function(e){return r.a.createElement(E.a,{key:e.carId,variant:"subtitle1"},e.carName," ","-"," ",e.carNumber)})),Ee=V.map((function(e){return r.a.createElement(E.a,{key:e.id},1===e.type?"Entrada":"Sa\xedda"," ","-"," ",e.created_at)})),be=Object(n.useCallback)((function(){B(!0),console.log(k)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{backButton:!0}),r.a.createElement(b.a,{className:pe.cardHeader},r.a.createElement("div",{className:"card-header"},r.a.createElement(E.a,{variant:!0},"Pedido:",R.order),r.a.createElement(E.a,null,"OS:",R.serviceOrder)),r.a.createElement("div",{className:"card-content"},r.a.createElement(E.a,{variant:"h5"},R.clientName),r.a.createElement(E.a,{variant:"h6"},R.phoneNumber),r.a.createElement(E.a,null,R.city," ","-"," ",R.uf),r.a.createElement(E.a,{variant:"body2"},R.adress,","," ",R.district),r.a.createElement(g.a,{color:"primary",href:"https://waze.com/ul?ll=-29.7023078,-51.1271811&z=10&navigate=yes"},"Abrir no Waze"))),r.a.createElement("div",{className:"content-header"}),r.a.createElement("div",{className:"content"},!0===k&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"status-header"},r.a.createElement(E.a,null,X.timeHours,":",X.timeMinutes,":",X.timeSeconds)),r.a.createElement("div",{className:"status-button"},!0!==x?r.a.createElement(g.a,{variant:"outlined",color:"secondary",onClick:function(){return de()}},"Parar"):r.a.createElement(g.a,{variant:"outlined",color:"primary",onClick:function(){return de()}},"Voltar"))),r.a.createElement(E.a,{variant:"h6"},"Servi\xe7o Solicitado:"),r.a.createElement(E.a,{variant:"subtitle1",className:pe.margin},R.service),r.a.createElement(E.a,{variant:"h6"},"Descri\xe7\xe3o:"),r.a.createElement(E.a,{variant:"subtitle1",className:pe.margin},R.description),r.a.createElement(E.a,{variant:"h6"},"Ve\xedculos"),ve,r.a.createElement($.a,null,r.a.createElement(q.a,{expandIcon:r.a.createElement(ee.a,null),"aria-controls":"panel1a-content",id:"panel1a-header",onClick:ue},r.a.createElement(E.a,null,"Resumo")),r.a.createElement(G.a,null,r.a.createElement(C.a,null,r.a.createElement(te,{height:"20",paddin:!0,g:"1"},Ee)))),r.a.createElement("div",{className:"footer"},"complete"===R.status?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h6"},"Servi\xe7o Realizado:"),r.a.createElement(E.a,{variant:"subtitle1",className:pe.margin},R.serviceCompleted),r.a.createElement(E.a,{variant:"h6"},"Observa\xe7\xe3o:"),r.a.createElement(E.a,{variant:"subtitle1",className:pe.margin},R.observation),r.a.createElement(E.a,{variant:"h6"},"Tempo / Deslocamento"),r.a.createElement(E.a,{variant:"subtitle1",className:pe.margin},"Tempo:"," ",R.time,", Deslocamento:"," ",R.distance,"km")):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{disabled:!x&&k,disableElevation:!0,variant:"contained",onClick:function(){k?be():(y(!0),I(!1),Q({color:"secondary",text:"Finalizar"}),o(),oe(1))},className:pe.margin,color:_.color,size:"large"},_.text),r.a.createElement(g.a,{disableElevation:!0,variant:"contained",size:"large"},r.a.createElement(l.b,{to:"/solicitar",className:"links"},"Soliciar Material")),!0===z&&r.a.createElement(ie,{time:"".concat(X.timeHours,":").concat(X.timeMinutes,":").concat(X.timeSeconds)})))))},me=a(370),de=a(371),pe=a(372),ve=a(373),Ee=a(374);var be=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(d.a)(o,2),i=l[0],s=l[1],p=Object(n.useState)(""),b=Object(d.a)(p,2),h=b[0],j=b[1],S=Object(n.useState)(""),k=Object(d.a)(S,2),y=(k[0],k[1]),N=Object(n.useState)(""),w=Object(d.a)(N,2),x=(w[0],w[1]),I=Object(n.useState)(!1),A=Object(d.a)(I,2),F=A[0],z=A[1],B=localStorage.getItem("token"),T=localStorage.getItem("name");Object(n.useEffect)((function(){i.length>0&&setTimeout(Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("products/".concat(i),{headers:{"x-access-token":B}});case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)}))),500)}),[i,B]);var P=a.map((function(e){return r.a.createElement(me.a,{button:!0,onClick:function(){z(!0),j(e.productName),y(T)}},r.a.createElement(de.a,{primary:e.productName,key:e.id}))})),R=function(){z(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{backButton:!0}),r.a.createElement("div",{style:{padding:"1rem"}},r.a.createElement(v.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(f.a,{label:"Nome do Material",onChange:function(e){return e.target.value.length?s(e.target.value):c([""])}}),a.length>1&&r.a.createElement(E.a,{variant:"subtitle1"},a.length," ","produtos encontrados."),r.a.createElement(C.a,null,P))),r.a.createElement(ae.a,{open:F,onClose:R,"aria-labelledby":"form-dialog-title"},r.a.createElement(ne.a,{id:"form-dialog-title"},"Solicitar Material,"," ",T,"?"),r.a.createElement(pe.a,null,r.a.createElement(ve.a,null,h),r.a.createElement(f.a,{autoFocus:!0,margin:"dense",id:"name",label:"Quantidade a solicitar:",type:"text",fullWidth:!0,onChange:function(e){return x(e.target.value)}})),r.a.createElement(Ee.a,null,r.a.createElement(g.a,{onClick:R,color:"Secondary"},"Cancelar"),r.a.createElement(g.a,{onClick:R,color:"primary"},"Solicitar"))))},fe=a(2),ge=function(e){var t=e.component,a=Object(fe.a)(e,["component"]),n=localStorage.getItem("token");return r.a.createElement(i.b,Object.assign({},a,{render:function(){return n?r.a.createElement(t,a):r.a.createElement(i.a,{to:"/"})}}))};function he(){return r.a.createElement(l.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(S,null)),r.a.createElement(ge,{path:"/dashboard",component:Z}),r.a.createElement(ge,{path:"/order/:id",component:ue}),r.a.createElement(ge,{path:"/solicitar",component:be})))}var Oe=function(){return r.a.createElement(he,null)},je=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Se(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(Oe,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");je?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Se(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Se(t,e)}))}}()}},[[178,1,2]]]);
//# sourceMappingURL=main.f680f3a1.chunk.js.map