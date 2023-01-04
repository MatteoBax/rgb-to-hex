# rgb-to-hex-converter
Converts an rgb color to hex color



## Usage

```javascript
const convert = require('rgb-to-hex-converter').convertToHex;
let hex = convert(255,255,255); //convert(r,g,b)
if(hex){
    console.log(hex)
}else{
    console.log('Wrong color format!')
};
```

## Installation

```
npm i rgb-to-hex-converter
```
