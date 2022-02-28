exports.handler = async function () {
    console.log("hello hello")
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello World!"
        })
    }
}
