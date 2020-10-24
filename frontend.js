  var vue = new Vue({
    el: '#app',
	//Инициализируем данные
    data: {
		res: '',//В res пихаем пустую строку
          },

	//А вот на событие создание делаем запрос к API


	created: function() {
	  fetch("https://rapidapi.p.rapidapi.com/v1/joke?nsfw=true", {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "joke3.p.rapidapi.com",
  		"x-rapidapi-key": "4f2a3847f5mshaeafd85386c6e39p1f279ejsnd787cdb4efc8"
  	}
    })
    .then(response => {
    	console.log(response);
      this.res = response.url;
    })
    .catch(err => {
    	console.error(err);
    });
  }
    })


/*
Пояснения и проблемы:
1. Судя по документации к vue - fetch хоть и мощен и хорош, но еще не доделан. Вместо него рекомендуют использовать axios. https://ru.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html#Fetch-API
2. http://joxi.ru/RmzaVQCYx9aorO http://joxi.ru/gmvd9VFqj647Aa

Что еще нужно сделать:
1. Разобраться с объектом response, что бы от туда достать анекдот.
2. Сделать хук, который будет срабатывать при нажатии кнопки, и делать то же, что при загрузке
*/
