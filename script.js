const number=document.getElementsByClassName('number');
const operator=document.querySelectorAll('.operator');
const equal=document.querySelector('#equal');
const display=document.querySelector('#display');
const allClear=document.querySelector('#all-clear');
const clear=document.querySelector('#clear');
const decimal=document.querySelector('#decimal')

display.value="0";
let operand1=0;
let operand2=0;
let oper="";
let flag=0;
let k=1;
let decimalCount=0;

//selecting the numbers
for(let i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
    //    console.log((number[i].innerHTML))

       if(flag==0){
           if(decimalCount==0)
           operand1=operand1*10+Number(number[i].innerHTML);
           else if(decimalCount==1){
             operand1=operand1+(Number(number[i].innerHTML)/Math.pow(10,k++));
           }
    //    console.log(display.value)
    //    console.log("o1"+operand1);
        
        display.value=operand1;
    }

    else if(flag==1){
        if(decimalCount==0)
           operand2=operand2*10+Number(number[i].innerHTML);
           else if(decimalCount==1){
             operand2=operand2+(Number(number[i].innerHTML)/Math.pow(10,k++));
          
           }
       
       
        display.value=operand2;
        // console.log(display.value)
        // console.log("o2"+operand2);
    }
   
//operator selection
    for(let i=0;i<operator.length;i++){
        operator[i].addEventListener('click',function(){
            display.value=operator[i].innerHTML;
            oper=operator[i].innerHTML;//to store which operator is selrcted
            flag=1;
            k=1;
            decimalCount=0;
           
        })
     
    }

decimal.addEventListener('click',function(){
        // alert(typeof(operand1))
        // alert(typeof(decimal.innerHTML))

        if(flag==0){
        display.value=operand1+decimal.innerHTML;
        operand1=Number(display.value);
        }
        else if(flag==1){
            display.value=operand2+decimal.innerHTML;
            operand2=Number(display.value);
            }
        decimalCount=1;
    
})




    allClear.addEventListener('click',function(){
        display.value="0";
        operand1=0;
        operand2=0;
        flag=0;
        k=1;
        decimalCount=0;
    })

   


    equal.addEventListener('click',function(){
    flag=0;
   
     if(oper=='+'){
       
        display.value=operand1+operand2;
        operand1=operand1+operand2;
        operand2=0;
        oper="";
     }

     else if(oper=='-'){
        display.value=operand1-operand2;
        operand1=operand1-operand2;
        operand2=0;
        oper="";
     }

     else if(oper=='*'){
        display.value=operand1*operand2;
        operand1=operand1*operand2;
        operand2=0;
        oper="";
     }
     else if(oper=='/'){
        display.value=(operand1/operand2).toFixed(2);
        operand1=(operand1/operand2).toFixed(2);
        operand2=0;
        oper="";
     }

     else if(oper=='%'){
        display.value=(operand1%operand2);
        operand1=(operand1%operand2);
        operand2=0;
        oper="";
     }

    
    })
 
    })}

   

    clear.addEventListener('click',function(){
       if(flag==0){
           display.value=display.value.slice(display.length-2,display.value.length-1); 
           operand1=Math.floor(operand1/10);
          
       }
       else if(flag==1){
           display.value=display.value.slice(display.length-2,display.value.length-1);
           operand2=Math.floor(operand2/10);
          
       }
   })
