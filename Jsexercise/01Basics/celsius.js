let isVerified=true
let isLoggedin=false
let hasPaymentToken=true
let isGuest=true
if(!isVerified && isLoggedin &&hasPaymentToken){
    console.log('Greeting message to user')
    console.log('grant access to paid course')
}else if(isVerified || isGuest){
    console.log('Allow free preview')
}else{
    console.log('MESSAGE:please contact admin`')
}