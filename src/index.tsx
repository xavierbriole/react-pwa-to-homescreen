import * as React from 'react'
import useDidMountEffect from './hooks/useDidMountEffect'
import styles from './styles.module.css'
import CloseIcon from './icons/close'
import ShareIcon from './icons/share'
import { setCookie, getCookie } from './helpers/cookies'
import { isIphone } from './helpers/detect'
import { formatMessage } from './intl/format'

export const ReactPWAToHomeScreen = () => {
  const shouldHide =
    !isIphone() || getCookie('react-pwa-to-homescreen-hidden') === 'true'
  const [hidden, setHidden] = React.useState(shouldHide)

  useDidMountEffect(() => {
    if (hidden) {
      setCookie('react-pwa-to-homescreen-hidden', 'true', 30)
    }
  }, [hidden])

  const onCloseButtonClick = () => setHidden(true)

  return (
    <div
      className={
        styles[`react-pwa-to-homescreen-root${hidden ? '-hidden' : ''}`]
      }
    >
      <div className={styles['react-pwa-to-homescreen-popup']}>
        <div className={styles['react-pwa-to-homescreen-wrapper']}>
          <div className={styles['react-pwa-to-homescreen-labels-wrapper']}>
            <div className={styles['react-pwa-to-homescreen-label']}>
              {formatMessage('install')}
            </div>
            <div className={styles['react-pwa-to-homescreen-label']}>
              {formatMessage('tap')}
              <ShareIcon
                className={styles['react-pwa-to-homescreen-share-icon']}
              />
              {formatMessage('button')}
            </div>
          </div>
          <div className='react-pwa-to-homescreen-close-wrapper'>
            <CloseIcon
              className={styles['react-pwa-to-homescreen-close-icon']}
              onClick={onCloseButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
