const channels = require("./channels.json");

/**************************************************************
 * totalVideosDuration(channel):
 * - receives a channel object
 * - returns the total duration of all the videos in this channel
 *
 * BONUS: use iteration method `.reduce()`
 ****************************************************************/
function totalVideosDuration(channel) {
  const durations = channel.videos.map(video => video.duration);
  return durations.reduce((accum, current) => accum + current)
}

/**************************************************************
 * channelWithMostContent(channels):
 * - receives an array of channel objects
 * - returns the channel with the highest total video duration
 *
 * Hint: use the `totalVideosDuration()` function
 * BONUS: use iteration method `.sort()`
 ****************************************************************/
function channelWithMostContent(channels) {
  const sorted = channels.sort((a,b) => totalVideosDuration(a) - totalVideosDuration(b));
  return sorted[sorted.length-1]
}

/**************************************************************
 * longestChannelName(channels):
 * - receives an array of channel objects
 * - returns the channel with the longest name
 *
 * BONUS: use iteration method `.sort()`
 ****************************************************************/
function longestChannelName(channels) {
  let sortedByName = channels.sort((a,b) => a.name.length - b.name.length);
  return sortedByName[sortedByName.length-1]
}

// Check your answers by running this file and comparing what it logs

channels.forEach(channel => console.log(totalVideosDuration(channel)));
// I modified it so it logs total video durations for all channels
// Should log:
//
// 636
// 82
// 58
// 77
// 4

console.log(channelWithMostContent(channels));
// Should log:

// {
//   name: "PowerfulJRE",
//   description: "The Joe Rogan Experience podcast",
//   videos: [
//     { title: "Joe Rogan Experience #1480 - Kevin Hart", duration: 121 },
//     { title: "Joe Rogan Experience #1470 - Elon Musk", duration: 120 },
//     { title: "Joe Rogan Experience #1477 - Tony Hawk", duration: 102 },
//     { title: "Joe Rogan Experience #1413 - Bill Maher", duration: 118 },
//     { title: "Joe Rogan Experience #1208 - Jordan Peterson", duration: 175 },
//   ],
// }

console.log(longestChannelName(channels));
// Should log:

// {
//   name: "Alternate History Hub",
//   description: "An entire channel dedicated to the 'What If?'.  Using knowledge of geography, population and other historical facts I predict what could have happened had things gone differently in history.",
//   videos: [
//     { title: "What if Rome Never Existed? Part III", duration: 19 },
//     {
//       title: "What if Trump Was Never Elected President?",
//       duration: 4,
//     },
//     {
//       title: "How A Corporation Conquered A Sub-Continent",
//       duration: 18,
//     },
//     {
//       title: "What if Antarctica Was A Green Continent?",
//       duration: 18,
//     },
//     {
//       title: "Why Tyrion's Solution For Westeros Doomed Everyone",
//       duration: 8,
//     },
//     { title: "What if Napoleon Never Fell?", duration: 10 },
//   ],
// }
