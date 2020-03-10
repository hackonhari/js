let myYoutubeVideo1={
    title:'loops in javascript',
    videoLength:25,
    videoCreator:'hari krishnan',
    videoDescription:'this is a video description and a long one'
}
let myYoutubeVideo2={
    title:'function in javascript',
    videoLength:105,
    videoCreator:'hari krishnan',
    videoDescription:'this is a video description and a long one'
}
myYoutubeVideo2.videoLength=50
// console.log(myYoutubeVideo);
// console.log(`hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`)
let changeVideoLength=function(myObject){
    return {
        formatOne:`time of this video is :${myObject.videoLength +2}`,
        formatTwo:`time of this video is :${myObject.videoLength +1}`
    }
}
let adOne=(changeVideoLength(myYoutubeVideo2));
console.log(adOne.formatTwo);