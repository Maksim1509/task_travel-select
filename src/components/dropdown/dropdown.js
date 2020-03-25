const dropdownController = () => {   
    const dropdownColl = document.querySelectorAll('.dropdown__field');

    dropdownColl.forEach((dropdown) => {
        dropdown.addEventListener('click', ({ target }) => {
            const nameField = target.querySelector('.dropdown__field-name');
            const arrow = target.querySelector('img');
            const dropbox = target.nextElementSibling;
            dropbox.classList.toggle('dropdonw__dropbox--show');
            arrow.classList.toggle('dropdown__arrow--reverse');

            const dropboxTitleColl = dropbox.querySelectorAll('.dropdown__dropbox-title');

            dropboxTitleColl.forEach((dropboxTitle) => {
                dropboxTitle.addEventListener('click', (e) => {
                    const dropboxContent = e.target.querySelector('.dropdown__dropbox-content');
                    dropboxContent.addEventListener('click', (e) => {
                        nameField.textContent = e.target.textContent;
                        e.stopPropagation();
                    });
                    dropboxContent.classList.toggle('dropdonw__dropbox--show');
                });
            });
        });
    });   
};
dropdownController();
