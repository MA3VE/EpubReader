(this.webpackJsonpepub_reader=this.webpackJsonpepub_reader||[]).push([[0],{114:function(e,t,n){e.exports=n.p+"static/media/loader.783d189e.gif"},118:function(e,t,n){e.exports=n(233)},233:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),l=n(13),c=n(14),s=n(16),u=n(15),h=n(57),m=n(268),p=n(80),d=n(235),g=n(276),b=n(279),E=n(272),f=n(69),y=n(273),v=n(109),k=n.n(v),C=n(82),j=n.n(C),w=n(115),O=n(266),S=n(280),x=n(278),F=Object(O.a)({root:{width:250},input:{width:42}});function z(e){var t=F(),n=r.a.useState(e.fontSize),a=Object(w.a)(n,2),o=a[0],i=a[1];return r.a.createElement("div",{className:t.root},r.a.createElement(m.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:!0},r.a.createElement(S.a,{value:"number"===typeof o?o:0,onChange:function(t,n){i(n),e.changeFontSize(n)},"aria-labelledby":"input-slider"})),r.a.createElement(m.a,{item:!0},r.a.createElement(x.a,{className:t.input,value:o,margin:"dense",onChange:function(t){i(""===t.target.value?"":Number(t.target.value)),e.changeFontSize(t.target.value)},onBlur:function(){o<0?i(0):o>100&&i(100)},inputProps:{step:10,min:0,max:100,type:"number","aria-labelledby":"input-slider"}}))))}var D=n(270),W=n(277),A=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(t){var n=t.currentTarget.value;e.props.changeTheme(n)},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{centered:!0,verticalAlign:"middle"},r.a.createElement(W.a.Row,null,r.a.createElement(W.a.Column,null,r.a.createElement(D.a,{fullWidth:!0,style:{background:"black",color:"#A1A1A1",margin:"10px"},value:"night",onClick:this.handleClick},"Night"),r.a.createElement("br",null),r.a.createElement(D.a,{fullWidth:!0,style:{background:"black",color:"white",margin:"10px"},value:"night-contrast",onClick:this.handleClick},"Night Contrast"),r.a.createElement("br",null),r.a.createElement(D.a,{fullWidth:!0,style:{background:"#F5DEB3",color:"#644D32",margin:"10px"},value:"sepia",onClick:this.handleClick},"Sepia"),r.a.createElement("br",null),r.a.createElement(D.a,{fullWidth:!0,style:{background:"#F5DEB3",color:"black",margin:"10px"},value:"sepia-contrast",onClick:this.handleClick},"Sepia Contrast"),r.a.createElement("br",null),r.a.createElement(D.a,{fullWidth:!0,style:{background:"black",color:"#008000",margin:"10px"},value:"console",onClick:this.handleClick},"Console"),r.a.createElement("br",null),r.a.createElement(D.a,{fullWidth:!0,style:{background:"white",color:"#black",margin:"10px"},value:"day",onClick:this.handleClick},"Day")))))}}]),n}(a.Component),B=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).toggleDrawer=function(){var e=a.state.open;a.setState({open:!e})},a.state={open:!1},a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{onClick:this.toggleDrawer},r.a.createElement(k.a,{style:{color:this.props.buttonColor}})),r.a.createElement(g.a,{anchor:"right",onClose:this.toggleDrawer,open:this.state.open},r.a.createElement(m.a,{container:!0,style:{maxWidth:"300px"}},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(b.a,null,r.a.createElement(E.a,{expandIcon:r.a.createElement(j.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(f.a,null,"Text Size")),r.a.createElement(y.a,null,r.a.createElement(z,{changeFontSize:this.props.changeFontSize,fontSize:this.props.fontSize})))),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(b.a,null,r.a.createElement(E.a,{expandIcon:r.a.createElement(j.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},r.a.createElement(f.a,null,"Themes")),r.a.createElement(y.a,{style:{alignItems:"center"}},r.a.createElement(A,{changeTheme:this.props.changeTheme})))))))}}]),n}(a.Component),R=n(110),T=n.n(R),I=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{container:!0,direction:"column",justify:"space-between",alignItems:"center",style:{height:this.props.height-30}},r.a.createElement(m.a,{item:!0},r.a.createElement(B,{changeFontSize:this.props.changeFontSize,fontSize:this.props.fontSize,changeTheme:this.props.changeTheme,buttonColor:this.props.buttonColor,changeFont:this.props.changeFont})),r.a.createElement(m.a,{item:!0},r.a.createElement(d.a,{onClick:this.props.next},r.a.createElement(T.a,{fontSize:"large",style:{color:this.props.buttonColor}}))),r.a.createElement(m.a,{item:!0})))}}]),n}(a.Component),N=n(111),P=n.n(N),U=n(275),V=n(281),J=n(274),L=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleOnClick=function(){var t=e.props,n=t.rendition,a=t.res;n.display(a.href)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.res;return r.a.createElement(V.a,{button:!0,onClick:this.handleOnClick},r.a.createElement(J.a,{primary:e.label}))}}]),n}(a.Component),M=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).toggleDrawer=function(){var e=a.state.open;a.setState({open:!e})},a.state={open:!1},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.toc;return r.a.createElement("div",null,r.a.createElement(d.a,{onClick:this.toggleDrawer},r.a.createElement(P.a,{style:{color:this.props.buttonColor}})),r.a.createElement(g.a,{anchor:"left",onClose:this.toggleDrawer,open:this.state.open},r.a.createElement(U.a,{key:"0"},t.map((function(t,n){return r.a.createElement(L,{res:t,rendition:e.props.rendition,key:n})})))))}}]),n}(a.Component),_=n(112),H=n.n(_),q=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{container:!0,direction:"column",justify:"space-between",alignItems:"center",style:{height:this.props.height-30}},r.a.createElement(m.a,{item:!0},r.a.createElement(M,{toc:this.props.toc,rendition:this.props.rendition,buttonColor:this.props.buttonColor})),r.a.createElement(m.a,{item:!0},r.a.createElement(d.a,{onClick:this.props.prev},r.a.createElement(H.a,{fontSize:"large",style:{color:this.props.buttonColor}}))),r.a.createElement(m.a,{item:!0})))}}]),n}(a.Component),G=n(113),K=n.n(G),Q=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleOnChange=function(e){if("application/epub+zip"===e.target.files[0].type){var t=new FileReader;t.readAsArrayBuffer(e.target.files[0]),t.onload=function(){a.props.getBook(t.result)}}else alert("Only .epub Files are supported")},a.state={},a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(m.a,{container:!0,direction:"column",justify:"space-around",alignItems:"center"},r.a.createElement(m.a,{item:!0},r.a.createElement("h1",null,"Upload a Epub book To Read")),r.a.createElement(m.a,{item:!0},r.a.createElement("input",{id:"contained-button-file",multiple:!0,type:"file",style:{display:"none"},onChange:this.handleOnChange}),r.a.createElement("label",{htmlFor:"contained-button-file"},r.a.createElement(D.a,{variant:"contained",color:"primary",component:"span",size:"large",style:{width:"300px",fontSize:"30px"}},"Upload"))),r.a.createElement(m.a,{item:!0},r.a.createElement(d.a,{href:"https://github.com/MA3VE/EpubReader",size:"medium"},r.a.createElement(K.a,{style:{width:"100px",height:"200px"}}))))}}]),n}(a.Component),X=n(114),Y=n.n(X),Z=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).next=function(){a.readerRef.current.nextPage()},a.prev=function(){a.readerRef.current.prevPage()},a.getRendition=function(e){a.setState({rendition:e}),e&&(e.themes.register("night",{body:{color:"#A1A1A1"}}),e.themes.register("night-contrast",{body:{color:"#FFFFFF"}}),e.themes.register("sepia",{body:{color:"#644D32"}}),e.themes.register("sepia-contrast",{body:{color:"#000000"}}),e.themes.register("console",{body:{color:"#008000"}}),e.themes.register("day",{body:{color:"black"}}))},a.locationChanged=function(e){},a.tocChanged=function(e){a.setState({toc:e})},a.changeTheme=function(e){switch(a.state.rendition.themes.select(e),e){case"night":case"night-contrast":document.body.style.backgroundColor="black";break;case"sepia":case"sepia-contrast":document.body.style.backgroundColor="#F5DEB3";break;case"console":document.body.style.backgroundColor="black";break;case"day":document.body.style.backgroundColor="white";break;default:document.body.style.backgroundColor="white"}},a.changeFontSize=function(e){a.state.rendition.themes.fontSize(e+"px"),a.setState({fontSize:e})},a.getBook=function(e){a.setState({Book:e})},a.readerRef=r.a.createRef(),a.state={rendition:null,height:0,width:0,toc:[],fontSize:12,buttonColor:"grey",book:void 0},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(h.a)(a)),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){return this.state.Book?r.a.createElement(m.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:1},r.a.createElement(q,{prev:this.prev,height:this.state.height,toc:this.state.toc,rendition:this.state.rendition,buttonColor:this.state.buttonColor})),r.a.createElement(m.a,{item:!0,xs:10,style:{height:this.state.height-30}},r.a.createElement(p.EpubView,{url:this.state.Book,ref:this.readerRef,loadingView:r.a.createElement("div",{style:{position:"absolute",top:"50%",left:"10%",right:"10%",color:"#ccc",textAlign:"center",margintop:"-.5em"}},r.a.createElement("img",{src:Y.a,alt:"loading..."})),locationChanged:this.locationChanged,getRendition:this.getRendition,tocChanged:this.tocChanged})),r.a.createElement(m.a,{item:!0,xs:1},r.a.createElement(I,{next:this.next,height:this.state.height,changeFontSize:this.changeFontSize,fontSize:this.state.fontSize,changeTheme:this.changeTheme,changeFont:this.changeFont,buttonColor:this.state.buttonColor}))):r.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{height:this.state.height-30}},r.a.createElement(m.a,{item:!0},r.a.createElement(Q,{getBook:this.getBook})))}}]),n}(a.Component),$=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{margin:0}},r.a.createElement(Z,null))}}]),n}(a.Component);i.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement($,null)),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.13ee06e6.chunk.js.map