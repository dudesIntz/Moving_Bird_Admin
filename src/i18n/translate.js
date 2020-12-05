import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

const localeTranslate = (id, value = {}) => (
  <FormattedMessage id={id} values={{ ...value }} />
);

export default localeTranslate;

// export function localeTranslateComponent({ children }) {
//   <FormattedMessage id={id} values={{ ...value }}>
//     {(props) => {
//       return children(props);
//     }}
//   </FormattedMessage>;
// }
