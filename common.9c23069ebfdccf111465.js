(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{ZGak:function(t,i,r){"use strict";r.d(i,"a",function(){return s});var e=r("ofXK"),n=r("fXoL");let s=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.Jb({type:t}),t.\u0275inj=n.Ib({imports:[[e.b]]}),t})()},oOV9:function(t,i,r){"use strict";r.d(i,"a",function(){return n});var e=r("fXoL");let n=(()=>{class t{constructor(t){this.element=t,this.imgurId="",this.imgurUrlPattern="https://imgur.com/",this.imageSizesToImgurSuffixArray=[{width:320,suffix:"m"},{width:640,suffix:"l"},{width:1024,suffix:"h"}],this.el=t}ngOnInit(){const t=this.chooseSuffix(this.el.nativeElement.width);this.el.nativeElement.setAttribute("src",`${this.imgurUrlPattern}${this.imgurId}${t}.jpg`)}chooseSuffix(t){for(let i of this.imageSizesToImgurSuffixArray)if(!(t>i.width))return i.suffix;return""}}return t.\u0275fac=function(i){return new(i||t)(e.Lb(e.l))},t.\u0275dir=e.Gb({type:t,selectors:[["","imgurId",""]],inputs:{imgurId:"imgurId"}}),t})()}}]);