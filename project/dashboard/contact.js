const Message = document.querySelector('#Message');
let massegeInput = document.querySelector('#form12').value;
const sendMessage = document.querySelector('.send-message');
sendMessage.addEventListener('click',()=>{
    Message.innerHTML += `
    <div class="w-50 bg-white p-2 mb-3 me-4 rounded d-flex justify-content-between align-self-end">
                            <p>${massegeInput}</p>
                            <img src="img/check-all.svg" alt="icon">
                        </div>
    `
});