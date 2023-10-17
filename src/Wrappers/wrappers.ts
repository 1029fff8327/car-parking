export class responseWrapper {
    responseSuccess( data) {
		return {
			response: 'ok',
            data: data,
    	};
	}
   
    responseError(message) {
	    return {
	    response: 'error',
	    message,
	    };
    }
}
