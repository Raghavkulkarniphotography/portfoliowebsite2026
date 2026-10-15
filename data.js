/* ===== EDIT HERE: contact details ===== */
const SITE={wa:"91XXXXXXXXXX",ig:"yourhandle",email:"raghavkulkarniphotography@gmail.com"}; // wa: country code + number, no + or spaces; ig: username without @
/* ===== EDIT HERE: portfolio. To add a photo: upload it, add its number to the list ===== */
const P="";
/* To add photos: upload them into the folder as e.g. ecommerce-007.webp, then raise "max" to the highest number.
   "skip" lists numbers that don't exist (so no blank gaps). */
const SETS={
 jewellery:{t:"Jewellery",max:14,skip:[]},
 skincare:{t:"Skincare and beauty",max:17,skip:[11]},
 product:{t:"Product",max:18,skip:[]},
 ecommerce:{t:"E-commerce",max:11,skip:[]}};
const SELECTED=["jewellery-002","skincare-002","product-001","skincare-007","jewellery-006","product-009","skincare-004","jewellery-003"];
/* [file name, display name, optional tile colour for light logos] */
const LOGOS=[["rockals","Rockals","#14171C"],["meetreats","Meetreats"],["future-and-culture","Future and Culture"],["loni-tales","Loni Tales"],["valtric","Valtric"],["valencia-productions","Valencia Productions"]];
const ALT={}; // optional per-photo alt text, e.g. {"jewellery-007":"Gold ring on a hand"}
const TESTIMONIALS=[]; // real ones only: {q:"Quote",n:"Name, Brand"}; section stays hidden while empty
const url=id=>P+id.split("-")[0]+"/"+id+".webp";
const ids=k=>{const s=SETS[k];return Array.from({length:s.max},(_,i)=>i+1).filter(n=>!s.skip.includes(n)).map(n=>k+"-"+String(n).padStart(3,"0"))};
