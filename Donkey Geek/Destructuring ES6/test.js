//destructuring
var array  = ['mark','lea','justine']
var [userid,...rest] = array;

/// destrcuturing  with object
 var members = {
    userOne: 'mark',
    userTwo : 'kevin',
    userThree: 'messi'
 }
 var {userOne: hulk,userTwo:spiderman,userThree:superman}= members;

 console.log(hulk,spiderman,superman);