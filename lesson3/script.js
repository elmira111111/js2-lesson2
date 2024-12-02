// const promise = new Promise((resolve,reject) => {
   
//     setTimeout(() => {
//         resolve('text')
//         reject("error")
//     }, 2000)
// });

// console.log(promise);
// promise
// .then(text => {
//     console.log(text);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log('promise finally');
// })
// console.log('text 100');

// // console.time('log');
// // console.log(222);
// // console.timeEnd('log');

const img_url = 'https://avatars.mds.yandex.net/i?id=cf648f91a6d80312306a5a7e148cf843_l-4628448-images-thumbs&n=13';
const imgEl = document.querySelector('img')
let code = 200;
const p = new Promise((success, error) => {
    document.querySelector('h3').innerText = "Loading..."
    setTimeout(() => {
        if(code === 200){
            // imgEl.src = img_url
            success(img_url)
        }else{
            error('error promise')
            // document.body.innerText = "error"
        }
    }, 2000)
})
p
    .then(url => imgEl.src = url)
    .catch(err => document.body.innerText = err)
    .finally(() => {
        document.querySelector('h3').innerText = ""
    })

    // HTTP STATUS 100, 200, 400, 300, 500
    // HTTP METHODS GET, POST, PUT, PUTCH, DELETE
    // CRUD -
    // FETCH
    // EVENT LOOP