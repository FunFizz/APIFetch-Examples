const url="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

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
    console.log(data.url)
    console.log(data.title)
    console.log(data.explanation)


     //LOOP OVER ALL THE DATA

     for(const key in data){
        console.log(key + " : " + data[key])
    }

    //create an header and add to div
    const header = document.createElement("h1");
    header.textContent = data.title;
    frame.append(header)
    
    //create an image and add to div
    const image = document.createElement("img");
    image.src = data.hdurl;
    frame.append(image);

    //set the image for the background
    document.body.style.backgroundImage = "url('" + data.hdurl + "')";

    //add a paragraph to the div
    const paragraph = document.createElement("p");
    paragraph.innerText= data.explanation
    description.append(paragraph);


}
