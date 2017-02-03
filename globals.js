var population_size
var mutation_rate
var target
var avg_fitness
var best_fit

$('body').on('show_avg_fitness', function(event) {
    $('#avg_fitness').html(sum_of_fitness / population_size)
})