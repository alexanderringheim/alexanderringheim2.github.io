var lastNum;
var currentNum = 0;
var lastBin;
var currentBin = 0;
var canGoBack = false;

var inputField;
var binaryField;

function appendNumber(num)
{
    inputField = document.getElementById("calc-input");
    binaryField = document.getElementById("calc-result");
    lastNum = num;
    currentNum *= 10;
    currentNum += lastNum;
    canGoBack = true;

    writeToInput(currentNum);
    translate(currentNum);
}

function writeToInput(newnum)
{
    inputField.innerHTML = (newnum);
}

function translate(num)
{
    if (num < 65536)
    {
        currentBin = 0;
        if ((num - 32768 >= 0)) {
            num -= 32768;
            currentBin += 1000000000000000;
        }
        if ((num - 16384 >= 0)) {
            num -= 16384;
            currentBin += 100000000000000;
        }
        if ((num - 8192 >= 0)) {
            num -= 8192;
            currentBin += 10000000000000;
        }
        if ((num - 4096 >= 0)) {
            num -= 4096;
            currentBin += 1000000000000;
        }
        if ((num - 2048 >= 0)) {
            num -= 2048;
            currentBin += 100000000000;
        }
        if ((num - 1024 >= 0)) {
            num -= 1024;
            currentBin += 10000000000;
        }
        if ((num - 512 >= 0)) {
            num -= 512;
            currentBin += 1000000000;
        }
        if ((num - 256 >= 0)) {
            num -= 256;
            currentBin += 100000000;
        }
        if ((num - 128 >= 0)) {
            num -= 128;
            currentBin += 10000000;
        }
        if ((num - 64 >= 0)) {
            num -= 64;
            currentBin += 1000000;
        }
        if ((num - 32 >= 0)) {
            num -= 32;
            currentBin += 100000;
        }
        if ((num - 16 >= 0)) {
            num -= 16;
            currentBin += 10000;
        }
        if ((num - 8 >= 0)) {
            num -= 8;
            currentBin += 1000;
        }
        if ((num - 4 >= 0)) {
            num -= 4;
            currentBin += 100;
        }
        if ((num - 2 >= 0)) {
            num -= 2;
            currentBin += 10;
        }
        if ((num - 1 >= 0)) {
            num -= 1;
            currentBin += 1;
        }
        lastBin = currentBin;
        binaryField.innerHTML = currentBin;
    }
    else
    {
        binaryField.innerHTML = "Too high!"
    }
}

function back()
{
    if (canGoBack) {
        currentNum -= lastNum;
        currentNum /= 10;
        writeToInput(currentNum);
        translate(currentNum);
    }
    canGoBack = false;
}

function reset() 
{
    binaryField.innerHTML = "Binary";
    inputField.innerHTML = "Input";
    lastNum = 0;
    currentNum = 0;
    lastBin = 0;
    currentBin = 0;
}
