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

/**
 * breeds a new population
 * mating_pool is filled with dna strings
 * strings with higher fitness are inserted more often
 */
$('body').on('breed', function(event){
    var mating_pool = []
    var next_gen = []

    //fill mating pool
    population.forEach(function(item, index){
        mating_pool.push(item.dna_sequence)
        if(item.fitness > 0) {
            var i = Math.round(item.fitness * 10)
            for (i; i > 0; i--) {
                mating_pool.push(item.dna_sequence)
            }
        }
    })

    
})