
const os=require('os')

console.log('system info');
console.log('='.repeat(50));



console.log('platform details');
console.log('platform ',os.platform());
console.log('architecture',os.arch());
console.log('os type',os.type());


console.log('cpu info:');
console.log(os.cpus());

const totalMem=os.totalmem()
console.log('total memory',(totalMem/(1024*1024*1024)).toFixed(2),'GB');

const freeMem=os.freemem()
console.log('free memory',(freeMem/(1024*1024*1024)).toFixed(2),'GB');




const uptime=os.uptime()

console.log('uptime',uptime,'seconds');

const days=uptime/60/60/24;

console.log(`uptime= ${Math.floor(days)} day(s), ${Math.floor(uptime%(60*60*24)/60/60)}, ${Math.floor(uptime%(60*60)/60)} minute(S)`);

