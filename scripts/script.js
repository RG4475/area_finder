function shapeChosen(shape){
    $('#triparallel').show('3000');
    $('#shape').val(shape);
    $('#chosenShape span').html(shape.toUpperCase());
}

function showAreaTriParallelForm(){
    $('#area_tri_parallel').show('3000');
}

function areaCalcTriParallel(){
    let base = parseInt($('#base').val());
    let height = parseInt($('#height').val());
    let shape = $('#shape').val();

    let givenAnswer = parseInt($('#areaCalc1').val());
    let areaCalc = base * height;

    if(shape == "triangle") {
        let areaTriangle = areaCalc / 2;
        $('#chosenShape').html(areaTriangle);
        answerCheck(givenAnswer, areaTriangle);
    }
    else{
        $('#chosenShape').html(areaCalc);
        answerCheck(givenAnswer, areaCalc);
    }
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