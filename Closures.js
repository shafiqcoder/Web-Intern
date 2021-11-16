const outerFun = () => {
  let b = 10;
  const innerFun = () => {
    let sum = a + b;
    console.log(`The sum of two numbers is ${sum}`);
  };
  innerFun();
};

outerFun(5);
