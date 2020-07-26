function change(){
    var age = document.getElementById('age').value;
    document.getElementById('months').value = (age * 12)+ "Months";
    document.getElementById('days').value = (age * 12 * 30)+ "Days";
    document.getElementById('hours').value = (age * 12 * 30 * 24)+ "Hours";
    document.getElementById('minutes').value = (age * 12 * 30 * 24 * 60)+ "Minutes";
    document.getElementById('seconds').value = (age * 12 * 30 * 24 * 60 * 60)+ "Seconds";

}