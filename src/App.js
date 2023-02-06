import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form class="form-inline">
  <div class="form-group">
    <label class="sr-only" for="inputEmail">Email</label>
    <input type="email" class="form-control" id="inputEmail" placeholder="Email"/>
  </div>
  <div class="form-group">
    <label class="sr-only" for="inputPassword">Пароль</label>
    <input type="password" class="form-control" id="inputPassword" placeholder="Пароль"/>
  </div>
  <div class="checkbox">
    <label><input type="checkbox"/> Запомнить</label>
  </div>
  <button type="submit" class="btn btn-primary">Войти</button>
</form>
  );
}

export default App;
