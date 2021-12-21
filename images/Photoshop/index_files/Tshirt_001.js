"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js"

let width = context.canvas.width;
let height = context.canvas.height;

let x1 = width / 4;
let y1 = width / 4;
let x2 = 1.7 * x1;
let y2 = y1;
let x3 = x1;
let y3 = y1 * 2;
let x4 = 1.8 * x1;
let y4 = width / 4;
let x5 = x1 + 0.1 * x1;
let y5 = y1 * 2;
let x6 = width / 2;
let y6 = y5;
let x7 = x6;
let y7 = x1;
let x8 = x6 + 0.1 * x1;
let y8 = x1;
let x9 = x8;
let y9 = y6;
let x10 = x6 + 0.1 * x1;
let y10 = width / 2.5;
let x11 = x1 * 2.6;
let y11 = y1;
let x12 = x11;
let y12 = x1 * 1.4;
let x13 = x8;
let y13 = y9 * 1.3;
let R = Math.random() * 360;



drawJ();
drawU();
drawK();
drawE();

function drawJ() {
    for (let i = 0; i < 8; i++) {
        Utils.drawLine(x1, y1 + 10 * i, x2 - 20 * i, y2 + 10 * i);
        Utils.drawLine(x2 - 20 * i, y2 + 10 * i, x3, y3 - 20 * i);
        context.strokeStyle = Utils.hsl(R + i * 20, 360, 50);
    }
}

function drawU() {
    for (let i = 0; i < 10; i++) {
        Utils.drawLine(x4, y4 + 10 * i, x5 + 15 * i, y5 - 10 * i);
        Utils.drawLine(x5 + 15 * i, y5 - 10 * i, x6 - 5 * i, y6 - 10 * i);
        Utils.drawLine(x6 - 5 * i, y6 - 10 * i, x7 - 5 * i, y7);
        context.strokeStyle = Utils.hsl(R + i * 20, 360, 50);

    }
}

function drawK() {

    for (let i = 0; i < 12; i++) {
        Utils.drawLine(x8, y8, x9, y9);
        Utils.drawLine(x10, y10, x11 - 10 * i, y11);
        Utils.drawLine(x10, y10 + 10 * i, x12, y12);
    }
    Utils.drawLine(x12, y12, x13, y13);

}

function drawE() {
    let x14 = x11 + 0.25 * x1;
    let y14 = y1;
    let x15 = x11 - 0.15 * x1;
    let y15 = y3;
    let x16 = x1 * 3;
    let y16 = y3;
    let x17 = x12;
    let y17 = y10;
    let x18 = x16;
    let y18 = y10;
    Utils.drawLine(x14, y14, x15, y15);
    Utils.drawLine(x15, y15, x16, y16);
    Utils.drawLine(x17, y17, x18, y18);
    Utils.drawLine(x18, y18, x14, y14);



}