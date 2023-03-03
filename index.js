const sum = (nums) => {
   return nums.reduce((a, b) => a + b);
};

const mean = (nums) => {
   return nums.reduce((a, b) => a + b)/nums.length;
};

module.exports = {
   sum,
   mean
}
