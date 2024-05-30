const digiteSeuNickName = " Digite seu nickname aqui" ;
const complementoXpLevel = " pontos de experiência sendo " ;
let nickName = "Cleitin" ;
let xpLevel = 6459 ;

console.log(digiteSeuNickName + " = " + nickName) ; 


if(xpLevel >= 0 && xpLevel <= 1000 ){
    console.log(" O " + nickName + "possui " + xpLevel + complementoXpLevel + "ferro " );

}else if(xpLevel >= 1001 && xpLevel <= 2000 ){
    console.log(" O " + nickName + "possui " + xpLevel + complementoXpLevel + "bronze " );

}else if(xpLevel >= 2001 && xpLevel <= 5000 ){
    console.log(" O " + nickName + "possui " + xpLevel + complementoXpLevel + "prata " );

}else if(xpLevel >= 5001 && xpLevel <= 7000 ){
    console.log(" O " + nickName + "possui " + xpLevel + complementoXpLevel + "ouro " );

}else if(xpLevel >= 7.001 && xpLevel <= 8000 ){
    console.log(" O " + nickName + "possui " + xpLevel + complementoXpLevel + "platina " );

}else if(xpLevel >= 8.001 && xpLevel <= 9000 ){
    console.log(" O " + nickName + "possui " + xpLevel + complementoXpLevel + "ascendente " );

}else if(xpLevel >= 9.001 && xpLevel <= 10000 ){
    console.log(" O " + nickName + "possui " + xpLevel + complementoXpLevel + "Imortal ");

}else{
    console.log(" O " + nickName + " possui " + xpLevel +  complementoXpLevel + "radiante ");
}

