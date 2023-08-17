export const handleTabsColorChange = (e: React.MouseEvent<HTMLLIElement>) => {
  document.querySelectorAll('.tabs li').forEach((li) => {
    li.classList.remove('active');
  });
  e.currentTarget.classList.add('active');
};