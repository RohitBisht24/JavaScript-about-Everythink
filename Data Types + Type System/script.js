/*

    basically two type of data types

    Primitives -->  aisi saari value jinko copy karna per tumhe ek real copy mil jaye
      like : ( number, string, boolean, null, undefined, symbol, bigint)

      
      non-Primitives(Reference type) --> inko copy karne per real copy nhi milegi but apko reference milega parent ka .
      like : ( arrays, objects and functions)
      
      // symbol  --> unique immutable value create kart hai.
          future main hun koi libraries use karege ab is case mai nru libraries main koi baar kuchh feilds hoti hai jinse similar hum bhi banaa dete hai aur galti se hamari banaai hui fields us library ki original fields ko change kar deta hai.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    ->  ''  =  single quotes
    ->  ""  =  double quotes
    ->  ``  =  backticks(tamplate literals )/(template string)/(split replace includes)


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


      -->  typeof Operators
            used to check the data type of a value:

            typeof "Rohit"    // "string"
            typeof 99         //  "number"
            typeof true       //  "boolean"
            typeof undefined  //  "undefined"
            typeof null       //  "object" <-  known bug
            typeof []         //  "object"
            typeof {}         //  "object"
            typeof function {}()    //  "object"


            note : typeof null ===  "object" is a bug, but has existed since the early day of JS


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


      //  --> Dynamic typing = js main static typing nahi and yaha per hai dynamic typing jiska matlab hai ki  aap data ko change kar skte ho kyuki yaha per dynamic data types hai
      

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



      //  type coercion  (== vs ===)

        type coercion --> concept jismein apkaa ek type automatically convert hojaayega

        "5" + 2     // possible in js
          = '51'

        "5" - 2     // possible in js
          = 4
         
          
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


        // Truthy vs falsy values

            0 false "" Null undefined NaN documents.all     --> ye saari values false main convert hoti

              and rest all -->  turn main convert hongi

            
*/            





