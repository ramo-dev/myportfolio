function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName, browserVersion;

  if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Mozilla Firefox";
    browserVersion = userAgent.match(/Firefox\/([0-9]+)\./)[1];
  } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
    browserName = "Opera";
    browserVersion = userAgent.match(/(Opera|OPR)\/([0-9]+)\./)[2];
  } else if (userAgent.indexOf("Edg") > -1) {
    browserName = "Microsoft Edge";
    browserVersion = userAgent.match(/Edg\/([0-9]+)\./)[1];
  } else if (userAgent.indexOf("Chrome") > -1) {
    browserName = "Google Chrome";
    browserVersion = userAgent.match(/Chrome\/([0-9]+)\./)[1];
  } else if (userAgent.indexOf("Safari") > -1) {
    browserName = "Apple Safari";
    browserVersion = userAgent.match(/Version\/([0-9]+)\./)[1];
  } else {
    browserName = "Unknown";
    browserVersion = "Unknown";
  }

  return {
    browserName,
    browserVersion,
    userAgent,
  };
}

async function getIp() {
  const resp = await fetch("https://api.ipify.org?format=json");

  const data = await resp.json();
  return data;
}



async function getGeo(){
    const ip = await getIp();
    //console.log(ip)
    const resp = await fetch(`https://api.iplocation.net/?ip=${ip.ip}`)
  
    const Geodata = await resp.json();
    return Geodata;
}


async function getUserInfo(){
    const geoLocation = await getGeo();
    const browserInfo = getBrowserInfo(); 

    return {geoLocation, browserInfo};
}

export default getUserInfo