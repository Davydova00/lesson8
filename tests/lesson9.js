
async function typiCode1(url1) {
  let response = await fetch(url1);
  let data = await response.json();
  //console.log(response);
  console.log(data);
}
const url1 = 'https://jsonplaceholder.typicode.com/comments/1';
const url2 = 'https://jsonplaceholder.typicode.com/posts/2';

async function typiCode2(url2) {
  let response = await fetch(url2);
  let data = await response.json();
  console.log(data);
}



Promise.all([typiCode1(url1), typiCode2(url2)])
  .then(results => {
    console.log('Promise.all - ', results);
  })
  .catch(error => {
    console.error('Ошибка - Promise.all:', error);
  });



Promise.allSettled([typiCode1(url1), typiCode2(url2)])
  .then(results => {
    console.log('Promise.allSettled - ', results);
  })
  .catch(error => {
    console.error('Ошибка - Promise.allSettled:', error);
  });

