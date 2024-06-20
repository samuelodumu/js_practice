#!/usr/bin/node

let text = '';

for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  text += i + '\n';
}
console.log(text)

console.log('==================')

let text2 = '', i = 0;
while (i < 5) {
  i++;
  if (i === 3) continue;
  text2 += i + '\n';
}
console.log(text2)
