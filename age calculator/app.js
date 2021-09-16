//need to extract dob from date input field using event listener
//need to calculate age in years. months. days
//need to display the age (innertext)


const container = document.querySelector('.container');


function calcAge(){

    const dateOfBirth = document.getElementById('dob').value;
    const dob = new Date(dateOfBirth);
    const today = new Date();

    let diff = today - dob;

    const age = diff / (1000 * 60 * 60 * 24 * 365) //26.937
    const year = Math.floor(age); //how old in years
    const yearRemaining = age - year; //0.937
    const months = yearRemaining * 12; //11.23 months
    const monthsAge = Math.floor(months);//11 months (months in age)
    const monthRemaining = months - monthsAge; //0.23
    const daysRemaining = Math.floor(monthRemaining * 30);

    displayAge(year,monthsAge,daysRemaining);

    console.log(diff)
    
}

function displayAge(y,m,d) {

    const years = document.getElementById('years');
    const months = document.getElementById('months');
    const days = document.getElementById('days');

    years.innerText = y;
    months.innerText = m;
    days.innerText = d;

}


container.addEventListener('input', calcAge);