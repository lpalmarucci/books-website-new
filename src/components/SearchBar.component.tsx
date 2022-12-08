import React from 'react'
import {Box, Fab} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {styled} from "@mui/system";
import {grey} from "@mui/material/colors";
import InputUnstyled, {inputUnstyledClasses, InputUnstyledProps} from "@mui/base/InputUnstyled";


const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  border-radius: 12px;
  color: ${grey[500]}
  background: '#242424'
  border: 1px solid rgba(220,220,220, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(250px, 20rem, 600px);

  &.${inputUnstyledClasses.focused} {
    border-color: rgba(220,220,220, 0.4);
    outline: 2px solid rgba(220,220,220, 0.4);
  }

  &:hover {
    border-color: rgba(220,220,220, 0.8)
  }
`,
);

const StyledInputElement = styled('input')(
  ({ theme }) => `
  font-size: 1rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  flex-grow: 1;
  color: white;
  background: inherit;
  border: 1px solid rgba(220,220,220, 0.4);
  border-radius: inherit;
  padding: 12px 12px;
  outline: 0;
`,
);

const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const { slots, ...other } = props;
  return (
    <InputUnstyled
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        ...slots,
      }}
      placeholder="Inserisci il titolo di un libro"
      {...other}
      ref={ref}
    />
  );
});

const SearchBar = () => {
  // const [q, setQ] = React.useState<string>("");
  //
  // const handleChangeQ = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setQ(e.target.value);
  // };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
      onSubmit={(e) => e.preventDefault()}
    >
      <CustomInput/>
      <Fab variant="extended" sx={{ width: "16ch" }}>
        <SearchIcon sx={{ mr: 1 }} />
        Search
      </Fab>
    </Box>
  )
}
export default SearchBar