export const useTailwindTheme = (theme) => {
  if (theme.value === 'light') {
    document.documentElement.classList.toggle('dark') // toggle tailwind theme.
  }

  watchEffect(() => {
    const html = document.documentElement
    html.classList.remove('bg-light', 'bg-dark')
    html.classList.add(theme.value === 'light' ? 'bg-light' : 'bg-dark')
    document.documentElement.classList.toggle('dark') // toggle tailwind theme.
  })
}
