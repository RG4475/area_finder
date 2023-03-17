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

*/

//FUNCTIONS INVOLVED IN CALCULATING THE AREA OF A TRIANGLE OR A PARALLELOGRAM

/*the 'shape' parameter in the 'shapeChosen()' function has the id of the shape the user clicked on (see onclick=shapeChosen(this.id) in index.html)
This is used for determining whether the user wants to calculate the area of a triangle or a parallelogram as both shapes require the same information
the only difference is that both shapes have a slightly different way in how the area is calculated.*/

function shapeChosen(shape){
    $('#area_tri_parallel').hide('3000');
    $('#firstTrapeziumForm').hide('3000');
    $('#area_trapezium').hide('3000');
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


//FUNCTIONS INVOLVED IN CALCULATING THE AREA OF A TRAPEZIUM

function showFirstTrapeziumForm(){
    $('#triparallel').hide('3000');
    $('#area_tri_parallel').hide('3000');
    $('#area_trapezium').hide('3000');
    $('#firstTrapeziumForm').show('3000');
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

//FUNCTIONS ORDER STRUCTURE FOR CIRCLE

function showCircleCalcChoice(){
    $('#area_circle').hide('3000');
    $('#circum_circle').hide('3000');
    $('#diameter_circle').hide('3000');
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

function areaCalcTriParallel(){
    let base = parseInt($('#base').val());
    let height = parseInt($('#height').val());
    let shape = $('#shape').val();

    let givenAnswer = parseInt($('#areaCalc1').val());
    let areaCalc = base * height;

    if(shape == "triangle") {
        let areaTriangle = areaCalc / 2;
        $('#chosenShape').html(chances);
        answerCheck(givenAnswer, areaTriangle);
    }
    else{
        $('#chosenShape').html(chances);
        answerCheck(givenAnswer, areaCalc);
    }
}

function areaCalcTrapezium(){
    let topBase = parseInt($('#topbase').val());
    let bottomBase = parseInt($('#bottombase').val());
    let height = parseInt($('#heightTrapezium').val());

    let givenAnswer = parseInt($('#areaCalc2').val());
    let basesCalc = (topBase + bottomBase) / 2;
    let areaCalc = basesCalc * height;

    answerCheck(givenAnswer, areaCalc);

    $('#forTrapezium').html(areaCalc);
}

function areaCalcCircle(){
    let radius = parseInt($('#radius').val());

    let givenAnswer = Math.round($('#areaCalc3').val());
    let areaCalc = Math.round(valuePi * radius**2);

    answerCheck(givenAnswer, areaCalc);
    $('#area_circle h3').html(areaCalc);
}

function circumferenceCalc(){
    let radius = parseInt($('#radius').val());

    let givenAnswer = Math.round($('#circumCalc').val());
    let circumCalc = Math.round(2 * valuePi * radius);

    answerCheck(givenAnswer, circumCalc);

    $('#circum_circle h3').html(circumCalc);
}

function diameterCalculation(){
    let radius = parseInt($('#radius').val());

    let givenAnswer = parseInt($('#diameterCalc').val());
    let diameter = radius * 2;

    answerCheck(givenAnswer, diameter);

    $('#diameter_circle h3').html(diameter);
}

/*Function used in all calculation functions to check if the user's answer matches the correct answer.
Having this function saves on having separate answer checking functions inside the different functions where calculations are performed*/

function answerCheck(given, correct){

    if(given == correct)
    {
        alert("You have answered correctly");
    }
    else{
        alert("You have answered incorrectly");
    }
}