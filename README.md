# Cazana - technical test

## The Task:
- Calculate the average annual mileage using the events in the timeline.
- Estimate the vehicle’s current mileage by projecting from the most recent, event using the average annual mileage.

## Requirements:
To run the code, please install [Moment.js](https://momentjs.com/) using npm install.

## The Code:
- The code is split up into two functions: the first (averageAnnualMileage) determines the average number of miles the car has been driven from the data given. The second (estimateCurrentMileage) function uses the result of the first to work out the miles the car is likley to have driven since its last MOT.
- I used moment.js as it is a convinient and accurate way to compare dates and times, and removes the need for the code to be updated to reflect the date everytime it is run.