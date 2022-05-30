(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[19],{396:function(e,t,r){"use strict";var a=r(7),n=Object(a.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=n},397:function(e,t,r){"use strict";var a=r(5),n=r(86),c=r(4),s=(r(0),r(289)),i=r(117),o=r(1),l=["children"],j=Object(s.a)((function(e){var t;return{card:(t={maxWidth:"475px","& > *":{flexGrow:1,flexBasis:"50%"}},Object(c.a)(t,e.breakpoints.down("sm"),{margin:"20px"}),Object(c.a)(t,e.breakpoints.down("lg"),{maxWidth:"400px"}),t),content:Object(c.a)({padding:e.spacing(5)+" !important"},e.breakpoints.down("lg"),{padding:e.spacing(3)+" !important"})}}));t.a=function(e){var t=e.children,r=Object(n.a)(e,l),c=j();return Object(o.jsx)(i.a,Object(a.a)(Object(a.a)({className:c.card,contentClass:c.content},r),{},{children:t}))}},399:function(e,t,r){"use strict";r(0);var a=r(344),n=r(1);t.a=function(){return Object(n.jsx)(a.a,{direction:"row",justifyContent:"space-between"})}},403:function(e,t,r){"use strict";var a=r(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},414:function(e,t,r){"use strict";var a=r(54),n=r(6),c=r(2),s=r(0),i=(r(8),r(9)),o=r(279),l=r(122),j=r(10),d=r(11),b=r(7),u=r(214),m=r(280);function O(e){return Object(u.a)("MuiCircularProgress",e)}Object(m.a)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var h,x,p,f,v,g,y,k,w=r(1),C=44,P=Object(l.c)(v||(v=h||(h=Object(a.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),S=Object(l.c)(g||(g=x||(x=Object(a.a)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),I=Object(b.a)("span",{},{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,t){var r=e.styleProps;return Object(c.a)({},t.root,t[r.variant],t["color".concat(Object(j.a)(r.color))])}})((function(e){var t=e.styleProps,r=e.theme;return Object(c.a)({display:"inline-block"},"determinate"===t.variant&&{transition:r.transitions.create("transform")},"inherit"!==t.color&&{color:r.palette[t.color].main})}),(function(e){return"indeterminate"===e.styleProps.variant&&Object(l.b)(y||(y=p||(p=Object(a.a)(["\n      animation: "," 1.4s linear infinite;\n    "]))),P)})),D=Object(b.a)("svg",{},{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,t){return t.svg}})({display:"block"}),F=Object(b.a)("circle",{},{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,t){var r=e.styleProps;return Object(c.a)({},t.circle,t["circle".concat(Object(j.a)(r.variant))],r.disableShrink&&t.circleDisableShrink)}})((function(e){var t=e.styleProps,r=e.theme;return Object(c.a)({stroke:"currentColor"},"determinate"===t.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var t=e.styleProps;return"indeterminate"===t.variant&&!t.disableShrink&&Object(l.b)(k||(k=f||(f=Object(a.a)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),S)})),M=s.forwardRef((function(e,t){var r=Object(d.a)({props:e,name:"MuiCircularProgress"}),a=r.className,s=r.color,l=void 0===s?"primary":s,b=r.disableShrink,u=void 0!==b&&b,m=r.size,h=void 0===m?40:m,x=r.style,p=r.thickness,f=void 0===p?3.6:p,v=r.value,g=void 0===v?0:v,y=r.variant,k=void 0===y?"indeterminate":y,P=Object(n.a)(r,["className","color","disableShrink","size","style","thickness","value","variant"]),S=Object(c.a)({},r,{color:l,disableShrink:u,size:h,thickness:f,value:g,variant:k}),M=function(e){var t=e.classes,r=e.variant,a=e.color,n=e.disableShrink,c={root:["root",r,"color".concat(Object(j.a)(a))],svg:["svg"],circle:["circle","circle".concat(Object(j.a)(r)),n&&"circleDisableShrink"]};return Object(o.a)(c,O,t)}(S),N={},R={},z={};if("determinate"===k){var E=2*Math.PI*((C-f)/2);N.strokeDasharray=E.toFixed(3),z["aria-valuenow"]=Math.round(g),N.strokeDashoffset="".concat(((100-g)/100*E).toFixed(3),"px"),R.transform="rotate(-90deg)"}return Object(w.jsx)(I,Object(c.a)({className:Object(i.a)(M.root,a),style:Object(c.a)({width:h,height:h},R,x),styleProps:S,ref:t,role:"progressbar"},z,P,{children:Object(w.jsx)(D,{className:M.svg,styleProps:S,viewBox:"".concat(22," ").concat(22," ").concat(C," ").concat(C),children:Object(w.jsx)(F,{className:M.circle,style:N,styleProps:S,cx:C,cy:C,r:(C-f)/2,fill:"none",strokeWidth:f})})}))}));t.a=M},691:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(25),s=r(21),i=r(31),o=r(339),l=r(357),j=r(175),d=r(218),b=r(396),u=r(397),m=r(177),O=r(17),h=r.n(O),x=r(23),p=r(12),f=r(5),v=r(26),g=r(30),y=r(289),k=r(373),w=r(377),C=r(359),P=r(379),S=r(414),I=(r(157),r(37),r(403)),D=r(51),F=r(16),M=(r(130),r(1)),N=Object(y.a)((function(e){return{loginInput:Object(f.a)({},e.typography.customInput)}})),R=function(e){Object.assign({},e);var t=N(),r=(Object(I.a)(),n.a.useState("")),c=Object(p.a)(r,2),i=c[0],o=c[1],l=n.a.useState(!1),j=Object(p.a)(l,2),d=j[0],b=j[1],u=Object(v.b)(),m=Object(g.i)(),O=(m.paramUserId,m.paramCode,function(){var e=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,D.a.post(s.a.apiHost+"/v1/auth/forgot-password",{email:i});case 4:t=e.sent,console.log(t),b(!1),u({type:F.w,open:!0,message:"Successfully sent email to reset your password.",variant:"alert",alertSeverity:"success",close:!0}),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),b(!1),e.abrupt("return",u({type:F.w,open:!0,message:e.t0.response?e.t0.response.data.message:e.t0.toString(),variant:"alert",alertSeverity:"error",close:!0}));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}());return Object(a.useEffect)((function(){}),[]),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(k.a,{fullWidth:!0,className:t.loginInput,variant:"outlined",children:[Object(M.jsx)(w.a,{htmlFor:"outlined-adornment-email-forgot",children:"Email Address"}),Object(M.jsx)(C.a,{id:"outlined-adornment-email-forgot",type:"email",value:i,name:"email",onChange:function(e){return o(e.target.value)},label:"Email Address"})]}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)(P.a,{variant:"contained",fullWidth:!0,size:"large",onClick:O,color:"secondary",children:d?Object(M.jsxs)(M.Fragment,{children:[" ",Object(M.jsx)(S.a,{color:"primary",size:"1.7em"})]}):"Reset"})]})},z=r(399),E=r(131);t.default=function(){var e=Object(i.a)(),t=Object(o.a)(e.breakpoints.down("sm"));return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(E.a,{children:Object(M.jsx)("title",{children:"Forgot Password"})}),Object(M.jsx)(b.a,{children:Object(M.jsxs)(l.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(M.jsx)(l.a,{item:!0,xs:12,children:Object(M.jsx)(l.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(M.jsx)(l.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(M.jsx)(u.a,{children:Object(M.jsxs)(l.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(M.jsx)(l.a,{item:!0,sx:{mb:3},children:Object(M.jsx)(m.a,{})}),Object(M.jsx)(l.a,{item:!0,xs:12,children:Object(M.jsxs)(l.a,{container:!0,alignItems:"center",justifyContent:"center",textAlign:"center",spacing:2,children:[Object(M.jsx)(l.a,{item:!0,xs:12,children:Object(M.jsx)(j.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Forgot password?"})}),Object(M.jsx)(l.a,{item:!0,xs:12,children:Object(M.jsx)(j.a,{variant:"caption",fontSize:"16px",textAlign:"center",children:"Enter your email address below and we'll send you a password reset."})})]})}),Object(M.jsx)(l.a,{item:!0,xs:12,children:Object(M.jsx)(R,{})}),Object(M.jsx)(l.a,{item:!0,xs:12,children:Object(M.jsx)(d.a,{})}),Object(M.jsx)(l.a,{item:!0,xs:12,children:Object(M.jsx)(l.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(M.jsx)(j.a,{component:c.b,to:"/login/",variant:"subtitle1",sx:{textDecoration:"none"},children:"Have an account?"})})})]})})})})}),Object(M.jsx)(l.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(M.jsx)(z.a,{})})]})})]})}}}]);
//# sourceMappingURL=19.47ba1c12.chunk.js.map