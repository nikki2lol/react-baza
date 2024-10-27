"use strict";
// Класс для представления товара
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
// Класс для представления заказа
class Order {
    constructor(id, products, status = "Pending") {
        this.id = id;
        this.products = products;
        this.status = status;
    }
    getTotal() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
// Класс для управления корзиной
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
        console.log(`Товар ${item.name} добавлен в корзину.`);
    }
    removeItem(itemId) {
        const index = this.items.findIndex(item => item.id === itemId);
        if (index !== -1) {
            const removedItem = this.items.splice(index, 1)[0];
            console.log(`Товар ${removedItem.name} удален из корзины.`);
        }
        else {
            console.log(`Товар с ID ${itemId} не найден в корзине.`);
        }
    }
    viewCart() {
        if (this.items.length === 0) {
            console.log("Корзина пуста.");
            return;
        }
        console.log("Товары в корзине:");
        this.items.forEach(item => console.log(`- ${item.name}: $${item.price}`));
    }
    getItems() {
        return this.items;
    }
}
// Класс для управления продуктами
class ProductManager {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
        console.log(`Товар ${product.name} добавлен в магазин.`);
    }
    removeProduct(productId) {
        const index = this.products.findIndex(product => product.id === productId);
        if (index !== -1) {
            const removedProduct = this.products.splice(index, 1)[0];
            console.log(`Товар ${removedProduct.name} удален из магазина.`);
        }
        else {
            console.log(`Товар с ID ${productId} не найден в магазине.`);
        }
    }
    viewProducts() {
        if (this.products.length === 0) {
            console.log("Нет доступных товаров.");
            return;
        }
        console.log("Доступные товары:");
        this.products.forEach(product => console.log(`- ${product.name}: $${product.price}`));
    }
}
// Класс для управления заказами
class OrderManager {
    constructor() {
        this.orders = [];
    }
    addOrder(order) {
        this.orders.push(order);
        console.log(`Заказ с ID ${order.id} добавлен. Статус: ${order.status}`);
    }
    changeOrderStatus(orderId, newStatus) {
        const order = this.orders.find(order => order.id === orderId);
        if (order) {
            order.status = newStatus;
            console.log(`Статус заказа с ID ${orderId} изменен на "${newStatus}".`);
        }
        else {
            console.log(`Заказ с ID ${orderId} не найден.`);
        }
    }
    viewOrders() {
        if (this.orders.length === 0) {
            console.log("Нет заказов.");
            return;
        }
        console.log("Заказы:");
        this.orders.forEach(order => {
            console.log(`- Заказ ID ${order.id}, Статус: ${order.status}, Общая сумма: $${order.getTotal()}`);
        });
    }
}
// Пример использования
const productManager = new ProductManager();
const orderManager = new OrderManager();
const cart = new Cart();
// Добавление продуктов
productManager.addProduct(new Product(1, "Ноутбук", 1000));
productManager.addProduct(new Product(2, "Смартфон", 500));
productManager.addProduct(new Product(3, "Наушники", 150));
// Просмотр доступных продуктов
productManager.viewProducts();
// Добавление товаров в корзину
cart.addItem(new Product(1, "Ноутбук", 1000));
cart.addItem(new Product(2, "Смартфон", 500));
// Просмотр текущей корзины
cart.viewCart();
// Создание заказа
const order = new Order(1, cart.getItems());
orderManager.addOrder(order);
// Изменение статуса заказа
orderManager.changeOrderStatus(1, "Shipped");
// Просмотр всех заказов
orderManager.viewOrders();
// Удаление товара из корзины
cart.removeItem(2);
cart.viewCart();
