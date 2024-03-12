


var count=0

function sayHello(){

    if (count==0) {
        document.getElementById("list2").style.display="block"  
        count++
       
    } else if(count==1) {
       
        document.getElementById("list3").style.display="block"  
        count++
        document.getElementById("p1").innerHTML="Show Less"
      
    }
    else if(count==2) {
       
        document.getElementById("list3").style.display="none"  
        count++
        document.getElementById("p1").innerHTML="Show Less"
      
    }
    else if(count==3){
        document.getElementById("list2").style.display="none"  
        count=0  
        document.getElementById("p1").innerHTML="Show More"
    }
    
    
}

