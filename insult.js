function insult (name) {
    const randomInt = Math.floor(Math.random() * 3);
    const insult = ["dingus", "jackass", "wanker"];
    
    return `${name}, you ${insult[randomInt]}.`
}

console.log(insult(process.argv[2]));