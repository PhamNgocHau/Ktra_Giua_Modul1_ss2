let Tivi = function (status, channel, volum, power) {
    this.status = status;
    this.channel = channel;
    this.volum = volum;
    this.power = power;

    this.getStatus = function () {
        return this.status;
    };
    this.getChannel = function () {
        return this.channel;
    };
    this.getVolum = function () {
        return this.volum;
    };
    this.getPower = function () {
        return this.power;
    };
    this.getStatus = function () {
        this.status = 'Status TV: ' + this.power + ' Channel: ' + this.channel + ' Volum: ' + this.volum;
        return this.status;
    };
    this.setChannel = function (channel) {
        this.channel = channel;
    }
};


let Remote = function (id) {
    this.id = id;
    this.setPower = function () {
        if (tivi.power === 'on') {
            tivi.power = 'off';
        } else {
            tivi.power = 'on';
        }
    };

    this.addVolum = function (vol) {
        if (vol) {
            tivi.volum++;
        } else {
            tivi.volum--;
        }
    }
};

function displayPowerOFF() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').innerHTML += 'TV: ' + tivi.power;
}

function onOFF() {
    remote.setPower();
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').innerHTML += tivi.power;
}

function Volum(vol) {
    if (tivi.power === 'on') {
        remote.addVolum(vol);
        document.getElementById('result').innerHTML = '';
        document.getElementById('result').innerHTML += 'Volum: ' + tivi.volum;
    } else {
        displayPowerOFF()
    }
}

function controlChannel(channel) {
    if (tivi.power === 'on') {
        tivi.setChannel(channel);
        checkStatus()
    } else {
        displayPowerOFF();
    }
}

function checkStatus() {
    if (this.power === 'on') {
        document.getElementById('result').innerHTML += '' + tivi.getStatus();
    } else {
        document.getElementById('result').innerHTML = '';
        document.getElementById('result').innerHTML += tivi.getStatus();
    }
}

let statusTivi = '';
let channelTivi = 1;
let volumTivi = 60;
let powerTivi = 'off';
let tivi = new Tivi(statusTivi, channelTivi, volumTivi, powerTivi);
let idRemote = 1;
let remote = new Remote(idRemote);
