import React from 'react';
import App, { AppContext  } from 'next/app';

/**
 * すべてのページコンポーネントで共通する処理を記述する。
 */
export default class extends App {
    static async getInitialProps({ Component, ctx }: AppContext ) {
        let pageProps = {};
        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps }
    }

    render(){
        const { Component, pageProps } = this.props;

        return (
            <Component {...pageProps} />
        );
    }
}