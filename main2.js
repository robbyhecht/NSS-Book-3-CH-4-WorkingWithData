const RainfallDatabase = {
  "1948" : [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6],
  "1949" : [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7],
  "1950" : [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0],
  "1951" : [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1],
  "1952" : [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]
}

// Iterate the keys of the object
for (const year in RainfallDatabase) {
    // Get current yearly array of rainfall
    const yearlyData = RainfallDatabase[year]

    // Reset yearly rainfall total to 0
    let yearlyAmount = 0

    // Look at each month and add to yearly total
    for (let i = 0; i < yearlyData.length; i++) {
        const monthlyData = yearlyData[i]
        yearlyAmount = yearlyAmount + monthlyData
    }

    console.log(`${year} had ${yearlyAmount} inches of rainfall`)
}