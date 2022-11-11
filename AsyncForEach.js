Array.prototype.asyncForEach = async function (callback) {
  for (let index = 0; index < this.length; index++) {
    await callback(this[index], index, this);
  }
};

const delayFetch = (data, ms) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

const numbers = [1, 2, 3, 4];

numbers.asyncForEach(async (v) => {
  const data = await delayFetch(v, 1000);
  console.log(data);
});
