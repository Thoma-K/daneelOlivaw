import axios from 'axios';

const url = 'https://';

axios
  .post(url, {
    answer: '',
    name: '',
  })
  .then((response) => {
    const data = response.data;
    console.log(response.data);
  })
  .catch((error) => {
    console.error('Error', error);
  });
