var population = []

$('body').on('gen_pop', function(event){
    for( var i = 0; i < population_size; i++) {
        var dna_obj = {dna_sequence: "", fitness: 0}
        dna_obj.dna_sequence += getRndSCWord(target.length)
        population.push(dna_obj)
        $('#current_population').append(population[i].dna_sequence+" ")
    }    
    $('body').trigger('calc_fitness')
})

$('body').on('calc_fitness', function(event) {
    var sum_of_fitness = 0
    for( var i = 0; i < population.length; i++) {
        population[i].fitness = calcFitness(target, population[i].dna_sequence)
        sum_of_fitness += population[i].fitness
    }
    $('body').trigger({
        type: 'show_avg_fitness',
        sum_of_fitness: sum_of_fitness
    })
    showBestFit(population)
})

function getRndSCWord(length) {
    var char = ""
    for( var i = 0; i < length; i++) {
        rnd_ascii = Math.floor(Math.random() * (122-98)) + 97
        char += String.fromCharCode(rnd_ascii)
    }
    return char
}

function calcFitness(target, sequence) {
    var fitness = 0
    for(var i = 0; i < target.length; i++) {
        if (target.charAt(i) === sequence.charAt(i)) {
            fitness++;
        }
    }
    return fitness / target.length
}

function showBestFit(population) {
    best_fit = 0
    best_fit_index = 0
    for( var i = 0; i < population.length; i++) {
        if (population[i].fitness > best_fit) {
            best_fit_index = i
        }
    }
    $('#best_fit').html(population[best_fit_index].dna_sequence)
}