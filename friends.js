// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 13 - Friend Finder Express Node app

// Templated Friends Data
var friendsData = [
  {
    name: "Michael",
    photo:
      "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/62113522_10219301612548083_1703194690255323136_n.jpg?_nc_cat=102&_nc_oc=AQnLPZiJ9CcapXOdgu6W9ONOI6h3Qo8994i19dh2Rx-Z_hsm8bPpTzBrmocG7lq_tOQ&_nc_ht=scontent-dfw5-1.xx&oh=6327388ebcc7f883ec45bc659bf06f92&oe=5DD7A3C6",
    scores: [3, 5, 3, 3, 4, 4, 4, 1, 5, 3]
  },
  {
    name: "Tweety",
    photo:
      "https://i.pinimg.com/originals/ce/5f/53/ce5f53437e291c48705428721406985c.jpg",
    scores: [2, 4, 1, 3, 5, 2, 4, 1, 3, 5]
  },
  {
    name: "Bart",
    photo:
      "https://www.liveabout.com/thmb/b_XjAEyjRIBb-loREyq24Dmg4Sg=/1000x1000/filters:no_upscale():max_bytes(150000):strip_icc()/bart-simpson-58fe1f773df78ca159b60cc2.jpg",
    scores: [1, 2, 3, 4, 5, 4, 3, 2, 1, 2]
  },
  {
    name: "Gar",
    photo:
      "https://www.listchallenges.com/f/items/5ba033ab-232a-47a5-99f9-c87ace394823.jpg",
    scores: [3, 1, 3, 2, 3, 3, 3, 4, 3, 5]
  },
  {
    name: "Freddy",
    photo:
      "https://i.pinimg.com/originals/36/e9/f1/36e9f1fc3576d70c08a6375e7114a330.jpg",
    scores: [5, 4, 3, 2, 1, 2, 3, 4, 5, 4]
  },
  {
    name: "Bowtie",
    photo: "https://www.exploreyork.org.uk/wp-content/uploads/2018/06/Dan.png",
    scores: [4, 4, 4, 4, 3, 3, 3, 2, 2, 1]
  },
  {
    name: "Arnold",
    photo:
      "https://hips.hearstapps.com/sev.h-cdn.co/assets/15/29/1436907493-arnold.jpg?fill=160:223&resize=480:*",
    scores: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
  }
];

// Export to API Route
module.exports = friendsData;
