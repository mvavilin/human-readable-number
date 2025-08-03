module.exports = function toReadable(num) {
  if (!Number.isFinite(num)) return null;
  const units = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const magnitude = ['hundred', 'thousand'];
  const res = [];
  const arr = num.toString().split('').map(Number);
  let itemCount = arr.length;
  if (num === 0) return units[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== 0) {
      switch (itemCount) {
        case 4:
        case 3:
          res.push(units[arr[i]], magnitude[i]);
          break;
        case 2:
          if (arr[i] === 1) {
            res.push(teens[arr[i + 1]]);
            i += 1;
          } else {
            res.push(tens[arr[i]]);
          }
          break;
        case 1:
          res.push(units[arr[i]]);
          break;
        default:
          return null;
      }
    }
    itemCount -= 1;
  }
  return res.join(' ');
};
