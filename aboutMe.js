const yui = (displayData) => {
  console.log('My name is Yui Jensen');
  setTimeout(() => {
    const data = 'I am 28 years old';
    displayData(data);
  }, 2000);
  setTimeout(() => {
    const data =
      'I was born in Hiroshima, Japan. But now I live in Malmö, Sweden';
    displayData(data);
  }, 3000);
  setTimeout(() => {
    const data = 'My hobbies are dancing hip-pop and playing drums';
    displayData(data);
  }, 4000);
};
const displayData = (data) => {
  console.log(data);
};
yui(displayData);
