// task1
let rengler=  new Set()
alert("Sevimli renglerinizi daxil edin 3 haqqiniz var daha sonra sile bilersiniz")
for(let i=0;i<3;i++){
    let sorgu=prompt('Sevimli renginizi daxil edin')
    rengler.add(sorgu)
}
let wantToDelete=prompt('Daxil etdiyiniz rebgi silmek isteyirsiniz?')
if(wantToDelete=='xeyr'){
    for (const values of rengler) {
        console.log(values);
        }
}
else if(wantToDelete=="he"){
    let reng=prompt("Daxil etdiyiniz hansi rengi silmek istediyinizi qeyd edin")
rengler.delete(reng)
for (const values of rengler) {
       console.log(values);
       }
}
else{
    alert("Isteyiniz basa dusulmedi")
}
// task2
let daysOfWeek=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
let set = new Set(daysOfWeek)
console.log(set)
let sorgu2=prompt("Do you want to add or delete the days of the week")
if(sorgu2=='yes'){
    sorgu3=prompt("Choose add or delete")
    if(sorgu3=='add'){
        let sorgu4=prompt("What do you want to add? All of them are here")
        set.add(sorgu4)
    }
    else if(sorgu3=='delete'){
        let sorgu5=prompt("What do you want to delete?")
    set.delete(sorgu5)
    }
 for (const values of set) {
    console.log(values);
}
}
else if (sorgu3='no'){
console.log(set)
}

// task3
let word=prompt("Enter a word")
let splitedWord=word.split("")
let wordSet= new Set (splitedWord)
if(wordSet.size==splitedWord.length){
    console.log("Tekrarlanan herf yoxdur")
}
else{
    console.log('Tekrarlanan herf var');
}
console.log(wordSet)



    
 //task4
let numbers=new Set();
for(let i=0;i<5;i++){
    let a=Math.trunc(Math.random()*100)
    numbers.add(a)
}
let eded=prompt('Eded daxil edin')
numbers.add(eded)
for (const values of numbers) {
    console.log(values);
  }


//task5
function Toplama(a,b){
 return a+b;
}
function Vurma(a,b){
    return a*b;
}
function hesablama(a,b,emel){
    return emel(a,b)
}
console.log(hesablama(3 ,1 ,Toplama));
console.log(hesablama(3 ,1 ,Vurma));

//task6
function Quvvet(a){
return a**3;
}
console.log(Quvvet(2))
