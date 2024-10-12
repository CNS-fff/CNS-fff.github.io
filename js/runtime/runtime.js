var now = new Date();
function createtime() {
  var grt = new Date("05/01/2024 00:00:00");
  now.setTime(now.getTime() + 250);
  var days = (now - grt) / 1e3 / 60 / 60 / 24,
    dnum = Math.floor(days),
    hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
    hnum = Math.floor(hours);
  1 == String(hnum).length && (hnum = "0" + hnum);
  var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
    mnum = Math.floor(minutes);
  1 == String(mnum).length && (mnum = "0" + mnum);
  var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
    snum = Math.round(seconds);
  1 == String(snum).length && (snum = "0" + snum);
  let currentTimeHtml = "";
  (currentTimeHtml =
    hnum < 18 && hnum >= 9
      ? `<img class='boardsign' src='https://img.shields.io/badge/快乐搞磕盐-上班摸鱼中-6adea8?style=social&logo=fishshell' title='磕盐民工摸鱼中~'><span class='textTip'> <br> 本站已运行 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒`
      : `<img class='boardsign' src='https://img.shields.io/badge/快乐搞磕盐-下班下班-6adea8?style=social&logo=coffeescript' title='各部门注意\n  下班时间到了\n  请赶紧滚蛋,不要浪费电费~'><span class='textTip'> <br> 本站已运行 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒`), 
    document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
setInterval(() => {
  createtime();
}, 250);