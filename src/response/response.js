exports.success = (res, message, status) => {
    const statusCode = status || 200;
    const messageOk = message || "";
    res.status(statusCode).send({
        status: statusCode,
        body: messageOk
    })
}

exports.error = (res, message, status) => {
    const statusCode = status || 400;
    const messageError = message || "";
    res.status(statusCode).send({
        status: statusCode,
        body: messageError
    })
}