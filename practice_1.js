class Monitor {
    constructor(name, diagonal, price) {
        this.name = name;
        this.diagonal = diagonal;
        this.price = price;
    }
}

class Stack {
    constructor() {
        this.items = [];
    }

    // Додавання нового монітора у стек
    addToStack(monitor) {
        this.items.push(monitor);
        console.log(`Монітор "${monitor.name}" додано у стек.`);
    }

    // Видалення останнього монітора зі стеку
    removeFromStack() {
        if (this.isEmpty()) {
            console.log("Помилка: не можна видалити елемент, оскільки стек порожній!");
            return null;
        }
        const removedMonitor = this.items.pop();
        console.log(`Монітор "${removedMonitor.name}" був видалений зі стеку.`);
        return removedMonitor;
    }

    // Перегляд даних стеку
    displayStack() {
        if (this.isEmpty()) {
            console.log("Стек порожній.");
            return;
        }
        console.log("Дані у стеку:");
        this.items.forEach((monitor, index) => {
            console.log(`${index + 1}. Назва: ${monitor.name}, Діагональ: ${monitor.diagonal}"`, 
                        `Ціна: ${monitor.price} грн`);
        });
    }

    // Визначення кількості моніторів у стеку
    getMonitorCount() {
        return this.items.length;
    }

    // Підрахунок моніторів з діагоналлю понад 20 дюймів
    countLargeMonitors() {
        return this.items.filter(monitor => monitor.diagonal > 20).length;
    }

    // Очистка стеку
    clearStack() {
        this.items = [];
        console.log("Стек було очищено.");
    }

    // Перевірка, чи стек порожній
    isEmpty() {
        return this.items.length === 0;
    }
}

// Основна функція для демонстрації роботи стеку
function main() {
    const stack = new Stack();

    // Додавання моніторів у стек
    stack.addToStack(new Monitor("Xiaomi Monitor A27i\"", 27, 4799));
    stack.addToStack(new Monitor("Apple iMac 24\"", 24, 105963));
    stack.addToStack(new Monitor("Acer V206HQLABI 19.5\"", 19.5, 2999));
    stack.addToStack(new Monitor("ViewSonic VA220-H 21.5\"", 21.5, 2919));

    // Перегляд даних у стеку
    stack.displayStack();
    
    // Визначення кількості моніторів у стеку
    console.log(`Кількість моніторів у стеку: ${stack.getMonitorCount()}`);

    // Визначення кількості моніторів з діагоналлю понад 20 дюймів
    console.log(`Кількість моніторів з діагоналлю понад 20": ${stack.countLargeMonitors()}`);

    // Видалення монітора зі стеку
    stack.removeFromStack();

    // Перегляд стеку після видалення
    stack.displayStack();

    // Очищення стеку
    stack.clearStack();

    // Спроба переглянути порожній стек
    stack.displayStack();
}

main();