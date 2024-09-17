document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('start-date').value = today;
    document.getElementById('end-date').value = today;
});

document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const startDateValue = document.getElementById('start-date').value;
    const endDateValue = document.getElementById('end-date').value;

    if (!startDateValue || !endDateValue) {
        alert("Please enter both dates.");
        return;
    }

    const startDate = new Date(startDateValue);
    const endDate = new Date(endDateValue);

    if (endDate < startDate) {
        alert("The end date must be after the start date.");
        return;
    }
    const differenceInMs = endDate - startDate;
    const totalDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();
    
    if (months < 0) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        const previousMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        days += previousMonth.getDate();
    }
    const ageResult = document.getElementById('age-result');
    ageResult.innerHTML = `The difference is ${years} years, ${months} months, and ${days} days.<br>
                           Total: ${totalDays} days.`;
});
