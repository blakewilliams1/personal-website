(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{bchn:function(e,t,n){"use strict";n.r(t),n.d(t,"CareerRoutingModule",function(){return b}),n.d(t,"CareerPageModule",function(){return u});var o=n("fXoL"),i=n("wZkO"),a=n("tyNb"),r=n("ofXK");function s(e,t){1&e&&o.Mb(0,"div",8)}function c(e,t){if(1&e&&(o.Qb(0,"div",1),o.Qb(1,"div",2),o.Qb(2,"span"),o.pc(3),o.Pb(),o.Qb(4,"div",3),o.Mb(5,"div",4),o.oc(6,s,1,0,"div",5),o.Pb(),o.Pb(),o.Qb(7,"div",6),o.Qb(8,"h1"),o.pc(9),o.Pb(),o.Mb(10,"span",7),o.Pb(),o.Pb()),2&e){const e=t.$implicit,n=t.index,i=o.ac();o.Bb(3),o.qc(i.calculateTimelineDate(e.date)),o.Bb(3),o.dc("ngIf",n!=i.timelineEvents.length-1),o.Bb(3),o.qc(e.title),o.Bb(1),o.dc("innerHtml",e.content,o.kc)}}let l=(()=>{class e{constructor(){this.timelineEvents=[]}calculateTimelineDate(e){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long"}).format(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Fb({type:e,selectors:[["timeline"]],inputs:{timelineEvents:"timelineEvents"},decls:1,vars:1,consts:[["class","timeline-block",4,"ngFor","ngForOf"],[1,"timeline-block"],[1,"timeline-bar-container"],[1,"timeline-bar"],[1,"timeline-node"],["class","timeline-line",4,"ngIf"],[1,"timeline-content"],[3,"innerHtml"],[1,"timeline-line"]],template:function(e,t){1&e&&o.oc(0,c,11,4,"div",0),2&e&&o.dc("ngForOf",t.timelineEvents)},directives:[r.h,r.i],styles:[".timeline-bar-container[_ngcontent-%COMP%], .timeline-block[_ngcontent-%COMP%]{display:flex}.timeline-bar-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{min-width:80px;text-align:right;padding:6px 10px 0 0}.timeline-bar[_ngcontent-%COMP%]{display:inline-block}.timeline-node[_ngcontent-%COMP%]{border:3px solid grey}.timeline-line[_ngcontent-%COMP%]{border:2px solid grey;height:calc(100% - 33px);margin:auto;min-height:30px;width:0}.timeline-node[_ngcontent-%COMP%]{border-radius:18px;border-color:gray;height:25px;width:25px}.timeline-content[_ngcontent-%COMP%]{padding:0 20px 20px;flex-grow:1}.timeline-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d3d3d3}"]}),e})(),d=(()=>{class e{constructor(){this.projectTimeline=[{date:new Date(1683484096e3),title:"Senior Engineer",content:"<p>Still at Google, I was promoted to L5 for my contributions to the AV/VR efforts\n        I'm part of. This is the crossover point at which you are considered a Senior Engineer.</p>"},{date:new Date(162526578e4),title:"AR/VR work (Google)",content:"<p>Finally within the realm of what I consider to be a dream job, I'm now working\n        on things involving the AR/VR tech space. Can't talk about specifics yet, but I'm very\n        enthusiastic about the work I do.</p>"},{date:new Date(158068338e4),title:"Play Movies/TV (Google)",content:"<p>After 2 long years of working on the Maps project, I left the team for the next\n        opportunity at the company. I joined the Movies and TV division of Google Play to do a very\n        similar subject of work but with a new goal. Similar to the work done for Maps where there\n        was a special area dedicated to technical people to upload data to Google (the transit data)\n        that improved the product, Google Play has a special section dedicated to movie studios to\n        upload movies, TV shows, and other assets for them.</p>\n        <p>For example, someone at Warner Bros could potentially log in to upload The Joker when it\n        came out, or come back a few weeks later to upload a revised Spanish subtitle track for the\n        movie as well.</p>"},{date:new Date(151761138e4),title:"Transit Partners (Google)",content:"<p>After a little over a year of learning the ropes out of school and contributing,\n        I got my first project to lead, and it was called Transit Partners. It was a special section\n        of Google Maps accessible only for transit operators, AKA the people who determine the routes\n        and timetables of any given cities public transit system. Through this portal I was in charge\n        of, they upload data to Google about GPS locations of where their busses stop, timetables of\n        when that happen, info about road closures for construction/events, etc... This is done for\n        <b>ALL</b> forms of public transportation from buses to trains to subways and everything in\n        between. <b>Nearly 100% of all public transit data flows through this tool for use by\n        Maps route calculation engines</b></p>\n        <p>Although this tool already existed when I started on the project, it had organically grown\n        since the inception of Google Maps into a 'messy' and non-optimal experience for users. The\n        scope, use cases, and features of Maps had drastically changed but this crucial tool was stuck\n        in the past. I was responsible with redesigning it from scratch (but keeping existing data\n            storage layers intact) and had the help of 3 other engineers to do it.</p>"},{date:new Date(147544818e4),title:"Joining Google",content:"After graduating from UC Santa Cruz, I accepted an offer from Google as an engineer,\n        to which I started work as a full stack web developer. Work in the video games industry on a\n        game I'm passionate about is still something I consider to be a dream job, but based on the\n        games industry standards with compensation, work-life balance, project management crunching,\n        and uncertain employment, I opted to look for work beyond just game development."},{date:new Date(146490738e4),title:"Graduating UC Santa Cruz",content:'After 4 years, I graduated from UC Santa Cruz with a degree in "Computer Science\n        with Emphasis in Game Design" which is a fancy way of saying CS degree where all my upper\n        division classes were geared towards someone expecting to joining specifically the video games\n        industry after schooling.'}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Fb({type:e,selectors:[["career-page"]],decls:15,vars:3,consts:[["mat-tab-nav-bar",""],["mat-tab-link","","routerLink","/"],["mat-tab-link","","routerLink","/travels"],["mat-tab-link","","routerLink","/projects"],["mat-tab-link","","routerLink","/career"],["href","/contact"],[3,"timelineEvents"]],template:function(e,t){1&e&&(o.Qb(0,"nav",0),o.Qb(1,"a",1),o.pc(2,"Home"),o.Pb(),o.Qb(3,"a",2),o.pc(4,"Travels"),o.Pb(),o.Qb(5,"a",3),o.pc(6,"Projects"),o.Pb(),o.Qb(7,"a",4),o.pc(8,"Career"),o.Pb(),o.Pb(),o.Qb(9,"h3"),o.pc(10,"Feel free to "),o.Qb(11,"a",5),o.pc(12,"contact me"),o.Pb(),o.pc(13," if you'd like to get in touch!"),o.Pb(),o.Mb(14,"timeline",6)),2&e&&(o.Bb(7),o.nc("opacity",1),o.Bb(7),o.dc("timelineEvents",t.projectTimeline))},directives:[i.b,a.c,i.a,l],styles:["timeline[_ngcontent-%COMP%]{display:block;margin:20px 5%}h3[_ngcontent-%COMP%]{margin-top:20px;text-align:center}"]}),e})();var p=n("Wp6s");let m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({imports:[[r.b,p.c]]}),e})();const h=[{path:"",component:d}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({imports:[[a.d.forChild(h)],a.d]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({imports:[[r.b,m,i.c,b,p.c]]}),e})()}}]);