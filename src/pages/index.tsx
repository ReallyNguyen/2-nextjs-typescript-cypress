import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
      <h1>Home</h1>
      <Link href='/about'>About</Link>

      <form>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
        <input type="radio" id="html" name="fav-language" value="radio1"></input>
      </form>

      <ul>
        <li className='selected'>Apple</li>
        <li className='selected'>Orange</li>
        <li className='selected'>Pear</li>
      </ul>

      <div className='school'>
        Welcome to BCIT
      </div>

      <div className='test' style={{textDecoration: 'line-through', color: 'rgb(217, 217, 217'}}>
        Testing area
      </div>

    </main>
  )
}
