/* ===== EDIT HERE: contact details ===== */
const SITE={wa:"91XXXXXXXXXX",ig:"yourhandle",email:"raghavkulkarniphotography@gmail.com"}; // wa: country code + number, no + or spaces; ig: username without @
/* ===== EDIT HERE: portfolio. To add a photo: upload it, add its number to the list ===== */
const P="";
const SETS={
 jewellery:{t:"Jewellery",n:[1,2,3,4,5,6,7,8,9]},
 skincare:{t:"Skincare and beauty",n:[1,2,3,4,5,6,7,8,9,10,12]},
 product:{t:"Product",n:[1,2,3,4,5,6,7,8,9,10,11,12,13]},
 ecommerce:{t:"E-commerce",n:[1,2,3,4,5,6]}};
const SELECTED=["jewellery-002","skincare-002","product-001","skincare-007","jewellery-006","product-009","skincare-004","jewellery-003"];
const LOGOS=[["rockals","Rockals"],["meetreats","Meetreats"],["future-and-culture","Future and Culture"],["loni-tales","Loni Tales"],["valtric","Valtric"],["valencia-productions","Valencia Productions"]];
const ALT={}; // optional per-photo alt text, e.g. {"jewellery-007":"Gold ring on a hand"}
const TESTIMONIALS=[]; // real ones only: {q:"Quote",n:"Name, Brand"}; section stays hidden while empty
const url=id=>P+id.split("-")[0]+"/"+id+".webp";
const ids=k=>SETS[k].n.map(n=>k+"-"+String(n).padStart(3,"0"));
