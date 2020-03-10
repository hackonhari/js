const convertToRs=(dollar)=>{
    if(typeof dollar==='number'){
        return dollar*70
    }else{
        throw Error('Amount needs to be in number')
    }
}
try {
    console.log(convertToRs('hackon'))
} catch (e) {
    console.log(e)
}

console.log('I will not run if program crashes')