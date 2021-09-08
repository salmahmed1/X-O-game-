var element = true;
var squares = [];
function reset(A, B, C) {
    document.getElementById('G' + A).style.color = "blue";
    document.getElementById('G' + B).style.color = "blue";
    document.getElementById('G' + C).style.color = "blue";
    setTimeout(function () { location.reload() }, 2000);

}
function CheckWinner() {
    for (var i = 1; i <= 9; i++) {
        squares[i] = document.getElementById('G' + i).innerHTML;
    }

    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != "") {
        alert('player' + squares[1] + 'is a winner');
        reset(1, 2, 3);

    }
    if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != "") {
        alert('player' + squares[1] + 'is a winner');
        reset(1, 5, 9);

    }
    if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != "") {
        alert('player' + squares[1] + 'is a winner');

        reset(1, 4, 7);
    }
    if (squares[3] == squares[6] && squares[6] == squares[9] && squares[9] != "") {
        alert('player' + squares[1] + 'is a winner');
        reset(3, 6, 9);

    }
    if (squares[7] == squares[8] && squares[8] == squares[9] && squares[9] != "") {
        alert('player' + squares[1] + 'is a winner');
        reset(7, 8, 9);

    }
    if (squares[4] == squares[5] && squares[5] == squares[6] && squares[6] != "") {
        alert('player' + squares[1] + 'is a winner');
        reset(4, 5, 6);

    }
    if (squares[7] == squares[8] && squares[8] == squares[9] && squares[9] != "") {
        alert('player' + squares[1] + 'is a winner');
        reset(7, 8, 9);

    }

}
function insert(id) {
    var S = document.getElementById(id);
    if (element && S.innerHTML == "") {
        S.innerHTML = "X";
        element = !element;

    }
    else if (!element && S.innerHTML == "") {
        S.innerHTML = "O";
        element = !element;

    }
    CheckWinner();
}
function model() {
    console.log()

}
