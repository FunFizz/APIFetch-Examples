
//Get handle on the output div in index.html
const output=document.getElementById ('output');

//store the URL/endpoint in a constant variable
const url="http://andymcdowell.hosting.hal.davecutting.uk/1030_APIs/diceroll.php"


//Fetch to show a promise is returned, state is pending
console.log("------------PROMISE------------")
console.log(fetch(url))

//Start FETCH API
fetch(url)

    //If the promise is resolved then..
    .then(response => {

        //Log the response
        console.log("------------RESPONSE------------")   
        console.log(response)

        //Uncomment to throw error for testing purposes
        //if (response.ok===true){

        //If the response is not OK then throw an error else request json
        if (response.ok===false){

            throw new Error("RESPONSE NOT OK ...Thrown from 1st .then. <BR> RESPONSE STATUS:"+response.status)
            
        }else{

            return response.json()

        }

    })//end of callback function

//when the 2nd promise is resolved present the data to the user

    .then(data => {

        //log the data to he console
        console.log("------------JSON DATA------------")
        console.log(data);
    
        //If an error is present in the response then throw an error
        //Customise this according to the API documentation
        if (data.err==true)
        {

            throw new Error(data.errMsg + ". Thrown from 2nd .then")

        }
        
        //call function to display the data
        displayData(data)
    })//end of callback function

    //catch the errors, log and write to the output DIV in index.html
    .catch(err=>{

        console.log("------------ERRORS------------")
        console.log(err)
        console.log(err.message)

        output.innerHTML=err.message

    })//end of callback function

/*Function to display the data*/
function displayData(data){

    //Log data to the console
    console.log("------------DATA DISPLAY------------")
    console.log(data)
    //Output to  index.html output div
    output.innerHTML=data
}
