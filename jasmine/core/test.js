

describe("Refectoring toFixed to use string", function() {

    it("Round numbers propertly", function() {
        expect( toFixed(0.615, 2) ).toBe( "0.62" );
        expect( toFixed(10.235, 2) ).toBe( "10.24" );
        expect( toFixed(1.005, 2) ).toBe( "1.01" );
    });

});
