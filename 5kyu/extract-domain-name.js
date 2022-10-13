// 5 kyu
// Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  return url
    .replace('https://', '')
    .replace('http://', '')
    .replace('www.', '')
    .split('.com')[0];
}

console.log(domainName('http://github.com/carbonfive/raygun')); //"github"
console.log(domainName('http://www.zombie-bites.com')); //"zombie-bites"
console.log(domainName('https://www.cnet.com')); //"cnet"
