// GALLERY GRID
let grid = document.querySelector('.grid');

let masonry = new Masonry(grid, {
    itemsSelector: '.grid-item',
    gutter: 10
});
