console.log(`
aaaa
bbb cccc       ddddd
eee


fff
`.match(/[\S|\\n]/g).join(""));