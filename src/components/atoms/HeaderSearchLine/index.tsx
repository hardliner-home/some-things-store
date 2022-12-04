import React from 'react'

import { Button, OutlinedInput } from '@mui/material'
import { styled } from '@mui/material/styles'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

const SearchContainer = styled('div')`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

const SearchIcon = styled(SearchRoundedIcon)`
  margin-left: 8px;
  margin-right: 8px;
`

const SearchInput = styled(OutlinedInput)`
  padding-left: 0;
  padding-right: 4px;
  border-radius: 10px;
`

const SearchButton = styled(Button)`
`

export default function HeaderSearchLine() {

  return (
    <SearchContainer>
      <SearchInput
        size="small"
        fullWidth
        placeholder="Find something..."
        startAdornment={<SearchIcon fontSize="small" />}
        endAdornment={
          <SearchButton
            size="small"
            variant="contained"
            color="primary"
          >
            Search
          </SearchButton>
        }
      />
    </SearchContainer>
  )
}
