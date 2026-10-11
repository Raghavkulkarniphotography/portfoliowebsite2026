const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches,B=document.body,H=document.documentElement;
const S=(k,v)=>{try{return v?sessionStorage.setItem(k,v):sessionStorage.getItem(k)}catch(e){}};
/* nav, footer, viewers */
const cur=(location.pathname.split("/").pop()||"index").replace(".html","");
B.insertAdjacentHTML("afterbegin",`<header class="nav" id="nav"><a href="index.html">Raghav Kulkarni</a><button class="mb" id="mb" aria-expanded="false">Menu</button><nav>${[["index","Home"],["work","Work"],["packages","Packages"],["contact","About and contact"]].map(([h,t],i)=>`<a href="${h}.html" style="--i:${i}"${h===cur?' class="on"':""}>${t}</a>`).join("")}<a class="btn" data-enq="a project" style="--i:4">Start a project</a></nav></header>`);
B.insertAdjacentHTML("beforeend",`<footer class="foot"><span>Raghav Kulkarni, Pune, India</span><span>© 2026</span></footer><div class="lb" id="lb"><img alt=""></div><div class="lb" id="vm"><iframe allow="autoplay;encrypted-media;picture-in-picture" allowfullscreen title="Film"></iframe></div>`);
const lb=$("#lb"),vm=$("#vm"),shut=()=>{lb.classList.remove("on");vm.classList.remove("on");$("iframe",vm).src="about:blank"};
lb.onclick=vm.onclick=shut;addEventListener("keydown",e=>e.key==="Escape"&&shut());
const show=s=>{$("img",lb).src=s;lb.classList.add("on")};
const mb=$("#mb");mb.onclick=()=>{const o=B.classList.toggle("m");mb.setAttribute("aria-expanded",o);mb.textContent=o?"Close":"Menu"};
let y=0;addEventListener("scroll",()=>{const c=scrollY,n=$("#nav");n.classList.toggle("sc",c>40);n.classList.toggle("hd",c>y&&c>300&&!B.classList.contains("m"));y=c},{passive:true});
/* reveals */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
const watch=el=>el.closest(".hero")?0:io.observe(el);
$$(".stw").forEach(el=>{el.innerHTML=el.textContent.trim().split(/\s+/).map((w,i)=>`<span style="--i:${i}">${w}</span>`).join(" ")});
$$("[data-r],.rv,.stw").forEach(watch);
$$(".hero [data-r],.hero .rv").forEach((e,i)=>e.style.setProperty("--w",.55+i*.1+"s"));
const go=()=>{H.classList.add("go");$$(".hero [data-r],.hero .rv").forEach(e=>e.classList.add("in"))};
if($(".hero")&&!RM&&!S("i")){S("i",1);const im=new Image();im.src="logo.png";
 Promise.race([im.decode?im.decode():Promise.resolve(),new Promise((_,j)=>setTimeout(j,2000))]).then(()=>{
  B.insertAdjacentHTML("beforeend",`<div id="intro" aria-hidden="true">${["t","b"].map(c=>`<div class="ip ${c}"><div class="lw"><img src="logo.png" alt=""></div></div>`).join("")}</div>`);
  const it=$("#intro"),up=()=>{if(it.classList.contains("up"))return;it.classList.add("up");setTimeout(go,150);setTimeout(()=>it.remove(),1100)};it.onclick=up;setTimeout(up,1100)}).catch(go)}else go();
/* portfolio grids */
const mk=(f,a)=>{const d=document.createElement("div"),i=new Image();d.className="rv";i.src=f;i.alt=a;i.loading="lazy";i.decoding="async";i.onerror=()=>d.remove();d.onclick=()=>show(f);d.appendChild(i);return d};
const fill=(el,L)=>{el.innerHTML="";L.forEach(([f,a],i)=>{const d=mk(f,a);d.style.setProperty("--w",i%5*.08+"s");el.appendChild(d);io.observe(d)})};
const al=id=>ALT[id]||SETS[id.split("-")[0]].t+" photography by Raghav Kulkarni";
const sel=$("#sel");if(sel)fill(sel,SELECTED.map(id=>[url(id),al(id)]));
const g=$("#g");if(g){let first=1;const hk=()=>{const h=location.hash.slice(1),k=SETS[h]?h:"jewellery";$$("[data-g]").forEach(b=>b.classList.toggle("on",b.dataset.g===k));g.classList.add("out");
 setTimeout(()=>{fill(g,ids(k).map(id=>[url(id),al(id)]));g.classList.remove("out")},first?0:260);first=0};
 $$("[data-g]").forEach(b=>b.onclick=()=>location.hash=b.dataset.g);addEventListener("hashchange",hk);hk()}
/* client logos: a static grid while there are few; the sliding strip (4 copies, no gap) once there are 10 or more */
const mq=$("#mq");if(mq){const tile=([n,t,bg],d,c)=>`<div class="lg${c}"${d?" data-d aria-hidden=true":""}${bg?` style="background:${bg}"`:""}><img src="${P}clients/${n}-logo.webp" alt="${d?"":t+" logo"}" loading="lazy" onerror="this.parentNode.remove()"></div>`;
 if(LOGOS.length>=10){const one=d=>LOGOS.map(l=>tile(l,d,"")).join("");mq.innerHTML=one(0)+one(1)+one(1)+one(1)}
 else{mq.parentNode.className="";mq.className="lgs";mq.innerHTML=LOGOS.map(l=>tile(l,0," rv")).join("");$$(".rv",mq).forEach((d,i)=>{d.style.setProperty("--w",i*.08+"s");io.observe(d)})}}
const ts=$("#tst");if(ts){if(TESTIMONIALS.length){$(".qs",ts).innerHTML=TESTIMONIALS.map(t=>`<div class="q" data-r><p>${t.q}</p><span>${t.n}</span></div>`).join("");$$("[data-r]",ts).forEach(watch)}else ts.remove()}
const fm=$("#film");if(fm)fm.onclick=()=>{$("iframe",vm).src="https://www.youtube.com/embed/fm0evRNFji0?autoplay=1&rel=0&playsinline=1";vm.classList.add("on")};
/* packages + enquiries */
$$("[data-p]").forEach(b=>b.onclick=()=>{$$("[data-p]").forEach(x=>{x.classList.toggle("on",x===b);x.setAttribute("aria-selected",x===b)});$$(".pan").forEach(p=>p.hidden=p.id!==b.dataset.p)});
const ok=!SITE.wa.includes("X"),enq=s=>{const t="Hi Raghav, I'm interested in "+s+". About my brand: ";return ok?"https://wa.me/"+SITE.wa+"?text="+encodeURIComponent(t):"mailto:"+SITE.email+"?subject="+encodeURIComponent(s+" enquiry")+"&body="+encodeURIComponent(t)};
$$("[data-enq]").forEach(a=>{a.href=enq(a.dataset.enq);if(ok){a.target="_blank";a.rel="noopener"}});
const ig=$("#ig");if(ig)SITE.ig!=="yourhandle"?(ig.href="https://instagram.com/"+SITE.ig):ig.remove();
