const arr=new Array(0,0,0,0,0,0,0,0,0);
let numMoves=0;
const ox=new Array("x","o");
function isWinner(){
    for(let i=0;i<9;i++)
    console.log(arr[i]);
    for(let i=0;i<3;i++)
    {
        if(arr[i]&&arr[i+3]==arr[i+6]&&arr[i]==arr[i+3])
        {
            return true;
        }
        if(arr[3*i]&&arr[3*i+1]==arr[3*i+2]&&arr[3*i]==arr[3*i+1])
        {
            return true;
        }
    }
    if(arr[4]&&(arr[0]==arr[4]&&arr[4]==arr[8]||arr[2]==arr[6]&&arr[2]==arr[4]))
    return true;
    return false;
}
function reply_click(clicked_id,id1){
    if(arr[clicked_id-1]==0)
    {
        console.log(id1);
        arr[clicked_id-1]=numMoves%2+1;
        let ans=isWinner();
        let element = document.getElementById(id1);
        element.classList.remove("availBox");
        class1=ox[numMoves%2];
        element.classList.add(class1);
        numMoves++;
        console.log(numMoves);
        if(ans)
        winner();
        if(!ans&&numMoves==9)
        Over();
    }
}
function Over(){
    let element=document.getElementById("Over");
    element.style.display="block";
    let element2=document.getElementById("p2");
    element2.innerHTML="GAME OVER";
}
function winner()
{
    let element=document.getElementById("Winner");
    element.style.display="block";
    let element2=document.getElementById("p1");
    let win=(numMoves+1)%2+1;
    element2.innerHTML="THE WINNER IS PLAYER-"+win;
    for(let i=0;i<9;i++)
    {
        arr[i]=1;
    }
}
function retry(){
    for(let i=1;i<=9;i++)
    {
        id1="box"+i;
        let element=document.getElementById(id1);
        element.classList.remove('o');
        element.classList.remove('x');
        element.classList.add('availBox');
        arr[i-1]=0;
    }
    let element=document.getElementById("Over");
    element.style.display="none";
    let element2=document.getElementById("Winner");
    element2.style.display="none";
    numMoves=0;
}