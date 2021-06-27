import React, {useState,useEffect} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorksPage.module.sass';

const HowItWorksPage = (props) => {
    <div className={styles.header-top}>
        <div className={styles.container}>
            <div className={styles.d-flex}>
                <a href="tell:(877)355-3585" className={styles.call_us}>
                    <img className={styles.lazy} src="#"/>
                    "&nbsp;&nbsp;(877)355-3585"
                </a>
                <div className={styles.ml-auto}>
                    <div className={styles.position-relative}>
                        <div className={styles.d-sm-inline-block}>
                            <ul className={styles.list-inline}>
                                <li className={styles.list-inline-item}>
                                    <a className={styles.u-header__navbar-link} href="/login">Login</a>
                                </li>
                                <li className={styles.list-inline-item}>
                                    <a className={styles.u-header__navbar-link} href="/signup">Signup</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul className={styles.list-inline}>
                    <li className={styles.list-inline-item.d-none}>
                        <a className={styles.btn.btn-xs} href="/view/pages/shortlisted_domains.php">
                            <i className={styles.fas} style="color: red; line-height: 23"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

};

export default HowItWorksPage;