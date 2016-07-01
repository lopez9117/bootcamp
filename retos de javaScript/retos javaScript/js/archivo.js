              
        var suma = function (a,b){            
            return a+b;            
        }    
        console.log(suma(1,2));                   
    
    
    
  
    
        var longitud = function(variable){
            console.log(variable.length);            
        }
        
        longitud("luis eduardo lopez martinez");
        
    
   
    
    
    
     var fizzbuzz = function ( i ){
        
        if(i%3 === 0 ){        
            console.log("fizz");            
        }            
        else if( i%5 === 0){
            console.log("buzz");    
            }
            else if( i%3 ===0 | i%5===0){
                console.log("fizzbuzz");
            }
        else{
            console.log(i);
            
        }
                    
    }
     
    fizzbuzz( 4);
  
    
         
        var fibonacci = function (n){            
             var a=0;
             var b=1; 
    for(i=0; i<n;i++){
        var numeroTemporal=a;
        a=b;
        b=numeroTemporal+b; 
        console.log(a+" ");
                        }                        
        }        
        fibonacci(10);        
    
    
  
        var multiplier = function( a, b ){
            
            var b= a.map(function(element){
                return element * b;                            
            } );     
                    
            console.log(b);
        }
        multiplier([1,2,3], 4);        
   
    
 
    
    var  a = ["Alberto","Diego","Pedro", ];                                                                                            
         console.log(a.push("Luis","Manolo") );
        console.log( a.prop);                                                
        console.log(a.sort());
        console.log(a.reverse());                                                                                                    
   
    
      
        for(var i= 0;i<20;i++){                       
        var resultado = parImpar(i);
        alert("El número "+ i+" es "+resultado);
 
        function parImpar(numero) {
          if(numero % 2 == 0) {
            return "par";
          }
          else {
            return "impar";
          }
                            }
                            }
  
          
           
          for(var j=0;j<=9;j++){
              
              resultadode9 = j*9;
              
              
              console.log(resultadode9);
              
          }     
               
    
           
            