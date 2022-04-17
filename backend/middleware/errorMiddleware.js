//Middleware: Functions that execute during request-response cycle
//HTTP 500: Internal Server Error


export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode);

    /*If we had enviroment variables, then we would(n't) send the
        error stack according to the case.*/
    res.json({
        message: err.message,    
        stack: undefined
    })
}