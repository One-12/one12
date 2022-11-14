import React from "react";
import { CssBaseline, Navbar, Button, Link, Text } from "@nextui-org/react";

import type { DocumentContext } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <header>
            <Navbar isBordered variant="sticky">
              <Navbar.Brand>
                <Text b color="inherit">
                  ONE 12
                </Text>
              </Navbar.Brand>
              <Navbar.Content>
                <Navbar.Link color="inherit" href="#">
                  Login
                </Navbar.Link>
                <Navbar.Item>
                  <Button auto flat as={Link} href="#">
                    Sign Up
                  </Button>
                </Navbar.Item>
              </Navbar.Content>
            </Navbar>
          </header>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
