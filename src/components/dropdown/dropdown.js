const dropdownControler = () => {
    const arrowState = {
        down: true,
    }
    const dropdownColl = document.querySelectorAll('.dropdown');
    dropdownColl.forEach((dd) => {
        const field = dd.querySelector('.dropdown__field');
        const dropbox = dd.querySelector('.dropdown__dropbox');
        const arrow = dd.querySelector('img');
        field.addEventListener('click', (e) => {
            dropbox.classList.toggle('dropdonw__dropbox--show');
            arrow.classList.toggle('dropdown__arrow--reverse');
            e.target.scrollIntoView();
        })
    })
    
    const titleFieldColl = document.querySelectorAll('.dropdown__dropbox-title');
    titleFieldColl.forEach((title) => {
        title.addEventListener('click', (e) => {
            const list = title.querySelector('.dropdown__dropbox-content');     
            list.classList.toggle('dropdonw__dropbox--show');
            list.addEventListener('click', (e) => {
                const selectItem = e.target.textContent;
                const nameField = item.closest('.dropdown').querySelector('.dropdown__field-name');
                nameField.textContent = selectItem;
            })
        });
    });
    
    // const content = document.querySelectorAll('.dropdown__dropbox-content');
    // content.forEach((item) => {
    //     item.addEventListener('click', (e) => {
    //         const selectItem = e.target.textContent;
    //         const nameField = item.closest('.dropdown').querySelector('.dropdown__field-name');
    //         nameField.textContent = selectItem;
    //     })
    // })
}

dropdownControler();