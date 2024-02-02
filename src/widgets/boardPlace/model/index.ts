export const dropOnEmptyBoard = (board: any, currentBoard, currentItem, setBoards, boards) => {
  const currentIndex = currentBoard.items.indexOf(currentItem)
  currentBoard.items.splice(currentIndex, 1)
  board.items.splice(0, 1, currentItem)
  setBoards(boards.map(b => {
    if(b.id === board.id) {
      return board
    }
    if(b.id === currentBoard.id) {
      return currentBoard
    }
    return b
  }))
}

export const dropOnBoard = (board: any, currentBoard, currentItem, setBoards, boards) => {
  const currentIndex = currentBoard.items.indexOf(currentItem)

  currentBoard.items.splice(currentIndex, 1)
  board.items.splice(board.items.length, 0, currentItem)

  setBoards(boards.map(b => {
    if(b.id === board.id) {
      return board
    }
    if(b.id === currentBoard.id) {
      return currentBoard
    }
    return b
  }))
}

export const dropHandler = (e: React.DragEvent<HTMLDivElement>, board, item, currentBoard, currentItem, setBoards, boards) => {
  e.stopPropagation();
  e.preventDefault()
  if (item === null) {
    if (currentBoard.items.length === 0) {
      dropOnEmptyBoard(board, currentBoard, currentItem, setBoards, boards)
    } else {
      dropOnBoard(board, currentBoard, currentItem, setBoards, boards)
    }
    return
  }

  const currentIndex = currentBoard.items.indexOf(currentItem)
  const dropIndex = board.items.indexOf(item)
  console.log('123')

  currentBoard.items.splice(currentIndex, 1)
  board.items.splice(dropIndex, 0, currentItem)

  setBoards(boards.map(b => {
    if(b.id === board.id) {
      return board
    }
    if(b.id === currentBoard.id) {
      return currentBoard
    }
    return b
  }))
}

export const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, board: any, item: any, setCurrentBoard, setCurrentItem) => {
  setCurrentBoard(board)
  setCurrentItem(item)
}