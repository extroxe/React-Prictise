
function GET(url: string) {
    return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
        if (!target.$Meta) {
            target.$Meta = {};
        }
        target.$Meta[methodName] = url;
    }
}

class Test {
    @GET("xx")
    getUser() {
        console.log()
    }
}

export default Test


