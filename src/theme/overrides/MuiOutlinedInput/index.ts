export default {
  styleOverrides: {
    root: ({ ownerState }: any) => {
      switch (ownerState.multiline) {
        case true: return {
          borderRadius: 16,
        }
        default:
          return {
            borderRadius: 32
          }
      }
    },
  }
}
