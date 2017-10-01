// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (M03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test('Testing our profit calculator function', function (assert) {
   assert.equal(profitCalculate(4,6), "No profit", 'selling price less than cost price');
    assert.equal(profitCalculate("",""), 'The given value is invalid', 'all null inputs');
    assert.strictEqual(profitCalculate(NaN, NaN), "Value should be a number!", 'not a number');
    assert.strictEqual(profitCalculate(-14, -22), "Value shouldn't be 0 or negative value!", 'allow only positive numbers');
});





