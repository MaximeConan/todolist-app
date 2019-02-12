/**
 * Todolist
 */
var app = {
  count: 0,
  init: function() {
    // récupération de #todo dans le DOM
    app.todo = document.getElementById('todo')
    // Création du form
    app.createForm()
    // Création du compteur
    app.createCounter()
    // Création de la liste
    app.createList()
    // Création du copyright
    app.createCopyright()
  },
  
  // Création d'une tâche
  onAddTask: function(event) {
    event.preventDefault();
    // Récupérer la valeur du champs
    var value = event.target.elements.inputValue.value

    // traitement de la donnée
    var content = value.trim()
    if(content.length > 0) {
      app.generateTask({
        label: content,
        done: false
      })
      // On incrément le compteur
      app.count ++
      // Mise à jour du compteur dans le DOM
      app.updateCounter()
    }

    // Nettoyage de l'input après soumission
    event.target.elements.inputValue.value = ''
  },

  // Création du form
  createForm: function() {
    console.log('app.creconsole.log(app.count)teForm')

    // balise <form>
    var form = document.createElement('form')
    form.id = 'todo-form'

    // Intercepter le suconsole.log(app.count)mit du form
    form.addEventListener('submit', app.onAddTask)

    // balise <input>
    var input = document.createElement('input')
    input.type = 'text'
    input.id = 'todo-input'
    input.name = 'inputValue'
    input.placeholder = 'Ajouter une tâche'

    // placer l'input dans le form
    form.appendChild(input)

    //placer le form dans le DOM
    app.todo.appendChild(form)
  },

  // Mise à jour du compteur dans le DOM
  updateCounter: function() {
    app.counter.textContent = `${app.count} tâche(s) en cours`
  },
  
  // Création du compteur  
  createCounter: function() {
    console.log('app.createCounter')

    //balise <div>
    var counter = document.createElement('div')
    app.counter = counter 
    counter.id = 'todo-counter'
    
    // Définir le contenu du compteur
    counter.textContent = `${app.count} tâche(s) en cours`
    
    // Ajouter la div au DOM
    app.todo.appendChild(counter)
  },
  
  // Création de la liste  
  createList: function() {
    console.log('app.createList')

    // balise <ul>
    var ul = document.createElement('ul')
    app.ul = ul
    ul.id = 'todo-ul'

    // Ajout du ul dans le DOM
    app.todo.appendChild(app.ul)
  },

  // Génération des tâches
  generateTask: function(data) {
    console.log(data)
    // balise <li>
    var li = document.createElement('li')
    li.className = 'todo-li'
    
    if (data.done) {
      li.classList.add('todo-li--done');
    }

    // balise checbox (input)
    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = data.done

    // Ecouter le changement de la checkbox
    checkbox.addEventListener('change', function () {
      li.classList.toggle('todo-li--done');

      if (checkbox.checked) {
        // ajout la classe css
        // décrementer le compteur
        app.count--;
      } else {
        // retrait de la classe css
        // task.classList.remove('task--done');
        // décrementer le compteur
        app.count++;
      }
      // maj du compteur
      app.updateCounter();
    });

    // balise label (span)
    var label = document.createElement('span')
    label.className = 'todo-li--label'
    label.textContent = data.label

    // Ajout de l'input et du label à la li
    li.appendChild(checkbox)
    li.appendChild(label)

    // Ajout de la li dans le ul
    app.ul.appendChild(li)
  },

  createCopyright: function () {

  }
};

// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);
