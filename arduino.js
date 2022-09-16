//엄격한 코드 검사
'use strict';

/************* include library **************/
var express = require('express');
var arduino     = express();


//아두이노 상태를 변수에 저장
var LEDToggleFlag = false;
var sensorData = [];


/************* Routing **************/
arduino.get('/', (req, res, next) => {
    res.send("Index Arduino Router");
});

/**
 * DHT 온습도 센서 수신 라우터
 */
arduino.all("/sensors", (req, res, next) => {
    let data = req.query;

    //수신일 기록
    data.time = new Date();
    console.log("receive Data >> ", data);

    //센서 데이터 배열에 저장
    sensorData[sensorData.length] = data;

    res.send("ACK ");

});


/**
 * LED toggle router
 * 접속해서 
 */
arduino.all("/LEDToggle", (req, res, next) => {
    LEDToggleFlag = !LEDToggleFlag;
    console.log("Toggle LED >> ", LEDToggleFlag);
    res.send(LEDToggleFlag);
});



module.exports = arduino;
