(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(23)},15:function(e,a,t){},20:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(9),r=t.n(s),o=(t(15),t(1)),i=t(2),c=t(4),m=t(3),d=t(5),u=t(7),h=t.n(u),p=(t(20),t(6)),E=t.n(p),f=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.address.city,s=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name}," ",l.a.createElement("a",{href:e.url}," ",l.a.createElement("i",{className:e.className}," "))," ")}),r=new E.a(this.props.data.startedWork).fromNow(!0);return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"}," Hide navigation "),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")," "),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")," "),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")," "),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")," "),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")," "))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),l.a.createElement("h3",null," I 'm a ",n," based ",l.a.createElement("span",null,a)," working professionally for ",r,". ",t,"."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},s))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component),v=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))});return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2017 Tim Baker"),l.a.createElement("li",null,"Design by ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),g=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.address.street,n=this.props.data.address.city,s=this.props.data.address.state,r=this.props.data.address.zip,o=this.props.data.phone,i=this.props.data.email,c=this.props.data.resumedownload,m=this.props.data.bio.replace("[age]",E.a.duration(E()().diff(new E.a(this.props.data.birthday))).years());return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Linus Petersson Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,m),this.props.showContactData&&l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,t,l.a.createElement("br",null),r," ",n,", ",s),l.a.createElement("br",null),l.a.createElement("span",null,o),l.a.createElement("br",null),l.a.createElement("span",null,i))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:c,className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),a}(n.Component),b=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map(function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))}),t=this.props.data.work.map(function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description))}),n=this.props.data.skills.map(function(e){var a="bar-expand "+e.name.toLowerCase().replace(/ /g,"_");return l.a.createElement("li",{key:e.name},l.a.createElement("span",{style:{width:e.level},className:a+" skill"}),l.a.createElement("em",null,e.name))});return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},a)))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},t)),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},n)))))}}]),a}(n.Component),w=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.address.street,t=this.props.data.address.city,n=this.props.data.address.state,s=this.props.data.address.zip,r=this.props.data.contactmessage;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},r))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{action:"https://formspree.io/jeanpierre.skogsbar@gmail.com",method:"POST",id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"_replyto",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"_subject",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})),l.a.createElement("div",null,l.a.createElement("button",{className:"submit"},"Submit"),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),l.a.createElement("div",{id:"message-warning"}," Error boy"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",l.a.createElement("br",null))),this.props.showContactData&&l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Address"),l.a.createElement("p",{className:"address"},e,l.a.createElement("br",null),a," ",l.a.createElement("br",null),s," ",t,", ",n,l.a.createElement("br",null))))))}}]),a}(n.Component),y=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map(function(e){var a="images/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,title:e.title},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.title),l.a.createElement("p",null,e.category))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"})))))});return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Other stuff that i`ve done"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),a}(n.Component),N={main:{name:"Linus Petersson",occupation:"Software Developer",description:"I am a solution-oriented javascript programmer with a curious mind, loving to think one step further",image:"profilepic.jpg",bio2:"Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.",bio:"I am a [age] year old father of 2 born and raised in the deep woods of Sm\xe5land. I have always been interested in all kinds of technology, from big machines to the smallest software, and quickly fell in love with the internet. I have a Bachelor degree in Computer Sciences as has since then worked as a software developer at Flygprestanda AB.",contactmessage:"Questions? Feel free to contact me.",email:"linus.petersson@mail.com",phone:"+4672324518",address:{street:"Rudbecksgatan 122",city:"Malm\xf6",state:"Sweden",zip:"21620"},birthday:"1984-09-19",website:"http://www.timbakerdev.com",resumedownload:"http://timbakerdev.com",social:[{name:"facebook",url:"http://facebook.com/limpschutz",className:"fa fa-facebook"},{name:"linkedin",url:"https://www.linkedin.com/in/linus-petersson-6b9a82139/",className:"fa fa-linkedin"},{name:"instagram",url:"http://instagram.com/limpschutz",className:"fa fa-instagram"},{name:"github",url:"http://github.com/limpschutz",className:"fa fa-github"}],startedWork:"2013-09-09"},resume:{skillmessage:"This is what i have done, I would love to add more stuff to this list.",education:[{school:"Stockholm University, Stockholm",degree:"Bachelor degree in Computer and System Sciences",graduated:"2010 - 2013",description:"Broad education in Computer Sciences. My main focus was programming (Java) and software development. Bachelor thesis about automatic rating of online newspaper article comments using Data Mining."},{school:"Chalmers University of Technology, Gothenburg",degree:"Civilingenj\xf6rsprogrammet i maskinteknik",graduated:"2004 - 2006",description:""},{school:"Sunnerbogymnasiet, Ljungby",degree:"Teknikprogrammet",graduated:"2000 - 2003",description:""}],work:[{company:"Flygprestanda AB, Malm\xf6",title:"Software Developer",years:"September 2013 - Present",description:"Beeing part of a small team developing a Hybrid web app for the airline industry, used by pilots for calculating aircraft performance prior to takeoff and landing. The app runs offline on iOS, Windows(UWP) and online in the browser and communicates with a server-side management tool using REST."},{company:"Str\xe5lfors Svenska AB, Stockholm",title:"Warehouse Worker",years:"2007 - 2010",description:"Driving forklifts, Packing boxes, Making really advanced Excel spreadsheets."}],skills:[{name:"Javascript",level:"95%"},{name:"HTML5",level:"70%"},{name:"ReactJs",level:"50%"},{name:"CSS",level:"70%"},{name:"Git",level:"60%"},{name:"Scrum",level:"75%"},{name:"Bragging about my skills",level:"5%"}]},portfolio:{projects:[{title:"Radio50Plus",category:"Internet radio channel website done pre university. Implemented in Wordpress",image:"radio50plus.jpg",url:"https://www.radio50plus.se"}]},testimonials:{testimonials:[{text:"Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.",user:"Kareem Abdul Jabbar"},{text:"That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",user:"Steve Wozniak... impersonator"}]}},k=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={showContactData:!1,resumeData:{}},h.a.initialize("UA-110570651-1"),h.a.pageview(window.location.pathname),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"getResumeData",value:function(){this.setState({resumeData:N,showContactData:"?showContact"===window.location.search})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,{data:this.state.resumeData.main}),l.a.createElement(g,{data:this.state.resumeData.main,showContactData:this.state.showContactData}),l.a.createElement(b,{data:this.state.resumeData.resume}),l.a.createElement(y,{data:this.state.resumeData.portfolio}),l.a.createElement(w,{data:this.state.resumeData.main,showContactData:this.state.showContactData}),l.a.createElement(v,{data:this.state.resumeData.main}))}}]),a}(n.Component),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(l.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/CV",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/CV","/service-worker.js");j?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):O(e)})}}()}},[[10,2,1]]]);
//# sourceMappingURL=main.d0d1b17a.chunk.js.map