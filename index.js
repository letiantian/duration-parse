var  _ = require('lodash');

var defaultDuration = {
    days:0,
    hours:0,
    minutes:0,
    seconds:0,
    milliseconds:0,
    microseconds:0,
    nanoseconds:0
};


var multiSum = function(duration, factor) {
    var ks = _.keys(defaultDuration);
    var result = 0;
    _(ks).forEach(function(k) {
        result += (duration[k] * factor[k]);
    });
    return result;
};

var DurationParse = function(duration) {
    this.duration = _.assign(_.cloneDeep(defaultDuration), duration);
};


DurationParse.prototype = {
    toDays: function() {
        return multiSum(this.duration, {
            days:1,
            hours:1/24,
            minutes:1/60/24,
            seconds:1/60/60/24,
            milliseconds:1/1000/60/60/24,
            microseconds:1/1000/1000/60/60/24,
            nanoseconds:1/1000/1000/1000/60/60/24
        });
    },
    toHours: function() {
        return multiSum(this.duration, {
            days:24,
            hours:1,
            minutes:1/60,
            seconds:1/60/60,
            milliseconds:1/1000/60/60,
            microseconds:1/1000/1000/60/60,
            nanoseconds:1/1000/1000/1000/60/60
        });
    },
    toMinutes: function() {
        return multiSum(this.duration, {
            days:24*60,
            hours:60,
            minutes:1,
            seconds:1/60,
            milliseconds:1/1000/60,
            microseconds:1/1000/1000/60,
            nanoseconds:1/1000/1000/1000/60
        });
    },
    toSeconds: function() {
        return multiSum(this.duration, {
            days:24*60*60,
            hours:60*60,
            minutes:60,
            seconds:1,
            milliseconds:1/1000,
            microseconds:1/1000/1000,
            nanoseconds:1/1000/1000/1000
        });
    },
    toMilliSeconds: function() {
        return multiSum(this.duration, {
            days:24*60*60*1000,
            hours:60*60*1000,
            minutes:60*1000,
            seconds:1000,
            milliseconds:1,
            microseconds:1/1000,
            nanoseconds:1/1000/1000
        });
    },
    toMicroSeconds: function() {
        return multiSum(this.duration, {
            days:24*60*60*1000*1000,
            hours:60*60*1000*1000,
            minutes:60*1000*1000,
            seconds:1000*1000,
            milliseconds:1000,
            microseconds:1,
            nanoseconds:1/1000
        });
    },
    toNanoSeconds: function() {
        return multiSum(this.duration, {
            days:24*60*60*1000*1000*1000,
            hours:60*60*1000*1000*1000,
            minutes:60*1000*1000*1000,
            seconds:1000*1000*1000,
            milliseconds:1000*1000,
            microseconds:1000,
            nanoseconds:1
        });
    }
};

module.exports = DurationParse;