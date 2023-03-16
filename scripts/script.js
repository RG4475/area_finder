let chances;
const valuePi = Math.PI;

$('#circleDesc span').html(valuePi);

function shapeChosen(shape){
    $('#firstTrapeziumForm').hide('3000');
    $('#area_trapezium').hide('3000');
    $('#triparallel').show('3000');
    $('#shape').val(shape);
    $('#chosenShape span').html(shape.toUpperCase());
    chances = 3;
}

function showAreaTriParallelForm(){
    let base = parseInt($('#base').val());
    let height = parseInt($('#height').val());
    let shape = $('#shape').val();

    if(!base || !height){
        $('#area_tri_parallel').hide();
        alert("Please enter the base and height of your " + shape);
    }
    else{
        $('#area_tri_parallel').show('3000');
    }
}

function showFirstTrapeziumForm(){
    $('#triparallel').hide('3000');
    $('#area_tri_parallel').hide('3000');
    $('#firstTrapeziumForm').show('3000');
}

function showAreaTrapeziumForm(){
    let topBase = parseInt($('#topbase').val());
    let bottomBase = parseInt($('#bottombase').val());
    let height = parseInt($('#heightTrapezium').val());
    
    if(!topBase || !bottomBase || !height){
        $('#area_trapezium').hide();
        alert("Please enter the top base (A), bottom base (B) and the height of your Trapezium");
    }
    else{
        $('#area_trapezium').show('3000');
        chances = 3;
    }
}

function showCircleCalcChoice(){
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

function answerCheck(given, correct){

    if(given == correct)
    {
        alert("You have answered correctly");
    }
    else{
        alert("You have answered incorrectly");
    }
}