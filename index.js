function line(text) {
    let output = `<div>${text}</div>`;
    document.body.innerHTML += output;
}

function thisNum(num, callback) {
    let newLine = `The random number returned was: ${num}`;
    callback(newLine);
}

function getRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 50);
            console.log('Random Number = ' + num);

            if(num > 9) {
                resolve(num);
            } else {
                reject(`Error: Number was < 10  (${num})`)
            }
        }, 500);
    });
}

setTimeout(() => {
   getRandomNumber().then(num => thisNum(num, line)).catch(err => line(err)); 
}, 500);

setTimeout(() => {
    getRandomNumber().then(num => thisNum(num, line)).catch(err => line(err));
}, 1000);

setTimeout(() => {
    getRandomNumber().then(num => thisNum(num, line)).catch(err => line(err));
}, 1500);


async function getNewLocation(cityName, callback) {
    let response = await fetch(`https://geocode.xyz/${cityName}?json=1&auth=4376409060303630461x97281`);
    let text = "";

    let data = await response.json();
    if (data.longt != 0.00000) {
        console.log(data);
        text = `For ${cityName}: Latitude = ${data.latt}, Longitude = ${data.longt}`;
    } else {
        console.log(data);
        text = `Error retrieving data for "${city}": ${data.error.description.substring(3)}`;
    }

    callback(text);
}

setTimeout(() => {
    line('<br><h3>Getting Locations for Cities<br>(New York, Charlotte, Dallas)</h3>')
}, 3000);

setTimeout(() => {
    getNewLocation('New York', line);
}, 3500);

setTimeout(() => {
    getNewLocation('Charlotte', line);
}, 4000);

setTimeout(() => {
    getNewLocation('Dallas', line);
}, 4500);