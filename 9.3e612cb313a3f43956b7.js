(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{BoeZ:function(e,t,n){"use strict";n.r(t),n.d(t,"HomePageRoutingModule",function(){return d}),n.d(t,"HomePageModule",function(){return u});var r=n("fXoL"),o=n("tyNb");let i=(()=>{class e{constructor(){this.KONAMI_CODE=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"],this.inputHistory=[],this.keyboardListener=e=>{this.checkForCode(e)}}registerListener(){document.addEventListener("keydown",this.keyboardListener)}checkForCode(e){this.inputHistory.push(e.code),this.inputHistory.length>10&&this.inputHistory.shift(),this.inputHistory.toString()==this.KONAMI_CODE.toString()&&(this.inputHistory=[],alert("(\u202f\ud83d\udc41\ufe0f\u202f\u035c\u0296\u202f\ud83d\udc41\ufe0f\u202f) you found the secret"))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var a=n("wZkO"),c=n("ofXK");function s(e,t){if(1&e&&(r.Qb(0,"div",12),r.Qb(1,"div",13),r.Qb(2,"span"),r.pc(3),r.Pb(),r.Qb(4,"span"),r.pc(5),r.Pb(),r.Pb(),r.Qb(6,"div",14),r.Mb(7,"span",15),r.Pb(),r.Pb()),2&e){const e=t.$implicit,n=r.ac();r.Bb(3),r.qc(e.label),r.Bb(2),r.qc(n.getSkillDescriptor(e.percent)),r.Bb(2),r.nc("width",e.percent,"%")}}let l=(()=>{class e{constructor(e,t){this.router=e,this.konamiService=t,this.languageSkills=[{label:"Java",percent:90},{label:"Typescript",percent:80},{label:"Javascript",percent:80},{label:"C++",percent:70},{label:"Kotlin",percent:40},{label:"Dart",percent:30}],console.log("(\u0361 \u0361\xb0 \u035c \u3064 \u0361\u0361\xb0) nosey now, aren't we?"),t.registerListener()}getSkillDescriptor(e){return e>=95?"Master":e>=80?"Advanced":e>=60?"Proficient":e>=40?"Competant":e>=20?"Novice":"Beginner"}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(o.a),r.Lb(i))},e.\u0275cmp=r.Fb({type:e,selectors:[["home-page"]],decls:25,vars:3,consts:[["mat-tab-nav-bar",""],["mat-tab-link","","routerLink","/"],["mat-tab-link","","routerLink","/travels"],["mat-tab-link","","routerLink","/projects"],["mat-tab-link","","routerLink","/career"],[1,"home-body"],["src","https://avatars.githubusercontent.com/u/10764966?s=400&u=a47f46f895511422da7236d0d694dee14ac122cf&v=4","alt","A side profile image of Blake Williams, showing off a mohawk hair style"],[1,"sub-title"],["href","https://linkedin.com/in/blauwill","target","_blank"],["href","/contact"],[1,"language-skill-container"],["class","language-skill",4,"ngFor","ngForOf"],[1,"language-skill"],[1,"skill-label-container"],[1,"progress-bar"],[1,"progress-bar-fill","red-yellow-gradient"]],template:function(e,t){1&e&&(r.Qb(0,"nav",0),r.Qb(1,"a",1),r.pc(2,"Home"),r.Pb(),r.Qb(3,"a",2),r.pc(4,"Travels"),r.Pb(),r.Qb(5,"a",3),r.pc(6,"Projects"),r.Pb(),r.Qb(7,"a",4),r.pc(8,"Career"),r.Pb(),r.Pb(),r.Qb(9,"div",5),r.Mb(10,"img",6),r.Qb(11,"p",7),r.pc(12,"Hi, my name's Blake Williams"),r.Mb(13,"br"),r.pc(14,"I'm a senior software engineer focused on AR/VR projects"),r.Pb(),r.Qb(15,"span"),r.Qb(16,"a",8),r.pc(17,"LinkedIn"),r.Pb(),r.pc(18,", "),r.Qb(19,"a",9),r.pc(20,"Email"),r.Pb(),r.Pb(),r.Pb(),r.Qb(21,"div",10),r.Qb(22,"p"),r.pc(23,"Language Skills"),r.Pb(),r.oc(24,s,8,4,"div",11),r.Pb()),2&e&&(r.Bb(1),r.nc("opacity",1),r.Bb(23),r.dc("ngForOf",t.languageSkills))},directives:[a.b,o.c,a.a,c.h],styles:[".red-yellow-gradient[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#f81d00 0,#f9d423)}mat-tab-group[_ngcontent-%COMP%]{margin-top:20px}  .mat-tab-group .mat-tab-header{border-bottom:none}.home-body[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;margin:100px auto}.home-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50px;height:100px;width:100px}.home-body[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{margin:50px 20px 12px;text-align:center}.language-skill-container[_ngcontent-%COMP%]{margin:0 20%}.language-skill[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:10px}.language-skill[_ngcontent-%COMP%]   .skill-label-container[_ngcontent-%COMP%]{justify-content:space-between;display:flex;flex-direction:row}.progress-bar[_ngcontent-%COMP%]{width:100%;background-color:gray}.progress-bar-fill[_ngcontent-%COMP%]{display:block;height:5px}"]}),e})();var b=n("Wp6s"),p=n("bTqV");const g=[{path:"",component:l}];let d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({imports:[[o.d.forChild(g)],o.d]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({providers:[i],imports:[[c.b,a.c,p.b,d,b.c]]}),e})()}}]);