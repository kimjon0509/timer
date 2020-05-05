const progv = process.argv
const alarmArr = progv.slice(2);

const alarm = (alarmArr) => {
  alarmArr.forEach(time => {setTimeout(() => process.stdout.write('\x07'), lastTime = time)});
}

alarm(alarmArr);