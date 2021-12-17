export const ErrorHandler = (error) => {
    if (error.response) {
        // Request made and server responded
        if (error.response.data?.message) {
            alert(error.response.data?.message);
        } else {
            alert(error.response.data);
        }
    } else if (error.request) {
        // The request was made but no response was received
        alert(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        alert(error.message);
    }
}