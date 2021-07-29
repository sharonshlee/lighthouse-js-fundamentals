const facebookProfile = {
  name: "Sharon",
  friends: 4,
  messages: ["This is my first message"],
  postMessage: function (message) {
    this.messages.push(message);
  },
  deleteMessage: function (index) {
    this.messages.splice(index - 1, 1);
  },
  addFriend: function () {
    this.friends++;
  },
  removeFriend: function () {
    this.friends--;
  }
}

console.log(facebookProfile.name);
console.log(facebookProfile.friends);
console.log(facebookProfile.messages);
console.log(facebookProfile.postMessage("2nd message"));
console.log(facebookProfile.messages);
console.log(facebookProfile.addFriend());
console.log(facebookProfile.friends);
facebookProfile.removeFriend();
console.log(facebookProfile.friends);
//console.log(facebookProfile.deleteMessage(0));

