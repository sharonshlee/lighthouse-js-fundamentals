const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  let newStations = [];
  for (const station of stations) {
    if (station[1] >= 20) {
      if (station[2] === "school" || station[2] === "community centre") {
        newStations.push(station[0]);
      }
    }
  }
  return newStations;
}

console.log(chooseStations(stations));
