import View from './note-view';
import Controller from './note-controller';
import Model from './note-model';

(function () {
  const view = new View();
  const model = new Model();

  new Controller(model, view);
})();
