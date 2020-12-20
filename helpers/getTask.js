/** Get task by task name */
module.exports = (Array, Name) => {
  for (let i = 0; i < Array.length; i++) {
    if (Array[i].name === Name) {
      return Array[i];
    }
  }
};
