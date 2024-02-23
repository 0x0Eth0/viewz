

 export class CustomeJS 
{
     groupByTimeAndFindExtremes(data, intervalMinutes) {
        const groupedData = {};
      
        data.forEach(item => {
          const timestamp = new Date(item.time);
          const roundedTimestamp = new Date(Math.floor(timestamp.getTime() / (intervalMinutes * 60 * 1000)) * (intervalMinutes * 60 * 1000));
      
          const roundedTimeString = roundedTimestamp.toISOString();
      
          if (!groupedData[roundedTimeString]) 
          {
            groupedData[roundedTimeString] = { open: item.value, high: -Infinity, low: Infinity, close: item.value };
          }
      
          const currentGroup = groupedData[roundedTimeString];
      
          if (item.value > currentGroup.high) {
            currentGroup.high = item.value;
          }
          if (item.value < currentGroup.low) {
            currentGroup.low = item.value;
          }
      
          // Update close value for each iteration
          currentGroup.close = item.value;
        });
      
        // Convert the grouped data back to an array
        const result = Object.entries(groupedData).map(([time, extremes]) => ({ time, ...extremes }));
      
        // Add open value for each group
        result.forEach((group, index) => {
          const previousGroup = result[index - 1];
          group.open = previousGroup ? previousGroup.close : group.close;
        });
      
   /*      console.log('GROUP DATA', result); */
      
        return result;
      }







// Function to group by 5-minute slots and find extremes
groupByTimeAndFindExtremesNew(data) {

  console.log(data, 'Data Reached to function ');
 
    const groupedData = {};

    // Group the data by 5-minute slots
      data.forEach(entry => {
      console.log(entry.Date)
      const blockTimestamp = entry.Date; // Assuming Date is in Unix timestamp format (seconds)
      const slotKey = new Date(blockTimestamp * 1000).toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      });
  
    console.log('step1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', step1);
  
    console.log('eeeeeeeeeeeeeeeeeee',groupedData[slotKey] );
      if (!groupedData[slotKey]) {
        groupedData[slotKey] = {
          open: parseFloat(entry.Value),
          high: parseFloat(entry.Value),
          low: parseFloat(entry.Value),
          close: parseFloat(entry.Value),
          timeSlot: slotKey,
        };
      } else {
        const currentValue = parseFloat(entry.Value);

        console.log('trigger',currentValue )
  
        groupedData[slotKey].high = Math.max(groupedData[slotKey].high, currentValue);
        groupedData[slotKey].low = Math.min(groupedData[slotKey].low, currentValue);
        groupedData[slotKey].close = currentValue;
      }
    });
  
    // Convert the object to an array of { open, close, high, low, timeSlot }
    const result = Object.values(groupedData);
    console.log('result ',result )
    return result;
 


}

/*  const formatDate = (timestamp) => {
  const date = new Date(parseInt(timestamp) * 1000);
  
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  
  return `${day}-${month}`;
}; */

/* ApexChartFormatData(chartData) {
 const formatDate = (timestamp) => new Date(parseInt(timestamp) * 1000);

  const groupedData = chartData.reduce((groups, entry) => {
    const timestamp = entry.timestamp;
    const key = Math.floor(timestamp /60).toString(); // Group by 1-minute intervals
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(entry);
    return groups;
  }, {});

  const resultData = Object.values(groupedData).map((group) => {
    const open = group[0].perTokenPrice; // Open price of the group
    const close = group[group.length - 1].perTokenPrice; // Close price of the group
    const low = Math.min(...group.map(item => parseFloat(item.perTokenPrice))); // Low price in the group
    const high = Math.max(...group.map(item => parseFloat(item.perTokenPrice))); // High price in the group

    return {
      x: formatDate(group[0].timestamp),
      y: [parseFloat(open), parseFloat(close), low, high]
    };
  });

  return resultData;
} */



ApexChartFormatData(chartData) {
  const formatDate = (timestamp) => new Date(parseInt(timestamp) * 1000);

  const groupedData = chartData.reduce((groups, entry) => {
    const timestamp = entry.timestamp;
    const key = Math.floor(timestamp / 60).toString(); // Group by 1-minute intervals
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(entry);
    return groups;
  }, {});

  let previousClose = null; // To store the closing price of the previous candle

  const resultData = Object.values(groupedData).map((group) => {
    const sortedGroup = group.sort((a, b) => a.timestamp - b.timestamp); // Sort by timestamp

    const high = Math.max(...sortedGroup.map(item => parseFloat(item.perTokenPrice))); // High price
    const open = previousClose !== null ? previousClose : sortedGroup[0].perTokenPrice; // Open price
    const close = sortedGroup[sortedGroup.length - 1].perTokenPrice; // Close price
    const low = Math.min(...sortedGroup.map(item => parseFloat(item.perTokenPrice))); // Low price
    

    previousClose = close; // Update the closing price for the next candle

    return {
      x: formatDate(sortedGroup[0].timestamp),
      y: [parseFloat(open), parseFloat(high), parseFloat(low), parseFloat(close)]
    };
  });

  return resultData;
}


      
}
