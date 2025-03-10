const showMessage = <T, Q>(message: T, personInfo: Q) => {
  return { message, personInfo };
};
console.log(
  showMessage<string, IPerson<string, number>>("Hello", {
    name: "John Doe",
    age: 25,
  })
);

interface IPerson<T, Q> {
  name: T;
  age: Q;
}
