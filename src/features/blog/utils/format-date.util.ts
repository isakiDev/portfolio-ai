export const formatDate = (date: Date) => {
  return Intl.DateTimeFormat('es-CL', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}