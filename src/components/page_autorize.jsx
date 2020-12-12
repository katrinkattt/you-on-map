import Btn from './btn/btn'
import Input from './input/input'
import Logo from './logo/logo'
import './page_autorize.css'
var userLog = 0
export default function PageAutorize() {
  var user = [{
    login: '',
    pass: ''
  }]
  function entry() {
    const login = document.getElementById("login")
    const pass = document.getElementById("pass")
    const entr = document.getElementById("entr")
    if (login.value != '' && pass.value != '') {
      login.style.border = "#08089b 2px solid"
      pass.style.border = "#08089b 2px solid"
      entr.addEventListener('click', () => {
        userLog = 1
        console.log(user.login, user.pass)
        return (user.login = login.value, user.pass = pass.value, console.log(user.login, user.pass))
      })
    }
    else if (login.value != '') {
      pass.placeholder = "введите пароль"
      pass.style.border = "red 2px solid"
    }
    else if (pass.value != '') {
      login.placeholder = "введите логин"
      login.style.border = "red 2px solid"
    }
    else if (login.value == '' && pass.value == '') {
      pass.placeholder = "введите пароль"
      pass.style.border = "red 2px solid"
      login.placeholder = "введите логин"
      login.style.border = "red 2px solid"
    }

  }
  return (
    {userLog},
    <div className="main_autorize">
      <Logo />
      <div className="field">
        <Input idInput={userLog==0?"login":user[0].login} type="email" label="Логин" placeholder="логин" />
        <Input idInput={userLog==0?"pass":user[0].pass} type="password" label="Ваш пароль" placeholder="пароль" />
        <Btn text="войти" id="entr" func={entry} />
      </div>
    </div>
  );
}

