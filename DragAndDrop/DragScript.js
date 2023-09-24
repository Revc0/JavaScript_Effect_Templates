document.addEventListener('DOMContentLoaded', () => {
    const dragArea = document.getElementById('drag-area');
    const items = document.querySelectorAll('.draggable-item');
  
    items.forEach(item => {
      item.draggable = true;
  
      item.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text', e.target.id);
      });
    });
  
    dragArea.addEventListener('dragover', e => {
      e.preventDefault();
    });
  
    dragArea.addEventListener('drop', e => {
      e.preventDefault();
      const data = e.dataTransfer.getData('text');
      const draggedItem = document.getElementById(data);
      dragArea.appendChild(draggedItem);
    });
  });
  