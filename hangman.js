function prepareWordForHangman(word1){
    if (typeof word1 === 'string' && word1.length>2){
        var str = ``;
        for (var i = word1.length-3; i >= 0; i--){
        str = str + `-`;
        }
        var hyphens = str;
        console.log(word1[0].toUpperCase()+hyphens+word1[word1.length-1].toUpperCase())
    } else console.log(`ERROR`)
}
prepareWordForHangman("ololo")
