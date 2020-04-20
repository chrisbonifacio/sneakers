import React, { useState, useContext } from "react"
import { sneakerContext } from "../../contexts/sneakerContext"
import styled from "styled-components"
import { Search } from "@styled-icons/evaicons-solid/Search"
import "../SearchBar/SearchBar.scss"

const SearchIcon = styled(Search)`
  color: grey;
  height: 25px;
  width: 25px;
`

export default function SearchBar() {
  const [search, setSearch] = useState("")
  const { setQuery } = useContext(sneakerContext)

  function submitHandler(e) {
    e.preventDefault()
    setQuery(prevState => ({ ...prevState, name: search }))
  }

  function changeHandler(e) {
    setSearch(e.target.value)
  }

  return (
    <div className="search-bar">
      <form onSubmit={submitHandler}>
        <label htmlFor="search">
          <SearchIcon />
        </label>

        <input
          type="text"
          name="search"
          placeholder="Search"
          value={search}
          onChange={changeHandler}
        />
      </form>
    </div>
  )
}
