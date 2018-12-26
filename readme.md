React JS BoilerPlate Template.
Comes fully loaded and production ready.
React Development environment is running on port 3000, where nodeJS on 4000.
Proxy is setup to use nodeJS api.
React-Redux pre-set.
React-Redux stack updated to work in a more functional way.

###### UPDATE

Parent containers will return data, rather than a dispatch.  
The child element will then call a dispatch, pipelining the result that function call to the redux store.

Added Host .env file for proper remote development.
Fixes the issue of "invalid host header"

Added proper Thunk Dispatch actions for async calls

########### Helpful Code Snippets ###########

#### for websockets

#Client
const defaultState ={
config: {
"force new connection" : true,
reconnectionAttempts: "Infinity",
timeout: 10000,
transports: ["websocket"]
},
endpoint: 'IPADDRESS:4000'
}

Dont Forget to be Functional!

const test = (fn,fns) => (...args) => fn(fns(...args))
const otherfunc = ([...data]) => data.reduce((x,y) => x \* y , 1)
const array = [6,5,20,1,2]
test(console.log,otherfunc)(array) // 1200
