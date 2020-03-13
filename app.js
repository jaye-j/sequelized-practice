
let db = require('./models/index.js');






// db.user.findByPk(3)
// .then((user)=>{

//     user.firstName = "Austin smels";

//     user.save()
//     .then(()=>{
//         console.log('record saved');
//     });
// });




// db.sequelize.query('SELECT * FROM users', { type: db.sequelize.QueryTypes.SELECT})
// .then(results => {
//     results.forEach(function(record){
//         console.log(record.firstName);
//     })
// });



// db.user.destroy({where: {id: 4}})
// .then((rowDeleted=>{
//     console.log(rowDeleted);

//     if(rowDeleted == 4){
//         console.log('deleted successfully');
//     }
// }))



// db.user.findAll({where: {firstName: 'Jaye'}})
// .then((results)=>{
    
//     results.forEach((person)=>{
//         console.log(person.firstName, person.lastName, person.email)
//     });
// });



// db.user.findByPk(3)
// .then((record)=>{
//     console.log(record)
// })


// db.user.findAll()
// .then((results)=>{
//     // console.log(results);

//     results.forEach((record)=>{
//         console.log(`${record.firstName} ${record.lastName} ${record.email}`);
//     });
// });



// db.user.create({
//     firstName: 'Jaye',
//     lastName: 'Jensen',
//     email: 'jaye@gmail.com'
// });
// db.user.create({
//     firstName: 'Austin',
//     lastName: 'Denny',
//     email: 'austin@gmail.com'
// });
// db.user.create({
//     firstName: 'Daniel',
//     lastName: 'Dolan',
//     email: 'daniel@gmail.com'
// });
// db.user.create({
//     firstName: 'Veronica',
//     lastName: 'Lina',
//     email: 'veronica@gmail.com'
// });