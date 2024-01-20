//1. Crie um arquivo HTML com vários elementos de diferentes tipos e classes. ✅
//2. No mesmo arquivo, adicione um script JavaScript. ✅
//3. Utilize `document.getElementsByClassName()` para obter uma lista de elementos que compartilham a mesma classe.
//4. Utilize `document.getElementsByTagName()` para obter uma lista de elementos de um tipo específico.
//5. Utilize `document.querySelector()` para selecionar o primeiro elemento que corresponde a um seletor CSS específico.
//6. Utilize `document.querySelectorAll()` para obter uma lista de todos os elementos que correspondem a um seletor CSS específico.

//3. Utilize `document.getElementsByClassName()` para obter uma lista de elementos que compartilham a mesma classe.
let elementosMesmaClass = document.getElementsByClassName("say");

//4. Utilize `document.getElementsByTagName()` para obter uma lista de elementos de um tipo específico.
let elementosMesmoTipo = document.getElementsByName("button");

//5. Utilize `document.querySelector()` para selecionar o primeiro elemento que corresponde a um seletor CSS específico.
let primeiroElementoSeletorCss = document.querySelector(".say");

//6. Utilize `document.querySelectorAll()` para obter uma lista de todos os elementos que correspondem a um seletor CSS específico.
let todosElementosSeletorEspecifico = document.querySelectorAll("say");