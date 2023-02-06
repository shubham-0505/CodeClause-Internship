const m = document.getElementById("meter");
const k = document.getElementById("kilometer");

const f = document.getElementById("feet");
const i = document.getElementById("inch");

const kg = document.getElementById("kilogram");
const lbs = document.getElementById("pounds");

const mb = document.getElementById("megabyte");
const gb = document.getElementById("gigabyte");


m.addEventListener("input",function(){
    let meter = this.value;
    let kilometer = meter * 0.001;
    k.value = kilometer;
});
k.addEventListener("input",function(){
    let kilometer = this.value;
    let meter = kilometer * 1000;
    m.value = meter;
});

f.addEventListener("input",function(){
    let feet = this.value;
    let inch = feet * 12;
    i.value = inch;
});
i.addEventListener("input",function(){
    let inch = this.value;
    let feet = inch /12;
    f.value = feet;
});

kg.addEventListener("input",function(){
    let kilogram = this.value;
    let pounds = kilogram * 2.20462;
    lbs.value = pounds;
});
lbs.addEventListener("input",function(){
    let pounds = this.value;
    let kilogram = pounds / 2.20462;
    kg.value = kilogram;
});

mb.addEventListener("input",function(){
    let megabyte = this.value;
    let gigabyte = megabyte * 0.001;
    gb.value = gigabyte;
});
gb.addEventListener("input",function(){
    let gigabyte = this.value;
    let megabyte = gigabyte * 1000;
    mb.value = megabyte;
});



