describe("BMICalculator", function () {
  var calculator;
  var person;

  beforeEach(function() {
    metricPerson = new Person({weight: 90, height: 186});
    imperialPerson = new Person({weight: 200, height: 72});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person);
    expect(person.bmi_value).toEqual(26.01);
  });

  it("calculates BMI for a person using imperial method", function() {
    calculator.imperial_bmi(person);
    expect(person.bmi_value).toEqual(26.01);
  });
});
