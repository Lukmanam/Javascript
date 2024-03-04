// it is an innerfunction which can




var a=10;
function sum(){
    var b=20;
    function final(){
        result=a+b;
        console.log(result);
    }
    final()
    
}

sum()



function as(){
    var a1=10;
    function b(){
        var a2=20;
        function c(){
            var a3=30;
            result=a1+a2+a3
            console.log( result);
        }
         c()
    }
    b()
}


as()

