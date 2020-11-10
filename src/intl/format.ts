import messages from './messages'

export const formatMessage = (id: string) => {
  const language = navigator.language.split('-')[0]

  return messages[language][id]
}
