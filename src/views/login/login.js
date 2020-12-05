import { Alert, Checkbox, Row, Col, Button, Field, Icon, Input } from "antd";
import React, { Component } from "react";
import localeTranslate from "../../i18n/translate";
import { FormattedMessage } from "react-intl";
class LoginScreen extends React.Component {
  state = {
    notice: "",
    autoLogin: true,
  };
  onSubmit = (err, values) => {
    console.log("value collected ->", {
      ...values,
      autoLogin: this.state.autoLogin,
    });
  };
  render() {
    console.log(this.props);
    return (
      <div class="container">
        <div class="row justify-center">
          <Col xs={4}>
            <form class="myForm" method="post">
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  class="form-control input-lg"
                  type="text"
                  name="text"
                  id="text"
                  placeholder="username"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  class="form-control input-lg"
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>
              <div class="form-group">
                {
                  <FormattedMessage id="login">
                    {(text) => (
                      <input
                        type="submit"
                        name="submit"
                        class="btn btn-default btn-lg"
                        value={text}
                      />
                    )}
                  </FormattedMessage>
                }
              </div>
            </form>
          </Col>
        </div>
      </div>
    );
  }
}

export default LoginScreen;
