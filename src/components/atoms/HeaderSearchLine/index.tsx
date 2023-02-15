import React from 'react'

import { Button, OutlinedInput } from '@mui/material'
import { styled } from '@mui/material/styles'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

const SearchContainer = styled('div')`
  display: flex;
  align-items: center;
  flex: 2;
  margin-left: 16px;
  margin-right: 16px;
`

const SearchIcon = styled(SearchRoundedIcon)`
  margin-left: 8px;
  margin-right: 8px;
`

const SearchInput = styled(OutlinedInput)`
  padding-left: 4px;
  padding-right: 4px;
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
          <Button
            size="small"
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        }
      />
    </SearchContainer>
  )
}
