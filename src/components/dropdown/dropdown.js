import SimpleBar from 'simplebar';

    const dropdownColl = document.querySelectorAll('.dropdown__field');

    dropdownColl.forEach((dropdown) => {
        dropdown.addEventListener('click', ({ target }) => {
            const currentDropdown = target.closest('.dropdown');
            const nameField = currentDropdown.querySelector('.dropdown__field-name');
            const arrow = currentDropdown.querySelector('img');
            const dropbox = currentDropdown.querySelector('.dropdown__dropbox');
            dropbox.classList.toggle('dropdown__dropbox--show');
            arrow.classList.toggle('dropdown__arrow--reverse');
            currentDropdown.classList.toggle('dropdown--open');
            

            if (dropbox.querySelector('.dropdown__dropbox-content')) {
                console.log('dropbox-content')
                const dropboxTitleColl = dropbox.querySelectorAll('.dropdown__dropbox-title');
                dropboxTitleColl.forEach((dropboxTitle) => {
                    dropboxTitle.addEventListener('click', (e) => {
                        const dropboxContent = e.target.querySelector('.dropdown__dropbox-content');
                        console.log(dropboxContent)
                        dropboxContent.classList.toggle('dropdown__dropbox--show');
                        dropboxContent.addEventListener('click', (e) => {
                            nameField.textContent = e.target.textContent;
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
    const hide = ({ target }) => {
        const dropboxes = document.querySelectorAll('.dropdown__dropbox');
        if (!target.matches('.dropdown *')) {
            dropboxes.forEach((dropbox) => {
                const currentDropdown = dropbox.closest('.dropdown');
                const arrow = currentDropdown.querySelector('img');
                dropbox.classList.remove('dropdown__dropbox--show')
                arrow.classList.remove('dropdown__arrow--reverse');
                currentDropdown.classList.remove('dropdown--open');
            });
        }
    };
    window.addEventListener('click', hide);


document.querySelectorAll('.dropdown__dropbox').forEach((elem) => new SimpleBar(elem, { scrollbarMaxSize: 351 }));

