//your code here
function majorityElement(nums) {
    const frequency = {};
    const n = nums.length;
    const majorityCount = Math.floor(n / 2);

    for (let num of nums) {
        if (!frequency[num]) {
            frequency[num] = 1;
        } else {
            frequency[num]++;
        }

        if (frequency[num] > majorityCount) {
            return num;
        }
    }
}