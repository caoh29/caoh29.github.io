export const handleTabsColorChange = (e: React.MouseEvent<HTMLLIElement>) => {
  document.querySelectorAll('.tabs li').forEach((li) => {
    li.classList.remove('active');
  });
  e.currentTarget.classList.add('active');
};

export const navHighlighter = () => {
  const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section');
  const navigationLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.navigation-link');
  
  let actualPositionInY: number = window.scrollY;

  sections.forEach((section) => {
    const sectionStart = section.offsetTop - 60;
    const sectionEnd = sectionStart + section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (
      actualPositionInY > sectionStart &&
      actualPositionInY <= sectionEnd
    ) {
      navigationLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
};