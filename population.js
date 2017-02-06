// array containing randomly generated "words"
var population

function genPop() {
    population = []
    for(var i = 0; i < population_size; i++) {
        var dna_obj = {dna_sequence: "", fitness: 0}
        dna_obj.dna_sequence = getRndSCWord(target.length)
        population.push(dna_obj)
    }
    mutate()
}

function mutate() {
    var tar_length = target.length
    for(var j = 0; j < population_size; j++) {
        for (var i = 0; i < tar_length; i++) {
            if (Math.random() < mutation_rate) {
                population[j].dna_sequence = replaceRndAt(i, population[j].dna_sequence)
            }
        }
    }
    calcFitnessAll()
}

function calcFitnessAll() {
    for( var i = 0; i < population.length; i++) {
        population[i].fitness = calcFitness(target, population[i].dna_sequence)
    }    
    showBestFit()
    showAvgFitness()
    updateCurrPop()
    breed()
}

/**
 * generates a sequence of small case characters
 */
function getRndSCWord(length) {
    var char = ""
    for( var i = 0; i < length; i++) {
        rnd_ascii = Math.floor(Math.random() * (122-98)) + 97
        char += String.fromCharCode(rnd_ascii)
    }
    return char
}

/**
 * calculates the fitness of a given sequence relative to a given target
 * fitness formula: (sum of matching characters) / length of target
 */
function calcFitness(target, sequence) {
    var fitness = 0
    for(var i = 0; i < target.length; i++) {
        if (target.charAt(i) === sequence.charAt(i)) {
            fitness++;
        }
    }
    return fitness / target.length
}

/**
 * function to replace a char in a string at a given index
 */
function replaceRndAt(index, string) {
    var array = string.split("")
    array[index] = String.fromCharCode(Math.floor(Math.random() * (122-98)) + 97)
    var newStr = array.join("")
    return newStr
}