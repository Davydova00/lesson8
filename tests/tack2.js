class Controller1 {
    static user = {
      name: "Anastasiia",
      age: 666,
      bd: 1989,
    };
  
    fetchData() {
      return Promise.resolve(Controller1.user);
    }
  }
  
  class Controller2 {
    static user = {
      name: "Bober",
      age: 13,
      bd: 1578,
    };
  
    fetchData() {
      return Promise.resolve(Controller2.user);
    }
  }
  
  // Создали экземпляры Controller1 и Controller2
  const controller1Anastasiia = new Controller1();
  const controller2Bober = new Controller2();
  
  // Создаем массив промисов(fetchData() для каждого экземпляра)
  const promises = [controller1Anastasiia.fetchData(), controller2Bober.fetchData()];
  
  // Обработка результатов (Promise.allSettled)
  Promise.allSettled(promises)
    .then(results => {
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          console.log(`Info ${index + 1}:`, result.value);
        } else {
          console.error(`Error ${index + 1}:`, result.reason);
        }
      });
    })
    .catch(error => {
      console.error('Ошибка в Promise.allSettled:', error);
    });