// Document Objects
const day = document.getElementById("dd");
const month = document.getElementById("mm");
const year = document.getElementById("yyyy");
const button = document.getElementById("request");
const reday = document.getElementById("day");
const remon = document.getElementById("month");
const reyear = document.getElementById("year");
const erday = document.getElementById("errdd");
const ermon = document.getElementById("errmm");
const eryer = document.getElementById("erryy");

const currentDate = new Date(); 
const cuyear = currentDate.getFullYear();
const cumonth = currentDate.getMonth() + 1;
const cuday = currentDate.getDate();

button.addEventListener("click", getinput);

function getinput(){
    const usday = day.value;
    const usmon = month.value;
    const usyear = year.value;

    day.style.borderColor ='hsl(0, 0%, 86%)'
    month.style.borderColor ='hsl(0, 0%, 86%)'
    year.style.borderColor ='hsl(0, 0%, 86%)'

    const myLabel = document.querySelector('label[for="dd"]');
    const myLabe2 = document.querySelector('label[for="mm"]');
    const myLabe3 = document.querySelector('label[for="yyyy"]');

    erday.innerHTML ='';
    ermon.innerHTML ='';
    eryer.innerHTML ='';

    myLabel.style.color = 'hsl(0, 0%, 8%)'
    myLabe2.style.color = 'hsl(0, 0%, 8%)'
    myLabe3.style.color = 'hsl(0, 0%, 8%)'

    
    if(usday==''){
        erday.innerHTML ='This field is required';
        myLabel.style.color = 'crimson'
        day.style.borderColor = 'crimson'
        erday.style.color = "crimson"
    }
    else if(usday > 31){
        erday.innerHTML ='Must be a valid date';
        myLabel.style.color = 'crimson'
        day.style.borderColor = 'crimson'
        erday.style.color = "crimson"
    }
    else{
    const aday = cuday - usday;
    if(aday <=0){
    reday.innerHTML = usday;
    }
    else{
    reday.innerHTML = aday;
    }
    }   

    
    if(usmon==''){
        ermon.innerHTML ='This field is required';
        myLabe2.style.color = 'crimson'
        month.style.borderColor = 'crimson'
        ermon.style.color = 'crimson'
    }
    else if(usmon > 12){
        ermon.innerHTML ='Must be a valid month';
        myLabe2.style.color = 'crimson'
        month.style.borderColor = 'crimson'
        ermon.style.color = 'crimson'
    }
    else{
    const amon = cumonth - usmon;
    if(amon <0){
    remon.innerHTML = usmon;
    }
    else{
    remon.innerHTML = amon;
    }
    }  

    if(usyear==''){
        eryer.innerHTML ='This field is required';
        myLabe3.style.color = 'crimson'
        year.style.borderColor  = 'crimson'
        eryer.style.color  = 'crimson'
    }
    else if(usyear > cuyear){
        eryer.innerHTML ='Must be a valid year';
        myLabe3.style.color = 'crimson'
        year.style.borderColor  = 'crimson'
        eryer.style.color  = 'crimson'
    }
    else{
        const  ayear = cuyear - usyear;
        reyear.innerHTML = ayear;
    }  

}