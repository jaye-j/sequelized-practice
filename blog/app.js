
const express = require('express');
const app = express();
const db = require('./models');



db.blogs.findAll({include: [{model: db.author}]})
.then((results)=>{

    results.forEach(record =>{

        console.log(record.title, record.author.name);
    });
});



// db.author.findAll()
// .then((results)=>{
//     results.forEach(record =>{
//         console.log(record.name);
//     })
// })


// db.blogs.create({
//     title: 'loving javascript',
//     body: 'we love javascript',
//     categoryID: 1,
//     authorID: 1
// })
//     .then((blog)=>{
//         console.log(blog.id)
// });


// db.blogs.create({
//     title: 'loving python',
//     body: 'we love python',
//     categoryID: 2,
//     authorID: 2
// })
//     .then((blog)=>{
//         console.log(blog.id)
// });


// db.blogs.create({
//     title: 'loving HTML',
//     body: 'we love HTML',
//     categoryID: 3,
//     authorID: 4
// })
//     .then((blog)=>{
//         console.log(blog.id)
// });


// db.blogs.create({
//     title: 'loving Bootstrap4',
//     body: 'we love Bootstrap4',
//     categoryID: 5,
//     authorID: 2
// })
//     .then((blog)=>{
//         console.log(blog.id)
// });


app.listen(3000, () => {
    console.log('Running on PORT 3000');
});