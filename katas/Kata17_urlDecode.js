const urlDecode = function (text) {
  const result = {};

  // text.replace(/%20/g, " ")
  //   .split("&")
  //   .map(txt => txt.split("=").reduce((key, value) => { result[key] = value }))

  const txts = text.replace(/%20/g, " ").split("&");
  for (const txt of txts) {
    const t = txt.split("=");
    result[t[0]] = t[1];
  }
  return result;
}
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/*
Output:
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/