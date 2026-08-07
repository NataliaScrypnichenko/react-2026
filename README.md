FE. ДЗ 2. На перевірку
#hQj9gOH

Дані отримати з апі - https://dummyjson.com/products

Створити необхідні моделі та компоненти щоб вивести всю інформацію з отриманих об'єктів

Додати мінімальну стилізацію 


після перевірки дз 
 є зауваження
oktenschool
src/service/api.service.tsx: типізувати результат response.json як IProducts ,наразі інтерфейс IProducts.ts створено, але ніде не імпортується й не використовується


Я в api.service.tsx додала
const getProduct=async (): Promise<IProducts[]> => {
const response = await fetch(findProductUrl)
.then(response => response.json())

    return response.products;
}
