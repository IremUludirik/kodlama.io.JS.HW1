let sayı1=10;
sayı1="irem uludirik"
let student={id:1, name:"irem"}

//console.log(student);

//function save(ogrenci, puan=10) {
function save(puan=10, ogrenci) {     
    //console.log(ogrenci.name + " : " + puan)
}

//save(student,100);
save(undefined, student);



//ARRAY
let students = ["Engin Demiroğ", "Kavun", "İrem Uludirik", "Marmelat"]
//console.log(students)

let students2=[students, {id:1, name:"Murat"}, "Eskişehir", {city: "İstanbul"} ]

//console.log(students2)


//REST
let showProducts = function (id,...products) { 
    //console.log(id)
    //console.log(products[0])
    //console.log(products[0])
}

//console.log(typeof showProducts)

//showProducts(10, ["Elma","Armut", "Karpuz"])

//SPREAD
let points=[1,2,3,4,50,4,60,14]
console.log(...points)
 

console.log(Math.max(...points))

console.log(..."ABC", "D",... "EFG", "H")



//DESTRUCTURING
let populations=[10000,20000,30000,[40000,50000]]
let [small, medium, high, [veryhigh, maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryhigh)
console.log(maximum)

function somefunction([small1],number) {
    console.log(small1)
    
}

somefunction(populations)


//objeyi distruct

let category={id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name}=category
console.log(id)
console.log(name)



