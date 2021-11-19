// const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;
// const myName = 'Timmo Nguyen' as string;
// myCanvas.style.height = '200px';
// myCanvas.style.width = '200px';
// myCanvas.style.backgroundColor = 'Red';
// myCanvas.style.color = '#fff';
// myCanvas.textContent = myName;
// --
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function liveDangerously(x) {
    console.log(x.toFixed());
}
// liveDangerously(5.5)
function getUsersOnlineMessage(numUsersOnline) {
    if (numUsersOnline) {
        return "There are ".concat(numUsersOnline, " online now!");
    }
    return "Nobody's here. :(";
}
console.log(getUsersOnlineMessage(null));
