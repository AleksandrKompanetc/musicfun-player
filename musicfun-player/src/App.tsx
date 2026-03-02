import './App.css'

function App() {

  const tracks = [
    {title: 'Musicfun soundtrack', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
    {title: 'Chill Vibes', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'}
  ]

  return (
    <div>
      <h1>Musicfun Player</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.url}>
            <div>{track.title}</div>
            <audio src={track.url} controls></audio>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
