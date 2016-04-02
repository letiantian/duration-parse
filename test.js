var DurationParse = require('.'),
    equal = require('assert').equal,
    should = require('should');


describe('duration-parse', function() {

    it('only days', function() {
        var dp = new DurationParse({days:1});
        equal(dp.toDays(), 1);
        equal(dp.toHours(), 24);
        equal(dp.toMinutes(), 24*60);
        equal(dp.toSeconds(), 24*60*60);
        equal(dp.toMilliSeconds(), 24*60*60*1000);
        equal(dp.toMicroSeconds(), 24*60*60*1000*1000);
        equal(dp.toNanoSeconds(), 24*60*60*1000*1000*1000);
    });

    it('only hours', function() {
        var dp = new DurationParse({hours:1});

        should(dp.toDays()).be.approximately(1/24, 1e-10);

        equal(dp.toDays(), 1/24);

        should(dp.toHours()).be.exactly(1);
        should(dp.toMinutes()).be.exactly(60);
        should(dp.toSeconds()).be.exactly(60*60);

        equal(dp.toMilliSeconds(), 60*60*1000);
        equal(dp.toMicroSeconds(), 60*60*1000*1000);
        equal(dp.toNanoSeconds(), 60*60*1000*1000*1000);
    });

    it('only minutes', function() {
        var dp = new DurationParse({minutes:1});

        should(dp.toDays()).be.approximately(1/24/60, 1e-10);
        should(dp.toHours()).be.approximately(1/60, 1e-10);

        equal(dp.toMinutes(), 1);
        equal(dp.toSeconds(), 60);
        equal(dp.toMilliSeconds(), 60*1000);
        equal(dp.toMicroSeconds(), 60*1000*1000);
        equal(dp.toNanoSeconds(), 60*1000*1000*1000);
    });

    it('only seconds', function() {
        var dp = new DurationParse({seconds:60});

        should(dp.toDays()).be.approximately(1/24/60, 1e-10);
        should(dp.toHours()).be.approximately(1/60, 1e-10);

        equal(dp.toMinutes(), 1);
        equal(dp.toSeconds(), 60);
        equal(dp.toMilliSeconds(), 60*1000);
        equal(dp.toMicroSeconds(), 60*1000*1000);
        equal(dp.toNanoSeconds(), 60*1000*1000*1000);
    });

    it('minutes + seconds', function() {
        var dp = new DurationParse({minutes:0.5, seconds:30});

        should(dp.toDays()).be.approximately(1/24/60, 1e-10);
        should(dp.toHours()).be.approximately(1/60, 1e-10);

        equal(dp.toMinutes(), 1);
        equal(dp.toSeconds(), 60);
        equal(dp.toMilliSeconds(), 60*1000);
        equal(dp.toMicroSeconds(), 60*1000*1000);
        equal(dp.toNanoSeconds(), 60*1000*1000*1000);
    });

    it('hours + minutes + seconds', function() {
        var dp = new DurationParse({hours:1, minutes:59, seconds:60});

        should(dp.toDays()).be.approximately(2/24, 1e-10);
        should(dp.toHours()).be.approximately(2, 1e-10);
        should(dp.toMinutes()).be.approximately(2*60, 1e-10);
        should(dp.toSeconds()).be.approximately(2*60*60, 1e-10);
        should(dp.toMilliSeconds()).be.approximately(2*60*60*1000, 1e-10);
        should(dp.toMicroSeconds()).be.approximately(2*60*60*1000*1000, 1e-10);
        should(dp.toNanoSeconds()).be.approximately(2*60*60*1000*1000*1000, 1e-10);
    });

    it('seconds + milliseconds', function() {
        var dp = new DurationParse({seconds:59, milliseconds:1000});

        should(dp.toDays()).be.approximately(1/24/60, 1e-10);
        should(dp.toHours()).be.approximately(1/60, 1e-10);

        equal(dp.toMinutes(), 1);
        equal(dp.toSeconds(), 60);
        equal(dp.toMilliSeconds(), 60*1000);
        equal(dp.toMicroSeconds(), 60*1000*1000);
        equal(dp.toNanoSeconds(), 60*1000*1000*1000);
    });

    it('seconds + milliseconds + microseconds', function() {
        var dp = new DurationParse({seconds:59, milliseconds:999, microseconds:1000});

        should(dp.toDays()).be.approximately(1/24/60, 1e-10);
        should(dp.toHours()).be.approximately(1/60, 1e-10);

        equal(dp.toMinutes(), 1);
        equal(dp.toSeconds(), 60);
        equal(dp.toMilliSeconds(), 60*1000);
        equal(dp.toMicroSeconds(), 60*1000*1000);
        equal(dp.toNanoSeconds(), 60*1000*1000*1000);
    });

    it('seconds + milliseconds + microseconds + nanoseconds', function() {
        var dp = new DurationParse({seconds:59, milliseconds:999, microseconds:999, nanoseconds:1000});

        should(dp.toDays()).be.approximately(1/24/60, 1e-10);
        should(dp.toHours()).be.approximately(1/60, 1e-10);

        equal(dp.toMinutes(), 1);
        equal(dp.toSeconds(), 60);
        equal(dp.toMilliSeconds(), 60*1000);
        equal(dp.toMicroSeconds(), 60*1000*1000);
        equal(dp.toNanoSeconds(), 60*1000*1000*1000);
    });

    it('days + hours', function() {
        var dp = new DurationParse({days:1, hours:24});
        equal(dp.toDays(), 2);
        equal(dp.toHours(), 2*24);
        equal(dp.toMinutes(), 2*24*60);
        equal(dp.toSeconds(), 2*24*60*60);
        equal(dp.toMilliSeconds(), 2*24*60*60*1000);
        equal(dp.toMicroSeconds(), 2*24*60*60*1000*1000);
        equal(dp.toNanoSeconds(), 2*24*60*60*1000*1000*1000);
    });

    it('days + hours + minutes', function() {
        var dp = new DurationParse({days:1, hours:23, minutes:60});
        equal(dp.toDays(), 2);
        equal(dp.toHours(), 2*24);
        equal(dp.toMinutes(), 2*24*60);
        equal(dp.toSeconds(), 2*24*60*60);
        equal(dp.toMilliSeconds(), 2*24*60*60*1000);
        equal(dp.toMicroSeconds(), 2*24*60*60*1000*1000);
        equal(dp.toNanoSeconds(), 2*24*60*60*1000*1000*1000);
    });

    it('days + hours + minutes + seconds', function() {
        var dp = new DurationParse({days:1, hours:23, minutes:59, seconds:60});
        equal(dp.toDays(), 2);
        equal(dp.toHours(), 2*24);
        equal(dp.toMinutes(), 2*24*60);
        equal(dp.toSeconds(), 2*24*60*60);
        equal(dp.toMilliSeconds(), 2*24*60*60*1000);
        equal(dp.toMicroSeconds(), 2*24*60*60*1000*1000);
        equal(dp.toNanoSeconds(), 2*24*60*60*1000*1000*1000);
    });

});