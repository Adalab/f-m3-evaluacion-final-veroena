(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(20),s=a.n(c),l=(a(29),a(23)),o=a(2),i=a(3),u=a(5),m=a(4),f=a(7),h=a(6),d=a(12),g=a(11),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getHouseCrest=a.getHouseCrest.bind(Object(f.a)(a)),a.getHouseColor=a.getHouseColor.bind(Object(f.a)(a)),a.getCommonRoom=a.getCommonRoom.bind(Object(f.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){this.props.resetFilter()}},{key:"getHouseCrest",value:function(e){return"Gryffindor"===e?"https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Griffyn_0.png?4kQC5RlG0.YTXTKSv2XFRPEQzudcKngf":"Slytherin"===e?"https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Sly_0.png?SExUyce6x9j.xakVjrvhB0zXt1ZTwLxK":"Hufflepuff"===e?"https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Huffle_0.png?lPf6cPdBB2rMbdHm9oZM0w0iJx07hoej":"Ravenclaw"===e?"https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Raven_0.png?LTQM_J6raYLtZGfHVRb5lS_uCRqRTMIq":null}},{key:"getHouseColor",value:function(e){return"Gryffindor"===e?"gryffindor":"Slytherin"===e?"slytherin":"Hufflepuff"===e?"hufflepuff":"Ravenclaw"===e?"ravenclaw":"no-house"}},{key:"getCommonRoom",value:function(e){return"Gryffindor"===e?"https://images.ctfassets.net/bxd3o8b291gf/6RvTzHvJn2eIeW6gcg6WsE/4e2cf595a8cb5369d1972e6fd2e31f0e/GryffindorCommonRoom_PM_B1C13M1_GryffindorCommonRoomFireplace_Moment.jpg?w=1100&q=85":"Slytherin"===e?"https://images.ctfassets.net/bxd3o8b291gf/4b0NB6OQtGCmQqCMSKaigI/9b4af5ac5b5ee2d1af6febe97b4b8990/SlytherinCommonRoom.jpg?w=1100&q=85":"Hufflepuff"===e?"https://images.ctfassets.net/bxd3o8b291gf/10V5UBcXXQQAY6qMYIeowK/49a9019566aebfcdb7541cbd53e5d847/HufflepuffCommonroom_PM_.jpg?w=550&h=550&fit=thumb&f=center&q=85":"Ravenclaw"===e?"https://images.ctfassets.net/bxd3o8b291gf/7eVMhtL01GMG0WIsUcSEKg/aa31a61d431e6b0ce0e6d13ac171a55b/RavenclawCommonRoom.jpg?w=550&h=550&fit=thumb&f=center&q=85":"https://images.ctfassets.net/bxd3o8b291gf/6rkjJeRn9YYqemm2cAmYYQ/a007f8054aebbb2987d1f26043459a48/HogwartsCastle_WB_F2_HogwartsCastleAndFlyingFordAnglia_Illust_100615_Land.jpg?w=1100&q=85"}},{key:"render",value:function(){var e=this.props.characterList,t=parseInt(this.props.match.params.id),a=e.find(function(e){return e.id===t});return n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"character__card--container",style:{backgroundImage:"url(".concat(this.getCommonRoom(a.house),")")}},e.length>0?n.a.createElement("div",{className:"character__card ".concat(this.getHouseColor(a.house))},n.a.createElement(g.b,{to:"/"},n.a.createElement("i",{className:"fas fa-chevron-circle-left"})),n.a.createElement("div",{className:"characters__card--image",style:{backgroundImage:"url(".concat(a.image,")")}}),n.a.createElement("div",{className:"character__card--content"},n.a.createElement("h2",{className:"characters__card--name"},a.name),n.a.createElement("div",{className:"character__card--content-detail"},n.a.createElement("p",{className:"characters__card--house card-text"},"House: ","Kingsley Shacklebolt"===a.name?"unknown":"".concat(a.house)," ","Mrs Norris"===a.name?"cats can't get sorted into Hogwarts":null," ","Argus Filch"===a.name?"squibs can't enroll in Hogwarts":null),n.a.createElement("p",{className:"characters__card--year card-text"},"Date of birth: ",a.yearOfBirth?"".concat(a.yearOfBirth):"unknown"),n.a.createElement("p",{className:"characters__card--patronus card-text"},"Patronus: ","Draco Malfoy"===a.name||"Cedric Diggory"===a.name||"Neville Longbottom"===a.name||"Horace Slughorn"===a.name||"Vincent Crabbe"===a.name||"Gregory Goyle"===a.name?"unknown":"".concat(a.patronus)," ","Rubeus Hagrid"===a.name?"he can't produce one, it's a very difficult spell":null," ","Bellatrix Lestrange"===a.name||"Lord Voldemort"===a.name||"Lucius Malfoy"===a.name?"Death Eaters can't produce a patronus":null," ","Mrs Norris"===a.name?"cat's don't need a patronus":null," ","Argus Filch"===a.name?"squibs are non-magical":null),n.a.createElement("p",{className:"characters__card--state card-text"},"State: ",a.alive?"alive":"\ud83d\udc80")),n.a.createElement("img",{className:"characters__card--crest",src:this.getHouseCrest(a.house),alt:a.house}))):null))}}]),t}(r.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filterName,a=e.filterHouse,r=e.changeValueName,c=e.changeValueHouse,s=e.resetNameOnClick,l=e.resetHouseOnClick;return n.a.createElement("form",{className:"filters"},n.a.createElement("fieldset",{className:"fieldset filters__name"},n.a.createElement("label",{htmlFor:"character"},"Search by name"),n.a.createElement("input",{id:"characters",name:"character",type:"text",value:t,onChange:r,onFocus:s,className:"filters__input"})),n.a.createElement("fieldset",{className:"fieldset filters__house"},n.a.createElement("label",{htmlFor:"house"},"Search by house"),n.a.createElement("input",{id:"houses",name:"house",type:"text",value:a,onChange:c,onClick:l,className:"filters__input"})))}}]),t}(n.a.Component),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getHouseCrest=a.getHouseCrest.bind(Object(f.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"getHouseCrest",value:function(e){return"Gryffindor"===e?"https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Griffyn_0.png?4kQC5RlG0.YTXTKSv2XFRPEQzudcKngf":"Slytherin"===e?"https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Sly_0.png?SExUyce6x9j.xakVjrvhB0zXt1ZTwLxK":"Hufflepuff"===e?"https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Huffle_0.png?lPf6cPdBB2rMbdHm9oZM0w0iJx07hoej":"Ravenclaw"===e?"https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Raven_0.png?LTQM_J6raYLtZGfHVRb5lS_uCRqRTMIq":null}},{key:"render",value:function(){var e=this,t=this.props,a=t.characterList,r=t.filterName,c=t.filterHouse;return n.a.createElement("div",{className:"character__list--container-all",style:{backgroundImage:"url(https://res.cloudinary.com/dkr52htco/image/upload/v1536173269/fog-2.png)"}},n.a.createElement("div",{className:"character__list--animation",style:{backgroundImage:"url(https://res.cloudinary.com/dkr52htco/image/upload/v1536173269/fog-1.png)"}}),n.a.createElement("div",{className:"character__list--container"},n.a.createElement("ul",{className:"character__list"},a.filter(function(e){return e.name.toLowerCase().includes(r.toLowerCase())}).filter(function(e){return e.house.toLowerCase().includes(c.toLowerCase())}).map(function(t){return n.a.createElement("li",{className:"character__list--item",key:t.id},n.a.createElement("div",{className:"character__list--name-container",style:{backgroundImage:"url(https://sitejerk.com/images/banner-transparent-png-1.png)"}},n.a.createElement(g.b,{to:"/character/".concat(t.id),className:"character__list--link"},n.a.createElement("h2",{className:"character__list--name"},t.name))),n.a.createElement(g.b,{to:"/character/".concat(t.id),className:"character__list--link"},n.a.createElement("div",{className:"character__list--image-bg",style:{backgroundImage:"url(".concat(t.image,")")}})),n.a.createElement("img",{className:"character__list--house",src:e.getHouseCrest(t.house),alt:t.house}))}))))}}]),t}(r.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{className:"header__container",style:{backgroundImage:"url(https://ak4.picdn.net/shutterstock/videos/9459434/thumb/1.jpg)"}},n.a.createElement("img",{src:"https://1000logos.net/wp-content/uploads/2017/02/Harry-Potter-Logo.png",alt:"Harry Potter",className:"header__logo"}))}}]),t}(n.a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("footer",{className:"potter__footer"},n.a.createElement("div",{className:"footer__contact--container"},n.a.createElement("p",{className:"footer__name"},"Ver\xf3nica Enamorado"),n.a.createElement("div",{className:"footer__icons"},n.a.createElement("a",{href:"https://github.com/veroena"},n.a.createElement("i",{className:"fab fa-github"})),n.a.createElement("a",{href:"https://twitter.com/vero_ena"},n.a.createElement("i",{className:"fab fa-twitter"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/veronicaenamorado/"},n.a.createElement("i",{className:"fab fa-linkedin-in"})))),n.a.createElement("div",{className:"footer__date"},"\xa9 2019"))}}]),t}(n.a.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.characterList,a=e.filterName,c=e.filterHouse,s=e.changeValueName,l=e.changeValueHouse,o=e.resetNameOnClick,i=e.resetHouseOnClick;return n.a.createElement(r.Fragment,null,n.a.createElement(y,null),n.a.createElement("main",null,n.a.createElement(p,{filterName:a,changeValueName:s,resetNameOnClick:o,filterHouse:c,changeValueHouse:l,resetHouseOnClick:i}),n.a.createElement(_,{characterList:t,filterName:a,filterHouse:c})),n.a.createElement(v,null))}}]),t}(r.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={characterList:JSON.parse(localStorage.getItem("charactersArray"))||[],filterName:"",filterHouse:""},a.changeValueName=a.changeValueName.bind(Object(f.a)(a)),a.changeValueHouse=a.changeValueHouse.bind(Object(f.a)(a)),a.resetFilter=a.resetFilter.bind(Object(f.a)(a)),a.resetNameOnClick=a.resetNameOnClick.bind(Object(f.a)(a)),a.resetHouseOnClick=a.resetHouseOnClick.bind(Object(f.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;0===this.state.characterList.length&&fetch("http://hp-api.herokuapp.com/api/characters").then(function(e){return e.json()}).then(function(t){var a=t.map(function(e,t){return Object(l.a)({},e,{id:t})});localStorage.setItem("charactersArray",JSON.stringify(a)),e.setState({characterList:a})})}},{key:"changeValueName",value:function(e){var t=e.currentTarget.value;this.setState({filterName:t})}},{key:"changeValueHouse",value:function(e){var t=e.currentTarget.value;this.setState({filterHouse:t})}},{key:"resetFilter",value:function(){this.setState({filterName:"",filterHouse:""})}},{key:"resetNameOnClick",value:function(){this.setState({filterName:""})}},{key:"resetHouseOnClick",value:function(){this.setState({filterHouse:""})}},{key:"render",value:function(){var e=this,t=this.state,a=t.characterList,r=t.filterName,c=t.filterHouse;return n.a.createElement("div",{className:"App"},n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/",render:function(){return n.a.createElement(N,{characterList:a,filterName:r,filterHouse:c,changeValueName:e.changeValueName,changeValueHouse:e.changeValueHouse,resetNameOnClick:e.resetNameOnClick,resetHouseOnClick:e.resetHouseOnClick})}}),n.a.createElement(d.a,{path:"/character/:id",render:function(t){return n.a.createElement(b,{match:t.match,characterList:a,resetFilter:e.resetFilter})}})))}}]),t}(r.Component);s.a.render(n.a.createElement(g.a,null,n.a.createElement(E,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.1f97d09e.chunk.js.map