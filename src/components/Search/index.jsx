import React, { useContext } from 'react'
import styles from './Search.module.scss'
import { SearchContext } from '../../App'
import debounce from 'lodash.debounce'

const Search = () => {

  const [value, setValue] = React.useState('')
  const { searchValue, setSearchValue } = useContext(SearchContext)
  const inputRef = React.useRef()



  const onClickClear = () => {
    setSearchValue('')
    setValue('')
    inputRef.current.focus()
  }

  const onChangeInput = event => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str)
    },350),
    [],
  )

  React.useEffect(() => {
    document.querySelector('input')
  }, [])

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        height="24"
        viewBox="0 0 512 512"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <path
          d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
          className={styles.icon1}
        />
        <line
          className={styles.icon2}
          x1="338.29"
          x2="448"
          y1="338.29"
          y2="448"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  )
}

export default Search
