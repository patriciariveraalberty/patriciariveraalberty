const employees = [
    {
        name: "John Smith",
        hourlyRate: 20,
        hoursWorked: 38
    },
    {
        name: "Sarah Johnson",
        hourlyRate: 25,
        hoursWorked: 45
    },
    {
        name: "Michael Brown",
        hourlyRate: 18,
        hoursWorked: 50
    },
    {
        name: "Emily Davis",
        hourlyRate: 22,
        hoursWorked: 40
    },
    {
        name: "David Wilson",
        hourlyRate: 30,
        hoursWorked: 48
    }
];
function calculateBasePay(rate, hours) {
    return Math.min(hours, 40) * rate;
}
console.log(calculateBasePay(20, 38));
console.log(calculateBasePay(20, 50));
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        return (hours - 40) * rate * 1.5;
    }

    return 0;
}
console.log(calculateOvertimePay(20, 38));
console.log(calculateOvertimePay(20, 50));
function calculateTaxes(grossPay) {
    return grossPay * 0.85;
}
console.log(calculateTaxes(1000));
function processPayroll(employee) {

    const basePay = calculateBasePay(
        employee.hourlyRate,
        employee.hoursWorked
    );

    const overtimePay = calculateOvertimePay(
        employee.hourlyRate,
        employee.hoursWorked
    );

    const grossPay = basePay + overtimePay;

    const netPay = calculateTaxes(grossPay);

    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}
console.log(processPayroll(employees[0]));
for (let employee of employees) {
    console.log(processPayroll(employee));
}