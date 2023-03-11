
//Get handle on the output div in index.html
const output=document.getElementById ('output');

//store the URL/endpoint in a constant variable
const url="data/product.json"


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

    //Output one item to the console
    output.innerHTML=data.name + "<BR>"
    output.innerHTML+=data.description + "<BR>"

    //OUTPUT FROM INGREDIENTS IN A LIST OF OBJECTS
    output.innerHTML+=data.ingredient1.name + "<BR>"

    //OUTPUT FROM AN ARRAY OF INGREDIENTS
    output.innerHTML+=data.ingredients[0].name + "<BR>"

    //OUTPUT FROM AN ARRAY OF OBJECTS WITH NUMBER INDEX
    output.innerHTML+=data["0"].name + "<BR>"
    output.innerHTML+=data[0].name + "<BR>"

    //LOOPING THROUGH KEY VALUE PAIRS IN OBJECT
    console.log("-------Loop through key value pairs in object---_")
    for(const key in data){
        console.log(key + " : " + data[key])
    }

    //LOOPING THROUGH ARRAY OF INGREDIENTS

    console.log("-------Loop through ingredients array---")

    for (let i=0; i<data.ingredients.length; i++){

        console.log(data.ingredients[i])
        console.log(data.ingredients[i].name)

    }

    //LOOPING THROUGH LIST OF INGREDIENT OBJECTS NUMBER INDEX
    console.log("-------Loop through ingredients with number index---")


    const NO_ITEMS=3

    for (let i=0; i<NO_ITEMS; i++){

       console.log(data[i].description)

   }





}
