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
    //$('body').trigger('gen_pop')
    genPop()
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
    for(var j = 0; j < population_size; j++) {
        mating_pool.push(population[j].dna_sequence)
        if(item.fitness > 0) {
            var i = Math.round(population[j].fitness * 10)
            for (; i > 0; i--) {
                mating_pool.push(population[j].dna_sequence)
            }
        }
    }

    //fill next_gen
    var rnd_index = 0
    for( var i = 0; i < population_size; i++) {
        rnd_index = Math.floor(Math.random()*100)
        var parent1 = mating_pool[rnd_index]
        rnd_index = Math.floor(Math.random()*100)
        var parent2 = mating_pool[rnd_index]

        var middle = Math.round(target.length / 2)
        var dna_obj = {dna_sequence: "", fitness: 0}
        dna_obj.dna_sequence = parent1.substr(0, middle) + parent2.substr(middle)
        next_gen.push(dna_obj)
    }

    population = next_gen
    $('body').trigger('is_the_one_born')
})

$('body').on('is_the_one_born', function(event){
    population.forEach(function(item, index){
        if (item.dna_sequence === target) {
            return
        }
    })
    
    $('body').trigger('mutate')
})

function breed() {
    var mating_pool = []
    var next_gen = []

    //fill mating pool
    for(var j = 0; j < population_size; j++) {
        mating_pool.push(population[j].dna_sequence)
        if(population[j].fitness > 0) {
            var i = Math.round(population[j].fitness * 10)
            for (; i > 0; i--) {
                mating_pool.push(population[j].dna_sequence)
            }
        }
    }

    //fill next_gen
    var rnd_index = 0
    for( var i = 0; i < population_size; i++) {
        rnd_index = Math.floor(Math.random()*100)
        var parent1 = mating_pool[rnd_index]
        rnd_index = Math.floor(Math.random()*100)
        var parent2 = mating_pool[rnd_index]

        var middle = Math.round(target.length / 2)
        var dna_obj = {dna_sequence: "", fitness: 0}
        dna_obj.dna_sequence = parent1.substr(0, middle) + parent2.substr(middle)
        next_gen.push(dna_obj)
    }

    population = next_gen
    isTheOneBorn()
}

function isTheOneBorn() {
    for( var i = 0; i < population_size; i++) {
        if (population[i].dna_sequence === target) {
            $('#best_fit').html(population[i].dna_sequence)
            return
        }
    }
    mutate()
    //window.setTimeout(mutate(),1000)
}