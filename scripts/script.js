let chances;

$('#circleDesc span').html(Math.PI);

function shapeChosen(shape){
    $('#firstTrapeziumForm').hide('3000');
    $('#area_trapezium').hide('3000');
    $('#triparallel').show('3000');
    $('#shape').val(shape);
    $('#chosenShape span').html(shape.toUpperCase());
    chances = 3;
}

function showAreaTriParallelForm(){
    $('#area_tri_parallel').show('3000');
}

function showFirstTrapeziumForm(){
    $('#triparallel').hide('3000');
    $('#area_tri_parallel').hide('3000');
    $('#firstTrapeziumForm').show('3000');
}

function showAreaTrapeziumForm(){
    $('#area_trapezium').show('3000');
    chances = 3;
}

function showCircleCalcChoice(){
    $('#calc_choice').show('3000');
}

function showRadiusInputForm(){
    let chosenCalcChoice = $("input[name='choice']:checked").val();
    $('#calculation').val(chosenCalcChoice);
    $('#radius_input').show('3000');
}

function showChosenChoice(){
    
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

function answerCheck(given, correct){

    if(given == correct)
    {
        alert("You have answered correctly");
    }
    else{
        alert("You have answered incorrectly");
    }
}