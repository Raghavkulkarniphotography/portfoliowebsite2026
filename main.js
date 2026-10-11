/* ===== EDIT THESE THREE LINES ===== */
const WHATSAPP="91XXXXXXXXXX"; // country code + number, no + or spaces
const INSTAGRAM="yourhandle";  // username without @
const EMAIL="raghavkulkarniphotography@gmail.com";
const TESTIMONIALS=[]; // add real ones: {q:"Quote",n:"Name, Brand"}; section hides while empty
/* ================================== */
const $=(s,r=document)=>r.querySelector(s),$$=s=>[...document.querySelectorAll(s)],R=(p,a,b)=>Array.from({length:b-a+1},(_,i)=>p+(a+i)+".webp");
const G={skincare:["product7","product15","product2","product17","product18","product19","product4","product5","product6"].map(n=>n+".webp"),jewellery:["product8.webp","product10.webp","product11.webp",...R("jewellery",1,20)],product:[...R("product",1,7),"product9.webp",...R("product",12,40)],interior:R("interior",1,16)};
const pic=(s,a)=>{const i=new Image();let t=0;i.alt=a||"";i.decoding="async";i.loading="lazy";i.onerror=()=>{if(!t++)i.src=s;else i.parentNode&&i.parentNode.remove()};i.src="thumbs/"+s;return i};
const pg=location.pathname.split("/").pop()||"index.html";
document.body.insertAdjacentHTML("afterbegin",`<header class="nav"><a href="index.html">Raghav Kulkarni</a><nav>${[["index.html","Home"],["work.html","Work"],["packages.html","Packages"],["contact.html","About and contact"]].map(([h,t])=>`<a href="${h}"${h===pg?' class="on"':""}>${t}</a>`).join("")}</nav></header>`);
document.body.insertAdjacentHTML("beforeend",`<footer class="foot"><span>Raghav Kulkarni, Pune, India</span><span>© 2026</span></footer><div class="lb" id="lb"><img alt=""></div><div class="lb" id="vm"><iframe allow="autoplay;encrypted-media;picture-in-picture" allowfullscreen title="Film"></iframe></div>`);
const lb=$("#lb"),vm=$("#vm"),shut=()=>{lb.classList.remove("on");vm.classList.remove("on");$("iframe",vm).src=""};
lb.onclick=vm.onclick=shut;addEventListener("keydown",e=>e.key==="Escape"&&shut());
const show=s=>{$("img",lb).src=s;lb.classList.add("on")},play=id=>{$("iframe",vm).src="https://www.youtube.com/embed/"+id+"?autoplay=1&rel=0&playsinline=1";vm.classList.add("on")};
const fill=(el,files,alt)=>{el.innerHTML="";files.forEach(s=>{const d=document.createElement("div");d.onclick=()=>show(s);d.appendChild(pic(s,alt));el.appendChild(d)})};
const ok=!WHATSAPP.includes("X"),wa=t=>"https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(t);
const enq=s=>{const t="Hi Raghav, I'm interested in "+s+". About my brand: ";return ok?wa(t):"mailto:"+EMAIL+"?subject="+encodeURIComponent(s+" enquiry")+"&body="+encodeURIComponent(t)};
$$("[data-enq]").forEach(a=>{a.href=enq(a.dataset.enq);if(ok){a.target="_blank";a.rel="noopener"}});
const ig=$("#ig");if(ig)INSTAGRAM!=="yourhandle"?(ig.href="https://instagram.com/"+INSTAGRAM):ig.remove();
$$("[data-img]").forEach(d=>d.appendChild(pic(d.dataset.img,d.dataset.alt)));
const sel=$("#sel");if(sel)fill(sel,["product7","jewellery3","product15","jewellery2","product17","jewellery4"].map(n=>n+".webp"),"Product photography by Raghav Kulkarni");
const fm=$("#film");if(fm)fm.onclick=()=>play("fm0evRNFji0");
const ts=$("#tst");if(ts)TESTIMONIALS.length?($(".qs",ts).innerHTML=TESTIMONIALS.map(t=>`<div class="q"><p>${t.q}</p><span>${t.n}</span></div>`).join("")):ts.remove();
$$("[data-p]").forEach(b=>b.onclick=()=>{$$("[data-p]").forEach(x=>{x.classList.toggle("on",x===b);x.setAttribute("aria-selected",x===b)});$$(".pan").forEach(p=>p.hidden=p.id!==b.dataset.p)});
if($("#g")){const ecom=async()=>{const a=R("ecom",1,60),o=await Promise.all(a.map(f=>fetch(f,{method:"HEAD"}).then(r=>r.ok).catch(()=>0)));return a.filter((_,i)=>o[i])};
const hk=async()=>{const h=location.hash.slice(1),k=["skincare","jewellery","product","ecom","interior"].includes(h)?h:"jewellery",g=$("#g");$$("[data-g]").forEach(b=>b.classList.toggle("on",b.dataset.g===k));g.className="grid"+(k==="ecom"?" sq":"");fill(g,k==="ecom"?await ecom():G[k],"Photography by Raghav Kulkarni")};
$$("[data-g]").forEach(b=>b.onclick=()=>location.hash=b.dataset.g);addEventListener("hashchange",hk);hk()}
