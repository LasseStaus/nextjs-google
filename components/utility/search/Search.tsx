import { useState } from 'react'

export interface ISearch {
  sampleTextProp: string
}

const Search: React.FC<ISearch> = ({ sampleTextProp }) => {
  const [searchTerm, setSearchTerm] = useState<string>()
  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={(e) => {
        e.preventDefault()
        alert(searchTerm)
      }}
    >
      <input
        type="text"
        className="rounded-full border-2 focus:border-blue-300 w-5/6 sm:w-96 h-12 px-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="space-x-3">
        <button type="submit" className="btn-primary">
          Google Search
        </button>
        <button type="submit" className="btn-primary">
          I&apos;m feeling lucky
        </button>
      </div>
    </form>
  )
}

export default Search
