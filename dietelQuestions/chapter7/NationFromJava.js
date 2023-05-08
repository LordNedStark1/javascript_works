
 class Nation {
    name;
    currency;
    temp;
    population;
   consonants = "bcdfghjklmnpqrstvwxyz";
    vowels = "aeiou";

    // Random random = new Random();
    constructor() {
        this.setPopulation();
        this.setName();
        this.setCurrency();
        this.setTemp();
    }
    getCurrency(){
        return this.currency;
    }
    random( num){
    return 1 + random.nextInt(num);
}
    getTemp(){
    return this.temp;
}
    setTemp(){
    this.temp = this.random(20);
}
    vowelChar(){
    return  this.vowels.charAt(this.random(4));
}
    consonantChar(){
    return   this.consonants.charAt(this.random(20)) ;
}
     setName(){
    this.name = ""+ this.consonantChar() + this.vowelChar() + this.vowelChar();
    this.name += "" + this.consonantChar() +  this.vowelChar();
}
    setCurrency(){
    this.currency = "" + this.consonantChar() + this.consonantChar();

}
     getNatiomName(){
    return this.name;
}
    setPopulation(){
    this.population = this.random(10000000) ;
}
    getPopulation(){
    return this.population;
}


    toString() {
    return  "Name= '" + this.name + '\n' +
        "Currency= '" + this.currency + '\n' +
        "Temp= " + this.temp + "\n" +
        "Population= " + this.population + "\n\n";
}
}
