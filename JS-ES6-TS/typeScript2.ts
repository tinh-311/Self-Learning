// const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;
// const myName = 'Timmo Nguyen' as string;

// myCanvas.style.height = '200px';
// myCanvas.style.width = '200px';
// myCanvas.style.backgroundColor = 'Red';
// myCanvas.style.color = '#fff';
// myCanvas.textContent = myName;

// --
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

function liveDangerously(x?: number | null) {
    console.log(x!.toFixed());
}

// liveDangerously(5.5)

function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
      return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}

// console.log(getUsersOnlineMessage(10));
// console.log(getUsersOnlineMessage(null));
