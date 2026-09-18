var Al=Object.defineProperty;var Rl=(s,e,t)=>e in s?Al(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var k=(s,e,t)=>Rl(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const co="160",Cl=0,Ao=1,Pl=2,Cc=1,Pc=2,gn=3,On=0,Ft=1,_n=2,Ln=0,Si=1,Ro=2,Co=3,Po=4,Ll=5,Xn=100,Dl=101,Il=102,Lo=103,Do=104,Ul=200,Ol=201,Nl=202,Fl=203,Yr=204,Kr=205,zl=206,Bl=207,kl=208,Hl=209,Gl=210,Vl=211,Wl=212,$l=213,Xl=214,ql=0,Yl=1,Kl=2,Is=3,jl=4,Jl=5,Zl=6,Ql=7,Lc=0,eh=1,th=2,Dn=0,nh=1,ih=2,sh=3,rh=4,oh=5,ah=6,Dc=300,Ti=301,bi=302,jr=303,Jr=304,Hs=306,Zr=1e3,en=1001,Qr=1002,Ut=1003,Io=1004,sr=1005,Xt=1006,ch=1007,qi=1008,In=1009,lh=1010,hh=1011,lo=1012,Ic=1013,Cn=1014,Pn=1015,Yi=1016,Uc=1017,Oc=1018,jn=1020,uh=1021,tn=1023,fh=1024,dh=1025,Jn=1026,wi=1027,ph=1028,Nc=1029,mh=1030,Fc=1031,zc=1033,rr=33776,or=33777,ar=33778,cr=33779,Uo=35840,Oo=35841,No=35842,Fo=35843,Bc=36196,zo=37492,Bo=37496,ko=37808,Ho=37809,Go=37810,Vo=37811,Wo=37812,$o=37813,Xo=37814,qo=37815,Yo=37816,Ko=37817,jo=37818,Jo=37819,Zo=37820,Qo=37821,lr=36492,ea=36494,ta=36495,gh=36283,na=36284,ia=36285,sa=36286,kc=3e3,Zn=3001,_h=3200,vh=3201,Hc=0,xh=1,qt="",Tt="srgb",xn="srgb-linear",ho="display-p3",Gs="display-p3-linear",Us="linear",ft="srgb",Os="rec709",Ns="p3",ni=7680,ra=519,yh=512,Mh=513,Sh=514,Gc=515,Eh=516,Th=517,bh=518,wh=519,oa=35044,aa="300 es",eo=1035,vn=2e3,Fs=2001;class Li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hr=Math.PI/180,to=180/Math.PI;function Ki(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[s&255]+Pt[s>>8&255]+Pt[s>>16&255]+Pt[s>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function Ah(s,e){return(s%e+e)%e}function ur(s,e,t){return(1-t)*s+t*e}function ca(s){return(s&s-1)===0&&s!==0}function no(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Oi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,i,r,o,a,c,h){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,h)}set(e,t,n,i,r,o,a,c,h){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],u=n[4],f=n[7],p=n[2],_=n[5],x=n[8],y=i[0],v=i[3],d=i[6],A=i[1],T=i[4],R=i[7],N=i[2],P=i[5],D=i[8];return r[0]=o*y+a*A+c*N,r[3]=o*v+a*T+c*P,r[6]=o*d+a*R+c*D,r[1]=h*y+u*A+f*N,r[4]=h*v+u*T+f*P,r[7]=h*d+u*R+f*D,r[2]=p*y+_*A+x*N,r[5]=p*v+_*T+x*P,r[8]=p*d+_*R+x*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],h=e[7],u=e[8];return t*o*u-t*a*h-n*r*u+n*a*c+i*r*h-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],h=e[7],u=e[8],f=u*o-a*h,p=a*c-u*r,_=h*r-o*c,x=t*f+n*p+i*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=f*y,e[1]=(i*h-u*n)*y,e[2]=(a*n-i*o)*y,e[3]=p*y,e[4]=(u*t-i*c)*y,e[5]=(i*r-a*t)*y,e[6]=_*y,e[7]=(n*c-h*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+e,-i*h,i*c,-i*(-h*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fr.makeScale(e,t)),this}rotate(e){return this.premultiply(fr.makeRotation(-e)),this}translate(e,t){return this.premultiply(fr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fr=new je;function Vc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rh(){const s=zs("canvas");return s.style.display="block",s}const la={};function Wi(s){s in la||(la[s]=!0,console.warn(s))}const ha=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ua=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),is={[xn]:{transfer:Us,primaries:Os,toReference:s=>s,fromReference:s=>s},[Tt]:{transfer:ft,primaries:Os,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Gs]:{transfer:Us,primaries:Ns,toReference:s=>s.applyMatrix3(ua),fromReference:s=>s.applyMatrix3(ha)},[ho]:{transfer:ft,primaries:Ns,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ua),fromReference:s=>s.applyMatrix3(ha).convertLinearToSRGB()}},Ch=new Set([xn,Gs]),lt={enabled:!0,_workingColorSpace:xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ch.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=is[e].toReference,i=is[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return is[s].primaries},getTransfer:function(s){return s===qt?Us:is[s].transfer}};function Ei(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function dr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ii;class Wc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ii===void 0&&(ii=zs("canvas")),ii.width=e.width,ii.height=e.height;const n=ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ei(t[n]/255)*255):t[n]=Ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ph=0;class $c{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Ki(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(pr(i[o].image)):r.push(pr(i[o]))}else r=pr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function pr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lh=0;class Vt extends Li{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=en,i=en,r=Xt,o=qi,a=tn,c=In,h=Vt.DEFAULT_ANISOTROPY,u=qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Ki(),this.name="",this.source=new $c(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Zn?Tt:qt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zr:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case Qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zr:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case Qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?Zn:kc}set encoding(e){Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Zn?Tt:qt}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Dc;Vt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,h=c[0],u=c[4],f=c[8],p=c[1],_=c[5],x=c[9],y=c[2],v=c[6],d=c[10];if(Math.abs(u-p)<.01&&Math.abs(f-y)<.01&&Math.abs(x-v)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+y)<.1&&Math.abs(x+v)<.1&&Math.abs(h+_+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(h+1)/2,R=(_+1)/2,N=(d+1)/2,P=(u+p)/4,D=(f+y)/4,j=(x+v)/4;return T>R&&T>N?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=P/n,r=D/n):R>N?R<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(R),n=P/i,r=j/i):N<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(N),n=D/r,i=j/r),this.set(n,i,r,t),this}let A=Math.sqrt((v-x)*(v-x)+(f-y)*(f-y)+(p-u)*(p-u));return Math.abs(A)<.001&&(A=1),this.x=(v-x)/A,this.y=(f-y)/A,this.z=(p-u)/A,this.w=Math.acos((h+_+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dh extends Li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Wi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Zn?Tt:qt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $c(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends Dh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xc extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ih extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],h=n[i+1],u=n[i+2],f=n[i+3];const p=r[o+0],_=r[o+1],x=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=h,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=_,e[t+2]=x,e[t+3]=y;return}if(f!==y||c!==p||h!==_||u!==x){let v=1-a;const d=c*p+h*_+u*x+f*y,A=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const N=Math.sqrt(T),P=Math.atan2(N,d*A);v=Math.sin(v*P)/N,a=Math.sin(a*P)/N}const R=a*A;if(c=c*v+p*R,h=h*v+_*R,u=u*v+x*R,f=f*v+y*R,v===1-a){const N=1/Math.sqrt(c*c+h*h+u*u+f*f);c*=N,h*=N,u*=N,f*=N}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o],p=r[o+1],_=r[o+2],x=r[o+3];return e[t]=a*x+u*f+c*_-h*p,e[t+1]=c*x+u*p+h*f-a*_,e[t+2]=h*x+u*_+a*p-c*f,e[t+3]=u*x-a*f-c*p-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,h=a(n/2),u=a(i/2),f=a(r/2),p=c(n/2),_=c(i/2),x=c(r/2);switch(o){case"XYZ":this._x=p*u*f+h*_*x,this._y=h*_*f-p*u*x,this._z=h*u*x+p*_*f,this._w=h*u*f-p*_*x;break;case"YXZ":this._x=p*u*f+h*_*x,this._y=h*_*f-p*u*x,this._z=h*u*x-p*_*f,this._w=h*u*f+p*_*x;break;case"ZXY":this._x=p*u*f-h*_*x,this._y=h*_*f+p*u*x,this._z=h*u*x+p*_*f,this._w=h*u*f-p*_*x;break;case"ZYX":this._x=p*u*f-h*_*x,this._y=h*_*f+p*u*x,this._z=h*u*x-p*_*f,this._w=h*u*f+p*_*x;break;case"YZX":this._x=p*u*f+h*_*x,this._y=h*_*f+p*u*x,this._z=h*u*x-p*_*f,this._w=h*u*f-p*_*x;break;case"XZY":this._x=p*u*f-h*_*x,this._y=h*_*f-p*u*x,this._z=h*u*x+p*_*f,this._w=h*u*f+p*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],h=t[2],u=t[6],f=t[10],p=n+a+f;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(u-c)*_,this._y=(r-h)*_,this._z=(o-i)*_}else if(n>a&&n>f){const _=2*Math.sqrt(1+n-a-f);this._w=(u-c)/_,this._x=.25*_,this._y=(i+o)/_,this._z=(r+h)/_}else if(a>f){const _=2*Math.sqrt(1+a-n-f);this._w=(r-h)/_,this._x=(i+o)/_,this._y=.25*_,this._z=(c+u)/_}else{const _=2*Math.sqrt(1+f-n-a);this._w=(o-i)/_,this._x=(r+h)/_,this._y=(c+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,h=t._z,u=t._w;return this._x=n*u+o*a+i*h-r*c,this._y=i*u+o*c+r*a-n*h,this._z=r*u+o*h+n*c-i*a,this._w=o*u-n*a-i*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*n+t*this._x,this._y=_*i+t*this._y,this._z=_*r+t*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,a),f=Math.sin((1-t)*u)/h,p=Math.sin(t*u)/h;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=i*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,h=2*(o*i-a*n),u=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+c*h+o*f-a*u,this.y=n+c*u+a*h-r*f,this.z=i+c*f+r*u-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mr.copy(this).projectOnVector(e),this.sub(mr)}reflect(e){return this.sub(mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mr=new L,fa=new ji;class Ji{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jt):jt.fromBufferAttribute(r,o),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)),ss.applyMatrix4(e.matrixWorld),this.union(ss)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),rs.subVectors(this.max,Ni),si.subVectors(e.a,Ni),ri.subVectors(e.b,Ni),oi.subVectors(e.c,Ni),Mn.subVectors(ri,si),Sn.subVectors(oi,ri),Fn.subVectors(si,oi);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Fn.z,Fn.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Fn.z,0,-Fn.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Fn.y,Fn.x,0];return!gr(t,si,ri,oi,rs)||(t=[1,0,0,0,1,0,0,0,1],!gr(t,si,ri,oi,rs))?!1:(os.crossVectors(Mn,Sn),t=[os.x,os.y,os.z],gr(t,si,ri,oi,rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new L,new L,new L,new L,new L,new L,new L,new L],jt=new L,ss=new Ji,si=new L,ri=new L,oi=new L,Mn=new L,Sn=new L,Fn=new L,Ni=new L,rs=new L,os=new L,zn=new L;function gr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){zn.fromArray(s,r);const a=i.x*Math.abs(zn.x)+i.y*Math.abs(zn.y)+i.z*Math.abs(zn.z),c=e.dot(zn),h=t.dot(zn),u=n.dot(zn);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>a)return!1}return!0}const Uh=new Ji,Fi=new L,_r=new L;class Vs{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(_r)),this.expandByPoint(Fi.copy(e.center).sub(_r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new L,vr=new L,as=new L,En=new L,xr=new L,cs=new L,yr=new L;class uo{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vr.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),En.copy(this.origin).sub(vr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(as),a=En.dot(this.direction),c=-En.dot(as),h=En.lengthSq(),u=Math.abs(1-o*o);let f,p,_,x;if(u>0)if(f=o*c-a,p=o*a-c,x=r*u,f>=0)if(p>=-x)if(p<=x){const y=1/u;f*=y,p*=y,_=f*(f+o*p+2*a)+p*(o*f+p+2*c)+h}else p=r,f=Math.max(0,-(o*p+a)),_=-f*f+p*(p+2*c)+h;else p=-r,f=Math.max(0,-(o*p+a)),_=-f*f+p*(p+2*c)+h;else p<=-x?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-c),r),_=-f*f+p*(p+2*c)+h):p<=x?(f=0,p=Math.min(Math.max(-r,-c),r),_=p*(p+2*c)+h):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-c),r),_=-f*f+p*(p+2*c)+h);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),_=-f*f+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(vr).addScaledVector(as,p),_}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,i=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,i=(e.min.x-p.x)*h),u>=0?(r=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,i,r){xr.subVectors(t,e),cs.subVectors(n,e),yr.crossVectors(xr,cs);let o=this.direction.dot(yr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,e);const c=a*this.direction.dot(cs.crossVectors(En,cs));if(c<0)return null;const h=a*this.direction.dot(xr.cross(En));if(h<0||c+h>o)return null;const u=-a*En.dot(yr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,n,i,r,o,a,c,h,u,f,p,_,x,y,v){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,h,u,f,p,_,x,y,v)}set(e,t,n,i,r,o,a,c,h,u,f,p,_,x,y,v){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=h,d[6]=u,d[10]=f,d[14]=p,d[3]=_,d[7]=x,d[11]=y,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ai.setFromMatrixColumn(e,0).length(),r=1/ai.setFromMatrixColumn(e,1).length(),o=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),h=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const p=o*u,_=o*f,x=a*u,y=a*f;t[0]=c*u,t[4]=-c*f,t[8]=h,t[1]=_+x*h,t[5]=p-y*h,t[9]=-a*c,t[2]=y-p*h,t[6]=x+_*h,t[10]=o*c}else if(e.order==="YXZ"){const p=c*u,_=c*f,x=h*u,y=h*f;t[0]=p+y*a,t[4]=x*a-_,t[8]=o*h,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=_*a-x,t[6]=y+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*u,_=c*f,x=h*u,y=h*f;t[0]=p-y*a,t[4]=-o*f,t[8]=x+_*a,t[1]=_+x*a,t[5]=o*u,t[9]=y-p*a,t[2]=-o*h,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*u,_=o*f,x=a*u,y=a*f;t[0]=c*u,t[4]=x*h-_,t[8]=p*h+y,t[1]=c*f,t[5]=y*h+p,t[9]=_*h-x,t[2]=-h,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,_=o*h,x=a*c,y=a*h;t[0]=c*u,t[4]=y-p*f,t[8]=x*f+_,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-h*u,t[6]=_*f+x,t[10]=p-y*f}else if(e.order==="XZY"){const p=o*c,_=o*h,x=a*c,y=a*h;t[0]=c*u,t[4]=-f,t[8]=h*u,t[1]=p*f+y,t[5]=o*u,t[9]=_*f-x,t[2]=x*f-_,t[6]=a*u,t[10]=y*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Oh,e,Nh)}lookAt(e,t,n){const i=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Tn.crossVectors(n,Bt),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Tn.crossVectors(n,Bt)),Tn.normalize(),ls.crossVectors(Bt,Tn),i[0]=Tn.x,i[4]=ls.x,i[8]=Bt.x,i[1]=Tn.y,i[5]=ls.y,i[9]=Bt.y,i[2]=Tn.z,i[6]=ls.z,i[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],u=n[1],f=n[5],p=n[9],_=n[13],x=n[2],y=n[6],v=n[10],d=n[14],A=n[3],T=n[7],R=n[11],N=n[15],P=i[0],D=i[4],j=i[8],b=i[12],C=i[1],q=i[5],K=i[9],le=i[13],F=i[2],W=i[6],Y=i[10],Z=i[14],ee=i[3],te=i[7],ne=i[11],he=i[15];return r[0]=o*P+a*C+c*F+h*ee,r[4]=o*D+a*q+c*W+h*te,r[8]=o*j+a*K+c*Y+h*ne,r[12]=o*b+a*le+c*Z+h*he,r[1]=u*P+f*C+p*F+_*ee,r[5]=u*D+f*q+p*W+_*te,r[9]=u*j+f*K+p*Y+_*ne,r[13]=u*b+f*le+p*Z+_*he,r[2]=x*P+y*C+v*F+d*ee,r[6]=x*D+y*q+v*W+d*te,r[10]=x*j+y*K+v*Y+d*ne,r[14]=x*b+y*le+v*Z+d*he,r[3]=A*P+T*C+R*F+N*ee,r[7]=A*D+T*q+R*W+N*te,r[11]=A*j+T*K+R*Y+N*ne,r[15]=A*b+T*le+R*Z+N*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],h=e[13],u=e[2],f=e[6],p=e[10],_=e[14],x=e[3],y=e[7],v=e[11],d=e[15];return x*(+r*c*f-i*h*f-r*a*p+n*h*p+i*a*_-n*c*_)+y*(+t*c*_-t*h*p+r*o*p-i*o*_+i*h*u-r*c*u)+v*(+t*h*f-t*a*_-r*o*f+n*o*_+r*a*u-n*h*u)+d*(-i*a*u-t*c*f+t*a*p+i*o*f-n*o*p+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],h=e[7],u=e[8],f=e[9],p=e[10],_=e[11],x=e[12],y=e[13],v=e[14],d=e[15],A=f*v*h-y*p*h+y*c*_-a*v*_-f*c*d+a*p*d,T=x*p*h-u*v*h-x*c*_+o*v*_+u*c*d-o*p*d,R=u*y*h-x*f*h+x*a*_-o*y*_-u*a*d+o*f*d,N=x*f*c-u*y*c-x*a*p+o*y*p+u*a*v-o*f*v,P=t*A+n*T+i*R+r*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=A*D,e[1]=(y*p*r-f*v*r-y*i*_+n*v*_+f*i*d-n*p*d)*D,e[2]=(a*v*r-y*c*r+y*i*h-n*v*h-a*i*d+n*c*d)*D,e[3]=(f*c*r-a*p*r-f*i*h+n*p*h+a*i*_-n*c*_)*D,e[4]=T*D,e[5]=(u*v*r-x*p*r+x*i*_-t*v*_-u*i*d+t*p*d)*D,e[6]=(x*c*r-o*v*r-x*i*h+t*v*h+o*i*d-t*c*d)*D,e[7]=(o*p*r-u*c*r+u*i*h-t*p*h-o*i*_+t*c*_)*D,e[8]=R*D,e[9]=(x*f*r-u*y*r-x*n*_+t*y*_+u*n*d-t*f*d)*D,e[10]=(o*y*r-x*a*r+x*n*h-t*y*h-o*n*d+t*a*d)*D,e[11]=(u*a*r-o*f*r-u*n*h+t*f*h+o*n*_-t*a*_)*D,e[12]=N*D,e[13]=(u*y*i-x*f*i+x*n*p-t*y*p-u*n*v+t*f*v)*D,e[14]=(x*a*i-o*y*i-x*n*c+t*y*c+o*n*v-t*a*v)*D,e[15]=(o*f*i-u*a*i+u*n*c-t*f*c-o*n*p+t*a*p)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,h=r*o,u=r*a;return this.set(h*o+n,h*a-i*c,h*c+i*a,0,h*a+i*c,u*a+n,u*c-i*o,0,h*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,h=r+r,u=o+o,f=a+a,p=r*h,_=r*u,x=r*f,y=o*u,v=o*f,d=a*f,A=c*h,T=c*u,R=c*f,N=n.x,P=n.y,D=n.z;return i[0]=(1-(y+d))*N,i[1]=(_+R)*N,i[2]=(x-T)*N,i[3]=0,i[4]=(_-R)*P,i[5]=(1-(p+d))*P,i[6]=(v+A)*P,i[7]=0,i[8]=(x+T)*D,i[9]=(v-A)*D,i[10]=(1-(p+y))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ai.set(i[0],i[1],i[2]).length();const o=ai.set(i[4],i[5],i[6]).length(),a=ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Jt.copy(this);const h=1/r,u=1/o,f=1/a;return Jt.elements[0]*=h,Jt.elements[1]*=h,Jt.elements[2]*=h,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=f,Jt.elements[9]*=f,Jt.elements[10]*=f,t.setFromRotationMatrix(Jt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=vn){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),p=(n+i)/(n-i);let _,x;if(a===vn)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Fs)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=vn){const c=this.elements,h=1/(t-e),u=1/(n-i),f=1/(o-r),p=(t+e)*h,_=(n+i)*u;let x,y;if(a===vn)x=(o+r)*f,y=-2*f;else if(a===Fs)x=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ai=new L,Jt=new gt,Oh=new L(0,0,0),Nh=new L(1,1,1),Tn=new L,ls=new L,Bt=new L,da=new gt,pa=new ji;class Ws{constructor(e=0,t=0,n=0,i=Ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],h=i[5],u=i[9],f=i[2],p=i[6],_=i[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return da.makeRotationFromQuaternion(e),this.setFromRotationMatrix(da,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pa.setFromEuler(this),this.setFromQuaternion(pa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ws.DEFAULT_ORDER="XYZ";class fo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fh=0;const ma=new L,ci=new ji,dn=new gt,hs=new L,zi=new L,zh=new L,Bh=new ji,ga=new L(1,0,0),_a=new L(0,1,0),va=new L(0,0,1),kh={type:"added"},Hh={type:"removed"};class bt extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new L,t=new Ws,n=new ji,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gt},normalMatrix:{value:new je}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis(ga,e)}rotateY(e){return this.rotateOnAxis(_a,e)}rotateZ(e){return this.rotateOnAxis(va,e)}translateOnAxis(e,t){return ma.copy(e).applyQuaternion(this.quaternion),this.position.add(ma.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ga,e)}translateY(e){return this.translateOnAxis(_a,e)}translateZ(e){return this.translateOnAxis(va,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hs.copy(e):hs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(zi,hs,this.up):dn.lookAt(hs,zi,this.up),this.quaternion.setFromRotationMatrix(dn),i&&(dn.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(dn),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,zh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,Bh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const f=c[h];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),h=o(e.textures),u=o(e.images),f=o(e.shapes),p=o(e.skeletons),_=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),_.length>0&&(n.animations=_),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){const c=[];for(const h in a){const u=a[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DEFAULT_UP=new L(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new L,pn=new L,Mr=new L,mn=new L,li=new L,hi=new L,xa=new L,Sr=new L,Er=new L,Tr=new L;let us=!1;class Qt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Zt.subVectors(e,t),i.cross(Zt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Zt.subVectors(i,t),pn.subVectors(n,t),Mr.subVectors(e,t);const o=Zt.dot(Zt),a=Zt.dot(pn),c=Zt.dot(Mr),h=pn.dot(pn),u=pn.dot(Mr),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;const p=1/f,_=(h*c-a*u)*p,x=(o*u-a*c)*p;return r.set(1-_-x,x,_)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(e,t,n,i,r,o,a,c){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mn.x),c.addScaledVector(o,mn.y),c.addScaledVector(a,mn.z),c)}static isFrontFacing(e,t,n,i){return Zt.subVectors(n,t),pn.subVectors(e,t),Zt.cross(pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Zt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),Qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;li.subVectors(i,n),hi.subVectors(r,n),Sr.subVectors(e,n);const c=li.dot(Sr),h=hi.dot(Sr);if(c<=0&&h<=0)return t.copy(n);Er.subVectors(e,i);const u=li.dot(Er),f=hi.dot(Er);if(u>=0&&f<=u)return t.copy(i);const p=c*f-u*h;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(li,o);Tr.subVectors(e,r);const _=li.dot(Tr),x=hi.dot(Tr);if(x>=0&&_<=x)return t.copy(r);const y=_*h-c*x;if(y<=0&&h>=0&&x<=0)return a=h/(h-x),t.copy(n).addScaledVector(hi,a);const v=u*x-_*f;if(v<=0&&f-u>=0&&_-x>=0)return xa.subVectors(r,i),a=(f-u)/(f-u+(_-x)),t.copy(i).addScaledVector(xa,a);const d=1/(v+y+p);return o=y*d,a=p*d,t.copy(n).addScaledVector(li,o).addScaledVector(hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},fs={h:0,s:0,l:0};function br(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=Ah(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=br(o,r,e+1/3),this.g=br(o,r,e),this.b=br(o,r,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=qc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return lt.fromWorkingColorSpace(Lt.copy(this),e),Math.round(At(Lt.r*255,0,255))*65536+Math.round(At(Lt.g*255,0,255))*256+Math.round(At(Lt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,i=Lt.g,r=Lt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,h;const u=(a+o)/2;if(a===o)c=0,h=0;else{const f=o-a;switch(h=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Tt){lt.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,i=Lt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(fs);const n=ur(bn.h,fs.h,t),i=ur(bn.s,fs.s,t),r=ur(bn.l,fs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Qe;Qe.NAMES=qc;let Gh=0;class Di extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Si,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yr,this.blendDst=Kr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ra,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yr&&(n.blendSrc=this.blendSrc),this.blendDst!==Kr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ra&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class po extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new L,ds=new Te;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oa&&(e.usage=this.usage),e}}class Yc extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kc extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vh=0;const $t=new gt,wr=new bt,ui=new L,kt=new Ji,Bi=new Ji,Et=new L;class zt extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vc(e)?Kc:Yc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return wr.lookAt(e),wr.updateMatrix(),this.applyMatrix4(wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Bi.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(kt.min,Bi.min),kt.expandByPoint(Et),Et.addVectors(kt.max,Bi.max),kt.expandByPoint(Et)):(kt.expandByPoint(Bi.min),kt.expandByPoint(Bi.max))}kt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Et.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Et.fromBufferAttribute(a,h),c&&(ui.fromBufferAttribute(e,h),Et.add(ui)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,h=[],u=[];for(let C=0;C<a;C++)h[C]=new L,u[C]=new L;const f=new L,p=new L,_=new L,x=new Te,y=new Te,v=new Te,d=new L,A=new L;function T(C,q,K){f.fromArray(i,C*3),p.fromArray(i,q*3),_.fromArray(i,K*3),x.fromArray(o,C*2),y.fromArray(o,q*2),v.fromArray(o,K*2),p.sub(f),_.sub(f),y.sub(x),v.sub(x);const le=1/(y.x*v.y-v.x*y.y);isFinite(le)&&(d.copy(p).multiplyScalar(v.y).addScaledVector(_,-y.y).multiplyScalar(le),A.copy(_).multiplyScalar(y.x).addScaledVector(p,-v.x).multiplyScalar(le),h[C].add(d),h[q].add(d),h[K].add(d),u[C].add(A),u[q].add(A),u[K].add(A))}let R=this.groups;R.length===0&&(R=[{start:0,count:n.length}]);for(let C=0,q=R.length;C<q;++C){const K=R[C],le=K.start,F=K.count;for(let W=le,Y=le+F;W<Y;W+=3)T(n[W+0],n[W+1],n[W+2])}const N=new L,P=new L,D=new L,j=new L;function b(C){D.fromArray(r,C*3),j.copy(D);const q=h[C];N.copy(q),N.sub(D.multiplyScalar(D.dot(q))).normalize(),P.crossVectors(j,q);const le=P.dot(u[C])<0?-1:1;c[C*4]=N.x,c[C*4+1]=N.y,c[C*4+2]=N.z,c[C*4+3]=le}for(let C=0,q=R.length;C<q;++C){const K=R[C],le=K.start,F=K.count;for(let W=le,Y=le+F;W<Y;W+=3)b(n[W+0]),b(n[W+1]),b(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,_=n.count;p<_;p++)n.setXYZ(p,0,0,0);const i=new L,r=new L,o=new L,a=new L,c=new L,h=new L,u=new L,f=new L;if(e)for(let p=0,_=e.count;p<_;p+=3){const x=e.getX(p+0),y=e.getX(p+1),v=e.getX(p+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,v),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),a.add(u),c.add(u),h.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(v,h.x,h.y,h.z)}else for(let p=0,_=t.count;p<_;p+=3)i.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){const h=a.array,u=a.itemSize,f=a.normalized,p=new h.constructor(c.length*u);let _=0,x=0;for(let y=0,v=c.length;y<v;y++){a.isInterleavedBufferAttribute?_=c[y]*a.data.stride+a.offset:_=c[y]*u;for(let d=0;d<u;d++)p[x++]=h[_++]}return new ln(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],h=e(c,n);t.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const c=[],h=r[a];for(let u=0,f=h.length;u<f;u++){const p=h[u],_=e(p,n);c.push(_)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let f=0,p=h.length;f<p;f++){const _=h[f];u.push(_.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(t))}const r=e.morphAttributes;for(const h in r){const u=[],f=r[h];for(let p=0,_=f.length;p<_;p++)u.push(f[p].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,u=o.length;h<u;h++){const f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ya=new gt,Bn=new uo,ps=new Vs,Ma=new L,fi=new L,di=new L,pi=new L,Ar=new L,ms=new L,gs=new Te,_s=new Te,vs=new Te,Sa=new L,Ea=new L,Ta=new L,xs=new L,ys=new L;class xt extends bt{constructor(e=new zt,t=new po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ms.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const u=a[c],f=r[c];u!==0&&(Ar.fromBufferAttribute(f,e),o?ms.addScaledVector(Ar,u):ms.addScaledVector(Ar.sub(t),u))}t.add(ms)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(r),Bn.copy(e.ray).recast(e.near),!(ps.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(ps,Ma)===null||Bn.origin.distanceToSquared(Ma)>(e.far-e.near)**2))&&(ya.copy(r).invert(),Bn.copy(e.ray).applyMatrix4(ya),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,p=r.groups,_=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){const v=p[x],d=o[v.materialIndex],A=Math.max(v.start,_.start),T=Math.min(a.count,Math.min(v.start+v.count,_.start+_.count));for(let R=A,N=T;R<N;R+=3){const P=a.getX(R),D=a.getX(R+1),j=a.getX(R+2);i=Ms(this,d,e,n,h,u,f,P,D,j),i&&(i.faceIndex=Math.floor(R/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const x=Math.max(0,_.start),y=Math.min(a.count,_.start+_.count);for(let v=x,d=y;v<d;v+=3){const A=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);i=Ms(this,o,e,n,h,u,f,A,T,R),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){const v=p[x],d=o[v.materialIndex],A=Math.max(v.start,_.start),T=Math.min(c.count,Math.min(v.start+v.count,_.start+_.count));for(let R=A,N=T;R<N;R+=3){const P=R,D=R+1,j=R+2;i=Ms(this,d,e,n,h,u,f,P,D,j),i&&(i.faceIndex=Math.floor(R/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const x=Math.max(0,_.start),y=Math.min(c.count,_.start+_.count);for(let v=x,d=y;v<d;v+=3){const A=v,T=v+1,R=v+2;i=Ms(this,o,e,n,h,u,f,A,T,R),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}}function Wh(s,e,t,n,i,r,o,a){let c;if(e.side===Ft?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===On,a),c===null)return null;ys.copy(a),ys.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(ys);return h<t.near||h>t.far?null:{distance:h,point:ys.clone(),object:s}}function Ms(s,e,t,n,i,r,o,a,c,h){s.getVertexPosition(a,fi),s.getVertexPosition(c,di),s.getVertexPosition(h,pi);const u=Wh(s,e,t,n,fi,di,pi,xs);if(u){i&&(gs.fromBufferAttribute(i,a),_s.fromBufferAttribute(i,c),vs.fromBufferAttribute(i,h),u.uv=Qt.getInterpolation(xs,fi,di,pi,gs,_s,vs,new Te)),r&&(gs.fromBufferAttribute(r,a),_s.fromBufferAttribute(r,c),vs.fromBufferAttribute(r,h),u.uv1=Qt.getInterpolation(xs,fi,di,pi,gs,_s,vs,new Te),u.uv2=u.uv1),o&&(Sa.fromBufferAttribute(o,a),Ea.fromBufferAttribute(o,c),Ta.fromBufferAttribute(o,h),u.normal=Qt.getInterpolation(xs,fi,di,pi,Sa,Ea,Ta,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:h,normal:new L,materialIndex:0};Qt.getNormal(fi,di,pi,f.normal),u.face=f}return u}class nn extends zt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],h=[],u=[],f=[];let p=0,_=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(f,2));function x(y,v,d,A,T,R,N,P,D,j,b){const C=R/D,q=N/j,K=R/2,le=N/2,F=P/2,W=D+1,Y=j+1;let Z=0,ee=0;const te=new L;for(let ne=0;ne<Y;ne++){const he=ne*q-le;for(let fe=0;fe<W;fe++){const X=fe*C-K;te[y]=X*A,te[v]=he*T,te[d]=F,h.push(te.x,te.y,te.z),te[y]=0,te[v]=0,te[d]=P>0?1:-1,u.push(te.x,te.y,te.z),f.push(fe/D),f.push(1-ne/j),Z+=1}}for(let ne=0;ne<j;ne++)for(let he=0;he<D;he++){const fe=p+he+W*ne,X=p+he+W*(ne+1),se=p+(he+1)+W*(ne+1),xe=p+(he+1)+W*ne;c.push(fe,X,xe),c.push(X,se,xe),ee+=6}a.addGroup(_,ee,b),_+=ee,p+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ai(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function It(s){const e={};for(let t=0;t<s.length;t++){const n=Ai(s[t]);for(const i in n)e[i]=n[i]}return e}function $h(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function jc(s){return s.getRenderTarget()===null?s.outputColorSpace:lt.workingColorSpace}const Xh={clone:Ai,merge:It};var qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qh,this.fragmentShader=Yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=$h(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jc extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gt extends Jc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=to*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return to*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/h,i*=o.width/c,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mi=-90,gi=1;class Kh extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(mi,gi,e,t);i.layers=this.layers,this.add(i);const r=new Gt(mi,gi,e,t);r.layers=this.layers,this.add(r);const o=new Gt(mi,gi,e,t);o.layers=this.layers,this.add(o);const a=new Gt(mi,gi,e,t);a.layers=this.layers,this.add(a);const c=new Gt(mi,gi,e,t);c.layers=this.layers,this.add(c);const h=new Gt(mi,gi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const h of t)this.remove(h);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,h,u]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,p,_),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Zc extends Vt{constructor(e,t,n,i,r,o,a,c,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Ti,super(e,t,n,i,r,o,a,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jh extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Wi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Zn?Tt:qt),this.texture=new Zc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new nn(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:Ln});r.uniforms.tEquirect.value=t;const o=new xt(i,r),a=t.minFilter;return t.minFilter===qi&&(t.minFilter=Xt),new Kh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Rr=new L,Jh=new L,Zh=new je;class Wn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Rr.subVectors(n,t).cross(Jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Rr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zh.getNormalMatrix(e),i=this.coplanarPoint(Rr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Vs,Ss=new L;class mo{constructor(e=new Wn,t=new Wn,n=new Wn,i=new Wn,r=new Wn,o=new Wn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],h=i[4],u=i[5],f=i[6],p=i[7],_=i[8],x=i[9],y=i[10],v=i[11],d=i[12],A=i[13],T=i[14],R=i[15];if(n[0].setComponents(c-r,p-h,v-_,R-d).normalize(),n[1].setComponents(c+r,p+h,v+_,R+d).normalize(),n[2].setComponents(c+o,p+u,v+x,R+A).normalize(),n[3].setComponents(c-o,p-u,v-x,R-A).normalize(),n[4].setComponents(c-a,p-f,v-y,R-T).normalize(),t===vn)n[5].setComponents(c+a,p+f,v+y,R+T).normalize();else if(t===Fs)n[5].setComponents(a,f,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ss.x=i.normal.x>0?e.max.x:e.min.x,Ss.y=i.normal.y>0?e.max.y:e.min.y,Ss.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qc(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Qh(s,e){const t=e.isWebGL2,n=new WeakMap;function i(h,u){const f=h.array,p=h.usage,_=f.byteLength,x=s.createBuffer();s.bindBuffer(u,x),s.bufferData(u,f,p),h.onUploadCallback();let y;if(f instanceof Float32Array)y=s.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)y=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=s.SHORT;else if(f instanceof Uint32Array)y=s.UNSIGNED_INT;else if(f instanceof Int32Array)y=s.INT;else if(f instanceof Int8Array)y=s.BYTE;else if(f instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,u,f){const p=u.array,_=u._updateRange,x=u.updateRanges;if(s.bindBuffer(f,h),_.count===-1&&x.length===0&&s.bufferSubData(f,0,p),x.length!==0){for(let y=0,v=x.length;y<v;y++){const d=x[y];t?s.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):s.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}_.count!==-1&&(t?s.bufferSubData(f,_.offset*p.BYTES_PER_ELEMENT,p,_.offset,_.count):s.bufferSubData(f,_.offset*p.BYTES_PER_ELEMENT,p.subarray(_.offset,_.offset+_.count)),_.count=-1),u.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u&&(s.deleteBuffer(u.buffer),n.delete(h))}function c(h,u){if(h.isGLBufferAttribute){const p=n.get(h);(!p||p.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const f=n.get(h);if(f===void 0)n.set(h,i(h,u));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,h,u),f.version=h.version}}return{get:o,remove:a,update:c}}class go extends zt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),h=a+1,u=c+1,f=e/a,p=t/c,_=[],x=[],y=[],v=[];for(let d=0;d<u;d++){const A=d*p-o;for(let T=0;T<h;T++){const R=T*f-r;x.push(R,-A,0),y.push(0,0,1),v.push(T/a),v.push(1-d/c)}}for(let d=0;d<c;d++)for(let A=0;A<a;A++){const T=A+h*d,R=A+h*(d+1),N=A+1+h*(d+1),P=A+1+h*d;_.push(T,R,P),_.push(R,N,P)}this.setIndex(_),this.setAttribute("position",new Rt(x,3)),this.setAttribute("normal",new Rt(y,3)),this.setAttribute("uv",new Rt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.widthSegments,e.heightSegments)}}var eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,su=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,du=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Eu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Au=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Du=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ku=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ku=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ef=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,of=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,af=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ef=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,If=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ed=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,td=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,id=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ad=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,cd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ld=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_d=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Md=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ed=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ad=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:eu,alphahash_pars_fragment:tu,alphamap_fragment:nu,alphamap_pars_fragment:iu,alphatest_fragment:su,alphatest_pars_fragment:ru,aomap_fragment:ou,aomap_pars_fragment:au,batching_pars_vertex:cu,batching_vertex:lu,begin_vertex:hu,beginnormal_vertex:uu,bsdfs:fu,iridescence_fragment:du,bumpmap_pars_fragment:pu,clipping_planes_fragment:mu,clipping_planes_pars_fragment:gu,clipping_planes_pars_vertex:_u,clipping_planes_vertex:vu,color_fragment:xu,color_pars_fragment:yu,color_pars_vertex:Mu,color_vertex:Su,common:Eu,cube_uv_reflection_fragment:Tu,defaultnormal_vertex:bu,displacementmap_pars_vertex:wu,displacementmap_vertex:Au,emissivemap_fragment:Ru,emissivemap_pars_fragment:Cu,colorspace_fragment:Pu,colorspace_pars_fragment:Lu,envmap_fragment:Du,envmap_common_pars_fragment:Iu,envmap_pars_fragment:Uu,envmap_pars_vertex:Ou,envmap_physical_pars_fragment:qu,envmap_vertex:Nu,fog_vertex:Fu,fog_pars_vertex:zu,fog_fragment:Bu,fog_pars_fragment:ku,gradientmap_pars_fragment:Hu,lightmap_fragment:Gu,lightmap_pars_fragment:Vu,lights_lambert_fragment:Wu,lights_lambert_pars_fragment:$u,lights_pars_begin:Xu,lights_toon_fragment:Yu,lights_toon_pars_fragment:Ku,lights_phong_fragment:ju,lights_phong_pars_fragment:Ju,lights_physical_fragment:Zu,lights_physical_pars_fragment:Qu,lights_fragment_begin:ef,lights_fragment_maps:tf,lights_fragment_end:nf,logdepthbuf_fragment:sf,logdepthbuf_pars_fragment:rf,logdepthbuf_pars_vertex:of,logdepthbuf_vertex:af,map_fragment:cf,map_pars_fragment:lf,map_particle_fragment:hf,map_particle_pars_fragment:uf,metalnessmap_fragment:ff,metalnessmap_pars_fragment:df,morphcolor_vertex:pf,morphnormal_vertex:mf,morphtarget_pars_vertex:gf,morphtarget_vertex:_f,normal_fragment_begin:vf,normal_fragment_maps:xf,normal_pars_fragment:yf,normal_pars_vertex:Mf,normal_vertex:Sf,normalmap_pars_fragment:Ef,clearcoat_normal_fragment_begin:Tf,clearcoat_normal_fragment_maps:bf,clearcoat_pars_fragment:wf,iridescence_pars_fragment:Af,opaque_fragment:Rf,packing:Cf,premultiplied_alpha_fragment:Pf,project_vertex:Lf,dithering_fragment:Df,dithering_pars_fragment:If,roughnessmap_fragment:Uf,roughnessmap_pars_fragment:Of,shadowmap_pars_fragment:Nf,shadowmap_pars_vertex:Ff,shadowmap_vertex:zf,shadowmask_pars_fragment:Bf,skinbase_vertex:kf,skinning_pars_vertex:Hf,skinning_vertex:Gf,skinnormal_vertex:Vf,specularmap_fragment:Wf,specularmap_pars_fragment:$f,tonemapping_fragment:Xf,tonemapping_pars_fragment:qf,transmission_fragment:Yf,transmission_pars_fragment:Kf,uv_pars_fragment:jf,uv_pars_vertex:Jf,uv_vertex:Zf,worldpos_vertex:Qf,background_vert:ed,background_frag:td,backgroundCube_vert:nd,backgroundCube_frag:id,cube_vert:sd,cube_frag:rd,depth_vert:od,depth_frag:ad,distanceRGBA_vert:cd,distanceRGBA_frag:ld,equirect_vert:hd,equirect_frag:ud,linedashed_vert:fd,linedashed_frag:dd,meshbasic_vert:pd,meshbasic_frag:md,meshlambert_vert:gd,meshlambert_frag:_d,meshmatcap_vert:vd,meshmatcap_frag:xd,meshnormal_vert:yd,meshnormal_frag:Md,meshphong_vert:Sd,meshphong_frag:Ed,meshphysical_vert:Td,meshphysical_frag:bd,meshtoon_vert:wd,meshtoon_frag:Ad,points_vert:Rd,points_frag:Cd,shadow_vert:Pd,shadow_frag:Ld,sprite_vert:Dd,sprite_frag:Id},me={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},an={basic:{uniforms:It([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:It([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:It([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:It([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:It([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:It([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:It([me.points,me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:It([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:It([me.common,me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:It([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:It([me.sprite,me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:It([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:It([me.lights,me.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};an.physical={uniforms:It([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Es={r:0,b:0,g:0};function Ud(s,e,t,n,i,r,o){const a=new Qe(0);let c=r===!0?0:1,h,u,f=null,p=0,_=null;function x(v,d){let A=!1,T=d.isScene===!0?d.background:null;T&&T.isTexture&&(T=(d.backgroundBlurriness>0?t:e).get(T)),T===null?y(a,c):T&&T.isColor&&(y(T,1),A=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||A)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),T&&(T.isCubeTexture||T.mapping===Hs)?(u===void 0&&(u=new xt(new nn(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Ai(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=lt.getTransfer(T.colorSpace)!==ft,(f!==T||p!==T.version||_!==s.toneMapping)&&(u.material.needsUpdate=!0,f=T,p=T.version,_=s.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new xt(new go(2,2),new ei({name:"BackgroundMaterial",uniforms:Ai(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=lt.getTransfer(T.colorSpace)!==ft,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||p!==T.version||_!==s.toneMapping)&&(h.material.needsUpdate=!0,f=T,p=T.version,_=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function y(v,d){v.getRGB(Es,jc(s)),n.buffers.color.setClear(Es.r,Es.g,Es.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(v,d=1){a.set(v),c=d,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,y(a,c)},render:x}}function Od(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=v(null);let h=c,u=!1;function f(F,W,Y,Z,ee){let te=!1;if(o){const ne=y(Z,Y,W);h!==ne&&(h=ne,_(h.object)),te=d(F,Z,Y,ee),te&&A(F,Z,Y,ee)}else{const ne=W.wireframe===!0;(h.geometry!==Z.id||h.program!==Y.id||h.wireframe!==ne)&&(h.geometry=Z.id,h.program=Y.id,h.wireframe=ne,te=!0)}ee!==null&&t.update(ee,s.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,j(F,W,Y,Z),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function p(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function _(F){return n.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F)}function x(F){return n.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function y(F,W,Y){const Z=Y.wireframe===!0;let ee=a[F.id];ee===void 0&&(ee={},a[F.id]=ee);let te=ee[W.id];te===void 0&&(te={},ee[W.id]=te);let ne=te[Z];return ne===void 0&&(ne=v(p()),te[Z]=ne),ne}function v(F){const W=[],Y=[],Z=[];for(let ee=0;ee<i;ee++)W[ee]=0,Y[ee]=0,Z[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Y,attributeDivisors:Z,object:F,attributes:{},index:null}}function d(F,W,Y,Z){const ee=h.attributes,te=W.attributes;let ne=0;const he=Y.getAttributes();for(const fe in he)if(he[fe].location>=0){const se=ee[fe];let xe=te[fe];if(xe===void 0&&(fe==="instanceMatrix"&&F.instanceMatrix&&(xe=F.instanceMatrix),fe==="instanceColor"&&F.instanceColor&&(xe=F.instanceColor)),se===void 0||se.attribute!==xe||xe&&se.data!==xe.data)return!0;ne++}return h.attributesNum!==ne||h.index!==Z}function A(F,W,Y,Z){const ee={},te=W.attributes;let ne=0;const he=Y.getAttributes();for(const fe in he)if(he[fe].location>=0){let se=te[fe];se===void 0&&(fe==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),fe==="instanceColor"&&F.instanceColor&&(se=F.instanceColor));const xe={};xe.attribute=se,se&&se.data&&(xe.data=se.data),ee[fe]=xe,ne++}h.attributes=ee,h.attributesNum=ne,h.index=Z}function T(){const F=h.newAttributes;for(let W=0,Y=F.length;W<Y;W++)F[W]=0}function R(F){N(F,0)}function N(F,W){const Y=h.newAttributes,Z=h.enabledAttributes,ee=h.attributeDivisors;Y[F]=1,Z[F]===0&&(s.enableVertexAttribArray(F),Z[F]=1),ee[F]!==W&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,W),ee[F]=W)}function P(){const F=h.newAttributes,W=h.enabledAttributes;for(let Y=0,Z=W.length;Y<Z;Y++)W[Y]!==F[Y]&&(s.disableVertexAttribArray(Y),W[Y]=0)}function D(F,W,Y,Z,ee,te,ne){ne===!0?s.vertexAttribIPointer(F,W,Y,ee,te):s.vertexAttribPointer(F,W,Y,Z,ee,te)}function j(F,W,Y,Z){if(n.isWebGL2===!1&&(F.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const ee=Z.attributes,te=Y.getAttributes(),ne=W.defaultAttributeValues;for(const he in te){const fe=te[he];if(fe.location>=0){let X=ee[he];if(X===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&(X=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&(X=F.instanceColor)),X!==void 0){const se=X.normalized,xe=X.itemSize,be=t.get(X);if(be===void 0)continue;const Le=be.buffer,He=be.type,Ge=be.bytesPerElement,Ne=n.isWebGL2===!0&&(He===s.INT||He===s.UNSIGNED_INT||X.gpuType===Ic);if(X.isInterleavedBufferAttribute){const Ze=X.data,V=Ze.stride,st=X.offset;if(Ze.isInstancedInterleavedBuffer){for(let Ue=0;Ue<fe.locationSize;Ue++)N(fe.location+Ue,Ze.meshPerAttribute);F.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ze.meshPerAttribute*Ze.count)}else for(let Ue=0;Ue<fe.locationSize;Ue++)R(fe.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Ue=0;Ue<fe.locationSize;Ue++)D(fe.location+Ue,xe/fe.locationSize,He,se,V*Ge,(st+xe/fe.locationSize*Ue)*Ge,Ne)}else{if(X.isInstancedBufferAttribute){for(let Ze=0;Ze<fe.locationSize;Ze++)N(fe.location+Ze,X.meshPerAttribute);F.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ze=0;Ze<fe.locationSize;Ze++)R(fe.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Ze=0;Ze<fe.locationSize;Ze++)D(fe.location+Ze,xe/fe.locationSize,He,se,xe*Ge,xe/fe.locationSize*Ze*Ge,Ne)}}else if(ne!==void 0){const se=ne[he];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(fe.location,se);break;case 3:s.vertexAttrib3fv(fe.location,se);break;case 4:s.vertexAttrib4fv(fe.location,se);break;default:s.vertexAttrib1fv(fe.location,se)}}}}P()}function b(){K();for(const F in a){const W=a[F];for(const Y in W){const Z=W[Y];for(const ee in Z)x(Z[ee].object),delete Z[ee];delete W[Y]}delete a[F]}}function C(F){if(a[F.id]===void 0)return;const W=a[F.id];for(const Y in W){const Z=W[Y];for(const ee in Z)x(Z[ee].object),delete Z[ee];delete W[Y]}delete a[F.id]}function q(F){for(const W in a){const Y=a[W];if(Y[F.id]===void 0)continue;const Z=Y[F.id];for(const ee in Z)x(Z[ee].object),delete Z[ee];delete Y[F.id]}}function K(){le(),u=!0,h!==c&&(h=c,_(h.object))}function le(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:K,resetDefaultState:le,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:q,initAttributes:T,enableAttribute:R,disableUnusedAttributes:P}}function Nd(s,e,t,n){const i=n.isWebGL2;let r;function o(u){r=u}function a(u,f){s.drawArrays(r,u,f),t.update(f,r,1)}function c(u,f,p){if(p===0)return;let _,x;if(i)_=s,x="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](r,u,f,p),t.update(f,r,p)}function h(u,f,p){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<p;x++)this.render(u[x],f[x]);else{_.multiDrawArraysWEBGL(r,u,0,f,0,p);let x=0;for(let y=0;y<p;y++)x+=f[y];t.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=h}function Fd(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const h=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,R=o||e.has("OES_texture_float"),N=T&&R,P=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:v,maxVaryings:d,maxFragmentUniforms:A,vertexTextures:T,floatFragmentTextures:R,floatVertexTextures:N,maxSamples:P}}function zd(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Wn,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const _=f.length!==0||p||n!==0||i;return i=p,n=f.length,_},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=u(f,p,0)},this.setState=function(f,p,_){const x=f.clippingPlanes,y=f.clipIntersection,v=f.clipShadows,d=s.get(f);if(!i||x===null||x.length===0||r&&!v)r?u(null):h();else{const A=r?0:n,T=A*4;let R=d.clippingState||null;c.value=R,R=u(x,p,T,_);for(let N=0;N!==T;++N)R[N]=t[N];d.clippingState=R,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,p,_,x){const y=f!==null?f.length:0;let v=null;if(y!==0){if(v=c.value,x!==!0||v===null){const d=_+y*4,A=p.matrixWorldInverse;a.getNormalMatrix(A),(v===null||v.length<d)&&(v=new Float32Array(d));for(let T=0,R=_;T!==y;++T,R+=4)o.copy(f[T]).applyMatrix4(A,a),o.normal.toArray(v,R),v[R+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function Bd(s){let e=new WeakMap;function t(o,a){return a===jr?o.mapping=Ti:a===Jr&&(o.mapping=bi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===jr||a===Jr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const h=new jh(c.height/2);return h.fromEquirectangularTexture(s,o),e.set(o,h),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class el extends Jc{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yi=4,ba=[.125,.215,.35,.446,.526,.582],qn=20,Cr=new el,wa=new Qe;let Pr=null,Lr=0,Dr=0;const $n=(1+Math.sqrt(5))/2,_i=1/$n,Aa=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,$n,_i),new L(0,$n,-_i),new L(_i,0,$n),new L(-_i,0,$n),new L($n,_i,0),new L(-$n,_i,0)];class Ra{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Pr=this._renderer.getRenderTarget(),Lr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=La(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pr,Lr,Dr),e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pr=this._renderer.getRenderTarget(),Lr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Yi,format:tn,colorSpace:xn,depthBuffer:!1},i=Ca(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ca(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kd(r)),this._blurMaterial=Hd(r,e,t)}return i}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,Cr)}_sceneToCubeUV(e,t,n,i){const a=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(wa),u.toneMapping=Dn,u.autoClear=!1;const _=new po({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),x=new xt(new nn,_);let y=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,y=!0):(_.color.copy(wa),y=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(a.up.set(0,c[d],0),a.lookAt(h[d],0,0)):A===1?(a.up.set(0,0,c[d]),a.lookAt(0,h[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,h[d]));const T=this._cubeSize;Ts(i,A*T,d>2?T:0,T,T),u.setRenderTarget(i),y&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ti||e.mapping===bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=La()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pa());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ts(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Cr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Aa[(i-1)%Aa.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new xt(this._lodPlanes[i],h),p=h.uniforms,_=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*qn-1),y=r/x,v=isFinite(r)?1+Math.floor(u*y):qn;v>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${qn}`);const d=[];let A=0;for(let D=0;D<qn;++D){const j=D/y,b=Math.exp(-j*j/2);d.push(b),D===0?A+=b:D<v&&(A+=2*b)}for(let D=0;D<d.length;D++)d[D]=d[D]/A;p.envMap.value=e.texture,p.samples.value=v,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:T}=this;p.dTheta.value=x,p.mipInt.value=T-n;const R=this._sizeLods[i],N=3*R*(i>T-yi?i-T+yi:0),P=4*(this._cubeSize-R);Ts(t,N,P,3*R,2*R),c.setRenderTarget(t),c.render(f,Cr)}}function kd(s){const e=[],t=[],n=[];let i=s;const r=s-yi+1+ba.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-yi?c=ba[o-s+yi-1]:o===0&&(c=0),n.push(c);const h=1/(a-2),u=-h,f=1+h,p=[u,u,f,u,f,f,u,u,f,f,u,f],_=6,x=6,y=3,v=2,d=1,A=new Float32Array(y*x*_),T=new Float32Array(v*x*_),R=new Float32Array(d*x*_);for(let P=0;P<_;P++){const D=P%3*2/3-1,j=P>2?0:-1,b=[D,j,0,D+2/3,j,0,D+2/3,j+1,0,D,j,0,D+2/3,j+1,0,D,j+1,0];A.set(b,y*x*P),T.set(p,v*x*P);const C=[P,P,P,P,P,P];R.set(C,d*x*P)}const N=new zt;N.setAttribute("position",new ln(A,y)),N.setAttribute("uv",new ln(T,v)),N.setAttribute("faceIndex",new ln(R,d)),e.push(N),i>yi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ca(s,e,t){const n=new Qn(s,e,t);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Hd(s,e,t){const n=new Float32Array(qn),i=new L(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Pa(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function La(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function _o(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gd(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,h=c===jr||c===Jr,u=c===Ti||c===bi;if(h||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ra(s)),f=h?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(h&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Ra(s));const p=h?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function i(a){let c=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&c++;return c===h}function r(a){const c=a.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Vd(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wd(s,e,t,n){const i={},r=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);for(const x in p.morphAttributes){const y=p.morphAttributes[x];for(let v=0,d=y.length;v<d;v++)e.remove(y[v])}p.removeEventListener("dispose",o),delete i[p.id];const _=r.get(p);_&&(e.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return i[p.id]===!0||(p.addEventListener("dispose",o),i[p.id]=!0,t.memory.geometries++),p}function c(f){const p=f.attributes;for(const x in p)e.update(p[x],s.ARRAY_BUFFER);const _=f.morphAttributes;for(const x in _){const y=_[x];for(let v=0,d=y.length;v<d;v++)e.update(y[v],s.ARRAY_BUFFER)}}function h(f){const p=[],_=f.index,x=f.attributes.position;let y=0;if(_!==null){const A=_.array;y=_.version;for(let T=0,R=A.length;T<R;T+=3){const N=A[T+0],P=A[T+1],D=A[T+2];p.push(N,P,P,D,D,N)}}else if(x!==void 0){const A=x.array;y=x.version;for(let T=0,R=A.length/3-1;T<R;T+=3){const N=T+0,P=T+1,D=T+2;p.push(N,P,P,D,D,N)}}else return;const v=new(Vc(p)?Kc:Yc)(p,1);v.version=y;const d=r.get(f);d&&e.remove(d),r.set(f,v)}function u(f){const p=r.get(f);if(p){const _=f.index;_!==null&&p.version<_.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function $d(s,e,t,n){const i=n.isWebGL2;let r;function o(_){r=_}let a,c;function h(_){a=_.type,c=_.bytesPerElement}function u(_,x){s.drawElements(r,x,a,_*c),t.update(x,r,1)}function f(_,x,y){if(y===0)return;let v,d;if(i)v=s,d="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[d](r,x,a,_*c,y),t.update(x,r,y)}function p(_,x,y){if(y===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let d=0;d<y;d++)this.render(_[d]/c,x[d]);else{v.multiDrawElementsWEBGL(r,x,0,a,_,0,y);let d=0;for(let A=0;A<y;A++)d+=x[A];t.update(d,r,1)}}this.setMode=o,this.setIndex=h,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function Xd(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qd(s,e){return s[0]-e[0]}function Yd(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Kd(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new dt,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function c(h,u,f){const p=h.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=x!==void 0?x.length:0;let v=r.get(u);if(v===void 0||v.count!==y){let W=function(){le.dispose(),r.delete(u),u.removeEventListener("dispose",W)};var _=W;v!==void 0&&v.texture.dispose();const T=u.morphAttributes.position!==void 0,R=u.morphAttributes.normal!==void 0,N=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],j=u.morphAttributes.color||[];let b=0;T===!0&&(b=1),R===!0&&(b=2),N===!0&&(b=3);let C=u.attributes.position.count*b,q=1;C>e.maxTextureSize&&(q=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const K=new Float32Array(C*q*4*y),le=new Xc(K,C,q,y);le.type=Pn,le.needsUpdate=!0;const F=b*4;for(let Y=0;Y<y;Y++){const Z=P[Y],ee=D[Y],te=j[Y],ne=C*q*4*Y;for(let he=0;he<Z.count;he++){const fe=he*F;T===!0&&(o.fromBufferAttribute(Z,he),K[ne+fe+0]=o.x,K[ne+fe+1]=o.y,K[ne+fe+2]=o.z,K[ne+fe+3]=0),R===!0&&(o.fromBufferAttribute(ee,he),K[ne+fe+4]=o.x,K[ne+fe+5]=o.y,K[ne+fe+6]=o.z,K[ne+fe+7]=0),N===!0&&(o.fromBufferAttribute(te,he),K[ne+fe+8]=o.x,K[ne+fe+9]=o.y,K[ne+fe+10]=o.z,K[ne+fe+11]=te.itemSize===4?o.w:1)}}v={count:y,texture:le,size:new Te(C,q)},r.set(u,v),u.addEventListener("dispose",W)}let d=0;for(let T=0;T<p.length;T++)d+=p[T];const A=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(s,"morphTargetBaseInfluence",A),f.getUniforms().setValue(s,"morphTargetInfluences",p),f.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const x=p===void 0?0:p.length;let y=n[u.id];if(y===void 0||y.length!==x){y=[];for(let R=0;R<x;R++)y[R]=[R,0];n[u.id]=y}for(let R=0;R<x;R++){const N=y[R];N[0]=R,N[1]=p[R]}y.sort(Yd);for(let R=0;R<8;R++)R<x&&y[R][1]?(a[R][0]=y[R][0],a[R][1]=y[R][1]):(a[R][0]=Number.MAX_SAFE_INTEGER,a[R][1]=0);a.sort(qd);const v=u.morphAttributes.position,d=u.morphAttributes.normal;let A=0;for(let R=0;R<8;R++){const N=a[R],P=N[0],D=N[1];P!==Number.MAX_SAFE_INTEGER&&D?(v&&u.getAttribute("morphTarget"+R)!==v[P]&&u.setAttribute("morphTarget"+R,v[P]),d&&u.getAttribute("morphNormal"+R)!==d[P]&&u.setAttribute("morphNormal"+R,d[P]),i[R]=D,A+=D):(v&&u.hasAttribute("morphTarget"+R)===!0&&u.deleteAttribute("morphTarget"+R),d&&u.hasAttribute("morphNormal"+R)===!0&&u.deleteAttribute("morphNormal"+R),i[R]=0)}const T=u.morphTargetsRelative?1:1-A;f.getUniforms().setValue(s,"morphTargetBaseInfluence",T),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function jd(s,e,t,n){let i=new WeakMap;function r(c){const h=n.render.frame,u=c.geometry,f=e.get(c,u);if(i.get(f)!==h&&(e.update(f),i.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==h&&(p.update(),i.set(p,h))}return f}function o(){i=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}class tl extends Vt{constructor(e,t,n,i,r,o,a,c,h,u){if(u=u!==void 0?u:Jn,u!==Jn&&u!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Jn&&(n=Cn),n===void 0&&u===wi&&(n=jn),super(null,i,r,o,a,c,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ut,this.minFilter=c!==void 0?c:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const nl=new Vt,il=new tl(1,1);il.compareFunction=Gc;const sl=new Xc,rl=new Ih,ol=new Zc,Da=[],Ia=[],Ua=new Float32Array(16),Oa=new Float32Array(9),Na=new Float32Array(4);function Ii(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Da[i];if(r===void 0&&(r=new Float32Array(i),Da[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function St(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function $s(s,e){let t=Ia[e];t===void 0&&(t=new Int32Array(e),Ia[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Jd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Zd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2fv(this.addr,e),St(t,e)}}function Qd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;s.uniform3fv(this.addr,e),St(t,e)}}function ep(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4fv(this.addr,e),St(t,e)}}function tp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Na.set(n),s.uniformMatrix2fv(this.addr,!1,Na),St(t,n)}}function np(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Oa.set(n),s.uniformMatrix3fv(this.addr,!1,Oa),St(t,n)}}function ip(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Ua.set(n),s.uniformMatrix4fv(this.addr,!1,Ua),St(t,n)}}function sp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function rp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2iv(this.addr,e),St(t,e)}}function op(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3iv(this.addr,e),St(t,e)}}function ap(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4iv(this.addr,e),St(t,e)}}function cp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function lp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2uiv(this.addr,e),St(t,e)}}function hp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3uiv(this.addr,e),St(t,e)}}function up(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4uiv(this.addr,e),St(t,e)}}function fp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?il:nl;t.setTexture2D(e||r,i)}function dp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rl,i)}function pp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ol,i)}function mp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||sl,i)}function gp(s){switch(s){case 5126:return Jd;case 35664:return Zd;case 35665:return Qd;case 35666:return ep;case 35674:return tp;case 35675:return np;case 35676:return ip;case 5124:case 35670:return sp;case 35667:case 35671:return rp;case 35668:case 35672:return op;case 35669:case 35673:return ap;case 5125:return cp;case 36294:return lp;case 36295:return hp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return dp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}function _p(s,e){s.uniform1fv(this.addr,e)}function vp(s,e){const t=Ii(e,this.size,2);s.uniform2fv(this.addr,t)}function xp(s,e){const t=Ii(e,this.size,3);s.uniform3fv(this.addr,t)}function yp(s,e){const t=Ii(e,this.size,4);s.uniform4fv(this.addr,t)}function Mp(s,e){const t=Ii(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Sp(s,e){const t=Ii(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ep(s,e){const t=Ii(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Tp(s,e){s.uniform1iv(this.addr,e)}function bp(s,e){s.uniform2iv(this.addr,e)}function wp(s,e){s.uniform3iv(this.addr,e)}function Ap(s,e){s.uniform4iv(this.addr,e)}function Rp(s,e){s.uniform1uiv(this.addr,e)}function Cp(s,e){s.uniform2uiv(this.addr,e)}function Pp(s,e){s.uniform3uiv(this.addr,e)}function Lp(s,e){s.uniform4uiv(this.addr,e)}function Dp(s,e,t){const n=this.cache,i=e.length,r=$s(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||nl,r[o])}function Ip(s,e,t){const n=this.cache,i=e.length,r=$s(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||rl,r[o])}function Up(s,e,t){const n=this.cache,i=e.length,r=$s(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ol,r[o])}function Op(s,e,t){const n=this.cache,i=e.length,r=$s(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||sl,r[o])}function Np(s){switch(s){case 5126:return _p;case 35664:return vp;case 35665:return xp;case 35666:return yp;case 35674:return Mp;case 35675:return Sp;case 35676:return Ep;case 5124:case 35670:return Tp;case 35667:case 35671:return bp;case 35668:case 35672:return wp;case 35669:case 35673:return Ap;case 5125:return Rp;case 36294:return Cp;case 36295:return Pp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Op}}class Fp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gp(t.type)}}class zp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Np(t.type)}}class Bp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function Fa(s,e){s.seq.push(e),s.map[e.id]=e}function kp(s,e,t){const n=s.name,i=n.length;for(Ir.lastIndex=0;;){const r=Ir.exec(n),o=Ir.lastIndex;let a=r[1];const c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===i){Fa(t,h===void 0?new Fp(a,s,e):new zp(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new Bp(a),Fa(t,f)),t=f}}}class Ps{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);kp(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function za(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Hp=37297;let Gp=0;function Vp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Wp(s){const e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(s);let n;switch(e===t?n="":e===Ns&&t===Os?n="LinearDisplayP3ToLinearSRGB":e===Os&&t===Ns&&(n="LinearSRGBToLinearDisplayP3"),s){case xn:case Gs:return[n,"LinearTransferOETF"];case Tt:case ho:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ba(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Vp(s.getShaderSource(e),o)}else return i}function $p(s,e){const t=Wp(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Xp(s,e){let t;switch(e){case nh:t="Linear";break;case ih:t="Reinhard";break;case sh:t="OptimizedCineon";break;case rh:t="ACESFilmic";break;case ah:t="AgX";break;case oh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mi).join(`
`)}function Yp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Mi).join(`
`)}function Kp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Mi(s){return s!==""}function ka(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ha(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(s){return s.replace(Jp,Qp)}const Zp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Qp(s,e){let t=Ke[e];if(t===void 0){const n=Zp.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return io(t)}const em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ga(s){return s.replace(em,tm)}function tm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Va(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Cc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Pc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function im(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ti:case bi:e="ENVMAP_TYPE_CUBE";break;case Hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case bi:e="ENVMAP_MODE_REFRACTION";break}return e}function rm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Lc:e="ENVMAP_BLENDING_MULTIPLY";break;case eh:e="ENVMAP_BLENDING_MIX";break;case th:e="ENVMAP_BLENDING_ADD";break}return e}function om(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function am(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=nm(t),h=im(t),u=sm(t),f=rm(t),p=om(t),_=t.isWebGL2?"":qp(t),x=Yp(t),y=Kp(r),v=i.createProgram();let d,A,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Mi).join(`
`),d.length>0&&(d+=`
`),A=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Mi).join(`
`),A.length>0&&(A+=`
`)):(d=[Va(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),A=[_,Va(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Dn?Xp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,$p("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mi).join(`
`)),o=io(o),o=ka(o,t),o=Ha(o,t),a=io(a),a=ka(a,t),a=Ha(a,t),o=Ga(o),a=Ga(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,d=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,A=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const R=T+d+o,N=T+A+a,P=za(i,i.VERTEX_SHADER,R),D=za(i,i.FRAGMENT_SHADER,N);i.attachShader(v,P),i.attachShader(v,D),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function j(K){if(s.debug.checkShaderErrors){const le=i.getProgramInfoLog(v).trim(),F=i.getShaderInfoLog(P).trim(),W=i.getShaderInfoLog(D).trim();let Y=!0,Z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,P,D);else{const ee=Ba(i,P,"vertex"),te=Ba(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+ee+`
`+te)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(F===""||W==="")&&(Z=!1);Z&&(K.diagnostics={runnable:Y,programLog:le,vertexShader:{log:F,prefix:d},fragmentShader:{log:W,prefix:A}})}i.deleteShader(P),i.deleteShader(D),b=new Ps(i,v),C=jp(i,v)}let b;this.getUniforms=function(){return b===void 0&&j(this),b};let C;this.getAttributes=function(){return C===void 0&&j(this),C};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=i.getProgramParameter(v,Hp)),q},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=D,this}let cm=0;class lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hm(e),t.set(e,n)),n}}class hm{constructor(e){this.id=cm++,this.code=e,this.usedTimes=0}}function um(s,e,t,n,i,r,o){const a=new fo,c=new lm,h=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,p=i.vertexTextures;let _=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return b===0?"uv":`uv${b}`}function v(b,C,q,K,le){const F=K.fog,W=le.geometry,Y=b.isMeshStandardMaterial?K.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),ee=Z&&Z.mapping===Hs?Z.image.height:null,te=x[b.type];b.precision!==null&&(_=i.getMaxPrecision(b.precision),_!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const ne=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,he=ne!==void 0?ne.length:0;let fe=0;W.morphAttributes.position!==void 0&&(fe=1),W.morphAttributes.normal!==void 0&&(fe=2),W.morphAttributes.color!==void 0&&(fe=3);let X,se,xe,be;if(te){const wt=an[te];X=wt.vertexShader,se=wt.fragmentShader}else X=b.vertexShader,se=b.fragmentShader,c.update(b),xe=c.getVertexShaderID(b),be=c.getFragmentShaderID(b);const Le=s.getRenderTarget(),He=le.isInstancedMesh===!0,Ge=le.isBatchedMesh===!0,Ne=!!b.map,Ze=!!b.matcap,V=!!Z,st=!!b.aoMap,Ue=!!b.lightMap,ke=!!b.bumpMap,we=!!b.normalMap,ot=!!b.displacementMap,We=!!b.emissiveMap,w=!!b.metalnessMap,E=!!b.roughnessMap,G=b.anisotropy>0,ae=b.clearcoat>0,oe=b.iridescence>0,ce=b.sheen>0,Re=b.transmission>0,ge=G&&!!b.anisotropyMap,Me=ae&&!!b.clearcoatMap,Fe=ae&&!!b.clearcoatNormalMap,Ve=ae&&!!b.clearcoatRoughnessMap,ie=oe&&!!b.iridescenceMap,rt=oe&&!!b.iridescenceThicknessMap,Ye=ce&&!!b.sheenColorMap,Be=ce&&!!b.sheenRoughnessMap,Ae=!!b.specularMap,Se=!!b.specularColorMap,$e=!!b.specularIntensityMap,tt=Re&&!!b.transmissionMap,ut=Re&&!!b.thicknessMap,Xe=!!b.gradientMap,ue=!!b.alphaMap,U=b.alphaTest>0,ve=!!b.alphaHash,_e=!!b.extensions,ze=!!W.attributes.uv1,Oe=!!W.attributes.uv2,at=!!W.attributes.uv3;let ct=Dn;return b.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(ct=s.toneMapping),{isWebGL2:u,shaderID:te,shaderType:b.type,shaderName:b.name,vertexShader:X,fragmentShader:se,defines:b.defines,customVertexShaderID:xe,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:Ge,instancing:He,instancingColor:He&&le.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Le===null?s.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:xn,map:Ne,matcap:Ze,envMap:V,envMapMode:V&&Z.mapping,envMapCubeUVHeight:ee,aoMap:st,lightMap:Ue,bumpMap:ke,normalMap:we,displacementMap:p&&ot,emissiveMap:We,normalMapObjectSpace:we&&b.normalMapType===xh,normalMapTangentSpace:we&&b.normalMapType===Hc,metalnessMap:w,roughnessMap:E,anisotropy:G,anisotropyMap:ge,clearcoat:ae,clearcoatMap:Me,clearcoatNormalMap:Fe,clearcoatRoughnessMap:Ve,iridescence:oe,iridescenceMap:ie,iridescenceThicknessMap:rt,sheen:ce,sheenColorMap:Ye,sheenRoughnessMap:Be,specularMap:Ae,specularColorMap:Se,specularIntensityMap:$e,transmission:Re,transmissionMap:tt,thicknessMap:ut,gradientMap:Xe,opaque:b.transparent===!1&&b.blending===Si,alphaMap:ue,alphaTest:U,alphaHash:ve,combine:b.combine,mapUv:Ne&&y(b.map.channel),aoMapUv:st&&y(b.aoMap.channel),lightMapUv:Ue&&y(b.lightMap.channel),bumpMapUv:ke&&y(b.bumpMap.channel),normalMapUv:we&&y(b.normalMap.channel),displacementMapUv:ot&&y(b.displacementMap.channel),emissiveMapUv:We&&y(b.emissiveMap.channel),metalnessMapUv:w&&y(b.metalnessMap.channel),roughnessMapUv:E&&y(b.roughnessMap.channel),anisotropyMapUv:ge&&y(b.anisotropyMap.channel),clearcoatMapUv:Me&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&y(b.sheenRoughnessMap.channel),specularMapUv:Ae&&y(b.specularMap.channel),specularColorMapUv:Se&&y(b.specularColorMap.channel),specularIntensityMapUv:$e&&y(b.specularIntensityMap.channel),transmissionMapUv:tt&&y(b.transmissionMap.channel),thicknessMapUv:ut&&y(b.thicknessMap.channel),alphaMapUv:ue&&y(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(we||G),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:Oe,vertexUv3s:at,pointsUvs:le.isPoints===!0&&!!W.attributes.uv&&(Ne||ue),fog:!!F,useFog:b.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:le.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:fe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ne&&b.map.isVideoTexture===!0&&lt.getTransfer(b.map.colorSpace)===ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===_n,flipSided:b.side===Ft,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:_e&&b.extensions.derivatives===!0,extensionFragDepth:_e&&b.extensions.fragDepth===!0,extensionDrawBuffers:_e&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_e&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const q in b.defines)C.push(q),C.push(b.defines[q]);return b.isRawShaderMaterial===!1&&(A(C,b),T(C,b),C.push(s.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function A(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function T(b,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),b.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function R(b){const C=x[b.type];let q;if(C){const K=an[C];q=Xh.clone(K.uniforms)}else q=b.uniforms;return q}function N(b,C){let q;for(let K=0,le=h.length;K<le;K++){const F=h[K];if(F.cacheKey===C){q=F,++q.usedTimes;break}}return q===void 0&&(q=new am(s,C,b,r),h.push(q)),q}function P(b){if(--b.usedTimes===0){const C=h.indexOf(b);h[C]=h[h.length-1],h.pop(),b.destroy()}}function D(b){c.remove(b)}function j(){c.dispose()}return{getParameters:v,getProgramCacheKey:d,getUniforms:R,acquireProgram:N,releaseProgram:P,releaseShaderCache:D,programs:h,dispose:j}}function fm(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function dm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Wa(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $a(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,p,_,x,y,v){let d=s[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:_,groupOrder:x,renderOrder:f.renderOrder,z:y,group:v},s[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=_,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=y,d.group=v),e++,d}function a(f,p,_,x,y,v){const d=o(f,p,_,x,y,v);_.transmission>0?n.push(d):_.transparent===!0?i.push(d):t.push(d)}function c(f,p,_,x,y,v){const d=o(f,p,_,x,y,v);_.transmission>0?n.unshift(d):_.transparent===!0?i.unshift(d):t.unshift(d)}function h(f,p){t.length>1&&t.sort(f||dm),n.length>1&&n.sort(p||Wa),i.length>1&&i.sort(p||Wa)}function u(){for(let f=e,p=s.length;f<p;f++){const _=s[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:h}}function pm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new $a,s.set(n,[o])):i>=r.length?(o=new $a,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function mm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Qe};break;case"SpotLight":t={position:new L,direction:new L,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function gm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let _m=0;function vm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xm(s,e){const t=new mm,n=gm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new L);const r=new L,o=new gt,a=new gt;function c(u,f){let p=0,_=0,x=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let y=0,v=0,d=0,A=0,T=0,R=0,N=0,P=0,D=0,j=0,b=0;u.sort(vm);const C=f===!0?Math.PI:1;for(let K=0,le=u.length;K<le;K++){const F=u[K],W=F.color,Y=F.intensity,Z=F.distance,ee=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)p+=W.r*Y*C,_+=W.g*Y*C,x+=W.b*Y*C;else if(F.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(F.sh.coefficients[te],Y);b++}else if(F.isDirectionalLight){const te=t.get(F);if(te.color.copy(F.color).multiplyScalar(F.intensity*C),F.castShadow){const ne=F.shadow,he=n.get(F);he.shadowBias=ne.bias,he.shadowNormalBias=ne.normalBias,he.shadowRadius=ne.radius,he.shadowMapSize=ne.mapSize,i.directionalShadow[y]=he,i.directionalShadowMap[y]=ee,i.directionalShadowMatrix[y]=F.shadow.matrix,R++}i.directional[y]=te,y++}else if(F.isSpotLight){const te=t.get(F);te.position.setFromMatrixPosition(F.matrixWorld),te.color.copy(W).multiplyScalar(Y*C),te.distance=Z,te.coneCos=Math.cos(F.angle),te.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),te.decay=F.decay,i.spot[d]=te;const ne=F.shadow;if(F.map&&(i.spotLightMap[D]=F.map,D++,ne.updateMatrices(F),F.castShadow&&j++),i.spotLightMatrix[d]=ne.matrix,F.castShadow){const he=n.get(F);he.shadowBias=ne.bias,he.shadowNormalBias=ne.normalBias,he.shadowRadius=ne.radius,he.shadowMapSize=ne.mapSize,i.spotShadow[d]=he,i.spotShadowMap[d]=ee,P++}d++}else if(F.isRectAreaLight){const te=t.get(F);te.color.copy(W).multiplyScalar(Y),te.halfWidth.set(F.width*.5,0,0),te.halfHeight.set(0,F.height*.5,0),i.rectArea[A]=te,A++}else if(F.isPointLight){const te=t.get(F);if(te.color.copy(F.color).multiplyScalar(F.intensity*C),te.distance=F.distance,te.decay=F.decay,F.castShadow){const ne=F.shadow,he=n.get(F);he.shadowBias=ne.bias,he.shadowNormalBias=ne.normalBias,he.shadowRadius=ne.radius,he.shadowMapSize=ne.mapSize,he.shadowCameraNear=ne.camera.near,he.shadowCameraFar=ne.camera.far,i.pointShadow[v]=he,i.pointShadowMap[v]=ee,i.pointShadowMatrix[v]=F.shadow.matrix,N++}i.point[v]=te,v++}else if(F.isHemisphereLight){const te=t.get(F);te.skyColor.copy(F.color).multiplyScalar(Y*C),te.groundColor.copy(F.groundColor).multiplyScalar(Y*C),i.hemi[T]=te,T++}}A>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=x;const q=i.hash;(q.directionalLength!==y||q.pointLength!==v||q.spotLength!==d||q.rectAreaLength!==A||q.hemiLength!==T||q.numDirectionalShadows!==R||q.numPointShadows!==N||q.numSpotShadows!==P||q.numSpotMaps!==D||q.numLightProbes!==b)&&(i.directional.length=y,i.spot.length=d,i.rectArea.length=A,i.point.length=v,i.hemi.length=T,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=N,i.spotLightMatrix.length=P+D-j,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=j,i.numLightProbes=b,q.directionalLength=y,q.pointLength=v,q.spotLength=d,q.rectAreaLength=A,q.hemiLength=T,q.numDirectionalShadows=R,q.numPointShadows=N,q.numSpotShadows=P,q.numSpotMaps=D,q.numLightProbes=b,i.version=_m++)}function h(u,f){let p=0,_=0,x=0,y=0,v=0;const d=f.matrixWorldInverse;for(let A=0,T=u.length;A<T;A++){const R=u[A];if(R.isDirectionalLight){const N=i.directional[p];N.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(d),p++}else if(R.isSpotLight){const N=i.spot[x];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(d),N.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(d),x++}else if(R.isRectAreaLight){const N=i.rectArea[y];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(d),a.identity(),o.copy(R.matrixWorld),o.premultiply(d),a.extractRotation(o),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),N.halfWidth.applyMatrix4(a),N.halfHeight.applyMatrix4(a),y++}else if(R.isPointLight){const N=i.point[_];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(d),_++}else if(R.isHemisphereLight){const N=i.hemi[v];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(d),v++}}}return{setup:c,setupView:h,state:i}}function Xa(s,e){const t=new xm(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){t.setup(n,f)}function h(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a}}function ym(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Xa(s,e),t.set(r,[c])):o>=a.length?(c=new Xa(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Mm extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sm extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bm(s,e,t){let n=new mo;const i=new Te,r=new Te,o=new dt,a=new Mm({depthPacking:vh}),c=new Sm,h={},u=t.maxTextureSize,f={[On]:Ft,[Ft]:On,[_n]:_n},p=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Em,fragmentShader:Tm}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const x=new zt;x.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new xt(x,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let d=this.type;this.render=function(P,D,j){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;const b=s.getRenderTarget(),C=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Ln),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const le=d!==gn&&this.type===gn,F=d===gn&&this.type!==gn;for(let W=0,Y=P.length;W<Y;W++){const Z=P[W],ee=Z.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;i.copy(ee.mapSize);const te=ee.getFrameExtents();if(i.multiply(te),r.copy(ee.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/te.x),i.x=r.x*te.x,ee.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/te.y),i.y=r.y*te.y,ee.mapSize.y=r.y)),ee.map===null||le===!0||F===!0){const he=this.type!==gn?{minFilter:Ut,magFilter:Ut}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Qn(i.x,i.y,he),ee.map.texture.name=Z.name+".shadowMap",ee.camera.updateProjectionMatrix()}s.setRenderTarget(ee.map),s.clear();const ne=ee.getViewportCount();for(let he=0;he<ne;he++){const fe=ee.getViewport(he);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),K.viewport(o),ee.updateMatrices(Z,he),n=ee.getFrustum(),R(D,j,ee.camera,Z,this.type)}ee.isPointLightShadow!==!0&&this.type===gn&&A(ee,j),ee.needsUpdate=!1}d=this.type,v.needsUpdate=!1,s.setRenderTarget(b,C,q)};function A(P,D){const j=e.update(y);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Qn(i.x,i.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(D,null,j,p,y,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(D,null,j,_,y,null)}function T(P,D,j,b){let C=null;const q=j.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(q!==void 0)C=q;else if(C=j.isPointLight===!0?c:a,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const K=C.uuid,le=D.uuid;let F=h[K];F===void 0&&(F={},h[K]=F);let W=F[le];W===void 0&&(W=C.clone(),F[le]=W,D.addEventListener("dispose",N)),C=W}if(C.visible=D.visible,C.wireframe=D.wireframe,b===gn?C.side=D.shadowSide!==null?D.shadowSide:D.side:C.side=D.shadowSide!==null?D.shadowSide:f[D.side],C.alphaMap=D.alphaMap,C.alphaTest=D.alphaTest,C.map=D.map,C.clipShadows=D.clipShadows,C.clippingPlanes=D.clippingPlanes,C.clipIntersection=D.clipIntersection,C.displacementMap=D.displacementMap,C.displacementScale=D.displacementScale,C.displacementBias=D.displacementBias,C.wireframeLinewidth=D.wireframeLinewidth,C.linewidth=D.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const K=s.properties.get(C);K.light=j}return C}function R(P,D,j,b,C){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&C===gn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,P.matrixWorld);const le=e.update(P),F=P.material;if(Array.isArray(F)){const W=le.groups;for(let Y=0,Z=W.length;Y<Z;Y++){const ee=W[Y],te=F[ee.materialIndex];if(te&&te.visible){const ne=T(P,te,b,C);P.onBeforeShadow(s,P,D,j,le,ne,ee),s.renderBufferDirect(j,null,le,ne,P,ee),P.onAfterShadow(s,P,D,j,le,ne,ee)}}}else if(F.visible){const W=T(P,F,b,C);P.onBeforeShadow(s,P,D,j,le,W,null),s.renderBufferDirect(j,null,le,W,P,null),P.onAfterShadow(s,P,D,j,le,W,null)}}const K=P.children;for(let le=0,F=K.length;le<F;le++)R(K[le],D,j,b,C)}function N(P){P.target.removeEventListener("dispose",N);for(const j in h){const b=h[j],C=P.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function wm(s,e,t){const n=t.isWebGL2;function i(){let U=!1;const ve=new dt;let _e=null;const ze=new dt(0,0,0,0);return{setMask:function(Oe){_e!==Oe&&!U&&(s.colorMask(Oe,Oe,Oe,Oe),_e=Oe)},setLocked:function(Oe){U=Oe},setClear:function(Oe,at,ct,it,wt){wt===!0&&(Oe*=it,at*=it,ct*=it),ve.set(Oe,at,ct,it),ze.equals(ve)===!1&&(s.clearColor(Oe,at,ct,it),ze.copy(ve))},reset:function(){U=!1,_e=null,ze.set(-1,0,0,0)}}}function r(){let U=!1,ve=null,_e=null,ze=null;return{setTest:function(Oe){Oe?Ge(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(Oe){ve!==Oe&&!U&&(s.depthMask(Oe),ve=Oe)},setFunc:function(Oe){if(_e!==Oe){switch(Oe){case ql:s.depthFunc(s.NEVER);break;case Yl:s.depthFunc(s.ALWAYS);break;case Kl:s.depthFunc(s.LESS);break;case Is:s.depthFunc(s.LEQUAL);break;case jl:s.depthFunc(s.EQUAL);break;case Jl:s.depthFunc(s.GEQUAL);break;case Zl:s.depthFunc(s.GREATER);break;case Ql:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=Oe}},setLocked:function(Oe){U=Oe},setClear:function(Oe){ze!==Oe&&(s.clearDepth(Oe),ze=Oe)},reset:function(){U=!1,ve=null,_e=null,ze=null}}}function o(){let U=!1,ve=null,_e=null,ze=null,Oe=null,at=null,ct=null,it=null,wt=null;return{setTest:function(et){U||(et?Ge(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(et){ve!==et&&!U&&(s.stencilMask(et),ve=et)},setFunc:function(et,yt,Ot){(_e!==et||ze!==yt||Oe!==Ot)&&(s.stencilFunc(et,yt,Ot),_e=et,ze=yt,Oe=Ot)},setOp:function(et,yt,Ot){(at!==et||ct!==yt||it!==Ot)&&(s.stencilOp(et,yt,Ot),at=et,ct=yt,it=Ot)},setLocked:function(et){U=et},setClear:function(et){wt!==et&&(s.clearStencil(et),wt=et)},reset:function(){U=!1,ve=null,_e=null,ze=null,Oe=null,at=null,ct=null,it=null,wt=null}}}const a=new i,c=new r,h=new o,u=new WeakMap,f=new WeakMap;let p={},_={},x=new WeakMap,y=[],v=null,d=!1,A=null,T=null,R=null,N=null,P=null,D=null,j=null,b=new Qe(0,0,0),C=0,q=!1,K=null,le=null,F=null,W=null,Y=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,te=0;const ne=s.getParameter(s.VERSION);ne.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=te>=1):ne.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=te>=2);let he=null,fe={};const X=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),xe=new dt().fromArray(X),be=new dt().fromArray(se);function Le(U,ve,_e,ze){const Oe=new Uint8Array(4),at=s.createTexture();s.bindTexture(U,at),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<_e;ct++)n&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(ve,0,s.RGBA,1,1,ze,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(ve+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return at}const He={};He[s.TEXTURE_2D]=Le(s.TEXTURE_2D,s.TEXTURE_2D,1),He[s.TEXTURE_CUBE_MAP]=Le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(He[s.TEXTURE_2D_ARRAY]=Le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),He[s.TEXTURE_3D]=Le(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Ge(s.DEPTH_TEST),c.setFunc(Is),We(!1),w(Ao),Ge(s.CULL_FACE),we(Ln);function Ge(U){p[U]!==!0&&(s.enable(U),p[U]=!0)}function Ne(U){p[U]!==!1&&(s.disable(U),p[U]=!1)}function Ze(U,ve){return _[U]!==ve?(s.bindFramebuffer(U,ve),_[U]=ve,n&&(U===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=ve),U===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=ve)),!0):!1}function V(U,ve){let _e=y,ze=!1;if(U)if(_e=x.get(ve),_e===void 0&&(_e=[],x.set(ve,_e)),U.isWebGLMultipleRenderTargets){const Oe=U.texture;if(_e.length!==Oe.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let at=0,ct=Oe.length;at<ct;at++)_e[at]=s.COLOR_ATTACHMENT0+at;_e.length=Oe.length,ze=!0}}else _e[0]!==s.COLOR_ATTACHMENT0&&(_e[0]=s.COLOR_ATTACHMENT0,ze=!0);else _e[0]!==s.BACK&&(_e[0]=s.BACK,ze=!0);ze&&(t.isWebGL2?s.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function st(U){return v!==U?(s.useProgram(U),v=U,!0):!1}const Ue={[Xn]:s.FUNC_ADD,[Dl]:s.FUNC_SUBTRACT,[Il]:s.FUNC_REVERSE_SUBTRACT};if(n)Ue[Lo]=s.MIN,Ue[Do]=s.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Ue[Lo]=U.MIN_EXT,Ue[Do]=U.MAX_EXT)}const ke={[Ul]:s.ZERO,[Ol]:s.ONE,[Nl]:s.SRC_COLOR,[Yr]:s.SRC_ALPHA,[Gl]:s.SRC_ALPHA_SATURATE,[kl]:s.DST_COLOR,[zl]:s.DST_ALPHA,[Fl]:s.ONE_MINUS_SRC_COLOR,[Kr]:s.ONE_MINUS_SRC_ALPHA,[Hl]:s.ONE_MINUS_DST_COLOR,[Bl]:s.ONE_MINUS_DST_ALPHA,[Vl]:s.CONSTANT_COLOR,[Wl]:s.ONE_MINUS_CONSTANT_COLOR,[$l]:s.CONSTANT_ALPHA,[Xl]:s.ONE_MINUS_CONSTANT_ALPHA};function we(U,ve,_e,ze,Oe,at,ct,it,wt,et){if(U===Ln){d===!0&&(Ne(s.BLEND),d=!1);return}if(d===!1&&(Ge(s.BLEND),d=!0),U!==Ll){if(U!==A||et!==q){if((T!==Xn||P!==Xn)&&(s.blendEquation(s.FUNC_ADD),T=Xn,P=Xn),et)switch(U){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ro:s.blendFunc(s.ONE,s.ONE);break;case Co:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Po:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ro:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Co:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Po:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}R=null,N=null,D=null,j=null,b.set(0,0,0),C=0,A=U,q=et}return}Oe=Oe||ve,at=at||_e,ct=ct||ze,(ve!==T||Oe!==P)&&(s.blendEquationSeparate(Ue[ve],Ue[Oe]),T=ve,P=Oe),(_e!==R||ze!==N||at!==D||ct!==j)&&(s.blendFuncSeparate(ke[_e],ke[ze],ke[at],ke[ct]),R=_e,N=ze,D=at,j=ct),(it.equals(b)===!1||wt!==C)&&(s.blendColor(it.r,it.g,it.b,wt),b.copy(it),C=wt),A=U,q=!1}function ot(U,ve){U.side===_n?Ne(s.CULL_FACE):Ge(s.CULL_FACE);let _e=U.side===Ft;ve&&(_e=!_e),We(_e),U.blending===Si&&U.transparent===!1?we(Ln):we(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),a.setMask(U.colorWrite);const ze=U.stencilWrite;h.setTest(ze),ze&&(h.setMask(U.stencilWriteMask),h.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),h.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),G(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ge(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(U){K!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),K=U)}function w(U){U!==Cl?(Ge(s.CULL_FACE),U!==le&&(U===Ao?s.cullFace(s.BACK):U===Pl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),le=U}function E(U){U!==F&&(ee&&s.lineWidth(U),F=U)}function G(U,ve,_e){U?(Ge(s.POLYGON_OFFSET_FILL),(W!==ve||Y!==_e)&&(s.polygonOffset(ve,_e),W=ve,Y=_e)):Ne(s.POLYGON_OFFSET_FILL)}function ae(U){U?Ge(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function oe(U){U===void 0&&(U=s.TEXTURE0+Z-1),he!==U&&(s.activeTexture(U),he=U)}function ce(U,ve,_e){_e===void 0&&(he===null?_e=s.TEXTURE0+Z-1:_e=he);let ze=fe[_e];ze===void 0&&(ze={type:void 0,texture:void 0},fe[_e]=ze),(ze.type!==U||ze.texture!==ve)&&(he!==_e&&(s.activeTexture(_e),he=_e),s.bindTexture(U,ve||He[U]),ze.type=U,ze.texture=ve)}function Re(){const U=fe[he];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(U){xe.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),xe.copy(U))}function tt(U){be.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),be.copy(U))}function ut(U,ve){let _e=f.get(ve);_e===void 0&&(_e=new WeakMap,f.set(ve,_e));let ze=_e.get(U);ze===void 0&&(ze=s.getUniformBlockIndex(ve,U.name),_e.set(U,ze))}function Xe(U,ve){const ze=f.get(ve).get(U);u.get(ve)!==ze&&(s.uniformBlockBinding(ve,ze,U.__bindingPointIndex),u.set(ve,ze))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},he=null,fe={},_={},x=new WeakMap,y=[],v=null,d=!1,A=null,T=null,R=null,N=null,P=null,D=null,j=null,b=new Qe(0,0,0),C=0,q=!1,K=null,le=null,F=null,W=null,Y=null,xe.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:Ge,disable:Ne,bindFramebuffer:Ze,drawBuffers:V,useProgram:st,setBlending:we,setMaterial:ot,setFlipSided:We,setCullFace:w,setLineWidth:E,setPolygonOffset:G,setScissorTest:ae,activeTexture:oe,bindTexture:ce,unbindTexture:Re,compressedTexImage2D:ge,compressedTexImage3D:Me,texImage2D:Ae,texImage3D:Se,updateUBOMapping:ut,uniformBlockBinding:Xe,texStorage2D:Ye,texStorage3D:Be,texSubImage2D:Fe,texSubImage3D:Ve,compressedTexSubImage2D:ie,compressedTexSubImage3D:rt,scissor:$e,viewport:tt,reset:ue}}function Am(s,e,t,n,i,r,o){const a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,E){return _?new OffscreenCanvas(w,E):zs("canvas")}function y(w,E,G,ae){let oe=1;if((w.width>ae||w.height>ae)&&(oe=ae/Math.max(w.width,w.height)),oe<1||E===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ce=E?no:Math.floor,Re=ce(oe*w.width),ge=ce(oe*w.height);f===void 0&&(f=x(Re,ge));const Me=G?x(Re,ge):f;return Me.width=Re,Me.height=ge,Me.getContext("2d").drawImage(w,0,0,Re,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Re+"x"+ge+")."),Me}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function v(w){return ca(w.width)&&ca(w.height)}function d(w){return a?!1:w.wrapS!==en||w.wrapT!==en||w.minFilter!==Ut&&w.minFilter!==Xt}function A(w,E){return w.generateMipmaps&&E&&w.minFilter!==Ut&&w.minFilter!==Xt}function T(w){s.generateMipmap(w)}function R(w,E,G,ae,oe=!1){if(a===!1)return E;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ce=E;if(E===s.RED&&(G===s.FLOAT&&(ce=s.R32F),G===s.HALF_FLOAT&&(ce=s.R16F),G===s.UNSIGNED_BYTE&&(ce=s.R8)),E===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(ce=s.R8UI),G===s.UNSIGNED_SHORT&&(ce=s.R16UI),G===s.UNSIGNED_INT&&(ce=s.R32UI),G===s.BYTE&&(ce=s.R8I),G===s.SHORT&&(ce=s.R16I),G===s.INT&&(ce=s.R32I)),E===s.RG&&(G===s.FLOAT&&(ce=s.RG32F),G===s.HALF_FLOAT&&(ce=s.RG16F),G===s.UNSIGNED_BYTE&&(ce=s.RG8)),E===s.RGBA){const Re=oe?Us:lt.getTransfer(ae);G===s.FLOAT&&(ce=s.RGBA32F),G===s.HALF_FLOAT&&(ce=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ce=Re===ft?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function N(w,E,G){return A(w,G)===!0||w.isFramebufferTexture&&w.minFilter!==Ut&&w.minFilter!==Xt?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function P(w){return w===Ut||w===Io||w===sr?s.NEAREST:s.LINEAR}function D(w){const E=w.target;E.removeEventListener("dispose",D),b(E),E.isVideoTexture&&u.delete(E)}function j(w){const E=w.target;E.removeEventListener("dispose",j),q(E)}function b(w){const E=n.get(w);if(E.__webglInit===void 0)return;const G=w.source,ae=p.get(G);if(ae){const oe=ae[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&C(w),Object.keys(ae).length===0&&p.delete(G)}n.remove(w)}function C(w){const E=n.get(w);s.deleteTexture(E.__webglTexture);const G=w.source,ae=p.get(G);delete ae[E.__cacheKey],o.memory.textures--}function q(w){const E=w.texture,G=n.get(w),ae=n.get(E);if(ae.__webglTexture!==void 0&&(s.deleteTexture(ae.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(G.__webglFramebuffer[oe]))for(let ce=0;ce<G.__webglFramebuffer[oe].length;ce++)s.deleteFramebuffer(G.__webglFramebuffer[oe][ce]);else s.deleteFramebuffer(G.__webglFramebuffer[oe]);G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[oe])}else{if(Array.isArray(G.__webglFramebuffer))for(let oe=0;oe<G.__webglFramebuffer.length;oe++)s.deleteFramebuffer(G.__webglFramebuffer[oe]);else s.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let oe=0;oe<G.__webglColorRenderbuffer.length;oe++)G.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[oe]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let oe=0,ce=E.length;oe<ce;oe++){const Re=n.get(E[oe]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),o.memory.textures--),n.remove(E[oe])}n.remove(E),n.remove(w)}let K=0;function le(){K=0}function F(){const w=K;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),K+=1,w}function W(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function Y(w,E){const G=n.get(w);if(w.isVideoTexture&&ot(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const ae=w.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(G,w,E);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function Z(w,E){const G=n.get(w);if(w.version>0&&G.__version!==w.version){xe(G,w,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function ee(w,E){const G=n.get(w);if(w.version>0&&G.__version!==w.version){xe(G,w,E);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function te(w,E){const G=n.get(w);if(w.version>0&&G.__version!==w.version){be(G,w,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}const ne={[Zr]:s.REPEAT,[en]:s.CLAMP_TO_EDGE,[Qr]:s.MIRRORED_REPEAT},he={[Ut]:s.NEAREST,[Io]:s.NEAREST_MIPMAP_NEAREST,[sr]:s.NEAREST_MIPMAP_LINEAR,[Xt]:s.LINEAR,[ch]:s.LINEAR_MIPMAP_NEAREST,[qi]:s.LINEAR_MIPMAP_LINEAR},fe={[yh]:s.NEVER,[wh]:s.ALWAYS,[Mh]:s.LESS,[Gc]:s.LEQUAL,[Sh]:s.EQUAL,[bh]:s.GEQUAL,[Eh]:s.GREATER,[Th]:s.NOTEQUAL};function X(w,E,G){if(G?(s.texParameteri(w,s.TEXTURE_WRAP_S,ne[E.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,ne[E.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,ne[E.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,he[E.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,he[E.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==en||E.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,P(E.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,P(E.minFilter)),E.minFilter!==Ut&&E.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ut||E.minFilter!==sr&&E.minFilter!==qi||E.type===Pn&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Yi&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(w,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function se(w,E){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",D));const ae=E.source;let oe=p.get(ae);oe===void 0&&(oe={},p.set(ae,oe));const ce=W(E);if(ce!==w.__cacheKey){oe[ce]===void 0&&(oe[ce]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),oe[ce].usedTimes++;const Re=oe[w.__cacheKey];Re!==void 0&&(oe[w.__cacheKey].usedTimes--,Re.usedTimes===0&&C(E)),w.__cacheKey=ce,w.__webglTexture=oe[ce].texture}return G}function xe(w,E,G){let ae=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=s.TEXTURE_3D);const oe=se(w,E),ce=E.source;t.bindTexture(ae,w.__webglTexture,s.TEXTURE0+G);const Re=n.get(ce);if(ce.version!==Re.__version||oe===!0){t.activeTexture(s.TEXTURE0+G);const ge=lt.getPrimaries(lt.workingColorSpace),Me=E.colorSpace===qt?null:lt.getPrimaries(E.colorSpace),Fe=E.colorSpace===qt||ge===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Ve=d(E)&&v(E.image)===!1;let ie=y(E.image,Ve,!1,i.maxTextureSize);ie=We(E,ie);const rt=v(ie)||a,Ye=r.convert(E.format,E.colorSpace);let Be=r.convert(E.type),Ae=R(E.internalFormat,Ye,Be,E.colorSpace,E.isVideoTexture);X(ae,E,rt);let Se;const $e=E.mipmaps,tt=a&&E.isVideoTexture!==!0&&Ae!==Bc,ut=Re.__version===void 0||oe===!0,Xe=N(E,ie,rt);if(E.isDepthTexture)Ae=s.DEPTH_COMPONENT,a?E.type===Pn?Ae=s.DEPTH_COMPONENT32F:E.type===Cn?Ae=s.DEPTH_COMPONENT24:E.type===jn?Ae=s.DEPTH24_STENCIL8:Ae=s.DEPTH_COMPONENT16:E.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Jn&&Ae===s.DEPTH_COMPONENT&&E.type!==lo&&E.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Cn,Be=r.convert(E.type)),E.format===wi&&Ae===s.DEPTH_COMPONENT&&(Ae=s.DEPTH_STENCIL,E.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=jn,Be=r.convert(E.type))),ut&&(tt?t.texStorage2D(s.TEXTURE_2D,1,Ae,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Ae,ie.width,ie.height,0,Ye,Be,null));else if(E.isDataTexture)if($e.length>0&&rt){tt&&ut&&t.texStorage2D(s.TEXTURE_2D,Xe,Ae,$e[0].width,$e[0].height);for(let ue=0,U=$e.length;ue<U;ue++)Se=$e[ue],tt?t.texSubImage2D(s.TEXTURE_2D,ue,0,0,Se.width,Se.height,Ye,Be,Se.data):t.texImage2D(s.TEXTURE_2D,ue,Ae,Se.width,Se.height,0,Ye,Be,Se.data);E.generateMipmaps=!1}else tt?(ut&&t.texStorage2D(s.TEXTURE_2D,Xe,Ae,ie.width,ie.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie.width,ie.height,Ye,Be,ie.data)):t.texImage2D(s.TEXTURE_2D,0,Ae,ie.width,ie.height,0,Ye,Be,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){tt&&ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Xe,Ae,$e[0].width,$e[0].height,ie.depth);for(let ue=0,U=$e.length;ue<U;ue++)Se=$e[ue],E.format!==tn?Ye!==null?tt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,Se.width,Se.height,ie.depth,Ye,Se.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,Ae,Se.width,Se.height,ie.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,Se.width,Se.height,ie.depth,Ye,Be,Se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ue,Ae,Se.width,Se.height,ie.depth,0,Ye,Be,Se.data)}else{tt&&ut&&t.texStorage2D(s.TEXTURE_2D,Xe,Ae,$e[0].width,$e[0].height);for(let ue=0,U=$e.length;ue<U;ue++)Se=$e[ue],E.format!==tn?Ye!==null?tt?t.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,Se.width,Se.height,Ye,Se.data):t.compressedTexImage2D(s.TEXTURE_2D,ue,Ae,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(s.TEXTURE_2D,ue,0,0,Se.width,Se.height,Ye,Be,Se.data):t.texImage2D(s.TEXTURE_2D,ue,Ae,Se.width,Se.height,0,Ye,Be,Se.data)}else if(E.isDataArrayTexture)tt?(ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Xe,Ae,ie.width,ie.height,ie.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ye,Be,ie.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,ie.width,ie.height,ie.depth,0,Ye,Be,ie.data);else if(E.isData3DTexture)tt?(ut&&t.texStorage3D(s.TEXTURE_3D,Xe,Ae,ie.width,ie.height,ie.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ye,Be,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,ie.width,ie.height,ie.depth,0,Ye,Be,ie.data);else if(E.isFramebufferTexture){if(ut)if(tt)t.texStorage2D(s.TEXTURE_2D,Xe,Ae,ie.width,ie.height);else{let ue=ie.width,U=ie.height;for(let ve=0;ve<Xe;ve++)t.texImage2D(s.TEXTURE_2D,ve,Ae,ue,U,0,Ye,Be,null),ue>>=1,U>>=1}}else if($e.length>0&&rt){tt&&ut&&t.texStorage2D(s.TEXTURE_2D,Xe,Ae,$e[0].width,$e[0].height);for(let ue=0,U=$e.length;ue<U;ue++)Se=$e[ue],tt?t.texSubImage2D(s.TEXTURE_2D,ue,0,0,Ye,Be,Se):t.texImage2D(s.TEXTURE_2D,ue,Ae,Ye,Be,Se);E.generateMipmaps=!1}else tt?(ut&&t.texStorage2D(s.TEXTURE_2D,Xe,Ae,ie.width,ie.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ye,Be,ie)):t.texImage2D(s.TEXTURE_2D,0,Ae,Ye,Be,ie);A(E,rt)&&T(ae),Re.__version=ce.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function be(w,E,G){if(E.image.length!==6)return;const ae=se(w,E),oe=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+G);const ce=n.get(oe);if(oe.version!==ce.__version||ae===!0){t.activeTexture(s.TEXTURE0+G);const Re=lt.getPrimaries(lt.workingColorSpace),ge=E.colorSpace===qt?null:lt.getPrimaries(E.colorSpace),Me=E.colorSpace===qt||Re===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Fe=E.isCompressedTexture||E.image[0].isCompressedTexture,Ve=E.image[0]&&E.image[0].isDataTexture,ie=[];for(let ue=0;ue<6;ue++)!Fe&&!Ve?ie[ue]=y(E.image[ue],!1,!0,i.maxCubemapSize):ie[ue]=Ve?E.image[ue].image:E.image[ue],ie[ue]=We(E,ie[ue]);const rt=ie[0],Ye=v(rt)||a,Be=r.convert(E.format,E.colorSpace),Ae=r.convert(E.type),Se=R(E.internalFormat,Be,Ae,E.colorSpace),$e=a&&E.isVideoTexture!==!0,tt=ce.__version===void 0||ae===!0;let ut=N(E,rt,Ye);X(s.TEXTURE_CUBE_MAP,E,Ye);let Xe;if(Fe){$e&&tt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Se,rt.width,rt.height);for(let ue=0;ue<6;ue++){Xe=ie[ue].mipmaps;for(let U=0;U<Xe.length;U++){const ve=Xe[U];E.format!==tn?Be!==null?$e?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U,0,0,ve.width,ve.height,Be,ve.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U,Se,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U,0,0,ve.width,ve.height,Be,Ae,ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U,Se,ve.width,ve.height,0,Be,Ae,ve.data)}}}else{Xe=E.mipmaps,$e&&tt&&(Xe.length>0&&ut++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Se,ie[0].width,ie[0].height));for(let ue=0;ue<6;ue++)if(Ve){$e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ie[ue].width,ie[ue].height,Be,Ae,ie[ue].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Se,ie[ue].width,ie[ue].height,0,Be,Ae,ie[ue].data);for(let U=0;U<Xe.length;U++){const _e=Xe[U].image[ue].image;$e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U+1,0,0,_e.width,_e.height,Be,Ae,_e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U+1,Se,_e.width,_e.height,0,Be,Ae,_e.data)}}else{$e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Be,Ae,ie[ue]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Se,Be,Ae,ie[ue]);for(let U=0;U<Xe.length;U++){const ve=Xe[U];$e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U+1,0,0,Be,Ae,ve.image[ue]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U+1,Se,Be,Ae,ve.image[ue])}}}A(E,Ye)&&T(s.TEXTURE_CUBE_MAP),ce.__version=oe.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Le(w,E,G,ae,oe,ce){const Re=r.convert(G.format,G.colorSpace),ge=r.convert(G.type),Me=R(G.internalFormat,Re,ge,G.colorSpace);if(!n.get(E).__hasExternalTextures){const Ve=Math.max(1,E.width>>ce),ie=Math.max(1,E.height>>ce);oe===s.TEXTURE_3D||oe===s.TEXTURE_2D_ARRAY?t.texImage3D(oe,ce,Me,Ve,ie,E.depth,0,Re,ge,null):t.texImage2D(oe,ce,Me,Ve,ie,0,Re,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),we(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,oe,n.get(G).__webglTexture,0,ke(E)):(oe===s.TEXTURE_2D||oe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,oe,n.get(G).__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(w,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,w),E.depthBuffer&&!E.stencilBuffer){let ae=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(G||we(E)){const oe=E.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Pn?ae=s.DEPTH_COMPONENT32F:oe.type===Cn&&(ae=s.DEPTH_COMPONENT24));const ce=ke(E);we(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,ae,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,ae,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,ae,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(E.depthBuffer&&E.stencilBuffer){const ae=ke(E);G&&we(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,s.DEPTH24_STENCIL8,E.width,E.height):we(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const ae=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let oe=0;oe<ae.length;oe++){const ce=ae[oe],Re=r.convert(ce.format,ce.colorSpace),ge=r.convert(ce.type),Me=R(ce.internalFormat,Re,ge,ce.colorSpace),Fe=ke(E);G&&we(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Me,E.width,E.height):we(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Fe,Me,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Me,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ge(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const ae=n.get(E.depthTexture).__webglTexture,oe=ke(E);if(E.depthTexture.format===Jn)we(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ae,0);else if(E.depthTexture.format===wi)we(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ne(w){const E=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ge(E.__webglFramebuffer,w)}else if(G){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]=s.createRenderbuffer(),He(E.__webglDepthbuffer[ae],w,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),He(E.__webglDepthbuffer,w,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(w,E,G){const ae=n.get(w);E!==void 0&&Le(ae.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Ne(w)}function V(w){const E=w.texture,G=n.get(w),ae=n.get(E);w.addEventListener("dispose",j),w.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=E.version,o.memory.textures++);const oe=w.isWebGLCubeRenderTarget===!0,ce=w.isWebGLMultipleRenderTargets===!0,Re=v(w)||a;if(oe){G.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(a&&E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ge]=[];for(let Me=0;Me<E.mipmaps.length;Me++)G.__webglFramebuffer[ge][Me]=s.createFramebuffer()}else G.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)G.__webglFramebuffer[ge]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(ce)if(i.drawBuffers){const ge=w.texture;for(let Me=0,Fe=ge.length;Me<Fe;Me++){const Ve=n.get(ge[Me]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&we(w)===!1){const ge=ce?E:[E];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Me=0;Me<ge.length;Me++){const Fe=ge[Me];G.__webglColorRenderbuffer[Me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[Me]);const Ve=r.convert(Fe.format,Fe.colorSpace),ie=r.convert(Fe.type),rt=R(Fe.internalFormat,Ve,ie,Fe.colorSpace,w.isXRRenderTarget===!0),Ye=ke(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,rt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,G.__webglColorRenderbuffer[Me])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),He(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),X(s.TEXTURE_CUBE_MAP,E,Re);for(let ge=0;ge<6;ge++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)Le(G.__webglFramebuffer[ge][Me],w,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Me);else Le(G.__webglFramebuffer[ge],w,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);A(E,Re)&&T(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const ge=w.texture;for(let Me=0,Fe=ge.length;Me<Fe;Me++){const Ve=ge[Me],ie=n.get(Ve);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture),X(s.TEXTURE_2D,Ve,Re),Le(G.__webglFramebuffer,w,Ve,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,0),A(Ve,Re)&&T(s.TEXTURE_2D)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ge=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,ae.__webglTexture),X(ge,E,Re),a&&E.mipmaps&&E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)Le(G.__webglFramebuffer[Me],w,E,s.COLOR_ATTACHMENT0,ge,Me);else Le(G.__webglFramebuffer,w,E,s.COLOR_ATTACHMENT0,ge,0);A(E,Re)&&T(ge),t.unbindTexture()}w.depthBuffer&&Ne(w)}function st(w){const E=v(w)||a,G=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ae=0,oe=G.length;ae<oe;ae++){const ce=G[ae];if(A(ce,E)){const Re=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ge=n.get(ce).__webglTexture;t.bindTexture(Re,ge),T(Re),t.unbindTexture()}}}function Ue(w){if(a&&w.samples>0&&we(w)===!1){const E=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],G=w.width,ae=w.height;let oe=s.COLOR_BUFFER_BIT;const ce=[],Re=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=n.get(w),Me=w.isWebGLMultipleRenderTargets===!0;if(Me)for(let Fe=0;Fe<E.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Fe=0;Fe<E.length;Fe++){ce.push(s.COLOR_ATTACHMENT0+Fe),w.depthBuffer&&ce.push(Re);const Ve=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Ve===!1&&(w.depthBuffer&&(oe|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(oe|=s.STENCIL_BUFFER_BIT)),Me&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[Fe]),Ve===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Re]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Re])),Me){const ie=n.get(E[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,G,ae,0,0,G,ae,oe,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Me)for(let Fe=0;Fe<E.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,ge.__webglColorRenderbuffer[Fe]);const Ve=n.get(E[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,Ve,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function ke(w){return Math.min(i.maxSamples,w.samples)}function we(w){const E=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ot(w){const E=o.render.frame;u.get(w)!==E&&(u.set(w,E),w.update())}function We(w,E){const G=w.colorSpace,ae=w.format,oe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===eo||G!==xn&&G!==qt&&(lt.getTransfer(G)===ft?a===!1?e.has("EXT_sRGB")===!0&&ae===tn?(w.format=eo,w.minFilter=Xt,w.generateMipmaps=!1):E=Wc.sRGBToLinear(E):(ae!==tn||oe!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}this.allocateTextureUnit=F,this.resetTextureUnits=le,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=ee,this.setTextureCube=te,this.rebindTextures=Ze,this.setupRenderTarget=V,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=we}function Rm(s,e,t){const n=t.isWebGL2;function i(r,o=qt){let a;const c=lt.getTransfer(o);if(r===In)return s.UNSIGNED_BYTE;if(r===Uc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Oc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===lh)return s.BYTE;if(r===hh)return s.SHORT;if(r===lo)return s.UNSIGNED_SHORT;if(r===Ic)return s.INT;if(r===Cn)return s.UNSIGNED_INT;if(r===Pn)return s.FLOAT;if(r===Yi)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===uh)return s.ALPHA;if(r===tn)return s.RGBA;if(r===fh)return s.LUMINANCE;if(r===dh)return s.LUMINANCE_ALPHA;if(r===Jn)return s.DEPTH_COMPONENT;if(r===wi)return s.DEPTH_STENCIL;if(r===eo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ph)return s.RED;if(r===Nc)return s.RED_INTEGER;if(r===mh)return s.RG;if(r===Fc)return s.RG_INTEGER;if(r===zc)return s.RGBA_INTEGER;if(r===rr||r===or||r===ar||r===cr)if(c===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===rr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ar)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===rr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===or)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ar)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uo||r===Oo||r===No||r===Fo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Uo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===No)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===zo||r===Bo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===zo)return c===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Bo)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ko||r===Ho||r===Go||r===Vo||r===Wo||r===$o||r===Xo||r===qo||r===Yo||r===Ko||r===jo||r===Jo||r===Zo||r===Qo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ko)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ho)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Go)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vo)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wo)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$o)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xo)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qo)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yo)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ko)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jo)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jo)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zo)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qo)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===lr||r===ea||r===ta)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===lr)return c===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ea)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ta)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gh||r===na||r===ia||r===sa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===lr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===na)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ia)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===jn?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Cm extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kn extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pm={type:"move"};class Ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const y of e.hand.values()){const v=t.getJointPose(y,n),d=this._getHandJoint(h,y);v!==null&&(d.matrix.fromArray(v.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=v.radius),d.visible=v!==null}const u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=u.position.distanceTo(f.position),_=.02,x=.005;h.inputState.pinching&&p>_+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=_-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pm)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Lm extends Li{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,h=null,u=null,f=null,p=null,_=null,x=null;const y=t.getContextAttributes();let v=null,d=null;const A=[],T=[],R=new Te;let N=null;const P=new Gt;P.layers.enable(1),P.viewport=new dt;const D=new Gt;D.layers.enable(2),D.viewport=new dt;const j=[P,D],b=new Cm;b.layers.enable(1),b.layers.enable(2);let C=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let se=A[X];return se===void 0&&(se=new Ur,A[X]=se),se.getTargetRaySpace()},this.getControllerGrip=function(X){let se=A[X];return se===void 0&&(se=new Ur,A[X]=se),se.getGripSpace()},this.getHand=function(X){let se=A[X];return se===void 0&&(se=new Ur,A[X]=se),se.getHandSpace()};function K(X){const se=T.indexOf(X.inputSource);if(se===-1)return;const xe=A[se];xe!==void 0&&(xe.update(X.inputSource,X.frame,h||o),xe.dispatchEvent({type:X.type,data:X.inputSource}))}function le(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",le),i.removeEventListener("inputsourceschange",F);for(let X=0;X<A.length;X++){const se=T[X];se!==null&&(T[X]=null,A[X].disconnect(se))}C=null,q=null,e.setRenderTarget(v),_=null,p=null,f=null,i=null,d=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",le),i.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),d=new Qn(_.framebufferWidth,_.framebufferHeight,{format:tn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let se=null,xe=null,be=null;y.depth&&(be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=y.stencil?wi:Jn,xe=y.stencil?jn:Cn);const Le={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};f=new XRWebGLBinding(i,t),p=f.createProjectionLayer(Le),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new Qn(p.textureWidth,p.textureHeight,{format:tn,type:In,depthTexture:new tl(p.textureWidth,p.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const He=e.properties.get(d);He.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await i.requestReferenceSpace(a),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(X){for(let se=0;se<X.removed.length;se++){const xe=X.removed[se],be=T.indexOf(xe);be>=0&&(T[be]=null,A[be].disconnect(xe))}for(let se=0;se<X.added.length;se++){const xe=X.added[se];let be=T.indexOf(xe);if(be===-1){for(let He=0;He<A.length;He++)if(He>=T.length){T.push(xe),be=He;break}else if(T[He]===null){T[He]=xe,be=He;break}if(be===-1)break}const Le=A[be];Le&&Le.connect(xe)}}const W=new L,Y=new L;function Z(X,se,xe){W.setFromMatrixPosition(se.matrixWorld),Y.setFromMatrixPosition(xe.matrixWorld);const be=W.distanceTo(Y),Le=se.projectionMatrix.elements,He=xe.projectionMatrix.elements,Ge=Le[14]/(Le[10]-1),Ne=Le[14]/(Le[10]+1),Ze=(Le[9]+1)/Le[5],V=(Le[9]-1)/Le[5],st=(Le[8]-1)/Le[0],Ue=(He[8]+1)/He[0],ke=Ge*st,we=Ge*Ue,ot=be/(-st+Ue),We=ot*-st;se.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(We),X.translateZ(ot),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const w=Ge+ot,E=Ne+ot,G=ke-We,ae=we+(be-We),oe=Ze*Ne/E*w,ce=V*Ne/E*w;X.projectionMatrix.makePerspective(G,ae,oe,ce,w,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function ee(X,se){se===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(se.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;b.near=D.near=P.near=X.near,b.far=D.far=P.far=X.far,(C!==b.near||q!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,q=b.far);const se=X.parent,xe=b.cameras;ee(b,se);for(let be=0;be<xe.length;be++)ee(xe[be],se);xe.length===2?Z(b,P,D):b.projectionMatrix.copy(P.projectionMatrix),te(X,b,se)};function te(X,se,xe){xe===null?X.matrix.copy(se.matrixWorld):(X.matrix.copy(xe.matrixWorld),X.matrix.invert(),X.matrix.multiply(se.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(se.projectionMatrix),X.projectionMatrixInverse.copy(se.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=to*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&_===null))return c},this.setFoveation=function(X){c=X,p!==null&&(p.fixedFoveation=X),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=X)};let ne=null;function he(X,se){if(u=se.getViewerPose(h||o),x=se,u!==null){const xe=u.views;_!==null&&(e.setRenderTargetFramebuffer(d,_.framebuffer),e.setRenderTarget(d));let be=!1;xe.length!==b.cameras.length&&(b.cameras.length=0,be=!0);for(let Le=0;Le<xe.length;Le++){const He=xe[Le];let Ge=null;if(_!==null)Ge=_.getViewport(He);else{const Ze=f.getViewSubImage(p,He);Ge=Ze.viewport,Le===0&&(e.setRenderTargetTextures(d,Ze.colorTexture,p.ignoreDepthValues?void 0:Ze.depthStencilTexture),e.setRenderTarget(d))}let Ne=j[Le];Ne===void 0&&(Ne=new Gt,Ne.layers.enable(Le),Ne.viewport=new dt,j[Le]=Ne),Ne.matrix.fromArray(He.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(He.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Le===0&&(b.matrix.copy(Ne.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),be===!0&&b.cameras.push(Ne)}}for(let xe=0;xe<A.length;xe++){const be=T[xe],Le=A[xe];be!==null&&Le!==void 0&&Le.update(be,se,h||o)}ne&&ne(X,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),x=null}const fe=new Qc;fe.setAnimationLoop(he),this.setAnimationLoop=function(X){ne=X},this.dispose=function(){}}}function Dm(s,e){function t(v,d){v.matrixAutoUpdate===!0&&v.updateMatrix(),d.value.copy(v.matrix)}function n(v,d){d.color.getRGB(v.fogColor.value,jc(s)),d.isFog?(v.fogNear.value=d.near,v.fogFar.value=d.far):d.isFogExp2&&(v.fogDensity.value=d.density)}function i(v,d,A,T,R){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(v,d):d.isMeshToonMaterial?(r(v,d),f(v,d)):d.isMeshPhongMaterial?(r(v,d),u(v,d)):d.isMeshStandardMaterial?(r(v,d),p(v,d),d.isMeshPhysicalMaterial&&_(v,d,R)):d.isMeshMatcapMaterial?(r(v,d),x(v,d)):d.isMeshDepthMaterial?r(v,d):d.isMeshDistanceMaterial?(r(v,d),y(v,d)):d.isMeshNormalMaterial?r(v,d):d.isLineBasicMaterial?(o(v,d),d.isLineDashedMaterial&&a(v,d)):d.isPointsMaterial?c(v,d,A,T):d.isSpriteMaterial?h(v,d):d.isShadowMaterial?(v.color.value.copy(d.color),v.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(v,d){v.opacity.value=d.opacity,d.color&&v.diffuse.value.copy(d.color),d.emissive&&v.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(v.map.value=d.map,t(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,t(d.alphaMap,v.alphaMapTransform)),d.bumpMap&&(v.bumpMap.value=d.bumpMap,t(d.bumpMap,v.bumpMapTransform),v.bumpScale.value=d.bumpScale,d.side===Ft&&(v.bumpScale.value*=-1)),d.normalMap&&(v.normalMap.value=d.normalMap,t(d.normalMap,v.normalMapTransform),v.normalScale.value.copy(d.normalScale),d.side===Ft&&v.normalScale.value.negate()),d.displacementMap&&(v.displacementMap.value=d.displacementMap,t(d.displacementMap,v.displacementMapTransform),v.displacementScale.value=d.displacementScale,v.displacementBias.value=d.displacementBias),d.emissiveMap&&(v.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,v.emissiveMapTransform)),d.specularMap&&(v.specularMap.value=d.specularMap,t(d.specularMap,v.specularMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest);const A=e.get(d).envMap;if(A&&(v.envMap.value=A,v.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=d.reflectivity,v.ior.value=d.ior,v.refractionRatio.value=d.refractionRatio),d.lightMap){v.lightMap.value=d.lightMap;const T=s._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=d.lightMapIntensity*T,t(d.lightMap,v.lightMapTransform)}d.aoMap&&(v.aoMap.value=d.aoMap,v.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,v.aoMapTransform))}function o(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,d.map&&(v.map.value=d.map,t(d.map,v.mapTransform))}function a(v,d){v.dashSize.value=d.dashSize,v.totalSize.value=d.dashSize+d.gapSize,v.scale.value=d.scale}function c(v,d,A,T){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.size.value=d.size*A,v.scale.value=T*.5,d.map&&(v.map.value=d.map,t(d.map,v.uvTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,t(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function h(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.rotation.value=d.rotation,d.map&&(v.map.value=d.map,t(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,t(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function u(v,d){v.specular.value.copy(d.specular),v.shininess.value=Math.max(d.shininess,1e-4)}function f(v,d){d.gradientMap&&(v.gradientMap.value=d.gradientMap)}function p(v,d){v.metalness.value=d.metalness,d.metalnessMap&&(v.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,v.metalnessMapTransform)),v.roughness.value=d.roughness,d.roughnessMap&&(v.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,v.roughnessMapTransform)),e.get(d).envMap&&(v.envMapIntensity.value=d.envMapIntensity)}function _(v,d,A){v.ior.value=d.ior,d.sheen>0&&(v.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),v.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(v.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,v.sheenColorMapTransform)),d.sheenRoughnessMap&&(v.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,v.sheenRoughnessMapTransform))),d.clearcoat>0&&(v.clearcoat.value=d.clearcoat,v.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(v.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,v.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(v.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ft&&v.clearcoatNormalScale.value.negate())),d.iridescence>0&&(v.iridescence.value=d.iridescence,v.iridescenceIOR.value=d.iridescenceIOR,v.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(v.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,v.iridescenceMapTransform)),d.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),d.transmission>0&&(v.transmission.value=d.transmission,v.transmissionSamplerMap.value=A.texture,v.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(v.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,v.transmissionMapTransform)),v.thickness.value=d.thickness,d.thicknessMap&&(v.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=d.attenuationDistance,v.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(v.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(v.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=d.specularIntensity,v.specularColor.value.copy(d.specularColor),d.specularColorMap&&(v.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,v.specularColorMapTransform)),d.specularIntensityMap&&(v.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,d){d.matcap&&(v.matcap.value=d.matcap)}function y(v,d){const A=e.get(d).light;v.referencePosition.value.setFromMatrixPosition(A.matrixWorld),v.nearDistance.value=A.shadow.camera.near,v.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Im(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(A,T){const R=T.program;n.uniformBlockBinding(A,R)}function h(A,T){let R=i[A.id];R===void 0&&(x(A),R=u(A),i[A.id]=R,A.addEventListener("dispose",v));const N=T.program;n.updateUBOMapping(A,N);const P=e.render.frame;r[A.id]!==P&&(p(A),r[A.id]=P)}function u(A){const T=f();A.__bindingPointIndex=T;const R=s.createBuffer(),N=A.__size,P=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,N,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,R),R}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(A){const T=i[A.id],R=A.uniforms,N=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let P=0,D=R.length;P<D;P++){const j=Array.isArray(R[P])?R[P]:[R[P]];for(let b=0,C=j.length;b<C;b++){const q=j[b];if(_(q,P,b,N)===!0){const K=q.__offset,le=Array.isArray(q.value)?q.value:[q.value];let F=0;for(let W=0;W<le.length;W++){const Y=le[W],Z=y(Y);typeof Y=="number"||typeof Y=="boolean"?(q.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,K+F,q.__data)):Y.isMatrix3?(q.__data[0]=Y.elements[0],q.__data[1]=Y.elements[1],q.__data[2]=Y.elements[2],q.__data[3]=0,q.__data[4]=Y.elements[3],q.__data[5]=Y.elements[4],q.__data[6]=Y.elements[5],q.__data[7]=0,q.__data[8]=Y.elements[6],q.__data[9]=Y.elements[7],q.__data[10]=Y.elements[8],q.__data[11]=0):(Y.toArray(q.__data,F),F+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,q.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(A,T,R,N){const P=A.value,D=T+"_"+R;if(N[D]===void 0)return typeof P=="number"||typeof P=="boolean"?N[D]=P:N[D]=P.clone(),!0;{const j=N[D];if(typeof P=="number"||typeof P=="boolean"){if(j!==P)return N[D]=P,!0}else if(j.equals(P)===!1)return j.copy(P),!0}return!1}function x(A){const T=A.uniforms;let R=0;const N=16;for(let D=0,j=T.length;D<j;D++){const b=Array.isArray(T[D])?T[D]:[T[D]];for(let C=0,q=b.length;C<q;C++){const K=b[C],le=Array.isArray(K.value)?K.value:[K.value];for(let F=0,W=le.length;F<W;F++){const Y=le[F],Z=y(Y),ee=R%N;ee!==0&&N-ee<Z.boundary&&(R+=N-ee),K.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=R,R+=Z.storage}}}const P=R%N;return P>0&&(R+=N-P),A.__size=R,A.__cache={},this}function y(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function v(A){const T=A.target;T.removeEventListener("dispose",v);const R=o.indexOf(T.__bindingPointIndex);o.splice(R,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function d(){for(const A in i)s.deleteBuffer(i[A]);o=[],i={},r={}}return{bind:c,update:h,dispose:d}}class al{constructor(e={}){const{canvas:t=Rh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const _=new Uint32Array(4),x=new Int32Array(4);let y=null,v=null;const d=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=Dn,this.toneMappingExposure=1;const T=this;let R=!1,N=0,P=0,D=null,j=-1,b=null;const C=new dt,q=new dt;let K=null;const le=new Qe(0);let F=0,W=t.width,Y=t.height,Z=1,ee=null,te=null;const ne=new dt(0,0,W,Y),he=new dt(0,0,W,Y);let fe=!1;const X=new mo;let se=!1,xe=!1,be=null;const Le=new gt,He=new Te,Ge=new L,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ze(){return D===null?Z:1}let V=n;function st(S,I){for(let H=0;H<S.length;H++){const O=S[H],B=t.getContext(O,I);if(B!==null)return B}return null}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${co}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ve,!1),V===null){const I=["webgl2","webgl","experimental-webgl"];if(T.isWebGL1Renderer===!0&&I.shift(),V=st(I,S),V===null)throw st(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ue,ke,we,ot,We,w,E,G,ae,oe,ce,Re,ge,Me,Fe,Ve,ie,rt,Ye,Be,Ae,Se,$e,tt;function ut(){Ue=new Vd(V),ke=new Fd(V,Ue,e),Ue.init(ke),Se=new Rm(V,Ue,ke),we=new wm(V,Ue,ke),ot=new Xd(V),We=new fm,w=new Am(V,Ue,we,We,ke,Se,ot),E=new Bd(T),G=new Gd(T),ae=new Qh(V,ke),$e=new Od(V,Ue,ae,ke),oe=new Wd(V,ae,ot,$e),ce=new jd(V,oe,ae,ot),Ye=new Kd(V,ke,w),Ve=new zd(We),Re=new um(T,E,G,Ue,ke,$e,Ve),ge=new Dm(T,We),Me=new pm,Fe=new ym(Ue,ke),rt=new Ud(T,E,G,we,ce,p,c),ie=new bm(T,ce,ke),tt=new Im(V,ot,ke,we),Be=new Nd(V,Ue,ot,ke),Ae=new $d(V,Ue,ot,ke),ot.programs=Re.programs,T.capabilities=ke,T.extensions=Ue,T.properties=We,T.renderLists=Me,T.shadowMap=ie,T.state=we,T.info=ot}ut();const Xe=new Lm(T,V);this.xr=Xe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const S=Ue.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ue.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(W,Y,!1))},this.getSize=function(S){return S.set(W,Y)},this.setSize=function(S,I,H=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,Y=I,t.width=Math.floor(S*Z),t.height=Math.floor(I*Z),H===!0&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(W*Z,Y*Z).floor()},this.setDrawingBufferSize=function(S,I,H){W=S,Y=I,Z=H,t.width=Math.floor(S*H),t.height=Math.floor(I*H),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(ne)},this.setViewport=function(S,I,H,O){S.isVector4?ne.set(S.x,S.y,S.z,S.w):ne.set(S,I,H,O),we.viewport(C.copy(ne).multiplyScalar(Z).floor())},this.getScissor=function(S){return S.copy(he)},this.setScissor=function(S,I,H,O){S.isVector4?he.set(S.x,S.y,S.z,S.w):he.set(S,I,H,O),we.scissor(q.copy(he).multiplyScalar(Z).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(S){we.setScissorTest(fe=S)},this.setOpaqueSort=function(S){ee=S},this.setTransparentSort=function(S){te=S},this.getClearColor=function(S){return S.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(S=!0,I=!0,H=!0){let O=0;if(S){let B=!1;if(D!==null){const Q=D.texture.format;B=Q===zc||Q===Fc||Q===Nc}if(B){const Q=D.texture.type,re=Q===In||Q===Cn||Q===lo||Q===jn||Q===Uc||Q===Oc,$=rt.getClearColor(),de=rt.getClearAlpha(),Ie=$.r,ye=$.g,pe=$.b;re?(_[0]=Ie,_[1]=ye,_[2]=pe,_[3]=de,V.clearBufferuiv(V.COLOR,0,_)):(x[0]=Ie,x[1]=ye,x[2]=pe,x[3]=de,V.clearBufferiv(V.COLOR,0,x))}else O|=V.COLOR_BUFFER_BIT}I&&(O|=V.DEPTH_BUFFER_BIT),H&&(O|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Me.dispose(),Fe.dispose(),We.dispose(),E.dispose(),G.dispose(),ce.dispose(),$e.dispose(),tt.dispose(),Re.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",wt),Xe.removeEventListener("sessionend",et),be&&(be.dispose(),be=null),yt.stop()};function ue(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=ot.autoReset,I=ie.enabled,H=ie.autoUpdate,O=ie.needsUpdate,B=ie.type;ut(),ot.autoReset=S,ie.enabled=I,ie.autoUpdate=H,ie.needsUpdate=O,ie.type=B}function ve(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function _e(S){const I=S.target;I.removeEventListener("dispose",_e),ze(I)}function ze(S){Oe(S),We.remove(S)}function Oe(S){const I=We.get(S).programs;I!==void 0&&(I.forEach(function(H){Re.releaseProgram(H)}),S.isShaderMaterial&&Re.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,H,O,B,Q){I===null&&(I=Ne);const re=B.isMesh&&B.matrixWorld.determinant()<0,$=Pe(S,I,H,O,B);we.setMaterial(O,re);let de=H.index,Ie=1;if(O.wireframe===!0){if(de=oe.getWireframeAttribute(H),de===void 0)return;Ie=2}const ye=H.drawRange,pe=H.attributes.position;let De=ye.start*Ie,mt=(ye.start+ye.count)*Ie;Q!==null&&(De=Math.max(De,Q.start*Ie),mt=Math.min(mt,(Q.start+Q.count)*Ie)),de!==null?(De=Math.max(De,0),mt=Math.min(mt,de.count)):pe!=null&&(De=Math.max(De,0),mt=Math.min(mt,pe.count));const ht=mt-De;if(ht<0||ht===1/0)return;$e.setup(B,O,$,H,de);let _t,qe=Be;if(de!==null&&(_t=ae.get(de),qe=Ae,qe.setIndex(_t)),B.isMesh)O.wireframe===!0?(we.setLineWidth(O.wireframeLinewidth*Ze()),qe.setMode(V.LINES)):qe.setMode(V.TRIANGLES);else if(B.isLine){let Ce=O.linewidth;Ce===void 0&&(Ce=1),we.setLineWidth(Ce*Ze()),B.isLineSegments?qe.setMode(V.LINES):B.isLineLoop?qe.setMode(V.LINE_LOOP):qe.setMode(V.LINE_STRIP)}else B.isPoints?qe.setMode(V.POINTS):B.isSprite&&qe.setMode(V.TRIANGLES);if(B.isBatchedMesh)qe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)qe.renderInstances(De,ht,B.count);else if(H.isInstancedBufferGeometry){const Ce=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,yn=Math.min(H.instanceCount,Ce);qe.renderInstances(De,ht,yn)}else qe.render(De,ht)};function at(S,I,H){S.transparent===!0&&S.side===_n&&S.forceSinglePass===!1?(S.side=Ft,S.needsUpdate=!0,M(S,I,H),S.side=On,S.needsUpdate=!0,M(S,I,H),S.side=_n):M(S,I,H)}this.compile=function(S,I,H=null){H===null&&(H=S),v=Fe.get(H),v.init(),A.push(v),H.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(v.pushLight(B),B.castShadow&&v.pushShadow(B))}),S!==H&&S.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(v.pushLight(B),B.castShadow&&v.pushShadow(B))}),v.setupLights(T._useLegacyLights);const O=new Set;return S.traverse(function(B){const Q=B.material;if(Q)if(Array.isArray(Q))for(let re=0;re<Q.length;re++){const $=Q[re];at($,H,B),O.add($)}else at(Q,H,B),O.add(Q)}),A.pop(),v=null,O},this.compileAsync=function(S,I,H=null){const O=this.compile(S,I,H);return new Promise(B=>{function Q(){if(O.forEach(function(re){We.get(re).currentProgram.isReady()&&O.delete(re)}),O.size===0){B(S);return}setTimeout(Q,10)}Ue.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ct=null;function it(S){ct&&ct(S)}function wt(){yt.stop()}function et(){yt.start()}const yt=new Qc;yt.setAnimationLoop(it),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(S){ct=S,Xe.setAnimationLoop(S),S===null?yt.stop():yt.start()},Xe.addEventListener("sessionstart",wt),Xe.addEventListener("sessionend",et),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(I),I=Xe.getCamera()),S.isScene===!0&&S.onBeforeRender(T,S,I,D),v=Fe.get(S,A.length),v.init(),A.push(v),Le.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),X.setFromProjectionMatrix(Le),xe=this.localClippingEnabled,se=Ve.init(this.clippingPlanes,xe),y=Me.get(S,d.length),y.init(),d.push(y),Ot(S,I,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(ee,te),this.info.render.frame++,se===!0&&Ve.beginShadows();const H=v.state.shadowsArray;if(ie.render(H,S,I),se===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),rt.render(y,S),v.setupLights(T._useLegacyLights),I.isArrayCamera){const O=I.cameras;for(let B=0,Q=O.length;B<Q;B++){const re=O[B];ns(y,S,re,re.viewport)}}else ns(y,S,I);D!==null&&(w.updateMultisampleRenderTarget(D),w.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(T,S,I),$e.resetDefaultState(),j=-1,b=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Ot(S,I,H,O){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)v.pushLight(S),S.castShadow&&v.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){O&&Ge.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Le);const re=ce.update(S),$=S.material;$.visible&&y.push(S,re,$,H,Ge.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){const re=ce.update(S),$=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ge.copy(S.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Ge.copy(re.boundingSphere.center)),Ge.applyMatrix4(S.matrixWorld).applyMatrix4(Le)),Array.isArray($)){const de=re.groups;for(let Ie=0,ye=de.length;Ie<ye;Ie++){const pe=de[Ie],De=$[pe.materialIndex];De&&De.visible&&y.push(S,re,De,H,Ge.z,pe)}}else $.visible&&y.push(S,re,$,H,Ge.z,null)}}const Q=S.children;for(let re=0,$=Q.length;re<$;re++)Ot(Q[re],I,H,O)}function ns(S,I,H,O){const B=S.opaque,Q=S.transmissive,re=S.transparent;v.setupLightsView(H),se===!0&&Ve.setGlobalState(T.clippingPlanes,H),Q.length>0&&m(B,Q,I,H),O&&we.viewport(C.copy(O)),B.length>0&&l(B,I,H),Q.length>0&&l(Q,I,H),re.length>0&&l(re,I,H),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function m(S,I,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const Q=ke.isWebGL2;be===null&&(be=new Qn(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?Yi:In,minFilter:qi,samples:Q?4:0})),T.getDrawingBufferSize(He),Q?be.setSize(He.x,He.y):be.setSize(no(He.x),no(He.y));const re=T.getRenderTarget();T.setRenderTarget(be),T.getClearColor(le),F=T.getClearAlpha(),F<1&&T.setClearColor(16777215,.5),T.clear();const $=T.toneMapping;T.toneMapping=Dn,l(S,H,O),w.updateMultisampleRenderTarget(be),w.updateRenderTargetMipmap(be);let de=!1;for(let Ie=0,ye=I.length;Ie<ye;Ie++){const pe=I[Ie],De=pe.object,mt=pe.geometry,ht=pe.material,_t=pe.group;if(ht.side===_n&&De.layers.test(O.layers)){const qe=ht.side;ht.side=Ft,ht.needsUpdate=!0,g(De,H,O,mt,ht,_t),ht.side=qe,ht.needsUpdate=!0,de=!0}}de===!0&&(w.updateMultisampleRenderTarget(be),w.updateRenderTargetMipmap(be)),T.setRenderTarget(re),T.setClearColor(le,F),T.toneMapping=$}function l(S,I,H){const O=I.isScene===!0?I.overrideMaterial:null;for(let B=0,Q=S.length;B<Q;B++){const re=S[B],$=re.object,de=re.geometry,Ie=O===null?re.material:O,ye=re.group;$.layers.test(H.layers)&&g($,I,H,de,Ie,ye)}}function g(S,I,H,O,B,Q){S.onBeforeRender(T,I,H,O,B,Q),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(T,I,H,O,S,Q),B.transparent===!0&&B.side===_n&&B.forceSinglePass===!1?(B.side=Ft,B.needsUpdate=!0,T.renderBufferDirect(H,I,O,B,S,Q),B.side=On,B.needsUpdate=!0,T.renderBufferDirect(H,I,O,B,S,Q),B.side=_n):T.renderBufferDirect(H,I,O,B,S,Q),S.onAfterRender(T,I,H,O,B,Q)}function M(S,I,H){I.isScene!==!0&&(I=Ne);const O=We.get(S),B=v.state.lights,Q=v.state.shadowsArray,re=B.state.version,$=Re.getParameters(S,B.state,Q,I,H),de=Re.getProgramCacheKey($);let Ie=O.programs;O.environment=S.isMeshStandardMaterial?I.environment:null,O.fog=I.fog,O.envMap=(S.isMeshStandardMaterial?G:E).get(S.envMap||O.environment),Ie===void 0&&(S.addEventListener("dispose",_e),Ie=new Map,O.programs=Ie);let ye=Ie.get(de);if(ye!==void 0){if(O.currentProgram===ye&&O.lightsStateVersion===re)return J(S,$),ye}else $.uniforms=Re.getUniforms(S),S.onBuild(H,$,T),S.onBeforeCompile($,T),ye=Re.acquireProgram($,de),Ie.set(de,ye),O.uniforms=$.uniforms;const pe=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(pe.clippingPlanes=Ve.uniform),J(S,$),O.needsLights=Je(S),O.lightsStateVersion=re,O.needsLights&&(pe.ambientLightColor.value=B.state.ambient,pe.lightProbe.value=B.state.probe,pe.directionalLights.value=B.state.directional,pe.directionalLightShadows.value=B.state.directionalShadow,pe.spotLights.value=B.state.spot,pe.spotLightShadows.value=B.state.spotShadow,pe.rectAreaLights.value=B.state.rectArea,pe.ltc_1.value=B.state.rectAreaLTC1,pe.ltc_2.value=B.state.rectAreaLTC2,pe.pointLights.value=B.state.point,pe.pointLightShadows.value=B.state.pointShadow,pe.hemisphereLights.value=B.state.hemi,pe.directionalShadowMap.value=B.state.directionalShadowMap,pe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,pe.spotShadowMap.value=B.state.spotShadowMap,pe.spotLightMatrix.value=B.state.spotLightMatrix,pe.spotLightMap.value=B.state.spotLightMap,pe.pointShadowMap.value=B.state.pointShadowMap,pe.pointShadowMatrix.value=B.state.pointShadowMatrix),O.currentProgram=ye,O.uniformsList=null,ye}function z(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=Ps.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function J(S,I){const H=We.get(S);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function Pe(S,I,H,O,B){I.isScene!==!0&&(I=Ne),w.resetTextureUnits();const Q=I.fog,re=O.isMeshStandardMaterial?I.environment:null,$=D===null?T.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:xn,de=(O.isMeshStandardMaterial?G:E).get(O.envMap||re),Ie=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ye=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),pe=!!H.morphAttributes.position,De=!!H.morphAttributes.normal,mt=!!H.morphAttributes.color;let ht=Dn;O.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ht=T.toneMapping);const _t=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,qe=_t!==void 0?_t.length:0,Ce=We.get(O),yn=v.state.lights;if(se===!0&&(xe===!0||S!==b)){const Wt=S===b&&O.id===j;Ve.setState(O,S,Wt)}let nt=!1;O.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==yn.state.version||Ce.outputColorSpace!==$||B.isBatchedMesh&&Ce.batching===!1||!B.isBatchedMesh&&Ce.batching===!0||B.isInstancedMesh&&Ce.instancing===!1||!B.isInstancedMesh&&Ce.instancing===!0||B.isSkinnedMesh&&Ce.skinning===!1||!B.isSkinnedMesh&&Ce.skinning===!0||B.isInstancedMesh&&Ce.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ce.instancingColor===!1&&B.instanceColor!==null||Ce.envMap!==de||O.fog===!0&&Ce.fog!==Q||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Ve.numPlanes||Ce.numIntersection!==Ve.numIntersection)||Ce.vertexAlphas!==Ie||Ce.vertexTangents!==ye||Ce.morphTargets!==pe||Ce.morphNormals!==De||Ce.morphColors!==mt||Ce.toneMapping!==ht||ke.isWebGL2===!0&&Ce.morphTargetsCount!==qe)&&(nt=!0):(nt=!0,Ce.__version=O.version);let Yt=Ce.currentProgram;nt===!0&&(Yt=M(O,I,B));let Kt=!1,rn=!1,tr=!1;const Ct=Yt.getUniforms(),Nn=Ce.uniforms;if(we.useProgram(Yt.program)&&(Kt=!0,rn=!0,tr=!0),O.id!==j&&(j=O.id,rn=!0),Kt||b!==S){Ct.setValue(V,"projectionMatrix",S.projectionMatrix),Ct.setValue(V,"viewMatrix",S.matrixWorldInverse);const Wt=Ct.map.cameraPosition;Wt!==void 0&&Wt.setValue(V,Ge.setFromMatrixPosition(S.matrixWorld)),ke.logarithmicDepthBuffer&&Ct.setValue(V,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ct.setValue(V,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,rn=!0,tr=!0)}if(B.isSkinnedMesh){Ct.setOptional(V,B,"bindMatrix"),Ct.setOptional(V,B,"bindMatrixInverse");const Wt=B.skeleton;Wt&&(ke.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),Ct.setValue(V,"boneTexture",Wt.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ct.setOptional(V,B,"batchingTexture"),Ct.setValue(V,"batchingTexture",B._matricesTexture,w));const nr=H.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0&&ke.isWebGL2===!0)&&Ye.update(B,H,Yt),(rn||Ce.receiveShadow!==B.receiveShadow)&&(Ce.receiveShadow=B.receiveShadow,Ct.setValue(V,"receiveShadow",B.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Nn.envMap.value=de,Nn.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),rn&&(Ct.setValue(V,"toneMappingExposure",T.toneMappingExposure),Ce.needsLights&&Ee(Nn,tr),Q&&O.fog===!0&&ge.refreshFogUniforms(Nn,Q),ge.refreshMaterialUniforms(Nn,O,Z,Y,be),Ps.upload(V,z(Ce),Nn,w)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ps.upload(V,z(Ce),Nn,w),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ct.setValue(V,"center",B.center),Ct.setValue(V,"modelViewMatrix",B.modelViewMatrix),Ct.setValue(V,"normalMatrix",B.normalMatrix),Ct.setValue(V,"modelMatrix",B.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Wt=O.uniformsGroups;for(let ir=0,wl=Wt.length;ir<wl;ir++)if(ke.isWebGL2){const wo=Wt[ir];tt.update(wo,Yt),tt.bind(wo,Yt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yt}function Ee(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Je(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,I,H){We.get(S.texture).__webglTexture=I,We.get(S.depthTexture).__webglTexture=H;const O=We.get(S);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=H===void 0,O.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,I){const H=We.get(S);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,H=0){D=S,N=I,P=H;let O=!0,B=null,Q=!1,re=!1;if(S){const de=We.get(S);de.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(V.FRAMEBUFFER,null),O=!1):de.__webglFramebuffer===void 0?w.setupRenderTarget(S):de.__hasExternalTextures&&w.rebindTextures(S,We.get(S.texture).__webglTexture,We.get(S.depthTexture).__webglTexture);const Ie=S.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(re=!0);const ye=We.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ye[I])?B=ye[I][H]:B=ye[I],Q=!0):ke.isWebGL2&&S.samples>0&&w.useMultisampledRTT(S)===!1?B=We.get(S).__webglMultisampledFramebuffer:Array.isArray(ye)?B=ye[H]:B=ye,C.copy(S.viewport),q.copy(S.scissor),K=S.scissorTest}else C.copy(ne).multiplyScalar(Z).floor(),q.copy(he).multiplyScalar(Z).floor(),K=fe;if(we.bindFramebuffer(V.FRAMEBUFFER,B)&&ke.drawBuffers&&O&&we.drawBuffers(S,B),we.viewport(C),we.scissor(q),we.setScissorTest(K),Q){const de=We.get(S.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+I,de.__webglTexture,H)}else if(re){const de=We.get(S.texture),Ie=I||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,de.__webglTexture,H||0,Ie)}j=-1},this.readRenderTargetPixels=function(S,I,H,O,B,Q,re){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $=We.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&re!==void 0&&($=$[re]),$){we.bindFramebuffer(V.FRAMEBUFFER,$);try{const de=S.texture,Ie=de.format,ye=de.type;if(Ie!==tn&&Se.convert(Ie)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const pe=ye===Yi&&(Ue.has("EXT_color_buffer_half_float")||ke.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(ye!==In&&Se.convert(ye)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ye===Pn&&(ke.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-O&&H>=0&&H<=S.height-B&&V.readPixels(I,H,O,B,Se.convert(Ie),Se.convert(ye),Q)}finally{const de=D!==null?We.get(D).__webglFramebuffer:null;we.bindFramebuffer(V.FRAMEBUFFER,de)}}},this.copyFramebufferToTexture=function(S,I,H=0){const O=Math.pow(2,-H),B=Math.floor(I.image.width*O),Q=Math.floor(I.image.height*O);w.setTexture2D(I,0),V.copyTexSubImage2D(V.TEXTURE_2D,H,0,0,S.x,S.y,B,Q),we.unbindTexture()},this.copyTextureToTexture=function(S,I,H,O=0){const B=I.image.width,Q=I.image.height,re=Se.convert(H.format),$=Se.convert(H.type);w.setTexture2D(H,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,H.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,H.unpackAlignment),I.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,O,S.x,S.y,B,Q,re,$,I.image.data):I.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,O,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,re,I.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,O,S.x,S.y,re,$,I.image),O===0&&H.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(S,I,H,O,B=0){if(T.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Q=S.max.x-S.min.x+1,re=S.max.y-S.min.y+1,$=S.max.z-S.min.z+1,de=Se.convert(O.format),Ie=Se.convert(O.type);let ye;if(O.isData3DTexture)w.setTexture3D(O,0),ye=V.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)w.setTexture2DArray(O,0),ye=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,O.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,O.unpackAlignment);const pe=V.getParameter(V.UNPACK_ROW_LENGTH),De=V.getParameter(V.UNPACK_IMAGE_HEIGHT),mt=V.getParameter(V.UNPACK_SKIP_PIXELS),ht=V.getParameter(V.UNPACK_SKIP_ROWS),_t=V.getParameter(V.UNPACK_SKIP_IMAGES),qe=H.isCompressedTexture?H.mipmaps[B]:H.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,qe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,S.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,S.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,S.min.z),H.isDataTexture||H.isData3DTexture?V.texSubImage3D(ye,B,I.x,I.y,I.z,Q,re,$,de,Ie,qe.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(ye,B,I.x,I.y,I.z,Q,re,$,de,qe.data)):V.texSubImage3D(ye,B,I.x,I.y,I.z,Q,re,$,de,Ie,qe),V.pixelStorei(V.UNPACK_ROW_LENGTH,pe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,De),V.pixelStorei(V.UNPACK_SKIP_PIXELS,mt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ht),V.pixelStorei(V.UNPACK_SKIP_IMAGES,_t),B===0&&O.generateMipmaps&&V.generateMipmap(ye),we.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),we.unbindTexture()},this.resetState=function(){N=0,P=0,D=null,we.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ho?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Gs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?Zn:kc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Zn?Tt:xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Um extends al{}Um.prototype.isWebGL1Renderer=!0;class Bs{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=n}clone(){return new Bs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Om extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ks extends Di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qa=new L,Ya=new L,Ka=new gt,Or=new uo,bs=new Vs;class so extends bt{constructor(e=new zt,t=new ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)qa.fromBufferAttribute(t,i-1),Ya.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=qa.distanceTo(Ya);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(i),bs.radius+=r,e.ray.intersectsSphere(bs)===!1)return;Ka.copy(i).invert(),Or.copy(e.ray).applyMatrix4(Ka);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=new L,u=new L,f=new L,p=new L,_=this.isLineSegments?2:1,x=n.index,v=n.attributes.position;if(x!==null){const d=Math.max(0,o.start),A=Math.min(x.count,o.start+o.count);for(let T=d,R=A-1;T<R;T+=_){const N=x.getX(T),P=x.getX(T+1);if(h.fromBufferAttribute(v,N),u.fromBufferAttribute(v,P),Or.distanceSqToSegment(h,u,p,f)>c)continue;p.applyMatrix4(this.matrixWorld);const j=e.ray.origin.distanceTo(p);j<e.near||j>e.far||t.push({distance:j,point:f.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),A=Math.min(v.count,o.start+o.count);for(let T=d,R=A-1;T<R;T+=_){if(h.fromBufferAttribute(v,T),u.fromBufferAttribute(v,T+1),Or.distanceSqToSegment(h,u,p,f)>c)continue;p.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(p);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}class hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,h;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),h=n[i]-o,h<0)a=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],p=n[i+1]-u,_=(o-u)/p;return(i+_)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new Te:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],r=[],o=[],a=new L,c=new gt;for(let _=0;_<=e;_++){const x=_/e;i[_]=this.getTangentAt(x,new L)}r[0]=new L,o[0]=new L;let h=Number.MAX_VALUE;const u=Math.abs(i[0].x),f=Math.abs(i[0].y),p=Math.abs(i[0].z);u<=h&&(h=u,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),p<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let _=1;_<=e;_++){if(r[_]=r[_-1].clone(),o[_]=o[_-1].clone(),a.crossVectors(i[_-1],i[_]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(At(i[_-1].dot(i[_]),-1,1));r[_].applyMatrix4(c.makeRotationAxis(a,x))}o[_].crossVectors(i[_],r[_])}if(t===!0){let _=Math.acos(At(r[0].dot(r[e]),-1,1));_/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(_=-_);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(i[x],_*x)),o[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vo extends hn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new Te,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=c-this.aX,_=h-this.aY;c=p*u-_*f+this.aX,h=p*f+_*u+this.aY}return n.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Nm extends vo{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function xo(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,h){i(o,a,h*(a-r),h*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,h,u,f){let p=(o-r)/h-(a-r)/(h+u)+(a-o)/u,_=(a-o)/u-(c-o)/(u+f)+(c-a)/f;p*=u,_*=u,i(o,a,p,_)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const ws=new L,Nr=new xo,Fr=new xo,zr=new xo;class Fm extends hn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let h,u;this.closed||a>0?h=i[(a-1)%r]:(ws.subVectors(i[0],i[1]).add(i[0]),h=ws);const f=i[a%r],p=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(ws.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=ws),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let x=Math.pow(h.distanceToSquared(f),_),y=Math.pow(f.distanceToSquared(p),_),v=Math.pow(p.distanceToSquared(u),_);y<1e-4&&(y=1),x<1e-4&&(x=y),v<1e-4&&(v=y),Nr.initNonuniformCatmullRom(h.x,f.x,p.x,u.x,x,y,v),Fr.initNonuniformCatmullRom(h.y,f.y,p.y,u.y,x,y,v),zr.initNonuniformCatmullRom(h.z,f.z,p.z,u.z,x,y,v)}else this.curveType==="catmullrom"&&(Nr.initCatmullRom(h.x,f.x,p.x,u.x,this.tension),Fr.initCatmullRom(h.y,f.y,p.y,u.y,this.tension),zr.initCatmullRom(h.z,f.z,p.z,u.z,this.tension));return n.set(Nr.calc(c),Fr.calc(c),zr.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ja(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function zm(s,e){const t=1-s;return t*t*e}function Bm(s,e){return 2*(1-s)*s*e}function km(s,e){return s*s*e}function $i(s,e,t,n){return zm(s,e)+Bm(s,t)+km(s,n)}function Hm(s,e){const t=1-s;return t*t*t*e}function Gm(s,e){const t=1-s;return 3*t*t*s*e}function Vm(s,e){return 3*(1-s)*s*s*e}function Wm(s,e){return s*s*s*e}function Xi(s,e,t,n,i){return Hm(s,e)+Gm(s,t)+Vm(s,n)+Wm(s,i)}class cl extends hn{constructor(e=new Te,t=new Te,n=new Te,i=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Te){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xi(e,i.x,r.x,o.x,a.x),Xi(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $m extends hn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xi(e,i.x,r.x,o.x,a.x),Xi(e,i.y,r.y,o.y,a.y),Xi(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ll extends hn{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xm extends hn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hl extends hn{constructor(e=new Te,t=new Te,n=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Te){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set($i(e,i.x,r.x,o.x),$i(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qm extends hn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set($i(e,i.x,r.x,o.x),$i(e,i.y,r.y,o.y),$i(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ul extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],h=i[o],u=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(ja(a,c.x,h.x,u.x,f.x),ja(a,c.y,h.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Te().fromArray(i))}return this}}var Ja=Object.freeze({__proto__:null,ArcCurve:Nm,CatmullRomCurve3:Fm,CubicBezierCurve:cl,CubicBezierCurve3:$m,EllipseCurve:vo,LineCurve:ll,LineCurve3:Xm,QuadraticBezierCurve:hl,QuadraticBezierCurve3:qm,SplineCurve:ul});class Ym extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ja[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),h=c===0?0:1-o/c;return a.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let h=0;h<c.length;h++){const u=c[h];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ja[i.type]().fromJSON(i))}return this}}class Km extends Ym{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ll(this.currentPoint.clone(),new Te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new hl(this.currentPoint.clone(),new Te(e,t),new Te(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new cl(this.currentPoint.clone(),new Te(e,t),new Te(n,i),new Te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ul(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+h,t+u,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const h=new vo(e,t,n,i,r,o,a,c);if(this.curves.length>0){const f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);const u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class yo extends zt{constructor(e=[new Te(0,-.5),new Te(.5,0),new Te(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=At(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],h=[],u=1/t,f=new L,p=new Te,_=new L,x=new L,y=new L;let v=0,d=0;for(let A=0;A<=e.length-1;A++)switch(A){case 0:v=e[A+1].x-e[A].x,d=e[A+1].y-e[A].y,_.x=d*1,_.y=-v,_.z=d*0,y.copy(_),_.normalize(),c.push(_.x,_.y,_.z);break;case e.length-1:c.push(y.x,y.y,y.z);break;default:v=e[A+1].x-e[A].x,d=e[A+1].y-e[A].y,_.x=d*1,_.y=-v,_.z=d*0,x.copy(_),_.x+=y.x,_.y+=y.y,_.z+=y.z,_.normalize(),c.push(_.x,_.y,_.z),y.copy(x)}for(let A=0;A<=t;A++){const T=n+A*u*i,R=Math.sin(T),N=Math.cos(T);for(let P=0;P<=e.length-1;P++){f.x=e[P].x*R,f.y=e[P].y,f.z=e[P].x*N,o.push(f.x,f.y,f.z),p.x=A/t,p.y=P/(e.length-1),a.push(p.x,p.y);const D=c[3*P+0]*R,j=c[3*P+1],b=c[3*P+0]*N;h.push(D,j,b)}}for(let A=0;A<t;A++)for(let T=0;T<e.length-1;T++){const R=T+A*e.length,N=R,P=R+e.length,D=R+e.length+1,j=R+1;r.push(N,P,j),r.push(D,j,P)}this.setIndex(r),this.setAttribute("position",new Rt(o,3)),this.setAttribute("uv",new Rt(a,2)),this.setAttribute("normal",new Rt(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.points,e.segments,e.phiStart,e.phiLength)}}class Xs extends yo{constructor(e=1,t=1,n=4,i=8){const r=new Km;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Xs(e.radius,e.length,e.capSegments,e.radialSegments)}}class Mo extends zt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const h=this;i=Math.floor(i),r=Math.floor(r);const u=[],f=[],p=[],_=[];let x=0;const y=[],v=n/2;let d=0;A(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Rt(f,3)),this.setAttribute("normal",new Rt(p,3)),this.setAttribute("uv",new Rt(_,2));function A(){const R=new L,N=new L;let P=0;const D=(t-e)/n;for(let j=0;j<=r;j++){const b=[],C=j/r,q=C*(t-e)+e;for(let K=0;K<=i;K++){const le=K/i,F=le*c+a,W=Math.sin(F),Y=Math.cos(F);N.x=q*W,N.y=-C*n+v,N.z=q*Y,f.push(N.x,N.y,N.z),R.set(W,D,Y).normalize(),p.push(R.x,R.y,R.z),_.push(le,1-C),b.push(x++)}y.push(b)}for(let j=0;j<i;j++)for(let b=0;b<r;b++){const C=y[b][j],q=y[b+1][j],K=y[b+1][j+1],le=y[b][j+1];u.push(C,q,le),u.push(q,K,le),P+=6}h.addGroup(d,P,0),d+=P}function T(R){const N=x,P=new Te,D=new L;let j=0;const b=R===!0?e:t,C=R===!0?1:-1;for(let K=1;K<=i;K++)f.push(0,v*C,0),p.push(0,C,0),_.push(.5,.5),x++;const q=x;for(let K=0;K<=i;K++){const F=K/i*c+a,W=Math.cos(F),Y=Math.sin(F);D.x=b*Y,D.y=v*C,D.z=b*W,f.push(D.x,D.y,D.z),p.push(0,C,0),P.x=W*.5+.5,P.y=Y*.5*C+.5,_.push(P.x,P.y),x++}for(let K=0;K<i;K++){const le=N+K,F=q+K;R===!0?u.push(F,F+1,le):u.push(F+1,F,le),j+=3}h.addGroup(d,j,R===!0?1:2),d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zi extends zt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let h=0;const u=[],f=new L,p=new L,_=[],x=[],y=[],v=[];for(let d=0;d<=n;d++){const A=[],T=d/n;let R=0;d===0&&o===0?R=.5/t:d===n&&c===Math.PI&&(R=-.5/t);for(let N=0;N<=t;N++){const P=N/t;f.x=-e*Math.cos(i+P*r)*Math.sin(o+T*a),f.y=e*Math.cos(o+T*a),f.z=e*Math.sin(i+P*r)*Math.sin(o+T*a),x.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),v.push(P+R,1-T),A.push(h++)}u.push(A)}for(let d=0;d<n;d++)for(let A=0;A<t;A++){const T=u[d][A+1],R=u[d][A],N=u[d+1][A],P=u[d+1][A+1];(d!==0||o>0)&&_.push(T,R,P),(d!==n-1||c<Math.PI)&&_.push(R,N,P)}this.setIndex(_),this.setAttribute("position",new Rt(x,3)),this.setAttribute("normal",new Rt(y,3)),this.setAttribute("uv",new Rt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cn extends Di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class So extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class jm extends So{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Br=new gt,Za=new L,Qa=new L;class fl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Za.setFromMatrixPosition(e.matrixWorld),t.position.copy(Za),Qa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qa),t.updateMatrixWorld(),Br.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Br),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Br)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ec=new gt,ki=new L,kr=new L;class Jm extends fl{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ki.setFromMatrixPosition(e.matrixWorld),n.position.copy(ki),kr.copy(n.position),kr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kr),n.updateMatrixWorld(),i.makeTranslation(-ki.x,-ki.y,-ki.z),ec.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec)}}class Zm extends So{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qm extends fl{constructor(){super(new el(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eg extends So{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Qm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=tc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function tc(){return(typeof performance>"u"?Date:performance).now()}class tg{constructor(e,t,n=0,i=1/0){this.ray=new uo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ro(e,this,n,t),n.sort(nc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ro(e[i],this,n,t);return n.sort(nc),n}}function nc(s,e){return s.distance-e.distance}function ro(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)ro(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);const ic={low:{shadows:!1,pixelRatio:1,fog:!1},medium:{shadows:!0,pixelRatio:1.25,fog:!0},high:{shadows:!0,pixelRatio:1.5,fog:!0}};class pl{constructor(e,t={}){k(this,"renderer");k(this,"scene");k(this,"camera");k(this,"sun");k(this,"quality");k(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)});this.quality=t.quality||"high";const n=ic[this.quality];this.renderer=new al({antialias:this.quality!=="low",powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,n.pixelRatio)),this.renderer.shadowMap.enabled=n.shadows,this.renderer.shadowMap.type=Pc,this.renderer.outputColorSpace=Tt,e.appendChild(this.renderer.domElement),this.scene=new Om,this.scene.background=new Qe(8900331),n.fog&&(this.scene.fog=new Bs(8900331,50,150)),this.camera=new Gt(90,window.innerWidth/window.innerHeight,.1,500),this.camera.rotation.order="YXZ",this.scene.add(this.camera);const i=new jm(16777215,4473924,.6);this.scene.add(i),this.sun=new eg(16777215,1),this.sun.position.set(50,80,30),this.sun.castShadow=n.shadows,n.shadows&&(this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.camera.left=-60,this.sun.shadow.camera.right=60,this.sun.shadow.camera.top=60,this.sun.shadow.camera.bottom=-60,this.sun.shadow.camera.far=200),this.scene.add(this.sun),window.addEventListener("resize",this.onResize)}setQuality(e){this.quality=e;const t=ic[e];this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,t.pixelRatio)),this.renderer.shadowMap.enabled=t.shadows,this.sun.castShadow=t.shadows,this.scene.fog=t.fog?new Bs(8900331,50,150):null}render(){this.renderer.render(this.scene,this.camera)}setFOV(e){this.camera.fov=e,this.camera.updateProjectionMatrix()}dispose(){window.removeEventListener("resize",this.onResize),this.renderer.dispose()}}class ml{constructor(e){k(this,"keys",new Set);k(this,"mouseButtons",new Set);k(this,"_yaw",0);k(this,"_pitch",0);k(this,"locked",!1);k(this,"domElement");k(this,"sensitivity",.0022);this.domElement=e,this.bind()}bind(){document.addEventListener("keydown",e=>{this.keys.add(e.code),["Space","ArrowUp","ArrowDown"].includes(e.code)&&e.preventDefault()}),document.addEventListener("keyup",e=>this.keys.delete(e.code)),this.domElement.addEventListener("click",()=>{this.locked||this.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.domElement}),document.addEventListener("mousemove",e=>{if(!this.locked)return;this._yaw-=e.movementX*this.sensitivity,this._pitch-=e.movementY*this.sensitivity;const t=Math.PI/2-.1;this._pitch=Math.max(-t,Math.min(t,this._pitch))}),document.addEventListener("mousedown",e=>{this.locked&&this.mouseButtons.add(e.button)}),document.addEventListener("mouseup",e=>this.mouseButtons.delete(e.button))}getInput(){return{forward:this.keys.has("KeyW"),back:this.keys.has("KeyS"),left:this.keys.has("KeyA"),right:this.keys.has("KeyD"),jump:this.keys.has("Space"),crouch:this.keys.has("ControlLeft")||this.keys.has("ControlRight"),walk:this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),fire:this.mouseButtons.has(0),reload:this.keys.has("KeyR"),scope:this.mouseButtons.has(2)}}consumeKey(e){return this.keys.has(e)?(this.keys.delete(e),!0):!1}get yaw(){return this._yaw}get pitch(){return this._pitch}get isLocked(){return this.locked}}const Hn=1.8,As=.35,ng=1.6,ig=-22,sg=8.5,rg=7,og=2.8,ag=2,sc=.3,rc=10;class cg{constructor(){k(this,"position",new L(0,Hn,0));k(this,"velocity",new L);k(this,"yaw",0);k(this,"pitch",0);k(this,"onGround",!1);k(this,"crouching",!1);k(this,"bobPhase",0);k(this,"bobOffsetY",0);k(this,"bobOffsetX",0);k(this,"blocks",[])}setMap(e){this.blocks=e}update(e,t,n,i){this.yaw=n,this.pitch=i,this.crouching=t.crouch&&this.onGround;const r=new L(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),o=new L(Math.cos(this.yaw),0,-Math.sin(this.yaw)),a=new L;t.forward&&a.add(r),t.back&&a.sub(r),t.right&&a.add(o),t.left&&a.sub(o),a.normalize();let c=rg;t.walk&&(c=og),this.crouching&&(c=ag),this.onGround?(this.velocity.x=a.x*c,this.velocity.z=a.z*c,a.lengthSq()===0&&(this.velocity.x*=Math.max(0,1-rc*e),this.velocity.z*=Math.max(0,1-rc*e))):(this.velocity.x+=a.x*c*sc*e,this.velocity.z+=a.z*c*sc*e),t.jump&&this.onGround&&(this.velocity.y=sg,this.onGround=!1),this.velocity.y+=ig*e,this.moveAxis("x",this.velocity.x*e),this.moveAxis("z",this.velocity.z*e),this.moveAxis("y",this.velocity.y*e),this.position.y<=Hn&&(this.position.y=Hn,this.velocity.y=0,this.onGround=!0);const h=Math.sqrt(this.velocity.x**2+this.velocity.z**2);if(this.onGround&&h>.5){const u=h*1.2;this.bobPhase+=u*e;const f=this.crouching?.015:t.walk?.025:.04;this.bobOffsetY=Math.sin(this.bobPhase*2)*f,this.bobOffsetX=Math.cos(this.bobPhase)*f*.6}else this.bobOffsetY*=Math.max(0,1-10*e),this.bobOffsetX*=Math.max(0,1-10*e)}moveAxis(e,t){if(t===0)return;this.position[e]+=t;const n=this.crouching?Hn*.6:Hn,i=this.position.x,r=this.position.y,o=this.position.z,a={x:i-As,y:r-n,z:o-As},c={x:i+As,y:r,z:o+As};for(const h of this.blocks){const u=h.position.x,f=h.position.y,p=h.position.z,_=h.size.x/2,x=h.size.y/2,y=h.size.z/2;a.x<u+_&&c.x>u-_&&a.y<f+x&&c.y>f-x&&a.z<p+y&&c.z>p-y&&(this.position[e]-=t,e==="y"?(t<0&&(this.onGround=!0),this.velocity.y=0):this.velocity[e]=0)}}getEyePosition(){const e=this.crouching?Hn*.6:Hn;return new L(this.position.x,this.position.y-e+ng,this.position.z)}}const Yn={pistol:{id:"pistol",name:"Pistol",price:200,magSize:12,reserveMax:48,fireRate:300,damage:25,headshotMultiplier:2,range:40,damageFalloff:.01,recoilVertical:1.5,recoilHorizontal:.5,spreadBase:.005,spreadMove:.02,spreadJump:.06,reloadTime:1.8,deployTime:.5,penetration:1,fireMode:"semi",canScope:!1,scopeZoom:1,scopeSpreadMultiplier:1},rifle:{id:"rifle",name:"Rifle",price:2700,magSize:30,reserveMax:90,fireRate:600,damage:33,headshotMultiplier:4,range:80,damageFalloff:.008,recoilVertical:2,recoilHorizontal:.8,spreadBase:.004,spreadMove:.03,spreadJump:.08,reloadTime:2.5,deployTime:.8,penetration:2,fireMode:"auto",canScope:!0,scopeZoom:1.4,scopeSpreadMultiplier:.3},sniper:{id:"sniper",name:"Sniper",price:4750,magSize:5,reserveMax:30,fireRate:50,damage:115,headshotMultiplier:3,range:200,damageFalloff:.001,recoilVertical:8,recoilHorizontal:1,spreadBase:.001,spreadMove:.15,spreadJump:.2,reloadTime:3.5,deployTime:1.2,penetration:5,fireMode:"bolt",canScope:!0,scopeZoom:4,scopeSpreadMultiplier:.05},knife:{id:"knife",name:"Knife",price:0,magSize:0,reserveMax:0,fireRate:120,damage:55,headshotMultiplier:2,range:2.5,damageFalloff:0,recoilVertical:0,recoilHorizontal:0,spreadBase:0,spreadMove:0,spreadJump:0,reloadTime:0,deployTime:.3,penetration:0,fireMode:"semi",canScope:!1,scopeZoom:1,scopeSpreadMultiplier:1},grenade:{id:"grenade",name:"Grenade",price:300,magSize:1,reserveMax:2,fireRate:60,damage:80,headshotMultiplier:1,range:30,damageFalloff:0,recoilVertical:0,recoilHorizontal:0,spreadBase:0,spreadMove:0,spreadJump:0,reloadTime:0,deployTime:.6,penetration:0,fireMode:"semi",canScope:!1,scopeZoom:1,scopeSpreadMultiplier:1}};class gl{constructor(){k(this,"weapons",new Map);k(this,"current","rifle");k(this,"recoilPitchOffset",0);k(this,"recoilYawOffset",0);this.addWeapon("rifle"),this.addWeapon("pistol")}addWeapon(e){const t=Yn[e];this.weapons.set(e,{config:t,ammoInMag:t.magSize,ammoReserve:t.reserveMax,nextFireTime:0,reloading:!1,reloadEndTime:0,scoped:!1,recoilOffset:0})}getCurrent(){return this.weapons.get(this.current)}switchWeapon(e){this.weapons.has(e)&&(this.current=e)}tryFire(e,t,n){const i=this.getCurrent();return i.config.id==="knife"||i.config.id==="grenade"||i.reloading||i.ammoInMag<=0||e<i.nextFireTime?!1:(i.ammoInMag--,i.nextFireTime=e+6e4/i.config.fireRate,this.applyRecoil(i),!0)}applyRecoil(e){this.recoilPitchOffset+=e.config.recoilVertical*(Math.PI/180),this.recoilYawOffset+=(Math.random()-.5)*e.config.recoilHorizontal*2*(Math.PI/180),this.recoilPitchOffset=Math.min(this.recoilPitchOffset,.15)}getSpread(){const e=this.getCurrent();let t=e.config.spreadBase;return e.scoped&&(t*=e.config.scopeSpreadMultiplier),t}reload(){const e=this.getCurrent();e.reloading||e.ammoInMag>=e.config.magSize||e.ammoReserve<=0||(e.reloading=!0,e.reloadEndTime=performance.now()+e.config.reloadTime*1e3)}update(e,t){const n=this.getCurrent();if(n.reloading&&e>=n.reloadEndTime){const r=n.config.magSize-n.ammoInMag,o=Math.min(r,n.ammoReserve);n.ammoInMag+=o,n.ammoReserve-=o,n.reloading=!1}const i=6*t;this.recoilPitchOffset=Math.max(0,this.recoilPitchOffset-i),this.recoilYawOffset*=Math.max(0,1-i*2)}toggleScope(){const e=this.getCurrent();e.config.canScope&&(e.scoped=!e.scoped)}get ammoInfo(){const e=this.getCurrent();return{inMag:e.ammoInMag,reserve:e.ammoReserve,reloading:e.reloading}}}class _l{constructor(e){k(this,"scene");k(this,"targets",new Map);k(this,"raycaster",new tg);k(this,"tracers",[]);k(this,"hitEffects",[]);this.scene=e}registerTarget(e){this.targets.set(e.id,e)}unregisterTarget(e){this.targets.delete(e)}fire(e,t,n){this.raycaster.set(e,t.clone().normalize()),this.raycaster.far=n.config.range;const i=[];this.targets.forEach(_=>{i.push(_.mesh),_.headMesh&&i.push(_.headMesh)}),this.scene.traverse(_=>{_.userData?.collidable&&i.push(_)});const r=this.raycaster.intersectObjects(i,!0);let o=null,a=new L(0,1,0),c=null,h=!1;if(r.length>0){const _=r[0];o=_.point.clone(),_.face&&(a=_.face.normal.clone());let x=_.object;for(;x;){const y=this.findTargetByMesh(x);if(y){c=y,h=x===y.headMesh||_.point.y>y.mesh.position.y+1.4;break}x=x.parent}}const u=o?e.distanceTo(o):n.config.range;let f=n.config.damage*(1-n.config.damageFalloff*u);f=Math.max(f,n.config.damage*.3),h&&(f*=n.config.headshotMultiplier),c&&(c.hp-=f,c.onHit?.(f,h));const p=o??e.clone().add(t.clone().multiplyScalar(n.config.range));this.tracers.push({from:e.clone(),to:p,life:.08}),o&&this.hitEffects.push({point:o,normal:a,life:.5})}findTargetByMesh(e){for(const t of this.targets.values()){if(t.mesh===e||t.headMesh===e)return t;let n=e.parent;for(;n;){if(n===t.mesh)return t;n=n.parent}}return null}update(e){this.tracers=this.tracers.filter(t=>(t.life-=e,t.life>0)),this.hitEffects=this.hitEffects.filter(t=>(t.life-=e,t.life>0))}}class vl{constructor(){k(this,"container");k(this,"hpBar");k(this,"ammoText");k(this,"crosshair");k(this,"hitMarker");k(this,"hitMarkerTimer",0);k(this,"settingsPanel");k(this,"settingsVisible",!1);k(this,"onSettingsChange");k(this,"settings",{sensitivity:.0022,fov:90,volume:.7,quality:"high",crosshairColor:"#00ff44",crosshairSize:6});this.container=document.createElement("div"),this.container.style.cssText="position:fixed;inset:0;pointer-events:none;font-family:monospace;color:#fff;z-index:10;",this.hpBar=document.createElement("div"),this.hpBar.style.cssText="position:absolute;bottom:30px;left:30px;width:200px;height:24px;background:rgba(0,0,0,0.5);border:2px solid #fff;";const e=document.createElement("div");e.id="hp-fill",e.style.cssText="width:100%;height:100%;background:#00ff44;transition:width 0.2s;",this.hpBar.appendChild(e);const t=document.createElement("div");t.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-weight:bold;text-shadow:0 0 3px #000;",t.id="hp-label",t.textContent="100",this.hpBar.appendChild(t),this.container.appendChild(this.hpBar),this.ammoText=document.createElement("div"),this.ammoText.style.cssText="position:absolute;bottom:30px;right:30px;font-size:32px;font-weight:bold;text-shadow:0 0 6px #000;",this.container.appendChild(this.ammoText),this.crosshair=document.createElement("div"),this.crosshair.style.cssText="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:20px;height:20px;",this.renderCrosshair(),this.container.appendChild(this.crosshair),this.hitMarker=document.createElement("div"),this.hitMarker.style.cssText="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:30px;height:30px;opacity:0;transition:opacity 0.1s;",this.hitMarker.innerHTML=`
      <div style="position:absolute;top:0;left:0;width:2px;height:8px;background:#fff;transform:rotate(45deg);transform-origin:top left;"></div>
      <div style="position:absolute;top:0;right:0;width:2px;height:8px;background:#fff;transform:rotate(-45deg);transform-origin:top right;"></div>
      <div style="position:absolute;bottom:0;left:0;width:2px;height:8px;background:#fff;transform:rotate(-45deg);transform-origin:bottom left;"></div>
      <div style="position:absolute;bottom:0;right:0;width:2px;height:8px;background:#fff;transform:rotate(45deg);transform-origin:bottom right;"></div>
    `,this.container.appendChild(this.hitMarker),document.body.appendChild(this.container),this.settingsPanel=this.createSettingsPanel(),document.body.appendChild(this.settingsPanel),document.addEventListener("keydown",n=>{n.code==="Escape"&&this.toggleSettings()})}renderCrosshair(){const e=this.settings.crosshairColor,t=this.settings.crosshairSize;this.crosshair.innerHTML=`
      <div style="position:absolute;top:0;left:50%;width:2px;height:${t}px;background:${e};transform:translateX(-50%);"></div>
      <div style="position:absolute;bottom:0;left:50%;width:2px;height:${t}px;background:${e};transform:translateX(-50%);"></div>
      <div style="position:absolute;left:0;top:50%;width:${t}px;height:2px;background:${e};transform:translateY(-50%);"></div>
      <div style="position:absolute;right:0;top:50%;width:${t}px;height:2px;background:${e};transform:translateY(-50%);"></div>
    `}createSettingsPanel(){const e=document.createElement("div");e.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:400px;background:rgba(0,0,0,0.92);border:2px solid #444;padding:24px;border-radius:8px;font-family:monospace;color:#fff;z-index:30;display:none;pointer-events:auto;";const t=(p,_,x,y,v,d)=>{const A=document.createElement("div");A.style.cssText="margin-bottom:18px;";const T=document.createElement("div");T.style.cssText="margin-bottom:6px;font-size:14px;";const R=document.createElement("span");R.textContent=v.toFixed(y<1?y<.01?4:2:0),T.innerHTML=`${p}: `,T.appendChild(R),A.appendChild(T);const N=document.createElement("input");return N.type="range",N.min=String(_),N.max=String(x),N.step=String(y),N.value=String(v),N.style.cssText="width:100%;",N.addEventListener("input",()=>{const P=parseFloat(N.value);R.textContent=P.toFixed(y<1?y<.01?4:2:0),d(P)}),A.appendChild(N),A},n=document.createElement("div");n.style.cssText="font-size:20px;font-weight:bold;margin-bottom:18px;text-align:center;",n.textContent="设置",e.appendChild(n),e.appendChild(t("鼠标灵敏度",5e-4,.01,1e-4,this.settings.sensitivity,p=>{this.settings.sensitivity=p,this.onSettingsChange?.(this.settings)})),e.appendChild(t("视野角度 FOV",60,120,1,this.settings.fov,p=>{this.settings.fov=p,this.onSettingsChange?.(this.settings)})),e.appendChild(t("音量",0,1,.05,this.settings.volume,p=>{this.settings.volume=p,this.onSettingsChange?.(this.settings)})),e.appendChild(t("准星大小",2,16,1,this.settings.crosshairSize,p=>{this.settings.crosshairSize=p,this.renderCrosshair(),this.onSettingsChange?.(this.settings)}));const i=document.createElement("div");i.style.cssText="margin-bottom:18px;",i.innerHTML='<div style="margin-bottom:6px;font-size:14px;">准星颜色</div>';const r=["#00ff44","#ff0000","#00aaff","#ffff00","#ff00ff","#ffffff"],o=document.createElement("div");o.style.cssText="display:flex;gap:8px;",r.forEach(p=>{const _=document.createElement("button");_.style.cssText=`width:28px;height:28px;background:${p};border:2px solid ${this.settings.crosshairColor===p?"#fff":"#555"};border-radius:4px;cursor:pointer;`,_.addEventListener("click",()=>{this.settings.crosshairColor=p,this.renderCrosshair(),o.querySelectorAll("button").forEach(x=>x.style.borderColor="#555"),_.style.borderColor="#fff",this.onSettingsChange?.(this.settings)}),o.appendChild(_)}),i.appendChild(o),e.appendChild(i);const a=document.createElement("div");a.style.cssText="margin-bottom:18px;",a.innerHTML='<div style="margin-bottom:6px;font-size:14px;">画质</div>';const c=["low","medium","high"],h={low:"低",medium:"中",high:"高"},u=document.createElement("div");u.style.cssText="display:flex;gap:8px;",c.forEach(p=>{const _=document.createElement("button");_.textContent=h[p],_.style.cssText=`padding:6px 18px;font-family:monospace;font-size:13px;background:${this.settings.quality===p?"#00ff44":"#333"};color:${this.settings.quality===p?"#000":"#fff"};border:1px solid #555;border-radius:4px;cursor:pointer;`,_.addEventListener("click",()=>{this.settings.quality=p,u.querySelectorAll("button").forEach(x=>{x.style.background="#333",x.style.color="#fff"}),_.style.background="#00ff44",_.style.color="#000",this.onSettingsChange?.(this.settings)}),u.appendChild(_)}),a.appendChild(u),e.appendChild(a);const f=document.createElement("button");return f.textContent="关闭 (ESC)",f.style.cssText="width:100%;padding:10px;background:#333;color:#fff;border:1px solid #666;cursor:pointer;font-family:monospace;border-radius:4px;",f.addEventListener("click",()=>this.toggleSettings()),e.appendChild(f),e}toggleSettings(){this.settingsVisible=!this.settingsVisible,this.settingsPanel.style.display=this.settingsVisible?"block":"none",this.settingsVisible&&document.exitPointerLock()}get settingsOpen(){return this.settingsVisible}setHP(e){const t=Math.max(0,e);document.getElementById("hp-fill").style.width=t+"%",document.getElementById("hp-label").textContent=Math.round(t).toString()}setAmmo(e,t,n){this.ammoText.textContent=n?"RELOADING...":`${e} / ${t}`}showHitMarker(){this.hitMarker.style.opacity="1",this.hitMarkerTimer=.15}setScoped(e){this.crosshair.style.display=e?"none":"block"}update(e){this.hitMarkerTimer>0&&(this.hitMarkerTimer-=e,this.hitMarkerTimer<=0&&(this.hitMarker.style.opacity="0"))}}class xl{constructor(e){k(this,"group");k(this,"muzzleFlash");k(this,"muzzleFlashMesh");k(this,"flashTimer",0);this.group=new Kn;const t=new cn({color:2763306,roughness:.6,metalness:.8}),n=new xt(new nn(.12,.16,.6),t);n.position.set(0,0,-.3),this.group.add(n);const i=new xt(new Mo(.03,.03,.4,8),t);i.rotation.x=Math.PI/2,i.position.set(0,.02,-.6),this.group.add(i);const r=new xt(new nn(.08,.2,.1),t);r.position.set(0,-.15,-.15),r.rotation.x=.3,this.group.add(r);const o=new xt(new nn(.07,.18,.08),new cn({color:4473924}));o.position.set(0,-.18,-.25),this.group.add(o);const a=new xt(new nn(.04,.04,.08),t);a.position.set(0,.12,-.2),this.group.add(a),this.muzzleFlash=new Zm(16755200,0,5),this.muzzleFlash.position.set(0,.02,-.85),this.group.add(this.muzzleFlash),this.muzzleFlashMesh=new xt(new Zi(.1,8,8),new po({color:16763904,transparent:!0,opacity:0})),this.muzzleFlashMesh.position.set(0,.02,-.85),this.group.add(this.muzzleFlashMesh),this.group.position.set(.25,-.25,-.5),e.add(this.group)}fire(){this.flashTimer=.05,this.muzzleFlash.intensity=3,this.muzzleFlashMesh.material.opacity=1,this.group.position.z=-.4}reload(e){this.group.rotation.x=e?.5:0,this.group.position.y=e?-.4:-.25}update(e){this.flashTimer>0&&(this.flashTimer-=e,this.flashTimer<=0&&(this.muzzleFlash.intensity=0,this.muzzleFlashMesh.material.opacity=0)),this.group.position.z+=(-.5-this.group.position.z)*Math.min(1,e*15)}}function yl(s,e){const t=new cn({color:8421504,roughness:.9}),n=new xt(new nn(e.groundSize.x,.2,e.groundSize.z),t);n.position.y=-.1,n.receiveShadow=!0,n.userData.collidable=!0,s.add(n);const i={wall:new cn({color:6710886,roughness:.8}),crate:new cn({color:9132587,roughness:.7}),metal:new cn({color:4473924,roughness:.4,metalness:.6}),ground:t};for(const r of e.blocks){const o=new xt(new nn(r.size.x,r.size.y,r.size.z),i[r.material]||i.wall);o.position.set(r.position.x,r.position.y,r.position.z),o.castShadow=!0,o.receiveShadow=!0,o.userData.collidable=!0,s.add(o)}}const An={id:"de_mine",name:"De_Mine",groundSize:{x:80,z:80},blocks:[{position:{x:0,y:3,z:-40},size:{x:80,y:6,z:.5},material:"wall",penetrable:!1},{position:{x:0,y:3,z:40},size:{x:80,y:6,z:.5},material:"wall",penetrable:!1},{position:{x:-40,y:3,z:0},size:{x:.5,y:6,z:80},material:"wall",penetrable:!1},{position:{x:40,y:3,z:0},size:{x:.5,y:6,z:80},material:"wall",penetrable:!1},{position:{x:-6,y:3,z:30},size:{x:.5,y:6,z:12},material:"wall",penetrable:!1},{position:{x:6,y:3,z:30},size:{x:.5,y:6,z:12},material:"wall",penetrable:!1},{position:{x:-6,y:3,z:-30},size:{x:.5,y:6,z:12},material:"wall",penetrable:!1},{position:{x:6,y:3,z:-30},size:{x:.5,y:6,z:12},material:"wall",penetrable:!1},{position:{x:-25,y:.1,z:-25},size:{x:6,y:.2,z:6},material:"metal",penetrable:!1},{position:{x:25,y:.1,z:25},size:{x:6,y:.2,z:6},material:"metal",penetrable:!1},{position:{x:-10,y:1,z:5},size:{x:3,y:2,z:3},material:"crate",penetrable:!1},{position:{x:10,y:1,z:-5},size:{x:3,y:2,z:3},material:"crate",penetrable:!1},{position:{x:-5,y:1,z:0},size:{x:2,y:2,z:2},material:"crate",penetrable:!1},{position:{x:5,y:1,z:0},size:{x:2,y:2,z:2},material:"crate",penetrable:!1},{position:{x:0,y:1,z:25},size:{x:3,y:2,z:3},material:"crate",penetrable:!1},{position:{x:0,y:1,z:-25},size:{x:3,y:2,z:3},material:"crate",penetrable:!1},{position:{x:-25,y:1,z:-20},size:{x:3,y:2,z:3},material:"crate",penetrable:!1},{position:{x:-30,y:1,z:-25},size:{x:3,y:2,z:3},material:"crate",penetrable:!1},{position:{x:-20,y:1,z:-30},size:{x:3,y:2,z:3},material:"crate",penetrable:!1},{position:{x:25,y:1,z:20},size:{x:3,y:2,z:3},material:"crate",penetrable:!1},{position:{x:30,y:1,z:25},size:{x:3,y:2,z:3},material:"crate",penetrable:!1},{position:{x:20,y:1,z:30},size:{x:3,y:2,z:3},material:"crate",penetrable:!1},{position:{x:-15,y:1,z:15},size:{x:3,y:2,z:3},material:"crate",penetrable:!1},{position:{x:15,y:1,z:15},size:{x:3,y:2,z:3},material:"crate",penetrable:!1},{position:{x:-15,y:1,z:-15},size:{x:3,y:2,z:3},material:"crate",penetrable:!1},{position:{x:15,y:1,z:-15},size:{x:3,y:2,z:3},material:"crate",penetrable:!1}],bombSites:[{id:"A",position:{x:-25,y:0,z:-25},radius:3},{id:"B",position:{x:25,y:0,z:25},radius:3}],spawns:{ATK:[{position:{x:-2,y:0,z:35},team:"ATK"},{position:{x:0,y:0,z:35},team:"ATK"},{position:{x:2,y:0,z:35},team:"ATK"}],DEF:[{position:{x:-2,y:0,z:-35},team:"DEF"},{position:{x:0,y:0,z:-35},team:"DEF"},{position:{x:2,y:0,z:-35},team:"DEF"}]},navPoints:[{id:"n_atk_spawn",position:{x:0,y:0,z:35},neighbors:["n_atk_mid","n_a_1","n_b_1"]},{id:"n_atk_mid",position:{x:0,y:0,z:28},neighbors:["n_atk_spawn","n_mid_1"]},{id:"n_mid_1",position:{x:0,y:0,z:18},neighbors:["n_atk_mid","n_mid_2"]},{id:"n_mid_2",position:{x:0,y:0,z:8},neighbors:["n_mid_1","n_mid_3"]},{id:"n_mid_3",position:{x:0,y:0,z:-2},neighbors:["n_mid_2","n_mid_4"]},{id:"n_mid_4",position:{x:0,y:0,z:-12},neighbors:["n_mid_3","n_mid_5"]},{id:"n_mid_5",position:{x:0,y:0,z:-22},neighbors:["n_mid_4","n_def_spawn"]},{id:"n_def_spawn",position:{x:0,y:0,z:-32},neighbors:["n_mid_5","n_a_site","n_b_site"]},{id:"n_a_1",position:{x:-10,y:0,z:22},neighbors:["n_atk_spawn","n_a_2"]},{id:"n_a_2",position:{x:-18,y:0,z:12},neighbors:["n_a_1","n_a_3"]},{id:"n_a_3",position:{x:-25,y:0,z:0},neighbors:["n_a_2","n_a_4"]},{id:"n_a_4",position:{x:-25,y:0,z:-15},neighbors:["n_a_3","n_a_site"]},{id:"n_a_site",position:{x:-25,y:0,z:-25},neighbors:["n_a_4","n_def_spawn"]},{id:"n_b_1",position:{x:10,y:0,z:28},neighbors:["n_atk_spawn","n_b_2"]},{id:"n_b_2",position:{x:18,y:0,z:18},neighbors:["n_b_1","n_b_3"]},{id:"n_b_3",position:{x:25,y:0,z:8},neighbors:["n_b_2","n_b_4"]},{id:"n_b_4",position:{x:25,y:0,z:18},neighbors:["n_b_3","n_b_site"]},{id:"n_b_site",position:{x:25,y:0,z:25},neighbors:["n_b_4"]}]},Gn={kill:300,headshot:0,knife:1500,multiKill:[0,0,100,200,300,400]},wn={ATK_BOMB:3500,ATK_ELIM:3250,DEF_DEFUSE:3500,DEF_ELIM:3250,DEF_TIME:3250,lossBonus:[1400,1900,2400,2900,3400]},Ml=16e3,Hr=5,oc=15,ac=5,lc=100,lg=3,hg=7,hc=40,uc=12,Rs=16,fc=30;function ug(s,e,t){return{winner:s,reason:e,winReward:0,lossBonus:0,loserTeam:"SPECTATOR",halfTime:!1,gameOver:t}}class fg{constructor(){k(this,"state");k(this,"atkLossStreak",0);k(this,"defLossStreak",0);k(this,"atkRoundKills",0);k(this,"defRoundKills",0);k(this,"bombPlantProgress",0);k(this,"bombDefuseProgress",0);k(this,"planting",!1);k(this,"defusing",!1);k(this,"halfTimeDone",!1);k(this,"gameOver",!1);this.state={phase:"WARMUP",roundNumber:0,phaseStartTime:0,phaseDuration:Hr,atkScore:0,defScore:0,winner:null,halfTime:!1,bombPlanted:!1,bombSite:null,bombTimer:0}}getRoundState(){return{...this.state}}get buyPhaseRemaining(){if(this.state.phase!=="BUY")return 0;const e=(performance.now()-this.state.phaseStartTime)/1e3;return Math.max(0,this.state.phaseDuration-e)}get bombRemaining(){return this.state.bombPlanted?Math.max(0,this.state.bombTimer):0}get isBuyPhase(){return this.state.phase==="BUY"}get isGameOver(){return this.gameOver}update(e,t){if(this.gameOver)return;const n=(t-this.state.phaseStartTime)/1e3;switch(this.state.phase){case"WARMUP":n>=Hr&&this.startNewRound();break;case"BUY":n>=oc&&this.transitionTo("LIVE",t);break;case"LIVE":this.planting&&(this.bombPlantProgress+=e,this.bombPlantProgress>=lg&&this.plantBombComplete(t)),n>=lc&&!this.state.bombPlanted&&this.onRoundEnd("DEF","TIME");break;case"BOMB_PLANTED":if(this.state.bombTimer-=e,this.defusing&&(this.bombDefuseProgress+=e,this.bombDefuseProgress>=hg)){this.onRoundEnd("DEF","DEFUSE");return}this.state.bombTimer<=0&&this.onRoundEnd("ATK","BOMB");break;case"POST":if(n>=ac){if(this.gameOver)return;this.state.atkScore>=Rs||this.state.defScore>=Rs||this.state.roundNumber>=fc?this.gameOver=!0:this.startNewRound()}break}}startNewRound(){this.state.roundNumber++,this.state.winner=null,this.state.halfTime=!1,this.state.bombPlanted=!1,this.state.bombSite=null,this.state.bombTimer=0,this.bombPlantProgress=0,this.bombDefuseProgress=0,this.planting=!1,this.defusing=!1,this.atkRoundKills=0,this.defRoundKills=0,this.transitionTo("BUY",performance.now())}onKill(e,t,n){let i=Gn.kill;if(n==="knife"?i=Gn.knife:t&&(i+=Gn.headshot),e==="ATK"){this.atkRoundKills++;const r=Math.min(this.atkRoundKills-1,Gn.multiKill.length-1);r>=0&&(i+=Gn.multiKill[r])}else if(e==="DEF"){this.defRoundKills++;const r=Math.min(this.defRoundKills-1,Gn.multiKill.length-1);r>=0&&(i+=Gn.multiKill[r])}return Math.min(i,Ml)}onRoundEnd(e,t){if(this.state.phase==="POST"||this.gameOver)return ug(e,t,this.gameOver);e==="ATK"?(this.state.atkScore++,this.atkLossStreak=0,this.defLossStreak++):e==="DEF"&&(this.state.defScore++,this.defLossStreak=0,this.atkLossStreak++);const n=e!==null?this.computeWinReward(e,t):0,i=e==="ATK"?"DEF":e==="DEF"?"ATK":"SPECTATOR",r=i==="ATK"?this.atkLossStreak:this.defLossStreak,o=r>0?wn.lossBonus[(r-1)%wn.lossBonus.length]:0,a=!this.halfTimeDone&&(this.state.atkScore>=uc||this.state.defScore>=uc);a&&(this.halfTimeDone=!0);const c=this.state.atkScore>=Rs||this.state.defScore>=Rs||this.state.roundNumber>=fc;return this.state.winner=e,this.state.halfTime=a,this.gameOver=c,this.transitionTo("POST",performance.now()),{winner:e,reason:t,winReward:n,lossBonus:o,loserTeam:i,halfTime:a,gameOver:c}}startPlanting(e){this.state.phase==="LIVE"&&(this.state.bombPlanted||(this.planting=!0,this.state.bombSite=e))}cancelPlanting(){this.planting=!1,this.bombPlantProgress=0}startDefusing(){this.state.phase==="BOMB_PLANTED"&&(this.defusing=!0)}cancelDefusing(){this.defusing=!1,this.bombDefuseProgress=0}plantBombComplete(e){this.planting=!1,this.bombPlantProgress=0,this.state.bombPlanted=!0,this.state.bombTimer=hc,this.transitionTo("BOMB_PLANTED",e)}computeWinReward(e,t){if(e==="ATK")return t==="BOMB"?wn.ATK_BOMB:wn.ATK_ELIM;if(e==="DEF")switch(t){case"DEFUSE":return wn.DEF_DEFUSE;case"ELIM":return wn.DEF_ELIM;case"TIME":return wn.DEF_TIME;default:return wn.DEF_TIME}return 0}transitionTo(e,t){switch(this.state.phase=e,this.state.phaseStartTime=t,e){case"WARMUP":this.state.phaseDuration=Hr;break;case"BUY":this.state.phaseDuration=oc;break;case"LIVE":this.state.phaseDuration=lc;break;case"BOMB_PLANTED":this.state.phaseDuration=hc;break;case"POST":this.state.phaseDuration=ac;break}}}const dc=800,pc=650,mc=350,dg=100;class pg{constructor(){k(this,"_money",dc);k(this,"armor",0);k(this,"hasHelmet",!1)}get money(){return this._money}buyWeapon(e){const t=Yn[e].price;return this._money<t?!1:(this._money-=t,!0)}buyArmor(){return this._money<pc?!1:(this._money-=pc,this.armor=dg,!0)}buyHelmet(){return this._money<mc?!1:(this._money-=mc,this.hasHelmet=!0,!0)}addMoney(e){this._money=Math.max(0,Math.min(Ml,this._money+e))}reset(){this._money=dc,this.armor=0,this.hasHelmet=!1}}const mg=[{id:"pistol",name:"手枪",price:Yn.pistol.price,category:"pistol"},{id:"rifle",name:"步枪",price:Yn.rifle.price,category:"rifle"},{id:"sniper",name:"狙击枪",price:Yn.sniper.price,category:"sniper"},{id:"knife",name:"刀",price:Yn.knife.price,category:"knife"},{id:"grenade",name:"手雷",price:Yn.grenade.price,category:"grenade"},{id:"armor",name:"护甲",price:650,category:"armor"},{id:"helmet",name:"头盔",price:350,category:"helmet"}],gg={pistol:"手枪",rifle:"步枪",sniper:"狙击枪",knife:"近战",grenade:"投掷物",armor:"防护",helmet:"防护"};class _g{constructor(e,t){k(this,"panel");k(this,"moneyDisplay");k(this,"visible",!1);k(this,"economy");k(this,"roundSystem");k(this,"keyHandler");k(this,"onBuy");k(this,"onVisibilityChange");this.economy=e,this.roundSystem=t,this.panel=document.createElement("div"),this.panel.style.cssText=["position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","width:420px","max-height:80vh","overflow-y:auto","background:rgba(10,15,10,0.96)","border:2px solid #00ff44","padding:24px","border-radius:6px","font-family:monospace","color:#00ff44","z-index:40","display:none","pointer-events:auto","box-shadow:0 0 24px rgba(0,255,68,0.25)"].join(";"),document.body.appendChild(this.panel);const n=document.createElement("div");n.style.cssText="font-size:18px;font-weight:bold;margin-bottom:14px;text-align:center;border-bottom:1px solid #00ff44;padding-bottom:10px;",n.textContent="购买菜单 (B 关闭)",this.panel.appendChild(n),this.moneyDisplay=document.createElement("div"),this.moneyDisplay.style.cssText="font-size:16px;margin-bottom:16px;text-align:right;color:#ffff00;font-weight:bold;",this.panel.appendChild(this.moneyDisplay);const i=document.createElement("div");i.style.cssText="display:flex;flex-direction:column;gap:8px;";for(const o of mg)i.appendChild(this.createItemRow(o));this.panel.appendChild(i);const r=document.createElement("button");r.textContent="关闭 (B)",r.style.cssText=["width:100%","margin-top:16px","padding:10px","font-family:monospace","font-size:14px","background:#1a3a1a","color:#00ff44","border:1px solid #00ff44","border-radius:4px","cursor:pointer"].join(";"),r.addEventListener("click",()=>this.close()),this.panel.appendChild(r),this.keyHandler=o=>{o.code==="KeyB"&&(o.preventDefault(),this.toggle())},document.addEventListener("keydown",this.keyHandler),this.updateMoneyDisplay()}createItemRow(e){const t=document.createElement("div");t.style.cssText=["display:flex","align-items:center","justify-content:space-between","padding:10px 14px","background:rgba(0,255,68,0.05)","border:1px solid #2a5a2a","border-radius:4px","transition:background 0.15s"].join(";"),t.addEventListener("mouseenter",()=>{t.style.background="rgba(0,255,68,0.15)"}),t.addEventListener("mouseleave",()=>{t.style.background="rgba(0,255,68,0.05)"});const n=document.createElement("div");n.style.cssText="display:flex;flex-direction:column;gap:2px;";const i=document.createElement("span");i.style.cssText="font-size:14px;font-weight:bold;",i.textContent=e.name;const r=document.createElement("span");r.style.cssText="font-size:11px;color:#888;",r.textContent=gg[e.category],n.appendChild(i),n.appendChild(r),t.appendChild(n);const o=document.createElement("div");o.style.cssText="display:flex;align-items:center;gap:12px;";const a=document.createElement("span");a.style.cssText="font-size:14px;color:#ffff00;min-width:70px;text-align:right;",a.textContent=`$${e.price}`,o.appendChild(a);const c=document.createElement("button");return c.textContent="购买",c.style.cssText=["padding:6px 18px","font-family:monospace","font-size:13px","background:#1a3a1a","color:#00ff44","border:1px solid #00ff44","border-radius:3px","cursor:pointer","transition:all 0.15s"].join(";"),c.addEventListener("mouseenter",()=>{c.style.background="#00ff44",c.style.color="#000"}),c.addEventListener("mouseleave",()=>{c.style.background="#1a3a1a",c.style.color="#00ff44"}),c.addEventListener("click",()=>this.purchase(e)),o.appendChild(c),t.appendChild(o),t}purchase(e){if(!this.roundSystem.isBuyPhase)return;let t=!1;switch(e.category){case"armor":t=this.economy.buyArmor();break;case"helmet":t=this.economy.buyHelmet();break;default:t=this.economy.buyWeapon(e.id);break}t&&(this.updateMoneyDisplay(),this.onBuy?.(e.id))}updateMoneyDisplay(){this.moneyDisplay.textContent=`金钱: $${this.economy.money}`}toggle(){!this.visible&&!this.roundSystem.isBuyPhase||(this.visible?this.close():this.open())}open(){this.visible||this.roundSystem.isBuyPhase&&(this.visible=!0,this.panel.style.display="block",this.updateMoneyDisplay(),document.exitPointerLock(),this.onVisibilityChange?.(!0))}close(){this.visible&&(this.visible=!1,this.panel.style.display="none",this.onVisibilityChange?.(!1))}get isVisible(){return this.visible}refresh(){this.visible&&this.updateMoneyDisplay()}}const vg=33,gc=4.5,Hi=6,Gr=30,xg=Math.PI/3,_c=.5,yg=1,Mg=.7,Sg=3,Eg=5,Tg=30;class bg{constructor(e,t){k(this,"bots",[]);k(this,"scene");k(this,"navMap");k(this,"navPointList");k(this,"blocks");k(this,"bombPosition",null);k(this,"bombPlanted",!1);k(this,"botCounter",0);k(this,"onBotFire");k(this,"onBombPlanted");k(this,"onBombDefused");k(this,"onBotDied");this.scene=e,this.navPointList=t.navPoints,this.navMap=new Map(t.navPoints.map(n=>[n.id,n])),this.blocks=t.blocks}setBombState(e,t,n){this.bombPlanted=e,this.bombPosition=n?n.clone():null}getBombSitePosition(e){return e==="A"?new L(-25,0,-25):new L(25,0,25)}spawnBot(e,t){const n=`bot_${this.botCounter++}`,i=new Kn;i.position.copy(t);const r=new cn({color:e==="ATK"?13386820:4491519,roughness:.6}),o=new xt(new Xs(.4,1,8,16),r);o.position.y=.9,o.castShadow=!0,o.userData.botId=n,o.userData.collidable=!0,i.add(o);const a=new cn({color:e==="ATK"?16746632:8961023,roughness:.5}),c=new xt(new Zi(.25,16,12),a);c.position.y=1.7,c.castShadow=!0,c.userData.botId=n,c.userData.collidable=!0,i.add(c);const h=this.findClosestNavPoint(t),u={id:n,team:e,hp:100,currentWeapon:"rifle",position:t.clone(),velocity:new L,yaw:0,state:"IDLE",mesh:i,bodyMesh:o,headMesh:c,navTargetId:h,fireTimer:0,plantTimer:0,defuseTimer:0,lastSeenEnemyPos:null,lowHpRetreat:!1,alive:!0};return u.onHit=(f,p)=>this.handleBotHit(u,f,p),this.bots.push(u),this.scene.add(i),u}getBots(){return this.bots.filter(e=>e.alive)}getAllBots(){return this.bots}getBotsByTeam(e){return this.bots.filter(t=>t.alive&&t.team===e)}removeBot(e){const t=this.bots.find(n=>n.id===e);t&&(t.alive=!1,t.mesh.visible=!1)}reset(){for(const e of this.bots)this.scene.remove(e.mesh),e.bodyMesh.geometry.dispose(),e.bodyMesh.material.dispose(),e.headMesh.geometry.dispose(),e.headMesh.material.dispose();this.bots=[],this.botCounter=0}onHit(e,t,n){const i=this.bots.find(r=>r.id===e);i?.onHit&&i.onHit(t,n)}handleBotHit(e,t,n){if(e.alive){if(e.hp-=n?t*4:t,e.hp<=0){e.hp=0,e.alive=!1,e.mesh.visible=!1,this.onBotDied?.(e);return}e.hp<Tg&&!e.lowHpRetreat&&(e.lowHpRetreat=!0,e.state="SEARCH",e.lastSeenEnemyPos=null)}}update(e,t,n){for(const i of this.bots)i.alive&&this.updateBot(i,e,t,n)}updateBot(e,t,n,i){const r=e.team==="ATK"?"DEF":"ATK";let o=i.filter(h=>h.alive&&h.team===r);i.some(h=>h.id==="player")||e.position.distanceTo(n)<Gr&&(o=o.concat([{id:"player",position:n.clone(),team:r,alive:!0,firing:!1}]));const c=this.findVisibleEnemy(e,o);switch(e.state){case"IDLE":this.stateIdle(e,t,c);break;case"ENGAGE":this.stateEngage(e,t,c);break;case"SEARCH":this.stateSearch(e,t,c);break;case"PLANT":this.statePlant(e,t);break;case"DEFUSE":this.stateDefuse(e,t);break}e.mesh.position.copy(e.position),e.mesh.rotation.y=e.yaw}stateIdle(e,t,n){if(n){e.lastSeenEnemyPos=n.position.clone(),e.state="ENGAGE",e.fireTimer=0;return}if(e.team==="ATK"&&!this.bombPlanted){const i=this.pickNearestBombSite(e.position),r=this.getBombSitePosition(i);if(e.position.distanceTo(r)<4){e.state="PLANT",e.plantTimer=0;return}this.moveTowardsNavTarget(e,t,this.findClosestNavPoint(r),Hi);return}if(e.team==="DEF"&&this.bombPlanted&&this.bombPosition){if(e.position.distanceTo(this.bombPosition)<3){e.state="DEFUSE",e.defuseTimer=0;return}this.moveTowardsNavTarget(e,t,this.findClosestNavPoint(this.bombPosition),Hi);return}this.patrolAlongNav(e,t)}stateEngage(e,t,n){if(e.lowHpRetreat){e.state="SEARCH";return}if(!n){e.state="SEARCH";return}e.lastSeenEnemyPos=n.position.clone();const i=new L().subVectors(n.position,e.position),r=Math.atan2(i.x,i.z);e.yaw=this.lerpAngle(e.yaw,r,Math.min(1,t*8));const o=i.length();if(o>20)this.moveTowardsPosition(e,t,n.position,Hi);else if(o<6){const a=i.clone().setY(0).normalize().multiplyScalar(-1),c=e.position.clone().addScaledVector(a,5);this.moveTowardsPosition(e,t,c,gc)}e.fireTimer-=t,e.fireTimer<=0&&(e.fireTimer=_c+Math.random()*(yg-_c),this.botFire(e,n))}stateSearch(e,t,n){if(n){e.lastSeenEnemyPos=n.position.clone(),e.state="ENGAGE",e.fireTimer=0;return}if(e.lowHpRetreat){const i=this.findNearestCover(e.position);if(i){if(e.position.distanceTo(i)<1.5){e.lowHpRetreat=!1,e.state="IDLE";return}this.moveTowardsPosition(e,t,i,Hi);return}e.lowHpRetreat=!1}if(e.lastSeenEnemyPos)if(e.position.distanceTo(e.lastSeenEnemyPos)<2)e.lastSeenEnemyPos=null;else{this.moveTowardsPosition(e,t,e.lastSeenEnemyPos,Hi);return}this.patrolAlongNav(e,t)}statePlant(e,t){if(e.plantTimer+=t,e.plantTimer>=Sg){const n=this.pickNearestBombSite(e.position),i=this.getBombSitePosition(n);this.bombPlanted=!0,this.bombPosition=i.clone(),this.onBombPlanted?.(n,i),e.state="IDLE"}}stateDefuse(e,t){e.defuseTimer+=t,e.defuseTimer>=Eg&&(this.bombPlanted=!1,this.bombPosition=null,this.onBombDefused?.(),e.state="IDLE")}botFire(e,t){const n=Math.random()<Mg,i=t.position.clone();if(i.y+=1,n&&t.onHit){const r=Math.random()<.25;t.onHit(vg,r)}this.onBotFire?.(e,i,n)}patrolAlongNav(e,t){const n=this.navMap.get(e.navTargetId);if(!n)return;const i=new L(n.position.x,0,n.position.z);if(e.position.distanceTo(i)<1.5){const o=n.neighbors;if(o.length===0)return;const a=o[Math.floor(Math.random()*o.length)];e.navTargetId=a}else this.moveTowardsPosition(e,t,i,gc)}moveTowardsNavTarget(e,t,n,i){const r=this.navMap.get(n);if(!r){this.patrolAlongNav(e,t);return}const o=new L(r.position.x,0,r.position.z);if(e.position.distanceTo(o)<1.5){e.navTargetId=n,this.patrolAlongNav(e,t);return}this.moveTowardsPosition(e,t,o,i)}moveTowardsPosition(e,t,n,i){const r=new L().subVectors(n,e.position);if(r.y=0,r.length()<.1)return;r.normalize();const a=Math.atan2(r.x,r.z);e.yaw=this.lerpAngle(e.yaw,a,Math.min(1,t*6)),e.velocity.x=r.x*i,e.velocity.z=r.z*i,e.position.x+=e.velocity.x*t,e.position.z+=e.velocity.z*t,this.resolveCollisions(e)}resolveCollisions(e){for(const n of this.blocks){const i=n.position.x,r=n.position.z,o=n.size.x/2,a=n.size.z/2,c=n.position.y,h=n.size.y/2;if(c-h>1.5)continue;const u=e.position.x-i,f=e.position.z-r;if(Math.abs(u)>o+.4+1||Math.abs(f)>a+.4+1)continue;const p=o+.4-Math.abs(u),_=a+.4-Math.abs(f);p>0&&_>0&&(p<_?e.position.x+=p*Math.sign(u):e.position.z+=_*Math.sign(f))}}findClosestNavPoint(e){let t=this.navPointList[0],n=1/0;for(const i of this.navPointList){const r=(i.position.x-e.x)**2+(i.position.z-e.z)**2;r<n&&(n=r,t=i)}return t.id}findVisibleEnemy(e,t){let n=null,i=Gr;const r=new L(Math.sin(e.yaw),0,Math.cos(e.yaw));for(const o of t){const a=new L().subVectors(o.position,e.position),c=a.length();if(c>Gr||c<.01)continue;a.normalize();const h=r.dot(a),u=Math.acos(Math.max(-1,Math.min(1,h)));!o.firing&&u>xg||this.isLineBlocked(e.position,o.position)||c<i&&(i=c,n=o)}return n}isLineBlocked(e,t){const n=e.x,i=e.z,r=t.x,o=t.z,a=r-n,c=o-i;if(Math.abs(a)<1e-6&&Math.abs(c)<1e-6)return!1;const h=e.y+1,u=t.y+1;for(const f of this.blocks){if(f.size.y<.5)continue;const p=f.position.x,_=f.position.y,x=f.position.z,y=f.size.x/2,v=f.size.y/2,d=f.size.z/2;let A=-1/0,T=1/0;if(Math.abs(a)<1e-6){if(n<p-y||n>p+y)continue}else{const P=(p-y-n)/a,D=(p+y-n)/a;A=Math.max(A,Math.min(P,D)),T=Math.min(T,Math.max(P,D))}if(Math.abs(c)<1e-6){if(i<x-d||i>x+d)continue}else{const P=(x-d-i)/c,D=(x+d-i)/c;A=Math.max(A,Math.min(P,D)),T=Math.min(T,Math.max(P,D))}if(T<0||A>1||A>T)continue;const R=Math.max(0,A),N=h+R*(u-h);if(N>_-v&&N<_+v)return!0}return!1}findNearestCover(e){let t=null,n=1/0;for(const i of this.blocks){if(i.material!=="crate")continue;const r=e.x-i.position.x,o=e.z-i.position.z,a=Math.sqrt(r*r+o*o);if(a<.01)continue;const c=r/a,h=o/a,u=i.position.x-c*(i.size.x/2+.5),f=i.position.z-h*(i.size.z/2+.5),p=Math.sqrt((u-e.x)**2+(f-e.z)**2);p<n&&(n=p,t=new L(u,0,f))}return t}pickNearestBombSite(e){const t=new L(-25,0,-25),n=new L(25,0,25);return e.distanceTo(t)<e.distanceTo(n)?"A":"B"}lerpAngle(e,t,n){let i=t-e;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return e+i*n}}const vc={rifle:{noiseGain:.35,noiseDecay:.12,noiseCutoff:4e3,oscFreq:180,oscGain:.25},pistol:{noiseGain:.25,noiseDecay:.08,noiseCutoff:3e3,oscFreq:220,oscGain:.18},sniper:{noiseGain:.5,noiseDecay:.25,noiseCutoff:6e3,oscFreq:120,oscGain:.35},smg:{noiseGain:.22,noiseDecay:.06,noiseCutoff:3500,oscFreq:200,oscGain:.15}},xc={combat:[[220,261.63,329.63],[174.61,220,261.63],[130.81,164.81,196],[196,246.94,293.66]],calm:[[261.63,329.63,392],[196,246.94,293.66],[220,261.63,329.63],[174.61,220,261.63]],tension:[[146.83,174.61,220],[116.54,146.83,174.61],[130.81,164.81,196],[110,138.59,164.81]]};class wg{constructor(){k(this,"ctx");k(this,"masterGain");k(this,"noiseBuffer");k(this,"volume",.7);k(this,"suspended",!1);k(this,"bgmActive",!1);k(this,"bgmInterval",null);k(this,"bgmGain",null);k(this,"bgmChordIndex",0);const e=window,t=e.AudioContext||e.webkitAudioContext;if(!t)throw new Error("AudioContext not supported in this browser");this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.volume,this.masterGain.connect(this.ctx.destination),this.noiseBuffer=this.createNoiseBuffer(1)}createNoiseBuffer(e){const t=this.ctx.sampleRate,n=Math.floor(t*e),i=this.ctx.createBuffer(1,n,t),r=i.getChannelData(0);for(let o=0;o<n;o++)r[o]=Math.random()*2-1;return i}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.masterGain.gain.setValueAtTime(this.volume,this.ctx.currentTime)}resume(){this.suspended=!1,this.ctx.state==="suspended"&&this.ctx.resume()}suspend(){this.suspended=!0,this.ctx.suspend()}playShoot(e){if(this.suspended)return;const t=this.ctx,n=t.currentTime,i=vc[e]||vc.rifle,r=t.createBufferSource();r.buffer=this.noiseBuffer;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=i.noiseCutoff;const a=t.createGain();a.gain.setValueAtTime(i.noiseGain,n),a.gain.exponentialRampToValueAtTime(.001,n+i.noiseDecay),r.connect(o).connect(a).connect(this.masterGain),r.start(n),r.stop(n+i.noiseDecay);const c=t.createOscillator();c.type="square",c.frequency.setValueAtTime(i.oscFreq,n),c.frequency.exponentialRampToValueAtTime(i.oscFreq*.5,n+.05);const h=t.createGain();h.gain.setValueAtTime(i.oscGain,n),h.gain.exponentialRampToValueAtTime(.001,n+.08),c.connect(h).connect(this.masterGain),c.start(n),c.stop(n+.1)}playReload(){if(this.suspended)return;const e=this.ctx.currentTime;this.playClick(e,2200,.04,.12),this.playClick(e+.4,1800,.04,.15)}playClick(e,t,n,i){const r=this.ctx,o=r.createOscillator();o.type="square",o.frequency.value=t;const a=r.createGain();a.gain.setValueAtTime(i,e),a.gain.exponentialRampToValueAtTime(.001,e+n),o.connect(a).connect(this.masterGain),o.start(e),o.stop(e+n);const c=r.createBufferSource();c.buffer=this.noiseBuffer;const h=r.createBiquadFilter();h.type="bandpass",h.frequency.value=t;const u=r.createGain();u.gain.setValueAtTime(i*.5,e),u.gain.exponentialRampToValueAtTime(.001,e+n),c.connect(h).connect(u).connect(this.masterGain),c.start(e),c.stop(e+n)}playFootstep(e){if(this.suspended)return;const t=this.ctx,n=t.currentTime,i=t.createBufferSource();i.buffer=this.noiseBuffer;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=400+e*30;const o=t.createGain(),a=.04+Math.min(.12,e*.012);o.gain.setValueAtTime(a,n),o.gain.exponentialRampToValueAtTime(.001,n+.08),i.connect(r).connect(o).connect(this.masterGain),i.start(n),i.stop(n+.1)}playHit(){if(this.suspended)return;const e=this.ctx,t=e.currentTime,n=e.createBufferSource();n.buffer=this.noiseBuffer;const i=e.createBiquadFilter();i.type="bandpass",i.frequency.value=800,i.Q.value=1.5;const r=e.createGain();r.gain.setValueAtTime(.18,t),r.gain.exponentialRampToValueAtTime(.001,t+.06),n.connect(i).connect(r).connect(this.masterGain),n.start(t),n.stop(t+.08)}playExplosion(){if(this.suspended)return;const e=this.ctx,t=e.currentTime,n=e.createBufferSource();n.buffer=this.noiseBuffer;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(800,t),i.frequency.exponentialRampToValueAtTime(100,t+1);const r=e.createGain();r.gain.setValueAtTime(.5,t),r.gain.exponentialRampToValueAtTime(.001,t+1.5),n.connect(i).connect(r).connect(this.masterGain),n.start(t),n.stop(t+1.5);const o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(60,t),o.frequency.exponentialRampToValueAtTime(20,t+1);const a=e.createGain();a.gain.setValueAtTime(.4,t),a.gain.exponentialRampToValueAtTime(.001,t+1.2),o.connect(a).connect(this.masterGain),o.start(t),o.stop(t+1.3)}startBGM(e){if(this.bgmActive)return;this.bgmActive=!0,this.bgmChordIndex=0;const t=this.ctx,n=xc[e]||xc.combat,i=t.createGain();i.gain.value=.06,i.connect(this.masterGain);const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=1200,r.connect(i),this.bgmGain=i;const o=()=>{if(!this.bgmActive||!this.bgmGain)return;const a=n[this.bgmChordIndex%n.length],c=t.currentTime;for(const h of a){const u=t.createOscillator();u.type="sawtooth",u.frequency.value=h,u.connect(r),u.start(c),u.stop(c+4)}this.scheduleBass(c,a[0]/2),this.bgmChordIndex++};o(),this.bgmInterval=window.setInterval(o,4e3)}scheduleBass(e,t){const n=this.ctx,i=.5;for(let r=0;r<8;r++){const o=e+r*i,a=n.createOscillator();a.type="sine",a.frequency.value=t;const c=n.createGain();c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(.1,o+.01),c.gain.exponentialRampToValueAtTime(.001,o+.3),a.connect(c).connect(this.masterGain),a.start(o),a.stop(o+.4)}}stopBGM(){this.bgmActive=!1,this.bgmInterval!==null&&(clearInterval(this.bgmInterval),this.bgmInterval=null),this.bgmGain&&(this.bgmGain.gain.cancelScheduledValues(this.ctx.currentTime),this.bgmGain.gain.setValueAtTime(0,this.ctx.currentTime),this.bgmGain=null)}}class Ag{constructor(){k(this,"container");k(this,"canvas");k(this,"ctx2d");k(this,"size",200);k(this,"radius",100);k(this,"worldRadius",40);this.container=document.createElement("div"),this.container.style.cssText=`position:fixed;top:20px;left:20px;width:${this.size}px;height:${this.size}px;pointer-events:none;z-index:15;`,this.canvas=document.createElement("canvas"),this.canvas.width=this.size,this.canvas.height=this.size,this.canvas.style.cssText="width:100%;height:100%;display:block;",this.container.appendChild(this.canvas),document.body.appendChild(this.container);const e=this.canvas.getContext("2d");if(!e)throw new Error("Canvas 2D context unavailable");this.ctx2d=e}setVisible(e){this.container.style.display=e?"block":"none"}update(e){const t=this.ctx2d,n=this.size/2,i=this.size/2,r=this.radius/this.worldRadius;t.clearRect(0,0,this.size,this.size),t.fillStyle="rgba(0,0,0,0.6)",t.beginPath(),t.arc(n,i,this.radius,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(100,200,100,0.6)",t.lineWidth=2,t.stroke(),t.strokeStyle="rgba(100,200,100,0.3)",t.lineWidth=1,t.beginPath(),t.moveTo(n,i-this.radius),t.lineTo(n,i+this.radius),t.moveTo(n-this.radius,i),t.lineTo(n+this.radius,i),t.stroke(),t.save(),t.beginPath(),t.arc(n,i,this.radius,0,Math.PI*2),t.clip();const o=e.playerYaw,a=Math.cos(o),c=Math.sin(o),h=(u,f)=>{const p=u-e.playerPosition.x,_=f-e.playerPosition.z,x=p*a-_*c,y=-p*c-_*a,d=Math.sqrt(p*p+_*_)<=this.worldRadius,A=n+x*r,T=i-y*r;return{x:A,y:T,inRange:d}};t.font="bold 14px monospace",t.textAlign="center",t.textBaseline="middle";for(const u of e.bombSites){const f=h(u.position.x,u.position.z);f.inRange&&(t.fillStyle="rgba(255,255,255,0.7)",t.fillText(u.id,f.x,f.y))}for(const u of e.teammates){if(!u.alive)continue;const f=h(u.position.x,u.position.z);f.inRange&&(t.fillStyle="#3399ff",t.beginPath(),t.arc(f.x,f.y,4,0,Math.PI*2),t.fill())}for(const u of e.enemies){if(!u.alive||!u.visible&&!u.firing)continue;const f=h(u.position.x,u.position.z);f.inRange&&(t.fillStyle=u.firing?"#ff3333":"#cc4444",t.beginPath(),t.arc(f.x,f.y,4,0,Math.PI*2),t.fill())}if(e.bomb.planted&&e.bomb.position){const u=h(e.bomb.position.x,e.bomb.position.z);u.inRange&&(t.fillStyle="#ffcc00",t.beginPath(),t.arc(u.x,u.y,5,0,Math.PI*2),t.fill())}t.restore(),t.fillStyle="#00ff44",t.beginPath(),t.moveTo(n,i-8),t.lineTo(n-6,i+6),t.lineTo(n+6,i+6),t.closePath(),t.fill()}dispose(){this.container.parentElement&&this.container.parentElement.removeChild(this.container)}}class Rg{constructor(){k(this,"container");k(this,"visible",!1);this.container=document.createElement("div"),this.container.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:640px;background:rgba(0,0,0,0.88);border:2px solid #444;padding:20px;font-family:monospace;color:#fff;z-index:25;display:none;pointer-events:none;border-radius:6px;",document.body.appendChild(this.container),document.addEventListener("keydown",e=>{e.code==="Tab"&&(e.preventDefault(),this.show())}),document.addEventListener("keyup",e=>{e.code==="Tab"&&(e.preventDefault(),this.hide())})}show(){this.visible=!0,this.container.style.display="block"}hide(){this.visible=!1,this.container.style.display="none"}toggle(){this.visible?this.hide():this.show()}get isVisible(){return this.visible}update(e){const t=e.rows.filter(r=>r.team==="ATK"),n=e.rows.filter(r=>r.team==="DEF"),i=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;padding-bottom:12px;border-bottom:1px solid #444;"><div style="font-size:22px;font-weight:bold;color:#cc4444;">ATK ${e.atkScore}</div><div style="text-align:center;"><div style="font-size:16px;font-weight:bold;">回合 ${e.roundNumber} / ${e.maxRounds}</div><div style="font-size:12px;opacity:0.7;margin-top:2px;">${e.halfTime?"下半场":"上半场"}</div></div><div style="font-size:22px;font-weight:bold;color:#4488ff;">${e.defScore} DEF</div></div>`;this.container.innerHTML=i+this.renderTeamTable("ATK",t)+this.renderTeamTable("DEF",n)}renderTeamTable(e,t){const n=e==="ATK"?"#cc4444":"#4488ff",i='<tr style="border-bottom:1px solid #555;color:#999;font-size:11px;"><th style="text-align:left;padding:6px 14px;">玩家</th><th style="padding:6px 14px;">K</th><th style="padding:6px 14px;">D</th><th style="padding:6px 14px;">HS</th><th style="padding:6px 14px;">$</th><th style="padding:6px 14px;">HP</th></tr>',r=t.map(o=>{const a=o.alive?o.hp>50?"#00ff44":o.hp>25?"#ffaa00":"#ff4444":"#666";return`<tr style="opacity:${o.alive?"1":"0.45"};"><td style="padding:6px 14px;">${o.name}</td><td style="padding:6px 14px;text-align:center;">${o.kills}</td><td style="padding:6px 14px;text-align:center;">${o.deaths}</td><td style="padding:6px 14px;text-align:center;">${o.headshots}</td><td style="padding:6px 14px;text-align:center;">$${o.money}</td><td style="padding:6px 14px;text-align:center;color:${a};">${o.alive?Math.round(o.hp):"DEAD"}</td></tr>`}).join("");return`<table style="width:100%;border-collapse:collapse;margin-bottom:14px;"><thead><tr><th colspan="6" style="text-align:center;padding:8px;color:${n};font-size:14px;font-weight:bold;letter-spacing:2px;">${e}</th></tr>${i}</thead><tbody>${r}</tbody></table>`}dispose(){this.container.parentElement&&this.container.parentElement.removeChild(this.container)}}const Cg="ATK",yc=4,Pg=30,Lg=.05;class Mc{constructor(e){k(this,"renderer");k(this,"input");k(this,"player");k(this,"weapon");k(this,"bullets");k(this,"ui");k(this,"weaponView");k(this,"roundSystem");k(this,"economy");k(this,"buyMenu");k(this,"aiSystem");k(this,"audio");k(this,"radar");k(this,"scoreboard");k(this,"clock",new dl);k(this,"running",!1);k(this,"playerHP",100);k(this,"playerAlive",!0);k(this,"playerInvuln",0);k(this,"playerKills",0);k(this,"playerDeaths",0);k(this,"playerHeadshots",0);k(this,"playerTeam",Cg);k(this,"fovSetting",90);k(this,"wasScoped",!1);k(this,"footstepDistance",0);k(this,"planting",!1);k(this,"defusing",!1);k(this,"buyMenuPaused",!1);k(this,"tracerLines",[]);k(this,"botTracerLines",[]);k(this,"botTargets",new Map);k(this,"playerOnHit");k(this,"radarVisible",!0);k(this,"prevPhase","WARMUP");k(this,"spectatorTarget",null);k(this,"freeSpectatorPos",new L);k(this,"freeSpectatorInit",!1);k(this,"loop",()=>{if(!this.running)return;if(this.ui.settingsOpen||this.buyMenuPaused){this.renderer.render(),requestAnimationFrame(this.loop);return}requestAnimationFrame(this.loop);const e=Math.min(this.clock.getDelta(),.05),t=performance.now(),n=this.input.getInput();if(this.updateRoundFlow(e,t),this.playerAlive){this.player.update(e,n,this.input.yaw,this.input.pitch);const c=this.input.yaw+this.weapon.recoilYawOffset,h=this.input.pitch-this.weapon.recoilPitchOffset,u=this.player.getEyePosition(),f=new L(Math.cos(c),0,-Math.sin(c));u.add(f.multiplyScalar(this.player.bobOffsetX)),u.y+=this.player.bobOffsetY,this.renderer.camera.position.copy(u),this.renderer.camera.rotation.y=c,this.renderer.camera.rotation.x=h,n.scope&&!this.wasScoped&&this.weapon.toggleScope(),this.wasScoped=n.scope;const p=this.weapon.getCurrent();this.ui.setScoped(p.scoped);const _=p.scoped?90/p.config.scopeZoom:this.fovSetting,x=this.renderer.camera.fov;if(this.renderer.setFOV(x+(_-x)*Math.min(1,e*10)),this.weapon.update(t,e),this.weaponView.update(e),n.fire){const y=n.forward||n.back||n.left||n.right,v=!this.player.onGround;this.weapon.tryFire(t,y,v)&&this.fireWeapon()}this.input.consumeKey("Digit1")&&this.weapon.switchWeapon("rifle"),this.input.consumeKey("Digit2")&&this.weapon.switchWeapon("pistol"),this.input.consumeKey("Digit3")&&this.weapon.switchWeapon("sniper"),this.input.consumeKey("Digit4")&&this.weapon.switchWeapon("knife"),n.reload&&this.weapon.reload(),this.updateBombInteraction(),this.updateFootstep(e)}else this.updateSpectatorCamera(e),this.weaponView.update(e),this.input.consumeKey("KeyC")&&this.cycleSpectatorTarget();const i=this.player.position,o=this.aiSystem.getAllBots().filter(c=>c.alive).map(c=>({id:c.id,position:c.position.clone(),team:c.team,alive:c.alive,firing:c.fireTimer>.4,onHit:this.playerTeam!==c.team?this.playerOnHit:void 0}));this.aiSystem.update(e,i,o),this.playerInvuln>0&&(this.playerInvuln-=e);const a=this.weapon.ammoInfo;this.ui.setAmmo(a.inMag,a.reserve,a.reloading),this.ui.setHP(this.playerHP),this.ui.update(e),this.weaponView.reload(a.reloading),this.bullets.update(e),this.updateTracers(),this.updateBotTracers(),this.radarVisible&&this.updateRadar(),this.updateScoreboard(),this.handleVisibilityChange(),this.renderer.render()});this.renderer=new pl(e),this.input=new ml(e),this.player=new cg,this.weapon=new gl,this.bullets=new _l(this.renderer.scene),this.ui=new vl,this.weaponView=new xl(this.renderer.camera),this.roundSystem=new fg,this.economy=new pg,this.buyMenu=new _g(this.economy,this.roundSystem),this.aiSystem=new bg(this.renderer.scene,An),this.audio=new wg,this.radar=new Ag,this.scoreboard=new Rg,this.ui.onSettingsChange=t=>{this.input.sensitivity=t.sensitivity,this.fovSetting=t.fov,this.audio.setVolume(t.volume),this.renderer.setQuality(t.quality)},this.input.sensitivity=this.ui.settings.sensitivity,this.fovSetting=this.ui.settings.fov,this.audio.setVolume(this.ui.settings.volume),this.renderer.setQuality(this.ui.settings.quality),this.setupCallbacks(),this.setup()}setupCallbacks(){this.aiSystem.onBotDied=e=>this.handleBotDeath(e),this.aiSystem.onBotFire=(e,t,n)=>{this.audio.playShoot(e.currentWeapon);const i=e.position.clone();i.y+=1.2;const r=t.clone(),o=new zt().setFromPoints([i,r]),a=new ks({color:16733440,transparent:!0,opacity:.8}),c=new so(o,a);this.renderer.scene.add(c),this.botTracerLines.push(c)},this.aiSystem.onBombPlanted=(e,t)=>{this.roundSystem.startPlanting(e)},this.aiSystem.onBombDefused=()=>{this.roundSystem.startDefusing()},this.buyMenu.onBuy=e=>{["pistol","rifle","sniper","knife","grenade"].includes(e)&&(this.weapon.addWeapon(e),this.weapon.switchWeapon(e),this.audio.playReload())},this.buyMenu.onVisibilityChange=e=>{this.buyMenuPaused=e,e?this.audio.suspend():this.audio.resume()}}setup(){yl(this.renderer.scene,An),this.player.setMap(An.blocks);const e=An.spawns.ATK[0].position;this.player.position.set(e.x,1.8,e.z),this.playerOnHit=(n,i)=>{if(!this.playerAlive||this.playerInvuln>0)return;const r=i?n*2:n;this.playerHP=Math.max(0,this.playerHP-r),this.audio.playHit(),this.playerInvuln=Lg,this.playerHP<=0&&this.handlePlayerDeath()},this.audio.startBGM("combat");const t=()=>{this.audio.resume(),document.removeEventListener("click",t)};document.addEventListener("click",t)}updateRoundFlow(e,t){if(this.roundSystem.isGameOver)return;this.roundSystem.update(e,t);const n=this.roundSystem.getRoundState();n.phase!==this.prevPhase&&(this.onPhaseChange(this.prevPhase,n.phase),this.prevPhase=n.phase);const i=n.bombSite?new L(n.bombSite==="A"?-25:25,0,n.bombSite==="A"?-25:25):null;this.aiSystem.setBombState(n.bombPlanted,n.bombSite,i),this.buyMenu.isVisible&&this.buyMenu.refresh()}onPhaseChange(e,t){t==="BUY"&&(this.resetRound(),this.spawnBots(),this.economy.reset(),this.economy.addMoney(800)),t==="LIVE"&&this.buyMenu.isVisible&&this.buyMenu.close()}resetRound(){const e=An.spawns.ATK[0].position;this.player.position.set(e.x,1.8,e.z),this.player.velocity.set(0,0,0),this.playerHP=100,this.playerAlive=!0,this.playerInvuln=0,this.planting=!1,this.defusing=!1,this.spectatorTarget=null,this.freeSpectatorInit=!1,this.weapon.addWeapon("rifle"),this.weapon.switchWeapon("rifle")}spawnBots(){this.aiSystem.reset(),this.botTargets.clear();const e=An.spawns.ATK;for(let n=1;n<=yc;n++){const i=e[n%e.length].position;this.aiSystem.spawnBot("ATK",new L(i.x+n*.5,0,i.z))}const t=An.spawns.DEF;for(let n=0;n<yc;n++){const i=t[n%t.length].position,r=this.aiSystem.spawnBot("DEF",new L(i.x+n*.5,0,i.z)),o={id:r.id,mesh:r.mesh,hp:100,headMesh:r.headMesh,onHit:(a,c)=>{r.onHit&&r.onHit(a,c)}};this.botTargets.set(r.id,o),this.bullets.registerTarget(o)}}handlePlayerDeath(){this.playerAlive=!1,this.playerDeaths++,this.audio.playHit(),document.exitPointerLock()}cycleSpectatorTarget(){const e=this.aiSystem.getAllBots().filter(n=>n.alive&&n.team===this.playerTeam);if(e.length===0){this.spectatorTarget=null;return}if(!this.spectatorTarget||!this.spectatorTarget.alive){this.spectatorTarget=e[0];return}const t=e.indexOf(this.spectatorTarget);this.spectatorTarget=e[(t+1)%e.length]}updateSpectatorCamera(e){const t=this.input.yaw,n=this.spectatorTarget;if(n&&n.alive){const i=new L(Math.sin(t)*4,2.5,Math.cos(t)*4),r=new L().copy(n.position).add(i);this.renderer.camera.position.lerp(r,Math.min(1,e*8)),this.renderer.camera.lookAt(n.position.x,n.position.y+1,n.position.z)}else this.updateFreeSpectator(e)}updateFreeSpectator(e){this.freeSpectatorInit||(this.freeSpectatorPos.copy(this.player.position),this.freeSpectatorInit=!0);const t=this.input.yaw,n=new L(-Math.sin(t),0,-Math.cos(t)),i=new L(Math.cos(t),0,-Math.sin(t)),r=15,o=this.input.getInput();o.forward&&this.freeSpectatorPos.addScaledVector(n,r*e),o.back&&this.freeSpectatorPos.addScaledVector(n,-r*e),o.right&&this.freeSpectatorPos.addScaledVector(i,r*e),o.left&&this.freeSpectatorPos.addScaledVector(i,-r*e),o.jump&&(this.freeSpectatorPos.y+=r*e),o.crouch&&(this.freeSpectatorPos.y-=r*e),this.renderer.camera.position.copy(this.freeSpectatorPos),this.renderer.camera.rotation.y=t,this.renderer.camera.rotation.x=this.input.pitch}handleBotDeath(e){if(this.bullets.unregisterTarget(e.id),this.botTargets.delete(e.id),e.team==="DEF"){const t=this.roundSystem.onKill("ATK",!1,"rifle");this.economy.addMoney(t),this.playerKills++}}updateBombInteraction(){if(!this.playerAlive)return;const e=this.roundSystem.getRoundState(),t=this.player.position;if(this.playerTeam==="ATK"&&e.phase==="LIVE"&&!e.bombPlanted){const n=this.getNearbyBombSite(t,4),i=this.input.consumeKey("KeyE");i&&n?(this.planting=!0,this.roundSystem.startPlanting(n)):!i&&this.planting&&(this.planting=!1,this.roundSystem.cancelPlanting())}if(this.playerTeam==="DEF"&&e.phase==="BOMB_PLANTED"&&e.bombSite){const n=e.bombSite==="A"?new L(-25,0,-25):new L(25,0,25),i=t.distanceTo(n),r=this.input.consumeKey("KeyE");r&&i<4?(this.defusing=!0,this.roundSystem.startDefusing()):!r&&this.defusing&&(this.defusing=!1,this.roundSystem.cancelDefusing())}}getNearbyBombSite(e,t){const n=new L(-25,0,-25),i=new L(25,0,25);return e.distanceTo(n)<t?"A":e.distanceTo(i)<t?"B":null}updateRadar(){const e=this.roundSystem.getRoundState(),t=[],n=[];for(const o of this.aiSystem.getAllBots()){if(!o.alive)continue;const a={id:o.id,position:o.position.clone(),team:o.team,alive:o.alive,firing:o.fireTimer>.4};o.team===this.playerTeam?n.push(a):t.push(a)}const i=this.player.position,r=e.bombSite?e.bombSite==="A"?{x:-25,y:0,z:-25}:{x:25,y:0,z:25}:null;this.radar.update({playerPosition:{x:i.x,y:i.y,z:i.z},playerYaw:this.input.yaw,enemies:t.map(o=>({position:{x:o.position.x,y:o.position.y,z:o.position.z},alive:o.alive,firing:o.firing,visible:this.isPlayerVisibleToBot(o.position)})),teammates:n.map(o=>({position:{x:o.position.x,y:o.position.y,z:o.position.z},alive:o.alive})),bomb:{planted:e.bombPlanted,position:r},bombSites:[{id:"A",position:{x:-25,y:0,z:-25}},{id:"B",position:{x:25,y:0,z:25}}]})}isPlayerVisibleToBot(e){const t=new L().subVectors(e,this.player.position);return t.length()>40?!1:(t.normalize(),new L(-Math.sin(this.input.yaw),0,-Math.cos(this.input.yaw)).dot(t)>.5)}updateScoreboard(){const e=this.roundSystem.getRoundState(),t=[];t.push({name:"YOU",team:this.playerTeam,kills:this.playerKills,deaths:this.playerDeaths,headshots:this.playerHeadshots,money:this.economy.money,hp:this.playerHP,alive:this.playerAlive});for(const i of this.aiSystem.getAllBots())t.push({name:i.id.replace("bot_","Bot"),team:i.team,kills:0,deaths:i.alive?0:1,headshots:0,money:0,hp:i.hp,alive:i.alive});const n={rows:t,atkScore:e.atkScore,defScore:e.defScore,roundNumber:e.roundNumber,halfTime:e.halfTime,maxRounds:Pg};this.scoreboard.update(n)}start(){this.running=!0,this.clock.start(),this.loop()}fireWeapon(){const e=this.weapon.getCurrent(),t=this.renderer.camera.position.clone(),n=new L;this.renderer.camera.getWorldDirection(n);const i=this.weapon.getSpread();n.x+=(Math.random()-.5)*i,n.y+=(Math.random()-.5)*i,n.z+=(Math.random()-.5)*i,n.normalize(),this.bullets.fire(t,n,e),this.weaponView.fire(),this.audio.playShoot(e.config.id)}updateFootstep(e){const t=Math.sqrt(this.player.velocity.x**2+this.player.velocity.z**2);!this.player.onGround||t<.5||(this.footstepDistance+=t*e,this.footstepDistance>2.5&&(this.footstepDistance=0,this.audio.playFootstep(t)))}updateTracers(){this.tracerLines.forEach(e=>this.renderer.scene.remove(e)),this.tracerLines=[];for(const e of this.bullets.tracers){const t=new zt().setFromPoints([e.from,e.to]),n=new ks({color:16776960,transparent:!0,opacity:e.life*10}),i=new so(t,n);this.renderer.scene.add(i),this.tracerLines.push(i)}}updateBotTracers(){performance.now(),this.botTracerLines=this.botTracerLines.filter(e=>{const t=e.material;return t.opacity<.05?(this.renderer.scene.remove(e),!1):(t.opacity*=.85,!0)})}handleVisibilityChange(){document.onvisibilitychange=()=>{document.hidden?this.audio.suspend():this.audio.resume()}}}var pt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dg(s){if(s.__esModule)return s;var e=s.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(s).forEach(function(n){var i=Object.getOwnPropertyDescriptor(s,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return s[n]}})}),t}var Sl={};ArrayBuffer.isView||(ArrayBuffer.isView=s=>s!==null&&typeof s=="object"&&s.buffer instanceof ArrayBuffer);typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);var Ri={},qs={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.ServerError=s.CloseCode=void 0,function(t){t[t.CONSENTED=4e3]="CONSENTED",t[t.DEVMODE_RESTART=4010]="DEVMODE_RESTART"}(s.CloseCode||(s.CloseCode={}));class e extends Error{constructor(n,i){super(i),this.name="ServerError",this.code=n}}s.ServerError=e})(qs);var Qi={},Ci={};Object.defineProperty(Ci,"__esModule",{value:!0});Ci.decode=Ci.encode=void 0;function Ui(s,e){if(this._offset=e,s instanceof ArrayBuffer)this._buffer=s,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(s))this._buffer=s.buffer,this._view=new DataView(this._buffer,s.byteOffset,s.byteLength);else throw new Error("Invalid argument")}function Ig(s,e,t){for(var n="",i=0,r=e,o=e+t;r<o;r++){var a=s.getUint8(r);if(!(a&128)){n+=String.fromCharCode(a);continue}if((a&224)===192){n+=String.fromCharCode((a&31)<<6|s.getUint8(++r)&63);continue}if((a&240)===224){n+=String.fromCharCode((a&15)<<12|(s.getUint8(++r)&63)<<6|(s.getUint8(++r)&63)<<0);continue}if((a&248)===240){i=(a&7)<<18|(s.getUint8(++r)&63)<<12|(s.getUint8(++r)&63)<<6|(s.getUint8(++r)&63)<<0,i>=65536?(i-=65536,n+=String.fromCharCode((i>>>10)+55296,(i&1023)+56320)):n+=String.fromCharCode(i);continue}throw new Error("Invalid byte "+a.toString(16))}return n}Ui.prototype._array=function(s){for(var e=new Array(s),t=0;t<s;t++)e[t]=this._parse();return e};Ui.prototype._map=function(s){for(var e="",t={},n=0;n<s;n++)e=this._parse(),t[e]=this._parse();return t};Ui.prototype._str=function(s){var e=Ig(this._view,this._offset,s);return this._offset+=s,e};Ui.prototype._bin=function(s){var e=this._buffer.slice(this._offset,this._offset+s);return this._offset+=s,e};Ui.prototype._parse=function(){var s=this._view.getUint8(this._offset++),e,t=0,n=0,i=0,r=0;if(s<192)return s<128?s:s<144?this._map(s&15):s<160?this._array(s&15):this._str(s&31);if(s>223)return(255-s+1)*-1;switch(s){case 192:return null;case 194:return!1;case 195:return!0;case 196:return t=this._view.getUint8(this._offset),this._offset+=1,this._bin(t);case 197:return t=this._view.getUint16(this._offset),this._offset+=2,this._bin(t);case 198:return t=this._view.getUint32(this._offset),this._offset+=4,this._bin(t);case 199:if(t=this._view.getUint8(this._offset),n=this._view.getInt8(this._offset+1),this._offset+=2,n===-1){var o=this._view.getUint32(this._offset);return i=this._view.getInt32(this._offset+4),r=this._view.getUint32(this._offset+8),this._offset+=12,new Date((i*4294967296+r)*1e3+o/1e6)}return[n,this._bin(t)];case 200:return t=this._view.getUint16(this._offset),n=this._view.getInt8(this._offset+2),this._offset+=3,[n,this._bin(t)];case 201:return t=this._view.getUint32(this._offset),n=this._view.getInt8(this._offset+4),this._offset+=5,[n,this._bin(t)];case 202:return e=this._view.getFloat32(this._offset),this._offset+=4,e;case 203:return e=this._view.getFloat64(this._offset),this._offset+=8,e;case 204:return e=this._view.getUint8(this._offset),this._offset+=1,e;case 205:return e=this._view.getUint16(this._offset),this._offset+=2,e;case 206:return e=this._view.getUint32(this._offset),this._offset+=4,e;case 207:return i=this._view.getUint32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,i+r;case 208:return e=this._view.getInt8(this._offset),this._offset+=1,e;case 209:return e=this._view.getInt16(this._offset),this._offset+=2,e;case 210:return e=this._view.getInt32(this._offset),this._offset+=4,e;case 211:return i=this._view.getInt32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,i+r;case 212:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0){this._offset+=1;return}return[n,this._bin(1)];case 213:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(2)];case 214:return n=this._view.getInt8(this._offset),this._offset+=1,n===-1?(e=this._view.getUint32(this._offset),this._offset+=4,new Date(e*1e3)):[n,this._bin(4)];case 215:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0)return i=this._view.getInt32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,new Date(i+r);if(n===-1){i=this._view.getUint32(this._offset),r=this._view.getUint32(this._offset+4),this._offset+=8;var a=(i&3)*4294967296+r;return new Date(a*1e3+(i>>>2)/1e6)}return[n,this._bin(8)];case 216:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(16)];case 217:return t=this._view.getUint8(this._offset),this._offset+=1,this._str(t);case 218:return t=this._view.getUint16(this._offset),this._offset+=2,this._str(t);case 219:return t=this._view.getUint32(this._offset),this._offset+=4,this._str(t);case 220:return t=this._view.getUint16(this._offset),this._offset+=2,this._array(t);case 221:return t=this._view.getUint32(this._offset),this._offset+=4,this._array(t);case 222:return t=this._view.getUint16(this._offset),this._offset+=2,this._map(t);case 223:return t=this._view.getUint32(this._offset),this._offset+=4,this._map(t)}throw new Error("Could not parse")};function Ug(s,e=0){var t=new Ui(s,e),n=t._parse();if(t._offset!==s.byteLength)throw new Error(s.byteLength-t._offset+" trailing bytes");return n}Ci.decode=Ug;var Og=4294967296-1,Ng=17179869184-1;function Fg(s,e,t){for(var n=0,i=0,r=t.length;i<r;i++)n=t.charCodeAt(i),n<128?s.setUint8(e++,n):n<2048?(s.setUint8(e++,192|n>>6),s.setUint8(e++,128|n&63)):n<55296||n>=57344?(s.setUint8(e++,224|n>>12),s.setUint8(e++,128|n>>6&63),s.setUint8(e++,128|n&63)):(i++,n=65536+((n&1023)<<10|t.charCodeAt(i)&1023),s.setUint8(e++,240|n>>18),s.setUint8(e++,128|n>>12&63),s.setUint8(e++,128|n>>6&63),s.setUint8(e++,128|n&63))}function zg(s){for(var e=0,t=0,n=0,i=s.length;n<i;n++)e=s.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function xi(s,e,t){var n=typeof t,i=0,r=0,o=0,a=0,c=0,h=0;if(n==="string"){if(c=zg(t),c<32)s.push(c|160),h=1;else if(c<256)s.push(217,c),h=2;else if(c<65536)s.push(218,c>>8,c),h=3;else if(c<4294967296)s.push(219,c>>24,c>>16,c>>8,c),h=5;else throw new Error("String too long");return e.push({_str:t,_length:c,_offset:s.length}),h+c}if(n==="number")return Math.floor(t)!==t||!isFinite(t)?(s.push(203),e.push({_float:t,_length:8,_offset:s.length}),9):t>=0?t<128?(s.push(t),1):t<256?(s.push(204,t),2):t<65536?(s.push(205,t>>8,t),3):t<4294967296?(s.push(206,t>>24,t>>16,t>>8,t),5):(o=t/Math.pow(2,32)>>0,a=t>>>0,s.push(207,o>>24,o>>16,o>>8,o,a>>24,a>>16,a>>8,a),9):t>=-32?(s.push(t),1):t>=-128?(s.push(208,t),2):t>=-32768?(s.push(209,t>>8,t),3):t>=-2147483648?(s.push(210,t>>24,t>>16,t>>8,t),5):(o=Math.floor(t/Math.pow(2,32)),a=t>>>0,s.push(211,o>>24,o>>16,o>>8,o,a>>24,a>>16,a>>8,a),9);if(n==="object"){if(t===null)return s.push(192),1;if(Array.isArray(t)){if(c=t.length,c<16)s.push(c|144),h=1;else if(c<65536)s.push(220,c>>8,c),h=3;else if(c<4294967296)s.push(221,c>>24,c>>16,c>>8,c),h=5;else throw new Error("Array too large");for(i=0;i<c;i++)h+=xi(s,e,t[i]);return h}if(t instanceof Date){var u=t.getTime(),f=Math.floor(u/1e3),p=(u-f*1e3)*1e6;return f>=0&&p>=0&&f<=Ng?p===0&&f<=Og?(s.push(214,255,f>>24,f>>16,f>>8,f),6):(o=f/4294967296,a=f&4294967295,s.push(215,255,p>>22,p>>14,p>>6,o,a>>24,a>>16,a>>8,a),10):(o=Math.floor(f/4294967296),a=f>>>0,s.push(199,12,255,p>>24,p>>16,p>>8,p,o>>24,o>>16,o>>8,o,a>>24,a>>16,a>>8,a),15)}if(t instanceof ArrayBuffer){if(c=t.byteLength,c<256)s.push(196,c),h=2;else if(c<65536)s.push(197,c>>8,c),h=3;else if(c<4294967296)s.push(198,c>>24,c>>16,c>>8,c),h=5;else throw new Error("Buffer too large");return e.push({_bin:t,_length:c,_offset:s.length}),h+c}if(typeof t.toJSON=="function")return xi(s,e,t.toJSON());var _=[],x="",y=Object.keys(t);for(i=0,r=y.length;i<r;i++)x=y[i],t[x]!==void 0&&typeof t[x]!="function"&&_.push(x);if(c=_.length,c<16)s.push(c|128),h=1;else if(c<65536)s.push(222,c>>8,c),h=3;else if(c<4294967296)s.push(223,c>>24,c>>16,c>>8,c),h=5;else throw new Error("Object too large");for(i=0;i<c;i++)x=_[i],h+=xi(s,e,x),h+=xi(s,e,t[x]);return h}if(n==="boolean")return s.push(t?195:194),1;if(n==="undefined")return s.push(192),1;if(typeof t.toJSON=="function")return xi(s,e,t.toJSON());throw new Error("Could not encode")}function Bg(s){var e=[],t=[],n=xi(e,t,s),i=new ArrayBuffer(n),r=new DataView(i),o=0,a=0,c=-1;t.length>0&&(c=t[0]._offset);for(var h,u=0,f=0,p=0,_=e.length;p<_;p++)if(r.setUint8(a+p,e[p]),p+1===c){if(h=t[o],u=h._length,f=a+c,h._bin)for(var x=new Uint8Array(h._bin),y=0;y<u;y++)r.setUint8(f+y,x[y]);else h._str?Fg(r,f,h._str):h._float!==void 0&&r.setFloat64(f,h._float);o++,a+=u,t[o]&&(c=t[o]._offset)}return i}Ci.encode=Bg;var Ys={},Ks={},kg=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")},Hg=pt&&pt.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ks,"__esModule",{value:!0});Ks.WebSocketTransport=void 0;const Gg=Hg(kg),Vr=globalThis.WebSocket||Gg.default;class Vg{constructor(e){this.events=e}send(e){e instanceof ArrayBuffer?this.ws.send(e):Array.isArray(e)&&this.ws.send(new Uint8Array(e).buffer)}connect(e,t){try{this.ws=new Vr(e,{headers:t,protocols:this.protocols})}catch{this.ws=new Vr(e,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(e,t){this.ws.close(e,t)}get isOpen(){return this.ws.readyState===Vr.OPEN}}Ks.WebSocketTransport=Vg;Object.defineProperty(Ys,"__esModule",{value:!0});Ys.Connection=void 0;const Wg=Ks;class $g{constructor(){this.events={},this.transport=new Wg.WebSocketTransport(this.events)}send(e){this.transport.send(e)}connect(e,t){this.transport.connect(e,t)}close(e,t){this.transport.close(e,t)}get isOpen(){return this.transport.isOpen}}Ys.Connection=$g;var Eo={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.utf8Length=s.utf8Read=s.ErrorCode=s.Protocol=void 0,function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"}(s.Protocol||(s.Protocol={})),function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"}(s.ErrorCode||(s.ErrorCode={}));function e(n,i){const r=n[i++];for(var o="",a=0,c=i,h=i+r;c<h;c++){var u=n[c];if(!(u&128)){o+=String.fromCharCode(u);continue}if((u&224)===192){o+=String.fromCharCode((u&31)<<6|n[++c]&63);continue}if((u&240)===224){o+=String.fromCharCode((u&15)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0);continue}if((u&248)===240){a=(u&7)<<18|(n[++c]&63)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0,a>=65536?(a-=65536,o+=String.fromCharCode((a>>>10)+55296,(a&1023)+56320)):o+=String.fromCharCode(a);continue}throw new Error("Invalid byte "+u.toString(16))}return o}s.utf8Read=e;function t(n=""){let i=0,r=0;for(let o=0,a=n.length;o<a;o++)i=n.charCodeAt(o),i<128?r+=1:i<2048?r+=2:i<55296||i>=57344?r+=3:(o++,r+=4);return r+1}s.utf8Length=t})(Eo);var ti={};Object.defineProperty(ti,"__esModule",{value:!0});ti.getSerializer=ti.registerSerializer=void 0;const El={};function Xg(s,e){El[s]=e}ti.registerSerializer=Xg;function qg(s){const e=El[s];if(!e)throw new Error("missing serializer: "+s);return e}ti.getSerializer=qg;var es={};Object.defineProperty(es,"__esModule",{value:!0});es.createNanoEvents=void 0;const Yg=()=>({emit(s,...e){let t=this.events[s]||[];for(let n=0,i=t.length;n<i;n++)t[n](...e)},events:{},on(s,e){var t;return!((t=this.events[s])===null||t===void 0)&&t.push(e)||(this.events[s]=[e]),()=>{var n;this.events[s]=(n=this.events[s])===null||n===void 0?void 0:n.filter(i=>e!==i)}}});es.createNanoEvents=Yg;var Pi={};Object.defineProperty(Pi,"__esModule",{value:!0});Pi.createSignal=Pi.EventEmitter=void 0;class Tl{constructor(){this.handlers=[]}register(e,t=!1){return this.handlers.push(e),this}invoke(...e){this.handlers.forEach(t=>t.apply(this,e))}invokeAsync(...e){return Promise.all(this.handlers.map(t=>t.apply(this,e)))}remove(e){const t=this.handlers.indexOf(e);this.handlers[t]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}Pi.EventEmitter=Tl;function Kg(){const s=new Tl;function e(t){return s.register(t,this===null)}return e.once=t=>{const n=function(...i){t.apply(this,i),s.remove(n)};s.register(n)},e.remove=t=>s.remove(t),e.invoke=(...t)=>s.invoke(...t),e.invokeAsync=(...t)=>s.invokeAsync(...t),e.clear=()=>s.clear(),e}Pi.createSignal=Kg;var oo={exports:{}};(function(s,e){(function(t,n){n(e)})(pt,function(t){var n=function(m,l){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,M){g.__proto__=M}||function(g,M){for(var z in M)Object.prototype.hasOwnProperty.call(M,z)&&(g[z]=M[z])},n(m,l)};function i(m,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");n(m,l);function g(){this.constructor=m}m.prototype=l===null?Object.create(l):(g.prototype=l.prototype,new g)}function r(m,l,g,M){var z=arguments.length,J=z<3?l:M,Pe;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")J=Reflect.decorate(m,l,g,M);else for(var Ee=m.length-1;Ee>=0;Ee--)(Pe=m[Ee])&&(J=(z<3?Pe(J):z>3?Pe(l,g,J):Pe(l,g))||J);return z>3&&J&&Object.defineProperty(l,g,J),J}function o(m,l,g){if(arguments.length===2)for(var M=0,z=l.length,J;M<z;M++)(J||!(M in l))&&(J||(J=Array.prototype.slice.call(l,0,M)),J[M]=l[M]);return m.concat(J||Array.prototype.slice.call(l))}typeof SuppressedError=="function"&&SuppressedError;var a=255,c=213;t.OPERATION=void 0,function(m){m[m.ADD=128]="ADD",m[m.REPLACE=0]="REPLACE",m[m.DELETE=64]="DELETE",m[m.DELETE_AND_ADD=192]="DELETE_AND_ADD",m[m.TOUCH=1]="TOUCH",m[m.CLEAR=10]="CLEAR"}(t.OPERATION||(t.OPERATION={}));var h=function(){function m(l,g,M){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=l,this.setParent(g,M)}return m.prototype.setParent=function(l,g,M){var z=this;if(this.indexes||(this.indexes=this.ref instanceof it?this.ref._definition.indexes:{}),this.parent=l,this.parentIndex=M,!!g)if(this.root=g,this.ref instanceof it){var J=this.ref._definition;for(var Pe in J.schema){var Ee=this.ref[Pe];if(Ee&&Ee.$changes){var Je=J.indexes[Pe];Ee.$changes.setParent(this.ref,g,Je)}}}else typeof this.ref=="object"&&this.ref.forEach(function(S,I){if(S instanceof it){var H=S.$changes,O=z.ref.$changes.indexes[I];H.setParent(z.ref,z.root,O)}})},m.prototype.operation=function(l){this.changes.set(--this.currentCustomOperation,l)},m.prototype.change=function(l,g){g===void 0&&(g=t.OPERATION.ADD);var M=typeof l=="number"?l:this.indexes[l];this.assertValidIndex(M,l);var z=this.changes.get(M);(!z||z.op===t.OPERATION.DELETE||z.op===t.OPERATION.TOUCH)&&this.changes.set(M,{op:z&&z.op===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:g,index:M}),this.allChanges.add(M),this.changed=!0,this.touchParents()},m.prototype.touch=function(l){var g=typeof l=="number"?l:this.indexes[l];this.assertValidIndex(g,l),this.changes.has(g)||this.changes.set(g,{op:t.OPERATION.TOUCH,index:g}),this.allChanges.add(g),this.touchParents()},m.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},m.prototype.getType=function(l){if(this.ref._definition){var g=this.ref._definition;return g.schema[g.fieldsByIndex[l]]}else{var g=this.parent._definition,M=g.schema[g.fieldsByIndex[this.parentIndex]];return Object.values(M)[0]}},m.prototype.getChildrenFilter=function(){var l=this.parent._definition.childFilters;return l&&l[this.parentIndex]},m.prototype.getValue=function(l){return this.ref.getByIndex(l)},m.prototype.delete=function(l){var g=typeof l=="number"?l:this.indexes[l];if(g===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(l," (").concat(g,")"));return}var M=this.getValue(g);this.changes.set(g,{op:t.OPERATION.DELETE,index:g}),this.allChanges.delete(g),delete this.caches[g],M&&M.$changes&&(M.$changes.parent=void 0),this.changed=!0,this.touchParents()},m.prototype.discard=function(l,g){var M=this;l===void 0&&(l=!1),g===void 0&&(g=!1),this.ref instanceof it||this.changes.forEach(function(z){if(z.op===t.OPERATION.DELETE){var J=M.ref.getIndex(z.index);delete M.indexes[J]}}),this.changes.clear(),this.changed=l,g&&this.allChanges.clear(),this.currentCustomOperation=0},m.prototype.discardAll=function(){var l=this;this.changes.forEach(function(g){var M=l.getValue(g.index);M&&M.$changes&&M.$changes.discardAll()}),this.discard()},m.prototype.cache=function(l,g){this.caches[l]=g},m.prototype.clone=function(){return new m(this.ref,this.parent,this.root)},m.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},m.prototype.assertValidIndex=function(l,g){if(l===void 0)throw new Error('ChangeTree: missing index for field "'.concat(g,'"'))},m}();function u(m,l,g,M){return m[l]||(m[l]=[]),m[l].push(g),M?.forEach(function(z,J){return g(z,J)}),function(){return p(m[l],m[l].indexOf(g))}}function f(m){var l=this,g=typeof this.$changes.getType()!="string";this.$items.forEach(function(M,z){m.push({refId:l.$changes.refId,op:t.OPERATION.DELETE,field:z,value:void 0,previousValue:M}),g&&l.$changes.root.removeRef(M.$changes.refId)})}function p(m,l){if(l===-1||l>=m.length)return!1;for(var g=m.length-1,M=l;M<g;M++)m[M]=m[M+1];return m.length=g,!0}var _=function(m,l){var g=m.toString(),M=l.toString();return g<M?-1:g>M?1:0};function x(m){return m.$proxy=!0,m=new Proxy(m,{get:function(l,g){return typeof g!="symbol"&&!isNaN(g)?l.at(g):l[g]},set:function(l,g,M){if(typeof g!="symbol"&&!isNaN(g)){var z=Array.from(l.$items.keys()),J=parseInt(z[g]||g);M==null?l.deleteAt(J):l.setAt(J,M)}else l[g]=M;return!0},deleteProperty:function(l,g){return typeof g=="number"?l.deleteAt(g):delete l[g],!0},has:function(l,g){return typeof g!="symbol"&&!isNaN(Number(g))?l.$items.has(Number(g)):Reflect.has(l,g)}}),m}var y=function(){function m(){for(var l=[],g=0;g<arguments.length;g++)l[g]=arguments[g];this.$changes=new h(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,l)}return m.prototype.onAdd=function(l,g){return g===void 0&&(g=!0),u(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,l,g?this.$items:void 0)},m.prototype.onRemove=function(l){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,l)},m.prototype.onChange=function(l){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,l)},m.is=function(l){return Array.isArray(l)||l.array!==void 0},Object.defineProperty(m.prototype,"length",{get:function(){return this.$items.size},set:function(l){l===0?this.clear():this.splice(l,this.length-l)},enumerable:!1,configurable:!0}),m.prototype.push=function(){for(var l=this,g=[],M=0;M<arguments.length;M++)g[M]=arguments[M];var z;return g.forEach(function(J){z=l.$refId++,l.setAt(z,J)}),z},m.prototype.pop=function(){var l=Array.from(this.$indexes.values()).pop();if(l!==void 0){this.$changes.delete(l),this.$indexes.delete(l);var g=this.$items.get(l);return this.$items.delete(l),g}},m.prototype.at=function(l){if(l=Math.trunc(l)||0,l<0&&(l+=this.length),!(l<0||l>=this.length)){var g=Array.from(this.$items.keys())[l];return this.$items.get(g)}},m.prototype.setAt=function(l,g){var M,z;if(g==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(l)!==g){g.$changes!==void 0&&g.$changes.setParent(this,this.$changes.root,l);var J=(z=(M=this.$changes.indexes[l])===null||M===void 0?void 0:M.op)!==null&&z!==void 0?z:t.OPERATION.ADD;this.$changes.indexes[l]=l,this.$indexes.set(l,l),this.$items.set(l,g),this.$changes.change(l,J)}},m.prototype.deleteAt=function(l){var g=Array.from(this.$items.keys())[l];return g===void 0?!1:this.$deleteAt(g)},m.prototype.$deleteAt=function(l){return this.$changes.delete(l),this.$indexes.delete(l),this.$items.delete(l)},m.prototype.clear=function(l){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),l&&f.call(this,l),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},m.prototype.concat=function(){for(var l,g=[],M=0;M<arguments.length;M++)g[M]=arguments[M];return new(m.bind.apply(m,o([void 0],(l=Array.from(this.$items.values())).concat.apply(l,g),!1)))},m.prototype.join=function(l){return Array.from(this.$items.values()).join(l)},m.prototype.reverse=function(){var l=this,g=Array.from(this.$items.keys()),M=Array.from(this.$items.values()).reverse();return M.forEach(function(z,J){l.setAt(g[J],z)}),this},m.prototype.shift=function(){var l=Array.from(this.$items.keys()),g=l.shift();if(g!==void 0){var M=this.$items.get(g);return this.$deleteAt(g),M}},m.prototype.slice=function(l,g){var M=new m;return M.push.apply(M,Array.from(this.$items.values()).slice(l,g)),M},m.prototype.sort=function(l){var g=this;l===void 0&&(l=_);var M=Array.from(this.$items.keys()),z=Array.from(this.$items.values()).sort(l);return z.forEach(function(J,Pe){g.setAt(M[Pe],J)}),this},m.prototype.splice=function(l,g){g===void 0&&(g=this.length-l);for(var M=[],z=2;z<arguments.length;z++)M[z-2]=arguments[z];for(var J=Array.from(this.$items.keys()),Pe=[],Ee=l;Ee<l+g;Ee++)Pe.push(this.$items.get(J[Ee])),this.$deleteAt(J[Ee]);for(var Ee=0;Ee<M.length;Ee++)this.setAt(l+Ee,M[Ee]);return Pe},m.prototype.unshift=function(){for(var l=this,g=[],M=0;M<arguments.length;M++)g[M]=arguments[M];var z=this.length,J=g.length,Pe=Array.from(this.$items.values());return g.forEach(function(Ee,Je){l.setAt(Je,Ee)}),Pe.forEach(function(Ee,Je){l.setAt(J+Je,Ee)}),z+J},m.prototype.indexOf=function(l,g){return Array.from(this.$items.values()).indexOf(l,g)},m.prototype.lastIndexOf=function(l,g){return g===void 0&&(g=this.length-1),Array.from(this.$items.values()).lastIndexOf(l,g)},m.prototype.every=function(l,g){return Array.from(this.$items.values()).every(l,g)},m.prototype.some=function(l,g){return Array.from(this.$items.values()).some(l,g)},m.prototype.forEach=function(l,g){Array.from(this.$items.values()).forEach(l,g)},m.prototype.map=function(l,g){return Array.from(this.$items.values()).map(l,g)},m.prototype.filter=function(l,g){return Array.from(this.$items.values()).filter(l,g)},m.prototype.reduce=function(l,g){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},m.prototype.reduceRight=function(l,g){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},m.prototype.find=function(l,g){return Array.from(this.$items.values()).find(l,g)},m.prototype.findIndex=function(l,g){return Array.from(this.$items.values()).findIndex(l,g)},m.prototype.fill=function(l,g,M){throw new Error("ArraySchema#fill() not implemented")},m.prototype.copyWithin=function(l,g,M){throw new Error("ArraySchema#copyWithin() not implemented")},m.prototype.toString=function(){return this.$items.toString()},m.prototype.toLocaleString=function(){return this.$items.toLocaleString()},m.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(m,Symbol.species,{get:function(){return m},enumerable:!1,configurable:!0}),m.prototype.entries=function(){return this.$items.entries()},m.prototype.keys=function(){return this.$items.keys()},m.prototype.values=function(){return this.$items.values()},m.prototype.includes=function(l,g){return Array.from(this.$items.values()).includes(l,g)},m.prototype.flatMap=function(l,g){throw new Error("ArraySchema#flatMap() is not supported.")},m.prototype.flat=function(l){throw new Error("ArraySchema#flat() is not supported.")},m.prototype.findLast=function(){var l=Array.from(this.$items.values());return l.findLast.apply(l,arguments)},m.prototype.findLastIndex=function(){var l=Array.from(this.$items.values());return l.findLastIndex.apply(l,arguments)},m.prototype.with=function(l,g){var M=Array.from(this.$items.values());return M[l]=g,new(m.bind.apply(m,o([void 0],M,!1)))},m.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},m.prototype.toSorted=function(l){return Array.from(this.$items.values()).sort(l)},m.prototype.toSpliced=function(l,g){var M=Array.from(this.$items.values());return M.toSpliced.apply(M,arguments)},m.prototype.setIndex=function(l,g){this.$indexes.set(l,g)},m.prototype.getIndex=function(l){return this.$indexes.get(l)},m.prototype.getByIndex=function(l){return this.$items.get(this.$indexes.get(l))},m.prototype.deleteByIndex=function(l){var g=this.$indexes.get(l);this.$items.delete(g),this.$indexes.delete(l)},m.prototype.toArray=function(){return Array.from(this.$items.values())},m.prototype.toJSON=function(){return this.toArray().map(function(l){return typeof l.toJSON=="function"?l.toJSON():l})},m.prototype.clone=function(l){var g;return l?g=new(m.bind.apply(m,o([void 0],Array.from(this.$items.values()),!1))):g=new(m.bind.apply(m,o([void 0],this.map(function(M){return M.$changes?M.clone():M}),!1))),g},m}();function v(m){return m.$proxy=!0,m=new Proxy(m,{get:function(l,g){return typeof g!="symbol"&&typeof l[g]>"u"?l.get(g):l[g]},set:function(l,g,M){return typeof g!="symbol"&&g.indexOf("$")===-1&&g!=="onAdd"&&g!=="onRemove"&&g!=="onChange"?l.set(g,M):l[g]=M,!0},deleteProperty:function(l,g){return l.delete(g),!0}}),m}var d=function(){function m(l){var g=this;if(this.$changes=new h(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,l)if(l instanceof Map||l instanceof m)l.forEach(function(z,J){return g.set(J,z)});else for(var M in l)this.set(M,l[M])}return m.prototype.onAdd=function(l,g){return g===void 0&&(g=!0),u(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,l,g?this.$items:void 0)},m.prototype.onRemove=function(l){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,l)},m.prototype.onChange=function(l){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,l)},m.is=function(l){return l.map!==void 0},m.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(m.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(m,Symbol.species,{get:function(){return m},enumerable:!1,configurable:!0}),m.prototype.set=function(l,g){if(g==null)throw new Error("MapSchema#set('".concat(l,"', ").concat(g,"): trying to set ").concat(g," value on '").concat(l,"'."));l=l.toString();var M=typeof this.$changes.indexes[l]<"u",z=M?this.$changes.indexes[l]:this.$refId++,J=M?t.OPERATION.REPLACE:t.OPERATION.ADD,Pe=g.$changes!==void 0;if(Pe&&g.$changes.setParent(this,this.$changes.root,z),!M)this.$changes.indexes[l]=z,this.$indexes.set(z,l);else{if(!Pe&&this.$items.get(l)===g)return;Pe&&this.$items.get(l)!==g&&(J=t.OPERATION.ADD)}return this.$items.set(l,g),this.$changes.change(l,J),this},m.prototype.get=function(l){return this.$items.get(l)},m.prototype.delete=function(l){return this.$changes.delete(l.toString()),this.$items.delete(l)},m.prototype.clear=function(l){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),l&&f.call(this,l),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},m.prototype.has=function(l){return this.$items.has(l)},m.prototype.forEach=function(l){this.$items.forEach(l)},m.prototype.entries=function(){return this.$items.entries()},m.prototype.keys=function(){return this.$items.keys()},m.prototype.values=function(){return this.$items.values()},Object.defineProperty(m.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),m.prototype.setIndex=function(l,g){this.$indexes.set(l,g)},m.prototype.getIndex=function(l){return this.$indexes.get(l)},m.prototype.getByIndex=function(l){return this.$items.get(this.$indexes.get(l))},m.prototype.deleteByIndex=function(l){var g=this.$indexes.get(l);this.$items.delete(g),this.$indexes.delete(l)},m.prototype.toJSON=function(){var l={};return this.forEach(function(g,M){l[M]=typeof g.toJSON=="function"?g.toJSON():g}),l},m.prototype.clone=function(l){var g;return l?g=Object.assign(new m,this):(g=new m,this.forEach(function(M,z){M.$changes?g.set(z,M.clone()):g.set(z,M)})),g},m}(),A={};function T(m,l){A[m]=l}function R(m){return A[m]}var N=function(){function m(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return m.create=function(l){var g=new m;return g.schema=Object.assign({},l&&l.schema||{}),g.indexes=Object.assign({},l&&l.indexes||{}),g.fieldsByIndex=Object.assign({},l&&l.fieldsByIndex||{}),g.descriptors=Object.assign({},l&&l.descriptors||{}),g.deprecated=Object.assign({},l&&l.deprecated||{}),g},m.prototype.addField=function(l,g){var M=this.getNextFieldIndex();this.fieldsByIndex[M]=l,this.indexes[l]=M,this.schema[l]=Array.isArray(g)?{array:g[0]}:g},m.prototype.hasField=function(l){return this.indexes[l]!==void 0},m.prototype.addFilter=function(l,g){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[l]]=g,this.indexesWithFilters.push(this.indexes[l]),!0},m.prototype.addChildrenFilter=function(l,g){var M=this.indexes[l],z=this.schema[l];if(R(Object.keys(z)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[M]=g,!0;console.warn("@filterChildren: field '".concat(l,"' can't have children. Ignoring filter."))},m.prototype.getChildrenFilter=function(l){return this.childFilters&&this.childFilters[this.indexes[l]]},m.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},m}();function P(m){return m._context&&m._context.useFilters}var D=function(){function m(){this.types={},this.schemas=new Map,this.useFilters=!1}return m.prototype.has=function(l){return this.schemas.has(l)},m.prototype.get=function(l){return this.types[l]},m.prototype.add=function(l,g){g===void 0&&(g=this.schemas.size),l._definition=N.create(l._definition),l._typeid=g,this.types[g]=l,this.schemas.set(l,g)},m.create=function(l){return l===void 0&&(l={}),function(g){return l.context||(l.context=new m),b(g,l)}},m}(),j=new D;function b(m,l){return l===void 0&&(l={}),function(g,M){var z=l.context||j,J=g.constructor;if(J._context=z,!m)throw new Error("".concat(J.name,': @type() reference provided for "').concat(M,`" is undefined. Make sure you don't have any circular dependencies.`));z.has(J)||z.add(J);var Pe=J._definition;if(Pe.addField(M,m),Pe.descriptors[M]){if(Pe.deprecated[M])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(M,"' definition on '").concat(J.name,`'.
Check @type() annotation`))}catch(O){var Ee=O.stack.split(`
`)[4].trim();throw new Error("".concat(O.message," ").concat(Ee))}}var Je=y.is(m),S=!Je&&d.is(m);if(typeof m!="string"&&!it.is(m)){var I=Object.values(m)[0];typeof I!="string"&&!z.has(I)&&z.add(I)}if(l.manual){Pe.descriptors[M]={enumerable:!0,configurable:!0,writable:!0};return}var H="_".concat(M);Pe.descriptors[H]={enumerable:!1,configurable:!1,writable:!0},Pe.descriptors[M]={get:function(){return this[H]},set:function(O){O!==this[H]&&(O!=null?(Je&&!(O instanceof y)&&(O=new(y.bind.apply(y,o([void 0],O,!1)))),S&&!(O instanceof d)&&(O=new d(O)),O.$proxy===void 0&&(S?O=v(O):Je&&(O=x(O))),this.$changes.change(M),O.$changes&&O.$changes.setParent(this,this.$changes.root,this._definition.indexes[M])):this[H]!==void 0&&this.$changes.delete(M),this[H]=O)},enumerable:!0,configurable:!0}}}function C(m){return function(l,g){var M=l.constructor,z=M._definition;z.addFilter(g,m)&&(M._context.useFilters=!0)}}function q(m){return function(l,g){var M=l.constructor,z=M._definition;z.addChildrenFilter(g,m)&&(M._context.useFilters=!0)}}function K(m){return m===void 0&&(m=!0),function(l,g){var M=l.constructor,z=M._definition;z.deprecated[g]=!0,m&&(z.descriptors[g]={get:function(){throw new Error("".concat(g," is deprecated."))},set:function(J){},enumerable:!1,configurable:!0})}}function le(m,l,g){g===void 0&&(g={}),g.context||(g.context=m._context||g.context||j);for(var M in l)b(l[M],g)(m.prototype,M);return m}function F(m){for(var l=0,g=0,M=0,z=m.length;M<z;M++)l=m.charCodeAt(M),l<128?g+=1:l<2048?g+=2:l<55296||l>=57344?g+=3:(M++,g+=4);return g}function W(m,l,g){for(var M=0,z=0,J=g.length;z<J;z++)M=g.charCodeAt(z),M<128?m[l++]=M:M<2048?(m[l++]=192|M>>6,m[l++]=128|M&63):M<55296||M>=57344?(m[l++]=224|M>>12,m[l++]=128|M>>6&63,m[l++]=128|M&63):(z++,M=65536+((M&1023)<<10|g.charCodeAt(z)&1023),m[l++]=240|M>>18,m[l++]=128|M>>12&63,m[l++]=128|M>>6&63,m[l++]=128|M&63)}function Y(m,l){m.push(l&255)}function Z(m,l){m.push(l&255)}function ee(m,l){m.push(l&255),m.push(l>>8&255)}function te(m,l){m.push(l&255),m.push(l>>8&255)}function ne(m,l){m.push(l&255),m.push(l>>8&255),m.push(l>>16&255),m.push(l>>24&255)}function he(m,l){var g=l>>24,M=l>>16,z=l>>8,J=l;m.push(J&255),m.push(z&255),m.push(M&255),m.push(g&255)}function fe(m,l){var g=Math.floor(l/Math.pow(2,32)),M=l>>>0;he(m,M),he(m,g)}function X(m,l){var g=l/Math.pow(2,32)>>0,M=l>>>0;he(m,M),he(m,g)}function se(m,l){Ge(m,l)}function xe(m,l){Ne(m,l)}var be=new Int32Array(2),Le=new Float32Array(be.buffer),He=new Float64Array(be.buffer);function Ge(m,l){Le[0]=l,ne(m,be[0])}function Ne(m,l){He[0]=l,ne(m,be[0]),ne(m,be[1])}function Ze(m,l){return Z(m,l?1:0)}function V(m,l){l||(l="");var g=F(l),M=0;if(g<32)m.push(g|160),M=1;else if(g<256)m.push(217),Z(m,g),M=2;else if(g<65536)m.push(218),te(m,g),M=3;else if(g<4294967296)m.push(219),he(m,g),M=5;else throw new Error("String too long");return W(m,m.length,l),M+g}function st(m,l){if(isNaN(l))return st(m,0);if(isFinite(l)){if(l!==(l|0))return m.push(203),Ne(m,l),9}else return st(m,l>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return l>=0?l<128?(Z(m,l),1):l<256?(m.push(204),Z(m,l),2):l<65536?(m.push(205),te(m,l),3):l<4294967296?(m.push(206),he(m,l),5):(m.push(207),X(m,l),9):l>=-32?(m.push(224|l+32),1):l>=-128?(m.push(208),Y(m,l),2):l>=-32768?(m.push(209),ee(m,l),3):l>=-2147483648?(m.push(210),ne(m,l),5):(m.push(211),fe(m,l),9)}var Ue=Object.freeze({__proto__:null,boolean:Ze,float32:se,float64:xe,int16:ee,int32:ne,int64:fe,int8:Y,number:st,string:V,uint16:te,uint32:he,uint64:X,uint8:Z,utf8Write:W,writeFloat32:Ge,writeFloat64:Ne});function ke(m,l,g){for(var M="",z=0,J=l,Pe=l+g;J<Pe;J++){var Ee=m[J];if(!(Ee&128)){M+=String.fromCharCode(Ee);continue}if((Ee&224)===192){M+=String.fromCharCode((Ee&31)<<6|m[++J]&63);continue}if((Ee&240)===224){M+=String.fromCharCode((Ee&15)<<12|(m[++J]&63)<<6|(m[++J]&63)<<0);continue}if((Ee&248)===240){z=(Ee&7)<<18|(m[++J]&63)<<12|(m[++J]&63)<<6|(m[++J]&63)<<0,z>=65536?(z-=65536,M+=String.fromCharCode((z>>>10)+55296,(z&1023)+56320)):M+=String.fromCharCode(z);continue}console.error("Invalid byte "+Ee.toString(16))}return M}function we(m,l){return ot(m,l)<<24>>24}function ot(m,l){return m[l.offset++]}function We(m,l){return w(m,l)<<16>>16}function w(m,l){return m[l.offset++]|m[l.offset++]<<8}function E(m,l){return m[l.offset++]|m[l.offset++]<<8|m[l.offset++]<<16|m[l.offset++]<<24}function G(m,l){return E(m,l)>>>0}function ae(m,l){return Ve(m,l)}function oe(m,l){return ie(m,l)}function ce(m,l){var g=G(m,l),M=E(m,l)*Math.pow(2,32);return M+g}function Re(m,l){var g=G(m,l),M=G(m,l)*Math.pow(2,32);return M+g}var ge=new Int32Array(2),Me=new Float32Array(ge.buffer),Fe=new Float64Array(ge.buffer);function Ve(m,l){return ge[0]=E(m,l),Me[0]}function ie(m,l){return ge[0]=E(m,l),ge[1]=E(m,l),Fe[0]}function rt(m,l){return ot(m,l)>0}function Ye(m,l){var g=m[l.offset++],M;g<192?M=g&31:g===217?M=ot(m,l):g===218?M=w(m,l):g===219&&(M=G(m,l));var z=ke(m,l.offset,M);return l.offset+=M,z}function Be(m,l){var g=m[l.offset];return g<192&&g>160||g===217||g===218||g===219}function Ae(m,l){var g=m[l.offset++];if(g<128)return g;if(g===202)return Ve(m,l);if(g===203)return ie(m,l);if(g===204)return ot(m,l);if(g===205)return w(m,l);if(g===206)return G(m,l);if(g===207)return Re(m,l);if(g===208)return we(m,l);if(g===209)return We(m,l);if(g===210)return E(m,l);if(g===211)return ce(m,l);if(g>223)return(255-g+1)*-1}function Se(m,l){var g=m[l.offset];return g<128||g>=202&&g<=211}function $e(m,l){return m[l.offset]<160}function tt(m,l){return m[l.offset-1]===a&&(m[l.offset]<128||m[l.offset]>=202&&m[l.offset]<=211)}var ut=Object.freeze({__proto__:null,arrayCheck:$e,boolean:rt,float32:ae,float64:oe,int16:We,int32:E,int64:ce,int8:we,number:Ae,numberCheck:Se,readFloat32:Ve,readFloat64:ie,string:Ye,stringCheck:Be,switchStructureCheck:tt,uint16:w,uint32:G,uint64:Re,uint8:ot}),Xe=function(){function m(l){var g=this;this.$changes=new h(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,l&&l.forEach(function(M){return g.add(M)})}return m.prototype.onAdd=function(l,g){return g===void 0&&(g=!0),u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,l,g?this.$items:void 0)},m.prototype.onRemove=function(l){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,l)},m.prototype.onChange=function(l){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,l)},m.is=function(l){return l.collection!==void 0},m.prototype.add=function(l){var g=this.$refId++,M=l.$changes!==void 0;return M&&l.$changes.setParent(this,this.$changes.root,g),this.$changes.indexes[g]=g,this.$indexes.set(g,g),this.$items.set(g,l),this.$changes.change(g),g},m.prototype.at=function(l){var g=Array.from(this.$items.keys())[l];return this.$items.get(g)},m.prototype.entries=function(){return this.$items.entries()},m.prototype.delete=function(l){for(var g=this.$items.entries(),M,z;(z=g.next())&&!z.done;)if(l===z.value[1]){M=z.value[0];break}return M===void 0?!1:(this.$changes.delete(M),this.$indexes.delete(M),this.$items.delete(M))},m.prototype.clear=function(l){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),l&&f.call(this,l),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},m.prototype.has=function(l){return Array.from(this.$items.values()).some(function(g){return g===l})},m.prototype.forEach=function(l){var g=this;this.$items.forEach(function(M,z,J){return l(M,z,g)})},m.prototype.values=function(){return this.$items.values()},Object.defineProperty(m.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),m.prototype.setIndex=function(l,g){this.$indexes.set(l,g)},m.prototype.getIndex=function(l){return this.$indexes.get(l)},m.prototype.getByIndex=function(l){return this.$items.get(this.$indexes.get(l))},m.prototype.deleteByIndex=function(l){var g=this.$indexes.get(l);this.$items.delete(g),this.$indexes.delete(l)},m.prototype.toArray=function(){return Array.from(this.$items.values())},m.prototype.toJSON=function(){var l=[];return this.forEach(function(g,M){l.push(typeof g.toJSON=="function"?g.toJSON():g)}),l},m.prototype.clone=function(l){var g;return l?g=Object.assign(new m,this):(g=new m,this.forEach(function(M){M.$changes?g.add(M.clone()):g.add(M)})),g},m}(),ue=function(){function m(l){var g=this;this.$changes=new h(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,l&&l.forEach(function(M){return g.add(M)})}return m.prototype.onAdd=function(l,g){return g===void 0&&(g=!0),u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,l,g?this.$items:void 0)},m.prototype.onRemove=function(l){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,l)},m.prototype.onChange=function(l){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,l)},m.is=function(l){return l.set!==void 0},m.prototype.add=function(l){var g,M;if(this.has(l))return!1;var z=this.$refId++;l.$changes!==void 0&&l.$changes.setParent(this,this.$changes.root,z);var J=(M=(g=this.$changes.indexes[z])===null||g===void 0?void 0:g.op)!==null&&M!==void 0?M:t.OPERATION.ADD;return this.$changes.indexes[z]=z,this.$indexes.set(z,z),this.$items.set(z,l),this.$changes.change(z,J),z},m.prototype.entries=function(){return this.$items.entries()},m.prototype.delete=function(l){for(var g=this.$items.entries(),M,z;(z=g.next())&&!z.done;)if(l===z.value[1]){M=z.value[0];break}return M===void 0?!1:(this.$changes.delete(M),this.$indexes.delete(M),this.$items.delete(M))},m.prototype.clear=function(l){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),l&&f.call(this,l),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},m.prototype.has=function(l){for(var g=this.$items.values(),M=!1,z;(z=g.next())&&!z.done;)if(l===z.value){M=!0;break}return M},m.prototype.forEach=function(l){var g=this;this.$items.forEach(function(M,z,J){return l(M,z,g)})},m.prototype.values=function(){return this.$items.values()},Object.defineProperty(m.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),m.prototype.setIndex=function(l,g){this.$indexes.set(l,g)},m.prototype.getIndex=function(l){return this.$indexes.get(l)},m.prototype.getByIndex=function(l){return this.$items.get(this.$indexes.get(l))},m.prototype.deleteByIndex=function(l){var g=this.$indexes.get(l);this.$items.delete(g),this.$indexes.delete(l)},m.prototype.toArray=function(){return Array.from(this.$items.values())},m.prototype.toJSON=function(){var l=[];return this.forEach(function(g,M){l.push(typeof g.toJSON=="function"?g.toJSON():g)}),l},m.prototype.clone=function(l){var g;return l?g=Object.assign(new m,this):(g=new m,this.forEach(function(M){M.$changes?g.add(M.clone()):g.add(M)})),g},m}(),U=function(){function m(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return m.prototype.addRefId=function(l){this.refIds.has(l)||(this.refIds.add(l),this.containerIndexes.set(l,new Set))},m.get=function(l){return l.$filterState===void 0&&(l.$filterState=new m),l.$filterState},m}(),ve=function(){function m(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return m.prototype.getNextUniqueId=function(){return this.nextUniqueId++},m.prototype.addRef=function(l,g,M){M===void 0&&(M=!0),this.refs.set(l,g),M&&(this.refCounts[l]=(this.refCounts[l]||0)+1)},m.prototype.removeRef=function(l){var g=this.refCounts[l];if(g===void 0){console.warn("trying to remove reference ".concat(l," that doesn't exist"));return}if(g===0){console.warn("trying to remove reference ".concat(l," with 0 refCount"));return}this.refCounts[l]=g-1,this.deletedRefs.add(l)},m.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},m.prototype.garbageCollectDeletedRefs=function(){var l=this;this.deletedRefs.forEach(function(g){if(!(l.refCounts[g]>0)){var M=l.refs.get(g);if(M instanceof it)for(var z in M._definition.schema)typeof M._definition.schema[z]!="string"&&M[z]&&M[z].$changes&&l.removeRef(M[z].$changes.refId);else{var J=M.$changes.parent._definition,Pe=J.schema[J.fieldsByIndex[M.$changes.parentIndex]];typeof Object.values(Pe)[0]=="function"&&Array.from(M.values()).forEach(function(Ee){return l.removeRef(Ee.$changes.refId)})}l.refs.delete(g),delete l.refCounts[g]}}),this.deletedRefs.clear()},m}(),_e=function(m){i(l,m);function l(){return m!==null&&m.apply(this,arguments)||this}return l}(Error);function ze(m,l,g,M){var z,J=!1;switch(l){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":z="number",isNaN(m)&&console.log('trying to encode "NaN" in '.concat(g.constructor.name,"#").concat(M));break;case"string":z="string",J=!0;break;case"boolean":return}if(typeof m!==z&&(!J||J&&m!==null)){var Pe="'".concat(JSON.stringify(m),"'").concat(m&&m.constructor&&" (".concat(m.constructor.name,")")||"");throw new _e("a '".concat(z,"' was expected, but ").concat(Pe," was provided in ").concat(g.constructor.name,"#").concat(M))}}function Oe(m,l,g,M){if(!(m instanceof l))throw new _e("a '".concat(l.name,"' was expected, but '").concat(m.constructor.name,"' was provided in ").concat(g.constructor.name,"#").concat(M))}function at(m,l,g,M,z){ze(g,m,M,z);var J=Ue[m];if(J)J(l,g);else throw new _e("a '".concat(m,"' was expected, but ").concat(g," was provided in ").concat(M.constructor.name,"#").concat(z))}function ct(m,l,g){return ut[m](l,g)}var it=function(){function m(){for(var l=[],g=0;g<arguments.length;g++)l[g]=arguments[g];Object.defineProperties(this,{$changes:{value:new h(this,void 0,new ve),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var M=this._definition.descriptors;M&&Object.defineProperties(this,M),l[0]&&this.assign(l[0])}return m.onError=function(l){console.error(l)},m.is=function(l){return l._definition&&l._definition.schema!==void 0},m.prototype.onChange=function(l){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,l)},m.prototype.onRemove=function(l){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,l)},m.prototype.assign=function(l){return Object.assign(this,l),this},Object.defineProperty(m.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),m.prototype.setDirty=function(l,g){this.$changes.change(l,g)},m.prototype.listen=function(l,g,M){var z=this;return M===void 0&&(M=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[l]||(this.$callbacks[l]=[]),this.$callbacks[l].push(g),M&&this[l]!==void 0&&g(this[l],void 0),function(){return p(z.$callbacks[l],z.$callbacks[l].indexOf(g))}},m.prototype.decode=function(l,g,M){g===void 0&&(g={offset:0}),M===void 0&&(M=this);var z=[],J=this.$changes.root,Pe=l.length,Ee=0;for(J.refs.set(Ee,this);g.offset<Pe;){var Je=l[g.offset++];if(Je==a){Ee=Ae(l,g);var S=J.refs.get(Ee);if(!S)throw new Error('"refId" not found: '.concat(Ee));M=S;continue}var I=M.$changes,H=M._definition!==void 0,O=H?Je>>6<<6:Je;if(O===t.OPERATION.CLEAR){M.clear(z);continue}var B=H?Je%(O||255):Ae(l,g),Q=H?M._definition.fieldsByIndex[B]:"",re=I.getType(B),$=void 0,de=void 0,Ie=void 0;if(H?de=M["_".concat(Q)]:(de=M.getByIndex(B),(O&t.OPERATION.ADD)===t.OPERATION.ADD?(Ie=M instanceof d?Ye(l,g):B,M.setIndex(B,Ie)):Ie=M.getIndex(B)),(O&t.OPERATION.DELETE)===t.OPERATION.DELETE&&(O!==t.OPERATION.DELETE_AND_ADD&&M.deleteByIndex(B),de&&de.$changes&&J.removeRef(de.$changes.refId),$=null),Q===void 0){console.warn("@colyseus/schema: definition mismatch");for(var ye={offset:g.offset};g.offset<Pe&&!(tt(l,g)&&(ye.offset=g.offset+1,J.refs.has(Ae(l,ye))));)g.offset++;continue}else if(O!==t.OPERATION.DELETE)if(m.is(re)){var pe=Ae(l,g);if($=J.refs.get(pe),O!==t.OPERATION.REPLACE){var De=this.getSchemaType(l,g,re);$||($=this.createTypeInstance(De),$.$changes.refId=pe,de&&($.$callbacks=de.$callbacks,de.$changes.refId&&pe!==de.$changes.refId&&J.removeRef(de.$changes.refId))),J.addRef(pe,$,$!==de)}}else if(typeof re=="string")$=ct(re,l,g);else{var mt=R(Object.keys(re)[0]),ht=Ae(l,g),_t=J.refs.has(ht)?de||J.refs.get(ht):new mt.constructor;if($=_t.clone(!0),$.$changes.refId=ht,de&&($.$callbacks=de.$callbacks,de.$changes.refId&&ht!==de.$changes.refId)){J.removeRef(de.$changes.refId);for(var qe=de.entries(),Ce=void 0;(Ce=qe.next())&&!Ce.done;){var yn=Ce.value,nt=yn[0],Yt=yn[1];z.push({refId:ht,op:t.OPERATION.DELETE,field:nt,value:void 0,previousValue:Yt})}}J.addRef(ht,$,_t!==de)}if($!=null){if($.$changes&&$.$changes.setParent(I.ref,I.root,B),M instanceof m)M[Q]=$;else if(M instanceof d){var nt=Ie;M.$items.set(nt,$),M.$changes.allChanges.add(B)}else if(M instanceof y)M.setAt(B,$);else if(M instanceof Xe){var Kt=M.add($);M.setIndex(B,Kt)}else if(M instanceof ue){var Kt=M.add($);Kt!==!1&&M.setIndex(B,Kt)}}de!==$&&z.push({refId:Ee,op:O,field:Q,dynamicIndex:Ie,value:$,previousValue:de})}return this._triggerChanges(z),J.garbageCollectDeletedRefs(),z},m.prototype.encode=function(l,g,M){l===void 0&&(l=!1),g===void 0&&(g=[]),M===void 0&&(M=!1);for(var z=this.$changes,J=new WeakSet,Pe=[z],Ee=1,Je=0;Je<Ee;Je++){var S=Pe[Je],I=S.ref,H=I instanceof m;S.ensureRefId(),J.add(S),S!==z&&(S.changed||l)&&(Z(g,a),st(g,S.refId));for(var O=l?Array.from(S.allChanges):Array.from(S.changes.values()),B=0,Q=O.length;B<Q;B++){var re=l?{op:t.OPERATION.ADD,index:O[B]}:O[B],$=re.index,de=H?I._definition.fieldsByIndex&&I._definition.fieldsByIndex[$]:$,Ie=g.length;if(re.op!==t.OPERATION.TOUCH)if(H)Z(g,$|re.op);else{if(Z(g,re.op),re.op===t.OPERATION.CLEAR)continue;st(g,$)}if(!H&&(re.op&t.OPERATION.ADD)==t.OPERATION.ADD&&I instanceof d){var ye=S.ref.$indexes.get($);V(g,ye)}if(re.op!==t.OPERATION.DELETE){var pe=S.getType($),De=S.getValue($);if(De&&De.$changes&&!J.has(De.$changes)&&(Pe.push(De.$changes),De.$changes.ensureRefId(),Ee++),re.op!==t.OPERATION.TOUCH){if(m.is(pe))Oe(De,pe,I,de),st(g,De.$changes.refId),(re.op&t.OPERATION.ADD)===t.OPERATION.ADD&&this.tryEncodeTypeId(g,pe,De.constructor);else if(typeof pe=="string")at(pe,g,De,I,de);else{var mt=R(Object.keys(pe)[0]);Oe(I["_".concat(de)],mt.constructor,I,de),st(g,De.$changes.refId)}M&&S.cache($,g.slice(Ie))}}}!l&&!M&&S.discard()}return g},m.prototype.encodeAll=function(l){return this.encode(!0,[],l)},m.prototype.applyFilters=function(l,g){var M,z;g===void 0&&(g=!1);for(var J=this,Pe=new Set,Ee=U.get(l),Je=[this.$changes],S=1,I=[],H=function(B){var Q=Je[B];if(Pe.has(Q.refId))return"continue";var re=Q.ref,$=re instanceof m;Z(I,a),st(I,Q.refId);var de=Ee.refIds.has(Q),Ie=g||!de;Ee.addRefId(Q);var ye=Ee.containerIndexes.get(Q),pe=Ie?Array.from(Q.allChanges):Array.from(Q.changes.values());if(!g&&$&&re._definition.indexesWithFilters){var De=re._definition.indexesWithFilters;De.forEach(function(rn){!ye.has(rn)&&Q.allChanges.has(rn)&&(Ie?pe.push(rn):pe.push({op:t.OPERATION.ADD,index:rn}))})}for(var mt=0,ht=pe.length;mt<ht;mt++){var _t=Ie?{op:t.OPERATION.ADD,index:pe[mt]}:pe[mt];if(_t.op===t.OPERATION.CLEAR){Z(I,_t.op);continue}var qe=_t.index;if(_t.op===t.OPERATION.DELETE){$?Z(I,_t.op|qe):(Z(I,_t.op),st(I,qe));continue}var Ce=Q.getValue(qe),yn=Q.getType(qe);if($){var nt=re._definition.filters&&re._definition.filters[qe];if(nt&&!nt.call(re,l,Ce,J)){Ce&&Ce.$changes&&Pe.add(Ce.$changes.refId);continue}}else{var Yt=Q.parent,nt=Q.getChildrenFilter();if(nt&&!nt.call(Yt,l,re.$indexes.get(qe),Ce,J)){Ce&&Ce.$changes&&Pe.add(Ce.$changes.refId);continue}}if(Ce.$changes&&(Je.push(Ce.$changes),S++),_t.op!==t.OPERATION.TOUCH)if(_t.op===t.OPERATION.ADD||$)I.push.apply(I,(M=Q.caches[qe])!==null&&M!==void 0?M:[]),ye.add(qe);else if(ye.has(qe))I.push.apply(I,(z=Q.caches[qe])!==null&&z!==void 0?z:[]);else{if(ye.add(qe),Z(I,t.OPERATION.ADD),st(I,qe),re instanceof d){var Kt=Q.ref.$indexes.get(qe);V(I,Kt)}Ce.$changes?st(I,Ce.$changes.refId):Ue[yn](I,Ce)}else if(Ce.$changes&&!$){if(Z(I,t.OPERATION.ADD),st(I,qe),re instanceof d){var Kt=Q.ref.$indexes.get(qe);V(I,Kt)}st(I,Ce.$changes.refId)}}},O=0;O<S;O++)H(O);return I},m.prototype.clone=function(){var l,g=new this.constructor,M=this._definition.schema;for(var z in M)typeof this[z]=="object"&&typeof((l=this[z])===null||l===void 0?void 0:l.clone)=="function"?g[z]=this[z].clone():g[z]=this[z];return g},m.prototype.toJSON=function(){var l=this._definition.schema,g=this._definition.deprecated,M={};for(var z in l)!g[z]&&this[z]!==null&&typeof this[z]<"u"&&(M[z]=typeof this[z].toJSON=="function"?this[z].toJSON():this["_".concat(z)]);return M},m.prototype.discardAllChanges=function(){this.$changes.discardAll()},m.prototype.getByIndex=function(l){return this[this._definition.fieldsByIndex[l]]},m.prototype.deleteByIndex=function(l){this[this._definition.fieldsByIndex[l]]=void 0},m.prototype.tryEncodeTypeId=function(l,g,M){g._typeid!==M._typeid&&(Z(l,c),st(l,M._typeid))},m.prototype.getSchemaType=function(l,g,M){var z;return l[g.offset]===c&&(g.offset++,z=this.constructor._context.get(Ae(l,g))),z||M},m.prototype.createTypeInstance=function(l){var g=new l;return g.$changes.root=this.$changes.root,g},m.prototype._triggerChanges=function(l){for(var g,M,z,J,Pe,Ee,Je,S,I,H=new Set,O=this.$changes.root.refs,B=function(re){var $=l[re],de=$.refId,Ie=O.get(de),ye=Ie.$callbacks;if(($.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&$.previousValue instanceof m&&((M=(g=$.previousValue.$callbacks)===null||g===void 0?void 0:g[t.OPERATION.DELETE])===null||M===void 0||M.forEach(function(pe){return pe()})),!ye)return"continue";if(Ie instanceof m){if(!H.has(de))try{(z=ye?.[t.OPERATION.REPLACE])===null||z===void 0||z.forEach(function(pe){return pe()})}catch(pe){m.onError(pe)}try{ye.hasOwnProperty($.field)&&((J=ye[$.field])===null||J===void 0||J.forEach(function(pe){return pe($.value,$.previousValue)}))}catch(pe){m.onError(pe)}}else $.op===t.OPERATION.ADD&&$.previousValue===void 0?(Pe=ye[t.OPERATION.ADD])===null||Pe===void 0||Pe.forEach(function(pe){var De;return pe($.value,(De=$.dynamicIndex)!==null&&De!==void 0?De:$.field)}):$.op===t.OPERATION.DELETE?$.previousValue!==void 0&&((Ee=ye[t.OPERATION.DELETE])===null||Ee===void 0||Ee.forEach(function(pe){var De;return pe($.previousValue,(De=$.dynamicIndex)!==null&&De!==void 0?De:$.field)})):$.op===t.OPERATION.DELETE_AND_ADD&&($.previousValue!==void 0&&((Je=ye[t.OPERATION.DELETE])===null||Je===void 0||Je.forEach(function(pe){var De;return pe($.previousValue,(De=$.dynamicIndex)!==null&&De!==void 0?De:$.field)})),(S=ye[t.OPERATION.ADD])===null||S===void 0||S.forEach(function(pe){var De;return pe($.value,(De=$.dynamicIndex)!==null&&De!==void 0?De:$.field)})),$.value!==$.previousValue&&((I=ye[t.OPERATION.REPLACE])===null||I===void 0||I.forEach(function(pe){var De;return pe($.value,(De=$.dynamicIndex)!==null&&De!==void 0?De:$.field)}));H.add(de)},Q=0;Q<l.length;Q++)B(Q)},m._definition=N.create(),m}();function wt(m){for(var l=[m.$changes],g=1,M={},z=M,J=function(Ee){var Je=l[Ee];Je.changes.forEach(function(S){var I=Je.ref,H=S.index,O=I._definition?I._definition.fieldsByIndex[H]:I.$indexes.get(H);z[O]=Je.getValue(H)})},Pe=0;Pe<g;Pe++)J(Pe);return M}var et={context:new D},yt=function(m){i(l,m);function l(){return m!==null&&m.apply(this,arguments)||this}return r([b("string",et)],l.prototype,"name",void 0),r([b("string",et)],l.prototype,"type",void 0),r([b("number",et)],l.prototype,"referencedType",void 0),l}(it),Ot=function(m){i(l,m);function l(){var g=m!==null&&m.apply(this,arguments)||this;return g.fields=new y,g}return r([b("number",et)],l.prototype,"id",void 0),r([b([yt],et)],l.prototype,"fields",void 0),l}(it),ns=function(m){i(l,m);function l(){var g=m!==null&&m.apply(this,arguments)||this;return g.types=new y,g}return l.encode=function(g){var M,z=g.constructor,J=new l;J.rootType=z._typeid;var Pe=function(I,H){for(var O in H){var B=new yt;B.name=O;var Q=void 0;if(typeof H[O]=="string")Q=H[O];else{var re=H[O],$=void 0;it.is(re)?(Q="ref",$=H[O]):(Q=Object.keys(re)[0],typeof re[Q]=="string"?Q+=":"+re[Q]:$=re[Q]),B.referencedType=$?$._typeid:-1}B.type=Q,I.fields.push(B)}J.types.push(I)},Ee=(M=z._context)===null||M===void 0?void 0:M.types;for(var Je in Ee){var S=new Ot;S.id=Number(Je),Pe(S,Ee[Je]._definition.schema)}return J.encodeAll()},l.decode=function(g,M){var z=new D,J=new l;J.decode(g,M);var Pe=J.types.reduce(function(H,O){var B=function(re){i($,re);function $(){return re!==null&&re.apply(this,arguments)||this}return $}(it),Q=O.id;return H[Q]=B,z.add(B,Q),H},{});J.types.forEach(function(H){var O=Pe[H.id];H.fields.forEach(function(B){var Q;if(B.referencedType!==void 0){var re=B.type,$=Pe[B.referencedType];if(!$){var de=B.type.split(":");re=de[0],$=de[1]}re==="ref"?b($,{context:z})(O.prototype,B.name):b((Q={},Q[re]=$,Q),{context:z})(O.prototype,B.name)}else b(B.type,{context:z})(O.prototype,B.name)})});var Ee=Pe[J.rootType],Je=new Ee;for(var S in Ee._definition.schema){var I=Ee._definition.schema[S];typeof I!="string"&&(Je[S]=typeof I=="function"?new I:new(R(Object.keys(I)[0])).constructor)}return Je},r([b([Ot],et)],l.prototype,"types",void 0),r([b("number",et)],l.prototype,"rootType",void 0),l}(it);T("map",{constructor:d}),T("array",{constructor:y}),T("set",{constructor:ue}),T("collection",{constructor:Xe}),t.ArraySchema=y,t.CollectionSchema=Xe,t.Context=D,t.MapSchema=d,t.Reflection=ns,t.ReflectionField=yt,t.ReflectionType=Ot,t.Schema=it,t.SchemaDefinition=N,t.SetSchema=ue,t.decode=ut,t.defineTypes=le,t.deprecated=K,t.dumpChanges=wt,t.encode=Ue,t.filter=C,t.filterChildren=q,t.hasFilter=P,t.registerType=T,t.type=b})})(oo,oo.exports);var bl=oo.exports,jg=pt&&pt.__createBinding||(Object.create?function(s,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,n,i)}:function(s,e,t,n){n===void 0&&(n=t),s[n]=e[t]}),Jg=pt&&pt.__setModuleDefault||(Object.create?function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}:function(s,e){s.default=e}),Zg=pt&&pt.__importStar||function(s){if(s&&s.__esModule)return s;var e={};if(s!=null)for(var t in s)t!=="default"&&Object.prototype.hasOwnProperty.call(s,t)&&jg(e,s,t);return Jg(e,s),e};Object.defineProperty(Qi,"__esModule",{value:!0});Qi.Room=void 0;const Sc=Zg(Ci),Qg=Ys,Dt=Eo,Ec=ti,e0=es,Cs=Pi,Ht=bl,Tc=qs;class To{constructor(e,t){this.onStateChange=(0,Cs.createSignal)(),this.onError=(0,Cs.createSignal)(),this.onLeave=(0,Cs.createSignal)(),this.onJoin=(0,Cs.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,e0.createNanoEvents)(),this.roomId=null,this.name=e,t&&(this.serializer=new((0,Ec.getSerializer)("schema")),this.rootSchema=t,this.serializer.state=new t),this.onError((n,i)=>{var r;return(r=console.warn)===null||r===void 0?void 0:r.call(console,`colyseus.js - onError => (${n}) ${i}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(e,t,n=this,i){const r=new Qg.Connection;n.connection=r,r.events.onmessage=To.prototype.onMessageCallback.bind(n),r.events.onclose=function(o){var a;if(!n.hasJoined){(a=console.warn)===null||a===void 0||a.call(console,`Room connection was closed unexpectedly (${o.code}): ${o.reason}`),n.onError.invoke(o.code,o.reason);return}o.code===Tc.CloseCode.DEVMODE_RESTART&&t?t():(n.onLeave.invoke(o.code,o.reason),n.destroy())},r.events.onerror=function(o){var a;(a=console.warn)===null||a===void 0||a.call(console,`Room, onError (${o.code}): ${o.reason}`),n.onError.invoke(o.code,o.reason)},r.connect(e,i)}leave(e=!0){return new Promise(t=>{this.onLeave(n=>t(n)),this.connection?e?this.connection.send([Dt.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(Tc.CloseCode.CONSENTED)})}onMessage(e,t){return this.onMessageHandlers.on(this.getMessageHandlerKey(e),t)}send(e,t){const n=[Dt.Protocol.ROOM_DATA];typeof e=="string"?Ht.encode.string(n,e):Ht.encode.number(n,e);let i;if(t!==void 0){const r=Sc.encode(t);i=new Uint8Array(n.length+r.byteLength),i.set(new Uint8Array(n),0),i.set(new Uint8Array(r),n.length)}else i=new Uint8Array(n);this.connection.send(i.buffer)}sendBytes(e,t){const n=[Dt.Protocol.ROOM_DATA_BYTES];typeof e=="string"?Ht.encode.string(n,e):Ht.encode.number(n,e);let i;i=new Uint8Array(n.length+(t.byteLength||t.length)),i.set(new Uint8Array(n),0),i.set(new Uint8Array(t),n.length),this.connection.send(i.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(e){const t=Array.from(new Uint8Array(e.data)),n=t[0];if(n===Dt.Protocol.JOIN_ROOM){let i=1;const r=(0,Dt.utf8Read)(t,i);if(i+=(0,Dt.utf8Length)(r),this.serializerId=(0,Dt.utf8Read)(t,i),i+=(0,Dt.utf8Length)(this.serializerId),!this.serializer){const o=(0,Ec.getSerializer)(this.serializerId);this.serializer=new o}t.length>i&&this.serializer.handshake&&this.serializer.handshake(t,{offset:i}),this.reconnectionToken=`${this.roomId}:${r}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([Dt.Protocol.JOIN_ROOM])}else if(n===Dt.Protocol.ERROR){const i={offset:1},r=Ht.decode.number(t,i),o=Ht.decode.string(t,i);this.onError.invoke(r,o)}else if(n===Dt.Protocol.LEAVE_ROOM)this.leave();else if(n===Dt.Protocol.ROOM_DATA_SCHEMA){const i={offset:1},o=this.serializer.getState().constructor._context.get(Ht.decode.number(t,i)),a=new o;a.decode(t,i),this.dispatchMessage(o,a)}else if(n===Dt.Protocol.ROOM_STATE)t.shift(),this.setState(t);else if(n===Dt.Protocol.ROOM_STATE_PATCH)t.shift(),this.patch(t);else if(n===Dt.Protocol.ROOM_DATA){const i={offset:1},r=Ht.decode.stringCheck(t,i)?Ht.decode.string(t,i):Ht.decode.number(t,i),o=t.length>i.offset?Sc.decode(e.data,i.offset):void 0;this.dispatchMessage(r,o)}else if(n===Dt.Protocol.ROOM_DATA_BYTES){const i={offset:1},r=Ht.decode.stringCheck(t,i)?Ht.decode.string(t,i):Ht.decode.number(t,i);this.dispatchMessage(r,new Uint8Array(t.slice(i.offset)))}}setState(e){this.serializer.setState(e),this.onStateChange.invoke(this.serializer.getState())}patch(e){this.serializer.patch(e),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(e,t){var n;const i=this.getMessageHandlerKey(e);this.onMessageHandlers.events[i]?this.onMessageHandlers.emit(i,t):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",e,t):(n=console.warn)===null||n===void 0||n.call(console,`colyseus.js: onMessage() not registered for type '${e}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(e){switch(typeof e){case"function":return`$${e._typeid}`;case"string":return e;case"number":return`i${e}`;default:throw new Error("invalid message type.")}}}Qi.Room=To;var js={};function bc(s,e){e.headers=s.headers||{},e.statusMessage=s.statusText,e.statusCode=s.status,e.data=s.response}function sn(s,e,t){return new Promise(function(n,i){t=t||{};var r=new XMLHttpRequest,o,a,c,h=t.body,u=t.headers||{};t.timeout&&(r.timeout=t.timeout),r.ontimeout=r.onerror=function(f){f.timeout=f.type=="timeout",i(f)},r.open(s,e.href||e),r.onload=function(){for(c=r.getAllResponseHeaders().trim().split(/[\r\n]+/),bc(r,r);a=c.shift();)a=a.split(": "),r.headers[a.shift().toLowerCase()]=a.join(": ");if(a=r.headers["content-type"],a&&~a.indexOf("application/json"))try{r.data=JSON.parse(r.data,t.reviver)}catch(f){return bc(r,f),i(f)}(r.status>=400?i:n)(r)},typeof FormData<"u"&&h instanceof FormData||h&&typeof h=="object"&&(u["content-type"]="application/json",h=JSON.stringify(h)),r.withCredentials=!!t.withCredentials;for(o in u)r.setRequestHeader(o,u[o]);r.send(h)})}var t0=sn.bind(sn,"GET"),n0=sn.bind(sn,"POST"),i0=sn.bind(sn,"PATCH"),s0=sn.bind(sn,"DELETE"),r0=sn.bind(sn,"PUT");const o0=Object.freeze(Object.defineProperty({__proto__:null,del:s0,get:t0,patch:i0,post:n0,put:r0,send:sn},Symbol.toStringTag,{value:"Module"})),a0=Dg(o0);var c0=pt&&pt.__createBinding||(Object.create?function(s,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,n,i)}:function(s,e,t,n){n===void 0&&(n=t),s[n]=e[t]}),l0=pt&&pt.__setModuleDefault||(Object.create?function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}:function(s,e){s.default=e}),h0=pt&&pt.__importStar||function(s){if(s&&s.__esModule)return s;var e={};if(s!=null)for(var t in s)t!=="default"&&Object.prototype.hasOwnProperty.call(s,t)&&c0(e,s,t);return l0(e,s),e};Object.defineProperty(js,"__esModule",{value:!0});js.HTTP=void 0;const u0=qs,f0=h0(a0);class d0{constructor(e,t={}){this.client=e,this.headers=t}get(e,t={}){return this.request("get",e,t)}post(e,t={}){return this.request("post",e,t)}del(e,t={}){return this.request("del",e,t)}put(e,t={}){return this.request("put",e,t)}request(e,t,n={}){return f0[e](this.client.getHttpEndpoint(t),this.getOptions(n)).catch(i=>{var r;const o=i.statusCode,a=((r=i.data)===null||r===void 0?void 0:r.error)||i.statusMessage||i.message;throw!o&&!a?i:new u0.ServerError(o,a)})}getOptions(e){return e.headers=Object.assign({},this.headers,e.headers),this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(e.withCredentials=!0),e}}js.HTTP=d0;var ts={},Un={};Object.defineProperty(Un,"__esModule",{value:!0});Un.getItem=Un.removeItem=Un.setItem=void 0;let Gi;function bo(){if(!Gi)try{Gi=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return Gi||(Gi={cache:{},setItem:function(s,e){this.cache[s]=e},getItem:function(s){this.cache[s]},removeItem:function(s){delete this.cache[s]}}),Gi}function p0(s,e){bo().setItem(s,e)}Un.setItem=p0;function m0(s){bo().removeItem(s)}Un.removeItem=m0;function g0(s,e){const t=bo().getItem(s);typeof Promise>"u"||!(t instanceof Promise)?e(t):t.then(n=>e(n))}Un.getItem=g0;var Vn=pt&&pt.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{h(n.next(u))}catch(f){o(f)}}function c(u){try{h(n.throw(u))}catch(f){o(f)}}function h(u){u.done?r(u.value):i(u.value).then(a,c)}h((n=n.apply(s,e||[])).next())})},vi=pt&&pt.__classPrivateFieldGet||function(s,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?s!==e||!n:!e.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(s):n?n.value:e.get(s)},Vi=pt&&pt.__classPrivateFieldSet||function(s,e,t,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?s!==e||!i:!e.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(s,t):i?i.value=t:e.set(s,t),t},Ls,ao,Rn,Ds;Object.defineProperty(ts,"__esModule",{value:!0});ts.Auth=void 0;const Wr=Un,_0=es;class v0{constructor(e){this.http=e,this.settings={path:"/auth",key:"colyseus-auth-token"},Ls.set(this,!1),ao.set(this,void 0),Rn.set(this,void 0),Ds.set(this,(0,_0.createNanoEvents)()),(0,Wr.getItem)(this.settings.key,t=>this.token=t)}set token(e){this.http.authToken=e}get token(){return this.http.authToken}onChange(e){const t=vi(this,Ds,"f").on("change",e);return vi(this,Ls,"f")||Vi(this,ao,new Promise((n,i)=>{this.getUserData().then(r=>{this.emitChange(Object.assign(Object.assign({},r),{token:this.token}))}).catch(r=>{this.emitChange({user:null,token:void 0})}).finally(()=>{n()})}),"f"),Vi(this,Ls,!0,"f"),t}getUserData(){return Vn(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(e,t,n){return Vn(this,void 0,void 0,function*(){const i=(yield this.http.post(`${this.settings.path}/register`,{body:{email:e,password:t,options:n}})).data;return this.emitChange(i),i})}signInWithEmailAndPassword(e,t){return Vn(this,void 0,void 0,function*(){const n=(yield this.http.post(`${this.settings.path}/login`,{body:{email:e,password:t}})).data;return this.emitChange(n),n})}signInAnonymously(e){return Vn(this,void 0,void 0,function*(){const t=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:e}})).data;return this.emitChange(t),t})}sendPasswordResetEmail(e){return Vn(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:e}})).data})}signInWithProvider(e,t={}){return Vn(this,void 0,void 0,function*(){return new Promise((n,i)=>{const r=t.width||480,o=t.height||768,a=this.token?`?token=${this.token}`:"",c=`Login with ${e[0].toUpperCase()+e.substring(1)}`,h=this.http.client.getHttpEndpoint(`${t.prefix||`${this.settings.path}/provider`}/${e}${a}`),u=screen.width/2-r/2,f=screen.height/2-o/2;Vi(this,Rn,window.open(h,c,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+r+", height="+o+", top="+f+", left="+u),"f");const p=x=>{x.data.user===void 0&&x.data.token===void 0||(clearInterval(_),vi(this,Rn,"f").close(),Vi(this,Rn,void 0,"f"),window.removeEventListener("message",p),x.data.error!==void 0?i(x.data.error):(n(x.data),this.emitChange(x.data)))},_=setInterval(()=>{(!vi(this,Rn,"f")||vi(this,Rn,"f").closed)&&(Vi(this,Rn,void 0,"f"),i("cancelled"),window.removeEventListener("message",p))},200);window.addEventListener("message",p)})})}signOut(){return Vn(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(e){e.token!==void 0&&(this.token=e.token,e.token===null?(0,Wr.removeItem)(this.settings.key):(0,Wr.setItem)(this.settings.key,e.token)),vi(this,Ds,"f").emit("change",e)}}ts.Auth=v0;Ls=new WeakMap,ao=new WeakMap,Rn=new WeakMap,Ds=new WeakMap;var Js={};Object.defineProperty(Js,"__esModule",{value:!0});Js.discordURLBuilder=void 0;function x0(s){var e;const t=((e=window?.location)===null||e===void 0?void 0:e.hostname)||"localhost",n=s.hostname.split("."),i=!s.hostname.includes("trycloudflare.com")&&!s.hostname.includes("discordsays.com")&&n.length>2?`/${n[0]}`:"";return s.pathname.startsWith("/.proxy")?`${s.protocol}//${t}${i}${s.pathname}${s.search}`:`${s.protocol}//${t}/.proxy/colyseus${i}${s.pathname}${s.search}`}Js.discordURLBuilder=x0;var on=pt&&pt.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{h(n.next(u))}catch(f){o(f)}}function c(u){try{h(n.throw(u))}catch(f){o(f)}}function h(u){u.done?r(u.value):i(u.value).then(a,c)}h((n=n.apply(s,e||[])).next())})},$r;Object.defineProperty(Ri,"__esModule",{value:!0});Ri.Client=Ri.MatchMakeError=void 0;const y0=qs,M0=Qi,S0=js,E0=ts,T0=Js;class Zs extends Error{constructor(e,t){super(e),this.code=t,Object.setPrototypeOf(this,Zs.prototype)}}Ri.MatchMakeError=Zs;const wc=typeof window<"u"&&typeof(($r=window?.location)===null||$r===void 0?void 0:$r.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";class b0{constructor(e=wc,t){var n,i;if(typeof e=="string"){const r=e.startsWith("/")?new URL(e,wc):new URL(e),o=r.protocol==="https:"||r.protocol==="wss:",a=Number(r.port||(o?443:80));this.settings={hostname:r.hostname,pathname:r.pathname,port:a,secure:o}}else e.port===void 0&&(e.port=e.secure?443:80),e.pathname===void 0&&(e.pathname=""),this.settings=e;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new S0.HTTP(this,t?.headers||{}),this.auth=new E0.Auth(this.http),this.urlBuilder=t?.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((i=(n=window?.location)===null||n===void 0?void 0:n.hostname)===null||i===void 0)&&i.includes("discordsays.com"))&&(this.urlBuilder=T0.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(e,t={},n){return on(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",e,t,n)})}create(e,t={},n){return on(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",e,t,n)})}join(e,t={},n){return on(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",e,t,n)})}joinById(e,t={},n){return on(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",e,t,n)})}reconnect(e,t){return on(this,void 0,void 0,function*(){if(typeof e=="string"&&typeof t=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[n,i]=e.split(":");if(!n||!i)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",n,{reconnectionToken:i},t)})}getAvailableRooms(e=""){return on(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${e}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(e,t,n){return on(this,void 0,void 0,function*(){const i=this.createRoom(e.room.name,t);i.roomId=e.room.roomId,i.sessionId=e.sessionId;const r={sessionId:i.sessionId};e.reconnectionToken&&(r.reconnectionToken=e.reconnectionToken);const o=n||i;return i.connect(this.buildEndpoint(e.room,r),e.devMode&&(()=>on(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${i.roomId}'...`);let a=0,c=8;const h=()=>on(this,void 0,void 0,function*(){a++;try{yield this.consumeSeatReservation(e,t,o),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${i.roomId}'`)}catch{a<c?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${a} out of ${c})`),setTimeout(h,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(h,2e3)})),o,this.http.headers),new Promise((a,c)=>{const h=(u,f)=>c(new y0.ServerError(u,f));o.onError.once(h),o.onJoin.once(()=>{o.onError.remove(h),a(o)})})})}createMatchMakeRequest(e,t,n={},i,r){return on(this,void 0,void 0,function*(){const o=(yield this.http.post(`matchmake/${e}/${t}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).data;if(o.error)throw new Zs(o.error,o.code);return e==="reconnect"&&(o.reconnectionToken=n.reconnectionToken),yield this.consumeSeatReservation(o,i,r)})}createRoom(e,t){return new M0.Room(e,t)}buildEndpoint(e,t={}){const n=[];for(const o in t)t.hasOwnProperty(o)&&n.push(`${o}=${t[o]}`);let i=this.settings.secure?"wss://":"ws://";e.publicAddress?i+=`${e.publicAddress}`:i+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const r=`${i}/${e.processId}/${e.roomId}?${n.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(r)):r}getHttpEndpoint(e=""){const t=e.startsWith("/")?e:`/${e}`,n=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${t}`;return this.urlBuilder?this.urlBuilder(new URL(n)):n}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}}Ri.Client=b0;var Qs={};Object.defineProperty(Qs,"__esModule",{value:!0});Qs.SchemaSerializer=void 0;const Ac=bl;class w0{setState(e){return this.state.decode(e)}getState(){return this.state}patch(e){return this.state.decode(e)}teardown(){var e,t;(t=(e=this.state)===null||e===void 0?void 0:e.$changes)===null||t===void 0||t.root.clearRefs()}handshake(e,t){this.state?new Ac.Reflection().decode(e,t):this.state=Ac.Reflection.decode(e,t)}}Qs.SchemaSerializer=w0;var er={};Object.defineProperty(er,"__esModule",{value:!0});er.NoneSerializer=void 0;class A0{setState(e){}getState(){return null}patch(e){}teardown(){}handshake(e){}}er.NoneSerializer=A0;(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.SchemaSerializer=s.registerSerializer=s.Auth=s.Room=s.ErrorCode=s.Protocol=s.MatchMakeError=s.Client=void 0;var e=Ri;Object.defineProperty(s,"Client",{enumerable:!0,get:function(){return e.Client}}),Object.defineProperty(s,"MatchMakeError",{enumerable:!0,get:function(){return e.MatchMakeError}});var t=Eo;Object.defineProperty(s,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),Object.defineProperty(s,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}});var n=Qi;Object.defineProperty(s,"Room",{enumerable:!0,get:function(){return n.Room}});var i=ts;Object.defineProperty(s,"Auth",{enumerable:!0,get:function(){return i.Auth}});const r=Qs;Object.defineProperty(s,"SchemaSerializer",{enumerable:!0,get:function(){return r.SchemaSerializer}});const o=er,a=ti;Object.defineProperty(s,"registerSerializer",{enumerable:!0,get:function(){return a.registerSerializer}}),(0,a.registerSerializer)("schema",r.SchemaSerializer),(0,a.registerSerializer)("none",o.NoneSerializer)})(Sl);class R0{constructor(e="ws://localhost:2567"){k(this,"client");k(this,"room",null);k(this,"myId","");k(this,"seq",0);k(this,"inputHistory",[]);k(this,"predicted",{x:0,y:1.8,z:0,yaw:0,pitch:0});k(this,"remotePlayers",new Map);k(this,"phase","WARMUP");k(this,"roundNumber",0);k(this,"atkScore",0);k(this,"defScore",0);k(this,"bombPlanted",!1);k(this,"bombSite",null);k(this,"bombTimer",0);k(this,"myHp",100);k(this,"myAlive",!0);k(this,"myKills",0);k(this,"myDeaths",0);k(this,"myMoney",800);k(this,"myAmmoInMag",30);k(this,"myAmmoReserve",90);k(this,"myReloading",!1);k(this,"onKill");k(this,"onHit");k(this,"onBombPlanted");k(this,"onBombDefused");k(this,"onRoundEnd");this.client=new Sl.Client(e)}async join(e,t){this.room=await this.client.joinOrCreate("game",{name:e,team:t}),this.myId=this.room.sessionId,this.room.state.players.onAdd=(n,i)=>{this.remotePlayers.set(i,{id:i,name:n.name,team:n.team,x:n.x,y:n.y,z:n.z,yaw:n.yaw,pitch:n.pitch,hp:n.hp,alive:n.alive,currentWeapon:n.currentWeapon,kills:n.kills,deaths:n.deaths}),n.onChange=r=>{const o=this.remotePlayers.get(i);if(o){for(const a of r)o[a.field]=a.value;i===this.myId&&(this.myHp=n.hp,this.myAlive=n.alive,this.myKills=n.kills,this.myDeaths=n.deaths,this.myMoney=n.money,this.myAmmoInMag=n.ammoInMag,this.myAmmoReserve=n.ammoReserve,this.myReloading=n.reloading)}}},this.room.state.players.onRemove=(n,i)=>{this.remotePlayers.delete(i)},this.room.state.onChange=n=>{for(const i of n)i.field==="phase"?this.phase=i.value:i.field==="roundNumber"?this.roundNumber=i.value:i.field==="atkScore"?this.atkScore=i.value:i.field==="defScore"?this.defScore=i.value:i.field==="bombPlanted"?this.bombPlanted=i.value:i.field==="bombSite"?this.bombSite=i.value:i.field==="bombTimer"&&(this.bombTimer=i.value)},this.room.onMessage("hit",n=>this.onHit?.(n.shooterId,n.targetId,n.damage,n.headshot)),this.room.onMessage("kill",n=>this.onKill?.(n.killerId,n.victimId,n.weaponId,n.headshot)),this.room.onMessage("bombPlanted",n=>this.onBombPlanted?.(n.site,n.planterId)),this.room.onMessage("bombDefused",n=>this.onBombDefused?.(n.defuserId)),this.room.onMessage("roundEnd",n=>this.onRoundEnd?.(n.winner,n.reason))}get isConnected(){return this.room!==null&&this.room.state!==void 0}sendInput(e){if(!this.room)return;const t={...e,seq:this.seq++};this.room.send("input",t),this.predict(t),this.inputHistory.push({seq:t.seq,input:t,state:{...this.predicted}}),this.inputHistory.length>60&&this.inputHistory.shift()}predict(e){const t=Math.min(e.dt,.05),n=e.flags,i={x:-Math.sin(this.predicted.yaw),z:-Math.cos(this.predicted.yaw)},r={x:Math.cos(this.predicted.yaw),z:-Math.sin(this.predicted.yaw)};let o=0,a=0;n.forward&&(o+=i.x,a+=i.z),n.back&&(o-=i.x,a-=i.z),n.right&&(o+=r.x,a+=r.z),n.left&&(o-=r.x,a-=r.z);const c=Math.sqrt(o*o+a*a);c>0&&(o/=c,a/=c);const h=n.crouch?2:n.walk?2.8:7;this.predicted.x+=o*h*t,this.predicted.z+=a*h*t,this.predicted.yaw=e.yaw,this.predicted.pitch=e.pitch,n.jump&&this.predicted.y<=1.85?this.predicted.y=3:this.predicted.y>1.8&&(this.predicted.y=Math.max(1.8,this.predicted.y-.5))}sendFire(e,t,n){this.room?.send("fire",{weaponId:e,origin:t,dir:n})}sendReload(){this.room?.send("reload",{})}sendSwitchWeapon(e){this.room?.send("switchWeapon",{weaponId:e})}sendPlantBomb(){this.room?.send("plantBomb",{})}sendDefuseBomb(){this.room?.send("defuseBomb",{})}getPredictedPosition(){return{...this.predicted}}setInitialPosition(e,t,n){this.predicted.x=e,this.predicted.y=t,this.predicted.z=n}}const Rc=1.8,C0=1.6;class P0{constructor(e,t){k(this,"renderer");k(this,"input");k(this,"weapon");k(this,"bullets");k(this,"ui");k(this,"weaponView");k(this,"network");k(this,"clock",new dl);k(this,"running",!1);k(this,"fovSetting",90);k(this,"wasScoped",!1);k(this,"tracerLines",[]);k(this,"remoteMeshes",new Map);k(this,"loop",()=>{if(!this.running)return;if(this.ui.settingsOpen){this.renderer.render(),requestAnimationFrame(this.loop);return}requestAnimationFrame(this.loop);const e=Math.min(this.clock.getDelta(),.05),t=performance.now(),n=this.input.getInput();this.network.sendInput({dt:e,yaw:this.input.yaw,pitch:this.input.pitch,flags:n});const i=this.network.getPredictedPosition(),r=new L(i.x,i.y-Rc+C0,i.z);this.renderer.camera.position.copy(r),this.renderer.camera.rotation.y=i.yaw+this.weapon.recoilYawOffset,this.renderer.camera.rotation.x=i.pitch-this.weapon.recoilPitchOffset,n.scope&&!this.wasScoped&&this.weapon.toggleScope(),this.wasScoped=n.scope;const o=this.weapon.getCurrent();this.ui.setScoped(o.scoped);const a=o.scoped?90/o.config.scopeZoom:this.fovSetting;if(this.renderer.setFOV(this.renderer.camera.fov+(a-this.renderer.camera.fov)*Math.min(1,e*10)),this.weapon.update(t,e),this.weaponView.update(e),n.fire&&this.weapon.tryFire(t,!1,!1)){const c=this.renderer.camera.position.clone(),h=new L;this.renderer.camera.getWorldDirection(h);const u=this.weapon.getSpread();h.x+=(Math.random()-.5)*u,h.y+=(Math.random()-.5)*u,h.z+=(Math.random()-.5)*u,h.normalize(),this.network.sendFire(o.config.id,{x:c.x,y:c.y,z:c.z},{x:h.x,y:h.y,z:h.z}),this.weaponView.fire()}this.input.consumeKey("Digit1")&&(this.weapon.switchWeapon("rifle"),this.network.sendSwitchWeapon("rifle")),this.input.consumeKey("Digit2")&&(this.weapon.switchWeapon("pistol"),this.network.sendSwitchWeapon("pistol")),this.input.consumeKey("Digit3")&&(this.weapon.switchWeapon("sniper"),this.network.sendSwitchWeapon("sniper")),n.reload&&(this.weapon.reload(),this.network.sendReload()),this.ui.setAmmo(this.network.myAmmoInMag,this.network.myAmmoReserve,this.network.myReloading),this.ui.setHP(this.network.myHp),this.ui.update(e),this.weaponView.reload(this.network.myReloading),this.updateRemotePlayers(),this.bullets.update(e),this.updateTracers(),this.renderer.render()});this.renderer=new pl(e),this.input=new ml(e),this.weapon=new gl,this.bullets=new _l(this.renderer.scene),this.ui=new vl,this.weaponView=new xl(this.renderer.camera),this.network=new R0(t),this.ui.onSettingsChange=n=>{this.input.sensitivity=n.sensitivity,this.fovSetting=n.fov},this.input.sensitivity=this.ui.settings.sensitivity,this.fovSetting=this.ui.settings.fov,yl(this.renderer.scene,An)}async start(){await this.network.join("Player");const e=this.network.remotePlayers.get(this.network.myId);e&&this.network.setInitialPosition(e.x,e.y,e.z),this.setupNetworkCallbacks(),this.running=!0,this.clock.start(),this.loop()}setupNetworkCallbacks(){this.network.onKill=(e,t)=>{this.network.myId,this.network.myId}}updateRemotePlayers(){for(const[e,t]of this.network.remotePlayers){let n=this.remoteMeshes.get(e);if(!n){n=this.createRemoteMesh(t),this.remoteMeshes.set(e,n),this.renderer.scene.add(n);const i={id:e,mesh:n,hp:t.hp,headMesh:n.children[1]};this.bullets.registerTarget(i)}n.position.set(t.x,t.y-Rc,t.z),n.rotation.y=t.yaw,n.visible=t.alive}for(const[e,t]of this.remoteMeshes)this.network.remotePlayers.has(e)||(this.renderer.scene.remove(t),this.remoteMeshes.delete(e),this.bullets.unregisterTarget(e))}createRemoteMesh(e){const t=new Kn,n=e.team==="ATK"?13386820:4491519,i=new xt(new Xs(.4,1,4,8),new cn({color:n}));i.position.y=.5,t.add(i);const r=new xt(new Zi(.25,12,12),new cn({color:16764074}));return r.position.y=1.5,t.add(r),t}updateTracers(){this.tracerLines.forEach(e=>this.renderer.scene.remove(e)),this.tracerLines=[];for(const e of this.bullets.tracers){const t=new zt().setFromPoints([e.from,e.to]),n=new ks({color:16776960,transparent:!0,opacity:e.life*10}),i=new so(t,n);this.renderer.scene.add(i),this.tracerLines.push(i)}}}const Xr=document.getElementById("app"),L0=new URLSearchParams(window.location.search),D0=L0.has("multiplayer");D0?new P0(Xr).start().then(()=>{qr(!0)}).catch(e=>{console.error("Multiplayer connection failed:",e),qr(!1,"多人连接失败，请检查服务器是否启动 (npm run server)"),new Mc(Xr).start()}):(new Mc(Xr).start(),qr(!1));function qr(s,e){const t=document.createElement("div");t.style.cssText="position:fixed;top:10px;left:50%;transform:translateX(-50%);color:#fff;font-family:monospace;font-size:13px;text-shadow:0 0 4px #000;z-index:20;max-width:90vw;text-align:center;line-height:1.5;",e?t.innerHTML=`<span style="color:#ff6666;">${e}</span><br>已自动回退到单人 Bot 模式`:s?t.innerHTML="【多人模式】点击屏幕锁定鼠标 | WASD移动 | 空格跳 | Ctrl蹲 | Shift走 | 左键射击 | 右键开镜 | R换弹 | 1/2/3/4切枪 | ESC设置":t.innerHTML="点击屏幕锁定鼠标 | WASD移动 | 空格跳 | Ctrl蹲 | Shift走 | 左键射击 | 右键开镜 | R换弹 | 1/2/3/4切枪 | B购买 | E安/拆弹 | Tab计分板 | ESC设置",document.body.appendChild(t)}
