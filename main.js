function hi(Callbacks){
    return `Hola ${Callbacks("Alex")}`;
}
function name1(p1){
    return `soy ${p1}`;
}
console.log(hi(name1));


(function (p1){ 
    console.log(`Hola ${p1} como estas`);
})("Alex");


const inc = (function (){
    let num = -1;
    return function (p1=""){
        if (p1==null){
            num = -1;
        }
        num++;
        return num;
    }
})();
console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc(null));
console.log(inc());



let arrow = () => {
    return "Hola";
}
let arrow2 = (p1) => {
    return `${p1}`;
}
let arrow3 = (p1) => `${p1}`;
let arrow4 = p1 => {
    return `${p1}`;
}
let arrow5 = p1 => `${p1}`;
let arrow6 = (p1,p2) => `${p1} ${p2}`;
let arrow7 = (p1,p2) => {
    return `${p1} ${p2}`
};
