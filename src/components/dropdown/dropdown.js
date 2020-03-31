const dropdownController = () => {   
    const dropdownColl = document.querySelectorAll('.dropdown__field');

    dropdownColl.forEach((dropdown) => {
        dropdown.addEventListener('click', ({ target }) => {
            const currentDropdown = target.closest('.dropdown');
            const nameField = currentDropdown.querySelector('.dropdown__field-name');
            const arrow = currentDropdown.querySelector('img');
            const dropbox = currentDropdown.querySelector('.dropdown__dropbox');
            dropbox.classList.toggle('dropdown__dropbox--show');
            arrow.classList.toggle('dropdown__arrow--reverse');

            const dropboxTitleColl = dropbox.querySelectorAll('.dropdown__dropbox-title');

            if (dropbox.querySelector('.dropdown__dropbox-content')) {
                dropboxTitleColl.forEach((dropboxTitle) => {
                    dropboxTitle.addEventListener('click', (e) => {
                        const dropboxContent = e.target.querySelector('.dropdown__dropbox-content');
                        dropboxContent.classList.toggle('dropdown__dropbox--show');
                        dropboxContent.addEventListener('click', (e) => {
                            nameField.textContent = e.target.textContent;
                            e.stopPropagation();
                        });
                    });
                });
            } else {
                const dropboxTitles = dropbox.querySelectorAll('.dropdown__dropbox-title--short');
                dropboxTitles.forEach((title) => {
                    title.addEventListener('click', ({ target }) => {
                        nameField.textContent = target.textContent;
                    });
                });
            }
        });
    });
};
dropdownController();