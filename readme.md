React JS BoilerPlate Template.
Comes fully loaded and production ready.
React Development environment is running on port 3000, where nodeJS on 4000.
Proxy is setup to use nodeJS api.
React-Redux pre-set.

########### Helpful Code Snippets ########### 

#### for websockets ####
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
