const url="https://neelpatel05.pythonanywhere.com"
const output1=document.querySelector('.output1')

console.log("------------PROMISE------------")
console.log(fetch(url))


//a promise is returned, state is pending
fetch(url)

//a promise is fulfilled
.then(response => {

    console.log("------------RESPONSE------------")
    console.log(response)

    //check if the response is ok and if so, return data as json
    if (response.ok===false){


        //COULD ADD A SWITCH HERE TO DEFINE ERRORS
        //https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
        throw new Error("Error Number:  "+response.status)

        
    }else{

        return response.json()

    }

}
)
//when this promise is fulfilled data is returned
//some json data may have customised error codes which can 
//be checked here

.then(data => {

    console.log("------------JSON DATA------------")
    //log the data to he console
    console.log(data);
    //call a function to display the data
    
    displayData(data)
})

//catch the  errors here
.catch(err=>{

    console.log("------------LOOK AT ERRORS------------")
    console.log("There was an error: "+ err + err.status)
    console.log(err.message)





})

/*Function to display the data*/
function displayData(data){

    //Log data to the console
    console.log("------------DATA DISPLAY------------")
    console.log(data[0].symbol)
    console.log(data[0].name)
    console.log(data[0].atomicNumber)
    console.log(data[0].atomicMass)

    console.log("------------DATA LOOP------------")

    for(let i=0;i<data.length;i++){

        //console.log(document.getElementById(data[i].atomicNumber).innerHTML)
        const cellText=data[i].atomicNumber+ "<BR>" + data[i].symbol
        document.getElementById(data[i].atomicNumber).innerHTML=cellText

        //Add a tool  tip
        const toolTipText="Atomic Mass" + " : " + data[i].atomicMass 
        document.getElementById(data[i].atomicNumber).title=toolTipText

        //Show data when mouse 
        document.getElementById(data[i].atomicNumber).addEventListener("mouseover",(e)=>{
            console.log(document.getElementById(data[i].atomicNumber).style.borderColor="Red")
            

            output1.innerHTML="Atomic Mass: "+ data[i].atomicMass + "<BR>"
            output1.innerHTML+="Boiling Point: "+ data[i].boilingPoint +  "<BR>"
            output1.innerHTML+="Electronic Configuration: "+ data[i].electronicConfiguration + "<BR>"
            output1.innerHTML+="Standard State: "+ data[i].standardState
        })

        document.getElementById(data[i].atomicNumber).addEventListener("mouseout",(e)=>{
            console.log(document.getElementById(data[i].atomicNumber).style.borderColor="White")
        
            output1.innerHTML="Atomic Mass: "+ "<BR>"
            output1.innerHTML+="Boiling Point: "+  "<BR>"
            output1.innerHTML+="Electronic Configuration: "+ "<BR>"
            output1.innerHTML+="Standard State: "

        })

        
        

        //Switch statement to colour cells based on group
        
      
        switch(data[i].groupBlock){

    
            case "nonmetal" : document.getElementById(data[i].atomicNumber).style.backgroundColor="red";
            break;
            case "metal" : document.getElementById(data[i].atomicNumber).style.backgroundColor="grey";
            break;
            case "metalloid" : document.getElementById(data[i].atomicNumber).style.backgroundColor="darkorange";
            break;
            case "noble gas" : document.getElementById(data[i].atomicNumber).style.backgroundColor="black";
            break;
            case "alkali metal" : document.getElementById(data[i].atomicNumber).style.backgroundColor="purple";
            break; 
            case "alkaline earth metal" : document.getElementById(data[i].atomicNumber).style.backgroundColor="darkred";
            break; 
            case "halogen" : document.getElementById(data[i].atomicNumber).style.backgroundColor="teal";
            break; 
            case "post-transition metal" : document.getElementById(data[i].atomicNumber).style.backgroundColor="gray";
            break; 
            case "transition metal" : document.getElementById(data[i].atomicNumber).style.backgroundColor="darkblue";
            break; 
            case "actinoid" : document.getElementById(data[i].atomicNumber).style.backgroundColor="green";
            break; 
            case "lanthanoid" : document.getElementById(data[i].atomicNumber).style.backgroundColor="darkgreen";
            break; 
            default: document.getElementById(data[i].atomicNumber).style.backgroundColor="black"
            break;
        }
     


 
    }


}
