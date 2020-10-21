module.exports = function toReadable(number) {
    var mas = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        mas[20] = 'twenty';
        mas[30] = 'thirty';
        mas[40] = 'forty';
        mas[50] = 'fifty';
        mas[60] = 'sixty';
        mas[70] = 'seventy';
        mas[80] = 'eighty';
        mas[90] = 'ninety';

        let numb = '';
        if (number < 10) {
            numb += mas[number];
        };

        if (number >= 10 &&
            number < 21) {
            numb += mas[number];
        };

        if (number >= 21 &&
            number < 100) {
            let m = number.toString();

            if (m[1] === '0') {
                numb += mas[number]
            }
            else {
                let first = m[0] + 0;

                numb += mas[first] + ' ' + mas[m[1]];
            }
        };

        if (number >= 100 &&
            number < 1000) {
            let m = number.toString();

            let firstChar = m[0];
            numb += mas[firstChar] + ' hundred';
            if(m[1]==='0' && (m[2]==='0')){
                
            }
            else{
            let first = m[1] + 0;

            numb += ' '+mas[first] + ' ' + mas[m[2]];
             }
        };

        return numb;
}
