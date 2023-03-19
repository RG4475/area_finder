let chances;
const valuePi = Math.PI;

$('#circleDesc span').html(valuePi);

/*FUNCTIONS ORDER STRUCTURE FOR TRIANGLE, PARALLELOGRAM AND TRAPEZIUM

    1. Displaying the form for entering base(s) and height sizes (forms from other shapes in this category are hidden if already displayed)
    2. First checks if the user has entered numbers for base(s) and height in the relevant form displayed
        if yes then display the form where the user can enter what they think the area of their chosen shape is.
        if no then produce an alert telling the user they must enter this information.

    3. Picking up the user's answer, calculating the area of their chosen shape based upon the base(s) and height sizes the user gave and checking if the user is right.
        i. For Triangle and Parallelogram it will first check which shape the user has chosen to calculate the area of before doing the calculation.
        ii. It will then follow the method of how the area of the user's chosen shape is calculated
        iii. Then using the answerCheck() function at the bottom it will check if the user's answer and the correct answer match returning an alert to tell if they were right or wrong.

    4. Displays a clue on how to calculate the area of the user's chosen shape, should the user need some help.
*/

//FUNCTIONS INVOLVED IN CALCULATING THE AREA OF A TRIANGLE OR A PARALLELOGRAM

/*the 'shape' parameter in the 'shapeChosen()' function has the id of the shape the user clicked on (see onclick=shapeChosen(this.id) in index.html)
This is used for determining whether the user wants to calculate the area of a triangle or a parallelogram as both shapes require the same information
the only difference is that both shapes have a slightly different way in how the area is calculated.*/

function shapeChosen(shape){
    $('#area_tri_parallel').hide('3000');
    $('#firstTrapeziumForm').hide('3000');
    $('#area_trapezium').hide('3000');

    $('.clue').html("");
    $('.answer').html("");

    $('#triparallel').show('3000');
    $('#shape').val(shape);
    $('#selectShape').html(shape.toUpperCase());
    $('#chosenShape span').html(shape.toUpperCase());
    chances = 3;
}

function showAreaTriParallelForm(){
    let base = parseInt($('#base').val());
    let height = parseInt($('#height').val());
    let shape = $('#shape').val();

    if(!base || !height){
        alert("Please enter the base and height of your " + shape);
    }
    else{
        $('#triparallel').hide('3000');
        $('#baseChosen span').html(base);
        $('#heightChosen span').html(height);
        $('#area_tri_parallel').show('3000');
    }
}

function areaCalcTriParallel(){
    let base = parseInt($('#base').val());
    let height = parseInt($('#height').val());
    let shape = $('#shape').val();

    let givenAnswer = parseInt($('#areaCalc1').val());
    let areaCalc = base * height;

    let returned;

    if(shape == "triangle") {
        let areaTriangle = areaCalc / 2;
        
        returned = answerCheck(givenAnswer, areaTriangle);

        if(returned == "Correct" || returned == "Game Over"){
            $('#answerTriParallel').html("The correct answer is " + areaTriangle + "cm Area of Triangle = base * height / 2.")
        }
    }
    else{

        returned = answerCheck(givenAnswer, areaCalc);

        if(returned == "Correct" || returned == "Game Over"){
            $('#answerTriParallel').html("The correct answer is " + areaCalc + "cm Area of Parallelogram = base * height.")
        }
    }
}

function clueTriParallel(){

    let shape = $('#shape').val();

    if(shape == "triangle") {

        $('#clueTriParallel').html("A Triangle is half a Rectangle.");
    }
    else{
        $('#clueTriParallel').html("Whilst it might not look so, a Parallelogram is like a Rectangle.");
    }
}

//FUNCTIONS INVOLVED IN CALCULATING THE AREA OF A TRAPEZIUM

function showFirstTrapeziumForm(){
    $('#triparallel').hide('3000');
    $('#area_tri_parallel').hide('3000');
    $('#area_trapezium').hide('3000');
    $('#firstTrapeziumForm').show('3000');
    $('.clue').html("");
    $('.answer').html("");
}

function showAreaTrapeziumForm(){
    let topBase = parseInt($('#topbase').val());
    let bottomBase = parseInt($('#bottombase').val());
    let height = parseInt($('#heightTrapezium').val());
    
    if(!topBase || !bottomBase || !height){
        alert("Please enter the top base (A), bottom base (B) and the height of your Trapezium");
    }
    else{
        $('#topBaseChosen span').html(topBase);
        $('#bottomBaseChosen span').html(bottomBase);
        $('#trapHeightChosen span').html(height);
        $('#firstTrapeziumForm').hide('3000');
        $('#area_trapezium').show('3000');
        chances = 3;
    }
}

function areaCalcTrapezium(){
    let topBase = parseInt($('#topbase').val());
    let bottomBase = parseInt($('#bottombase').val());
    let height = parseInt($('#heightTrapezium').val());

    let givenAnswer = parseInt($('#areaCalc2').val());
    let basesCalc = (topBase + bottomBase) / 2;
    let areaCalc = basesCalc * height;

    let returned = answerCheck(givenAnswer, areaCalc);

    if(returned == "Correct" || returned == "Game Over"){
        $('#answerTrapezium').html("The correct answer is " + areaCalc + "cm Area of Trapezium = a + b / 2 * height.")
    }
}

function clueTrapezium(){

        $('#clueTrapezium').html("Add the bases together, then follow something similar with a Triangle, then multiply by something you input with your Trapezium");
}

/*FUNCTIONS ORDER STRUCTURE FOR CIRCLE

    1. Displaying the form where the user can choose what they want to calculate on their circle (other forms related to the circle are hidden if already displayed)
    2. Displays the form where the user can enter the radius of their circle (other forms related to the circle are hidden if already displayed)
        The process of what the user wants to calculate on their circle is decided on point 3 this function only deals with making sure the user selected an option from point 1.
    3. Based on what the user wants to calculate with their circle the next function will decide which form to display
    4. The next 3 functions show the different calculations that can be performed on the circle. Each one will run based on what the user said they wanted to calculate on their circle

        For each function in point 4
        i. The function will pick up the user's answer on what they think the area/circumference/diameter of their circle is based on the radius they gave earlier.
        ii. The function will then follow the process of calculating the area/circumference/diameter of a circle based on the radius the user gave earlier.
        iii. Both the correct answer and the user's answer will be rounded to the nearest whole number, this process is included for the convenience of the user
        iv. Then using the answerCheck() function at the bottom it will check if the user's answer and the correct answer match returning an alert to tell if they were right or wrong.
*/

function showCircleCalcChoice(){
    $('#area_circle').hide('3000');
    $('#circum_circle').hide('3000');
    $('#diameter_circle').hide('3000');

    $('.circleClue').html("");
    $('.circleAnswer').html("");
    
    $('#radius_input').hide('3000');
    $('#calc_choice').show('3000');
}

function showRadiusInputForm(){
    $('#area_circle').hide('3000');
    $('#circum_circle').hide('3000');
    $('#diameter_circle').hide('3000');

    let chosenCalcChoice = $("input[name='choice']:checked").val();

    if(!chosenCalcChoice){
        alert("Please select what you want to calculate with your circle");
    }
    else{
        $('#calculation').val(chosenCalcChoice);
        $('#radius_input').show('3000');
    }
}

function showChosenChoice(){
    let pickUpChoice = $('#calculation').val();

    let radius = parseInt($('#radius').val());

    $('#calc_choice').hide('3000');
    $('#radius_input').hide('3000');
    $('.radiusChosen span').html(radius);

    chances = 3;

    switch(pickUpChoice){

        case "area":
            $('#area_circle').show('3000');
            break;

        case "circumference":
            $('#circum_circle').show('3000');
            break;

        default:
            $('#diameter_circle').show('3000');
    }
}

function areaCalcCircle(){
    let radius = parseInt($('#radius').val());

    let givenAnswer = Math.round($('#areaCalc3').val());
    let areaCalc = Math.round(valuePi * radius**2);

    let returned = answerCheck(givenAnswer, areaCalc);

    if(returned == "Correct" || returned == "Game Over"){
        $('#answerArea').html("The correct answer is " + areaCalc + "cm Area of Circle = Pi * radius<sup>2</sup>.");
    }
}

function circumferenceCalc(){
    let radius = parseInt($('#radius').val());

    let givenAnswer = Math.round($('#circumCalc').val());
    let circumCalc = Math.round(2 * valuePi * radius);

    let returned = answerCheck(givenAnswer, circumCalc);

    if(returned == "Correct" || returned == "Game Over"){
        $('#answerCircumference').html("The correct answer is " + circumCalc + "cm Circumference of Circle = 2 *  Pi * radius");
    }
}

function diameterCalculation(){
    let radius = parseInt($('#radius').val());

    let givenAnswer = parseInt($('#diameterCalc').val());
    let diameter = radius * 2;

    let returned = answerCheck(givenAnswer, diameter);

    if(returned == "Correct" || returned == "Game Over"){
        $('#answerDiameter').html("The correct answer is " + diameter + "cm Diameter of Circle = 2 * radius");
    }
}

function circleClueProvider(){
    let clueToShow = $('#calculation').val();

    switch(clueToShow){

        case "area":
            $('#clueArea').html("Multiply something by radius squared");
            break;

        case "circumference":
            $('#clueCircumference').html('2 * something * radius');
            break;

        default:
            $('#clueDiameter').html('Radius doubled');
    }
    
}

/*Function used in all calculation functions to check if the user's answer matches the correct answer. 1 wrong answer loses a try, all 3 tries lost and its game over.
Having this function saves on having separate but similar answer checking processes inside the different functions where calculations are performed*/

function answerCheck(given, correct){

    if(given == correct){
        alert("You have answered correctly WELL DONE!");
        return "Correct";
    }
    else{

        chances--;

        if(chances == 0){
            alert("You have run out of guesses GAME OVER!")
            return "Game Over";
        }
        else{
            alert("You have answered incorrectly. You have " + chances + " chances left.");
            return "Not Over";
        }
        
    }
}

