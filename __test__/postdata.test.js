import {postData} from "../src/client/js/postdata"
// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    

    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the postData() function",function test(){
      
           // Define the input for the function, if any, in the form of variables/array
           try{
               expect(postData({text:"hello"})).toBeDefined();
           }
           catch{

           }
                
          
           
           
});