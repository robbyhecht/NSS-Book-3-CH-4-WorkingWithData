// Individual arrays holding monthly data for each year
const _1948 = [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6]
const _1949 = [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7]
const _1950 = [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0]
const _1951 = [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1]
const _1952 = [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]

// Outer array holding each year's array of data
const RainfallDatabase = [_1948, _1949, _1950, _1951, _1952]

// Find out how much total rain has fallen over last 10 years
let totalRainfall = 0

// This iterates the outer array
for (let i = 0; i < RainfallDatabase.length; i++) {
    const yearlyData = RainfallDatabase[i]

    // This iterates each individual array of numbers
    for (let j = 0; j < yearlyData.length; j++) {
        const monthlyData = yearlyData[j]
        totalRainfall = totalRainfall + monthlyData
    }
}

console.log(totalRainfall)