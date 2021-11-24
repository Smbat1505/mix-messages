/*jslint maxlen: 500 */
const generator = {
    init: function () {

        let elem = document.getElementById('input');
        let obj = this;
        let button = document.getElementById('btn');
        button.addEventListener('click', function () {
            elem.innerText = obj.generateInsult();
            document.getElementById('input').style.display = 'block';
            document.getElementById('tablo').style.display = 'block';
            document.querySelector('section').style.display = 'none';
            document.getElementById('glas').style.display = 'none';
            document.getElementById('result').innerHTML = 'try again';
        });
    },

    generateInsult: (function () {
        let generateInsult = function () {
            return weatherForToday[random(weatherForToday)] + whatToWearToday[random(whatToWearToday)] + whereToGoForAWalk[random(whereToGoForAWalk)];
        };
        document.getElementById('input').style.display = 'none';
        document.getElementById('tablo').style.display = 'none';
        document.querySelector('section').style.display = 'block';
        document.getElementById('glas').style.display = 'block';
        function random(arr) {
            return Math.floor(Math.random() * weatherForToday.length);
        }

        const weatherForToday = ['прекрасный день:\n', 'сегодня пасмурный день:\n', 'сегодня дождливый день:\n', 'сегодня холодный день:\n']; // jshint ignore:line
        const whatToWearToday = ['вы можете одеться по летнему!\n', 'на улице пасмурно лучше одеть сланцы\n', 'на улице идет дождь , захватите зонтик!\n', 'на улице холодно, оденьтесь по теплее.\n']; // jshint ignore:line
        const whereToGoForAWalk = ['вы можете отправится на природу\n', 'вы можете пойти в кинотеатр\n', 'вы можете пойти в ресторан\n', 'вам лучше остаться дома!\n']; // jshint ignore:line
        return generateInsult;
    }()),
};

generator.init();