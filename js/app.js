const rootEl = document.getElementById('root');

let total = 0;

rootEl.innerHTML = `
    <form action="">
        <div class="form-row">
            <div class="col">
                <input type="text" class="form-control"
                data-id="sum"
                placeholder="Сумма">
            </div>
            <div class="col">
                <input type="text" class="form-control"
                data-id="category" placeholder="Категория">
            </div>
            <div class="col">
                <button class="btn btn-primary" data-action="add">Добавить</button>
            </div>
        </div>
    </form>
    <hr>
    <div data-id="total">Сумма: ${total}</div>
`;

const addEl = rootEl.querySelector('[data-action=add]');
const sumEl = rootEl.querySelector('[data-id=sum]');
const categoryEl = rootEl.querySelector('[data-id=category]');
const totalEl = rootEl.querySelector('[data-id=total]');

addEl.onclick = (event) => {
    event.preventDefault();
    if (!isNaN(Number(sumEl.value))) {
        total = total + Number(sumEl.value);
        totalEl.innerHTML = `Сумма: ${total}`;
    }    
    sumEl.value = '';
    categoryEl.value = '';

}