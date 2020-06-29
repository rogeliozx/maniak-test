class Calculator {
  foodCostSaving(mothIngredient) {
    if (mothIngredient < 10 || mothIngredient > 100) {
      return;
    }
    if (this.isValidValue(mothIngredient)) {
      return mothIngredient * 0.3;
    }
  }

  annualSavings(fullTimeEmployees, foodCostSaving) {
    if (fullTimeEmployees < 1 || fullTimeEmployees > 10) {
      return;
    }
    if (
      this.isValidValue(fullTimeEmployees) &&
      this.isValidValue(foodCostSaving)
    ) {
      const result = parseInt(fullTimeEmployees) * 1337 + foodCostSaving;
      return result;
    }
  }

  isValidValue(value) {
    if (
      typeof value === 'string' ||
      value === null ||
      value === undefined ||
      isNaN(value)
    ) {
      return false;
    }
    return true;
  }
}

export default Calculator;
