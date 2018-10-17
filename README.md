# Cazana - technical test

## The Task:
- Calculate the average annual mileage using the events in the timeline.
- Estimate the vehicle’s current mileage by projecting from the most recent, event using the average annual mileage.

## Requirements:
To run the code, please install [Moment.js](https://momentjs.com/) using: 
```javascript
npm install moment
```

## The Code:
- The first (averageAnnualMileage) determines the average number of miles the car has been driven from the data given. 
- The second (estimateCurrentMileage) function works out the miles the car is likely to have driven since its last MOT, using the first function.
- moment.js is a convinient and accurate way to compare dates and times, and removes the need for the code to be updated every time it is run.

## Results

When you run the programe, both average annual and estimated mileage is printed. 
![results image](/cazana/results.png 'results image')