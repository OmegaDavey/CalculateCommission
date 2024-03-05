const CalculateComission = require('./CalculateCommission');

describe('CalculateComission - should return calcualted commission based upon output criteria given', () => {
    test('Should return $7800 total sales & $1350 in commission, max ammount for total sales', () => {
        const[totalSales, commission] = CalculateComission(70, 80, 90);
        expect(totalSales).toBe(7800);
        expect(commission).toBe(1551);
    });

});