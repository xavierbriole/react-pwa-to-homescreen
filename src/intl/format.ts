import messages from './messages'

export const formatMessage = (id: string) => {
  const language = navigator.language.split('-')[0]

  if (messages[language] === undefined) {
    return messages.en[id]
  }

  return messages[language][id]
}
