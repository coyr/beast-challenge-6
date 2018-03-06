

describe("Refectoring toFixed to use string", function() {

    it("Recieve integer numbers", function() {
        expect( toFixed(10, 2) ).toBe( "10.00" );
        expect( toFixed(1023454, 2) ).toBe( "1023454.00" );
        expect( toFixed(19455, 2) ).toBe( "19455.00" );
    });

    it("Round numbers propertly", function() {
        expect( toFixed(0.615, 2) ).toBe( "0.62" );
        expect( toFixed(10.235, 2) ).toBe( "10.24" );
        expect( toFixed(1.005, 2) ).toBe( "1.01" );
    });

    it("Manage 1 decimal", function() {
        expect( toFixed(12.2, 2) ).toBe( "12.20" );
        expect( toFixed(12455.2, 2) ).toBe( "12455.20" );
    });

    it("Manage negative numbers", function() {
        expect( toFixed(-9.2, 2) ).toBe( "-9.20" );
        expect( toFixed(-123.25, 2) ).toBe( "-123.25" );
    });

    it("Manage exponential", function() {
        expect( toFixed(1.23e+20, 2) ).toBe( "123000000000000000000.00" );
    });

});
