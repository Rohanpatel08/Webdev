let cate = document.getElementById('category')
function formsubmit(){
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let bmi = document.getElementById('bmi');
    height = height/100;
    let a = Math.round((weight/(height*height)) *100)/100;
    if (a<18.5) {
        cate.innerHTML = "<b>Category: Underweight</b>";
        cate.style.color = "#ff0000";
        bmi.style.color = "#ff0000"
    }else if(a > 18.5 && a < 25){
        cate.innerHTML = "<b>Category: Normal</b>";
        cate.style.color = "#388E3C";
        bmi.style.color = "#388E3C";
    }else if (a>25 && a<30) {
        cate.innerHTML = "<b>Category: Overweight</b>";
        cate.style.color = "#F9A825";
        bmi.style.color = "#F9A825";
    }else if (a>30) {
        cate.innerHTML = "<b>Category: Obesity</b>";
        cate.style.color = "#D50000";
        bmi.style.color = "#D50000";
    }
    bmi.innerHTML = `<b>BMI: ${a} kg/m<sup>2</sup></b>`
    age = "";
    height = "";
    weight = "";
}