# duration-parse

Convert duration time with multiple units to a number with one specified unit.

## Install
```
npm install duration-parse
```

## Example
```
var DurationParse = require('duration-parse');

var dp = new DurationParse({days:1});
dp.toDays();          //-> 1
dp.toHours();         //-> 24
dp.toMinutes();       //-> 1440
dp.toSeconds();       //-> 86400
dp.toMilliSeconds();  //-> 86400000
dp.toMicroSeconds();  //-> 86400000000
dp.toNanoSeconds();   //-> 86400000000000


var dp = new DurationParse({days:0, hours:12, minutes:720, seconds:1, 
                            milliseconds:1, microseconds:1, nanoseconds:1});
dp.toDays();          //-> 1.0000115856597338
dp.toHours();         //-> 24.00027805583361
dp.toMinutes();       //-> 1440.0166833500166
dp.toSeconds();       //-> 86401.001001001
dp.toMilliSeconds();  //-> 86401001.001001
dp.toMicroSeconds();  //-> 86401001001.001
dp.toNanoSeconds();   //-> 86401001001001

```

The parameter of DurationParse is an object which represents duration time. The default value of `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds` is **0**.

## License
MIT