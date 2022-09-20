function prepareWordForHangman1(word1){
    if (typeof word1 === 'string' && word1.length>2){
        var str = ``;
        for (var i = word1.length-3; i >= 0; i--){
        str = str + `-`;
        }
        var hyphens = str;
        console.log(word1[0].toUpperCase()+hyphens+word1[word1.length-1].toUpperCase())
    } else console.log(`ERROR`)
}
prepareWordForHangman1("ololo")



//_________________________________________________

function prepareWordForHangman2(word1){
    if (typeof word1 === 'string' && word1.length>2){
        let str = ""
        str += ` - `.repeat(word1.length - 2)
        console.log(word1[0].toUpperCase()+str+word1[word1.length-1].toUpperCase())
    } else console.log(`ERROR`)
}
prepareWordForHangman2("cat")
