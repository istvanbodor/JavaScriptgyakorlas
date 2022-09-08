tomb = [];
for (i =0; i<20 ; i++ )
{
     macska = {
        nev : "Cirmos "+(i+1),
        eletkor : Math.floor((Math.random()*8 +2))
    };
    tomb[i] =macska;
}

for (i = 0; i<tomb.length; i++)
{
    if(tomb[i].eletkor==2){
        console.log(tomb[i].nev +" "+tomb[i].eletkor)
    }

}
