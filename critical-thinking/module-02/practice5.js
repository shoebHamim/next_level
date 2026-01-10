//* Binning (Resampling) Time Series Data

// Scenario: You have a long list of user click events.
// You need to "bin" these events into 30-minute intervals and count them to see engagement over time.

//? Input
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];
//? Output
// binnedEvents = {
//   "2025-10-22T10:00:00.000Z": { "total": 3 },
//   "2025-10-22T10:30:00.000Z": { "total": 2 },
//   "2025-10-22T11:00:00.000Z": { "total": 1 }
// }

//  bin rules =>
//  hh:00-hh:29 => bin hh:00
//  hh:30-hh:59=> bin  hh:30

// how do i know which bin it belongs to?
// get the time part
// get the hour and minute part
// hour is the bin's hour, if minute 0-29, minute part is 00, 
// else minute part is 30
// plan done, execute 🔥
const output=events.reduce((binnedEvents,event)=>{
  const date=event.timestamp.split("T")[0]
  const time=event.timestamp.split("T")[1]
  const hour=time.split(":")[0]
  const minute=time.split(":")[1]
  const timestamp=date+"T"+hour+`${minute<30?'00':'30'}`+time.split(":")[2]

  const currentCountObj=binnedEvents[timestamp]||{}
  currentCountObj['total']=(currentCountObj['total']||0)+1
  binnedEvents[timestamp]=currentCountObj
  return binnedEvents
},[])

console.log(output);




