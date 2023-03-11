const url="https://randomuser.me/api/"
// /?results=35&gender=female
console.log("------------PROMISE------------")
console.log(fetch(url))


const output1=document.querySelector('h2')
const selector=document.getElementById ('selector');
console.log(url+selector.value)

//Prefill text box with search term

selector.value="?results=64"

button.addEventListener('click',
function(){console.log("Clicked");

fillData(url+selector.value);
})

//url=url+selector.value;

function fillData(url){

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
}



/*Function to display the data*/
function displayData(data){

    //Log data to the console
    console.log("------------DATA DISPLAY------------")
    console.log(data.results[0].name.title)
    console.log(data.results[0].name.first)
    console.log(data.results[0].name.last)
    console.log(data.results[0].picture.large)


    //create an header and add to div
    //const header = document.createElement("h1");
    //header.textContent = data.results[0].name.first;
    //frame.appendChild(header)
    
    //create an image and add to div
    //const image = document.createElement("img");
    //image.src = data.results[0].picture.large;
    //frame.appendChild(image);
    //document.body.style.backgroundImage = "url('" + data.results[0].picture.large+ "')";

    //Loop through users

    let user=0;
    const NO_ROWS=4;
    const NO_COLS=16;

    for(let row=1;row<=NO_ROWS;row++){

        for(let col=1;col<=NO_COLS;col++){

            //ID of cell
            let cellID=`R${row}C${col}`
            console.log(cellID)

            console.log(document.getElementById("R1C1").innerText)
            console.log(document.getElementById("R1C1").innerHTML)

           // document.getElementById(cellID).innerHTML= data.results[user].name.first + "<BR/>"
           //document.getElementById(cellID).innerHTML= ""


            const image = document.createElement("img");
            image.src = data.results[user].picture.thumbnail;
            document.getElementById(cellID).append(image);



            let toolTipText=data.results[user].name.first
            document.getElementById(cellID).title=toolTipText


            user++;
        

          
            //console.log(data.results[row].name.first)
            
            //cell.innerHTML=data.results[user].name.first;

        }

    }

}
