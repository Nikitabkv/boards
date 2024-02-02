import s from './BoardPlace.module.scss'
import {useState} from "react"
import {dragStartHandler, dropHandler} from "../model";

export default function BoardPlace() {
  const [boards, setBoards] = useState(
    [
      {
        id: 1,
        title: 'Category 1',
        items: [
          { id: 1, title: 'Item 1' },
          { id: 2, title: 'Item 2' },
          { id: 3, title: 'Item 3' },
          { id: 4, title: 'Item 4' },
          { id: 5, title: 'Item 5' },
          { id: 6, title: 'Item 6' },
          { id: 7, title: 'Item 7' },
          { id: 8, title: 'Item 8' },
          { id: 9, title: 'Item 9' },
          { id: 10, title: 'Item 10' }
        ]
      },
      {
        id: 2,
        title: 'Category 2',
        items: [
          { id: 11, title: 'Item 11' },
          { id: 12, title: 'Item 12' },
          { id: 13, title: 'Item 13' },
          { id: 14, title: 'Item 14' },
          { id: 15, title: 'Item 15' },
          { id: 16, title: 'Item 16' },
          { id: 17, title: 'Item 17' },
          { id: 18, title: 'Item 18' },
          { id: 19, title: 'Item 19' },
          { id: 20, title: 'Item 20' }
        ]
      },
      {
        id: 3,
        title: 'Category 3',
        items: [
          { id: 21, title: 'Item 21' },
          { id: 22, title: 'Item 22' },
          { id: 23, title: 'Item 23' },
          { id: 24, title: 'Item 24' },
          { id: 25, title: 'Item 25' },
          { id: 26, title: 'Item 26' },
          { id: 27, title: 'Item 27' },
          { id: 28, title: 'Item 28' },
          { id: 29, title: 'Item 29' },
          { id: 30, title: 'Item 30' }
        ]
      },
      {
        id: 4,
        title: 'Category 4',
        items: [
          { id: 31, title: 'Item 31' },
          { id: 32, title: 'Item 32' },
          { id: 33, title: 'Item 33' },
          { id: 34, title: 'Item 34' },
          { id: 35, title: 'Item 35' },
          { id: 36, title: 'Item 36' },
          { id: 37, title: 'Item 37' },
          { id: 38, title: 'Item 38' },
          { id: 39, title: 'Item 39' },
          { id: 40, title: 'Item 40' }
        ]
      },
      {
        id: 5,
        title: 'Category 5',
        items: [
          { id: 41, title: 'Item 41' },
          { id: 42, title: 'Item 42' },
          { id: 43, title: 'Item 43' },
          { id: 44, title: 'Item 44' },
          { id: 45, title: 'Item 45' },
          { id: 46, title: 'Item 46' },
          { id: 47, title: 'Item 47' },
          { id: 48, title: 'Item 48' },
          { id: 49, title: 'Item 49' },
          { id: 50, title: 'Item 50' },
        ]
      },
      {
        id: 6,
        title: 'Category 6',
        items: [
          { id: 51, title: 'Item 51' },
          { id: 52, title: 'Item 52' },
          { id: 53, title: 'Item 53' },
          { id: 54, title: 'Item 54' },
          { id: 55, title: 'Item 55' },
          { id: 56, title: 'Item 56' },
          { id: 57, title: 'Item 57' },
          { id: 58, title: 'Item 58' },
          { id: 59, title: 'item 59' },
          { id: 60, title: 'Item 60' },
          { id: 61, title: 'Item 61' },
          { id: 62, title: 'Item 62' },
          { id: 63, title: 'Item 63' },
          { id: 64, title: 'Item 64' },
          { id: 65, title: 'Item 65' },
          { id: 66, title: 'Item 66' },
          { id: 67, title: 'Item 67' },
          { id: 68, title: 'Item 68' },
          { id: 69, title: 'Item 69' },
          { id: 70, title: 'Item 70' },
          ]
      },
      {
        id: 7,
        title: 'Category 7',
        items: [
          { id: 71, title: 'Item 71' },
          { id: 72, title: 'Item 72' },
          { id: 73, title: 'Item 73' },
          { id: 74, title: 'Item 74' },
          { id: 75, title: 'Item 75' },
          { id: 76, title: 'Item 76' },
          { id: 77, title: 'Item 77' },
          { id: 78, title: 'Item 78' },
          { id: 79, title: 'Item 79' },
          { id: 80, title: 'Item 80' },
          ]
      }
    ]
    )
  const [currentBoard, setCurrentBoard] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)

  return (
    <div className={s.boardPlace}>
      {boards.map(board => (
        <div
          className={s.board}
          key={board.id}
          onDragOver={(e) => {e.preventDefault()}}
          onDrop={(e) => dropHandler(e, board, null, currentBoard, currentItem, setBoards, boards)}
        >
          <div
            className={s.boardTitle}
          >
            {board.title}
          </div>
          {board.items.map(item => (
            <div
              className={s.boardItem}
              key={item.id}
              draggable={true}
              onDragStart={(e) => dragStartHandler(e, board, item, setCurrentBoard, setCurrentItem)}
              onDragOver={(e) => {e.preventDefault()}}
              onDrop={(e) => dropHandler(e, board, item, currentBoard, currentItem, setBoards, boards)}
            >
              {item.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
