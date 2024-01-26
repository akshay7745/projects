const posts =[{title:"Post 1"},{title:"Post 2"}];
const user ={name:"akshay",lastTimeActivityTime: new Date().toTimeString()}
console.log(user.lastTimeActivityTime);

function createPost (){
    return new Promise((res,rej)=>{
        posts.push({title:"Post 3"});
        res(posts);
    })
}
function deletePost (){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(posts.pop())

        },5000)
       
    })
}

function updateLastUserActivityTime(){
 return new Promise((res,rej)=>{
    setTimeout(()=>{
        user.lastTimeActivityTime = new Date().toTimeString();
        res(user.lastTimeActivityTime);
    },2000)
 })
}


function userCreatedPost (){
    Promise.all([createPost(),updateLastUserActivityTime()]).then((values)=>{
    console.log(values);
    console.log(values[1])
});
}
function userDeletedPost (){
    Promise.all([deletePost(),updateLastUserActivityTime()]).then((values)=>{
    console.log(values);
    console.log(values[1])
});
}
userCreatedPost();
userDeletedPost();