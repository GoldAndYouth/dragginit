import React from 'react'
import PropTypes from 'prop-types'

const Droppable = React.memo(({children, onDrop, canDrag, onDrag}) => {
  /**
   * Handle Drag Over,
   * we need to prevent default on the drag over otherwise drag wont work1
   */
  const handleDragOver = (e) => {
    e.preventDefault()
  }

  return (
    <div
      className='Droppable'
      style={{width: '100%', height: '100%'}}
      draggable={canDrag}
      onDrag={e => onDrag(e)}
      onDrop={e => onDrop(e)}
      onDragOver={e => handleDragOver(e)}
    >
      {children}
    </div>
  )
})

Droppable.defaultProps = {
  onDrop: () => {}, // Setting on drop to an empty function to prevent type error.
  onDrag: () => {}, // Setting on drag to an empty function to prevent type error.
  canDrag: false
}

Droppable.propTypes = {
  /**
   * Called when draggable item is dropped onto container.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrop: PropTypes.func,

  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: PropTypes.func,

  /**
   * React element passed down to the draggable compoent.
   */
  children: PropTypes.element,

  /**
   * Allow Droppable items to be dragged if this flag is set
   */
  canDrag: PropTypes.bool
}

export default Droppable
