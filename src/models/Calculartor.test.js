import Calculator from './Calculator';

describe('Check model Calculator', () => {
    it('food cost saving valid range',()=>{
        const calculator=new Calculator();
        const monthCostIngredient=10;
        expect(calculator.foodCostSaving(monthCostIngredient)).toEqual(3)
    })
    it('food cost saving invalid range',()=>{
        const calculator=new Calculator();
        const monthCostIngredient=9;
        expect(calculator.foodCostSaving(monthCostIngredient)).toEqual(undefined)
    })
    it('food cost saving invalid Value',()=>{
        const calculator=new Calculator();
        const monthCostIngredient='adsfdsa';
        expect(calculator.foodCostSaving(monthCostIngredient)).toEqual(undefined)
    })
    it('anual savings valid range',()=>{
        const calculator=new Calculator();
        const fullTimeEmployees=10;
        const foodCostSaving=3;
        expect(calculator.annualSavings(fullTimeEmployees,foodCostSaving)).toEqual(13373)
    })
    it('anual savings fullTimeemployes  invalid range',()=>{
        const calculator=new Calculator();
        const fullTimeEmployees=12;
        const foodCostSaving=3;
        expect(calculator.annualSavings(fullTimeEmployees,foodCostSaving)).toEqual(undefined)
    })
    it('anual savings  invalid value',()=>{
        const calculator=new Calculator();
        const fullTimeEmployees='fasdf';
        const foodCostSaving='adf';
        expect(calculator.annualSavings(fullTimeEmployees,foodCostSaving)).toEqual(undefined)
    })
    it('is valid method value',()=>{
        const calculator=new Calculator();
        expect(calculator.isValidValue('fasdf')).toEqual(false)
        expect(calculator.isValidValue(null)).toEqual(false)
        expect(calculator.isValidValue(undefined)).toEqual(false)
        expect(calculator.isValidValue('1')).toEqual(false)
        expect(calculator.isValidValue(1)).toEqual(true)
    })
})
