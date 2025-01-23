
let string = "";

let buttons = document.querySelectorAll('#v');
let input = document.querySelector('input');


for(let x of buttons){
    x.addEventListener('click',function(e){

        if(e.target.innerHTML === '='){
            string  = eval(string);
            input.value = string;
        }else if(e.target.innerHTML==='C'){
            string='';
            input.value=string;
        }
        else{

        string = string + e.target.innerHTML;
        input.value = string;
        }
    })
}