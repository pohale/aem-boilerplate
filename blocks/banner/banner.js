export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('banner-back');
    [...row.children].forEach((col, c) => {
      if (c === 1) {
        col.classList.add('slide-text');
      }
    });
  });
}
