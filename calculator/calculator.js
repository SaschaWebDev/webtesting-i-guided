module.exports = {
  add,
};

function add(args) {
  const values = Array.from(arguments);

  if (values.length === 0) {
    return null;
  }

  const len = values.length;

  let result = 0;
  for (let i = 0; i < len; i++) {
    const value = values[i];
    if (!Number.isNaN(value) && typeof value === 'number') {
      result += value;
    } else {
      return null;
    }
  }

  return result;
}

// remember to install jest
// change the test script
// jest --watch --verbose
