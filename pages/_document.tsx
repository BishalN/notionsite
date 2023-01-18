import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { IconContext } from '@react-icons/all-files'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link href='/static/favicons/favicon.ico' rel='shortcut icon' />
            <link href='/static/favicons/site.webmanifest' rel='manifest' />
            <link
              href='/static/favicons/apple-touch-icon.png'
              rel='apple-touch-icon'
              sizes='180x180'
            />
            <link
              href='/static/favicons/favicon-32x32.png'
              rel='icon'
              sizes='32x32'
              type='image/png'
            />
            <link
              href='/static/favicons/favicon-16x16.png'
              rel='icon'
              sizes='16x16'
              type='image/png'
            />
            <link
              color='#4a9885'
              href='/static/favicons/safari-pinned-tab.svg'
              rel='mask-icon'
            />
            <meta
              content='/static/favicons/browserconfig.xml'
              name='msapplication-config'
            />
            <meta content='14d2e73487fa6c71' name='yandex-verification' />
            <meta
              content='eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw'
              name='google-site-verification'
            />
            <meta
              content='max-snippet:-1, max-image-preview:large, max-video-preview:-1'
              name='robots'
            />
          </Head>

          <body>
            <script
              dangerouslySetInnerHTML={{
                __html: `
/** Inlined version of noflash.js from use-dark-mode */
;(function () {
  var storageKey = 'darkMode'
  var classNameDark = 'dark-mode'
  var classNameLight = 'light-mode'
  function setClassOnDocumentBody(darkMode) {
    document.body.classList.add(darkMode ? classNameDark : classNameLight)
    document.body.classList.remove(darkMode ? classNameLight : classNameDark)
  }
  var preferDarkQuery = '(prefers-color-scheme: dark)'
  var mql = window.matchMedia(preferDarkQuery)
  var supportsColorSchemeQuery = mql.media === preferDarkQuery
  var localStorageTheme = null
  try {
    localStorageTheme = localStorage.getItem(storageKey)
  } catch (err) {}
  var localStorageExists = localStorageTheme !== null
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme)
  }
  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentBody(localStorageTheme)
  } else if (supportsColorSchemeQuery) {
    // source of truth from system
    setClassOnDocumentBody(mql.matches)
    localStorage.setItem(storageKey, mql.matches)
  } else {
    // source of truth from document.body
    var isDarkMode = document.body.classList.contains(classNameDark)
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
  }
})();
`
              }}
            />
            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
