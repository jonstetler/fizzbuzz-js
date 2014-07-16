var FizzBuzzGame = {

    from: 1,
    to: 100,
    fizzMultiple: 3,
    buzzMultiple: 5,


    isFizzMultiple: function (num) {
        if (num % this.fizzMultiple === 0) {
            return true;
        } else {
            return false;
        }
    },


    isBuzzMultiple: function (num) {
        if (num % this.buzzMultiple === 0) {
            return true;
        } else {
            return false;
        }
    },


    isFizzBuzzMultiple: function (num) {
        if (this.isFizzMultiple(num) && this.isBuzzMultiple(num)) {
            return true;
        } else {
            return false;
        }
    },


    computeFizzBuzz: function () {
        var result = [];
        for (var i = this.from; i <= this.to; i++) {
            if (this.isFizzBuzzMultiple(i)) {
                result.push('FizzBuzz');
            } else if (this.isFizzMultiple(i)) {
                result.push('Fizz');
            } else if (this.isBuzzMultiple(i)) {
                result.push('Buzz');
            } else {
                result.push(i);
            }
        }
        return result;
    },


    render: function() {
        var tblElement = document.getElementById('fizz-buzz-results');
        tblElement.innerHTML = '';  //clear the existing tbody
        var currentRow = document.createElement('tr');
        var fizzBuzzResult = this.computeFizzBuzz();
        var rowColCount = 0;
        var len = fizzBuzzResult.length;
        var lastValue = fizzBuzzResult[len];
        var currentValue;
        for (var i = 0; i <= len; i++) {
            currentValue = fizzBuzzResult[i];
            if(rowColCount === 10 || currentValue == lastValue){
                rowColCount = 0;
                tblElement.appendChild(currentRow);
                currentRow = document.createElement('tr');
            }
            var newCol = document.createElement('td');
            var colText = document.createTextNode(currentValue);
            newCol.appendChild(colText);
            currentRow.appendChild(newCol);
            rowColCount++;
        }
    },

};
