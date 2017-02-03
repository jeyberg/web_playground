$('#evo_button').click(function() {
    population_size = $('#population_input').val()
    mutation_rate = $('#mutation_input').val()
    target = $('#target_input').val()
    $('body').trigger('gen_pop')
})