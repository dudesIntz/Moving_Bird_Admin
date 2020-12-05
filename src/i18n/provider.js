import React, { Component, Fragment } from "react";
import { IntlProvider } from "react-intl";
import messages from "./messages";

import { locale } from "./locale";

const LocaleProvider = ({ children, locale = locale.english }) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {console.log(locale, messages)}
    {children}
  </IntlProvider>
);

export default LocaleProvider;
