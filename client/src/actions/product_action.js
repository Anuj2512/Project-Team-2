var url = "http://d8c47c5c.ngrok.io/" ; 

const headers = {
    'Accept': 'application/json'
};

//add Product


export function setBackProductSuccess(){
	return {type : 'PRODUCT_ADD_SET_BACK' , payload : null}
}

export function addNewProduct(email , productName , productDesc , productCategory  ){
	console.log( email , productName , productDesc , productCategory ) ; 

		return function(dispatch){
			fetch(url + 'addNewProduct', {
	        method: 'POST',
	        headers: {
	            ...headers,
	            'Content-Type': 'application/json'
	        },
	        credentials:'include',
	   	    body: JSON.stringify({
	   	    			"email" : email ,
	   	    			"productName" : productName,
	   	    			"productDesc" : productDesc ,
	   	    			"productCategory" : productCategory
	   	    })

	  		}).then(function (response) {
			        console.log("Response from server " , response);
			      response.json().then(res => {
					  
				
			      	
			      dispatch({ type : 'PRODUCT_ADD_SUCCESS' , payload : true })

			      	
				})
																		        
	   		})
	        .catch(error => {
	        	dispatch({ type : 'PRODUCT_ADD_FAILURE' , payload : false})
	            
	        })
		}
}



//Get All User Products

export function getAllUserProduct(email  ){
	console.log( email ) ; 

		return function(dispatch){
			fetch(url + 'getAllUserProducts', {
	        method: 'POST',
	        headers: {
	            ...headers,
	            'Content-Type': 'application/json'
	        },
	        credentials:'include',
	   	    body: JSON.stringify({
	   	    			"email" : email ,
	   	    			
	   	    })

	  		}).then(function (response) {
			        console.log("Response from server " , response);
			      response.json().then(res => {
			      	
			      	
			      dispatch({ type : 'GET_ALL_USER_PRODUCS' , payload : res})

			      	
				})
																		        
	   		})
	        .catch(error => {
	        	console.log(error)
	            
	        })
		}
}


export function putProductOnAuction(email , pid , name , desc , category , price  ){
	console.log(email , pid , name , desc , category , price)
	return function(dispatch){
			fetch(url + 'putProductOnAuction', {
	        method: 'POST',
	        headers: {
	            ...headers,
	            'Content-Type': 'application/json'
	        },
	        credentials:'include',
	   	    body: JSON.stringify({
	   	    			"email" : email ,
	   	    			"pid" : pid , 
	   	    			"productName" : name ,
	   	    			"productDesc" : desc ,
	   	    			"productCategory" : category,
	   	    			"reservePrice" : price
	   	    })

	  		}).then(function (response) {
			        console.log("Response from server " , response);
			      response.json().then(res => {
			      	
			      	
			     console.log(res) ; 

			      	
				})
																		        
	   		})
	        .catch(error => {
	        	console.log(error)
	            
	        })
		}
}