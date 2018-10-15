const history = [
  {
    event: 'MOT',
    date: '2018-3-10T00:00:00.000Z',
    data: {
      mileage: 69383,
      passed: true
    }
  },
  {
    event: 'MOT',
    date: '2017-3-10T00:00:00.000Z',
    data: {
      mileage: 58385,
      passed: true
    }
  },
  {
    event: 'MOT',
    date: '2016-4-10T00:00:00.000Z',
    data: {
      mileage: 46275,
      passed: true
    }
  },
  {
    event: 'MOT',
    date: '2016-4-10T00:00:00.000Z',
    data: {
      mileage: 46275,
      passed: false
    }
  },
  {
    event: 'MOT',
    date: '2015-4-10T00:00:00.000Z',
    data: {
      mileage: 37375,
      passed: true
    }
  },
  {
    event: 'MOT',
    date: '2014-4-10T00:00:00.000Z',
    data: {
      mileage: 28646,
      passed: true
    }
  }
]

const moment = require('moment');

//helper function to sort array
function compareDates(a, b) {
  if (a.date < b.date) {
    return 1;
  }
  if (a.date > b.date) {
    return -1;
  }
  //if equal
  return 0;
}


function averageAnnualMileage(history) {
  //make sure history is ordered, most recent first
  history.sort(compareDates);
  let totalMileage = 0;
  
  //remove failed MOTs
  history = history.filter(a => {
    return (a.data.passed);
  });

  for (let i = 0; i < history.length - 1; i++) {
    let yearlyMileage = history[i].data.mileage - history[i + 1].data.mileage;
    totalMileage += yearlyMileage;
  }

  return totalMileage / (history.length - 1);
}


function estimateCurrentMileage(history) {
  //make sure history is ordered, most recent first
  history.sort(compareDates);
  let averageDailyMiles = averageAnnualMileage(history) / 365;

  let lastMOTDate = moment(history[0].date, "YYYY-M-D");
  let daysSinceLastMOT =  moment().diff(lastMOTDate, 'days');
  
  let estimatedMilesSinceLastMOT = averageDailyMiles * daysSinceLastMOT;
  let totalMileage = history[0].data.mileage + estimatedMilesSinceLastMOT;

  return totalMileage;

}

console.log('Average annual mileage is:', averageAnnualMileage(history));
console.log('Estimated current mileage is:', estimateCurrentMileage(history));