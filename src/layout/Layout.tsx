import {LayoutProps} from "./Layout.props";
import styles from './Layout.module.css';
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {FunctionComponent} from "react";
import HeaderRightBlack  from '../helpers/icons/header-right-black.png';
import Airplane  from '../helpers/icons/airplane.png';
import FooterLeftBlack  from '../helpers/icons/footer-left-black.png';
import FooterRightBlack  from '../helpers/icons/footer-right-black.png';
import FooterLeftPrimary  from '../helpers/icons/footer-left-primary.png';
import FooterRightPrimary  from '../helpers/icons/footer-right-primary.png';
import BodyDescripLeftBottomBlack  from '../helpers/icons/body-descrip-left-bottom-black.png';
import BodyDescripLeftTopBlack  from '../helpers/icons/body-descrip-left-top-black.png';
import BodyDescripLeftTopPrimary from '../helpers/icons/body-descrip-left-top-primary.png';
import BodyDescripRightBottomBlack  from '../helpers/icons/body-descrip-right-bottom-black.png';
import BodyDescripRightTopBlack  from '../helpers/icons/body-descrip-right-top-black.png';
import BodyDescripRightTopPrimary from '../helpers/icons/body-descrip-right-top-primary.png';
import {Body} from "./Body/Body";

const Layout = ({ children }: LayoutProps): JSX.Element => {
            return (
                <div className={styles.wrapper}>
                    <Header className={styles.header}/>
                    <Body className={styles.body}>
                        {children}
                    </Body>
                    <Footer className={styles.footer} />
                    <img className={styles.helpIconRightBlackHeader} src={HeaderRightBlack} alt=""/>
                    <img className={styles.airplane} src={Airplane} alt=""/>
                    <img className={styles.bodyDescripLeftBottomBlack} src={BodyDescripLeftBottomBlack} alt=""/>
                    <img className={styles.bodyDescripLeftTopBlack} src={BodyDescripLeftTopBlack} alt=""/>
                    <img className={styles.bodyDescripLeftTopPrimary} src={BodyDescripLeftTopPrimary} alt=""/>
                    <img className={styles.bodyDescripRightBottomBlack} src={BodyDescripRightBottomBlack} alt=""/>
                    <img className={styles.bodyDescripRightTopBlack} src={BodyDescripRightTopBlack} alt=""/>
                    <img className={styles.bodyDescripRightTopPrimary} src={BodyDescripRightTopPrimary} alt=""/>
                    <img className={styles.helpIconLeftBlack} src={FooterLeftBlack} alt=""/>
                    <img className={styles.helpIconRightBlack} src={FooterRightBlack} alt=""/>
                    <img className={styles.helpIconLeftPrimary} src={FooterLeftPrimary} alt=""/>
                    <img className={styles.helpIconRightPrimary} src={FooterRightPrimary} alt=""/>
                </div>
            );
};

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
