var population_size
var mutation_rate
var target
var avg_fitness = 0
var best_fit

$('body').on('show_avg_fitness', function(event) {
    $('#avg_fitness').html(sum_of_fitness / population_size)
})

/**
 * function to show current sequence with highest fitness
 * if two or more sequences share highest fitness,
 * the first highest sequence is shown
 */
function showBestFit() {
    best_fit = 0
    best_fit_index = 0
    for( var i = 0; i < population_size; i++) {
        if (population[i].fitness > best_fit) {
            best_fit_index = i
        }
    }
    $('#best_fit').html(population[best_fit_index].dna_sequence)
}

/**
 * function to show average fitness
 */
function showAvgFitness() {
    var sum_of_fitness = 0
    for(var i = 0; i < population_size; i++) {
        sum_of_fitness += population[i].fitness
    }
    avg_fitness = sum_of_fitness / population.length
    $('#avg_fitness').html(avg_fitness)
}

/**
 * update current_population
 */
function updateCurrPop() {
    $('#current_population').empty()
    for( var i = 0; i < population_size; i++) {
        $('#current_population').append(population[i].dna_sequence + " ")
    }
}