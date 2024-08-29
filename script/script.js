const btn = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')


btn.addEventListener('click', () => {
    menu.classList.toggle('active')
})


const modal = document.querySelector('.modal');
const modalWrap = document.querySelector('.modal__wrapper');
const modalBtn = document.querySelectorAll('.modal__btn');
const modalClose = document.querySelector('.modal__close');


modalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.toggle('active');
    });
})



modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (event) => {
    if (!modalWrap.contains(event.target)) {
        modal.classList.remove('active');
    }
});

modalWrap.addEventListener('click', (event) => {
    event.stopPropagation();
});





// TELEGRAM

// Select all forms with the class 'form'
const forms = document.querySelectorAll('.form');

// Loop through each form and add an event listener for form submission
forms.forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting the traditional way

        // Get the input values from the current form
        const name = form.querySelector('.name').value;
        const phone = form.querySelector('.phone').value;

        // Prepare the message text
        const message = `Имя: ${name}\nТелефон: ${phone}`;

        // Telegram bot token and chat ID
        const token = '7152055615:AAHk2bCRmWPMZE2hSJlmUFHekKtE2xOXLEM';
        const chatId = '-4563353571';
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        // Send the data to Telegram
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert('Сообщение отправлено!');
                    location.reload()
                } else {
                    alert('Ошибка при отправке сообщения.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Произошла ошибка при отправке данных.');
            });
    });
});
