/*
initialize evolution algorithm
reads the inputs: population size, mutation rate and target sequence
the values are saved in globals.js
triggers 'gen_pop' event; see population.js
*/
$('#evo_button').click(function() {
    population_size = $('#population_input').val()
    mutation_rate = $('#mutation_input').val()
    target = $('#target_input').val()
    $('body').trigger('gen_pop')
})