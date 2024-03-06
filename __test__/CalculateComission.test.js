const calculateCommissionFunction = require('../CalculateComission');

describe('CalculateComission', () => {
    test('Calculate commission and total cost for 70 locks, 80 stocks, and 90 barrels', () => {
        expect(calculateCommissionFunction(-1,-1,-1)).toEqual("Sales quantities exceed maximum/minimum limits.");
    });

    test('Calculate commission and total cost for 70 locks, 80 stocks, and 90 barrels', () => {
        expect(calculateCommissionFunction(0,0,0)).toEqual("Sales quantities exceed maximum/minimum limits.");
    });

    test('Calculate commission and total cost for 70 locks, 80 stocks, and 90 barrels', () => {
        expect(calculateCommissionFunction(0,1,1)).toEqual("Sales quantities exceed maximum/minimum limits.");
    });

    test('Calculate commission and total cost for 70 locks, 80 stocks, and 90 barrels', () => {
        expect(calculateCommissionFunction(0,0,1)).toEqual("Sales quantities exceed maximum/minimum limits.");
    });

    test('Calculate commission and total cost for 70 locks, 80 stocks, and 90 barrels', () => {
        expect(calculateCommissionFunction(1,1,0)).toEqual("Sales quantities exceed maximum/minimum limits.");
    });

    test('Calculate commission and total cost for 70 locks, 80 stocks, and 90 barrels', () => {
        expect(calculateCommissionFunction(1,0,0)).toEqual("Sales quantities exceed maximum/minimum limits.");
    });

    test('Calculate commission and total cost for 70 locks, 80 stocks, and 90 barrels', () => {
        expect(calculateCommissionFunction(1,1,1)).toEqual([100,5.50]);
    });

    test('Calculate commission and total cost for 70 locks, 80 stocks, and 90 barrels', () => {
        expect(calculateCommissionFunction(25,35,45)).toEqual([3300,651]);
    });

    test('Calculate commission and total cost for 70 locks, 80 stocks, and 90 barrels', () => {
        expect(calculateCommissionFunction(50,50,50)).toEqual([5000,991]);
    });

    test('Calculate commission and total cost for 70 locks, 80 stocks, and 90 barrels', () => {
        expect(calculateCommissionFunction(70,80,90)).toEqual([7800,1551]);
    });

    test('Calculate commission and total cost for 70 locks, 80 stocks, and 90 barrels', () => {
        expect(calculateCommissionFunction(75,85,95)).toEqual("Sales quantities exceed maximum/minimum limits.");
    });

    test('Calculate commission and total cost for 70 locks, 80 stocks, and 90 barrels', () => {
        expect(calculateCommissionFunction(70,80,-100)).toEqual("Sales quantities exceed maximum/minimum limits.");
    });

});