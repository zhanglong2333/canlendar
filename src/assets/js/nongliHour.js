let timelist = [{
    name: '子时',
    value: 1,
    id: 1
  },
  {
    name: '丑时',
    value: 3,
    id: 2
  },
  {
    name: '寅时',
    value: 5,
    id: 3
  },
  {
    name: '卯时',
    value: 7,
    id: 4
  },
  {
    name: '辰时',
    value: 9,
    id: 5
  },
  {
    name: '巳时',
    value: 11,
    id: 6
  },
  {
    name: '午时',
    value: 13,
    id: 7
  },
  {
    name: '未时',
    value: 15,
    id: 8
  },
  {
    name: '申时',
    value: 17,
    id: 9
  },
  {
    name: '酉时',
    value: 19,
    id: 10
  },
  {
    name: '戌时',
    value: 21,
    id: 11
  },
  {
    name: '亥时',
    value: 23,
    id: 12
  }
]

let computedTime = function (time) {
  let nongliTime;
  if (time < 1) {
    nongliTime = '子时 23:00-00:59'
  } else if (1 <= time & time < 3) {
    nongliTime = '丑时 01:00-02:59'
  } else if (3 <= time & time < 5) {
    nongliTime = '寅时 03:00-04:59'
  } else if (5 <= time & time < 7) {
    nongliTime = '卯时 05:00-06:59'
  } else if (7 <= time & time < 9) {
    nongliTime = '辰时 07:00-08:59'
  } else if (9 <= time & time < 11) {
    nongliTime = '巳时 09:00-10:59'
  } else if (11 <= time & time < 13) {
    nongliTime = '午时 11:00-12:59'
  } else if (13 <= time & time < 15) {
    nongliTime = '未时 13:00-14:59'
  } else if (15 <= time & time < 17) {
    nongliTime = '申时 15:00-16:59'
  } else if (17 <= time & time < 19) {
    nongliTime = '酉时 17:00-18:59'
  } else if (19 <= time & time < 21) {
    nongliTime = '戌时 19:00-20:59'
  } else if (21 <= time & time < 23) {
    nongliTime = '亥时 21:00-22:59'
  } else {
    nongliTime = '子时 23:00-00:59'
  }
  return nongliTime;
}
export {
  computedTime
}