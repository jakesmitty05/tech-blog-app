module.exports = {
  format_date: (date) => {
    if (date) {
      return date.toLocaleDateString();
    }
    return 'Invalid Date';
  },
};