еще одно приложение на реакте на этот раз  основное внимание было уделено работе  fetch(async/await) api для получения данных которые предоставляет сайт swapi.co 
Отдельно был создан SwApiService компонент для того чтобы c полученными данными было проще работать.
В этом компоненте созданы методы которые берут данные для разных задач и эти методы передаются непосредственно умным компонентам для обработки и дальнейшем выводе данных презентационными компонентами на страницу 
Для этого применялись компоненты высшего порядка которые обрабатывают данные полученные с swapi и передают их простым компронентам и возвращают эти простые компонеты.
Данные действия помогли сохранить принцип "не повторятся"
В приложении был задействован модуль React Router для найстройки маршрутов.