import { useState, useEffect } from 'react'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'
import HeroForm from './components/HeroForm'
import heroesService from './services/heroes'
import loginService from './services/login'
import textcontentservice from './services/textcontent'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import Analect from './components/Analect'
import './App.css'

const App = () => {
  const [text, setText] = useState([])
  const [persons, setPersons] = useState([]) 
  const [newPerson, setNewPerson] = useState(' ')
  const [newSword, setNewSword] = useState(' ')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [loginVisible, setLoginVisible] = useState(false)


  useEffect(() => {
    heroesService.getAll().then(initialHeroes => { setPersons(initialHeroes) })
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in ', username)

    try {
      const user = await loginService.login({
        username, password
      })
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.log('Wrong credentials')
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(e => e.name === newPerson && e.sword === newSword)) {
      alert('There already exists an entry for' + newPerson)
    }
    else if (persons.some(e => e.name === newPerson)) {
      const personObject = {
        name: newPerson,
        sword: newSword,
      }
      const heroToUpdate = persons.find(e => e.name === newPerson)
      heroesService.update(heroToUpdate.id, personObject).then(returnedHero => { 
        setPersons(persons.map(person => person.id !== heroToUpdate.id ? person : returnedHero)) 
      })
    }
    else {
    const personObject = {
      name: newPerson,
      sword: newSword,
    }
    heroesService.create(personObject).then(returnedHero => { setPersons(persons.concat(returnedHero)) })
    setNewPerson(' ')
    }
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
  }

  const handleSwordChange = (event) => {
    console.log(event.target.value)
    setNewSword(event.target.value)
  }

  const loginForm = () => {
    const hideWhenVisible = { display: loginVisible ? 'none' : '' }
    const showWhenVisible = { display: loginVisible ? '' : 'none' }

    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setLoginVisible(true)}>log in</button>
        </div>
        <div style={showWhenVisible}>
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
          <button onClick={() => setLoginVisible(false)}>cancel</button>
        </div>
      </div>
    )
  }

  const heroForm = () => (
    <Togglable buttonLabel="new hero">
      <HeroForm onSubmit={addPerson} value={newPerson} handleChange={handlePersonChange} />
    </Togglable>
  )

  return (
    <>
    <div className="flex">
      {SideBar()}
      {NavBar()}
      {Analect()}
    </div>

    <h1>Hall of Heroes</h1>

    {!user && loginForm()}
    {user && <div>
      <p>{user.name} logged in</p>
      {heroForm()}
      </div>
      }

      <h2>Warriors</h2>
      <ul>
      {persons.map(person => <li key={person.id}>{person.name} who wields {person.sword}</li>)}
      </ul>
    </>
  )
}

export default App