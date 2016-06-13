
/*
AJAX involves 2 steps:

step 0: creating ajax object: XMLHttpRequest

step 1: REQUEST

a. prepare the request: xhr.open('GET','ajaxEx1.json', true)
b. send the prepared request: xhr.send(null)


step 2: RESPONSE

a. when the response loads: xhr.load = function() {}
b. check for the status: xhr.status === 200
c. bring the json file: xhr.responseText

*/


//step 0: creating ajax object: XMLHttpRequest
var xhr = new XMLHttpRequest();

// var jsonFileObject;

/*step 2: RESPONSE

a. when the response loads: xhr.load = function() {}
b. check for the status: xhr.status === 200
c. bring the json file: xhr.responseText
*/


// when the response page loads
xhr.onload = function()
	{
		// check if the server has responded well
		if(xhr.status === 200)
			{
				// get the json file from the server
				var myJsonFile = xhr.responseText;

				// since the json file is in strings, convert it into javascript object 
				 jsonFileObject = JSON.parse(myJsonFile);

				// newContent holds the data for the html file output
				var newContent ='';

					// loop through the json file
					for(var i=0; i<jsonFileObject.cars.length; i++)
					{
						newContent += '<div class="myDiv">';
						newContent += '<p>'+jsonFileObject.cars[i].make +'<p>';
						newContent += '</div>';
					}// for closed

							// update the html file 
							document.getElementById("content").innerHTML = newContent; 
			}//if closed
		else 
			{
				document.write("some problem dude ?????????????");		
			}//else closed	
	}//onload closed


/*step 1: REQUEST

a. prepare the request: xhr.open('GET','ajaxEx1.json', true)
b. send the prepared request: xhr.send(null)
*/

// prepare the rquest
 xhr.open('GET','ajaxEx1.json', true);

// send the prepared request
xhr.send(null);









