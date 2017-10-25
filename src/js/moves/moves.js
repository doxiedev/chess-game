import queenMoves from './queen';
import kingMoves from './king';
import rookMoves from './rook';
import bishopMoves from './bishop';
import horseMoves from './horse';

function moves (space, board) {
    // console.log ('moves', space);
    const vector = {};
    vector.x = Number(space.id .split(',')[0]);
    vector.y = Number(space.id .split(',')[1]);
    
    let piece = space.children[0].id;
    piece = piece.split('-')[1]
    
    switch(piece) {
        case 'pawn':
            break;
        case 'rook':
            rookMoves(vector, board);
            break;
        case 'horse':
            horseMoves(vector, board)
            break;
        case 'bishop':
            bishopMoves(vector, board);
            break;
        case 'queen':
            queenMoves(vector, board);
            break;
        case 'king':
            kingMoves(vector, board);
            break;
        default: //empty space
            break;
    }
    
}
    export default moves;

